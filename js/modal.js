// js/modal.js
document.addEventListener('DOMContentLoaded', () => {
    const privacyBtn = document.getElementById('open-privacy');
    const termsBtn = document.getElementById('open-terms');
    
    const privacyModal = document.getElementById('modal-privacy');
    const termsModal = document.getElementById('modal-terms');
    
    const closeBtns = document.querySelectorAll('.modal-close');

    function openModal(modal) {
        if(modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // prevent scrolling behind
        }
    }

    function closeModal() {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }

    if(privacyBtn) {
        privacyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(privacyModal);
        });
    }

    if(termsBtn) {
        termsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(termsModal);
        });
    }

    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Close when clicking outside content
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
            }
        });
    });
});
