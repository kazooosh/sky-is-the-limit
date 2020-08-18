// function getText() {
//     $('button').click(function(){
//         $.getJSON('assets/js/json/vicehai10.json', function(result){
//             $.each(result, function(i, field){
//                 $('div').append(field + " ");
//             });
//         });
//     });
//     // for (let i = 0; i < riva.test.length; i++) {
//     //     x += riva.test[i] + "<br>";
//     // }
//     // $("#fetch").click(function(event){
//     //     var random = Math.floor(Math.random());
//     //     console.log(random)
//     //     $.getJSON('assets/js/json/sky-limit.json', function(emp) {
//     //         $('#display').html('<p> Name: ' + emp.skylimit + '</p>');
//     //     });
//     // });
//
//     // let riva = {
//     //     "test":[ "Ford", "BMW", "Fiat" ]
//     // };
//(let i = 0; i < data["sayings"].length; i++) {
//     let saying = data["sayings"][i]["skylimit"];
//     // console.log(saying);
//     $('body').append('<p>' + saying + '</p>');
// }
// console.log(data["sayings"][2])
// console.log(data); //see your data ( works in Chrome / FF with firebug)
// con
// for (let i = 0; i < words.length; i++) {
//     if ( i && (i % 3 === 0)) {
//         parts = words.join(' ');
//     }

// }
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function jQ() {
    $.getJSON('assets/js/json/sky-limit.json', function (data) {
        WebFont.load({
            google: {
                families: ['Kalam', 'cursive']
            }
        });
        let x = getRandomInt(data["sayings"].length);
        let saying = data["sayings"][x]["skylimit"];
        // saying = "Eins zwei drei vier fünf sechs sieben acht neun zehn elf zwölf dreizehn";
        // console.log(saying);
        let words = saying.split(' ');
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        let img = document.getElementById("img");
        // let logo = new Image();
        ctx.drawImage(img, 0, 0);
        // logo.src = 'assets/img/logo.svg';
        // ctx.drawImage(logo, 0, 0, 100 * logo.width / logo.height, 100);
        ctx.font = "3rem Kalam";
        ctx.fillStyle = 'white';
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowColor = "rgba(0,0,0,0.3)";
        ctx.shadowBlur = 4;
        let line, lineHeight, textHeight;
        for (let i = 0; i < words.length; i++) {
            if (i && !(i % 4) || i == 0) {
                line = [words[i], words[i+1], words[i+2], words[i+3]].join(' ');
                textHeight = 800 - Math.floor((words.length-1) / 4) * 50;
                // console.log(Math.floor((words.length-1) / 4));
                lineHeight = textHeight + i * 10
                ctx.fillText(line, 10, lineHeight);
            }
        }

        $('button').on('click', function () {
            Canvas2Image.saveAsPNG(c, 800, 800, 'png');
        });
        setTimeout(logo, 250);
    })
}

function logo() {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    let logo = new Image();
    logo.src = 'assets/img/logo.svg';
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.drawImage(logo, 0, 0, 100 * logo.width / logo.height, 100);
}