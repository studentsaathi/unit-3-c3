// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var cartData=JSON.parse(localStorage.getItem("cart"))
function append(data){
    let movies=document.getElementById("movies");
    let div=document.createElement("div")


    for(var i=0;i<c.leanth;i++)

    movies.innerText=null;
    let name=document.createElement("p");
    name.innerText=`Movies:-${data.Search[i].Title}`
    let image=document.createElement("img");
    image.src=data.Search[i].Poster;
    
     let=button=document.createElement("button")
     button.innerText="Book Movies"
     button.addEventListener("click",function(){
         addToCart(data);
         alert("add movies")
         
     })
     function addToCart(data){
         cartData.push(data)
         localStorage.setItem("cart",JSON.stringify(cartData));
         
        
     }

    div.append(name,image,button)
    movie.append(div)
     
    }