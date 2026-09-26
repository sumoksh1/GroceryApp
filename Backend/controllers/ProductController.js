// /api/product/add
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);

    const images = req.files;  //from multer
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await connectCloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );

    await Product.create({ ...productData, image: imagesUrl });
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// // /api/product/list
// export const ProductList = async(req, res) {

// }

// // /api/product/:id
// export const productById = async(req, res) {

// }

// // /api/product/stock
// export const changeStock = async(req, res) {

// }
