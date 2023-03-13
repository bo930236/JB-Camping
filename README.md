## 目錄
- [目錄](#目錄)
  - [專案](#專案)
  - [使用技術和第三方套件](#使用技術和第三方套件)
    - [前端套件](#前端套件)
    - [後端套件](#後端套件)
  - [功能介紹](#功能介紹)
    - [前台](#前台)
    - [後台](#後台)
  - [專案 DEMO](#專案 DEMO)
  - [專案資料架構](#專案資料架構)
  - [專案建置](#專案建置)

---
### 專案
**JB Camping 露營選物**  
這是一個使用 React 建立的電子商務前端專案，為虛構的露營選物品牌 JB Camping 打造購物網站及管理後台。使用者分為一般消費者和店家管理員，消費者可以在前台網站享受流暢的購物體驗、管理會員資料及查看訂單紀錄，而管理員則可以在後台針對「會員」、「評論」、「商品」和「訂單」四大區塊進行管理。
> [JB Camping 網站連結](https://jb-camping.onrender.com)

> 管理後台：測試帳號 admin@web.com / 密碼: admin123
---
### 使用技術和第三方套件
#### 前端套件
- React：用於構建前端 UI。
- React Router：用於維護前端路由和導航。
- Axios：用於在前端應用程序和後端 API 之間進行 HTTP 請求。
- Chakra UI：用於構建 UI 元素和組件。
- Formik: 用於表單管理，搭配 Yup 使用。
- Yup：用於編寫表單驗證規則。
- React Icons：提供常用圖標的 React 組件。
- React-Paypal-Js: 用於PayPal付款相關。
#### 後端套件
- Node.js：用於構建後端 API。
- Express：用於構建 Web 應用程序和 API。
- MongoDB：用於數據存儲和管理。
- Mongoose：用於在 Node.js 中與 MongoDB 進行數據庫操作。
- Bcrypt：用於實現密碼加密和驗證。
- Jsonwebtoken：用於實現基於 JSON 的 Web Token 身份驗證。
- Dotenv：用於管理應用程序的環境變量。
- authMiddleware(自訂義):用於保護需要驗證的頁面，確保使用者已登入及驗證使用者是否已登入。
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
  
### 專案 DEMO

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
npm install
安裝此專案所需的第三方套件

yarn start
在 http://localhost:3000 上啟動此專案

yarn build
在 build 資料夾中建立此專案的 production 版本

yarn deploy
在 GitHub Page 上部屬此專案網站
