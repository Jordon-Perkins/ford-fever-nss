const createChassis = () => {
	const newChassisObject = {}
	return newChassisObject
}

const addBody = (chassisObject) => {
	chassisObject.body = "Fever"
	return chassisObject
}

const addWheels = (chassisObject) => {
	chassisObject.wheels = 4
	return chassisObject
}

const addEngine = (chassisObject) => {
	chassisObject.engine = "4.8L"
	return chassisObject
}

const addSteeringWheel = (chassisObject) => {
	chassisObject.steeringWheel = "Tilting"
	return chassisObject
}

const addDriveTrain = (chassisObject) => {
	chassisObject.driveTrain = "Two wheel drive"
	return chassisObject
}

let chassis = createChassis()
console.log(chassis)

let chassisWithBody = addBody(chassis)
chassisWithBody = addWheels(chassis)
chassisWithBody = addEngine(chassis)
chassisWithBody = addSteeringWheel(chassis)
chassisWithBody = addDriveTrain(chassis)

console.log(chassisWithBody)
