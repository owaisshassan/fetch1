

 

function getTitle(){
    let title = document.getElementById("movie").value;
    // title.innerText = null;
    
    //console.log(title)

    let url = `https://www.omdbapi.com/?t=${title}&apikey=f2a07605`;

    //console.log(url)
    async function getData(){
    
   

   
    try{
    
    let res = await fetch(url);

    //console.log(res) this gives the data in chunks
    

    let data = await res.json(); //use await instead of .
    if(data.Response=="False"){
        throw new Error("sdbjb");
    }
    append(data)//;//here user is exixts
    
    console.log(data)
    }
    catch(err){
        
        error()
       //console.log(`error is ${err}`)

        
    }
    document.getElementById("movie").value = ""
}
getData()
}   
    




function append(data){

     let container = document.getElementById("container");
     container.innerHTML = null;

     
     let img = document.createElement("img");
     img.src = data.Poster;
     


     let h3 = document.createElement("h3");
     h3.innerText = `Movie Name - ${data.Title}`;
     

     let p = document.createElement("p")
     p.innerText = `Released Date - ${data.Released}`;

     let p1 = document.createElement("p")
     p1.innerText  = `imDb Rating - ${data.imdbRating}`;

   

     let h1 = document.createElement("h3")
     h1.innerText = `Actors - ${data.Actors}`;

     let h2 = document.createElement("h3");
     h2.innerText = `Director - ${data.Director}`;

     let p2 = document.createElement("p")
     p2.innerText = `Genre - ${data.Genre}`;

    let p3 = document.createElement("p")
    p3.innerText = `Language - ${data.Language}`;

    let h4 = document.createElement("h3")
    h4.innerText = `Writer - ${data.Writer}`;

    let p4 = document.createElement("p")
    p4.innerText = `Released Year - ${data.Year}`;

    let p5 =document.createElement("p")
    p5.innerText = `Plot - ${data.Plot}`;

    let rec = document.createElement("p");
     if(data.imdbRating>8.5){
         rec.innerHTML="Recommended"
         rec.style.textDecoration = "underline"
         
     }
    


     container.append(img,h3,h1,h2,h4,p5,p2,p,p1,rec,p3,p4)

}
    
function error(){
let container = document.getElementById("container");
container.innerHTML = null;
// container.innerText = null;
        let div = document.createElement("div")
        // let h1 = document.createElement("h1")
        // h1.innerText="Movie Not found"
        let error = document.createElement("img")
        // error.innerText = "Not Found"
        error.src = "https://i.makeagif.com/media/11-04-2015/mfnzwt.gif"
        div.append(error);

        container.append(div);
}