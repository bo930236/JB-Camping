import express from 'express';
import { get } from 'http';
import Product from '../models/Product.js'; // 引入產品模型

const productRoutes = express.Router(); // 建立一個Express路由實例

// 定義獲取所有產品的控制器函數
const getProducts = async (req, res) => {
  const products = await Product.find({}); // 查詢所有產品
  res.json(products); // 回傳JSON格式的產品資料
};

const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found.');
  }
};
productRoutes.route('/').get(getProducts); // 定義一個GET請求的路由，路由為根路由'/'，當使用者發出GET請求時，會呼叫getProducts函數進行處理
productRoutes.route('/:id').get(getProduct);

export default productRoutes; // 匯出路由實例
