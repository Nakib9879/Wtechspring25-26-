const unitPriceInput = document.getElementById("Unitprice");
const quantityInput = document.getElementById("quantity");
const totalPriceInput = document.getElementById("totalPrice");

function calculateTotal() {

let unitPrice = parseInt(unitPriceInput.value) || 0;
let quantity = parseInt(quantityInput.value) || 0;

if (quantity < 0) {
alert("Quantity cannot be negative.");
quantity = 0;
quantityInput.value = 0;
}

let total = unitPrice * quantity * 30;

totalPriceInput.value = total;

}

quantityInput.addEventListener("input", calculateTotal);