# expressJS-Calculate

1. npm install express
3. npm init
4. npm install nodemon - auto refresh server with any change
   npm install body-parser - lấy dữ liệu respond truyền về từ method post.
   https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions
5. Hyper CLI: atom .
6. Hyper CLI: touch index.html - tạo file
7. Send file html vào request: ```res.sendFile(__dirname + "/index.html");```
  __dirname: relative path (path của file đang truy cập)
8. Send element html: ```res.send("<h1>hello</h1>")```
