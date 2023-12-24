(function () {
  var canvas = document.getElementById("canvas");
  if (!canvas) {
	  console.error("[PT ANTIAFK] CANVAS COULD NOT BE DETECTED, YOU MUST BE IN GAME!");
  } else {
    console.log("[PT ANTIAFK] STARTING ANTI AFK SUCCESSFULLY!");
	  setInterval(function () {
		  canvas.click();
      console.log("[PT ANTIAFK] CLICK!")
    }, 300000);
  }
})();
