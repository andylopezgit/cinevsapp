function selectorRange () {
    const movies = document.getElementById('options').value
    return console.log(movies)
};

let numebersApp = []
function selectorApps () {
    const apps = document.getElementById('appSelector').value
    numebersApp.push(apps)
    return console.log(numebersApp)
};

let price = 0

let rangeMovieValue = document.getElementById('movieButton').addEventListener('click', selectorRange )

let apps = document.getElementById('addAppsButton').addEventListener('click',  selectorApps)

function addTotal () {
        const tot = document.querySelector('span')
        tot.innerText = price
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











