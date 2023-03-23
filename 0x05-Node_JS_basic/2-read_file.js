const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split(/\r?\n/).filter(line => line);
    const headers = lines[0].split(',');
    const students = lines.slice(1);
    const count = students.length;
    console.log(`Number of students: ${count}`);
    for (const header of headers) {
      const index = headers.indexOf(header);
      const field = students.map(student => student.split(',')[index]);
      const count = field.filter(Boolean).length;
      const list = field.filter(Boolean).join(', ');
      console.log(`Number of students in ${header}: ${count}. List: ${list}`);
    }
  } catch (err) {
    console.error(`Cannot load the database: ${err}`);
  }
}

module.exports = countStudents; 
