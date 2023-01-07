# Bugs 解決文件
#### [Next.js webpack 自動找 postcss 設定檔問題](https://stackoverflow.com/questions/73142994/error-cannot-find-module-tailwindcss-next-js-application)  
奇怪的 bug，開完 monorepo 第一次 ```nx serve``` 就噴了 cannot find module "tailwindcss"，原因是我其他 project 裡有用到 tailwind，然後 webpack 在這個專案裡沒找到 postcss.config.js，就跑去其他地方找，解決方法是在這個專案裡也建一個 config 檔，然後不設定 tailwind，這樣 Webpack 就會用這個來檔案來處理。