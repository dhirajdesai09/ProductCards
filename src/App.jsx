import Card from "./components/card/Card.jsx";
import "./App.css";

const App = () => {
  const dishes = [
  {
    id: 1,
    name: "Biryani",
    description:
      "Aromatic basmati rice cooked with flavorful spices, tender chicken, and herbs.",
    image:
"https://plus.unsplash.com/premium_photo-1694141252026-3df1de888a21?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    time: "20 min",
    servings: "4 Servings",
    difficulty: "Medium",
    ingredients: [
      "Yogurt",
      "Olive Oil",
      "Chicken",
      "Basmati Rice",
      "Onion",
      "Tomato",
      "Ginger",
      "Garlic",
      "Biryani Masala",
      "Coriander"
    ]
  },

  {
    id: 2,
    name: "Butter Chicken",
    description:
      "Creamy and rich chicken cooked in a buttery tomato-based gravy with aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    time: "35 min",
    servings: "4 Servings",
    difficulty: "Medium",
    ingredients: [
      "Chicken",
      "Butter",
      "Cream",
      "Tomato",
      "Onion",
      "Garlic",
      "Ginger",
      "Garam Masala",
      "Kasuri Methi",
      "Coriander"
    ]
  },

  {
    id: 3,
    name: "Paneer Tikka",
    description:
      "Grilled paneer cubes marinated with yogurt, spices, and colorful vegetables.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
    time: "25 min",
    servings: "3 Servings",
    difficulty: "Easy",
    ingredients: [
      "Paneer",
      "Yogurt",
      "Capsicum",
      "Onion",
      "Lemon",
      "Olive Oil",
      "Tikka Masala",
      "Chilli Powder"
    ]
  },

  {
    id: 4,
    name: "Masala Dosa",
    description:
      "Crispy South Indian dosa filled with spicy potato masala and served with chutney.",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
    time: "30 min",
    servings: "2 Servings",
    difficulty: "Medium",
    ingredients: [
      "Rice",
      "Urad Dal",
      "Potatoes",
      "Onion",
      "Mustard Seeds",
      "Curry Leaves",
      "Green Chilli",
      "Oil"
    ]
  },

  {
    id: 5,
    name: "Pav Bhaji",
    description:
      "Spicy mashed vegetable curry served with buttery toasted pav and fresh onions.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    time: "30 min",
    servings: "4 Servings",
    difficulty: "Easy",
    ingredients: [
      "Potatoes",
      "Tomato",
      "Capsicum",
      "Peas",
      "Onion",
      "Butter",
      "Pav Bhaji Masala",
      "Pav"
    ]
  },

  {
    id: 6,
    name: "Chole Bhature",
    description:
      "Spiced chickpea curry served with fluffy deep-fried bhature and fresh salad.",
    image:
      "https://images.unsplash.com/photo-1626132647523-66f5bf380027",
    time: "45 min",
    servings: "4 Servings",
    difficulty: "Hard",
    ingredients: [
      "Chickpeas",
      "Flour",
      "Onion",
      "Tomato",
      "Ginger",
      "Garlic",
      "Chole Masala",
      "Oil"
    ]
  },

  {
    id: 7,
    name: "Veg Fried Rice",
    description:
      "Flavorful fried rice tossed with fresh vegetables, soy sauce, and aromatic seasonings.",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    time: "20 min",
    servings: "3 Servings",
    difficulty: "Easy",
    ingredients: [
      "Rice",
      "Carrot",
      "Capsicum",
      "Cabbage",
      "Spring Onion",
      "Soy Sauce",
      "Garlic",
      "Olive Oil"
    ]
  },

  {
    id: 8,
    name: "Palak Paneer",
    description:
      "Soft paneer cooked in a creamy spinach gravy with mild Indian spices.",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
    time: "30 min",
    servings: "4 Servings",
    difficulty: "Medium",
    ingredients: [
      "Paneer",
      "Spinach",
      "Cream",
      "Onion",
      "Tomato",
      "Garlic",
      "Ginger",
      "Garam Masala"
    ]
  },

  {
    id: 9,
    name: "Chicken Tikka",
    description:
      "Juicy chicken pieces marinated in yogurt and spices, then grilled to perfection.",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
    time: "35 min",
    servings: "3 Servings",
    difficulty: "Medium",
    ingredients: [
      "Chicken",
      "Yogurt",
      "Lemon",
      "Ginger",
      "Garlic",
      "Tikka Masala",
      "Chilli Powder",
      "Olive Oil"
    ]
  },

  {
    id: 10,
    name: "Rajma Chawal",
    description:
      "Comforting kidney bean curry served with fragrant steamed basmati rice.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    time: "40 min",
    servings: "4 Servings",
    difficulty: "Easy",
    ingredients: [
      "Rajma",
      "Basmati Rice",
      "Onion",
      "Tomato",
      "Ginger",
      "Garlic",
      "Cumin",
      "Garam Masala"
    ]
  }
];
  return (   
    <div id="container">
      {dishes.map((dish) => (
        <Card key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default App;
