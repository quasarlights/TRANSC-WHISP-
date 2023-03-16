import whisper

class Transcript:
    @classmethod
    def get_transcript(self, audio):
        
        #return
        model = whisper.load_model("small")
        result = model.transcribe(audio, fp16=False)
        return result["text"]
    
    """
    base object:
    wildlife otro asi sonot� asi medios Nai juice otra vez lista ya esta saluda la camara bee Buen teoría de Busca
     
    small object: 
    así hizo, así me... vale otra vez listo, listo ya está saludan la cámara bueno, bueno, bueno, bueno, bueno, bueno, bueno...
    
    """