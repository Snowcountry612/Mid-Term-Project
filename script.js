// 이메일 주소 클립보드 복사 기능
function copyEmail() {
  const email = document.querySelector('#email').textContent;
  navigator.clipboard.writeText(email)
    .then(() => {
      alert('이메일 주소가 클립보드에 복사되었습니다.');
    })
    .catch(() => {
      alert('클립보드 복사가 실패하였습니다.');
    });
}

// 전화번호 복사 기능
function copyPhone() {
  const phone = document.querySelector('#phone').textContent;
  navigator.clipboard.writeText(phone)
    .then(() => {
      alert('전화번호가 클립보드에 복사되었습니다.');
    })
    .catch(() => {
      alert('클립보드 복사가 실패하였습니다.');
    });
}

// 메뉴 토글 기능
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
menuBtn.addEventListener('click', function() {
  menu.classList.toggle('show');
});
