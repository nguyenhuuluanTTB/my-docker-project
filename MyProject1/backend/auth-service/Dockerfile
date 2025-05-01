# Sử dụng Node.js image chính thức
FROM node:18-alpine

# Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json trước để cài đặt dependencies sớm hơn (tối ưu cache)
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn còn lại
COPY . .

# Expose port từ .env (PORT=3001)
EXPOSE 3001

# Thiết lập biến môi trường mặc định (có thể override bằng docker-compose)
ENV NODE_ENV=production

# Lệnh chạy ứng dụng
CMD ["node", "index.js"]
