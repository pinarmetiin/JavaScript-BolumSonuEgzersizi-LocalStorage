// degiskenler tanimlandi, ilgili id bilgilerine erisildi
let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0;
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

// counterDom a baslangic degeri verildi
counterDOM.innerHTML = counter

// butonların click ozelligine erisildi.
increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

/* v1
function clickEvent(){
    this.id == "increase" ? counterDOM.innerHTML = counter +=1 :  counterDOM.innerHTML = counter -=1    
} 
*/ 

// v2
function clickEvent(){
    this.id == "increase" ? counter +=1 : counter -=1 
    localStorage.setItem("counter" , counter)
    counterDOM.innerHTML = counter   
}