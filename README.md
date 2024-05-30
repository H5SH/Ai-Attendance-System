[Face Recognition_ Methods and Applications.pdf](https://github.com/H5SH/Ai-Attendance-System/files/15502601/Face.Recognition_.Methods.and.Applications.pdf)

### Predicted Images 

![33](https://github.com/H5SH/Ai-Attendance-System/assets/108005824/f2bf6fce-7109-4f7d-b5fe-b897624a7aff)

![802](https://github.com/H5SH/Ai-Attendance-System/assets/108005824/b2de8bfa-597d-4d0e-9027-4b6ab25a6515)

![244](https://github.com/H5SH/Ai-Attendance-System/assets/108005824/bfa45f08-0b7e-4798-9f3c-9cb90b82a54c)


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





