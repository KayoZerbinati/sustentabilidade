const chk = document.getElementById('chk');

  // Verificar se há uma preferência de tema armazenada
  const savedTheme = localStorage.getItem('theme');

  // Aplicar o tema armazenado, se existir
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    chk.checked = savedTheme === 'dark';
  }

  chk.addEventListener('change', () => {
    const theme = chk.checked ? 'dark' : 'light';

    localStorage.setItem('theme', theme);

    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  });
  
