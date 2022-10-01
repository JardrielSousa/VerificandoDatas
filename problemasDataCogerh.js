function imprimir(){

    var nomeDeTodosMesesArray = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    var mesesDoFiltro  = ["2022-01-01","2022-02-01","2022-03-01","2022-04-01",
    "2022-05-01","2022-06-01","2022-07-01","2022-08-01",
    "2022-09-01","2022-10-01","2022-11-01","2022-12-01"];
    var mesesDoBanco = ["2022-10-21","2022-03-27","2022-05-08"];
    var listaDeControle = [];
    var listaOrdenadaPorData ;
    let listaSemMesesDuplicados ;
    
    for (var i = 0; i < mesesDoFiltro.length ; i++) {
        listaDeControle.push(mesesDoFiltro[i]);
        for (let j = 0; j < mesesDoBanco.length; j++) {
            if(!mesesDoFiltro.includes(mesesDoBanco[j]) && !listaDeControle.includes(mesesDoBanco[j])){
                listaDeControle.push(mesesDoBanco[j]);
            }
        }
     }

    listaOrdenadaPorData = listaDeControle.sort();

    listaSemMesesDuplicados = new Set(listaOrdenadaPorData.map(data => formataDataParaMesAno(data,nomeDeTodosMesesArray)));

    console.log(listaSemMesesDuplicados);
}

imprimir();

function formataDataParaMesAno(data,nomeMeses){
    var dateObj = new Date(data);
    var mes = dateObj.getUTCMonth(); 
    var ano = dateObj.getUTCFullYear();
    return nomeMeses[mes] + " " + ano;
}