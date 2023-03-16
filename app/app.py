from flask import Flask, render_template, request 
from flask_wtf import FlaskForm
from wtforms import FileField, SubmitField
from werkzeug.utils import secure_filename
import os
from wtforms.validators import InputRequired
from utils.VideoToAudio import main, deleteAudio
from pathlib import Path
from utils.Transcript import Transcript
from utils.Download import save_text

app = Flask(__name__)

@app.route('/')
def index():
    #return index.html
    return render_template('index.html')

@app.route('/transcript', methods =['GET', 'POST'])
def transcript():
    video_file = request.files['file']
    video_file.save(video_file.filename)
    file_name = secure_filename(video_file.filename)
        
    if '.mp4' in file_name:
        main(file_name)
        os.remove(file_name)
        audio_name = "audio.mp3"
        text = Transcript.get_transcript(audio_name)
        deleteAudio(audio= audio_name)
        
        return render_template('text.html', text=text) 
    
    elif '.mp3' in file_name:
        text = Transcript.get_transcript(file_name)
        deleteAudio(audio= file_name)
        
        return save_text(text), os.remove('file.txt')
        #return render_template('text.html', text=text) 
    
    else:              
        return "ko"


if __name__ == '__main__':
    app.run(debug=True, port=5000)
    


