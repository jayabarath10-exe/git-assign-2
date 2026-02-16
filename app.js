// Recipe data array
const recipes = [
  {
    id: 1,
    title: "15-Minute Garlic Butter Pasta",
    time: 15,
    difficulty: "easy",
    description: "A quick, comforting pasta tossed in a rich garlic butter sauce with herbs.",
    category: "pasta"
  },
  {
    id: 2,
    title: "One-Pot Chickpea Curry",
    time: 30,
    difficulty: "medium",
    description: "Creamy tomato-based curry with tender chickpeas and warm spices.",
    category: "curry"
  },
  {
    id: 3,
    title: "Slow-Cooked Beef Rendang",
    time: 120,
    difficulty: "hard",
    description: "Indonesian-style beef simmered for hours in coconut milk and aromatics.",
    category: "curry"
  },
  {
    id: 4,
    title: "Zesty Lemon Herb Salad",
    time: 10,
    difficulty: "easy",
    description: "Crisp greens with a bright lemon dressing and toasted seeds.",
    category: "salad"
  },
  {
    id: 5,
    title: "Classic Lasagna Bake",
    time: 75,
    difficulty: "medium",
    description: "Layered pasta with rich meat sauce, creamy béchamel, and cheese.",
    category: "pasta"
  },
  {
    id: 6,
    title: "Artisan Sourdough Bread",
    time: 180,
    difficulty: "hard",
    description: "Crusty loaf with open crumb, perfect for weekend baking projects.",
    category: "baking"
  },
  {
    id: 7,
    title: "Sheet-Pan Teriyaki Tofu",
    time: 25,
    difficulty: "easy",
    description: "Crispy tofu with vegetables in a sticky-sweet teriyaki glaze.",
    category: "asian"
  },
  {
    id: 8,
    title: "Overnight Biryani Feast",
    time: 90,
    difficulty: "hard",
    description: "Layered rice and spiced meat cooked low and slow for deep flavor.",
    category: "rice"
  }
];

// DOM selection
const recipeContainer = document.querySelector("#recipe-container");

// Create recipe card function
const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

// Render recipes function
const renderRecipes = (recipesToRender) => {
  const cardsHTML = recipesToRender.map((recipe) => createRecipeCard(recipe)).join("");
  recipeContainer.innerHTML = cardsHTML;
};

// Initialize app: render all recipes on load
renderRecipes(recipes);
