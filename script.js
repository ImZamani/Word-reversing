let $ = document;
let input = $.querySelector(".input");
let btn = $.querySelector(".btn");
let showResult = $.querySelector(".showResult");

btn.addEventListener("click", () => {
  let inputValue = input.value
  let charactersArray = inputValue.split("");
  let reverseCharacters = charactersArray.reverse();
  let reverseWord = reverseCharacters.join("");

  if (inputValue === reverseWord) {
    showResult.innerHTML = "It's read the same in both directions ;)"
  } else {
    showResult.innerHTML = "It doesn't read the same in both directions ;)"
  }
});
