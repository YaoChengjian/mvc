import "./app2.css";
import $ from "jquery";
let $container = $(".container");
let $html = $(`
    <div id="app2">
        <ul id="list">
          <li>1</li>
          <li>2</li>
        </ul>
        <div id="content">
          <div>内容1</div>
          <div>内容2</div>
        </div>
      </div>
`);
$container.append($html);

let $list = $("#app2 #list li");
let $divs = $("#app2 #content div");
let n = localStorage.getItem("keyValue") || 0;
$list
  .eq(n)
  .addClass("active")
  .siblings()
  .removeClass("active");
$divs
  .eq(n)
  .addClass("active")
  .siblings()
  .removeClass("active");

$list.on("click", function() {
  let index = $(this).index();
  localStorage.setItem("keyValue", index);
  $list
    .siblings()
    .removeClass("active")
    .eq(index)
    .addClass("active");
  $divs
    .removeClass("active")
    .eq(index)
    .addClass("active");
});
