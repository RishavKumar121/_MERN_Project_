import uploadOnCloudnary from "../config/cloudinary.js";
import Product from "../Model/productModel.js";

export const addProduct = async (req, res) => {
  try {
    let { name, description, price, category, subcategory, sizes, bestseller } =
      req.body;

    let image1 = await uploadOnCloudnary(req.files.image1[0].path);
    let image2 = await uploadOnCloudnary(req.files.image2[0].path);
    let image3 = await uploadOnCloudnary(req.files.image3[0].path);
    let image4 = await uploadOnCloudnary(req.files.image4[0].path);

    let productData = {
      name,
      description,
      price :Number(price),
      category,
      subcategory,
      sizes : JSON.parse(sizes),
      bestseller: bestseller === "true"?true:false,
      date : Date.now(), 
      image1,
      image2,
      image3,
      image4
    };

    const product = await Product.create(productData)

    return res.status(201).send({message:"Products created successfully...", product})
  } catch (error) {
     console.log(error)
      res.status(404).send({message:"Product error occcured..."})

  }
};


export const listProduct = async (req, res)=>{
  try {
    const product = await Product.find({})

        return res.status(200).send({message:" Found Products successfully...", product})
    
  } catch (error) {
      console.log(error)
      res.status(404).send({message:"ListProduct error occcured..."})
  }
}

export const removeProduct = async(req, res)=>{
   try {
    let {id} = req.params

    const product = await Product.findByIdAndDelete(id)
        return res.status(200).send({message:" Remove Products successfully...", product})

   } catch (error) {
     console.log(error)
      res.status(404).send({message:"Remove Product error occcured..."})
   }
}
