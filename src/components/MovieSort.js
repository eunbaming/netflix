import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap'

const MovieSort = () => {
  return (
    <div className='side-bar'>
      <div className='year-filter'>
        <div className='sort-section'>
          <input type='checkbox' id='sort' />
          <label htmlFor='sort'>Sort<span><FontAwesomeIcon icon={faArrowRight} /></span></label>
          <div>
            <h4>Sort Results By</h4>
            <Dropdown className='sort-dropdown'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className='filter-section'>
          <input type='checkbox' id='filter' />
          <label htmlFor='filter'>Filter<span><FontAwesomeIcon icon={faArrowRight} /></span></label>
          <div>
            <h4>Filter Results By</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieSort
