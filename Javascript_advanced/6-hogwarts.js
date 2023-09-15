function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += points;
    };

    this.setName = (newName) => {
        name = newName;
    };

    this.rewardStudent = () => {
        changeScoreBy(1);
    };

    this.penalizeStudent = () => {
        changeScoreBy(-1);
    };

    this.getcore = () => {
        return `${name}: ${privateScore}`;
    };
}

const harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getcore());

const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getcore());