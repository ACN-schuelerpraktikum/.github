
function toggleStyle() {
  const body = document.body;

 
  body.classList.toggle('light-theme');
  

  if (body.classList.contains('light-theme')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

// Beim Laden der Seite das gespeicherte Design prüfen und anwenden
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

// Laden Sie das Design, wenn die Seite initialisiert wird
loadTheme();

// Binden Sie den Umschaltknopf an eine Funktion
const themeToggleButton = document.querySelector('.theme-toggle');
themeToggleButton.addEventListener('click', toggleStyle);
