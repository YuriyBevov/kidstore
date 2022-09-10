const btns = document.querySelectorAll('.filter-head-btn');

if(btns) {
  btns.forEach(btn => {
    btn.addEventListener('click', (evt) => {
      evt.target.closest('.filter__field').classList.toggle('collapsed');
    })
  })
}
