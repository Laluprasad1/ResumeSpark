function toggleMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
}
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', (event) => {
        console.log(`Navigating to: ${event.currentTarget.href}`);
    });
});
