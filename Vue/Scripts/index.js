//组件
var Home = Vue.extend({
    template: '<div><h1>{{msg}}</h1><p>{{msg}}</p></div>',
    data: function () {
        return {
            title: 'Hello Vue',
            msg: 'Hello Vue'
        }
    }
})
var v_text = Vue.extend({
    template: '<div><span>{{ info }}</span><span v-text="msg"></span></div>',
    data: function () {
        return {
            msg: 'Hello Vue.js',
            info: '数据绑定,通常写成 {{...}}'
        }
    }
})
var v_html = Vue.extend({
    template: '<div><span>{{ info }}</span><span v-html="msg"></span></div>',
    data: function () {
        return {
            msg: '<font style="color:red;">Hello Vue.js</font>',
            info: '将元素解析成Html标签'
        }
    }
})
var v_on = Vue.extend({
    template: '<div><span>{{ info }}</span><button v-on:click="onclick">click</button></div>',
    data: function () {
        return {
            msg: 'Hello Vue.js',
            info: '为元素绑定事件'
        }
    },
    methods: {
        onclick: function () {
            alert(this.msg);
        }
    }
})
var v_bind = Vue.extend({
    template: '<div><span v-bind:title="info" :style="style">{{ info }}</span><a v-text="msg" :href="href" target="_blank"></a></div>',
    data: function () {
        return {
            msg: 'Hello Vue.js',
            info: 'v-bind用于绑定标签属性,可简写成 ":",同时还可以用于绑定id、class等属性及自定义属性',
            href: 'https://cn.vuejs.org/v2/api/',
            style: {
                color: 'red',
            }
        }
    }
})
var v_show = Vue.extend({
    template: '<div><span>{{ info }}</span><span v-text="msg" v-show="isShow"></span><br /><button v-on:click="onclick">{{ isShowText }}</button></div>',
    data: function () {
        return {
            msg: 'Hello Vue.js',
            info: '控制元素是否显示，相当于修改元素的display属性',
            isShow: true,
            isShowText:'Hide'
        }
    },
    methods: {
        onclick: function () {
          this.isShow = !this.isShow;
          if (this.isShowText == "Hide")
          {
            this.isShowText = "Show";
          }
          else 
          {
            this.isShowText = "Hide";
          }
        }
    }
})
var v_if = Vue.extend({
    template: '<div><span>{{ info }} {{ msg1 }}</span><input v-model="msg"><span v-if=" msg > 100 ">大于100</span><span v-else-if=" msg <= 100">小于100</span><span v-else>非法数字</span></div>',
    data: function () {
        return {
            msg: '5',
            info: '条件判断',
            msg1: ''
        }
    }
})
var v_for = Vue.extend({
    template: '<div><span>{{ info }}</span><ul><li v-for="(item, index) in items" @click="onclick(item)"> {{ item.text }}</li></ul></div>',
    data: function () {
        return {
            info: '',
            items: [
                  { text: '北京', value: '1' },
                  { text: '大连', value: '2' }
            ]
        }
    },
    methods: {
        onclick: function (item) {
            alert(item.value);
        }
    }
})
//生成路由实例
var router = new VueRouter({
    routes: [
                { path: '/home', component: Home },
                { path: '/Directives', redirect: '/Directives/v_text' },
                { path: '/Directives/v_text', component: v_text },
                { path: '/Directives/v_html', component: v_html },
                { path: '/Directives/v_show', component: v_show },
                { path: '/Directives/v_if', component: v_if },
                { path: '/Directives/v_for', component: v_for },
                { path: '/Directives/v_on', component: v_on },
                { path: '/Directives/v_bind', component: v_bind },
                { path: '*', redirect: '/home'} // { path: '/', component: Home } 
            ]
})
//挂载到vue上
new Vue({
    router: router,
    el: '#app',
    data: {
        vue_title: 'Vue的常用指令'
    }
})