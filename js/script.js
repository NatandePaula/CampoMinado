

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

function localBombas(matriz,quantBombasRedor, contSemAbrir){
    console.log('teste local bombas');
    for (i=0;i<9;i++){
        for(j=0;j<9;i++){
        if(quantBombasRedor == matriz[i][j]){
            if(i !=0 ){
                if(matriz[i-1][j] == "-"){
                    for(k=0;k<9;k++){
                        vetAux[k]=matriz[i-1][k];
                    }
                    vetAux[j]="B";
                    matriz[i-1]=  vetAux;
                    quantBombasRedor++;

                }
            }
            if(i !=0 && j!=0){
                if(matriz[i-1][j-1] == "-"){
                    for(k=0;k<9;k++){
                        vetAux[k]=matriz[i-1][k];
                    }
                    vetAux[j-1]="B";
                    matriz[i-1]=  vetAux;
                    quantBombasRedor++;
                }
            }
            if(i !=0 && j !=8){
                if(matriz[i-1][j+1] == "-"){
                    for(k=0;k<9;k++){
                        vetAux[k]=matriz[i-1][k];
                    }
                    vetAux[j+1]="B";
                    matriz[i-1]=  vetAux;
                    quantBombasRedor++;
                }
                
            }
            if(j !=8 ){
                if(matriz[i][j+1] == "-"){
                    for(k=0;k<9;k++){
                        vetAux[k]=matriz[i][k];
                    }
                    vetAux[j+1]="B";
                    matriz[i]=  vetAux;
                    quantBombasRedor++;
                }
                
            }
            if(j !=0){
                if(matriz[i][j-1] == "-"){
                    for(k=0;k<9;k++){
                        vetAux[k]=matriz[i][k];
                    }
                    vetAux[j-1]="B";
                    matriz[i]=  vetAux;
                    quantBombasRedor++;
                }
                
            }
            if(i !=8){
                if(matriz[i+1][j] == "-"){
                    for(k=0;k<9;k++){
                        vetAux[k]=matriz[i+i][k];
                    }
                    vetAux[j]="B";
                    matriz[i+1]=  vetAux;
                    quantBombasRedor++;
                }
                
            }
            if(i !=8 && j !=0 ){
                if(matriz[i+1][j-1] == "-"){
                    for(k=0;k<9;k++){
                        vetAux[k]=matriz[i+1][k];
                    }
                    vetAux[j-1]="B";
                    matriz[i+1]=  vetAux;
                    quantBombasRedor++;
                }
                
            }
            if(i !=8 && j !=8 ){
                if(matriz[i+1][j+1] == "-"){
                    for(k=0;k<9;k++){
                        vetAux[k]=matriz[i+1][k];
                    }
                    vetAux[j+1]="B";
                    matriz[i+1]=  vetAux;
                    quantBombasRedor++;
                }
                
            }
        }
        }
    }
}

function localSeguroAbrir(matriz,quantBombasRedor, contSemAbrir){
    for(i=0;i<9;i++){    
        for(j=0;j<9;j++){
            if(quantBombasRedor == matriz[i][j]){
                if(i !=0 ){
                    if(matriz[i-1][j] == "-"){
                        for(k=0;k<9;k++){
                            vetAux[k]=matriz[i-1][k];
                        }
                        vetAux[j]="A";
                        matriz[i-1]=  vetAux;
                        

                    }
                }
                if(i !=0 && j!=0){
                    if(matriz[i-1][j-1] == "-"){
                        for(k=0;k<9;k++){
                            vetAux[k]=matriz[i-1][k];
                        }
                        vetAux[j-1]="A";
                        matriz[i-1]=  vetAux;
                        
                    }
                }
                if(i !=0 && j !=8){
                    if(matriz[i-1][j+1] == "-"){
                        for(k=0;k<9;k++){
                            vetAux[k]=matriz[i-1][k];
                        }
                        vetAux[j+1]="A";
                        matriz[i-1]=  vetAux;
                        
                    }
                    
                }
                if(j !=8 ){
                    if(matriz[i][j+1] == "-"){
                        for(k=0;k<9;k++){
                            vetAux[k]=matriz[i][k];
                        }
                        vetAux[j+1]="A";
                        matriz[i]=  vetAux;
                        
                    }
                    
                }
                if(j !=0){
                    if(matriz[i][j-1] == "-"){
                        for(k=0;k<9;k++){
                            vetAux[k]=matriz[i][k];
                        }
                        vetAux[j-1]="A";
                        matriz[i]=  vetAux;
                        
                    }
                    
                }
                if(i !=8){
                    if(matriz[i+1][j] == "-"){
                        for(k=0;k<9;k++){
                            vetAux[k]=matriz[i+i][k];
                        }
                        vetAux[j]="A";
                        matriz[i+1]=  vetAux;
                        
                    }
                    
                }
                if(i !=8 && j !=0 ){
                    if(matriz[i+1][j-1] == "-"){
                        for(k=0;k<9;k++){
                            vetAux[k]=matriz[i+1][k];
                        }
                        vetAux[j-1]="A";
                        matriz[i+1]=  vetAux;
                        
                    }
                    
                }
                if(i !=8 && j !=8 ){
                    if(matriz[i+1][j+1] == "-"){
                        for(k=0;k<9;k++){
                            vetAux[k]=matriz[i+1][k];
                        }
                        vetAux[j+1]="A";
                        matriz[i+1]=  vetAux;
                    
                    }
                    
                }
            }
        }
    }
}

