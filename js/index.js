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
    });
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

    //空值检测
    function null_value(array){
        $.each(array,function(index,item,arr){
            if($(this).val()==""){
                alert("有空项");
                return false;
            }
        });
        return true;
    };
    //数封装json
    function make_json(array){
        var new_json={};
        if(Object.prototype.toString.call(array[0])=='[object HTMLInputElement]'){
            $.each(function(item,index,arr){
                new_json[item]=item;
            });
            return new_json;
        }
    };

    //简单注册
    $("#main").delegate('#register_button_true','click',function(){
        var register_main_inputs= $("#register_main").find("input");
        alert(null_value(register_main_inputs));

        var val='';
        if(null_value(register_main_inputs)){
            $.ajax({
                url:'',
                dataType:'get',
                Type:'json',
                data:{
                    'value':val
                },
                beforeSend:function(){
                    alert(val);
                },
                success:function(data){
                    alert(data);
                },
                error:function(error){
                    console.log(error);
                }
            })
        }
    });
});