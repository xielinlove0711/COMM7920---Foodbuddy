(() => {
  const addClose = (modalId) => {
    const modal = document.getElementById(modalId);
    const card = modal?.querySelector('.pcard');
    if (!modal || !card || card.querySelector('.modal-close')) return;
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'modal-close';
    close.setAttribute('aria-label', 'Close');
    close.textContent = '×';
    close.addEventListener('click', () => modal.classList.remove('on'));
    card.prepend(close);
  };

  const initialise = () => {
    const communityIcon = document.querySelector('button[aria-label="Community"] .quick-icon');
    if (communityIcon) communityIcon.textContent = '🌍';
    addClose('share-modal');
    addClose('report-modal');
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialise);
  else initialise();
})();
