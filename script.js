function selectorRange () {
    const movies = document.getElementById('options').value
    return console.log(movies)
};

let numebersApp = []
let arr = []

function addSelected () {
    const val = parseInt(document.getElementById('appSelector').value)
    const sel = document.getElementById('selected')
    
    switch (val) {
        case 1:
            sel.innerText = 'Netflix'
            arr.push('Netflix')
            break;
        case 2:
            sel.innerText = 'Prime'
            arr.push('Prime')
            break;
        case 3:
            sel.innerText = 'Disney'
            arr.push('Disney')
            break;
        case 4:
            sel.innerText = 'HBO'
            arr.push('HBO')
            break;
    
        default:
            break;
    }

    return sel.innerText = arr
};


function selectorApps () {
    const apps = document.getElementById('appSelector').value
    numebersApp.push(apps)
    addSelected()
    return console.log(numebersApp)
};

let price = 0

let rangeMovieValue = document.getElementById('movieButton').addEventListener('click', selectorRange )

let apps = document.getElementById('addAppsButton').addEventListener('click',  selectorApps)

function addTotal () {
        const tot = document.querySelector('p')
        tot.innerText = price + ' Pesos'
}




function calc () {
    for (let index = 0; index < numebersApp.length; index++) {
        console.log(numebersApp[index])
        var valor = parseInt(numebersApp[index]) 

            switch (valor) {
                case 1:
                    price = price + 450
                    break;
                case 2:
                    price = price + 320
                    break;
                case 3:
                    price = price + 385
                    break;
                case 4:
                    price = price + 220
                        break;
            
                default:
                    console.log('default');
            }
            
        }
        
        return addTotal()
        
    }




document.getElementById('comparation').addEventListener('click', calc)



window.onload = function () {
    var tot = document.querySelector('span')
}











