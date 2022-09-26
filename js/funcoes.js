//var imported = document.createElement('script');
//imported.src = 'campo-minado.js';
//document.head.appendChild(imported); 
src = "campo-minado.js"

class AuxiliarContador {
    quantBombasRedor = 0;
    contSemAbrir = 0;
    contSeguroAbrir = 0;
    linha = 0;
    coluna = 0;

    setQuantBombasRedor(n) {
        this.quantBombasRedor = n;
    }

    setContSemAbrir(n) {
        this.contSemAbrir = n;
    }
    setSeguroAbrir(n) {
        this.contSeguroAbrir = n;
    }

    setLinha(n) {
        this.linha = n;
    }

    setColuna(n) {
        this.coluna = n;
    }

    getQuantBombasRedor() {
        return this.quantBombasRedor;
    }

    getContSemAbrir() {
        return this.contSemAbrir;
    }
    getSeguroAbrir() {
        return this.contSeguroAbrir;
    }

    getLinha() {
        return this.linha;
    }

    getColuna() {
        return this.coluna;
    }
}


//função responsavel por efetuar a busca e contabilizar o numero de bombas e o numero de campos que ainda não foram abertos em uma determinada posição
function busca(matriz, contador) {

    var i = contador.getLinha();
    var j = contador.getColuna();
    var contSemAbrir = 0;
    var quantBombasRedor = 0;
    var contSeguroAbrir = 0;



    //console.log("busca i: "+ i+" j: "+j);
    if (matriz[i][j] != 0 && matriz[i][j] != "-" && matriz[i][j] != "B" && matriz[i][j] != "A") {
        if (i != 0) {

            if (matriz[i - 1][j] == "-") {
                contSemAbrir++;

            } else if (matriz[i - 1][j] == "B") {
                quantBombasRedor++;
            } else if (matriz[i - 1][j] == "A") {
                contSeguroAbrir++;
            }
        }
        if (i != 0 && j != 0) {
            //console.log("entrou busca i : "+i+" j: "+j+" sem abrir: "+contSemAbrir+"<br> "  );
            if (matriz[i - 1][j - 1] == "-") {
                contSemAbrir++;

            } else if (matriz[i - 1][j - 1] == "B") {
                quantBombasRedor++;
            } else if (matriz[i - 1][j - 1] == "A") {
                contSeguroAbrir++;
            }

            //console.log("entrou busca i : "+i+" j: "+j+" sem abrir: "+contSemAbrir+"<br> "  );
        }
        if (i != 0 && j != 8) {
            if (matriz[i - 1][j + 1] == "-") {
                contSemAbrir++;
            } else if (matriz[i - 1][j + 1] == "B") {
                quantBombasRedor++;
            } else if (matriz[i - 1][j + 1] == "A") {
                contSeguroAbrir++;
            }

        }
        //console.log(contSemAbrir, j);
        if (j != 8) {
            if (matriz[i][j + 1] == "-") {
                contSemAbrir++;
                // console.log(contSemAbrir);

            } else if (matriz[i][j + 1] == "B") {
                quantBombasRedor++;
            } else if (matriz[i][j + 1] == "A") {
                contSeguroAbrir++;
            }

        }
        if (j != 0) {
            if (matriz[i][j - 1] == "-") {
                contSemAbrir++;
            } else if (matriz[i][j - 1] == "B") {
                quantBombasRedor++;
            } else if (matriz[i][j - 1] == "A") {
                contSeguroAbrir++;
            }

        }
        if (i != 8) {
            if (matriz[i + 1][j] == "-") {

                contSemAbrir++;
            } else if (matriz[i + 1][j] == "B") {
                quantBombasRedor++;
            } else if (matriz[i + 1][j] == "A") {
                contSeguroAbrir++;
            }

        }

        //console.log(contSemAbrir);
        if (i != 8 && j != 0) {
            if (matriz[i + 1][j - 1] == "-") {
                contSemAbrir++;
            } else if (matriz[i + 1][j - 1] == "B") {
                quantBombasRedor++;
            } else if (matriz[i + 1][j - 1] == "A") {
                contSeguroAbrir++;
            }

        }
        if (i != 8 && j != 8) {
            if (matriz[i + 1][j + 1] == "-") {
                contSemAbrir++;
            }else if (matriz[i + 1][j + 1] == "B") {
                quantBombasRedor =quantBombasRedor+1;
            }else if (matriz[i + 1][j + 1] == "A") {
                contSeguroAbrir++;
            }
        }
    }
    contador.setLinha(i);
    contador.setColuna(j);
    contador.setContSemAbrir(contSemAbrir);
    contador.setQuantBombasRedor(quantBombasRedor);
    contador.setSeguroAbrir(contSeguroAbrir);
}
function stringParaMatriz(campoMinado) {
    var matriz = new Array(9);
    var meuJogo = campoMinado;
    var vet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //var vet = meuJogo.split('\n');
    //var vet = meuJogo.split(',',9);
    var vetAuxiliar = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var vetAuxiliar2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var contij;
    cont = 0;
    vetAuxiliar = meuJogo.split('\r\n', 9);
    for (i = 0; i < 9; i++) {


        matriz[i] = vetAuxiliar[i];
        //for(j=0;j<9;j++){
        vetAuxiliar2 = matriz[i].split('', 9);
        //}
        matriz[i] = vetAuxiliar2;

        // matriz[i] =vetAuxiliar[i];  
    }

    return matriz;

}


