import React, { useEffect, useState } from "react"

/**
 * 使用了hook的函数组件，自定义hook函数用useX开头，其他可用大写字母XXX开头
 * effect hook
 * useEffect用来执行相同的操作，要清除的副作用才需要return返回一个函数
 * 使用hook其中目的是为了生命周期中包含不相关逻辑，但又分离到不同的方法中
 * useState useEffect可以使用多个
 */
function Counter(props){
    console.log('props',props)
    const [count, setCount] = useState(0); // 声明了count state变量
    useEffect(()=>{
        document.title = `点击${count}times`;
    }, [count]); // 仅在count有更改时更新
    return (
        <div>
            <p>点击了{count}次</p>
            <button onClick={()=>{setCount(count+1)}}>按钮点击</button>
        </div>
    )
}

export default Counter