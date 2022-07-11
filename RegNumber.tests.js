describe('in registrationNumFunc', function () {

    it('Must be able to set registration number to CA for cape town ', function () {
        let input = registrationNumFunc();
        input.addReg("CA 458762")
        input.addReg("CA 347 565")
        assert.deepEqual(input.getRegNumbers(), ["CA 458762","CA 347 565"])
    })

    it('Must be able to set registration number to CY for Bellvile ', function () {
        let input = registrationNumFunc();
        input.addReg("CY 458")
        input.addReg("CY 876456")
        input.addReg("CY 459 008")
        assert.deepEqual(input.getRegNumbers(), ["CY 458", "CY 876456", "CY 459 008"])
    })

    it('Must be able to set registration number to CJ for Paarl ', function () {
        let input = registrationNumFunc();
        input.addReg("CJ 585 458")
        input.addReg("CJ 786 678")
        assert.deepEqual(input.getRegNumbers(), ["CJ 585 458", "CJ 786 678"])
    })

    it('Must be able to set registration number to CL for stellenbosch ', function () {
        let input = registrationNumFunc();
        input.addReg("CL 585 458")
        input.addReg("CL 786 678")
        assert.deepEqual(input.getRegNumbers(), ["CL 585 458", "CL 786 678"])
    })

    it('Must be able to display only once when reg number is repeated', function () {
        let input = registrationNumFunc();
        input.addReg("CA 125258")
        input.addReg("CA 125258")
        input.addReg("CJ 585 458")
        input.addReg("CJ 585 458")
        input.addReg("CY 458")
        input.addReg("CY 458")
        assert.deepEqual(input.getRegNumbers(), ["CA 125258", "CJ 585 458", "CY 458"])
    })

    it('Must be able to dsiplay only CA if cape town selected ', function () {
        let input = registrationNumFunc();
        input.addReg("CA 567 890")
        input.addReg("CJ 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.filter("CA"), ["CA 567 890", "CA 8775"])
    })

    it('Must be able to dsiplay only CY registration numbers if Bellville selected', function () {
        let input = registrationNumFunc();
        input.addReg("CA 567 890")
        input.addReg("CY 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.filter("CY"), ["CY 246 894", "CY 15875"])
    })

    it('Must be able to dsiplay only CJ registration numbers if Paarl selected', function () {
        let input = registrationNumFunc();
        input.addReg("CJ 567 890")
        input.addReg("CJ 246 894")
        input.addReg("CY 15875")
        input.addReg("CJ 8775")
        input.addReg("CA 567 890")
        input.addReg("CL 246 894")
        input.addReg("CJ 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.filter("CJ"), ["CJ 567 890", "CJ 246 894", "CJ 8775", "CJ 15875"])
    })

    it('Must be able to dsiplay only CL registration numbers if StellenBosch selected', function () {
        let input = registrationNumFunc();
        input.addReg("CL 567 890")
        input.addReg("CL 246 894")
        input.addReg("CY 15875")
        input.addReg("CL 8775")
        input.addReg("CA 567 890")
        input.addReg("CL 246 894")
        input.addReg("CJ 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.filter("CL"), ["CL 567 890", "CL 246 894", "CL 8775"])
    })

    it('Dislay a valid message if Registration code and Town Match', function () {
        let input = registrationNumFunc();
        input.addReg("CA 567 890")
        input.addReg("CJ 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        input.addReg("CL 8775")
        assert.deepEqual(input.regMsg(), "VALID:Successfully Added!")
    })
})