function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    }
        else {
            return false
        }

}

console.log(validGPA(5))