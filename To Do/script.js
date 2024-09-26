let taskList = document.querySelector('#taskList');
let texts;
let dele;

function li(classes){
    let Li = document.createElement('li');
    Li.classList.add.apply(Li.classList,classes)
    return Li;
};
function span(classes){
    let Span = document.createElement('span');
    if(classes.length===0){
        return Span;
    }
    Span.classList.add.apply(Span.classList,classes)
    return Span;
};
function i(classes){
    let I = document.createElement('i');
    I.classList.add.apply(I.classList,classes)
    return I
}
function div(classes){
    let Div = document.createElement('div');
    Div.classList = classes
    return Div;
}

function saveData(){
    localStorage.setItem('data',document.querySelector('#taskList').innerHTML)
}
function showData(){
    document.querySelector('#taskList').innerHTML=localStorage.getItem('data');
}


function addTaskPage(inputValue){
    let liClass = li(['border-b', 'px-1', 'pb-1', 'flex', 'justify-between','items-center'])
    let iCircle = i(['fa-regular','fa-circle', 'text-sm','text-sky-500']);
    let iCross = i(['fa-regular', 'fa-circle-xmark','mr-[0px]']);
    let spanText = span(['font-normal','tracking-wide','ml-1','capitalize']);
    let div1 = div('texts')
    let div2 = div('delete')
    let spanIconCircle=span([])
    let spanIconCross = span([])
        
    spanIconCircle.appendChild(iCircle);
    div1.appendChild(spanIconCircle);

    spanText.innerText=inputValue;
    div1.appendChild(spanText)

    spanIconCross.appendChild(iCross)
    div2.appendChild(spanIconCross)

    liClass.appendChild(div1);
    liClass.appendChild(div2);
        
    taskList.appendChild(liClass)

    div2.classList.add('hover:bg-gray-200','bg-gray-100','text-red-400','hover:text-red-500','px-1','mt-1','rounded-full')
    div2.addEventListener('click',()=>{
        liClass.remove()
        saveData() 
    })

    div1.style.cursor='pointer'
    div1.addEventListener('click',()=>{
        if(!spanText.classList.contains('line-through')){
            spanText.classList.add('line-through')
            iCircle.classList.remove('fa-circle','text-sky-500')
            iCircle.classList.add('fa-circle-check','text-green-500')   
        }else{
            spanText.classList.remove('line-through')
            iCircle.classList.remove('fa-circle-check','text-green-500')
            iCircle.classList.add('fa-circle','text-sky-500')
           
        } 
        saveData()      
    })
}

function addTask(event){
    event.preventDefault();
    let inputField = document.querySelector('input[type="text"]');
    let inputValue = inputField.value;
    if(inputValue===''){
        alert('You must write something.');
    }else{
        addTaskPage(inputValue);
        saveData()
    };
    inputField.value="";
}
showData()

let cancel = document.querySelectorAll('.delete');
cancel.forEach((c)=>{
    c.addEventListener('click',()=>{
        c.parentElement.remove()
        saveData()
    })
})
let edits = document.querySelectorAll('.texts');
edits.forEach((edit)=>{
    edit.addEventListener('click',()=>{
        let children = edit.childNodes
        let icon = children[0].childNodes
        if(!children[1].classList.contains('line-through')){
            children[1].classList.add('line-through')
            icon[0].classList.remove('fa-circle','text-sky-500')
            icon[0].classList.add('fa-circle-check','text-green-500')
        }else{
            children[1].classList.remove('line-through')
            icon[0].classList.remove('fa-circle-check','text-green-500')
            icon[0].classList.add('fa-circle','text-sky-500') 
        }
        saveData()
    })
})

