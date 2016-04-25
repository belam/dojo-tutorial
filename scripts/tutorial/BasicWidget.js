define([
    "dojo/_base/declare",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/text!./templates/BasicWidget.html"
], function(
    declare, TemplatedMixin, WidgetBase, template
){

    return declare("tutorial.BasicWidget", [WidgetBase, TemplatedMixin], {

        baseClass : "basicWidget",
        templateString: template,

        postCreate : function(){
            console.log("basicWidget");
            this.inherited(arguments);
        }

    });

});