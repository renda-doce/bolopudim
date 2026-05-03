// js/events.js
document.addEventListener('DOMContentLoaded', () => {
    const checkoutButtons = document.querySelectorAll('.checkout-btn');
    const checkoutUrl = 'https://pay.hotmart.com/P105533205X?checkoutMode=10';

    checkoutButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent immediate navigation

            // Track InitiateCheckout event
            if (typeof fbq === 'function') {
                fbq('track', 'InitiateCheckout');
            }

            // Small delay to allow the pixel to fire before redirecting
            setTimeout(() => {
                window.location.href = checkoutUrl;
            }, 300);
        });
    });
});
