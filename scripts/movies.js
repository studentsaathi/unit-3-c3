// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
//let movies= document.getElementById("movies");
//movies=document.getElementById("movies");
//var cartData =JSON.parse(localStorage.getItem("cart"))||[];
//console.log(cartData);
 function Search(){
   
    
        const search=document.getElementById("search").value;
        const url=`https://www.omdbapi.com/?s=${search}&page=tt3896198&apikey=c980f154`
        fetch(url)
        .then(function(res){
          return res.json();
        })
        .then(function(res){
           append(res);
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        })

       
        




    
}
function append(data){
    let movies=document.getElementById("movies");
    let div=document.createElement("div")
    var c=data.Search

    for(var i=0;i<c.leanth;i++)

    movies.innerText=null;
    let name=document.createElement("p");
    name.innerText=`Movies:-${data.Search[i].Title}`
    let image=document.createElement("img");
    image.src=data.Search[i].Poster;
    
     let=button=document.createElement("button")
     button.innerText="Book Movies"
     button.addEventListener("click",function(){
         localStorage.setItem("name",data.Search[0].Title)
         localStorage.setItem("image",data.Search[0].Poste)
         //addToCart(data);
         alert("add movies")

         
     })
     div.append(name,image,button)
    movies.append(div)
     // function addToCart(data){
       //  cartData.push(data)
       //  localStorage.setItem("cart",JSON.stringify(cartData));
         
        
       
     }

    
     

    





//var totalamount = JSON.parse(localStorage.getItem("total"))||[]

    

var showamount=document.getElementById("wallet")
    showamount.innerText=localStorage.getItem("amount")

