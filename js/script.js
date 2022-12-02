let list = document.querySelector('.list-group')
let addInput = document.querySelector('.form-control')
let modal = document.querySelector('.modal')

function CreateNewElement() {
    //add todo
    let todo = addInput.value
    let newLi = document.createElement ('li')
    let newSpan = document.createElement ('span')
    let newIcon = document.createElement ('i')
    newLi.className = 'list-group-item d-flex justify-content-between align-items-center'
    newIcon.className = 'fa fa-trash-o delete'
    newSpan.innerHTML = todo  
    newLi.appendChild(newSpan)
    newLi.appendChild(newIcon)
    list.appendChild(newLi)
    addInput.value = ''
//delete todo
    newIcon.addEventListener('click',e=>{
        e.target.parentElement.remove()
        modal.style.display = 'flex'
        modal.innerHTML = 'your todo deleted'
        modal.style.backgroundColor = '#9c2118'
        setTimeout(function(){
            
         modal.style.display = 'none'
         },2000)
    })
   
      
   

}

addInput.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        event.preventDefault()
        if(!addInput.value){
            return
        }else{
               CreateNewElement()
               modal.style.display = 'flex'
               modal.innerHTML = 'your todo added'
               modal.style.backgroundColor = '#189c2a'
               
               setTimeout(function(){
                   
                modal.style.display = 'none'
                },2000)
        }
   

    }

})
