let h = document.querySelector('h1')
let d = document.querySelector('div')


// // h.onclick = (event)=>{
// //     console.log(event);
// //     if(event.shiftKey){
// //         h.style.color = 'red'
// //     }else {
// //         h.style.color = 'green'
// //     }
// // }
// // d.onclick = (e) => {
// //     e.target.style.color = 'red'
// // }

// // LISTENERS
// // ATTRIBUTE, ONTYPE, addEventListener()
// function test (){
//     console.log('ON ATTRIBUTE');
// }

// h.onclick = () => {
//     console.log('ON TYPE');

// }

// h.onclick = () => {
//     console.log('hvewjhcvhwy');
// }

// h.addEventListener('click',()=>{
//     console.log('EVENT LISTENER');
// })
// h.addEventListener('click',()=>{
//     console.log('EVENT LISTENER');
// })


// document.querySelector('#on').onclick = ()=>{
//     document.querySelector('.prop').classList.add('rotate')
// }
// document.querySelector('#off').onclick = ()=>{
//     document.querySelector('.prop').classList.remove('rotate')
// }

let btn = document.querySelector('button')

btn.addEventListener('click', () =>{
    d.classList.toggle('dark')
    if(btn.innerText === 'NIGHT'){
        btn.innerText = 'LIGHT'
        h.innerText = 'HAYRLI TUN'
    }else{
        btn.innerText = 'NIGHT'
        h.innerText = "HAYRLI KUN"
    }
})