class Person{
    constructor(name,description,ocupation,imageSrc){
        this.name=name
        this.description=description
        this.ocupation=ocupation
        this.imageSrc=imageSrc
    }
    changeName(){
        const divName=document.querySelector("strong")
        divName.innerHTML=`<strong>${this.name}</strong>`
    }
    changeDescription(){
        const divDescription=document.querySelector("h1")
        divDescription.innerHTML=this.description
    }
    changeOcupation(){
        const divOcupation=document.querySelector("span")
        divOcupation.innerHTML=this.ocupation
    }
    changeImage(){
        const img=document.querySelector("#profile-img")
        img.src=this.imageSrc
    }
    changeAll(){
        this.changeName()
        this.changeDescription()
        this.changeOcupation()
        this.changeImage()
    }
}
const person1=new Person("Tanya Sinclair","“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”","UX Engineer","images/image-tanya.jpg")
const person2=new Person("John Tarkpor","“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”","Junior Front-end Developer","images/image-john.jpg")
let arrayPersons=[person1,person2]
const buttonPrevious=document.querySelector("#previous")
const buttonNext=document.querySelector("#next")
let number=0 
buttonPrevious.addEventListener("click",(event)=>{
    if(number===0)return
    number--
    arrayPersons[number].changeAll()
})
buttonNext.addEventListener("click",(event)=>{
    if(number===arrayPersons.length-1)return
    number++
    arrayPersons[number].changeAll()
})
