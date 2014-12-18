var BBSearch = BBSearch || {};

(function () {
    'use strict';

    BBSearch.FilterView =  Backbone.View.extend({

        availableOptions : [
            'param'
        ],

        initialize : function (options) {
            _.extend(this, _.pick(options || {}, this.availableOptions));
            this.model = new BBSearch.FilterModel();

        },

        customRender :  function () {
            throw new Error('must be implemented');
        },

        render : function () {
            this.customRender();
            return this;
        }

    })

}());