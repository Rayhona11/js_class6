let imgE1 = document.querySelector('.image')
let card = document.querySelectorAll('.card')

// for (let i = 0; i < card.length; i++) {
//     card[i].addEventListener('click', (e)=>{
//         let imgUrl = e.target.getAttribute('src')
//         imgE1.setAttribute('src', imgUrl)
//     })
// }
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click',(e)=>{
        let imgUrl = e.target.getAttribute('src')
        imgE1.setAttribute('src', imgUrl)
  })
}