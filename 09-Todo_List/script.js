const add_btn = document.querySelector('#submit');
const input = document.querySelector('#work');
const list = document.querySelector('#list');
var todo = document.querySelector('.list_item');

add_btn.addEventListener('click' , ()=>{
    var val = input.value;
    var data = `<div class="list_item">
                    <input type="checkbox" name="checkbox" id="checkbox" value="checkbox">
                    <label>${val}</label>
                </div>`;
    list.innerHTML += data;
});
if(todo.length){
    todo.forEach((item)=>{
        item.addEventListener('change', ()=>{
            var check_box = item.querySelector('#checkbox');
            var value = item.querySelector('label');
            if(check_box.checked){
                value.style.textDecoration = 'line-through';
                console.log(value.innerHTML);
            }else{
                value.style.textDecoration = 'none';
            }
        });
    });
}