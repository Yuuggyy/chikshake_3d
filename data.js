const RESTAURANT_DATA = {
  "slug": "chikshake",
  "name": "Chik Shake",
  "emoji": "🍗",
  "adminPassword": "chikshake2025",
  "parametres": {
    "nom_restaurant": "Chik Shake",
    "adresse": "Galleria Mall, 3ème étage, Avenue Colonel Lukasa, Gombe, Kinshasa",
    "telephone": "+243 810 420 001",
    "whatsapp": "243810420001",
    "horaires": "Tous les jours 10h00 - 22h00"
  },
  "categories": [
    {
      "id": "cat_0",
      "nom": "Poulet Croustillant",
      "emoji": "🍽️",
      "ordre": 0,
      "actif": true
    },
    {
      "id": "cat_1",
      "nom": "Burgers",
      "emoji": "🍽️",
      "ordre": 1,
      "actif": true
    },
    {
      "id": "cat_2",
      "nom": "Milkshakes",
      "emoji": "🍽️",
      "ordre": 2,
      "actif": true
    },
    {
      "id": "cat_3",
      "nom": "Combos",
      "emoji": "🍽️",
      "ordre": 3,
      "actif": true
    },
    {
      "id": "cat_4",
      "nom": "Accompagnements",
      "emoji": "🍽️",
      "ordre": 4,
      "actif": true
    },
    {
      "id": "cat_5",
      "nom": "Boissons",
      "emoji": "🍽️",
      "ordre": 5,
      "actif": true
    }
  ],
  "produits": [
    {
      "id": "prod_0",
      "categorie_id": "cat_0",
      "nom": "Crispy Chicken Box 4pcs",
      "description": "4 morceaux poulet croustillant, epices uniques",
      "prix": 10.0,
      "image_url": null,
      "disponible": true,
      "ordre": 0
    },
    {
      "id": "prod_1",
      "categorie_id": "cat_0",
      "nom": "Crispy Chicken Box 8pcs",
      "description": "8 morceaux poulet croustillant",
      "prix": 18.0,
      "image_url": null,
      "disponible": true,
      "ordre": 1
    },
    {
      "id": "prod_2",
      "categorie_id": "cat_0",
      "nom": "Crispy Chicken Sandwich",
      "description": "Filet croustillant, sauce maison, pain brioche",
      "prix": 9.0,
      "image_url": null,
      "disponible": true,
      "ordre": 2
    },
    {
      "id": "prod_3",
      "categorie_id": "cat_0",
      "nom": "Ailes Croustillantes x6",
      "description": "Ailes epicees, sauce buffalo ou ranch",
      "prix": 10.0,
      "image_url": null,
      "disponible": true,
      "ordre": 3
    },
    {
      "id": "prod_4",
      "categorie_id": "cat_0",
      "nom": "Ailes Croustillantes x12",
      "description": "Grand format ailes croustillantes",
      "prix": 18.0,
      "image_url": null,
      "disponible": true,
      "ordre": 4
    },
    {
      "id": "prod_5",
      "categorie_id": "cat_0",
      "nom": "Crispy Strips x5",
      "description": "Lanieres de poulet croustillantes",
      "prix": 9.0,
      "image_url": null,
      "disponible": true,
      "ordre": 5
    },
    {
      "id": "prod_6",
      "categorie_id": "cat_1",
      "nom": "Cheese Burger Chicken",
      "description": "Filet poulet croustillant, cheddar, sauce maison",
      "prix": 9.0,
      "image_url": null,
      "disponible": true,
      "ordre": 6
    },
    {
      "id": "prod_7",
      "categorie_id": "cat_1",
      "nom": "Cheese Burger Beef",
      "description": "Steak boeuf, double cheddar, cornichons",
      "prix": 10.0,
      "image_url": null,
      "disponible": true,
      "ordre": 7
    },
    {
      "id": "prod_8",
      "categorie_id": "cat_1",
      "nom": "Double Smash Burger",
      "description": "Double patty boeuf, sauce signature Chic Shake",
      "prix": 13.0,
      "image_url": null,
      "disponible": true,
      "ordre": 8
    },
    {
      "id": "prod_9",
      "categorie_id": "cat_1",
      "nom": "Spicy Burger",
      "description": "Steak epice, jalapeños, sauce piquante",
      "prix": 9.5,
      "image_url": null,
      "disponible": true,
      "ordre": 9
    },
    {
      "id": "prod_10",
      "categorie_id": "cat_2",
      "nom": "Milkshake Vanille",
      "description": "Lait, glace vanille, creme fouettee",
      "prix": 6.0,
      "image_url": null,
      "disponible": true,
      "ordre": 10
    },
    {
      "id": "prod_11",
      "categorie_id": "cat_2",
      "nom": "Milkshake Chocolat",
      "description": "Lait, glace chocolat, sauce chocolat",
      "prix": 6.0,
      "image_url": null,
      "disponible": true,
      "ordre": 11
    },
    {
      "id": "prod_12",
      "categorie_id": "cat_2",
      "nom": "Milkshake Fraise",
      "description": "Lait, glace fraise, coulis fraise",
      "prix": 6.0,
      "image_url": null,
      "disponible": true,
      "ordre": 12
    },
    {
      "id": "prod_13",
      "categorie_id": "cat_2",
      "nom": "Milkshake Oreo",
      "description": "Lait, glace vanille, biscuits Oreo ecrases",
      "prix": 7.0,
      "image_url": null,
      "disponible": true,
      "ordre": 13
    },
    {
      "id": "prod_14",
      "categorie_id": "cat_2",
      "nom": "Milkshake Caramel Beurre Sale",
      "description": "Lait, glace vanille, caramel beurre sale",
      "prix": 7.0,
      "image_url": null,
      "disponible": true,
      "ordre": 14
    },
    {
      "id": "prod_15",
      "categorie_id": "cat_3",
      "nom": "Combo Crispy 4pcs",
      "description": "Box 4pcs + frites + boisson",
      "prix": 15.0,
      "image_url": null,
      "disponible": true,
      "ordre": 15
    },
    {
      "id": "prod_16",
      "categorie_id": "cat_3",
      "nom": "Combo Burger + Shake",
      "description": "Burger au choix + milkshake au choix",
      "prix": 16.0,
      "image_url": null,
      "disponible": true,
      "ordre": 16
    },
    {
      "id": "prod_17",
      "categorie_id": "cat_3",
      "nom": "Combo Famille",
      "description": "Box 12pcs + frittes x2 + boissons x4",
      "prix": 35.0,
      "image_url": null,
      "disponible": true,
      "ordre": 17
    },
    {
      "id": "prod_18",
      "categorie_id": "cat_4",
      "nom": "Frittes Dorees",
      "description": "Pommes de terre frites, sel fin",
      "prix": 3.0,
      "image_url": null,
      "disponible": true,
      "ordre": 18
    },
    {
      "id": "prod_19",
      "categorie_id": "cat_4",
      "nom": "Onion Rings x6",
      "description": "Rondelles d oignon panees dorees",
      "prix": 4.0,
      "image_url": null,
      "disponible": true,
      "ordre": 19
    },
    {
      "id": "prod_20",
      "categorie_id": "cat_4",
      "nom": "Coleslaw",
      "description": "Salade de chou cremeuse maison",
      "prix": 2.5,
      "image_url": null,
      "disponible": true,
      "ordre": 20
    },
    {
      "id": "prod_21",
      "categorie_id": "cat_4",
      "nom": "Sauce Dip Supplementaire",
      "description": "Ranch, buffalo, barbecue ou curry",
      "prix": 1.0,
      "image_url": null,
      "disponible": true,
      "ordre": 21
    },
    {
      "id": "prod_22",
      "categorie_id": "cat_5",
      "nom": "Coca Cola 33cl",
      "description": "",
      "prix": 2.5,
      "image_url": null,
      "disponible": true,
      "ordre": 22
    },
    {
      "id": "prod_23",
      "categorie_id": "cat_5",
      "nom": "Fanta ou Sprite 33cl",
      "description": "",
      "prix": 2.5,
      "image_url": null,
      "disponible": true,
      "ordre": 23
    },
    {
      "id": "prod_24",
      "categorie_id": "cat_5",
      "nom": "Jus de Fruit Frais",
      "description": "Mangue, passion, ananas",
      "prix": 3.5,
      "image_url": null,
      "disponible": true,
      "ordre": 24
    },
    {
      "id": "prod_25",
      "categorie_id": "cat_5",
      "nom": "Eau Minerale 75cl",
      "description": "",
      "prix": 2.0,
      "image_url": null,
      "disponible": true,
      "ordre": 25
    }
  ]
};