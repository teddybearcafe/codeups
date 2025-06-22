// MicroModal初期化
const initModal = () => {
  MicroModal.init({
    openTrigger: "data-micromodal-trigger",
    closeTrigger: "data-micromodal-close",
    openClass: "is-open",
    disableScroll: true,
    disableFocus: false,
    awaitOpenAnimation: false,
    awaitCloseAnimation: false,
    onShow: (modal) => {
      document.body.classList.add("is-modal-open");
      const header = document.querySelector(".js-header");
      if (header) {
        header.style.display = "none";
      }
      // 最初のフォーカス可能要素にフォーカス
      const focusable = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        focusable[0].focus();
      }
    },
    onClose: (modal) => {
      document.body.classList.remove("is-modal-open");
      const header = document.querySelector(".js-header");
      if (header) {
        header.style.display = "block";
      }
    },
  });
};

// 初期化
initModal();

// リサイズ時に再初期化
window.addEventListener("resize", () => {
  initModal();
});

// ギャラリー画像クリックでモーダル画像切り替え
const galleryImages = document.querySelectorAll(
  ".gallery__item img[data-micromodal-trigger]"
);
galleryImages.forEach((img) => {
  img.addEventListener("click", function () {
    const modalImg = document.getElementById("modal-gallery-img");
    if (modalImg) {
      modalImg.src = this.getAttribute("data-img");
      modalImg.alt = this.getAttribute("data-alt");
    }
  });
});
