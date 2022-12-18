// menangkap semua elemen a
document.querySelectorAll("#option a").forEach((a) =>
    // jika di klick akan menjalankan fungsi computerChoice
    a.addEventListener("click", (e) => {
        computerChoice(e);
    })
);

// fungsi untuk menghandle logic pada game 
function computerChoice(e) {
		// menangkap element result pilihan komputer
		const result = document.querySelector("#result");

		// membuat list untuk pilihan komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk computer
    result.innerHTML = choices[Math.floor(Math.random() * choices.length)];

    // jika pilihan komputer == dengan pilihan user (draw)
    if (e.target.innerText.trim() == result.innerHTML) {
        setTimeout(() => alert("Draw"), 100);
    }


    // jika pilihan user yg menang
    if (
        (e.target.innerText.trim() == "Rock" && result.innerHTML == "Scissors") ||
        (e.target.innerText.trim() == "Paper" && result.innerHTML == "Rock") ||
        (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Paper")
    ) {
        setTimeout(() => alert("You win"), 100);
    }

    // jika pilihan komputer yg menang
    if (
        (e.target.innerText.trim() == "Rock" && result.innerHTML == "Paper") ||
        (e.target.innerText.trim() == "Paper" && result.innerHTML == "Scissors") ||
        (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Rock")
    ) {
        setTimeout(() => alert("Computer wins"), 100);
    }
}
