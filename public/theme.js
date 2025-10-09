(function initTheme() {
  if (typeof window !== 'undefined' && window.localStorage) {
    var theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    }
  }
})();
