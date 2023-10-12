// Function to validate the form
function validateForm() {
    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const quantity = document.getElementById("quantity").value;

    // Validate name (non-empty)
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate phone number (9 digits)
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must be a 10-digit number");
        return false;
    }

    // Validate quantity (positive number)
    if (quantity <= 0 || isNaN(quantity)) {
        alert("Quantity must be a positive number");
        return false;
    }

    return true;
}

// Function to generate a receipt
function generateReceipt() {
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const tagline = document.getElementById("tagline").value;
    const color = document.getElementById("color").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;
    const deliveryDate = document.getElementById("delivery_date").value;
    const font = document.getElementById("font").value;
    const otherDetails = document.getElementById("other_details").value;

    // Get the current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    // Create a receipt message
    const receiptMessage = `
    Order Receipt
    Date: ${formattedDate}

    Contact Information:
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Address: ${address}

    Order Details:
    Tagline on the Shirt: ${tagline}
    Color: ${color}
    Size: ${size}
    Quantity: ${quantity}
    Preferred Delivery Date: ${deliveryDate}
    Font-Style: ${font}
    Other Details: ${otherDetails}
    `;


    alert(receiptMessage);
}

// Add a form submission event listener
const orderForm = document.querySelector("form");
orderForm.addEventListener("submit", function (event) {
    if (validateForm()) {
        generateReceipt();
    } else {
        event.preventDefault();
    }
});
