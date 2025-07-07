document.addEventListener("DOMContentLoaded", function () {
    // スクロールで各セクションをアニメーション表示
    const slideUps = document.querySelectorAll('.slide-up');
    const showOnScroll = () => {
        slideUps.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.style.animationPlayState = 'running';
            }
        });
    };
    showOnScroll();
    window.addEventListener('scroll', showOnScroll);
});