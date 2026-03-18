# Hướng dẫn dự án (Project Guide)

Dự án này là một bản demo toàn diện về cách tổ chức mã nguồn và quy trình làm việc chuyên nghiệp (Workflow).

## Tài liệu chi tiết
- [Quy trình Git](git-workflow.md) - Chi tiết về cách quản lý nhánh và commit.

## Nguyên tắc thiết kế (Aesthetics)
Dự án áp dụng phong cách thiết kế **Premium Dark Mode** với các đặc điểm:
1. **Glassmorphism**: Sử dụng `backdrop-filter` để tạo chiều sâu.
2. **Typography**: Font **Outfit** tinh tế và hiện đại.
3. **Micro-interactions**: Các hiệu ứng chuyển cảnh mượt mà bằng CSS và JavaScript.

## Quy trình Phát triển
Chúng tôi tuân thủ quy trình Git Flow rút gọn:
- Mọi tính năng mới đều bắt đầu từ một nhánh `feature/`.
- Tài liệu được cập nhật song song trên nhánh `docs/`.
- Mọi thay đổi phải được kiểm duyệt và gộp vào `develop` trước khi đưa ra `main`.
