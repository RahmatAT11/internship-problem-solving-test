// fungsi soal 3
function balancedBracket(expression) {
  const stack = [];
  const trimmedExpression = expression.replaceAll(" ", "");

  for (let i = 0; i < trimmedExpression.length; i++) {
    const char = trimmedExpression[i];
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      if (stack.length === 0) {
        return "NO";
      }

      const top = stack.pop();

      console.log(`top : ${top} char: ${char}`);

      if (char === ")" && top !== "(") {
        return "NO";
      } else if (char === "}" && top !== "{") {
        return "NO";
      } else if (char === "]" && top !== "[") {
        return "NO";
      }
    }
  }

  if (stack.length === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

const soal3 = document.querySelector("#soal-3");

// Hasil soal 3
const soal3p1 = document.createElement("p");
soal3p1.textContent = `Hasil untuk { [ ( ) ] }  adalah = ${balancedBracket(
  "{ [ ( ) ] }"
)}`;
const soal3p2 = document.createElement("p");
soal3p2.textContent = `Hasil untuk { [ ( ] ) }  = ${balancedBracket(
  " { [ ( ] ) } "
)}`;
const soal3p3 = document.createElement("p");
soal3p3.textContent = `Hasil untuk { ( ( [ ] ) [ ] ) [ ] }  = ${balancedBracket(
  "{ ( ( [ ] ) [ ] ) [ ] } "
)}`;

soal3.appendChild(soal3p1);
soal3.appendChild(soal3p2);
soal3.appendChild(soal3p3);
