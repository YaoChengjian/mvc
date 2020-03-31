import "./app3.css";
import $ from "jquery";

let $container = $(".container");
let $html = $(`
      <div id="app3">
        <div class="active"></div>
      </div>
`);
$container.append($html);

let $div = $("#app3 div");
let appActive = localStorage.getItem("appActive") === "yes";
$div.toggleClass("active", appActive);

$div.on("click", () => {
  if ($div.hasClass("active")) {
    $div.removeClass("active");
    localStorage.setItem("appActive", "no");
  } else {
    $div.addClass("active");
    localStorage.setItem("appActive", "yes");
  }
});
