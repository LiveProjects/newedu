/**
 * Created by theliolife on 15/10/28.
 */
avalon.ready(function(){
    var vmm=avalon.define({
        $id:'chatRoom',
        friendList:['Lio','Anna','Kobe','Mash'],
        articleList:[],
        chooseFriend:function(){
            $("#friend_list").fadeOut();
        },
        chatRoomBlur:function(){
            $("#friend_list").fadeIn();
        }
    });

    $.ajax({
        async:false,
        url:'php/tools/article_detail.php',
        dataType:'json',
        Type:'get',
        data:{},
        success:function(data){
            data.forEach(function(item,index){
                console.log(item);
                vmm.articleList.push(item);
            })
        },
        error:function(error){
            console.log(error);
        }
    });
    console.log(vmm.articleList);

    avalon.scan();
});