/**
 * Created by xiangwenwen on 16/4/11.
 */

var base = require('base-extend-backbone');
var BaseView = base.View;
var IndexModel = require('../../models/index/main.model');
var indexTemp = require('../../template/index/main.html');

var View = BaseView.extend({
    el:'#yytContainer',
    rawLoader:function(){
        return indexTemp;
    },
    context:function(args){

    },
    beforeMount:function(){
        //初始化一些自定义属性
        this.indexParameter = {
            'id':110
        };
    },
    afterMount:function(){
        //获取DOM Node
        this.img = this.findDOMNode('img');
    },
    ready:function(){
        //初始化Model
        this.indexModel = new IndexModel();
        this.indexModel.setChangeURL(this.indexParameter);
        this.indexModel.execute(function(response){
            console.log(response)
        },function(e){
            console.log(e)
        })
    },
    beforeDestroy:function(){
        //进入销毁之前,将引用关系设置为null
        this.img = null;
        this.indexParameter = null;
        this.indexModel = null;
    },
    destroyed:function(){
        //销毁之后
    }
});

module.exports = View;