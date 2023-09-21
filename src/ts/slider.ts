const currentImg = document.getElementById('current-img')

export const buttonsImg = document.querySelectorAll('.content__slider-buttons__img')

export const changeActiveImg = (item: HTMLElement) => {
  item.addEventListener('click', (event: MouseEvent) => {
    const currentActiveImg = document.querySelector('.content__slider-buttons__img.active')
    const currentItem = event.currentTarget as HTMLElement
    const itemSrc = currentItem.getAttribute('src')
    if(itemSrc) {

      currentImg?.setAttribute('src', itemSrc)
      currentItem?.classList.add('active')
      currentActiveImg?.classList.remove('active')
    }
  })
}