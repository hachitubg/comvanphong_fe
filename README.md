
# comvanphong-fe

## Mô tả

Đây là một ứng dụng web sử dụng Vue.js. Dưới đây là cấu trúc thư mục và tóm tắt các thành phần chính trong project.

## Cấu trúc thư mục

```bash
comvanphong-fe/
├── node_modules/           # Thư mục chứa các phụ thuộc (dependencies)
├── public/
│   ├── index.html          # File HTML chính của ứng dụng
│   └── favicon.ico         # Icon của ứng dụng
├── src/
│   ├── assets/             # Thư mục chứa các tài nguyên tĩnh như hình ảnh, biểu tượng, v.v.
│   ├── components/         # Thư mục chứa các thành phần (components) Vue.js
│   ├── views/              # Thư mục chứa các view (trang) của ứng dụng
│   ├── App.vue             # Thành phần gốc của ứng dụng
│   ├── main.js             # File khởi động chính của ứng dụng
│   └── router.js           # File cấu hình router (nếu bạn chọn sử dụng router)
├── .gitignore              # File cấu hình git ignore
├── babel.config.js         # File cấu hình Babel
├── package.json            # File cấu hình và thông tin về project
├── README.md               # File hướng dẫn về project
└── vue.config.js           # File cấu hình tùy chỉnh Vue.js (có thể không có nếu bạn không tùy chỉnh)
```

## Tóm tắt các thư mục chính

### `src/`
- **assets/**: Lưu trữ các tệp tài nguyên tĩnh như hình ảnh, tệp CSS, và biểu tượng.
- **components/**: Chứa các thành phần Vue.js có thể tái sử dụng trong nhiều view khác nhau.
- **views/**: Chứa các trang (view) chính của ứng dụng.
- **App.vue**: Đây là thành phần gốc của ứng dụng, nơi bạn có thể bắt đầu xây dựng giao diện người dùng.
- **main.js**: File khởi động ứng dụng, nơi bạn thiết lập Vue instance, router và các thành phần khác.

### `public/`
Thư mục này chứa các tệp tĩnh như `index.html` và `favicon.ico`. `index.html` là tệp HTML chính mà Vue.js sẽ render ứng dụng vào đó.

## Hướng dẫn sử dụng

### Chạy dự án

Để chạy dự án, bạn sử dụng lệnh sau:

```bash
npm run serve
```

### Sửa lỗi Prettier

Để sửa các lỗi Prettier, bạn sử dụng lệnh sau:

```bash
npm run lint -- --fix
```

## Các yêu cầu

Đảm bảo rằng bạn đã cài đặt tất cả các phụ thuộc cần thiết bằng cách chạy:

```bash
npm install
```
