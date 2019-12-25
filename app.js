const headcoins = ['./headcoins/coin1.png', './headcoins/coin2.png',  './headcoins/coin3.png', './headcoins/coin4.png', './headcoins/coin5.png', './headcoins/coin6.png', './headcoins/coin7.png',]
const tailcoins = ['./tailscoins/cointail1.png', './tailscoins/cointail2.png', './tailscoins/cointail3.png', './tailscoins/cointail4.png', './tailscoins/cointail5.png', './tailscoins/cointail6.png']
let displayimage = document.querySelector('.displayimage')
let text1= document.querySelector('.displaytext1')
let text2= document.querySelector('.displaytext')

// get a random number between 1 and 100 
function flipcoin() {
    let a = (Math.random() * (1 + 100))
    if (a >= 50) {
        runheads()
        
    }
    else {
        runtails()
        
    }
    displayimage.setAttribute('src' , 'coingif.gif')
};


function heads() {
    const headIndex= parseInt(Math.random()*headcoins.length)
    displayimage.setAttribute('src' , headcoins[headIndex])
    text1.classList.remove('hidden')
    text2.classList.add('hidden')
}
function tails() {
    const tailIndex= parseInt(Math.random()*tailcoins.length)
    displayimage.setAttribute('src' , tailcoins[tailIndex])
    text2.classList.remove('hidden')
    text1.classList.add('hidden')
}
function runheads() {
    setTimeout(() => {
        heads()
    }, 2000);
}
function runtails() {
    setTimeout(() => {
        tails()
    }, 2000);
}