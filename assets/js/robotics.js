(() => {
  const button = document.querySelector('.theme-switch');
  if (!button) return;
  button.hidden = false;
  const updateLabel = () => button.setAttribute('aria-label', document.documentElement.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  updateLabel();
  button.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('robotics-theme', theme); } catch (e) {}
    updateLabel();
  });
})();
