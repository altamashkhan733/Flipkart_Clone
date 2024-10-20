let arr = [  // ek arry banaya jismy img link and tittle store kia
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
      title: "Grocery",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
      title: "Mobiles",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
      title: "Fashion",
      href:'Product.html'
    },
    ,
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
      title: "Electronics",
    },
    ,
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
      title: "Home and Furtinure",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100",
      title: "Appliances",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
      title: "Travel",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
      title: "Beauty,Toys and More",
      href: "",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
      title: "Two Wheelers",
      href: "",
    },
  ];

//  let arr = [1,2,3,4,5];
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

arr.map((element)=> {
    let image= document.createElement("img"); // ek image tag create kia
    image.src = element.img_src; // iMAGE KO STORE 
  
  let title = document.createElement("p"); // ek prgrh tag create kia
  title.innerHTML = element.title;  // tittle ko store krwaya 
 
  let box = document.createElement('div'); // then ek div create kia
  
  box.append(image,title); // then usko append ki hlp se div k andr store kia
  
 document.getElementById("categories").append(box); // then usko categories waly section my store kia

})

let a = document.getElementById("categories");



