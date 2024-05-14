# Ai-Attendance-System

A simple Ai attendance system for students or office use, with React on frontend and Python Django on Backend

## Frontend

Frontend in React.js

## Backend

Backend in Django python

## Model Training

### Converted heic to png

using a convertion python program

### Rotation of all img files 

Rotated All the Image Files to 0, 90, 180, 270 degrees using a python program

### labelImg Canvas Error of Data being float 

Solved by following guidlines

File canvas.py
x:\xxxxx\Python31x\site-packages\libs\canvas.py

line 526 :
from :
`p.drawRect(left_top.x(), left_top.y(), rect_width, rect_height)`
to :
`p.drawRect(int(left_top.x()), int(left_top.y()), int(rect_width), int(rect_height))`

line 530 :
from :
`p.drawLine(self.prev_point.x(), 0, self.prev_point.x(), self.pixmap.height())`
to :
`p.drawLine(int(self.prev_point.x()), 0, int(self.prev_point.x()), int(self.pixmap.height()))`

line 531 :
from :
`p.drawLine(0, self.prev_point.y(), self.pixmap.width(), self.prev_point.y())`
to :
`p.drawLine(0, int(self.prev_point.y()), int(self.pixmap.width()), int(self.prev_point.y()))`

File labelImg.py
x:\xxxxx\Python31x\site-packages\labelImg\labelImg.py

line 965 :
from :
`bar.setValue(bar.value() + bar.singleStep() * units)`
to :
`bar.setValue(int(bar.value() + bar.singleStep() * units))`