function localSeguroAbrir(matriz, contador) {// i = linha j= coluna
    var i = contador.getLinha();
    var j = contador.getColuna();
    var contSemAbrir = contador.getContSemAbrir();
    var quantBombasRedor = contador.getQuantBombasRedor();
    var contSeguroAbrir = contador.getSeguroAbrir();

    quantBombasRedor =0;
    
        if (i != 0) {
            if (matriz[i - 1][j] == "B") {
                quantBombasRedor++;
                console.log('1');
            }
        }
        if (i != 0 && j != 0) {
            if (matriz[i - 1][j - 1] == "B") {
                quantBombasRedor++;
                console.log('2');
            }
        }
        if (i != 0 && j != 8) {
            if (matriz[i - 1][j + 1] == "B") {
                quantBombasRedor++;
                console.log('3');
            }
        }
        if (j != 8) {
            if (matriz[i][j + 1] == "B") {
                quantBombasRedor++;
                console.log('4');
            }
        }
        if (j != 0) {
            if (matriz[i][j - 1] == "B") {
                quantBombasRedor++;
                console.log('5');
            }
        }
        if (i != 8) {
            if (matriz[i + 1][j] == "B") {
                quantBombasRedor++;
                console.log('6');
            }
        }
        if (i != 8 && j != 0) {
            if (matriz[i + 1][j - 1] == "B") {
                quantBombasRedor++;
                console.log('7');
            }
        }
        if (i != 8 && j != 8) {
            if (matriz[i + 1][j + 1] == "B") {
                quantBombasRedor++;
                console.log('8');
 
            }
           
        }
    console.log(i,j , quantBombasRedor);
    var vetAux = ["A", "A", "A", "A", "A", "A", "A", "A", "A"];
    if (((quantBombasRedor == matriz[i][j])  )) {
        
        if (i != 0) {
           // console.log(i,j , quantBombasRedor);
            if (matriz[i - 1][j] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i - 1][k];
                }
                vetAux[j] = "A";
                matriz[i - 1] = vetAux;
                contSeguroAbrir++;
                contSemAbrir--;

            }
        }
        if (i != 0 && j != 0) {
            if (matriz[i - 1][j - 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i - 1][k];
                }
                vetAux[j - 1] = "A";
                matriz[i - 1] = vetAux;
                quantBombasRedor++;
                contSeguroAbrir--;
                console.log("entrou");
            }
        }
        if (i != 0 && j != 8) {
            if (matriz[i - 1][j + 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i - 1][k];
                }
                vetAux[j + 1] = "A";
                matriz[i - 1] = vetAux;
                quantBombasRedor++;
                contSeguroAbrir--;
            }

        }
        if (j != 8) {
            if (matriz[i][j + 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i][k];
                }
                vetAux[j + 1] = "A";
                matriz[i] = vetAux;
                quantBombasRedor++;
                contSeguroAbrir--;
                //console.log("teste ");
            }

        }
        if (j != 0) {
            if (matriz[i][j - 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i][k];
                }
                vetAux[j - 1] = "A";
                matriz[i] = vetAux;
                quantBombasRedor++;
                contSeguroAbrir--;
            }

        }
        if (i != 8) {
            if (matriz[i + 1][j] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i + 1][k];
                }
                vetAux[j] = "A";
                matriz[i + 1] = vetAux;
                quantBombasRedor++;
                contSeguroAbrir--;
            }

        }
        if (i != 8 && j != 0) {
            if (matriz[i + 1][j - 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i + 1][k];
                }
                vetAux[j - 1] = "A";
                matriz[i + 1] = vetAux;
                quantBombasRedor++;
                contSeguroAbrir--;
            }

        }
        if (i != 8 && j != 8) {
            if (matriz[i + 1][j + 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i + 1][k];
                }
                vetAux[j + 1] = "A";
                matriz[i + 1] = vetAux;
                quantBombasRedor++;
                contSeguroAbrir--;
            }

        }
    } else { // aqui os elementos que não são numeros serao tratados 
        // contSemAbrir=0;
        //quantBombasRedor=0;
        if (matriz[i][j] != 0) {
            if (i != 0) {
                if (matriz[i - 1][j] == "-") {
                    contSemAbrir++;
                } else if (matriz[i - 1][j] == "B") {
                    quantBombasRedor++;
                }
            }
            if (i != 0 && j != 0) {
                if (matriz[i - 1][j - 1] == "-") {
                    contSemAbrir++;
                } else if (matriz[i - 1][j - 1] == "B") {
                    quantBombasRedor++;
                }
            }
            if (i != 0 && j != 8) {
                if (matriz[i - 1][j + 1] == "-") {
                    contSemAbrir++;
                } else if (matriz[i - 1][j + 1] == "B") {
                    quantBombasRedor++;
                }

            }
            if (j != 8) {
                if (matriz[i][j + 1] == "-") {
                    contSemAbrir++;

                } else if (matriz[i][j + 1] == "B") {
                    quantBombasRedor++;
                }

            }
            if (j != 0) {
                if (matriz[i][j - 1] == "-") {
                    contSemAbrir++;
                } else if (matriz[i][j - 1] == "B") {
                    quantBombasRedor++;
                }

            }
            if (i != 8) {
                if (matriz[i + 1][j] == "-") {
                    contSemAbrir++;
                } else if (matriz[i + 1][j] == "B") {
                    quantBombasRedor++;
                }

            }
            if (i != 8 && j != 0) {
                if (matriz[i + 1][j - 1] == "-") {
                    contSemAbrir++;
                } else if (matriz[i + 1][j - 1] == "B") {
                    quantBombasRedor++;
                }

            }
            if (i != 8 && j <8) {
                if (matriz[i + 1][j + 1] == "-") {
                    contSemAbrir++;
                } else if (matriz[i + 1][j + 1] == "B") {
                    quantBombasRedor++;
                }

            }
        }
    }
    // compara e preenche o local que tem as bombas 

    // Compara e preenche os locais que ja são seguros para serem abertos
    //localSeguroAbrir(matriz,quantBombasRedor,contSemAbrir,contSeguroAbrir);
    //contador.setLinha(i);
    //contador.setColuna(j);
    contador.setContSemAbrir(contSemAbrir);
    contador.setQuantBombasRedor(quantBombasRedor);
    contador.setSeguroAbrir(contSeguroAbrir);

}

