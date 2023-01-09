# E-Commerce 電商平台技術練習
此 project 為技術練習使用  
不特別添加功能，所以選用已涵蓋大部分實務使用場景的電商平台  

## Setup

## Deploy

## Tech Stack
##### 主要技術架構
採前後端分離開發，Next 不使用 api 功能，單純提供網頁  
先以前端練習為主，完成到一定程度後再接觸 AWS
|項目||
|-|-|
|開發模式|Monorepo|
|前端|Next.js|
|後端|Express.js|
|資料庫|Firebase RTDB|
|部署|Vercel|

##### 前端預計使用技術
- Tailwind CSS
- useContext + useReducer 管理不常變動的狀態(登入)
- RxJS 的 Redux-Observable 管理常變動的狀態(購物車)


##### 後端預計使用技術
- 

##### 開發預計使用技術
- Nx 管理 Monorepo
- Docker 部署
- Jest 測試

## 專案發展流程
環境建置
1. 確定使用的 Tech Stack
2. 使用 nx 建立 monorepo (Next.js & Express.js)
3. 前端設定 Tailwind CSS
4. 建 Firebase RTDB
5. 推上 Vercel

基本功能規劃 

6. 蒐集基本需求，簡單撰寫 Design Document
7. 參考 Fake Store API 設計資料格式
8. 規劃前端頁面

基本功能開發

9. 前端用 Fake Store API 簡單切版
10. 後端依 Fake Store API 規劃資料庫，並抓資料存進資料庫
11. 後端建 REST API(登入、取得資料、下訂單)
12. 前端增加新版面及串接 API
13. 以 useState props drilling 及 useEffect + fetch 完成基本功能

進階開發  

14. 以 useContext + useReducer 重構登入狀態
15. 引入 RxJS 跟 useSWR 進行重構
16. 建立商店後台，引入圖表套件
17. 在 Local 端跟 AWS RDS 建 MySQL 資料庫

## Note
##### 進度限制
- 避免學習曲線陡峭，後期再引入 RxJS，同時也可以先練原生 hooks
- 使用 firebase BaaS 跟 Vercel，前端完成後再引入 AWS EC2 跟 RDS

##### 資料庫選擇
需交易功能，使用關聯式資料庫，最好是 DBaaS，最後選 AWS RDS

##### 狀態管理選擇
內建的 useContext 更動時會 re-render 所有訂閱 store 的元件，不能完全取代 Redux  
所以還是需要 Redux-Observable

##### CSS or UI 框架選擇
TailwindCSS vs MUI vs Chakra UI  
~~需要現成 UI，另外 MUI 有 sx 跟 styled component，選擇 MUI~~  
決定用 Tailwind CSS，設定教學多，一方面避免 SSR 處理樣式可能出現的坑

##### 為甚麼要用 Monorepo
想學 (想要乾淨的 github 首頁)


## 加油區 
熟練: Tailwind CSS  
正在學: Next.js, TypeScript  
重修: express, MySQL, useContext  
只碰過皮毛: docker, monorepo  
沒用過: AWS, RxJS, Jest  


## Docs 連結  
- [開發日誌](./docs/%E9%96%8B%E7%99%BC%E6%97%A5%E8%AA%8C.md)
- [bug 文件](./docs/bugs.md)
- [reference整理](./docs/reference.md)
