class Carrot_Extenison{

    lang="en";

    color_btn="#fa1675";
    color_active="#FAFA04";

    list_url_app=[
        "https://www.googleapis.com/drive/v3/files/1U8RIr1t6qYBnEFNWMloWnOjMoaAZ6RQj?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg",
        "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/app.json"

    ]

    onLoad(){
        
    }

    setColor(color){
        cr.color_btn=color;
    }

    set_color_btn(color){
        cr.color_btn=color;
    }

    set_color_active(color){
        cr.color_active=color;
    }

    limitItem(array, length) {
        var limitedArray = array.slice(0, length);
        return limitedArray;
    }
 
    random(list){
        return this.get_random(list);
    }

    get_random(list){
        var index_random = Math.floor(Math.random() * list.length);
        return list[index_random];
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    alive(val){
        if(val==null)
            return false;
        else if(val=='')
            return false;
        else if(val==undefined)
            return false;
        else if(val=='undefined')
            return false;
        else
            return true;
    }


    get_list_app_other(){
        $.getJSON(ce.random(ce.list_url_app),function(data){
            var all_item=data["all_item"];
            all_item=ce.shuffle(all_item);
            var list_app=[];
            $.each(all_item,function(index,app){
                if(ce.alive(app.microsoft_store)) list_app.push(app);
            });

            $.each(ce.limitItem(list_app,10),function(index,app){
                var empApp=$('<div class="btn btn-sm btn-light"><i class="fa fa-rocket" aria-hidden="true"></i> '+app.name_en+'</div>');
                $(empApp).click(function(){
                    window.open(app.microsoft_store,"_blank");
                });
                $("#list_app_other").append(empApp);
            });
        });
    }

    show_list_lang(){
        alert("sdsd");
    }

    msg(msg='',title='',icon=''){
        var obj_msg={
            title:title,
            iconColor: ce.color_btn,
            confirmButtonColor: ce.color_btn
        }
        if(title!='') obj_msg["title"]=title;
        if(icon!='') obj_msg["icon"]=icon;
        if(this.containsHTMLTags(msg))
            obj_msg["html"]=msg;
        else
            obj_msg["text"]=msg;
        Swal.fire(obj_msg);
    }

    containsHTMLTags(str) {
        const htmlTagPattern = /<\/?[a-z][\s\S]*>/i;
        return htmlTagPattern.test(str);
    }
}

var ce=new Carrot_Extenison();
