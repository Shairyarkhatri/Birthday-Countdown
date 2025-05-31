let interval;

function startCountdown() {
    clearInterval(interval);

    const inputDate = document.getElementById("birthdayInput").value;
    const birthday = new Date(inputDate + "T00:00:00").getTime();

    if (!inputDate || isNaN(birthday)) {
        alert("Please enter a valid date!");
        return;
    }

    document.getElementById("displayDate").innerText = `Countdown to: ${inputDate}`;

    interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = birthday - now;

        if (distance <= 0) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "<h2>🎉 Happy Birthday! 🎉</h2>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    }, 1000);
}