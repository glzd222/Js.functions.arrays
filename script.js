
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

  // task6  0 - 100 arası yalnız sadə ədədləri console'da çap edin

  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      console.log(i);
    }
  }

  // # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın\

  let sumOfPrices = 0;
  for (let i = 0; i < products.length; i++) {
    sumOfPrices += products[i].price;
  }
  
  console.log("SUM: ", sumOfPrices);
  console.log("AVERAGE: ", sumOfPrices / products.length);
  
  let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];


  //   countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

for (let i = 0; i < countries.length; i++) {
  if (
    countries[i].toLowerCase()[0] === "a" &&
    countries[i].toLowerCase()[countries[i].length - 1] === "a"
  ) {
    console.log(countries[i]);
  }
}
  

