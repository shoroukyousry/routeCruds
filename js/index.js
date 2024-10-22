//cruds system
//creat
//read
//ubdate
//delet
//sarche






var productName = document.getElementById("name");
var price = document.getElementById("price");
var img = document.getElementById("img");
var category = document.getElementById("category");
var button = document.getElementById("button");
var rowData =document.getElementById("rowData");


var productList =[];

if (localStorage.getItem("products") !== null){
    productList = JSON.parse(localStorage.getItem("products"));
    

displayProduct(productList);
};

function creat() {
 var  myOpject = {
    productName: productName.value,
    price: price.value,
    img: img.value,
    category: category.value,
  };


  productList.push(myOpject);
localStorage.setItem("products",JSON.stringify(productList));

  displayProduct();
  clearProduct();
  
}




function displayProduct() {
    var cartona=``
    for(i=0; i<productList.length ;i++){
        cartona+=`<div class="col-3">
            <div class="parent">
                <img src="img/1.jpeg">
                <h2>${productList[i].productName}</h2>
                <h3>${productList[i].price}</h3>
                <p>${productList[i].category}</p>
                <div class="btn" onclick="deletProduct(${i})">delet</div>
                <div class="btn ">ubdate</div>
            </div>
        </div> `
    }

    rowData.innerHTML=cartona;
    

}





function clearProduct() {
    
        productName.value= null;
        price.value = null;
        img.value = null;
        category.value= null;
      
    
}


function deletProduct(index) {

    productList.splice(index,1);
    localStorage.setItem("products",JSON.stringify(productList));
    displayProduct();
}