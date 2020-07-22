import React from 'react'

class Image extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.url} alt="Guide to Figuring Out the Age of an Undated World Map"/>
            </div>
        )
    }
}

export default Image