
    const unitPrices = {
        article1: 350,
        article2: 590,
        article3: 1200
    };



let addArticle= function (id) {
    const input = document.getElementById(id + 'Quantity');
    input.value= parseInt(input.value) + 1
    document.getElementById(id + 'Price').innerText=input.value * unitPrices[id] 
    Total()
}

let removeArticle= function (id) {
    const input= document.getElementById(id+'Quantity');
   input.value = parseInt(input.value)
   if (input.value>1) {
       input.value-=1
   }    
   document.getElementById(id + 'Price').innerText=input.value * unitPrices[id] 
   Total()

}
function updateQuantity(id, value) {
    
    document.getElementById(id+"Price").innerText =  value * unitPrices[id] 
    Total()
}
function toggle(event){
    event.target.classList.toggle('active');
};
function DeleteRow() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode.parentNode // the row to be removed
    tr.parentNode.removeChild(tr);
    Total()
}
function Total(){
    let sum = 0;

    const article1Price = document.getElementById('article1Price');
    if(article1Price != null) {
        sum += parseInt(article1Price.innerText);
    }

    const article2Price = document.getElementById('article2Price');
    if(article2Price) {
        sum += parseInt(article2Price.innerText);
    }

    const article3Price = document.getElementById('article3Price');
    if(article3Price) {
        sum += parseInt(article3Price.innerText);
    }
   
    document.getElementById('Total').innerText= sum +' TND';
        
}

    document.getElementById("checkIt").addEventListener('click',function message() {
        alert('sa77a w far7a') 
        
    })