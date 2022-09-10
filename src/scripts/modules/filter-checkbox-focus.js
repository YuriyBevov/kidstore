const checkboxes = document.querySelectorAll('input[type="checkbox"]');

if(checkboxes) {
  checkboxes.forEach(chx => {
    const label = chx.parentNode.querySelector('label');
    if(chx.nextElementSibling === label){
      label.addEventListener('keydown', (evt) => {
        if(evt.code === 'Enter' || evt.code === 'Space') {
          evt.preventDefault();
          chx.checked = !chx.checked
        }
      });
    }
  });
}
