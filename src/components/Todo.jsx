import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

// THIS COMPONENT RENDER THE TODO LIST FOR OUR FRONTEND APP 
const Todo = (props) => {
    const { text, updateMode, deleteTodo } = props;
    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
                <div className="icon" onClick={updateMode}><EditOutlined /></div>
                <div className="icon" onClick={deleteTodo}><DeleteOutlined /></div>
            </div>
        </div>
    )
}

export default Todo;