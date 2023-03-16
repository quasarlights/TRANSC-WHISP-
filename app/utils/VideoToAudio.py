from moviepy.editor import *
from tkinter.filedialog import *
import os


def video2audio(video_file):
    file = video_file
    video = VideoFileClip(file)
    video.audio.write_audiofile("audio.mp3")
    return "audio.mp3"

def deleteAudio(audio):
        audio_name = audio
        os.remove(audio_name)  


def main(video):
    video2audio(video)

  