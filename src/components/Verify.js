import React, { useRef, useEffect } from 'react';
import Signup from './Signup';

const Verify = ({ loggedIn }) => {

  document.title="Indian Voting Website | Verify"

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const captureButtonRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const captureButton = captureButtonRef.current;

    if (!captureButton) return;

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((err) => {
        console.error('Error accessing the webcam:', err);
      });

    const handleCaptureClick = () => {
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append('image', blob, 'webcam_capture.jpg');
        const users=JSON.parse(localStorage.getItem("user"))
        const base64Image = users.image;
        formData.append('base64Image', base64Image);

        fetch('http://127.0.0.1:5000/upload', {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {

            if (data.redirect) 
            {
              window.location.href = 'http://localhost:3000' + data.redirect;
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, 'image/jpeg');
    };

    captureButton.addEventListener('click', handleCaptureClick);

    return () => {
      captureButton.removeEventListener('click', handleCaptureClick);
    };
  }, []);

  return (
    loggedIn ? (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Webcam Capture</h1>
        <video ref={videoRef} width="640" height="480" autoPlay style={{ border: '1px solid #ccc', borderRadius: '5px' }}></video>
        <br />
        <button ref={captureButtonRef} style={{ marginTop: '10px', padding: '5px 10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Capture Image</button>
        <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>
      </div>
    ) : (
      <Signup />
    )
  );
};

export default Verify;
