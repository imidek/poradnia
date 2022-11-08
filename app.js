const btn = document.querySelector('button');
const lists = document.querySelectorAll('li')

btn.addEventListener('click', e=>{
    alert(e.target)
})

lists.forEach(list=>{
    list.addEventListener('click',e=>{
        console.log(e.target);
    })
})