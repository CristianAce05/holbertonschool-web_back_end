const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }
    
    const students = lines.slice(1);
    const fields = {};
    
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });
    
    const totalStudents = Object.values(fields).reduce((sum, list) => sum + list.length, 0);
    console.log(`Number of students: ${totalStudents}`);
    
    for (const [field, studentList] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
