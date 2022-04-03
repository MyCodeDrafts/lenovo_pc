function verificar() {
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var res = document.getElementById('res')
    // if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
    //     window.alert('[ERRO] Faltam dados')
    // } else {
    //     res.innerHTML = 'Contando: '
    
        var inicio = Number(i.value)
        var fim = Number(f.value)
        var passo = Number(p.value)
        for (var c = inicio; c <= fim; c += passo){
            res.innerHTML += (c)
        }
    //}
    
}
