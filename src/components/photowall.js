import React from 'react'
import Photo from './photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photowall(props) {
  return <div>
    <Link className="addIcon" to="/AddPhoto"></Link>
    <div className='photoGrid'>
      {props.posts
        .sort((x,y) => 
          {
            return y.id - x.id;
          }
        )
        .map((post, idx) => <Photo key={idx} post={post} onRemovePhoto={props.onRemovePhoto} />)}
    </div>
  </div>
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall