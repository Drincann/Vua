# Vua
Vue 视图思想的玩具实现

## 使用
就像使用 Vue 一样

html
```html
<section id="app">{{ val }}</section>
```

js
```js
const vm = new Vua({
    el: document.querySelector('#app'),
    data: {
        val: 'Hello Vua!'
    }
});
```
