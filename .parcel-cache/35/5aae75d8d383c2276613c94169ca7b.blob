const div = dom.create('<div>newdiv</div>')
console.log(div)

dom.after(test,div)
const div3 = dom.create("<div id='parent'></div>")
dom.wrap(test,div3)

const node = dom.empty(window.empty)
console.log(node)

dom.text(test,'新的文本内容')

dom.style(test,{border:'1px solid red',color:'green'})
dom.style(test,'border')
dom.style(test,'border','1px solid blue')

dom.class.add(test,'red')
dom.class.add(test,'blue')
dom.class.remove(test,'red')
console.log(dom.class.has(test,'red'))

const fn=()=>{
    console.log('click111')
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

const testDiv = dom.find('#test')[0]
console.log('find',testDiv)
const test2 = dom.find('#test2')[0]
console.log(dom.find('.blue',test2))


console.log('parent',dom.parent(test))

console.log(dom.find('#s2')[0])
console.log(dom.sibling(dom.find('#s2')[0]))

console.log('next:', dom.next(dom.find('#s2')[0]))
console.log('previous:', dom.previous(dom.find('#s2')[0]))

const t = dom.find('#travel')[0]
dom.each(dom.children(t),(n)=>{
    dom.style(n,'color','red')
})

console.log('index,',dom.index(dom.find('#s1')[0]))

//作业
dom.class.add(c1,'red')
dom.class.add(c3,'red')
const div1 = dom.find('#test2>.red')[0] // 获取对应的元素
dom.style(div1, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
console.log('divList:',divList)
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素