import React from 'react';
import faker from 'faker';

const Comment = () => {
    return (
        <div className="ui container comments">
            <div className='comment'>
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">오늘 6:00pm</span>
                    </div>
                    <div className="text">롤 흥해라!</div>
                </div>
            </div>
        </div>
    )
}


export default Comment;