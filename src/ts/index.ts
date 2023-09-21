import { startTimer } from './timer.ts'
import {buttonsImg, changeActiveImg} from "./slider.ts";
import {addStyleActiveSelectArrow, selects} from "./select.ts";
buttonsImg.forEach((item: Element) => changeActiveImg(item as HTMLElement))

selects.forEach((select: Element) => addStyleActiveSelectArrow(select as HTMLSelectElement))

startTimer()