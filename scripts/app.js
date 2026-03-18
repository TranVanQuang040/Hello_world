/**
 * Danh sách lời chào đa ngôn ngữ.
 * Được thiết kế để có thể dễ dàng mở rộng trong tương lai.
 */
const greetings = [
  { text: "Hello World", lang: "en" },
  { text: "Xin chào Thế giới", lang: "vi" },
  { text: "Bonjour le monde", lang: "fr" },
  { text: "Hola Mundo", lang: "es" },
  { text: "こんにちは世界", lang: "ja" }
];

// Lấy tham chiếu đến các phần tử UI quan trọng
const titleElement = document.getElementById('title');
const toggleButton = document.getElementById('toggleButton');

let currentIndex = 0;

/**
 * Hàm thay đổi lời chào với hiệu ứng fade nhẹ.
 * Sử dụng Web Animations API để mượt mà hơn.
 */
function updateGreeting() {
  // Hiệu ứng mờ dần (fadeOut)
  titleElement.animate([
    { opacity: 1, transform: 'translateY(0)' },
    { opacity: 0, transform: 'translateY(-10px)' }
  ], {
    duration: 200,
    fill: 'forwards'
  }).onfinish = () => {
    // Cập nhật nội dung sau khi fadeOut hoàn tất
    currentIndex = (currentIndex + 1) % greetings.length;
    titleElement.textContent = greetings[currentIndex].text;

    // Hiệu ứng hiện dần (fadeIn)
    titleElement.animate([
      { opacity: 0, transform: 'translateY(10px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 300,
      easing: 'ease-out',
      fill: 'forwards'
    });
  };
}

// Lắng nghe sự kiện Click trên nút bấm
toggleButton.addEventListener('click', () => {
  updateGreeting();
});

// Log thông báo để xác nhận JS đã load thành công
console.log("Antigravity Hello World Loaded Successfully!");
