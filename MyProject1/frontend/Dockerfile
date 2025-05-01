# Sử dụng image Node chính thức để build
FROM node:18-alpine AS build-stage

# Thư mục làm việc trong container
WORKDIR /app

# Copy file cấu hình package để cài đặt dependencies
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build ứng dụng Vue (sẽ xuất ra thư mục dist/)
RUN npm run build

# Giai đoạn chạy production - dùng Nginx để phục vụ file tĩnh
FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy file cấu hình Nginx tùy chọn (nếu có)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (mặc định của Nginx)
EXPOSE 80

# Lệnh khởi động Nginx
CMD ["nginx", "-g", "daemon off;"]
