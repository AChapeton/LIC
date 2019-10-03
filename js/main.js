const toggleCollapse = document.querySelector('.toggle-collapse span');
const nav = document.querySelector('.nav');

toggleCollapse.onclick = () =>{
    nav.classList.toggle('collapse');
}