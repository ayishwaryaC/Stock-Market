# Stock-Market
StockSecure

StockSecure is a modern stock market tracking website that provides real-time market data, news, and investment insights.

📂 Project Structure

StockSecure/
│── index.html         # Home page
│── style.css         # Styling file
│── app.js           # JavaScript logic
│── economy.html     # Economy section
│── finance.html     # Personal finance section
│── investing.html   # Investing insights
│── watchlist.html   # User watchlist

🚀 Features

Live stock market overview

Latest stock-related news

User-friendly navigation menu

Stock search functionality with alerts

🔧 Setup & Usage

Clone the repository:

git clone https://github.com/ayishwaryaC/Stock-Market/

Open index.html in a browser to view the project.

Modify style.css for custom styles.

Update app.js to add more interactive features.

🔥 Stock Search Alert Feature

When the search button is clicked, an alert displays the search term.

If no input is provided, it alerts the user to enter a stock name.

Snippet from app.js:

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchBtn").addEventListener("click", function () {
        let query = document.getElementById("searchStock").value.trim();
        alert(query ? `Searching for: ${query}` : "Please enter a stock name to search.");
    });
});

📌 Future Improvements

Live stock price API integration

Dark mode toggle

User authentication for personalized watchlists

📞 Contact

For any queries, reach out to [ayishwaryac@gmail.com/8825815326].

