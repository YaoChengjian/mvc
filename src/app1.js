import "./app1.css";
import $ from "jquery";
let $container = $(".container");
let $html = $(`
    <div id="app1">
      <div id="result"><span>98</span></div>
      <div>
        <button id="plus1">+1</button>
        <button id="minus1">-1</button>
        <button id="ride2">*2</button>
        <button id="except2">÷2</button>
      </div>
    </div>
`);
$container.append($html);

let span = document.querySelector("#result span");
let plus1 = document.querySelector("#plus1");
let minus1 = document.querySelector("#minus1");
let ride2 = document.querySelector("#ride2");
let except2 = document.querySelector("#except2");

let n = parseFloat(localStorage.getItem("n")) || 100;
span.innerHTML = n;

plus1.onclick = () => {
  n += 1;
  localStorage.setItem("n", n);
  span.innerText = n;
};

minus1.onclick = () => {
  n -= 1;
  localStorage.setItem("n", n);
  span.innerHTML = n;
};

ride2.onclick = () => {
  n *= 2;
  localStorage.setItem("n", n);
  span.innerHTML = n;
};

except2.onclick = () => {
  n /= 2;
  localStorage.setItem("n", n);
  span.innerHTML = n;
};
