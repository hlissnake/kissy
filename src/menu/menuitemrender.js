/**
 * simple menuitem render
 * @author:yiminghe@gmail.com
 */
KISSY.add("menu/menuitemrender", function(S, UIBase, Component) {
    return UIBase.create(Component.Render, {
        renderUI:function() {
            var el = this.get("el");
            el.html("<div class='" + this.get("prefixCls") + "menuitem-content" + "'>")
            el.attr("role", "menuitem");
            el.unselectable();
            if (!el.attr("id")) {
                el.attr("id", S.guid("ks-menuitem"));
            }
        },

        _uiSetContent:function(v) {
            var cs = this.get("el").children("div");
            cs.item(cs.length - 1).html(v);
        },

        _uiSetDisabled:function(v) {

            var el = this.get("el");
            if (v) {
                el.addClass(this.get("prefixCls") + "menuitem-disabled");
            } else {
                el.removeClass(this.get("prefixCls") + "menuitem-disabled");
            }
            el.attr("aria-disabled", !!v);
        },

        _uiSetHighlighted:function(v) {
            if (v) {
                this.get("el").addClass(this.get("prefixCls") + "menuitem-highlight");
            } else {
                this.get("el").removeClass(this.get("prefixCls") + "menuitem-highlight");
            }
        },

        _handleMouseDown:function() {
            this.get("el").addClass(this.get("prefixCls") + "menuitem-active");
            this.get("el").attr("aria-pressed", true);
        },

        _handleMouseUp:function() {
            this.get("el").removeClass(this.get("prefixCls") + "menuitem-active");
            this.get("el").attr("aria-pressed", false);
        },

        //支持按钮，默认按键 space ，enter 映射到 model and view handleClick
        _handleKeydown:function() {
        }
    }, {
        ATTRS:{
            elCls:{
                valueFn:function(v) {
                    return this.get("prefixCls") + "menuitem";
                }
            },
            highlighted:{},
            prefixCls:{
                value:"goog-"
            },
            content:{}
        },
        HTML_PARSER:{
            content:function(el) {
                return el.html();
            }
        }
    });
}, {
    requires:['uibase','component']
});