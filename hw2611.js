
//ex 1
run1 = () => {
    let first = Number(document.getElementById("min-num").value)
    let last = Number(document.getElementById("max-num").value)
    getEvenNum(first, last)

        .then((num) => {
            document.body.style.background = "green"
            console.log(num)
        })
        .catch((num) => {
            document.body.style.background = "red"
            console.log(num)
        })
}

const getEvenNum = (min, max) => {

    const myPromise = new Promise((resolve, reject) => {

        let rundomNumber = Math.floor(Math.random() * (max - min + 1)) + min

        if (rundomNumber % 10 === 7 || rundomNumber % 7 === 0) {
            resolve(rundomNumber)
        } else {
            reject(rundomNumber)
        }
    })
    return myPromise
}

//ex2

const run2 = () => {
    setTimeout(() => {

        let first = Number(document.getElementById("min-num").value)
        let last = Number(document.getElementById("max-num").value)
        getPrimeNum(first, last)

            .then((num) => {
                document.body.style.background = "green"
                console.log(num)
            })
            .catch((num) => {
                document.body.style.background = "red"
                console.log(num)
            })
    }, 1000);
}

const getPrimeNum = (min, max) => {
    const myPromise = new Promise((resolve, reject) => {
        let rundomNumber = Math.floor(Math.random() * (max - min + 1)) + min

        for (let i = 2; i < rundomNumber; i++) {
            if (rundomNumber % i === 0) {
                reject(rundomNumber)
            } else {
                resolve(rundomNumber)
            }
        }
    })
    return myPromise
}

//ex3

const run3 = () => {
    getCuteAnimal()
        .then((animal) => {
            document.body.style.background = "green"
            console.log(animal)
        })
        .catch((animal) => {
            document.body.style.background = "red"
            console.log(animal)
        })
}

const getCuteAnimal = () => {
    const myPromise = new Promise((resolve, reject) => {
        let arrey = ["חתלתול", "כלבלב", "ארנבון", "תוכון", "עקרב", "עכביש", "ג'וק"]
        let getAnimal = arrey[Math.floor(Math.random() * arrey.length)]

        switch (getAnimal) {
            case "חתלתול":
                resolve(getAnimal);
                break;
            case "כלבלב":
                resolve(getAnimal);
                break;
            case "ארנבון":
                resolve(getAnimal);
                break;
            case "תוכון":
                resolve(getAnimal);
                break;
            case "עקרב":
                reject(getAnimal);
                break;
            case "עכביש":
                reject(getAnimal);
                break;
            case "ג'וק":
                reject(getAnimal);
                break;
        }

    })
    return myPromise
}

//ex4

const run4 = () => {
    getDays()
        .then((data) => {
            document.body.style.background = "green"
            console.log(data)
        })
        .catch((arr) => {
            document.body.style.background = "red"
            console.log(arr)
        })
}

const getDays = () => {
    const myPromise = new Promise((resolve, reject) => {
        let arrey = ["sunday",
            "monday",
            "thuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday"]
        let getRandomDays = arrey[Math.floor(Math.random() * arrey.length)]

        switch (getRandomDays) {
            case "monday":
                resolve(getRandomDays);
                break;
            case "sunday":
                resolve(getRandomDays);
                break;
            case "thuesday":
                resolve(getRandomDays);
                break;
            case "wednesday":
                resolve(getRandomDays);
                break
            case "thursday":
                resolve(getRandomDays);
                break
            case "friday":
                reject(getRandomDays);
                break;
            case "saturday":
                reject(getRandomDays);
                break;
        }

    })
    return myPromise
}

//ex6

const run6 = async () => {
    console.log("start")
    await getPizza()
    .then((pizza) => {
        document.body.style.background = "green"
        console.log(pizza)
    })
    .catch((arr) => {
        document.body.style.background = "red"
        console.log(arr)
    })
    console.log("end")
}

const random = () => {
    return  Math.floor(Math.random() * 1000)
    
}

const getPizza = () => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * 80)
            if(randomNum % 2 === 0){
                let randomSize = random(1,30)
                let randomPrice = random(20,80)
                let randomTopping = random(1,4)
                let pizza = {
                    size: randomSize,
                    price: randomPrice,
                    topping: randomTopping
                }
                resolve(pizza)
            }else{
                reject(randomNum)
            }
        }, 1000);
    })
    return myPromise
}

//ex 7

