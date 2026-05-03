// js/events.js
document.addEventListener('DOMContentLoaded', () => {
    const checkoutButtons = document.querySelectorAll('.checkout-btn');
    const checkoutUrl = 'https://pay.hotmart.com/P105533205X?checkoutMode=10';

    checkoutButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent immediate navigation

            // Track InitiateCheckout event (Browser Pixel)
            if (typeof fbq === 'function') {
                fbq('track', 'InitiateCheckout');
            }

            // Track InitiateCheckout event (Server-side CAPI)
            if (typeof sendMetaConversion === 'function') {
                sendMetaConversion('InitiateCheckout');
            }

            // Small delay to allow the pixel and CAPI call to fire before redirecting
            setTimeout(() => {
                window.location.href = checkoutUrl;
            }, 400);
        });
    });
});
