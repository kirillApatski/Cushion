export const arrowColorSelect = document.querySelector('.select-color-arrow')
export const arrowSizeSelect = document.querySelector('.select-size-arrow')
export const selects = document.querySelectorAll('.products-form__items-select')

export const addStyleActiveSelectArrow = (select: HTMLSelectElement) => {
  select?.addEventListener('touchend', event => {
    const selectItem = event.currentTarget as HTMLSelectElement
    if(selectItem.name === 'color' && selectItem.clientHeight){
      arrowColorSelect?.classList.add('active')
    }
    if(selectItem.name === 'size' && selectItem.clientHeight) {
      arrowSizeSelect?.classList.add('active')
    }
  })
  select?.addEventListener('blur', () => {
      arrowColorSelect?.classList.remove('active')
    arrowSizeSelect?.classList.remove('active')
  })
  select?.addEventListener('change', () => {
    arrowColorSelect?.classList.remove('active')
    arrowSizeSelect?.classList.remove('active')
  })
}

