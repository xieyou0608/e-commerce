# E-Commerce 電商平台技術練習
此 project 為技術練習使用  
不特別添加功能，所以選用已涵蓋大部分實務使用場景的電商平台  

## Setup

## Deploy

## Tech Stack
##### 主要技術架構
註: 採前後端分離開發，Next 不使用 api 功能，單純提供網頁
|項目||
|-|-|
|開發模式|Monorepo|
|前端|Next.js|
|後端|Express.js|
|資料庫|AWS RDS 的 MySQL|
|部署|AWS|

##### 前端使用技術
- Material UI 
- useContext + useReducer 管理不常變動的狀態(登入)
- RxJS 的 Redux-Observable 管理常變動的狀態(購物車)


##### 後端使用技術
- 

##### 開發使用技術
- Nx 管理 Monorepo
- Docker 部署
- Jest 測試

## 專案發展流程
環境建置
1. 確定使用的 Tech Stack
2. 使用 nx 建立 monorepo
3. 初始化 Next.js + MUI + TypeScript
4. 初始化 Node.js + Express.js
5. 跟資料庫連線
6. 建 docker 推上 AWS (或先用 Vercel 架網站)

基本功能開發

7. 前端用 Fake Store API 切版
8. 後端依 Fake Store API 規劃資料庫，並抓資料存進資料庫
9. 增加新版面及串接 API
10. 以 useContext + useReducer 及 useEffect + fetch 完成基本功能

進階開發  

11. 引入 RxJS 跟 useSWR 進行重構
12. 建立商店後台，引入圖表套件

## Note
##### 進度限制
- 雲服務先以能前後端分離用 docker 架到 AWS 上為目標
- 避免學習曲線陡峭，後期再引入 RxJS，同時也可以先練原生 hooks

##### 資料庫選擇
需交易功能，使用關聯式資料庫，最好是 DBaaS，最後選 AWS

##### 狀態管理選擇
內建的 useContext 更動時會 re-render 所有訂閱 store 的元件，不能完全取代 Redux  
所以還是需要 Redux

##### CSS or UI 框架選擇
TailwindCSS vs MUI vs Chakra UI  
需要現成 UI，另外 MUI 有 sx 跟 styled component，選擇 MUI

##### 為甚麼要用 Monorepo
想學 (想要乾淨的 github 首頁)

##### 待辦提醒
- (UI) 購物車以小圓圈 fixed 呈現

## Reference
[Typescript NX Monorepo with NextJS and Express](https://www.youtube.com/watch?v=WOfL5q2HznI&list=LL&index=1&t=183s)  
萬事起頭難，感謝這個 youtube 影片  

[useSWR](https://ithelp.ithome.com.tw/articles/10289265?sc=iThelpR)  
[useSWR底層原理](https://medium.com/onedegree-tech-blog/%E4%BA%86%E8%A7%A3-swr-%E7%9A%84%E9%81%8B%E4%BD%9C%E6%A9%9F%E5%88%B6-how-these-async-state-managers-work-6236fc4f9f6)  
[Fake Store API](https://fakestoreapi.com/)  
## Bugs
[Next.js webpack 自動找 postcss 設定檔問題](https://stackoverflow.com/questions/73142994/error-cannot-find-module-tailwindcss-next-js-application)  
奇怪的 bug，開完 monorepo 第一次 ```nx serve``` 就噴了 cannot find module "tailwindcss"，原因是我其他 project 裡有用到 tailwind，然後 webpack 在這個專案裡沒找到 postcss.config.js，就跑去其他地方找，解決方法是在這個專案裡也建一個 config 檔，然後不設定 tailwind，這樣 Webpack 就會用這個來檔案來處理。  
......[去 Bug 文件](./docs/bugs.md)

## 加油區
2023/1/7   
熟練: MUI  
正在學: Next.js, TypeScript  
重修: express, MySQL, useContext  
只碰過皮毛: docker, monorepo  
沒用過: AWS, RxJS, Jest  

逛了很多技術文章，選定技術之後先生了文件  
第一天先把 monorepo 前後端建好！......[去開發日誌](./docs/%E9%96%8B%E7%99%BC%E6%97%A5%E8%AA%8C.md)
