function Main_all_news(){
    this.render_main_all_news =  function(){
        $.ajax({
            method: "GET"
            ,url: "/main_all_news"
            ,complete:function(data){
                console.log(data);
            }
        });
    }

}