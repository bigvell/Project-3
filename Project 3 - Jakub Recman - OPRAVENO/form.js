class twoContentChecker {
  constructor(twoHTMLtags) {
    this.twoHTMLtags = twoHTMLtags;
  }
  getInputContent = (input) => {
    return input.value;
  };

  insertContent = (htmlTag, content) => {
    htmlTag.textContent = content;
  };

  addClass = (htmlTag, className) => {
    htmlTag.classList.add(className);
  };
  removeClass = (htmlTag, className) => {
    htmlTag.classList.remove(className);
  };

  htmlTagCleaner = (input1value, input2value, htmlTag) => {
    if (input1value === "" && input2value === "") {
      htmlTag.textContent = "";
    }
  };
}

const formElement = document.querySelector("form");
const paragraphText = document.querySelector(".result-text");
const pwdInput = document.querySelectorAll(".email-input");
const inputChecker = new twoContentChecker(pwdInput);

inputChecker.twoHTMLtags.forEach((x) => {
  x.addEventListener("input", () => {
    const pwd1Value = inputChecker.getInputContent(inputChecker.twoHTMLtags[0]);
    const pwd2Value = inputChecker.getInputContent(inputChecker.twoHTMLtags[1]);

    if (pwd1Value == pwd2Value) {
      inputChecker.insertContent(paragraphText, "Hesla jsou stejné");
      inputChecker.addClass(paragraphText, "valid");
      inputChecker.removeClass(paragraphText, "invalid");
    } else {
      inputChecker.insertContent(paragraphText, "Hesla nejsou stejné");
      inputChecker.addClass(paragraphText, "invalid");
      inputChecker.removeClass(paragraphText, "valid");
    }
    inputChecker.htmlTagCleaner(pwd1Value, pwd2Value, paragraphText);
  });
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const pwd1Value = inputChecker.getInputContent(inputChecker.twoHTMLtags[0]);
  const pwd2Value = inputChecker.getInputContent(inputChecker.twoHTMLtags[1]);

  if (pwd1Value === pwd2Value) {
    const xhr = new XMLHttpRequest();
    xhr.open(formElement.method, formElement.action);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        formElement.reset();
        inputChecker.insertContent(paragraphText, "");
      }
    };
    xhr.send(new FormData(formElement));
  }
});
