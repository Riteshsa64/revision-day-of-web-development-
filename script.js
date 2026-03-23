function showQuote() {
    let quotes = [
        "Work hard and stay consistent.",
        "Believe in yourself.",
        "Small steps lead to big success.",
        "Code daily, grow daily.",
        "Never stop learning."
    ];

    for (let i = 0; i < quotes.length; i++) {
        // loop used (basic concept)
    }

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomIndex];

    console.log("Motivational Quote:");
    console.log(selectedQuote);

    alert(selectedQuote);
}
