// js/events.js
document.addEventListener('DOMContentLoaded', () => {
    // Send PageView via CAPI (Server-side) for backup and deduplication
    if (typeof sendMetaConversion === 'function') {
        const pvId = window.pageViewEventId || ('pv_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9));
        sendMetaConversion('PageView', {}, pvId);
    }

    const checkoutButtons = document.querySelectorAll('.checkout-btn');

    checkoutButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const checkoutUrl = button.getAttribute('href') || 'https://pay.hotmart.com/P105533205X?checkoutMode=10';
            const target = button.getAttribute('target') || '_self';

            e.preventDefault(); // Prevent immediate navigation

            // Generate a unique event ID for InitiateCheckout deduplication
            const checkoutEventId = 'co_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);

            // Track InitiateCheckout event (Browser Pixel)
            if (typeof fbq === 'function') {
                fbq('track', 'InitiateCheckout', {}, { eventID: checkoutEventId });
            }

            // Track InitiateCheckout event (Server-side CAPI)
            if (typeof sendMetaConversion === 'function') {
                sendMetaConversion('InitiateCheckout', {}, checkoutEventId);
            }

            // Small delay to allow the pixel and CAPI call to fire before redirecting
            setTimeout(() => {
                if (target === '_blank') {
                    window.open(checkoutUrl, '_blank');
                } else {
                    window.location.href = checkoutUrl;
                }
            }, 400);
        });
    });
});
