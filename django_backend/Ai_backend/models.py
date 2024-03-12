from django.db import models
from datetime import date as dt, datetime as dtime

# Create your models here.
class AttendanceModel(models.Model):
    date = models.DateField(timezone=True, default=dtime.now, primary_key=True)
    student_id = models.ForeignKey('StudentModel', on_delete=models.CASCADE, null=True, blank=True, related_name='student')

    def __str__(self):
        return f"{self.date}"

class StudentModel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, unique=True)
    attendances = models.ForeignKey(AttendanceModel, on_delete=models.CASCADE, null=True, blank=True, related_name='attendance')

    def __str__(self):
        return f"{self.id}: {self.name}:"
    
class VideoFeedModel(models.Model):
    id = models.AutoField(primary_key=True)
    is_active = models.BooleanField(default=False)
    url = models.TimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.id}: {self.is_active}: {self.url}"

