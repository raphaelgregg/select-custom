lucide.createIcons();

let select = document.querySelector('.select'),
selectValue = document.querySelector('#selected-value'),
optionsViewButton = document.querySelector('#options-view-button'),
inputOptions = document.querySelectorAll('.option input');

// Para cada input no inputOptions, vai adc o evento de click
inputOptions.forEach(input => {
  input.addEventListener('click', event => {
    // substitui o valor interno do selectvalue
    selectValue.textContent = input.dataset.label

    // Verificar se é click ou touch
    const isMouseOrTouch = 
    event.pointerType == "mouse" ||
    event.pointerType == "touch"

    // Realiza ação de click
    isMouseOrTouch && optionsViewButton.click()
  })
});

// Assessibilidade
windows.addEventListener('keydown',e => {
  if(!select.classList.contains('open')) return

  if(e.key == "Escape" || e.key == " ") {
    optionsViewButton.click()
  }
})

optionsViewButton.addEventListener('input', () => {
  select.classList.toggle('open')

  if(!select.classList.contains('open')) return

  const input = 
    document.querySelector('.option input:checked') ||
    document.querySelector('.option input')
})