const dishesPart2 = [
    {
        id: 31,
        name: "Бефстроганов с пюре",
        category: "Говядина",
        time: 45,
        braces: true,
        ingredients: ["Говядина", "Лук", "Сметана", "Картофель"],
        image: "images/dishes/beefstroganoff.jpg"
    },
    {
        id: 32,
        name: "Гуляш из говядины",
        category: "Говядина",
        time: 60,
        braces: true,
        ingredients: ["Говядина", "Лук", "Томатная паста"],
        image: "images/dishes/goulash.jpg"
    },
    {
        id: 33,
        name: "Тефтели в томатном соусе",
        category: "Говядина",
        time: 45,
        braces: true,
        ingredients: ["Фарш", "Рис", "Томатный соус"],
        image: "images/dishes/meatballs_tomato.jpg"
    },
    {
        id: 34,
        name: "Ленивые голубцы",
        category: "Говядина",
        time: 50,
        braces: true,
        ingredients: ["Фарш", "Капуста", "Рис"],
        image: "images/dishes/lazy_cabbage_rolls.jpg"
    },
    {
        id: 35,
        name: "Фрикадельки в сливочном соусе",
        category: "Говядина",
        time: 40,
        braces: true,
        ingredients: ["Фарш", "Сливки", "Лук"],
        image: "images/dishes/cream_meatballs.jpg"
    },
    {
        id: 36,
        name: "Свинина в сметанном соусе",
        category: "Свинина",
        time: 45,
        braces: true,
        ingredients: ["Свинина", "Сметана", "Лук"],
        image: "images/dishes/pork_sourcream.jpg"
    },
    {
        id: 37,
        name: "Жаркое по-домашнему",
        category: "Свинина",
        time: 60,
        braces: true,
        ingredients: ["Свинина", "Картофель", "Морковь"],
        image: "images/dishes/roast.jpg"
    },
    {
        id: 38,
        name: "Свинина с грибами в сливках",
        category: "Свинина",
        time: 40,
        braces: true,
        ingredients: ["Свинина", "Шампиньоны", "Сливки"],
        image: "images/dishes/pork_mushrooms.jpg"
    },
    {
        id: 39,
        name: "Домашние котлеты",
        category: "Свинина",
        time: 40,
        braces: true,
        ingredients: ["Фарш", "Лук", "Яйцо"],
        image: "images/dishes/homemade_cutlets.jpg"
    },
    {
        id: 40,
        name: "Фарш с картофельным пюре",
        category: "Свинина",
        time: 35,
        braces: true,
        ingredients: ["Фарш", "Картофель", "Лук"],
        image: "images/dishes/minced_meat_mash.jpg"
    },
    {
        id: 41,
        name: "Удон с курицей",
        category: "Азиатская кухня",
        time: 30,
        braces: true,
        ingredients: ["Удон", "Курица", "Соевый соус"],
        image: "images/dishes/udon_chicken.jpg"
    },
    {
        id: 42,
        name: "Фунчоза с курицей",
        category: "Азиатская кухня",
        time: 30,
        braces: true,
        ingredients: ["Фунчоза", "Курица", "Овощи"],
        image: "images/dishes/funchoza.jpg"
    },
    {
        id: 43,
        name: "Жареный рис с курицей",
        category: "Азиатская кухня",
        time: 30,
        braces: true,
        ingredients: ["Рис", "Курица", "Яйцо"],
        image: "images/dishes/fried_rice.jpg"
    },
    {
        id: 44,
        name: "Лапша с овощами",
        category: "Азиатская кухня",
        time: 25,
        braces: true,
        ingredients: ["Лапша", "Овощи", "Соевый соус"],
        image: "images/dishes/noodles_vegetables.jpg"
    },
    {
        id: 45,
        name: "Курица в кисло-сладком соусе",
        category: "Азиатская кухня",
        time: 35,
        braces: true,
        ingredients: ["Курица", "Соус", "Перец"],
        image: "images/dishes/sweet_sour_chicken.jpg"
    },
    {
        id: 46,
        name: "Минтай в сливочном соусе",
        category: "Рыба",
        time: 35,
        braces: true,
        ingredients: ["Минтай", "Сливки", "Лук"],
        image: "images/dishes/pollock_cream.jpg"
    },
    {
        id: 47,
        name: "Запеченная горбуша",
        category: "Рыба",
        time: 40,
        braces: true,
        ingredients: ["Горбуша", "Лимон", "Специи"],
        image: "images/dishes/pink_salmon.jpg"
    },
    {
        id: 48,
        name: "Рыбные котлеты",
        category: "Рыба",
        time: 35,
        braces: true,
        ingredients: ["Рыбный фарш", "Лук", "Яйцо"],
        image: "images/dishes/fish_cutlets.jpg"
    },
    {
        id: 49,
        name: "Треска с картофельным пюре",
        category: "Рыба",
        time: 35,
        braces: true,
        ingredients: ["Треска", "Картофель"],
        image: "images/dishes/cod_mash.jpg"
    },
    {
        id: 50,
        name: "Семга в сливочном соусе",
        category: "Рыба",
        time: 35,
        braces: true,
        ingredients: ["Семга", "Сливки"],
        image: "images/dishes/salmon_cream.jpg"
    },
    {
        id: 51,
        name: "Гречка с курицей",
        category: "Крупы",
        time: 35,
        braces: true,
        ingredients: ["Гречка", "Курица"],
        image: "images/dishes/buckwheat_chicken.jpg"
    },
    {
        id: 52,
        name: "Гречка с гуляшом",
        category: "Крупы",
        time: 45,
        braces: true,
        ingredients: ["Гречка", "Говядина"],
        image: "images/dishes/buckwheat_goulash.jpg"
    },
    {
        id: 53,
        name: "Булгур с курицей",
        category: "Крупы",
        time: 30,
        braces: true,
        ingredients: ["Булгур", "Курица"],
        image: "images/dishes/bulgur_chicken.jpg"
    },
    {
        id: 54,
        name: "Кускус с овощами",
        category: "Крупы",
        time: 20,
        braces: true,
        ingredients: ["Кускус", "Овощи"],
        image: "images/dishes/couscous.jpg"
    },
    {
        id: 55,
        name: "Перловка с курицей",
        category: "Крупы",
        time: 50,
        braces: true,
        ingredients: ["Перловка", "Курица"],
        image: "images/dishes/barley_chicken.jpg"
    },
    {
        id: 56,
        name: "Творожная запеканка",
        category: "Завтрак",
        time: 45,
        braces: true,
        ingredients: ["Творог", "Яйца", "Сахар"],
        image: "images/dishes/cottage_casserole.jpg"
    },
    {
        id: 57,
        name: "Блины с творогом",
        category: "Завтрак",
        time: 40,
        braces: true,
        ingredients: ["Мука", "Творог", "Яйца"],
        image: "images/dishes/crepes_cottage.jpg"
    },
    {
        id: 58,
        name: "Ленивые вареники",
        category: "Завтрак",
        time: 20,
        braces: true,
        ingredients: ["Творог", "Мука", "Яйца"],
        image: "images/dishes/lazy_dumplings.jpg"
    },
    {
        id: 59,
        name: "Молочная рисовая каша",
        category: "Завтрак",
        time: 30,
        braces: true,
        ingredients: ["Рис", "Молоко", "Сахар"],
        image: "images/dishes/rice_porridge.jpg"
    },
    {
        id: 60,
        name: "Овсяная каша с бананом",
        category: "Завтрак",
        time: 10,
        braces: true,
        ingredients: ["Овсяные хлопья", "Молоко", "Банан"],
        image: "images/dishes/oatmeal_banana.jpg"
    }
];