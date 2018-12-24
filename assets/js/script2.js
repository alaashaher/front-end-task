
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/css/layouts/rtl-menu.css';
    link.media = 'all';
     
   $(".rtl").click(function(){
	 head.appendChild(link);
  });

   
   
   
   