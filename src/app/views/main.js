define(function(require){
    var Backbone = require("backbone");

    var mainView = Backbone.View.extend({
        className : "mainView",
        currentView : undefined,
        initialize : function(opt) {
            _.extend(this, opt);
        },
        setView : function(newView) {
            this.clearCurrentView();
            this.currentView = newView;
            this.$el.append(this.currentView.render().el);
        },
        clearCurrentView : function() {
            if (this.currentView) {
                this.currentView.stopListening();
                this.currentView.remove();
            }
        },
        render : function(){
            this.$el.html("<a href='#hello'>Hello</a> <a href='#bye'>Bye</a> <hr />");
            $("body").append(this.$el);
            return this;
        }
    });

    return mainView;
});