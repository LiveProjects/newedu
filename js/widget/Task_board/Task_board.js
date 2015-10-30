/**
 * Created by theliolife on 15/10/30.
 */
avalon.ready(function(){
    var vm=avalon.define({
        $id:'TaskBoard',
        tasklist:['chatRoom and dragEnjoy',
                  'search_article_list',
                  'category_data',
                  'register or perfectAfter',
                  'conditionSearch and BDmap',
                  'SMTP',
                  'articleDetail page',
                  'sourceDetail page',
                  'Massory source showpage',
                  'Material Design'],
        //pageurl:'templates/tools/chatRoom.html',
        urlList:[],
        progressList:[45,45,23,12,23,45,56,67,78,89,89,90],
        chooseFriend:function(){
            $("#friend_list").fadeOut();
        },
        chatRoomBlur:function(){
            $("#friend_list").fadeIn();
        },
        exchangePage:function(){
            var url=$(this).find("a").prop("href");
            var index=$(this).index();
            alert(index);
            $(this).parent().next().find("li").eq(index).show().end().siblings().hide();
        }
    });

    avalon.scan();
});