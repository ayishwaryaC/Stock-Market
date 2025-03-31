// Auto-update news ticker every 10 seconds with random updates
const newsUpdates = [
    "🔥 Dow Jones up 1.5% today!",
    "📉 Tesla stock drops 3.2%!",
    "🚀 Bitcoin reaches $60K!",
    "📊 Federal Reserve announces new policy updates!",
    "📈 Apple reports record-breaking earnings!",
    "💰 Gold prices rise amid market uncertainty!"
];

function updateNewsTicker() {
    const newsTicker = document.querySelector(".news-content p");
    const randomNews = newsUpdates[Math.floor(Math.random() * newsUpdates.length)];
    newsTicker.innerHTML = randomNews;
}

// Change news every 10 seconds
setInterval(updateNewsTicker, 1000);


document.addEventListener("DOMContentLoaded", function () {
    const stockTable = document.getElementById("stockTable");
    const newsList = document.getElementById("newsList");

    async function fetchStockData() {
        const response = await fetch("https://api.example.com/stock-data"); // Replace with real API
        const data = await response.json();
        
        stockTable.innerHTML = "";
        data.forEach(stock => {
            let row = `<tr>
                <td>${stock.name}</td>
                <td>$${stock.price}</td>
                <td class="${stock.change > 0 ? 'positive' : 'negative'}">${stock.change}</td>
                <td class="${stock.change > 0 ? 'positive' : 'negative'}">${stock.percent}%</td>
            </tr>`;
            stockTable.innerHTML += row;
        });
    }

    async function fetchNews() {
        const response = await fetch("https://api.example.com/news"); // Replace with real API
        const articles = await response.json();
        
        newsList.innerHTML = "";
        articles.forEach(news => {
            let listItem = `<li>${news.title}</li>`;
            newsList.innerHTML += listItem;
        });
    }

    setInterval(fetchStockData, 5000); // Updates every 5 seconds
    setInterval(fetchNews, 30000); // Updates every 30 seconds

    fetchStockData();
    fetchNews();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("overlay");

    menuBtn.addEventListener("click", function (event) {
        sideMenu.classList.add("active");
        overlay.classList.add("active");
        event.stopPropagation(); // Prevents event bubbling
    });

    closeBtn.addEventListener("click", function () {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function () {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const stockData = {
        "US": [
            { stock: "Dow", price: "41,500", change: "-71.80", percent: "-1.69%" },
            { stock: "S&P 500", price: "5,100", change: "+15.20", percent: "+0.30%" },
            { stock: "Nasdaq", price: "15,800", change: "-90.50", percent: "-0.57%" },
            { stock: "Russell 2000", price: "2,000", change: "+12.40", percent: "+0.62%" }
        ],
        "Europe": [
            { stock: "DAX", price: "16,000", change: "+35.20", percent: "+0.22%" },
            { stock: "FTSE 100", price: "7,600", change: "-25.30", percent: "-0.33%" },
            { stock: "CAC 40", price: "7,200", change: "-10.40", percent: "-0.14%" },
            { stock: "IBEX 35", price: "9,100", change: "+5.60", percent: "+0.06%" }
        ],
        "Asia": [
            { stock: "KOSPI", price: "2,550", change: "+15.30", percent: "+0.60%" },
            { stock: "Taiwan Weighted", price: "17,200", change: "-40.50", percent: "-0.23%" },
            { stock: "Jakarta Composite", price: "7,100", change: "+22.10", percent: "+0.31%" },
            { stock: "Straits Times", price: "3,250", change: "-8.90", percent: "-0.27%" }
        ],
        "Australia": [
            { stock: "ASX 200", price: "7,450", change: "+30.20", percent: "+0.41%" },
            { stock: "All Ordinaries", price: "7,700", change: "-12.10", percent: "-0.16%" },
            { stock: "S&P/ASX 50", price: "7,200", change: "+25.40", percent: "+0.35%" },
            { stock: "S&P/ASX MidCap 50", price: "6,100", change: "-8.70", percent: "-0.14%" }
        ],
        "Middle East": [
            { stock: "Tadawul All Share", price: "11,400", change: "+45.30", percent: "+0.40%" },
            { stock: "DFM General", price: "3,520", change: "-10.20", percent: "-0.29%" },
            { stock: "ADX General", price: "9,750", change: "+32.50", percent: "+0.33%" },
            { stock: "QE General", price: "10,400", change: "-15.70", percent: "-0.15%" }
        ],
        "South America": [
            { stock: "Bovespa", price: "128,500", change: "+520.40", percent: "+0.41%" },
            { stock: "Merval", price: "900,200", change: "-3,150.80", percent: "-0.35%" },
            { stock: "IPSA", price: "5,950", change: "+45.60", percent: "+0.77%" },
            { stock: "COLCAP", price: "1,200", change: "-5.20", percent: "-0.43%" }
        ],
        "Africa": [
            { stock: "JSE All Share", price: "78,900", change: "+320.50", percent: "+0.40%" },
            { stock: "NSE 20", price: "1,600", change: "-12.30", percent: "-0.76%" },
            { stock: "EGX 30", price: "19,500", change: "+88.20", percent: "+0.45%" },
            { stock: "NGX All Share", price: "52,300", change: "-25.10", percent: "-0.05%" }
        ]
    };

    document.querySelectorAll(".region").forEach(th => {
        th.style.cursor = "pointer";
        th.addEventListener("click", function () {
            const region = this.getAttribute("data-region");
            if (stockData[region]) {
                updateStockTable(stockData[region]);
            }
        });
    });

    function updateStockTable(data) {
        const tbody = document.querySelector("#stockTable");
        tbody.innerHTML = ""; // Clear previous data
        data.forEach(stock => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td></td>
                <td></td>
                <td></td>
                <td>${stock.stock}</td>
                <td>${stock.price}</td>
                <td>${stock.change}</td>
                <td>${stock.percent}</td>
            `;
            if (stock.change.startsWith("+")) {
                row.classList.add("green");
            } else {
                row.classList.add("red");
            }
            tbody.appendChild(row);
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchStock");
    const searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", function () {
        let query = searchInput.value.trim(); // Get user input

        if (query !== "") {
            alert(`Searching for: ${query}`); // Show an alert with the search term
        } else {
            alert("Please enter a stock name to search."); // Alert if input is empty
        }
    });
});





































































































































































    document.querySelectorAll("thead tr:first-child th").forEach(th => {
        th.addEventListener("click", function () {
            const region = this.innerText.trim();
            if (stockData[region]) {
                updateStockTable(stockData[region]);
            }
        });
    });


function updateStockTable(data) {
    const tableRow = document.querySelector(".change tr");
    tableRow.children[3].innerText = data.stock;
    tableRow.children[4].innerText = data.price;
    tableRow.children[5].innerText = data.change;
    tableRow.children[6].innerText = data.percent;
    
    // Change color based on positive or negative change
    if (data.change.startsWith("+")) {
        tableRow.querySelectorAll("th").forEach(th => th.classList.remove("red"));
    } else {
        tableRow.querySelectorAll("th").forEach(th => th.classList.add("red"));
    }
}

