var BBSearch = BBSearch || {};

(function () {
    'use strict';

    BBSearch.SearchView = Backbone.View.extend({
        requiredElegible : true,
        autoSearch : true,

        availableOptions : [
            'filterView',
            'url',
            'autoSearch'
        ],

        events : {
            'click #search-button' : 'onSearchButton'
        },

        /**
         *
         * @param options
         */
        initialize : function (options) {
            _.extend(this, _.pick(options || {}, this.availableOptions));
            this.collection = new Backbone.Collection();

            if( this.autoSearch ){
                this.listenTo(this.collection,'change',this.search);
            }
        },

        render : function() {
            var self = this;

            _.forEach(this.filterView , function(filter){
                self.$el.append(filter.render().el);
                self.collection.add(filter.model);
            });
            if( !this.autoSearch ) {
                this.$el.append($('<button>').attr('id', 'search-button').html('Search'));
            }
            return this;
        },

        search : function () {
            var uri = this.checkParams();
            console.log(uri);
        },

        checkParams : function () {
            var uriParams = '?';

            _.forIn(this.collection.models , function(filter){
                if(filter.checkElegible()){
                    uriParams += filter.getParam() + '&';
                }
            });

            return uriParams;
        },

        onSearchButton : function(){
            console.log('click button' + this.checkParams());
        },

        onAutoSearch : function () {
            throw new Error('must be implemented');
        }

    });

}());