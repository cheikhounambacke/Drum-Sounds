let total = document.querySelectorAll('button').length
console.log(total)

// if you press a button a sound will happen

for (let i = 0; i<total; i++){
    document.querySelectorAll('button')[i].addEventListener('click',function(){
        let buttonClicked = this.innerHTML
        makeSound(buttonClicked)
        animate(buttonClicked)
        
    
    })
}

// if a key is pressed form the keyboard then a sound will happen
document.addEventListener('keydown',function(event){
    makeSound(event.key)
    animate(event.key)
})
function animate(currentKey){
   var activeButton = document.querySelector("." + currentKey).classList.add('shadow')
   setTimeout(() => {
       activeButton.classList.remove('shadow')
   },100);
}


function makeSound(key){
    switch(key){
        case 'w':
            var w = new Audio('sounds/crash.mp3')
            w.play()
            break
            case 'a':
            var a = new Audio('sounds/tom-3.mp3')
            a.play()
            break
            case 'j':
            var j = new Audio('sounds/snare.mp3')
            j.play()
            break
            case 'k':
            var k = new Audio('sounds/tom-1.mp3')
            k.play()
            break
            case 'l':
            var l = new Audio('sounds/tom-2.mp3')
            l.play()
            break
            case 'd':
            var d = new Audio('sounds/tom-4.mp3')
            d.play()
            break
            case 'w':
            var s = new Audio('sounds/kick-bass.mp3')
            s.play()

    }

}

