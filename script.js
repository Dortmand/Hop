
document.addEventListener("DOMContentLoaded", function() {
    flatpickr(".flatpickr", {
        enableTime: false,
        dateFormat: "Y-m-d",
    });

    const form = document.getElementById('productForm');
    const productList = document.querySelector('#productList ul');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productClass = document.getElementById('productClass').value;
        const expirationType = document.getElementById('expirationType').value;
        const expirationDate = document.getElementById('expirationDate').value;

        const li = document.createElement('li');
        li.textContent = `${productName} (${productClass}) - ${expirationType}: ${expirationDate}`;

        // Check if the product is expiring soon
        const today = new Date();
        const expiration = new Date(expirationDate);
        if ((expiration - today) / (1000 * 60 * 60 * 24) < 5) {
            li.classList.add('expiring');
        }

        productList.appendChild(li);

        form.reset();
    });
});
