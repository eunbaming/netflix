import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import YouTube, { YouTubeProps } from 'react-youtube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const MovieTrailer = () => {
  const [show, setShow] = useState(false)
  const [fullscreen, setFullscreen] = useState(true)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const {movieTrailer} = useSelector(state => state.detail)
  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        <FontAwesomeIcon icon={faFilm} /> Watch Trailer
      </Button>
      <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <YouTube videoId={movieTrailer.key} className='trailer'/>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MovieTrailer
