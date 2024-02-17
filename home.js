
    document.addEventListener('DOMContentLoaded', function() {
        const closeIcon = document.querySelector('.fa-xmark');
        const signUpDiv = document.querySelector('.sign-up');

        closeIcon.addEventListener('click', function() {
            signUpDiv.style.display = 'none';
        });
    });


    const container = document.querySelector(".container")
    const btns = document.querySelectorAll(".btn")
    const imgList =["1","2","3","4","5"]
    let index = 0
    btns.forEach( function(button){
        button.addEventListener("click",function(){
        console.log("clicked")
        if(button.classList.contains("btn-left")){
           index--;
           if(index<0){
            index = imgList.length-1
           }
           container.style.background = `url("image/${imgList[index]}.jpg") center/cover fixed no-repeat`
        
        }
        else{
            index++;
            if(index==imgList.length){
             index = imgList.length-1
            }
            container.style.background = `url("image/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
        })
    })


    // ------------------------------------
    
// Side navbar
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click",function()
{
sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// Product Search Functionality
var productContainer = document.getElementById("products-container")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()
    for(count = 0;count<productList.length;count=count+1)
    {
        var productname = productList[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})


// Get all checkboxes
var checkboxes = document.querySelectorAll('input[type="checkbox"][name="check"]');

// Loop through each checkbox
checkboxes.forEach(function(checkbox) {
    // Add click event listener to each checkbox
    checkbox.addEventListener('click', function() {
        // Get the corresponding product name
        var productName = this.value;
        
        // Select the product div based on the product name
        var productHeading = document.querySelector('.products .product h1[value="' + productName + '"]');
        
        // Check if the productHeading exists before using closest()
        if (productHeading) {
            var productDiv = productHeading.closest('.product');
            
            // Toggle display of the product div based on checkbox state
            productDiv.style.display = this.checked ? 'block' : 'none';
        }
    });
});

