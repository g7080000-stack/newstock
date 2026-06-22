const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const label = document.querySelector('.theme-label');

function updateToggle(theme) {
  const isDark = theme === 'dark';
  toggle.setAttribute('aria-pressed', String(isDark));
  toggle.setAttribute('aria-label', `${isDark ? '화이트' : '다크'} 모드로 전환`);
  label.textContent = `${isDark ? '다크' : '화이트'} 모드`;
}

toggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateToggle(nextTheme);
});

updateToggle(root.dataset.theme);
