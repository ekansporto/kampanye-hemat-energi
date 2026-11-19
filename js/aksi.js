document.addEventListener('DOMContentLoaded', () => {
  const checklistItems = Array.from(document.querySelectorAll('.checklist-item input[type="checkbox"]'));
  const progressBar = document.querySelector('.checklist-progress-bar-bg');
  const progressFill = document.getElementById('checklistProgressFill');
  const progressText = document.getElementById('checklistProgressText');
  const feedback = document.getElementById('checklistFeedback');
  const resetChecklistButton = document.getElementById('checklistResetBtn');

  function updateChecklist() {
    const completed = checklistItems.filter(item => item.checked).length;
    const total = checklistItems.length;
    const percentage = total ? Math.round((completed / total) * 100) : 0;

    if (progressText) progressText.textContent = `${completed} dari ${total} terpenuhi (${percentage}%)`;
    if (progressFill) progressFill.style.width = `${percentage}%`;
    if (progressBar) progressBar.setAttribute('aria-valuenow', completed);
    if (feedback) {
      feedback.textContent = completed === total && total > 0
        ? 'Semua kriteria terpenuhi. Pertahankan kebiasaan ini!'
        : completed > 0
          ? 'Bagus, lanjutkan dengan kriteria berikutnya.'
          : 'Belum ada kriteria yang dicentang. Pilih satu aksi untuk memulai.';
    }

    checklistItems.forEach(item => {
      const label = item.closest('.checklist-item');
      if (label) label.classList.toggle('checked', item.checked);
    });
  }

  checklistItems.forEach(item => item.addEventListener('change', updateChecklist));
  if (resetChecklistButton) {
    resetChecklistButton.addEventListener('click', () => {
      checklistItems.forEach(item => { item.checked = false; });
      updateChecklist();
    });
  }
  updateChecklist();

  const form = document.getElementById('pledgeForm');
  const formMessage = document.getElementById('pledgeFormMessage');
  const nameInput = document.getElementById('studentName');
  const classInput = document.getElementById('studentClass');
  const placeholder = document.getElementById('pledgePlaceholder');
  const resultCard = document.getElementById('pledgeResultCard');
  const resultName = document.getElementById('pledgeResultName');
  const resultClass = document.getElementById('pledgeResultClass');
  const resultActions = document.getElementById('pledgeResultActions');
  const resultCode = document.getElementById('pledgeResultCode');
  const resultDate = document.getElementById('pledgeResultDate');
  const printButton = document.getElementById('printPledgeBtn');
  const newPledgeButton = document.getElementById('newPledgeBtn');

  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const name = nameInput.value.trim();
      const selectedActions = Array.from(form.querySelectorAll('input[name="pledgeAction"]:checked'));

      if (!name) {
        formMessage.textContent = 'Isi nama atau panggilan terlebih dahulu.';
        nameInput.focus();
        return;
      }

      if (selectedActions.length === 0) {
        formMessage.textContent = 'Pilih minimal satu aksi untuk membuat ikrar.';
        form.querySelector('input[name="pledgeAction"]').focus();
        return;
      }

      formMessage.textContent = '';
      resultName.textContent = name;
      resultClass.textContent = classInput.value.trim() ? `Kelas ${classInput.value.trim()}` : '';
      resultActions.replaceChildren();
      selectedActions.forEach(input => {
        const item = document.createElement('li');
        item.textContent = input.value;
        resultActions.appendChild(item);
      });

      const now = new Date();
      const dateCode = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, '0'),
        String(now.getDate()).padStart(2, '0')
      ].join('');
      const randomCode = Math.random().toString(36).slice(2, 7).toUpperCase();
      resultCode.textContent = `EN-${dateCode}-${randomCode}`;
      resultDate.textContent = new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(now);

      placeholder.hidden = true;
      resultCard.hidden = false;
      resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  if (printButton) printButton.addEventListener('click', () => window.print());
  if (newPledgeButton && form) {
    newPledgeButton.addEventListener('click', () => {
      form.reset();
      formMessage.textContent = '';
      resultCard.hidden = true;
      placeholder.hidden = false;
      nameInput.focus();
    });
  }
});
