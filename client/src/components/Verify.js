import React, { useRef, useEffect, useState } from 'react';
import Signup from './Signup';

const Verify = ({ loggedIn }) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');

  document.title = "Indian Voting Website | Verify"

  useEffect(() => {

    document.body.style.backgroundImage="url(https://img.pikbest.com/backgrounds/20190903/internet-face-recognition-background-picture_1902692.jpg!bw700)"
    document.body.style.backgroundSize="cover"
    
  
    return () => {
      document.body.style.backgroundImage=""
    }
  }, [])

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
      setIsVerifying(true);
      setVerificationMessage('Verifying image, please wait...');

      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append('image', blob, 'webcam_capture.jpg');
        const users = JSON.parse(localStorage.getItem("user"))
        const base64Image = users.image;
        formData.append('base64Image', base64Image);

        fetch('http://127.0.0.1:5000/upload', {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            setIsVerifying(false);

            if (data.redirect) {
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
        {isVerifying ? (
          <>
          <p><h1>{verificationMessage}</h1></p>
          <img src="https://i.gifer.com/ZKZg.gif" alt="" />
          </>
        ) : (
          <>
            <h1>Verify Your Face</h1>
            <video ref={videoRef} width="640" height="480" autoPlay style={{ border: '1px solid #ccc', borderRadius: '5px' }}></video>
            <br />
            <button ref={captureButtonRef} style={{ marginTop: '10px', padding: '5px 10px', fontSize: '16px', backgroundColor: 'green', color: '#fff', border: '1px solid black', borderRadius: '5px', cursor: 'pointer' }}>Capture Image</button>
            <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>
          </>
        )}
      </div>
    ) : (
      <Signup />
    )
  );
};

export default Verify;
