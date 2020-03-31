import "./app4.css";
import $ from "jquery";
let $container = $(".container");
let $html = $(`
      <div id="app4">
        <div></div>
      </div>
`);
$container.append($html);
let div = document.querySelector("#app4 > div");
div.onmouseenter = () => {
  div.classList.add("active");
};
div.onmouseleave = () => {
  div.classList.remove("active");
};
