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
        width:window.innerWidth,
        height:window.innerHeight,
        'searchBlock':document.getElementById("searchBlock")
    });

    avalon.scan();



});