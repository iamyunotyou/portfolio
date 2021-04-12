import React from 'react';
import faker from 'faker';
import Vote from './Vote';

const Comment = (props) => {
    return (
        <div className="ui container comments">
            <div className='comment'>
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.text}</div>
                </div>
                <Vote />
            </div>
        </div>
    )
}


export default Comment;