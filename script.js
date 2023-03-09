var btntodos = document.getElementById('eixoTodos');
var btngdp = document.getElementById('eixoGDP');
var btnci = document.getElementById('eixoCI');
var btnaf = document.getElementById('eixoAF');
var btnds = document.getElementById('eixoDS');
var btnmo = document.getElementById('eixoMO');
var btnp = document.getElementById('eixoP');
var btnpof = document.getElementById('eixoPOF');
var btntic = document.getElementById('eixoTIC');

var arrGdp = [document.querySelectorAll('.gdp')]
var arrCi = [document.querySelectorAll('.ci')]
var arrAf = [document.querySelectorAll('.af')]
var arrDs = [document.querySelectorAll('.ds')]
var arrMo = [document.querySelectorAll('.mo')]
var arrP = [document.querySelectorAll('.p')]
var arrPof = [document.querySelectorAll('.pof')]
var arrTic = [document.querySelectorAll('.tic')]

$('.btn-filter').on('click', function() {   
    let type = $(this).attr('id');
    let boxes = $('.box-card');

    $('.btn-filter').removeClass('ativo');
    $(this).addClass('ativo');

    if(type == 'eixoGDP') {
        eachBoxes('gdp', boxes);
    } else if(type == 'eixoCI') {
        eachBoxes('ci', boxes);
    } else if(type == 'eixoAF') {
        eachBoxes('af', boxes);
    } else if(type == 'eixoDS') {
        eachBoxes('ds', boxes);
    } else if(type == 'eixoMO') {
        eachBoxes('mo', boxes);
    } else if(type == 'eixoP') {
        eachBoxes('p', boxes);
    } else if(type == 'eixoPOF') {
        eachBoxes('pof', boxes);
    } else if(type == 'eixoTIC') {
        eachBoxes('tic', boxes);
    } else {
        eachBoxes('eixoTodos', boxes);
    }
});

function eachBoxes(type, boxes) {
    if(type == 'eixoTodos'){
        $(boxes).show();
    } else {
        $(boxes).each(function() {
            if(!$(this).hasClass(type)){
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    }
}

// -----------------------------------------

var btnObjetivo = document.querySelectorAll('.btn_objetivo');
var objetivo = document.querySelectorAll('.objetivo');

for (let y = 0; y < btnObjetivo.length; y++) {
    btnObjetivo[y].addEventListener('click', function(){

        if (objetivo[y].style.display == '') {
            objetivo[y].style.display = 'block';
        } else {
            objetivo[y].style.display = '';       
        }

    });
}

// -----------------------------------------

// document.querySelectorAll("button").forEach( function(button) {    
//     button.addEventListener("click", function(event) {
//     const el = event.target || event.srcElement;
//     const id = el.id;
//     console.log(id);
//   });  
// });

// var btnTestes = document.querySelectorAll("button");
// btnTestes.forEach( function(button) {    
//     button.addEventListener("click", function(event) {
//         const el = event.target || event.srcElement;
//         const id = el.id;
//         console.log(id);
//     });
// });
