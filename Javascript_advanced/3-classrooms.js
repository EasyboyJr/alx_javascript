function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return () => {
            return seat;
        }
    }
    let students = [];
    for (let i = 0; i < numberOfStudents; i++) {
        const num = i + 1;
        const student = studentSeat(num);
        students.push(student);
    };

    return students;
};

const classRoom = createClassRoom(10);
