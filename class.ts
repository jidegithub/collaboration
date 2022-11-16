class Motorcycle {
    speeding = 0
    speed (){
        return this.speeding
    }
    accelerateTo(newspeed){
        this.speeding = newspeed
    }
}

const bike = new Motorcycle()
console.log(bike)

console.log(bike.speed())
console.log(bike)

function