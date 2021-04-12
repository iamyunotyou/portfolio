import React from 'react'

const Vote = (props) => {
    return (
        <>
        <div className="ui labeled button" tabindex="0">
            {/* <div className="content">{props.children}</div> */}
            <i className="heart icon"></i> 좋아요                
        </div>
        <a className="u ibasic redelft pointing label">1040</a>
        </>
    )
}


export default Vote;