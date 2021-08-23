import React from 'react'
import PropTypes from 'prop-types'

function Friends(props) {
    return (
        <div className="friend">
            <div className="friend__avatar">
                <img src={props.avatar} alt="" />
            </div>
            <div className="friend__name">
                <p>{props.name}</p>
            </div>
        </div>
    )
}

Friends.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}   

export default Friends

