function Course(courseName,courseCode,chrhrs,venue,seatsleft){
  this.courseName = courseName;
  this.courseCode = courseCode;
  this.chrhrs = chrhrs;
  this.venue = venue;
  this.seatsleft = seatsleft;
};
var WebTech = new Course('Webtech', 'INFO2302', 3, 'Lab 5', 14);
var Eop = new Course ('Elements of Programming', 'CSC1100', 3, 'Lab 4', 5);
var Ungs = new Course ('Islamic Worldview', 'UNGS 2030', 3, 'Lecture Hall', 26);

document.querySelector('#message1').textContent = 'The course has ' + WebTech.seatsleft + ' seats left';
document.querySelector('#message2').textContent = 'The course has ' + Eop.seatsleft + ' seats left';
document.querySelector('#message3').textContent = 'The course has ' + Ungs.seatsleft + ' seats left';
