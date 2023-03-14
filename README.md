### JB Camping 露營選物

- 這是一個使用 React 框架搭建前端，並使用 Node.js / Express & MongoDB 建立了完善的後端系統，透過 RESTful API 實現前後端分離，為虛構的露營選物品牌 JB Camping 打造購物網站及管理後台。  
- 使用者分為一般消費者和店家管理員，消費者可以在前台網站享受流暢的購物體驗、管理會員資料及查看訂單紀錄，而管理員則可以在後台針對「會員」、「評論」、「商品」和「訂單」四大區塊進行管理。

>[JB Camping 網站連結](https://jb-camping.onrender.com "JB Camping")

#### User Demo
![](https://github.com/bo930236/JB-Camping/blob/master/user-demo.gif)

#### Admin Demo
> 管理後台：測試帳號: admin@web.com / 密碼: admin123

![](https://github.com/bo930236/JB-Camping/blob/master/admin-demo.gif)
---
### 使用技術和第三方套件
#### 前端套件
- React：用於構建前端 UI。
- Create React App: 建立專案項目環境。
- React Router：Web App 路由管理。
- Axios：用於在前端應用程序和後端 API 之間進行 HTTP 請求。
- Chakra UI：用於構建 UI 元素和組件。
- Formik: 用於表單管理，搭配 Yup 使用。
- Yup：用於編寫表單驗證規則。
- React Icons：提供常用圖標的 React 組件。
- React-Paypal-Js: 用於 PayPal 付款相關。

#### 後端套件
- bcryptjs: 用於加密。
- concurrently: 用於同時執行多個命令。
- dotenv: 設定與存取環境變數。
- express: 用於建立後端伺服器。
- express-async-handler: 用於處理異步的 express 路由。
- jsonwebtoken: 簽署 token 實作使用者身分驗證。
- mongoose: 用於連接 MongoDB 資料庫。
- authMiddleware(自訂義): 用於保護需要驗證的頁面，確保使用者已登入及驗證使用者是否已登入。
----
### 功能介紹
#### 前台
+ 商品瀏覽： 
    + 所有商品頁面:
      + 可瀏覽標示新上架及售完商品
      + 顯示各商品平均星星數及評論數
      + 一鍵按下 icon 加入購物車，售完則返灰禁止按下
     + 單一商品頁面:
        + 查看商品詳細資料及商品詳細評論
        + 調整購買數量，超出庫存則返灰禁止再按      
+ 購物車：
  + icon 同步顯示購物車商品總類別
  + 移除購物車商品
  + 查看訂單商品、數量、金額、運費及訂單總額
+ 登入/註冊：
  + 表單驗證功能，若輸入格式不符的資料將無法登入/註冊
+ 結帳系統：
  + 查看、修改購物車明細
  + 若未登入，會提示使用者在結帳前先登入/註冊會員
  + 送出訂單前會驗證表單是否符合格式
  + 訂單成立後於顯示訂單成功頁面，可點選 your orders 查看訂單明細
+ 會員中心：
  + 查看、編輯個人資料
  + 查看歷史訂單
#### 後台
+ 會員管理：
  + 查看會員列表、詳細資料
  + 可直接移除會員帳號
+ 商品管理：
  + 查看商品列表
  + 新增商品
  + 在商品列表頁直接刪除商品，調整商品詳細資料、庫存數量、金額以及選擇是否新上架
+ 訂單管理：
  + 查看訂單列表、詳細資料
  + 管理訂單狀態，並可直接移除訂單
  
### 專案資料架構
```
JB-Camping
├─ .git
├─ .gitignore
├─ client
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.png
│  │  ├─ images
│  │  ├─ index.html
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  └─ src
│     ├─ App.js
│     ├─ components
│     │  ├─ AddNewProduct.jsx
│     │  ├─ CartItem.jsx
│     │  ├─ CartOrderSummary.jsx
│     │  ├─ CheckoutItem.jsx
│     │  ├─ CheckoutOrderSummary.jsx
│     │  ├─ ConfirmRemovalAlert.jsx
│     │  ├─ Footer.jsx
│     │  ├─ Navbar.jsx
│     │  ├─ OrdersTab.jsx
│     │  ├─ PasswordTextField.jsx
│     │  ├─ PayPalButton.jsx
│     │  ├─ ProductCard.jsx
│     │  ├─ ProductsTab.jsx
│     │  ├─ ProductTableItem.jsx
│     │  ├─ ReviewsTab.jsx
│     │  ├─ ShippingInformation.jsx
│     │  ├─ TextField.jsx
│     │  └─ UsersTab.jsx
│     ├─ index.css
│     ├─ index.js
│     ├─ redux
│     │  ├─ actions
│     │  │  ├─ adminActions.js
│     │  │  ├─ cartActions.js
│     │  │  ├─ orderActions.js
│     │  │  ├─ productActions.js
│     │  │  └─ userActions.js
│     │  ├─ slices
│     │  │  ├─ admin.js
│     │  │  ├─ cart.js
│     │  │  ├─ order.js
│     │  │  ├─ products.js
│     │  │  └─ user.js
│     │  └─ store.js
│     ├─ reportWebVitals.js
│     └─ screens
│        ├─ AdminConsoleScreen.jsx
│        ├─ CartScreen.jsx
│        ├─ CheckoutScreen.jsx
│        ├─ LandingScreen.jsx
│        ├─ LoginScreen.jsx
│        ├─ OrderSuccessScreen.jsx
│        ├─ ProductScreen.jsx
│        ├─ ProductsScreen.jsx
│        ├─ ProfileScreen.jsx
│        ├─ RegistrationScreen.jsx
│        └─ YourOrdersScreen.jsx
├─ package-lock.json
├─ package.json
└─ server
   ├─ database.js
   ├─ index.js
   ├─ middleware
   │  └─ authMiddleware.js
   ├─ models
   │  ├─ Order.js
   │  ├─ Product.js
   │  └─ User.js
   └─ routes
      ├─ orderRoutes.js
      ├─ productRoutes.js
      └─ userRoutes.js
```
### 專案建置
- 安裝套件
```
npm install
```
- 建立 .env 設定環境變數
```
MONGO_URI =<MongoDB 資料庫的連線網址。>

PAYPAL_CLIENT_ID = <Paypal 的 Client ID，可以在 Paypal 的開發者網站上取得。>

PORT = <應用程式運行端口。>

TOKEN_SECRET = <用於 JWT 的密鑰，可以是任意字串。>

NODE_ENV = production <應用程式的執行環境，可以是 `development` 或 `production`。>
```
- 啟動後端伺服器
```
npm run start
```
- 同時啟動前後端
```
npm run app
```

### 聲明
- 本網站僅作為個人練習，不作任何商業用途，註冊時請勿使用真實資料。
