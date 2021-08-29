from django.core.mail import EmailMessage

class Util:
    @staticmethod
    def send_email(data):
        email=EmailMessage(subject=data['subject'], body=data['body'], to=[data['to']])
        email.send()
    
    def sendWelcomeEamil(data):
        email = EmailMessage(subject='Thank you for joining Lyriko!', body=data['body'], to=[data['to']])
        email.send()
    
    def SendVerificationCode(data):
        email = EmailMessage(subject='Please Verify Your Lyriko Account', body=data['body'],to=[data['to']])
        email.send()

        