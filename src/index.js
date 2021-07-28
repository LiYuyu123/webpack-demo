import x from './x.js'
import png from './image/1.png'
console.log(png)
app1.innerHTML=`<img src="${png}">`

const button=document.createElement('button')
button.innerText='懒加载'
// 懒加载
button.onclick=()=>{
    const promise=import('./lazy.js')
    promise.then((module)=>{
       module.default()
    },()=>{})
}
document.body.appendChild(button)