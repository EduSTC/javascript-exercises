const findTheOldest = function(personArray) {
    return personArray.reduce((personA, personB) => {
        if (personA.yearOfDeath === undefined) {
            personA.yearOfDeath = new Date().getFullYear();
        } else if (personB.yearOfDeath === undefined) {
            personB.yearOfDeath = new Date().getFullYear();
        }
        ageA = personA.yearOfDeath - personA.yearOfBirth;
        ageB = personB.yearOfDeath - personB.yearOfBirth;
        if (ageA > ageB) {
            return personA;
        } else {
            return personB;
        }
        

    });
};

// Do not edit below this line
module.exports = findTheOldest;