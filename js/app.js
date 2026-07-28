const container = document.getElementById("dishes");
const refreshButton = document.getElementById("refreshButton");
const sendButton = document.getElementById("sendButton");
function showToast(message) {

    let toast = document.querySelector(".toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toast.hideTimer);

    toast.hideTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}



function renderDishes() {

    container.innerHTML = "";

    const randomDishes = getRandomDishes(8);

    randomDishes.forEach((dish, index) => {

        const card = document.createElement("div");

        card.className = "dish-card";

        card.style.animationDelay = `${index * 0.08}s`;

        card.innerHTML = `

            <div class="card-inner">

                <div class="card-front">

                    <img src="${dish.image}" alt="${dish.name}">

                    <div class="card-info">

                        <div>

                            <h2>${dish.name}</h2>

                            <p class="time">
                                ⏱ ${dish.time} минут
                            </p>

                        </div>

                        <button class="view-btn">
                            Посмотреть рецепт
                        </button>

                    </div>

                </div>

                <div class="card-back">
               

    <button class="back-btn">
        ← Назад
    </button>

    <h2>${dish.name}</h2>

                   

                    <div class="section-title">
                        🛒 Ингредиенты
                    </div>

                    <ul class="ingredients">

                        ${dish.ingredients
                            .map(item => `<li>• ${item}</li>`)
                            .join("")}

                    </ul>

                    <div class="section-title">

                        👨‍🍳 Приготовление

                    </div>

                    <div class="recipe">

                        ${
                            dish.steps
                            ? dish.steps
                                .map(step => `<p>${step}</p>`)
                                .join("")
                            : "<p>Рецепт скоро будет добавлен ❤️</p>"
                        }

                    </div>

                    <button class="cook-btn">

                        ❤️ Готовим сегодня

                    </button>

                </div>

            </div>

        `;

const viewButton = card.querySelector(".view-btn");
const cookButton = card.querySelector(".cook-btn");
const backButton = card.querySelector(".back-btn");

viewButton.addEventListener("click", () => {
backButton.addEventListener("click", () => {

    card.classList.remove("flipped");

});

    card.classList.add("flipped");

});
cookButton.addEventListener("click", async () => {

    try {

        const response = await fetch("https://dinnerforherserver.onrender.com/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dish)
        });

        const result = await response.json();

        if (result.success) {

    showToast("❤️ Рецепт успешно отправлен в Telegram!");

} else {

    showToast("Не удалось отправить сообщение.");

}

    } catch (error) {

        console.error(error);

        showToast("Ошибка подключения к серверу.");

    }

});

container.appendChild(card);
    });

}
refreshButton.addEventListener("click", renderDishes);

renderDishes();

