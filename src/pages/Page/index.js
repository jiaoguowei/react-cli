import React, {PureComponent, useState, useEffect} from 'react';
import style from './index.css'
import pic from 'images/star.png'

// export default class Page extends PureComponent {
//     render() {
//         return (
//             <div className={style["page-box"]}>
//                 this is Page~
//                 <img src={pic} alt=""/>
//             </div>
//         )
//     }
// }

function Page() {

    const [number, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${number} times`;
    })
    return (
        <div>
            <p>You clicked {number} times</p>
            <button onClick={() => setCount(number + 1)}>
                Click me
            </button>
            <p>{fruit}</p>
            {
                todos.map((item, index) => (<span key={index}>{item.text}</span>))
            }
        </div>
    )
}

export default Page;
