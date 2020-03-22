import React from 'react';


export default function UserCard(props) {
    console.log(props.user)
    return(
        <div>
          {props.user.login}
        </div>
    )
}