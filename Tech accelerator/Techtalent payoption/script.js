function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
  }

function toggleMenu() {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("active");
}

function validateForm() {
  const paymentSelected = document.querySelector('input[name="payment"]:checked');
  
  if (!paymentSelected) {
    alert("Please select a payment option.");
    return false; 
  }

  return true;
}