let exp = ''

function n0() {
    exp = exp + '0'
    document.getElementById('mostrar').innerHTML = exp
}
function n1() {
    exp = exp + '1'
    document.getElementById('mostrar').innerHTML = exp
}
function n2() {
    exp = exp + '2'
    document.getElementById('mostrar').innerHTML = exp
}
function n3() {
    exp = exp + '3'
    document.getElementById('mostrar').innerHTML = exp
}
function n4() {
    exp = exp + '4'
    document.getElementById('mostrar').innerHTML = exp
}
function n5() {
    exp = exp + '5'
    document.getElementById('mostrar').innerHTML = exp
}
function n6() {
    exp = exp + '6'
    document.getElementById('mostrar').innerHTML = exp
}
function n7() {
    exp = exp + '7'
    document.getElementById('mostrar').innerHTML = exp
}
function n8() {
    exp = exp + '8'
    document.getElementById('mostrar').innerHTML = exp
}
function n9() {
    exp = exp + '9'
    document.getElementById('mostrar').innerHTML = exp
}
function divi() {
    if ('+-*/'.includes(exp.slice(-1))) {
        exp = exp.slice(0, -2);
        document.getElementById('mostrar').innerHTML = exp
    }

    if ('+-*/'.includes(exp.slice(-1) )) {
        exp = exp.slice(0, -1);
        document.getElementById('mostrar').innerHTML = exp
    }
        exp = exp + '/'
        document.getElementById('mostrar').innerHTML = exp
   


}
function multi() {
    if ('+-*/'.includes(exp.slice(-1))) {
        exp = exp.slice(0, -2);
        document.getElementById('mostrar').innerHTML = exp
    }

    if ('+-*/'.includes(exp.slice(-1))) {
        exp = exp.slice(0, -1);
        document.getElementById('mostrar').innerHTML = exp
    }
        exp = exp + '*'
        document.getElementById('mostrar').innerHTML = exp
    
}
function mais() {
    if ('+-*/'.includes(exp.slice(-1))) {
        exp = exp.slice(0, -2);
        document.getElementById('mostrar').innerHTML = exp
    }

    if ('+-*/'.includes(exp.slice(-1))) {
        exp = exp.slice(0, -1);
        document.getElementById('mostrar').innerHTML = exp
    }
        exp = exp + '+'
        document.getElementById('mostrar').innerHTML = exp
    
}
function menos() {
    if ('+-*/'.includes(exp.slice(-1))) {
        exp = exp.slice(0, -2);
        document.getElementById('mostrar').innerHTML = exp
    }

    if ('+-*/'.includes(exp.slice(-1))) {
        exp = exp.slice(0, -1);
        document.getElementById('mostrar').innerHTML = exp
    }
        exp = exp + '-'
        document.getElementById('mostrar').innerHTML = exp
    
}
function elevado() {
    if ('+-*/'.includes(exp.slice(-1))) {
        exp = exp.slice(0, -2);
        document.getElementById('mostrar').innerHTML = exp
    }

    exp = exp + '**';
    document.getElementById('mostrar').innerHTML = exp
}
function apagar() {
    if (exp.includes(exp.slice(-2) === '**')) {
        exp = exp.slice(0, -2);
        document.getElementById('mostrar').innerHTML = exp
    }
    exp = exp.slice(0, -1);
    document.getElementById('mostrar').innerHTML = exp
}
function ce() {
exp = ''
document.getElementById('mostrar').innerHTML = 0
}
function igual() {
    try {
        exp = eval(exp)
    } catch(e) {
        console.error(e)
    }
    document.getElementById('mostrar').innerHTML = exp
    exp = String(exp);
}
function virgula() {
    if ('0123456789'.includes(exp.slice(-1))) {
        exp = exp + '.'
        document.getElementById('mostrar').innerHTML = exp
    }else {
        alert('virgula somente é aceito após um numero, nao operador aritimético')
        document.getElementById('mostrar').innerHTML = exp
    }
}