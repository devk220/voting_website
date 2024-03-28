from flask import Flask, redirect, request, jsonify
from flask_cors import CORS
import json,os
import base64,tempfile
from deepface import DeepFace

app = Flask(__name__)
CORS(app) 

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = {'jpg', 'jpeg'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    base64_image = request.form['base64Image']

    if file and allowed_file(file.filename):
        filename = 'webcam_capture.jpg'
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        with tempfile.NamedTemporaryFile(delete=False, suffix='.jpg') as tmp_file:
            tmp_file.write(base64.b64decode(base64_image.encode('utf-8')))

        result = DeepFace.verify(img1_path=tmp_file.name, img2_path="uploads/webcam_capture.jpg")

        print(json.dumps(result, indent=2))
        
        if result['verified']:
            return jsonify({'redirect': '/correctface'}), 200
        else:
            return jsonify({'redirect': '/errorface'}), 200
    return jsonify({'error': 'Invalid file format'}), 400


if __name__ == '__main__':
    app.run(debug=True)
