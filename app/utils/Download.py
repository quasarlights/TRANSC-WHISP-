import os
from flask import send_file

def save_text(text):
    with open('file.txt', 'w') as f:
        f.write(text)
    return send_file('../file.txt', as_attachment= True)
