const container = document.getElementById("dishes");
const refreshButton = document.getElementById("refreshButton");
const sendButton = document.getElementById("sendButton");

button:disabled{
    opacity:.45;
    cursor:not-allowed;
    transform:none;
}

let selectedDish = null;

function renderDishes() {

    container.innerHTML = "";

    const randomDishes = getRandomDishes(8);

    randomDishes.forEach(dish => {

        const card = document.createElement("div");

        card.className = "dish-card";
        card.style.animationDelay = `${container.children.length * 0.08}s`;

        card.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">

            <div class="dish-content">
                <h2>${dish.name}</h2>

                <p>⏱ ${dish.time} мин.</p>

                <p>${dish.ingredients.join(", ")}</p>

                <button class="choose-btn">
                    ❤️ Выбрать
                </button>
            </div>
        `;

        const button = card.querySelector(".choose-btn");

button.addEventListener("click", () => {

    document.querySelectorAll(".dish-card").forEach(c => {
        c.classList.remove("selected");
    });

    card.classList.add("selected");

    selectedDish = dish;

    sendButton.disabled = false;
    sendButton.textContent = "❤️ Отправить выбор";

});

        container.appendChild(card);

    });

}

refreshButton.addEventListener("click", renderDishes);

renderDishes();

sendButton.addEventListener("click", async () => {

    if (!selectedDish) {
        return;
    }

    try {

        const response = await fetch("http://localhost:3000/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedDish)
        });

        const result = await response.json();

        if (result.success) {

            alert("❤️ Выбор успешно отправлен в Telegram!");

        } else {

            alert("Не удалось отправить сообщение.");

        }

    } catch (error) {

        console.error(error);

        alert("Ошибка подключения к серверу.");

    }

});