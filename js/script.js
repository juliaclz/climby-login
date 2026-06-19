// Toggle visibilidade da senha
const toggleBtn = document.querySelector('.toggle-password');
const senhaInput = document.getElementById('senha');

if (toggleBtn && senhaInput) {
  toggleBtn.addEventListener('click', function () {
    const isPassword = senhaInput.type === 'password';
    senhaInput.type = isPassword ? 'text' : 'password';
  });
}
