const myList = [
    'latte',
    'uova',
    'carne',
    'carote',
    'patate',
    'acqua',
    'formaggio',
    'pane',
]
console.log('myList', myList, typeof myList)


const myUl = document.querySelector('ul')

let i = 0
while (i < myList.length){

    console.log(myList[i]);

    myUl.innerHTML += `
        <li>
            ${myList[i]}
        </li>
    `

    i++

}