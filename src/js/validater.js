window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const submitButton = form.querySelector(".button--consent");

  function validateForm() {
    const name = form.querySelector("[name='name']");
    const phone = form.querySelector("[name='phone']");
    const email = form.querySelector("[name='email']");
    const campaign = form.querySelector("[name='campaign']");
    const message = form.querySelector("[name='message']");
    const checkboxes = form.querySelectorAll("[name='contact-type[]']");
    const consent = form.querySelector("#consent1");
    const submitBtn = form.querySelector(".button--consent");
    const consentLabel = form.querySelector(".contact-form__form-label--consent");

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; //xxx@xxxx.xxxxの形式であることを確認
    const phonePattern = /^\d{2,4}-?\d{2,4}-?\d{4}$/; //xxx-xxxx-xxxx（ハイフン無しに対応）
    const postalCodePattern = /^\d{3}-?\d{4}$/; //xxx-xxxx（ハイフン無しに対応）

    // チェックボックスが1つ以上チェックされているか確認
    let isChecked = false;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) isChecked = true;
    });

    // チェックボックスが選択されていない場合、ラベルを赤くする（consent1以外）
    const labels = form.querySelectorAll(".contact-form__form-label:not([for='consent1'])");
    labels.forEach((label) => {
      if (!isChecked) {
        label.classList.add("contact-form__form-label--red");
      } else {
        label.classList.remove("contact-form__form-label--red");
      }
    });

    //必須項目である氏名が入力されているかどうか
    if (name.value.trim() === "") {
      document.querySelector(".contact-form__answer").style.display = "flex";
      name.classList.add("contact-form__input--red");
    } else {
      document.querySelector(".contact-form__answer").style.display = "none";
      name.classList.remove("contact-form__input--red");
    }

    //メールアドレスの形式が間違っていないか
    if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
      document.querySelector(".contact-form__answer").style.display = "flex";
      email.classList.add("contact-form__input--red");
    } else {
      document.querySelector(".contact-form__answer").style.display = "none";
      email.classList.remove("contact-form__input--red");
    }

    //電話番号の形式が間違っていないか
    if (phone.value.trim() === "" || !phonePattern.test(phone.value.trim())) {
      document.querySelector(".contact-form__answer").style.display = "flex";
      phone.classList.add("contact-form__input--red");
    } else {
      document.querySelector(".contact-form__answer").style.display = "none";
      phone.classList.remove("contact-form__input--red");
    }

    //メッセージが入力されているか
    if (message.value.trim() === "") {
      message.classList.add("contact-form__textarea--red");
    } else {
      message.classList.remove("contact-form__textarea--red");
    }

    //同意チェックボックスが選択されていない場合、ラベルを赤くする
    if (!consent.checked) {
      consentLabel.classList.add("contact-form__form-label--consent-red");
    } else {
      consentLabel.classList.remove("contact-form__form-label--consent-red");
    }

    // 全ての必須項目が入力されているかチェック
    if (
      name.value.trim() === "" ||
      phone.value.trim() === "" ||
      email.value.trim() === "" ||
      message.value.trim() === "" ||
      !isChecked ||
      !consent.checked
    ) {
      submitBtn.setAttribute("disabled", "disabled");
      submitBtn.style.pointerEvents = "none";
      document.querySelector(".contact-form__answer").style.display = "flex";
      return false;
    } else {
      submitBtn.removeAttribute("disabled");
      submitBtn.style.pointerEvents = "auto";
      document.querySelector(".contact-form__answer").style.display = "none";
      return true;
    }
  }

  // フォームの変更を監視
  form.addEventListener("input", validateForm);
});
