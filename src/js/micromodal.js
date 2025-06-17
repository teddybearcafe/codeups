// MicroModal初期化
const initModal = () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
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
      },
      onClose: (modal) => {
        document.body.classList.remove("is-modal-open");
        const header = document.querySelector(".js-header");
        if (header) {
          header.style.display = "block";
        }
      },
    });
  }
};

// 初期化
initModal();

// リサイズ時に再初期化
window.addEventListener("resize", () => {
  initModal();
});
