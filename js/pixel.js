// Generate a unique ID for PageView deduplication
window.pageViewEventId = 'pv_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);

// Meta Pixel Code Initialization
!function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');

// Pixel ID provided by user
fbq('init', '324230336566459');
fbq('track', 'PageView', {}, { eventID: window.pageViewEventId });
console.log('Meta Pixel Loaded with ID: 324230336566459', 'Event ID:', window.pageViewEventId);
