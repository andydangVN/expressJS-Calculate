# expressJS-Calculate

1. npm install express
3. npm init
4. npm install nodemon - auto refresh server with any change
5. npm install body-parser - lấy dữ liệu respond truyền về từ method post.<br>
   **req.body.name: lấy giá trị post về route, name tương ứng với name trong input, button,...**

6. Hyper CLI: atom .
7. Hyper CLI: touch index.html - tạo file
8. Send file html vào request: ```res.sendFile(__dirname + "/index.html");```
  __dirname: relative path (path của file đang truy cập)
9. Send element html: ```res.send("<h1>hello</h1>")```
