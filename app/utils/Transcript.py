import whisper

class Transcript:
    @classmethod
    def get_transcript(self, audio):
        try:       
            #return
            model = whisper.load_model("small")
            result = model.transcribe(audio, fp16=False)
            return result["text"]
        except FileNotFoundError:
            raise Exception('Archivo no encontrado')
        except Exception as e:
            raise Exception(str(e))
        
    
    """
    base object:
    wildlife otro asi sonot� asi medios Nai juice otra vez lista ya esta saluda la camara bee Buen teoría de Busca
     
    small object: 
    así hizo, así me... vale otra vez listo, listo ya está saludan la cámara bueno, bueno, bueno, bueno, bueno, bueno, bueno...
    
    """