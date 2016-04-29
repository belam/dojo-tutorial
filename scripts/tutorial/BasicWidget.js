define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom-attr",
    "dojo/on",
    "dijit/form/Textarea",
    "dijit/form/TextBox",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/text!./templates/BasicWidget.html"
], function(
    declare, lang, attr, on, Textarea, TextBox, TemplatedMixin, WidgetBase, template
){

    return declare("tutorial.BasicWidget", [WidgetBase, TemplatedMixin], {

        baseClass : "basicWidget",
        templateString: template,

        postCreate : function(){
            this._buildControls();
            this._attachEventHandlers();
            this.inherited(arguments);
        },

        _buildControls : function(){
            this.textBoxOne = new TextBox({
                placeHolder : "BasicWidget.textBoxOne"
            }, this.textBoxOneNode);

            this.textBoxTwo = new TextBox({
                placeHolder : "BasicWidget.textBoxTwo"
            }, this.textBoxTwoNode);

            this.textarea = new Textarea({
                placeHolder : "Value will be injected here",
                readOnly : true
            }, this.textareaNode);
        },

        _attachEventHandlers : function(){
            on(this.actionButton, "click", lang.hitch(this, this._actionButtonClickEventHandler));
        },

        _actionButtonClickEventHandler : function(evt){
            var value = this.get("value");
            this.textarea.set("value", value);
        },

        _setCustomSetterValueAttr : function(customSetterValue){
            this.customSetterValue = customSetterValue;
            attr.set(this.customSetterNode, "innerHTML", this.customSetterValue);
        },

        _getCustomSetterValueAttr : function(){
            return this.customSetterValue;
        },

        _setMappedSetterValueAttr : {
            node : "mappedSetterNode",
            type : "innerHTML"
        },

        _getMappedSetterValueAttr : function(){
            return this.mappedSetterValue;
        },

        _getValueAttr : function(){
            return  this.textBoxOne.get("value") + " | " + this.textBoxTwo.get("value");
        }

    });

});