function procuraBombas(matriz,linha,coluna){
   // var cont =0 ;
    /*
    for(i=0;i<9;i++){
        
        for (j=0;j<9;j++){
            if(matriz[i][j] != "-"){
                if(j<8){
                    if(matriz[i][j] ==1  && matriz[i+1][j] == 1){
                        if(matriz[i+2][j] == 1 || matriz[i+2][j] ==  0){
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

       // var contBombas=0;
        //while(contBombas<10){
            for(i=0;i<9;i++){
                var contSemAbrir=0;
                var quantBombasRedor = 0;
               // var vetAux=["B"];
        
                for (j=0;j<9;j++){
                    
                    // Esse if e responsalvel por tratar quando os elementos não são numeros
                    if(matriz[i][j]!=0 && matriz[i][j] != "-" && matriz[i][j] != "B"){
                        contSemAbrir=0;
                        quantBombasRedor=0;
                        if(i !=0 ){
                            if(matriz[i-1][j] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i-1][j] == "B"){
                                quantBombasRedor++;
                            }
                        }
                        if(i !=0 && j!=0){
                            if(matriz[i-1][j-1] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i-1][j-1] == "B"){
                                quantBombasRedor++;
                            }
                        }
                        if(i !=0 && j !=8){
                            if(matriz[i-1][j+1] == "-"){
                                contSemAbrir++;
                            } else if(matriz[i-1][j+1] == "B"){
                                quantBombasRedor++;
                            }
                            
                        }
                        if(j !=8 ){
                            if(matriz[i][j+1] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i][j+1] == "B"){
                                quantBombasRedor++;
                            }
                            
                        }
                        if(j !=0){
                            if(matriz[i][j-1] == "-"){
                                contSemAbrir++;
                            }else  if(matriz[i][j-1] == "B"){
                                quantBombasRedor++;
                            }
                            
                        }
                        if(i !=8){
                            if(matriz[i+1][j] == "-"){
                                contSemAbrir++;
                            } else  if(matriz[i+1][j] == "B"){
                                quantBombasRedor++;
                            }
                            
                        }
                        if(i !=8 && j !=0 ){
                            if(matriz[i+1][j-1] == "-"){
                                contSemAbrir++;
                            } else if(matriz[i+1][j-1] == "B"){
                                quantBombasRedor++;
                            }
                            
                        }
                        if(i !=8 && j !=8 ){
                            if(matriz[i+1][j+1] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i+1][j+1] == "B"){
                                quantBombasRedor++;
                            }
                            
                        }
                        
                        // CALCULO PARA TENTAR ENCONTRA A BOMBA
                        var vetAux=["B","B","B","B","B","B","B","B","B","B"];
                       // matriz[0]=  vetAux;

                        if( quantBombasRedor == matriz[i][j] || contSemAbrir == matriz[i][j]){
                            if(i !=0 ){
                                if(matriz[i-1][j] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i-1][k];
                                        
                                    }
                                    vetAux[j]="B";
                                    matriz[i-1]=  vetAux;
                                    quantBombasRedor++;
                                    console.log(vetAux);

                                }
                                
                            }
                            if(i !=0 && j!=0){
                                if(matriz[i-1][j-1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i-1][k];
                                    }
                                    vetAux[j-1]="B";
                                    matriz[i-1]=  vetAux;
                                    quantBombasRedor++;
                                    console.log(vetAux);
                                }
                            }
                            if(i !=0 && j !=8){
                                if(matriz[i-1][j+1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i-1][k];
                                    }
                                    vetAux[j+1]="B";
                                    matriz[i-1]=  vetAux;
                                    quantBombasRedor++;
                                    console.log(vetAux);
                                }
                                
                            }
                            if(j !=8 ){
                                if(matriz[i][j+1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i][k];
                                    }
                                    vetAux[j+1]="B";
                                    matriz[i]=  vetAux;
                                    quantBombasRedor++;
                                    console.log(vetAux);
                                }
                                
                            }
                            if(j !=0){
                                if(matriz[i][j-1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i][k];
                                    }
                                    vetAux[j-1]="B";
                                    matriz[i]=  vetAux;
                                    quantBombasRedor++;
                                    console.log(vetAux);
                                }
                                
                            }
                            if(i !=8){
                                if(matriz[i+1][j] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i+1][k];
                                    }
                                    vetAux[j]="B";
                                    matriz[i+1]=  vetAux;
                                    quantBombasRedor++;
                                    console.log(vetAux);
                                }
                                
                            }
                            if(i !=8 && j !=0 ){
                                if(matriz[i+1][j-1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i+1][k];
                                    }
                                    vetAux[j-1]="B";
                                    matriz[i+1]=  vetAux;
                                    quantBombasRedor++;
                                    console.log(vetAux);
                                }
                                
                            }
                            if(i !=8 && j !=8 ){
                                if(matriz[i+1][j+1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i+1][k];
                                    }
                                    vetAux[j+1]="B";
                                    matriz[i+1]=  vetAux;
                                    quantBombasRedor++;
                                    console.log(vetAux);
                                }
                                
                            }
                        }
                    /*
                    else{ // aqui os elementos que são numeros serao tratados 
                        contSemAbrir=0;
                        quantBombasRedor=0;
                        if(i !=0 ){
                            if(matriz[i-1][j] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i-1][j] == "B"){
                                quantBombasRedor++;
                            }
                        }
                        if(i !=0 && j!=0){
                            if(matriz[i-1][j-1] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i-1][j-1] == "B"){
                                quantBombasRedor++;
                            }
                        }
                        if(i !=0 && j !=8){
                            if(matriz[i-1][j+1] == "-"){
                                contSemAbrir++;
                            } else if(matriz[i-1][j+1] == "B"){
                                quantBombasRedor++;
                            }
                            
                        }
                        if(j !=8 ){
                            if(matriz[i][j+1] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i][j+1] == "B"){
                                quantBombasRedor++;
                            }
                            
                        }
                        if(j !=0){
                            if(matriz[i][j-1] == "-"){
                                contSemAbrir++;
                            }else  if(matriz[i][j-1] == "B"){
                                quantBombasRedor++;
                            }
                            
                        }
                        if(i !=8){
                            if(matriz[i+1][j] == "-"){
                                contSemAbrir++;
                            } else  if(matriz[i+1][j] == "B"){
                                quantBombasRedor++;
                            }
                            
                        }
                        if(i !=8 && j !=0 ){
                            if(matriz[i+1][j-1] == "-"){
                                contSemAbrir++;
                            } else if(matriz[i+1][j-1] == "B"){
                                quantBombasRedor++;
                            }
                            
                        }
                        if(i !=8 && j !=8 ){
                            if(matriz[i+1][j+1] == "-"){
                                contSemAbrir++;
                            }else if(matriz[i+1][j+1] == "B"){
                                quantBombasRedor++;
                            }
                            
                        } 
                     */   
                        // compara e preenche o local que tem as bombas 
                         localBombas(matriz,quantBombasRedor,contSemAbrir);

                        // Compara e preenche os locais que ja são seguros para serem abertos
                        localSeguroAbrir(matriz,quantBombasRedor,contSemAbrir);

                         /*
                            // MARCA OS CAMPOS QUE PODEM SER ABERTOS
                         if(contBombasAtual == matriz[i][j]){
                            if(i !=0 ){
                                if(matriz[i-1][j] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i][j];
                                    }
                                    vetAux[j]="B";
                                    matriz[i-1]=  vetAux;
                                    contBombas++;

                                }
                            }
                            if(i !=0 && j!=0){
                                if(matriz[i-1][j-1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i][j];
                                    }
                                    vetAux[j-1]="B";
                                    matriz[i-1]=  vetAux;
                                    contBombas++;
                                }
                            }
                            if(i !=0 && j !=8){
                                if(matriz[i-1][j+1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i][j];
                                    }
                                    vetAux[j+1]="B";
                                    matriz[i-1]=  vetAux;
                                    contBombas++;
                                }
                                
                            }
                            if(j !=8 ){
                                if(matriz[i][j+1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i][j];
                                    }
                                    vetAux[j+1]="B";
                                    matriz[i]=  vetAux;
                                    contBombas++;
                                }
                                
                            }
                            if(j !=0){
                                if(matriz[i][j-1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i][j];
                                    }
                                    vetAux[j-1]="B";
                                    matriz[i]=  vetAux;
                                    contBombas++;
                                }
                                
                            }
                            if(i !=8){
                                if(matriz[i+1][j] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i][j];
                                    }
                                    vetAux[j]="B";
                                    matriz[i+1]=  vetAux;
                                    contBombas++;
                                }
                                
                            }
                            if(i !=8 && j !=0 ){
                                if(matriz[i+1][j-1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i][j];
                                    }
                                    vetAux[j-1]="B";
                                    matriz[i+1]=  vetAux;
                                    contBombas++;
                                }
                                
                            }
                            if(i !=8 && j !=8 ){
                                if(matriz[i+1][j+1] == "-"){
                                    for(k=0;k<9;k++){
                                        vetAux[k]=matriz[i][j];
                                    }
                                    vetAux[j+1]="B";
                                    matriz[i+1]=  vetAux;
                                    contBombas++;
                                }
                                
                            }
                            
                        }
                        */
                    }
                }
                
                }
          //  } 
            console.log(quantBombasRedor);
            
            document.getElementById('exibir-execucao').innerHTML += 'Teste da troca do elemento <br>';
            
         
          for(i=0;i<9;i++){
            j=0
            for (j=0;j<9;j++){
                document.getElementById('exibir-execucao').innerHTML += matriz[i][j];
            }
        
                document.getElementById('exibir-execucao').innerHTML += '<br>';
        }

        document.getElementById('exibir-execucao').innerHTML += ' fINAL';
    
        
        }    

    