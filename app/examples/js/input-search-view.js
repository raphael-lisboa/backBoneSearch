/* globals  BBSearch*/

var BBSamples = BBSamples ||{};

(function () {
    'use strict';

    BBSamples.InputSearchView = BBSearch.FilterView.extend({

        events : {
            'blur input' : 'bind'
        },

        customRender : function () {
            $('<input>')
                .addClass('form-control')
                .attr('name',this.param)
                .attr('placeholder', 'Insert Name')
                .appendTo(this.$el);
        },

        bind : function () {
            var self = this;
            this.model.set({
                param : self.param,
                value : self.$el.find('input').val()
            });
        }

    });
}());