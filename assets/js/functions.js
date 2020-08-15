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
        let words = saying.split(' ');
        console.log(words);
        let line;
        for (let i = 0; i > words.length; i++) {
            // if ( i && (i % 3 === 0)) {
            //     line = words[i] + words[i+2] + words[i+3];
            //     console.log(line);
            // }
        }


        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var img = document.getElementById("img");
        ctx.drawImage(img, 0, 0);
        ctx.font = "3rem Kalam";
        ctx.fillStyle = 'white';
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowColor = "rgba(0,0,0,0.3)";
        ctx.shadowBlur = 4;
        ctx.fillText(saying, 10, 780);

        $('button').on('click', function () {
            Canvas2Image.saveAsImage(c, 800, 800, 'png');
        });
    })
}