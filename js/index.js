$(document).ready(function(){
    var gl={
        search_submit:document.getElementById("search_submit"),
        login_submit:document.getElementById("login_submit"),
        userName:document.getElementById("userName"),
        passWord:document.getElementById("passWord")
    };
    //搜索
    gl.search_submit.onclick=function(){
        var that=$(this);
        $.ajax({
            url:'php/common/login.php',
            dataType:'json',
            Type:'post',
            data:{},
            success:function(data){
                that.parent().append(JSON.stringify(data));
            },
            error:function(error){
                console.log(error);
            }
        });
    };
    //登陆
    $(document).delegate("#login_submit",'click',function(){
        var data={};
        data.username=$("#userName").val();
        data.passWord=$("#passWord").val();
        function check_null(object){
            for(var x in object){
                if(object[x]==''){
                    return false;
                }
            }
            return true;
        }
        if(check_null(data)){
            var that=$(this);
            $.ajax({
                url:'php/common/login.php',
                dataType:'json',
                Type:'post',
                data:{
                    'data':data
                },
                beforeSend:function(){
                    alert(JSON.stringify(data));
                },
                success:function(data){
                    that.parent().append(JSON.stringify(data));
                    that.prev().click();
                },
                error:function(error){
                    console.log(error);
                }
            });
        }else{
            alert("please check null");
        }
    });
});