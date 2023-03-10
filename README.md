## 目錄



- [目錄](#目錄)
  - [套件列表](#套件列表)
    - [前端套件](#前端套件)
    - [後端套件](#後端套件)
  - [專案資料架構](#專案資料架構)

聲明

---
### 套件列表

 Just-Buy 專案中使用的套件列表：
#### 前端套件
- React：用於構建前端 UI。
- React Router：用於維護前端路由和導航。
- Axios：用於在前端應用程序和後端 API 之間進行 HTTP 請求。

- Chakra UI：用於構建 UI 元素和組件。
- Formik: 用於表單管理，搭配 Yup 使用。
- Yup：用於編寫表單驗證規則。
- React Icons：提供常用圖標的 React 組件。
- React Toastify：用於顯示通知和警告消息。
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
### 專案資料架構
```
Just-Buy
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
