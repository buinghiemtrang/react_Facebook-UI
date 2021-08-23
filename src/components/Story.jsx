import React from 'react'

function Story({story}) {
    return (
        <div className="story">
            <div className="story__bg">
                <img src={story.bg}alt=""/>
            </div>
            <div className="story__avatar">
                <img src={story.img} alt="" />
            </div>
            <p>{story.name}</p>
            
        </div>
    )
}

export default Story

