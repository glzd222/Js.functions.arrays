
// task1 	
// Rəqəmləri eyni olan bütün iki rəqəmli ədələrin çapa verən proqram tərtib edin.
 
function eded() {
    let reqem = [];
    for (let i = 10; i < 1000; i++) {
      let num1 = i % 10;
      let num2 = Math.floor(i / 10);
      if (num1 == num2) {
reqem.push(i);
      }
    }return reqem;
    
  }
  console.log(eded());


//   task4 Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.


let cumle = prompt("cumleni yazin");

function soz(cumle) {
    return cumle.trim().split("");
  }
  
  console.log(soz(cumle));


//   task9  product arrayindəki producların qiymətləri cəmini və ortalamasını tapın

const products = [
    {
      id: 1,
      title: "Smartphone",
      description: "A high-end smartphone with the latest features.",
      price: 799.99,
    },
    {
      id: 2,
      title: "Laptop",
      description: "Powerful laptop with a large screen and fast processor.",
      price: 1299.99,
    },
    {
      id: 3,
      title: "Coffee Maker",
      description: "An automatic coffee maker with a built-in grinder.",
      price: 99.99,
    },
    {
      id: 4,
      title: "Headphones",
      description: "Wireless over-ear headphones with noise-cancellation.",
      price: 199.99,
    },
    {
      id: 5,
      title: "Smart TV",
      description: "55-inch 4K Smart TV with streaming apps built-in.",
      price: 699.99,
    },
  ];

  function average(products) {
   
    let totalprice=0

    for (let i = 0; i < products.length; i++ ) {
        totalPrice += price;

        const averagePrice = totalPrice / products.length;
   }
   return {averagePrice};
  }

  