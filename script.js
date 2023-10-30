document.getElementById("showHideBtn").addEventListener("click", function () {
  var passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

document.getElementById("agreeCheckbox").addEventListener("click", function () {
  var submitButton = document.getElementById("submitButton");
  submitButton.disabled = !this.checked;
});

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

document.getElementById("setBgImageBtn").addEventListener("click", function () {
  $("#element").css("background-image", "url('https://s1.eda.ru/StaticContent/Photos/140802212008/140807221023/p_O.jpg')");
});

document.getElementById("textarea").addEventListener("input", function () {
  var maxChars = 100;
  var currentChars = this.value.length;
  var remainingChars = maxChars - currentChars;
  document.getElementById("charCount").textContent = remainingChars;
});

$("#fadeParagraph").click(function () {
  $(this).animate({ opacity: 0.2 }, 1000);
});

$("#btn1").click(function () {
  $("#box").animate({ height: "200px", width: "200px" }, 1000);
});

$("#btn2").click(function () {
  $("#box").animate({ height: "100px", width: "100px" }, 1000);
});
