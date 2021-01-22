

const curCell = document.querySelector('#cell-3-2')
const newCell = document.querySelector('#cell-4-1')
const newRedChecker = document.createElement("div")

newRedChecker.classList.add("checker", "red-checker")

const toggle1 = () => {
    
    curCell.removeChild(curCell.childNodes[0])

    newCell.appendChild(newRedChecker)

    
}