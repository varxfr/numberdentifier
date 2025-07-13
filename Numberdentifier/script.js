const cellcard = ["011", "012", "014", "017", "023", "061", "076", "077", "078", "079", "085", "089", "092", "095", "099"];
const smart = ["010", "015", "016", "069", "070", "081", "086", "087", "093", "096", "098"];
const metfone = ["031", "060", "066", "067", "068", "071", "088", "090", "097"];

const numberheader = document.getElementById("numberheader");
const carrierText = document.getElementById("carrierName")

function triggerAnimation() {
    carrierText.classList.remove("animate");
    void carrierText.offsetWidth;
    carrierText.classList.add("animate");


}

numberheader.addEventListener("keypress", function(event) {
    // Check if the user pressed Enter (key code 13)
    if (event.keyCode === 13) {
        const inputValue = numberheader.value;
        if (cellcard.includes(inputValue)) {
            carrierText.textContent = "Cellcard";
        } else if (smart.includes(inputValue)) {
            carrierText.textContent = "Smart";
        } else if (metfone.includes(inputValue)) {
            carrierText.textContent = "Metfone";
        } else {
            carrierText.textContent = "unknown";
        }

        carrierText.style.display = "block";
        triggerAnimation();
    }
});
