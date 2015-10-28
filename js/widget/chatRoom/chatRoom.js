/**
 * Created by theliolife on 15/10/28.
 */
avalon.ready(function(){
    avalon.define({
        $id:'chatRoom',
        friendList:['Lio','Anna','Kobe','Mash'],
        chooseFriend:function(){
            $("#friend_list").fadeOut();
        },
        chatRoomBlur:function(){
            $("#friend_list").fadeIn();
        }
    });

    avalon.scan();
});