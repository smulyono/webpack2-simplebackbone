define(function(require){
    var Backbone = require("backbone");

    var byeView = Backbone.View.extend({
        initialize : function(opt){
            _.extend(this, opt);
        },
        render : function(){
            this.$el.html("<h1>BYE</h1>");
            return this
        }
    });

    return byeView;
});