avalon.define({
    $id: "test",
    xxx: "引入内部模板"
});

$(document).ready(function(){
    var gl={
        search_submit:document.getElementById("search_submit"),
        login_submit:document.getElementById("login_submit"),
        userName:document.getElementById("userName"),
        passWord:document.getElementById("passWord")
    };
    //搜索
    $("#search_submit").on('click',function(){
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
<<<<<<< HEAD
    };
=======
    });
>>>>>>> 97b42eddcf2b5ef920ef5786432d77b2b105f405
    //简单登陆
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
                    alert(data);
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