# hello-world-web

Dự án web tĩnh "Hello World" được tổ chức theo hướng rõ ràng, dễ review, phù hợp để demo cách đặt tên, comment code, branch strategy và commit message chuẩn.

## Công nghệ
- HTML
- CSS
- JavaScript thuần

## Cấu trúc thư mục
```text
hello-world-web/
|-- docs/
|   `-- git-workflow.md
|-- scripts/
|   `-- app.js
|-- styles/
|   `-- main.css
|-- .gitignore
|-- index.html
`-- README.md
```

## Cách chạy
Chỉ cần mở file `index.html` bằng trình duyệt.

## Quy ước branch
- `main`: nhánh ổn định
- `develop`: nhánh tích hợp
- `feature/base-structure`
- `feature/ui-styling`
- `feature/greeting-toggle`
- `docs/project-guide`

## Quy ước commit
Sử dụng Conventional Commits:
- `feat:` thêm tính năng
- `style:` chỉnh giao diện, định dạng
- `docs:` cập nhật tài liệu
- `chore:` việc phụ trợ
