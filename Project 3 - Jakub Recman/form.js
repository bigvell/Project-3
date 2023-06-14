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

const paragraphText = document.querySelector(".result-text");
const emailInput = document.querySelectorAll(".email-input");
const inputChecker = new twoContentChecker(emailInput);

inputChecker.twoHTMLtags.forEach((x) => {
  x.addEventListener("input", () => {
    const email1Value = inputChecker.getInputContent(
      inputChecker.twoHTMLtags[0]
    );
    const email2Value = inputChecker.getInputContent(
      inputChecker.twoHTMLtags[1]
    );

    if (email1Value == email2Value) {
      inputChecker.insertContent(paragraphText, "Hesla jsou stejné");
      inputChecker.addClass(paragraphText, "valid");
      inputChecker.removeClass(paragraphText, "invalid");
    } else {
      inputChecker.insertContent(paragraphText, "Hesla nejsou stejné");
      inputChecker.addClass(paragraphText, "invalid");
      inputChecker.removeClass(paragraphText, "valid");
    }
    inputChecker.htmlTagCleaner(email1Value, email2Value, paragraphText);
  });
});
