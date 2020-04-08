

const library = require('./books.js');
//console.log(library);
//console.log for all titles and their authors 
/**for(let i= 0; i<library.length; i++ ){
    //console.log(library[0]);
    let title = library[i].title
    let  author = library[i].author
    console.log("Book :" + title);
    console.log("Author :"+ author);
   
}**/

//only books published by O'Reilly Media
/**for(let i= 0; i<library.length; i++ ){
    //let pub = library[i].publisher
    //console.log(pub);
    console.log(library[i[5]]);
    //if(library[5]=== "O'Reilly Media"){
        //let pub = library[i].publisher
      //console.log(library[i]);
    //}
}**/

//display all books which have 350 pages 
for(let x = 0; x<library.length; x++){
    let numpages = library[x].pages 
    //console.log(numpages);
   
    if(library[x].pages ==350){
        console.log(library[x].title);
    }
}

   




