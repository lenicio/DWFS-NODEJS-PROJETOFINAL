const Product = require('../model/Product');

class ProductController {
  static async getAll(req, res) {
    try {
      const products = await Product.getAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({error});
    }
  }


  static async getById(req, res) {
    try {
      const product = await Product.getById(req.params.id);

      if (!product.length) {
        res.status(404).json({message: 'Product not found'});
        return;
      }

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({message: error});
    }
  }


  static async create(req, res) {
    try {
      let missingFields = [];
      const reqBody = req.body;
      const newProduct = [{
        "description": reqBody.description || missingFields.push('Description is required'),
        "price": reqBody.price || missingFields.push('Price is required'),
        "brand": reqBody.brand || missingFields.push('Brand is required'),
      }];

      if (missingFields.length) {
        res.status(400).json({message: missingFields});
        return;
      }

      newProduct[0].price = parseFloat(newProduct[0].price);
      if (isNaN(newProduct[0].price)) {
        res.status(400).json({message: 'Price must be a number'});
        return;
      }

      await Product.create(newProduct);


      res.status(200).json({message: 'Product created'});


    } catch (error) {
      res.status(500).json({message: error});
    }
  }


  static async update(req, res) {
    try {
      let missingFields = [];
      const reqBody = req.body;
      const product = await Product.getById(req.params.id);

      if (!product.length) {
        res.status(404).json({message: 'Product not found'});
        return;
      }

      const newProduct = {
        "description": reqBody.description || product[0].description,
        "price": reqBody.price || product[0].price,
        "brand": reqBody.brand || product[0].brand,
      };


      newProduct.price = parseFloat(newProduct.price);
      if (isNaN(newProduct.price)) {
        res.status(400).json({message: 'Price must be a number'});
        return;
      }

      await Product.update(req.params.id, newProduct);

      res.status(200).json({message: 'Product updated', product: newProduct });


    } catch (error) {
      res.status(500).json({message: error});
    }

  }


  static async delete(req, res) {
    try {
      const product = await Product.getById(req.params.id);

      if (!product.length) {
        res.status(404).json({message: 'Product not found'});
        return;
      }

      await Product.delete(req.params.id);

      res.status(200).json({message: 'Product deleted', product: product});
    } catch (error) {
      res.status(500).json({message: error});
    }
  }
}

module.exports = ProductController;