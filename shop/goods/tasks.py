from django.core.mail import send_mail
from time import sleep


def send_log_to_email():
    with open ('shop/loggingfile.log', 'r') as file:
        logfile = file.read()
    print(logfile)
    send_mail(
            subject='Logging file',                      
            message=logfile,                         
            from_email= 'kai.reytsu@yandex.ru',       
            recipient_list=['kai.reytsu@gmail.com'],
    )
    with open ('shop/loggingfile.log', 'r+') as file:
        logfile = file.truncate(0)
