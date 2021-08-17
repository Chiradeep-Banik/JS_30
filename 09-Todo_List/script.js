const add_btn = document.querySelector('#submit');
const input = document.querySelector('#work');
var list = document.querySelector('#list');
var check,label,x ;
var todo = [];
add_btn.addEventListener('click' , ()=>{
    var val = input.value;
    const item ={
        text : val,
        done : false
    };
    todo.push(item);
    render(list,todo);
});
function render(list,list_items){
    list.innerHTML = (list_items.map((item,index)=>{
        return `<div class="list_item">
            <input type="checkbox" name="checkbox" id="checkbox${index}" ${item.done == false ? '' : 'checked'}>
            <label for="checkbox${index}" ${item.done == true ? 'style.textDecoration = "line-through"' : '"style.textDecoration = "none"'}>${item.text}</label>
        </div>`
    })).join('');
    console.log(list_items);
}
