/**
 * Created by theliolife on 15/10/23.
 */
window.onload=function(){
    require(["mmRouter"], function() {
        var model = avalon.define({
            $id: "test",
            currPath: "",
            params: {},
            query: {},
            args: "[]"
        })
        function callback() {
            model.currPath = this.path
            var params = this.params
            if ("time" in params) {
                params.time = avalon.filters.date(params.time, "yyyy年M月dd日")
            }
            model.params = params
            model.args = "[" + [].slice.call(arguments).join(",") + "]"
            model.query = this.query
        };
        function go_reg_page() {
            alert(123);
        }
        avalon.router.get("/aaa/", callback);
        avalon.router.get("/bbb", callback);
        avalon.router.get("/ccc/:ccc", callback);
        avalon.router.get("/ddd/{time:date}/", callback);
        avalon.router.get("/eee/{count:\\d{4}}/", callback);
        avalon.router.get("/fff", callback);

        avalon.router.get("/register",go_reg_page)

        avalon.history.start({
            basepath: "/avalon"
        });
        avalon.scan()
    });
}