require("dotenv").config();

const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");

// --------------------
// НАСТРОЙКИ
// --------------------

const API_KEY = process.env.PEXELS_API_KEY;

if (!API_KEY) {
    console.log("❌ Не найден PEXELS_API_KEY в .env");
    process.exit();
}

// Корень сайта
const PROJECT_ROOT = path.join(__dirname, "..");

// Куда сохранять изображения
const IMAGES_FOLDER = path.join(
    PROJECT_ROOT,
    "images",
    "dishes"
);

// Где лежат блюда
const DATA_FOLDER = path.join(
    PROJECT_ROOT,
    "js",
    "data"
);

fs.ensureDirSync(IMAGES_FOLDER);

const dishFiles = [
    "dishes_part1.js",
    "dishes_part2.js",
    "dishes_part3.js",
    "dishes_part4.js",
    "dishes_part5.js"
];

const dishes = [];

console.log("📖 Читаю блюда...");
// --------------------
// Загрузка всех блюд
// --------------------

for (const file of dishFiles) {

    const fullPath = path.join(DATA_FOLDER, file);

    let content = fs.readFileSync(fullPath, "utf8");

    // Получаем имя массива
    const match = content.match(/const\s+(dishesPart\d+)/);

    if (!match) {
        console.log(`❌ Не удалось прочитать ${file}`);
        continue;
    }

    const variableName = match[1];

    // Превращаем
    // const dishesPart1 = [...]
    // в
    // dishes = [...]
    content = content.replace(
        new RegExp(`const\\s+${variableName}`),
        variableName
    );

    try {

        const loader = new Function(`
            ${content}
            return ${variableName};
        `);

        const result = loader();

        dishes.push(...result);

        console.log(`✅ ${file}: ${result.length} блюд`);

    } catch (err) {

        console.log(`❌ Ошибка в ${file}`);
        console.log(err.message);

    }

}

console.log("");
console.log(`🍽 Всего найдено блюд: ${dishes.length}`);
console.log("");
// --------------------
// Поиск изображения
// --------------------

async function searchPhoto(query) {

    try {

        const response = await axios.get(
            "https://api.pexels.com/v1/search",
            {
                headers: {
                    Authorization: API_KEY
                },
                params: {
                    query,
                    per_page: 1,
                    orientation: "landscape"
                }
            }
        );

        if (
            response.data.photos &&
            response.data.photos.length > 0
        ) {
            return response.data.photos[0].src.large2x;
        }

        return null;

    } catch (err) {

        console.log(`❌ Ошибка поиска "${query}"`);

        return null;

    }

}

// --------------------
// Скачивание файла
// --------------------

async function downloadImage(url, outputPath) {

    const response = await axios({
        url,
        method: "GET",
        responseType: "stream"
    });

    await new Promise((resolve, reject) => {

        const stream = fs.createWriteStream(outputPath);

        response.data.pipe(stream);

        stream.on("finish", resolve);
        stream.on("error", reject);

    });

}
// --------------------
// Поиск изображения
// --------------------

const searchMap = {
    "Спагетти Карбонара": "spaghetti carbonara",
    "Спагетти Болоньезе": "spaghetti bolognese",
    "Паста Альфредо": "chicken alfredo pasta",
    "Лазанья": "lasagna",
    "Пельмени": "dumplings",
    "Манты": "manti",
    "Сырники": "syrniki"
};

async function main() {

    let success = 0;

    let failed = [];

    for (let i = 0; i < dishes.length; i++) {

        const dish = dishes[i];

        const query = searchMap[dish.name] || dish.name;

        const fileName = path.basename(dish.image);

        const savePath = path.join(IMAGES_FOLDER, fileName);

        if (fs.existsSync(savePath)) {
            console.log(`⏩ ${fileName} уже существует`);
            continue;
        }

        console.log(`🔍 ${i + 1}/${dishes.length}: ${query}`);

        const photo = await searchPhoto(query);

        if (!photo) {

            failed.push(dish.name);

            console.log(`❌ Не найдено`);

            continue;

        }

        try {

            await downloadImage(photo, savePath);

            success++;

            console.log(`✅ ${fileName}`);

        } catch (e) {

            failed.push(dish.name);

            console.log(`❌ Ошибка скачивания`);

        }

        await new Promise(r => setTimeout(r, 300));

    }

    console.log("");
    console.log("========== ГОТОВО ==========");
    console.log(`Скачано: ${success}`);
    console.log(`Не найдено: ${failed.length}`);

    if (failed.length) {

        console.log("");

        failed.forEach(x => console.log("• " + x));

    }

}

main().catch(console.error);