import React from 'react'

export default function Project(props) {
    return (
        <div className="row">
            <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span className="card-title">{props.details.title}</span>
                {props.details.company &&
                    <span className="card-title grey-text right">{props.details.company}</span>
                }
                <p>{props.details.text}</p>
                </div>
            </div>
            </div>
        </div>
    )
}
