// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(json => {
//     const userName = document.querySelector(".albumId");
//     userName.innerHTML = json[0].albumId;
//     const id = document.querySelector(".id")
//     id.innerHTML = json[0].id;
//     const title = document.querySelector(".title")
//     title.innerHTML = json[0].title;
//     const url = document.querySelector(".url");
//     url.innerHTML  = json[0].url;
//     const image = document.querySelector(".image");
//     image.src = json[0].thumbnailUrl;
//     console.log(image)
//     })

// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(function(responsive){
//        return responsive.json();
//     })
//     .then(function(data){
//        appendData(data);
//     })
//     ;
//     function appendData(data){
//         const cards = document.querySelector(".cards") 
//        for(var i = 0; i <=5000; i++){
//            var li  = document.createElement("img");
//            li.src = data[i].url;
//            li.style.width = "50%"
//            li.style.marginLeft = "22%"
//            li.style.marginTop = "3%"
//            var h6 = document.createElement("h3")
//            h6.innerHTML = data[i].title;
//            h6.classList = "card__title"
//            var h7 = document.createElement("h2")
//            h7.innerHTML = data[i].id; 
//            h7.classList="card__id"
//            var h8 = document.createElement("h4")
//            h8.innerHTML = data[i].thumbnailUrl;                     
//            var div = document.createElement("div")
//            div.classList="box__card"
//            div.style.marginTop = "2%"
//            div.appendChild(li)
//            div.appendChild(h6)
//            div.appendChild(h7)
//            div.appendChild(h8)
//            cards.appendChild(div)
//            div.style.marginLeft = "25%"
//            div.style.border = "1px solid #0eb0d4"
//            div.style.borderRadius = "15PX"
//            div.style.marginBottom = "3%"
//            div.style.width = "50%"
//            h6.style.textAlign = "center"
//            h7.style.marginLeft = "2%"
//            h8.style.marginLeft = "4%"

//        }
//     };

//     function myFunction() {
//       var input, filter, cards, cardContainer,  title, i;
//       input = document.getElementById("myFilter");
//       filter = input.value.toUpperCase();
//       cardContainer = document.getElementById("main__cards");
//       cards = cardContainer.getElementsByClassName("box__card");
//       console.log(cards);
//       for (i = 0; i < cards.length; i++) {
//           title = cards[i].querySelector(".card__id");
//           if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
//               cards[i].style.display = "";
//           } else {
//               cards[i].style.display = "none";
//           }
//       }
//   }



fetch('app.json')
    .then(function(responsive){
       return responsive.json();
    })
    .then(function(data){
       appendData(data);
    })
    ;
   
    function appendData(data){
        const cards = document.querySelector(".cards") 
       for(var i = 0; i <=data.length; i++){
           var li  = document.createElement("img");
           li.src = data[i].url;
           li.style.width = "50%"
           li.style.marginLeft = "22%"
           li.style.marginTop = "3%"

           var h6 = document.createElement("h3")
           h6.innerHTML = data[i].title;
           h6.classList = "card__title"
           var h7 = document.createElement("h2")
           h7.innerHTML = data[i].id; 
           h7.classList="card__id"
           
           var p = document.createElement("h5")
           p.innerHTML = data[i].p;
           p.style.padding = "13px"
           var div = document.createElement("div")
           div.classList="box__card"

           div.appendChild(h7)
           div.appendChild(li)
           div.appendChild(h6)
          
           div.appendChild(p)

           cards.appendChild(div)
           div.style.marginLeft = "25%"
           div.style.border = "1px solid #0eb0d4"
           div.style.borderRadius = "15PX"
           div.style.marginBottom = "3%"



           div.style.width = "50%"
           h6.style.textAlign = "center"
           h7.style.marginLeft = "2%"


       }
    };








  function myFunction() {
    var input, filter, cards, cardContainer,  title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("main__cards");
    cards = cardContainer.getElementsByClassName("box__card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card__id ");

        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

}
function myFunctionn() {
    var input, filter, cards, cardContainer,  title, i;
    input = document.getElementById("myFilterr");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("main__cards");
    cards = cardContainer.getElementsByClassName("box__card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card__title");

        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

}