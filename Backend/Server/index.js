const express = require('express')
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 7000;

app.use(express.json());
app.use(cors());

let customers={
    cus: [
      {"c_name1": "John"},
      {"c_name": "Jane"},
      {"c_name": "Ahmed"},
      {"c_name": "Maria"},
      {"c_name": "James"},
      {"c_name": "Emily"},
      {"c_name": "Robert"},
      {"c_name": "Patricia"},
      {"c_name": "Michael"},
      {"c_name": "Linda"}
    ]
  };
  console.log(customers.cus[0].c_name1);
 let products={
    pro: [
    {
      "productName": "Elegant Cotton Kurta",
      "rating": 4.5,
      "productShortDetail": "A pure cotton kurta in navy blue, perfect for casual and semi-formal wear.",
      "price": 25.99
    },
    {
      "productName": "Traditional Silk Kurta",
      "rating": 4.8,
      "productShortDetail": "Luxurious silk kurta with intricate embroidery, ideal for weddings and festivities.",
      "price": 45.50
    },
    {
      "productName": "Casual Linen Kurta",
      "rating": 4.2,
      "productShortDetail": "Light and breezy linen kurta in white, great for everyday comfort.",
      "price": 29.99
    },
    {
      "productName": "Festive Georgette Kurta",
      "rating": 4.7,
      "productShortDetail": "Bright and beautiful georgette kurta with detailed work, perfect for festive occasions.",
      "price": 39.99
    },
    {
      "productName": "Designer Embroidered Kurta",
      "rating": 4.9,
      "productShortDetail": "Exclusive designer kurta with hand-embroidered patterns, for those who want to make a statement.",
      "price": 59.99
    }
  ]
}

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
app.get("/profile",(req,res)=>{
    res.send(`you are in profile route ${req.params.id}`)
})
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
