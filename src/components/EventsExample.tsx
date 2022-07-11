import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    let dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        // console.log('DRAG')
    }

    let dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
        console.log('IN')
    }

    let leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('LEAVE')
    }

    let dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log("DROP")
    }

    return (
        <div>
            <input
                placeholder={'Control'}
                type="text"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
            <input
                placeholder={'Uncontrol'}
                type="text"
                ref={inputRef}
            />
            <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => console.log(inputRef.current?.value)}>Button</button> {/*? 35:30*/}
            <div onDrag={dragHandler} draggable={true} style={{width: 200, height: 200, background: 'red'}}></div>
            <div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithPreventHandler}
                 style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15}}></div>
        </div>
    );
};

export default EventsExample;