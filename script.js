document.addEventListener('click', function(e){
  if(e.target.matches('.toggle-solution')){
    const parent = e.target.closest('.exercise') || e.target.parentElement
    parent.classList.toggle('show')
    e.target.textContent = parent.classList.contains('show') ? 'Hide solution' : 'Show solution'
  }
})

// Small keyboard shortcut: press 's' to focus first solution button
document.addEventListener('keydown', function(e){
  if(e.key === 's'){
    const btn = document.querySelector('.toggle-solution')
    if(btn) btn.focus()
  }
})
