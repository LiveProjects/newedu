/**
 * Created by Administrator on 2015/10/27 0027.
 */
avalon.ready(function() {
    var vm = avalon.define({
        $id: "searchBlock",
        w: '请输入用户名',
        h: 100,
        click: function () {
            vm.w = parseFloat(vm.w) + 10;
            vm.h = parseFloat(vm.h) + 10;
        },
    });
    avalon.scan();

    var condition = avalon.define({
        $id:"condition",
        arr:['距离','月费用','职业','性别','年级','时间'],
        search_submit:function(){
            var em=$(this);
            alert(em.text());
        }
    });
    avalon.scan();

});