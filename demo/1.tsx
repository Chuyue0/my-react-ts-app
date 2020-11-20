import React, { useState } from 'react';

/**
 * interface用于公共api的定义
 */
interface Props {
    name: string;
    color: string;
}

/**
 * type为组件的Props和State，更受约束
 * ?表示是可选的
 * 可增加默认值，一般不需要
 */
type twoProps = {
    name: string;
    color: string;
}

type threeProps = {
    color?: string;
    children: React.ReactNode; // 接收任意有效的react节点
    onClick: () => void
}

// 函数声明式写法
function oneHeading({ name, color }: Props): React.ReactNode {
    return <h1>heading text</h1>
}

// 函数表达式写法
const twoHeading: React.FC = () => <h1>two heading text</h1>

const Button: React.FC<threeProps> = ({ color = 'blue', children, onClick }) => {
    return <button style={{ color: color }} onClick={onClick}>{children}</button>
}

// state hook
/**
 * 使用场景： 在函数组件中，不能分配或读取this.state，所以直接在组件式中useState Hook;
 * 函数退出后变量会‘消失’？
 * 与class中this.state提供的功能相同，它们是需要成对获取；
 * 使用泛型< >
 */
type User = {
    nickname: string;
    uid: string;
}
const [user, setUser]=useState<User | null>(null); // 声明叫user的state变量

// reducer demo
type AppState={}
type Action=
    | {type: 'SET_NICK'; payload: string}
    | {type: 'SET_UID'; payload: string};
export function reducer(state: AppState, action: Action): AppState{
    switch(action.type){
        case 'SET_NICK': return {
            ...state,
            nick: action.payload
        }
        case 'SET_UID': return {
            ...state,
            uid: action.payload
        }
        default: return state;
    }
}

// 坑1：处理表单onChange事件
/**
 * 事件是 ChangeEvent
 * 传递 HTMLInputElement > input
 */
const MyInput = ()=>{
    const [value ,setValue] = useState(''); // React.useState()
    function onChange(e: React.ChangeEvent<HTMLInputElement>){
        setValue(e.target.value);
    }
    return <input value={value} onChange={onChange} id='ipt' />
}
// 坑2：扩展组件的props
/**
 * 方式1 type &
 */
type ButtonProps = {
    color: string;
    text: string;
}
type ContainerProps = ButtonProps & {
    height: number;
}
const Container: React.FC<ContainerProps>=({color,height,text})=>{
    return <div style={{color:color, height: `${height}px`}}>{text}</div>
}
/**
 * 方式2 interface 声明 props
 * 使用关键字extends扩展
 * 可读性更高
 */
interface ButtonTwoProps {
    color: string;
    text: string;
}
interface ContainerTwoProps extends ButtonTwoProps {
    height: number;
}
const ContainerTwo: React.FC<ContainerTwoProps>=({color,height,text})=>{
    return <div style={{color:color, height: `${height}px`}}>{text}</div>
}
