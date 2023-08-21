const toggle = document.getElementById('toggle');
toggle.onclick = function () {
  toggle.classList.toggle('active');
  if (toggle.classList.contains('active')) {
    colorMode('light');
  } else {
    colorMode('dark');
  }
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  colorMode('dark');
} else {
  colorMode('light');
  toggle.classList.add('active');
}


function colorMode(mode) {
  if (mode === "dark") {
    document.documentElement.style.setProperty('--commandify-text-color', '#FAFAFA');
    document.documentElement.style.setProperty('--commandify-color-primary', '#684B3E');
    document.documentElement.style.setProperty('--commandify-color-secondary', '#231A10');
    document.documentElement.style.setProperty('--commandify-color-accent', '#7ECB6B');
    document.documentElement.style.setProperty('--commandify-background-color', '#242424');
    document.documentElement.style.setProperty('--commandify-background-color-secondary', '#343434');
    document.documentElement.style.setProperty('--commandify-text-color-secondary', '#684B3E');
    document.documentElement.style.setProperty('--commandify-homepage-background', 'url("../Assets/other/dark-background.png")');
    document.documentElement.style.setProperty('--commandify-atf-background-color', 'transparent');
    ;
  } else if (mode === "light") {
    document.documentElement.style.setProperty('--commandify-text-color', '#242424');
    document.documentElement.style.setProperty('--commandify-color-primary', '#684B3E');
    document.documentElement.style.setProperty('--commandify-color-secondary', '#EFE6DC');
    document.documentElement.style.setProperty('--commandify-color-accent', '#342DE1');
    document.documentElement.style.setProperty('--commandify-background-color', '#FAFAFA');
    document.documentElement.style.setProperty('--commandify-background-color-secondary', '#E4E4E4');
    document.documentElement.style.setProperty('--commandify-text-color-secondary', '#BFB6AC');
    document.documentElement.style.setProperty('--commandify-homepage-background', 'url("../Assets/other/light-background.png")');
    document.documentElement.style.setProperty('--commandify-atf-background-color', 'rgba(255, 255, 255, 0.8)');
  }
}