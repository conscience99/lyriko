from apscheduler.schedulers.background import BackgroundScheduler

from .. models import VerificationCode
from apscheduler.triggers.interval import IntervalTrigger




def start():
    
    
    def deleteCode():
        from datetime import datetime
        now=datetime.now()
        for i in VerificationCode.objects.all():
            if i._day != now.day:
                i.delete()
            elif i._hour != now.hour:
                i.delete()
            elif int(i._minute)+16 <= now.minute:
                i.delete()
            else:
                pass
                
    scheduler = BackgroundScheduler()
    trigger = IntervalTrigger(minutes=1)
    scheduler.add_job(deleteCode, trigger, id='del', replace_existing=True)
    scheduler.start()
