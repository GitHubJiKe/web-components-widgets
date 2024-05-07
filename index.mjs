
import './widgets.mjs'

document.body.querySelector('#app').innerHTML = `
<br/>
<br/>
<br/>
<br/>
this is a tooltips label, created by a web component named

    <tooltips-widget content="tooltips widget" placement="top">tooltips-widget</tooltips-widget>
    <tips-widget type="info">这是一个信息</tips-widget>
    <tips-widget type="warning">这是一个警告</tips-widget>
    <tips-widget type="notice">这是一个注意</tips-widget>
    <tips-widget>这是一个提示</tips-widget>
    <summary-widget title="Summary Widget">
        <tag-widget color="green">Hello World</tag-widget>
        <tag-widget color="red">Hello World</tag-widget>
        <tag-widget color="blue">Hello World</tag-widget>
        <tag-widget color="yellow">Hello World</tag-widget>
        <tag-widget color="gray">泡沫</tag-widget>
       Summary Widget 可以让你将不是特别重要的信息折叠起来展示，为文章的正文部分留出更多的展示空间。
    </summary-widget>
    <br/>
<br/>
<br/>
<br/>
    `






