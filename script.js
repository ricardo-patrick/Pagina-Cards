// filtros ------------------------------------

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

// objetivo -----------------------------------------

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

// desativado ---------------------------------------

var cardConteudo = document.querySelectorAll('.card_conteudo');
var btnInscrevase = document.querySelectorAll('.btn_inscrevase'); 
var cardCapa = document.querySelectorAll('.card_capa'); 
var avisoTurma = document.querySelectorAll('.sem_turma'); 

for (let k = 0; k < cardConteudo.length; k++) {
    if (cardConteudo[k].classList.contains('desat')){        
        btnInscrevase[k].style.display = 'none';
        avisoTurma[k].style.display = 'block';
        cardCapa[k].classList.add('desat');
    }
}

var cardConteudo2 = document.querySelectorAll('.card_conteudo2');
var btnInscrevase2 = document.querySelectorAll('.btn_inscrevase2'); 
var cardCapa2 = document.querySelectorAll('.card_capa2'); 
var avisoTurma2 = document.querySelectorAll('.sem_turma2'); 

for (let v = 0; v < cardConteudo2.length; v++) {
    if (cardConteudo2[v].classList.contains('desat')) {
        btnInscrevase2[v].style.display = 'none';
        avisoTurma2[v].style.display = 'block';
        cardCapa2[v].classList.add('desat');
    }
}


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
                
                // -----------------------------------------
                