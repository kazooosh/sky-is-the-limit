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
// }
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function jQ() {
    $.getJSON('assets/js/json/sky-limit.json', function(data) {
        let x =getRandomInt(data["sayings"].length);
        let saying = data["sayings"][x]["skylimit"];
        $('body').append('<h1>' + saying + '</h1>');

        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        ctx.fillText(saying,10,50);

        $('button').on('click', function() {
            Canvas2Image.saveAsImage(c, 200, 200, 'png');
        });
    });


}