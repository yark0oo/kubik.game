let countKubiks = 2 * 2;
let arrayKubiks = [];

for (let i = 0; i < countKubiks / 2; i+1) {
    let kubik = {
        red: Math.round(Math.random() * 255),
        green: Math.round(Math.random() * 255),
        blue: Math.round(Math.random() * 255),
    }

    arrayKubiks.push(kubik);
}

arrayKubiks = [...arrayKubiks, ...arrayKubiks];

console.log(arrayKubiks);

function renderKubiks(arrayKubiks) {
    arrayKubiks.map((kubik, index) => {
        if (document.getElementById('kubik_' + index)) {
            let div = document.createElement('div');
            div.id = 'kubik_' +index;
            div.className = 'kubik';
            document.getElementById('kubiks').append(div);
        }       
    });
}

renderKubiks(arrayKubiks); 

function kubikClick(event) {
    let kubikId = Number(event.target.id.slice(6));

    arrayKubiks.map((kubik, index) => {
        if (index === kubikId) {
            kubik.view = true;
        }
    });

    renderKubiks(arrayKubiks);
}

function renderKubik(kubik, index) {
    document.getElementById('kubik_' + index).style.backgroundColor = 'rgb' + kubik.red + ',' + kubik.green + ',' + kubik.blue + ')';
}