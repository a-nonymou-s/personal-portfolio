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