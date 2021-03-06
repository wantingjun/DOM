window.dom={
    create(string){ //新增节点
        const container = document.createElement("template");
        container.innerHTML=string.trim();
        return container.content.firstChild
    },
    after(node,node2){ //nodeInsertAfter
        console.log(node2, node.nextSibling)
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
    before(node,node2){ //新增哥哥
        node.parentNode.insertBefore(node2,node)
    },
    append(parent,node){ // 新增儿子
        parent.appendChild(node)
    },
    wrap(node,parent){ //新增父亲
        dom.before(node,parent)// parent先放到节点node前面
        dom.append(parent,node) // 把node放到parent下面
    },
    remove(node){ // 删除节点
        node.parentNode.removeChild(node)
        return node
    },
    empty(node){ // 删除后代
        //node.innerHTML=''
        const {childNodes} =node
        const array=[]
        // for(let i =0; i<childNodes.length;i++){
        //     dom.remove(childNodes[i])
        //     array.push(childNodes[i])
        // }
        let x = node.firstChild
        while(x){

            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    //改
    attr(node, name,value){
        if(arguments.length ===3){
            node.setAttribute(name,value)
        }
        else if(arguments === 2){
            return node.getAttribute(name)
        }
       
    },
    text(node, string){ //设置文本内容
        if(arguments.length ===1){ //获取
            if('innerText' in node){ // 适配
                return node.innerText 
            }
            else{
                return node.textContent
            }
        }
        else if(arguments.length ===2){ // 设置
            if('innerText' in node){ // 适配
                node.innerText = string 
            }
            else{
                node.textContent = string
            }
        }
       
    },
    html(node,string){
        if(arguments.length ===1){
            return  node.innerHTML 
        }
        else if(arguments.length ===2){
            node.innerHTML = string
        }
       
    },
    style(node,name,value){ //修改style
        if(arguments.length ===3){
            node.style[name] =value
           
        }
        else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name]
            }
            else if(name instanceof Object){
                const object = name 
                for (let key in object ){
                    node.style[key]= object[key]
                }
            }

        }
       

    },
    class: {
        add(node, className ){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            return node.classList.contains(className)
        }
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
    find(tag,scope){
        return (scope || document).querySelectorAll(tag)
    },
    parent(node){
        return node.parentNode
    },
    children(node){
        return node.children
    },
    sibling(node){
       return  Array.from(node.parentNode.children).filter(n=>n!==node)
    },
    next(node){ //下一节点
        let x = node.nextSibling
        while(x && x.nodeType === 3){ //当前节点是文本则等于下一个node
            x= x.nextSibling
        }
         return x
    },
    previous(node){ //上一节点
        let x = node.previousSibling
        while(x &&x.nodeType === 3){ //当前节点是文本则等于下一个node
            x= x.previousSibling
        }
         return x
    },
    each(nodeLit,fn){//遍历所有节点
        for(let i =0; i<nodeLit.length;i++){
            fn(nodeLit[i])
        }

    },
    index(node){ //一个元素排行第几
        const list = dom.children(node.parentNode) //获取这个节点父亲的所有儿子，不用.children是因为这个原生的API会变
        let i 
        for (i =0;i<list.length;i++){
            if(node ===list[i]){
                break
            }
        }
        return i

    }

}
