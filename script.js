const itemForm =document.getElementById('item-form');
const itemInput =document.getElementById('item-input');
const itemlist =document.getElementById('item-list');


itemForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newItem = itemInput.value;

    if(newItem === ''){
        alert('Vui lòng nhập item');
        return;
    }
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    console.log(li);
    itemlist.appendChild(li);
    itemInput.value='';
});
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon =createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;

}
console.log(itemForm);