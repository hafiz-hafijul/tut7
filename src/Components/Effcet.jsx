import React,{useState,useEffect} from 'react'

const Effcet = () => {
    const [num, setNum] = useState(0)

    useEffect(() => {
        if (num === 0) {
            document.title = `Hafiz`;
        } else {
            document.title = `You clicked ${num} times`;
        }
    })
    return (
        <div>
            <h1>Value { num }</h1>
            <button onClick={() => {
        setNum(num+1)
    }}>Click Me</button>
        </div>
    )
}

export default Effcet
