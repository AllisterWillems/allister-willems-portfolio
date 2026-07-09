// Gallery images: if a local copy in /assets is missing, fall back to the
// original Adobe Portfolio CDN URL stored in data-cdn.
document.addEventListener("error", function (e) {
  var el = e.target;
  if (el.tagName === "IMG" && el.dataset.cdn && el.src.indexOf("cdn.myportfolio.com") === -1) {
    el.src = el.dataset.cdn;
  }
}, true);

// Click-to-play YouTube facades
document.addEventListener("DOMContentLoaded", function () {
  function play(el) {
    var id = el.dataset.yt;
    if (!id) return;
    var f = document.createElement("iframe");
    f.src = "https://www.youtube.com/embed/" + id + "?autoplay=1";
    f.title = el.getAttribute("aria-label") || "YouTube video";
    f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    f.allowFullscreen = true;
    el.innerHTML = "";
    el.appendChild(f);
    el.classList.remove("yt-lite");
  }
  document.querySelectorAll(".yt-lite").forEach(function (el) {
    el.addEventListener("click", function () { play(el); });
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(el); }
    });
  });
});

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") nav.classList.remove("open");
  });
});
