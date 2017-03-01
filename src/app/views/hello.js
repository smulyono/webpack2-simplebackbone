define(function(require){
    var Backbone = require("backbone");

    var HelloView = Backbone.View.extend({
        initialize : function(opt) {
            _.extend(this, opt);
        },
        render : function() {
            this.$el.html("<h1>Hello page</h1>");
            return this;
        }
    });

    return HelloView;
});