define(function(require){
    var Backbone = require("backbone"),
        mainView = require("mainView");

    var app = new mainView();
    app.render();

    var mainRouter = Backbone.Router.extend({
        routes : {
            "" : "helloPage",
            "hello" : "helloPage",
            "bye"   : "byePage",
        },
        helloPage : function(){
            require(["helloView"], function(pageView){
                app.setView(new pageView());
            });
        },
        byePage : function(){
            require(["byeView"], function(pageView) {
                app.setView(new pageView());
            });
        }
    });

    var router = new mainRouter();
    Backbone.history.start();

    return router;
});