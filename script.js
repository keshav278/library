function createBook(title,author,pages,isRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
}
let myLibrary=[];
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let pages = document.querySelector(".pages");
let completed = document.querySelector("#isRead");
let hobbit = new createBook('The Hobbit','JRR Tolkien',400,true);
let dm = new createBook('Dark Matter','Blake Crouch',300,true);
myLibrary.push(hobbit);
myLibrary.push(dm);
const table = document.querySelector('table');
table.addEventListener('click',(e)=>{
      const curr=e.target.parentNode.parentNode.childNodes[1];
      if(e.target.innerHTML==="Delete"){
          if(confirm("Are you sure?"))
           delBook(findBookIndex(myLibrary,curr.innerText));
      }
      if(e.target.classList.contains("stat")){
          changeStat(findBookIndex(myLibrary,curr.innerText));
      }
      showLibrary();
});
function addtoLibrary(){
        
     let book = new createBook(title.value,author.value,pages.value,completed.checked);
     if(title.value===''||author.value===""||pages.value==="")
      {
          alert("Please fill all the fields");
         
      }
     else  
     {myLibrary.push(book);
     /*let tbodyRef = document.getElementById('list').getElementsByTagName('tbody')[0];
     let newBook=tbodyRef.insertRow();
     for(let prop in book){
         let newCell = newBook.insertCell();
         let newText = document.createTextNode(`${book[prop]}`);
         newCell.appendChild(newText);
     }
     let newCell = newBook.insertCell();
     let del = document.createElement('button');
     del.innerHTML="Delete";
     newCell.appendChile(del);
    */   
    
    showLibrary();}
    console.log(myLibrary);
}

function showLibrary(){
    let tbdy = document.getElementsByTagName('tbody')[0];
    
    tbdy.innerHTML='';
    myLibrary.forEach(book =>{
            
        let newBook =`<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><button class="stat">${book.isRead}</button></td>
        <td><button class="del">Delete</button></td>
        </tr>`;
        if(book.title===""||book.author===""||book.pages==="")
            newBook="";
        
      
    tbdy.insertAdjacentHTML('afterbegin',newBook);
    });
    
    
}
function findBookIndex(library,title){
     if(library.length===0||title===null)
      return;
     else{
         for (book of library)
          if(book.title===title)
            return library.indexOf(book);
     } 
}
function delBook(currBookindex){
    myLibrary.splice(currBookindex,currBookindex+1);
    
}   
function changeStat(currBookindex){
    if(myLibrary[currBookindex].isRead===true)
      myLibrary[currBookindex].isRead=false;
    else
      myLibrary[currBookindex].isRead=true;
    console.log(myLibrary);  
}
let addBook = document.querySelector(".addNew");
addBook.addEventListener('click',addtoLibrary);
showLibrary();

