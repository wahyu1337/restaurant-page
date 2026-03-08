const menuList = {
    'Main Courses': [
        {name: "Spaghetti Carbonara", price: 9.99},
        {name: "Chicken Roast", price: 5.99},
        {name: "Rice Chicken Curry", price: 5.99},
        {name: "Butter Soup Beef", price: 8.99},
        {name: "Crisp Chicken Wings", price: 4.99},
        {name: "Rice Macaroni Cheese", price: 7.99},
    ],
    'Pizza': [
        {name: "Margherita", price: 5.99},
        {name: "Cheesy Galore", price: 4.99},
        {name: "Tuna Melt", price: 3.99},
        {name: "Spicy Meal", price: 5.99},
        {name: "Meat Lovers", price: 7.99},        
    ],
    'Dessert': [
        {name: "Ice Cream Moca with Strawberry", price: 4.99},
        {name: "Chocolate Cheese Brownies", price: 3.59},
        {name: "Waffle with Vanilla Ice Cream", price: 4.99},
    ],
    'Beverages': [
        {name: "Americano", price: 1.99},
        {name: "Mocachino", price: 1.99},
        {name: "Milk Tea", price: 1.99},
        {name: "Macha", price: 2.99},
        {name: "Cappucino", price: 2.99},
        {name: "Black Coffe", price: 0.99},
    ]
};

function menu() {
    const currentYear = new Date().getFullYear();
    // reset background & enable horizontal scroll
    document.body.style.backgroundImage = "url()";

    const content = document.getElementById("content");
    content.style.alignItems = "flex-start";

    // Menu title
    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("h2menu");
    menuTitle.textContent = "MENU";
    content.appendChild(menuTitle);
    
    // wrapper 2 column
    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-wrapper");
    content.appendChild(wrapper);   

    // Loop tiap kategori
    Object.entries(menuList).forEach(([category, items]) => {
        // Section container
        const section = document.createElement("div");
        section.classList.add("menu-section");

        // Category title
        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category;
        section.appendChild(categoryTitle);

        // Loop every item
        items.forEach(item => {
            const row = document.createElement("div");
            row.classList.add("menu-item");

            const itemName = document.createElement("span");
            itemName.textContent = item.name;

            const itemPrice = document.createElement("span");
            itemPrice.textContent = `$${item.price.toFixed(2)}`;

            row.appendChild(itemName);
            row.appendChild(itemPrice);
            section.appendChild(row);
        });

        wrapper.appendChild(section);
    });

    // footer
    const footer = document.getElementById("footer");
    const footerTitle = document.createElement("p");
    footerTitle.textContent = `© ${currentYear} WAYS. ALL RIGHTS RESERVED`;
    footer.appendChild(footerTitle);
}

// menu();

export { menu };