showMore = document.getElementById("more");
showMore.addEventListener("click", function(){
  proj = document.getElementById("js");
  proj.innerHTML = '<img src="https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg" width="80px" height="80px"\><button type="button" id="link"><a href="https://github.com/a-nonymou-s/Mixed-Messages">Project Link!</a></button\>';
});
Hide = document.getElementById("hide");
hide.addEventListener("click", function(){
  proj = document.getElementById("js");
  proj.innerHTML = '';
});
showMore2 = document.getElementById("more2");
showMore2.addEventListener("click", function(){
  proj = document.getElementById("js2");
  proj.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/890/890132.png" width="80px" height="80px"\><button type="button" id="link"><a href="https://github.com/a-nonymou-s/Chrome-Extension-Password-Gen">Project Link!</a></button\>';
});
Hide2 = document.getElementById("hide2");
hide2.addEventListener("click", function(){
  proj = document.getElementById("js2");
  proj.innerHTML = '';
});