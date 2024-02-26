const express = require('express')
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 7000;

app.use(express.json());
app.use(cors());

// let customers={
//     cus: [
//       {"c_name1": "John"},
//       {"c_name": "Jane"},
//       {"c_name": "Ahmed"},
//       {"c_name": "Maria"},
//       {"c_name": "James"},
//       {"c_name": "Emily"},
//       {"c_name": "Robert"},
//       {"c_name": "Patricia"},
//       {"c_name": "Michael"},
//       {"c_name": "Linda"}
//     ]
//   };
let customers={
 cus : [
    {
      "c_id": "224001",
      "mobile_number": "+11234567890",
      "gender": "Male",
      "DOB": "1985-07-12",
      "alternate_mobile": "+11234567891",
      "address": "123 Elm St, Springfield, IL, 62704"
    },
    {
      "mobile_number": "+21234567890",
      "gender": "Female",
      "DOB": "1992-05-24",
      "alternate_mobile": "+21234567891",
      "address": "456 Maple Ave, Dayton, OH, 45402"
    },
    {
      "mobile_number": "+31234567890",
      "gender": "Female",
      "DOB": "1978-11-02",
      "alternate_mobile": "+31234567891",
      "address": "789 Oak Dr, Austin, TX, 78701"
    },
    {
      "mobile_number": "+41234567890",
      "gender": "Male",
      "DOB": "1990-01-15",
      "alternate_mobile": "+41234567891",
      "address": "321 Pine St, Seattle, WA, 98101"
    },
    {
      "mobile_number": "+51234567890",
      "gender": "Non-binary",
      "DOB": "1988-03-29",
      "alternate_mobile": "+51234567891",
      "address": "654 Birch Rd, Miami, FL, 33101"
    }
  ]
}

 let products={
    pro: [
    {

      "productName": "Elegant Kurta",
      "rating": 4.5,
      "productShortDetail": "A pure cotton kurta in navy blue, perfect for casual and semi-formal wear.",
      "price": 25.99,
      "image1":"C:\Aharsh Singh\fashion_ethnic\frontend\frontend-app\src\photo\Screenshot 2024-01-18 232103.png"
    },
    {
      "productName": "Traditional Kurta",
      "rating": 4.8,
      "productShortDetail": "Luxurious silk kurta with intricate embroidery.",
      "price": 45.50,
      "image":"C:\Aharsh Singh\fashion_ethnic\frontend\frontend-app\src\photo\Screenshot 2024-01-18 232103.png"
    },
    {
      "productName": "Casual Kurta",
      "rating": 4.2,
      "productShortDetail": "Light and breezy linen kurta in white, great for everyday comfort.",
      "price": 29.99,
      "image":"C:\Aharsh Singh\fashion_ethnic\frontend\frontend-app\src\photo\Screenshot 2024-01-18 232103.png"
    },
    {
      "productName": "Georgette Kurta",
      "rating": 4.7,
      "productShortDetail": "Bright and beautiful georgette kurta with detailed work.",
      "price": 39.99,
      "image":"C:\Aharsh Singh\fashion_ethnic\frontend\frontend-app\src\photo\Screenshot 2024-01-18 232103.png"
    },
    {
      "productName": "Designer Kurta",
      "rating": 4.9,
      "productShortDetail": "Exclusive designer kurta with hand-embroidered patterns.",
      "price": 59.99,
      "image2":"/Backend/Server/photo/Screenshot 2024-01-18 232103.png"
    }
  ]
}
// console.log(products.pro.image2)
app.get("/login",(req,res)=>{
    res.send("you are in login route");
});
app.get("/wishlist",(req,res)=>{
    res.send("you are in wishlist route");
});
app.get("/home",(req,res)=>{
    // res.send("you are in home route");
    res.json(products.pro);
});
app.get("/products",(req,res)=>{
  res.json(products.pro);
});
app.get("/profile/:c_id", (req, res) => {
  const { c_id } = req.params;
  // Access the `cus` array inside the `customers` object
  const customer = customers.cus.find((c) => c.c_id === c_id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).send('Customer not found');
  }
});
app.post("/create_account",(req,res)=>{
    res.send("you are in create account route");
});
app.get("/customer", (req, res) => {
    res.json(customers.cus);
  });
app.get("/Navbar/:customername",(req,res)=>{
    //res.send("you are in cus details");
    const customer = customers.cus.find((c) =>c.c_name === req.params.customername);
    if(!customer){
        res.status(404).send("customer not found");
    }else{
        res.json(customer);
    }
});
app.listen(port,()=>{
    console.log(`app running on the ${port}`);
});

