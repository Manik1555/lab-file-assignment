//  ---- Packages Data ----
let packages = [
    { id: 1, destination: "Paris", durationDays: 5, basePrice: 1000, season: "Summer" },
    { id: 2, destination: "Bali", durationDays: 7, basePrice: 1200, season: "Winter" },
    { id: 3, destination: "Tokyo", durationDays: 6, basePrice: 1500, season: "Spring" }
];

// ---- Render Packages Table ----
function renderPackages() {
    let tbody = document.querySelector("#packageTable tbody");
    if (!tbody) return;
    tbody.innerHTML = "";
    packages.forEach(pkg => {
        let finalPrice = pkg.basePrice;
        if (pkg.season === "Summer") finalPrice *= 1.2;
        if (pkg.season === "Winter") finalPrice *= 0.9;

        let row = `<tr>
            <td>${pkg.destination}</td>
            <td>${pkg.durationDays}</td>
            <td>$${pkg.basePrice}</td>
            <td>${pkg.season}</td>
            <td>$${finalPrice.toFixed(2)}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}
renderPackages();

// ---- Booking Price Estimator ----
let bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    let totalPriceEl = document.getElementById("totalPrice");

    function calculatePrice() {
        let destination = document.getElementById("destination").value;
        let checkIn = new Date(document.getElementById("checkIn").value);
        let checkOut = new Date(document.getElementById("checkOut").value);
        let guests = parseInt(document.getElementById("guests").value) || 1;
        let promo = document.getElementById("promo").value.trim();

        let nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
        if (nights <= 0 || isNaN(nights)) {
            totalPriceEl.textContent = "0";
            return;
        }

        let base = 0;
        let pkg = packages.find(p => p.destination === destination);
        if (pkg) base = pkg.basePrice;

        let price = base * (nights / pkg.durationDays);

        if (guests > 2) price *= 1.2;
        if (promo.toUpperCase() === "EARLYBIRD") price *= 0.9;

        totalPriceEl.textContent = price.toFixed(2);
    }

    bookingForm.addEventListener("input", calculatePrice);

    bookingForm.addEventListener("submit", function(e) {
        if (!document.getElementById("name").value) {
            alert("Please enter your name");
            e.preventDefault();
        }
    });
}

// ---- Gallery Modal ----
let modal = document.getElementById("modal");
if (modal) {
    let modalImg = document.getElementById("modalImg");
    let caption = document.getElementById("caption");
    let closeBtn = document.getElementById("close");

    document.querySelectorAll(".thumb").forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.getAttribute("data-large");
            caption.textContent = this.alt;
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}
