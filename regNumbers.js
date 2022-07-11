function registrationNumFunc(regPlate) {
    let message = ""
    let storedReg = regPlate || {};

    function isValidTown(regNumber) {
        let regCode = ["CA","CY","CJ","CL",];

        for (let index = 0; index < regCode.length; index++) {
            const plateCode = regCode[index];
            if (regNumber.startsWith(plateCode)) {
                return true;
            }
        }
        return false;
    }


    function addReg(regNumber) {
        message = "";

        if (storedReg[regNumber] === undefined) {
            if (!isValidTown(regNumber)) {
                message = "INVALID:No town has this registration number in the list Invalid"
                return false;
            }
            storedReg[regNumber] = 0;

            message = "VALID:Successfully Added!"
            return true;

        } else {
            message = "Already exists!";
            return false;
        }

    }

    function regMsg() {
        return message;
    }


    function getRegNumbers() {
        return Object.keys(storedReg);
    }

    function filter(location) {
        var countReg = [];

        for (var plate in storedReg) {
            if (plate.startsWith(location)) {
                countReg.push(plate)
            }
        }

        return countReg
    }


    function regCheck(cars, code) {
        return cars.startsWith(code)
    }

    function displayPlate() {
        return storedReg;
    }

    function getList() {
        return storedReg;
    }

    return {
        regCheck,
        filter,
        addReg,
        regMsg,
        displayPlate,
        getRegNumbers,
        getList,
        isValidTown,
        storedReg,
    }
}