import React from 'react';
import Todo from './Todo'

class List extends React.Component{
    render(){
        let newList = this.props.list.map((element, index) => {
            return <Todo key={index} task={element} />
          })

        return (
            <div>
                {newList}
            </div>
        )
    }
}

export default List;