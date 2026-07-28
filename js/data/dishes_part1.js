const dishesPart1 = [
    {
        id: 1,
        name: "Спагетти Карбонара",
        category: "Паста",
        time: 25,
        braces: true,
        ingredients: ["Спагетти","Бекон","Яйца","Пармезан"],
        image: "images/dishes/carbonara.jpg"
    },
    {
        id: 2,
        name: "Спагетти Болоньезе",
        category: "Паста",
        time: 40,
        braces: true,
        ingredients: ["Спагетти","Фарш","Томатный соус","Лук"],
        image: "images/dishes/bolognese.jpg"
    },
    {
        id: 3,
        name: "Паста Альфредо",
        category: "Паста",
        time: 30,
        braces: true,
        ingredients: ["Фетучини","Курица","Сливки","Пармезан"],
        image: "images/dishes/alfredo.jpg"
    },
    {
        id: 4,
        name: "Паста с грибами в сливочном соусе",
        category: "Паста",
        time: 30,
        braces: true,
        ingredients: ["Паста","Шампиньоны","Сливки"],
        image: "images/dishes/mushroom_pasta.jpg"
    },
    {
        id: 5,
        name: "Макароны с сыром",
        category: "Паста",
        time: 20,
        braces: true,
        ingredients: ["Макароны","Сыр","Молоко"],
        image: "images/dishes/mac_cheese.jpg"
    },
    {
        id: 6,
        name: "Лазанья",
        category: "Паста",
        time: 60,
        braces: true,
        ingredients: ["Листы лазаньи","Фарш","Сыр"],
        image: "images/dishes/lasagna.jpg"
    },
    {
        id: 7,
        name: "Куриное филе в сливочном соусе",
        category: "Курица",
        time: 30,
        braces: true,
        ingredients: ["Куриное филе","Сливки","Чеснок"],
        image: "images/dishes/chicken_cream.jpg"
    },
    {
        id: 8,
        name: "Курица терияки с рисом",
        category: "Курица",
        time: 35,
        braces: true,
        ingredients: ["Курица","Рис","Соус терияки"],
        image: "images/dishes/teriyaki.jpg"
    },
    {
        id: 9,
        name: "Куриные котлеты",
        category: "Курица",
        time: 35,
        braces: true,
        ingredients: ["Куриный фарш","Яйцо","Лук"],
        image: "images/dishes/chicken_cutlets.jpg"
    },
    {
        id: 10,
        name: "Куриные тефтели",
        category: "Курица",
        time: 40,
        braces: true,
        ingredients: ["Куриный фарш","Рис","Лук"],
        image: "images/dishes/chicken_meatballs.jpg"
    },
    {
        id: 11,
        name: "Тушеная курица с овощами",
        category: "Курица",
        time: 45,
        braces: true,
        ingredients: ["Курица","Морковь","Лук","Кабачок"],
        image: "images/dishes/stewed_chicken.jpg"
    },
    {
        id: 12,
        name: "Курица в сметанном соусе",
        category: "Курица",
        time: 35,
        braces: true,
        ingredients: ["Курица","Сметана","Лук"],
        image: "images/dishes/chicken_sourcream.jpg"
    },
    {
        id: 13,
        name: "Курица с картофельным пюре",
        category: "Курица",
        time: 40,
        braces: true,
        ingredients: ["Курица","Картофель","Молоко"],
        image: "images/dishes/chicken_mash.jpg"
    },
    {
        id: 14,
        name: "Плов с курицей",
        category: "Рис",
        time: 60,
        braces: true,
        ingredients: ["Рис","Курица","Морковь","Лук"],
        image: "images/dishes/chicken_pilaf.jpg"
    },
    {
        id: 15,
        name: "Рис с овощами",
        category: "Рис",
        time: 25,
        braces: true,
        ingredients: ["Рис","Овощная смесь"],
        image: "images/dishes/rice_vegetables.jpg"
    },
    {
        id: 16,
        name: "Ризотто с грибами",
        category: "Рис",
        time: 40,
        braces: true,
        ingredients: ["Рис","Грибы","Пармезан"],
        image: "images/dishes/risotto.jpg"
    },
    {
        id: 17,
        name: "Рис с курицей в сливочном соусе",
        category: "Рис",
        time: 35,
        braces: true,
        ingredients: ["Рис","Курица","Сливки"],
        image: "images/dishes/rice_chicken.jpg"
    },
    {
        id: 18,
        name: "Картофельное пюре с котлетами",
        category: "Картофель",
        time: 40,
        braces: true,
        ingredients: ["Картофель","Фарш"],
        image: "images/dishes/mash_cutlets.jpg"
    },
    {
        id: 19,
        name: "Картофельная запеканка",
        category: "Картофель",
        time: 55,
        braces: true,
        ingredients: ["Картофель","Фарш","Сыр"],
        image: "images/dishes/potato_casserole.jpg"
    },
    {
        id: 20,
        name: "Тушеный картофель с курицей",
        category: "Картофель",
        time: 45,
        braces: true,
        ingredients: ["Картофель","Курица","Лук"],
        image: "images/dishes/stewed_potatoes.jpg"
    },
    {
        id: 21,
        name: "Картофельное пюре с гуляшом",
        category: "Картофель",
        time: 60,
        braces: true,
        ingredients: ["Картофель","Говядина","Лук"],
        image: "images/dishes/mash_goulash.jpg"
    },
    {
        id: 22,
        name: "Пельмени",
        category: "Пельмени",
        time: 15,
        braces: true,
        ingredients: ["Пельмени","Сметана"],
        image: "images/dishes/pelmeni.jpg"
    },
    {
        id: 23,
        name: "Вареники с картошкой",
        category: "Пельмени",
        time: 20,
        braces: true,
        ingredients: ["Вареники","Сметана"],
        image: "images/dishes/vareniki.jpg"
    },
    {
        id: 24,
        name: "Манты",
        category: "Пельмени",
        time: 70,
        braces: true,
        ingredients: ["Тесто","Фарш","Лук"],
        image: "images/dishes/manti.jpg"
    },
    {
        id: 25,
        name: "Куриный суп с лапшой",
        category: "Суп",
        time: 50,
        braces: true,
        ingredients: ["Курица","Лапша","Морковь"],
        image: "images/dishes/chicken_soup.jpg"
    },
    {
        id: 26,
        name: "Сырный суп",
        category: "Суп",
        time: 35,
        braces: true,
        ingredients: ["Плавленый сыр","Картофель"],
        image: "images/dishes/cheese_soup.jpg"
    },
    {
        id: 27,
        name: "Крем-суп из шампиньонов",
        category: "Суп",
        time: 40,
        braces: true,
        ingredients: ["Шампиньоны","Сливки"],
        image: "images/dishes/mushroom_soup.jpg"
    },
    {
        id: 28,
        name: "Омлет с сыром",
        category: "Завтрак",
        time: 10,
        braces: true,
        ingredients: ["Яйца","Сыр","Молоко"],
        image: "images/dishes/omelette.jpg"
    },
    {
        id: 29,
        name: "Омлет с ветчиной",
        category: "Завтрак",
        time: 15,
        braces: true,
        ingredients: ["Яйца","Ветчина","Сыр"],
        image: "images/dishes/ham_omelette.jpg"
    },
    {
        id: 30,
        name: "Сырники",
        category: "Завтрак",
        time: 25,
        braces: true,
        ingredients: ["Творог","Яйца","Мука"],
        image: "images/dishes/syrniki.jpg"
    }
];