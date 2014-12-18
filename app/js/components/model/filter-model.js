var BBSearch = BBSearch || {};

(function () {
    'use strict';

    BBSearch.FilterModel =  Backbone.Model.extend({

        defaults : {
            param : 'param',
            value : ''
        },

        getParam : function () {
            return this.get('param') + "=" + this.get('value');
        },

        checkElegible : function(){
            return  !_.isUndefined(this.get('value')) && !_.isEmpty(this.get('value'));
        }

    })

}());
