import {productModel} from "../../models/product.js";


export const createProduct = async (req, res, next) => {
    try {
        if (!req.body.CAPSULE_TEXT || !req.body.CATALOG_PRICE || !req.body.GENRE ) {
            res.status(400).json({ message: "Missing attributes" });
        } else {            
             const createdProduct = await productModel.create(req.body);
            if (createdProduct) {
               res.status(200).json({ message: "Product created successfully" });
                } else {
                    res.status(400).json({ message: "Product creation failed" });
                }
            }
        }catch (err) {
        res.status(500).json({ message: err.message });
    }
}
