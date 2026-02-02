document.addEventListener("click", function (e) {
  const btn = e.target.closest("[data-yt-consent]");
  if (!btn) return;

  const id = btn.getAttribute("data-video-id");
  const title = btn.getAttribute("data-video-title") || "Video";
  const container = btn.closest(".yt-consent");

  const iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = `https://www.youtube-nocookie.com/embed/${id}`;
  iframe.title = title;
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  container.innerHTML = "";
  container.appendChild(iframe);
});
