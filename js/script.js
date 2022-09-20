
//funçoes 

            
function stringParaMatriz2(){
    var  matriz = new Array(9);
    var meuJogo = campoMinado.Tabuleiro();
    var vet = meuJogo.split('');
    console.log(meuJogo);

    var cont;
    cont = 0;
    for(i=0;i<9;i++){
 //var vetAuxiliar;
        //matriz[i][j]=cont;
        for (j=0;j<9;j++){
           // matriz[i][j]=vet[cont];
            //vetAuxiliar[i]=vet[cont];
            document.getElementById('exibir-execucao').innerHTML += vet[cont];
            cont++;
        }
        //matriz[i]=vetAuxiliar;
        document.getElementById('exibir-execucao').innerHTML += '<br>';
    }
    //cont = 0;
    for(i=0;i<9;i++){
        
        
        for (j=0;j<9;j++){
       //     document.getElementById('exibir-execucao').innerHTML += matriz[i][j]+',';

        }
        document.getElementById('exibir-execucao').innerHTML += '<br>';
    }

}

function stringParaMatriz(){
    var  matriz = new Array(9);
    var meuJogo = campoMinado.Tabuleiro();
    var vet = meuJogo.split('\n');
    var vetAuxiliar=[1,2,3,4,5,6,7,8,9];
    var contij;
    cont = 0;
    for(i=0;i<9;i++){
        matriz[i] =vet[i];  
    }
    for(i=0;i<9;i++){
 
        for (j=0;j<9;j++){
            document.getElementById('exibir-execucao').innerHTML += matriz[i][j];
        }
       
        document.getElementById('exibir-execucao').innerHTML += '<br>';
    }
    return matriz;
    
}
function procuraBombas(matriz,linha,coluna){
    var cont =0 ;
    /*
    for(i=0;i<9;i++){
        
        for (j=0;j<9;j++){
            if(matriz[i][j] != "-"){
                if(j<8){
                    if(matriz[i][j] ==1  && matriz[i+1][j] == 1){
                        if(matriz[i+2][j] == 1 || matriz[i+2][j] == 0){
                            linha[cont]=i;
                            coluna[cont]=j+1;
                            cont++;
                            console.log("ACHOU "+ cont);
                        }
                    }
                    if(matriz[i][j] ==1  && matriz[i+1][j] == 2){
                }
            }else{
                document.getElementById('exibir-execucao').innerHTML += '0 ,';
            }
        }
        
        }  */

        var contBombas=0;
       // while(contBombas<10){
            for(i=0;i<9;i++){
                var contSemAbrir=0;
                var contBombasAtual = 0;
        
                for (j=0;j<9;j++){
                    
                    if(matriz[i][j]!=0 && matriz[i][j] != "-" && matriz[i][j] != "B"){
                        contSemAbrir=0;
                        contBombasAtual=0;
                        if(i !=0 ){
                            if(matriz[i-1][j] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i-1][j] == "B"){
                                contBombasAtual++;
                            }
                        }
                        if(i !=0 && j!=0){
                            if(matriz[i-1][j-1] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i-1][j-1] == "-"){
                                contBombasAtual++;
                            }
                        }
                        if(i !=0 && j !=8){
                            if(matriz[i-1][j+1] == "-"){
                                contSemAbrir++;
                            } else if(matriz[i-1][j+1] == "-"){
                                contBombasAtual++;
                            }
                            
                        }
                        if(j !=8 ){
                            if(matriz[i][j+1] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i][j+1] == "-"){
                                contBombasAtual++;
                            }
                            
                        }
                        if(j !=0){
                            if(matriz[i][j-1] == "-"){
                                contSemAbrir++;
                            }else  if(matriz[i][j-1] == "-"){
                                contBombasAtual++;
                            }
                            
                        }
                        if(i !=8){
                            if(matriz[i+1][j] == "-"){
                                contSemAbrir++;
                            } else  if(matriz[i+1][j] == "-"){
                                contBombasAtual++;
                            }
                            
                        }
                        if(i !=8 && j !=0 ){
                            if(matriz[i+1][j-1] == "-"){
                                contSemAbrir++;
                            } else if(matriz[i+1][j-1] == "-"){
                                contBombasAtual++;
                            }
                            
                        }
                        if(i !=8 && j !=8 ){
                            if(matriz[i+1][j+1] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i+1][j+1] == "-"){
                                contBombasAtual++;
                            }
                            
                        }
                        
                        // CALCULO PARA TENTAR ENCONTRA A BOMBA

                        if( contBombas == matriz[i][j] || contSemAbrir == matriz[i][j]){
                            if(i !=0 ){
                                if(matriz[i-1][j] == "-"){
                                    matriz[i-1][j]="B";
                                }
                            }
                            if(i !=0 && j!=0){
                                if(matriz[i-1][j-1] == "-"){
                                    matriz[i-1][j-1] = "B";
                                }
                            }
                            if(i !=0 && j !=8){
                                if(matriz[i-1][j+1] == "-"){
                                    matriz[i-1][j+1] = "B";
                                }
                                
                            }
                            if(j !=8 ){
                                if(matriz[i][j+1] == "-"){
                                    matriz[i][j+1]="B";
                                }
                                
                            }
                            if(j !=0){
                                if(matriz[i][j-1] == "-"){
                                    matriz[i][j-1] = "B";
                                }
                                
                            }
                            if(i !=8){
                                if(matriz[i+1][j] == "-"){
                                    matriz[i+1][j] = "B";
                                }
                                
                            }
                            if(i !=8 && j !=0 ){
                                if(matriz[i+1][j-1] == "-"){
                                    matriz[i+1][j-1]= "B";
                                }
                                
                            }
                            if(i !=8 && j !=8 ){
                                if(matriz[i+1][j+1] == "-"){
                                    matriz[i+1][j+1] = "B";
                                }
                                
                            }
                        }
                    }
                }
                
                }
            //} 
            //contBombas=10;
          //  document.getElementById('exibir-execucao').innerHTML += '0 ,';
            
        //matriz[0][0] =3;
          for(i=0;i<9;i++){
            j=0
            //for (j=0;j<9;j++){
                document.getElementById('exibir-execucao').innerHTML += matriz[i][j];
            //}
        }
            document.getElementById('exibir-execucao').innerHTML += '<br>';
    

        //document.getElementById('exibir-execucao').innerHTML += ' fINAL';
    
        
        }    