function localBombas(matriz, contador) {// i = linha j= coluna
    var i = contador.getLinha();
    var j = contador.getColuna();
    var contSemAbrir = contador.getContSemAbrir();
    var quantBombasRedor = contador.getQuantBombasRedor();
    var contSeguroAbrir = contador.getSeguroAbrir();

    var vetAux = ["B", "B", "B", "B", "B", "B", "B", "B", "B"];
    if (((contSemAbrir == matriz[i][j]) && (quantBombasRedor == 0) && matriz[i][j] != 0) || (contSemAbrir + quantBombasRedor == matriz[i][j]) && matriz[i][j] != 0) {
        //.log("teste ");
        if (i != 0) {
            if (matriz[i - 1][j] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i - 1][k];
                }
                vetAux[j] = 'B';
                matriz[i - 1] = vetAux;
                quantBombasRedor++;
                contSemAbrir--;

            }
        }
        if (i != 0 && j != 0) {
            if (matriz[i - 1][j - 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i - 1][k];
                }
                vetAux[j - 1] = 'B';
                matriz[i - 1] = vetAux;
                quantBombasRedor++;
                contSemAbrir--;
                console.log("entrou");
            }
        }
        if (i != 0 && j != 8) {
            if (matriz[i - 1][j + 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i - 1][k];
                }
                vetAux[j + 1] = 'B';
                matriz[i - 1] = vetAux;
                quantBombasRedor++;
                contSemAbrir--;
            }

        }
        if (j != 8) {
            if (matriz[i][j + 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i][k];
                }
                vetAux[j + 1] = 'B';
                matriz[i] = vetAux;
                quantBombasRedor++;
                contSemAbrir--;
                //console.log("teste ");
            }

        }
        if (j != 0) {
            if (matriz[i][j - 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i][k];
                }
                vetAux[j - 1] = 'B';
                matriz[i] = vetAux;
                quantBombasRedor++;
                contSemAbrir--;
            }

        }
        if (i != 8) {
            if (matriz[i + 1][j] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i + 1][k];
                }
                vetAux[j] = 'B';
                matriz[i + 1] = vetAux;
                quantBombasRedor++;
                contSemAbrir--;
            }

        }
        if (i != 8 && j != 0) {
            if (matriz[i + 1][j - 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i + 1][k];
                }
                vetAux[j - 1] = 'B';
                matriz[i + 1] = vetAux;
                quantBombasRedor++;
                contSemAbrir--;
            }

        }
        if (i != 8 && j != 8) {
            if (matriz[i + 1][j + 1] == "-") {
                for (k = 0; k < 9; k++) {
                    vetAux[k] = matriz[i + 1][k];
                }
                vetAux[j + 1] = 'B';
                matriz[i + 1] = vetAux;
                quantBombasRedor++;
                contSemAbrir--;
            }

        }
    } else { // aqui os elementos que não são numeros serao tratados 
        // contSemAbrir=0;
        //quantBombasRedor=0;
        if (matriz[i][j] != 0) {
            if (i != 0) {
                if (matriz[i - 1][j] == "-") {
                    contSemAbrir++;
                } else if (matriz[i - 1][j] == "B") {
                    quantBombasRedor++;
                }
            }
            if (i != 0 && j != 0) {
                if (matriz[i - 1][j - 1] == "-") {
                    contSemAbrir++;
                } else if (matriz[i - 1][j - 1] == "B") {
                    quantBombasRedor++;
                }
            }
            if (i != 0 && j != 8) {
                if (matriz[i - 1][j + 1] == "-") {
                    contSemAbrir++;
                } else if (matriz[i - 1][j + 1] == "B") {
                    quantBombasRedor++;
                }

            }
            if (j != 8) {
                if (matriz[i][j + 1] == "-") {
                    contSemAbrir++;

                } else if (matriz[i][j + 1] == "B") {
                    quantBombasRedor++;
                }

            }
            if (j != 0) {
                if (matriz[i][j - 1] == "-") {
                    contSemAbrir++;
                } else if (matriz[i][j - 1] == "B") {
                    quantBombasRedor++;
                }

            }
            if (i != 8) {
                if (matriz[i + 1][j] == "-") {
                    contSemAbrir++;
                } else if (matriz[i + 1][j] == "B") {
                    quantBombasRedor++;
                }

            }
            if (i != 8 && j != 0) {
                if (matriz[i + 1][j - 1] == "-") {
                    contSemAbrir++;
                } else if (matriz[i + 1][j - 1] == "B") {
                    quantBombasRedor++;
                }

            }
            if (i != 8 && j != 8) {
                if (matriz[i + 1][j + 1] == "-") {
                    contSemAbrir++;
                } else if (matriz[i + 1][j + 1] == "B") {
                    quantBombasRedor++;
                }

            }
        }
    }
    // compara e preenche o local que tem as bombas 

    // Compara e preenche os locais que ja são seguros para serem abertos
    //localSeguroAbrir(matriz,quantBombasRedor,contSemAbrir,contSeguroAbrir);
    contador.setLinha(i);
    contador.setColuna(j);
    contador.setContSemAbrir(contSemAbrir);
    contador.setQuantBombasRedor(quantBombasRedor);
    contador.setSeguroAbrir(contSeguroAbrir);

}



function procuraBombas(matriz) {
    var contador = new AuxiliarContador();
    var contSemAbrir = 0;
    var quantBombasRedor = 0;
    var contSeguroAbrir = 0;
    var i, j;
    for (i = 0; i < 9; i++) {

        // var vetAux=["B"];

        for (j = 0; j < 9; j++) {

            // Esse if e responsalvel por tratar quando os elementos não são numeros
            // console.log(contSemAbrir);
            contador.setColuna(j);
            contador.setLinha(i);
            contador.setContSemAbrir(0);
            contador.setQuantBombasRedor(0);
            contador.setSeguroAbrir(0);
            busca(matriz, contador);
            localBombas(matriz, contador);

            busca(matriz, contador);
            localSeguroAbrir(matriz, contador);
            //localSeguroAbrir3(matriz,contador.getQuantBombasRedor,contador.getContSemAbrir);



        }
    }

}