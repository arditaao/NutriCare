const searchInput = document.getElementById("search");
const searchResults = document.getElementById("searchResults");

const pages = [
    { name: "Diabetes, Pre-Diabetes & Heart Disease", link: "./Diabetes Dietitian_Updated.html" },
    { name: "Eating Disorders & Disordered Eating", link: "./Disordered_Eating_Updated.html" },
    { name: "Weight Loss & Weight Management", link: "./Weight Loss & Weight Management_Updated.html" },
    { name: "Coeliac Disease Treatment", link: "./Coeliac_Disease_Updated.html" },
    { name: "RECIPES-SALADS", link: "./Recipe1.html" },
    { name: "RECIPES-DESSERT", link: "./Recipe2.html" },
    { name: "RECIPES-MAIN DISHES", link: "./Recipe3.html" },
    { name: "RECIPES-BEVERAGES", link: "./Recipe4.html" },
];

searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query) {
        const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query));
        filteredPages.forEach(page => {
            const resultItem = document.createElement("a");
            resultItem.href = page.link;
            resultItem.textContent = page.name;
            searchResults.appendChild(resultItem);
        });
    }
});
