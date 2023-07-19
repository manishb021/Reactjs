import React from 'react'

function Follower({avatar_url, html_url, login}) {
  return (
    <article className='card'>
        <img className='image' src={avatar_url} alt='{login}' />
        <h4>${login}</h4>
        <a href={html_url} className='btn'>View Profiles</a>
    </article>
  )
}

export default Follower;
