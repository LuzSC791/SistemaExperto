function sumaPuntos (ram,disco,pres) {
    let puntos;
    if(ram == 16)
    {
        puntos = 1;
    } 

    if(ram == 24) 
    {
        puntos = 2;
    }
    else if(ram == 8) 
    {
        puntos = 3;
    }
    console.log("**Puntos:"+puntos);
    console.log("**Ram:"+ram);

    if(disco == "SSD")
    {
        puntos += 1;
    }

    if(disco == "HDD")
    {
        puntos += 2;
    }
    console.log("**Puntos:"+puntos);
    console.log("**Disco:"+ disco);

    if(pres == 3300)
    {
        puntos += 1;
    }

    if(pres == 4500)
    {
        puntos += 2;
    }

    if(pres == 5200)
    {
        puntos += 3;
    }
    console.log("**Puntos:"+ puntos);
    console.log("**Presupuesto:"+ pres);
    
    console.log("");
    console.log(""); 

    return puntos;
}

ramIguales12 = (ram,ram2,disco,disco2,ram3) =>
{
    let contador=0, res;
    
        if(disco == "SSD") 
        {
            contador = 1;
        }else if(disco2 == "SSD")
        {
            contador = 2;
        }

        if(contador == 1)
        {
            if(ram < ram3)
            {
                console.log(`CONVIENE \n Ram: ${ram} \n Disco ${disco} \n Gabinete de cristal`);
                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                            <br> Gabinete de cristal </b> <br> 
                            La Ram es: <b> ${ram} </b> <br> 
                            El disco: <b> ${disco} </b> <br>
                            Con un presupuesto: <b> ${pres} </b> <br>`
                document.write(res);
            }else if(ram3 < ram)
            {
                console.log(`CONVIENE \n Ram: ${ram3} \n Disco ${disco3} \n Gabinete de acrilico`);
                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b>
                            <br> Gabinete de acrilico </b> <br> 
                            La Ram es: <b> ${ram3} </b> <br> 
                            El disco: <b> ${disco3} </b> <br>
                            Con un presupuesto: <b> ${pres3} </b> <br>`
                document.write(res);
            }
        }else if(contador == 2)
        {
            if(ram2 < ram3)
            {
                console.log(`CONVIENE \n Ram: ${ram2} \n Disco ${disco2} \n Gabinete de plastico`);
                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                            <br> Gabinete de plastico </b> <br> 
                            La Ram es: <b> ${ram2} </b> <br> 
                            El disco: <b> ${disco2} </b> <br>
                            Con un presupuesto: <b> ${pres2} </b> <br>`
                document.write(res);
            }else if(ram3 < ram2)
            {
                console.log(`CONVIENE \n Ram: ${ram3} \n Disco ${disco3} \n Gabinete de acrilico`);
                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                            <br> Gabinete de acrilico </b> <br> 
                            La Ram es: <b> ${ram3} </b> <br> 
                            El disco: <b> ${disco3} </b> <br>
                            Con un presupuesto: <b> ${pres3} </b> <br>`
                document.write(res);                            
            }
        }
}

ramIguales23 = (ram,ram2,disco2,disco3,ram3) =>
{
    let contador=0, res;
    if(disco2 == "SSD") 
    {
        contador = 2;
    }else if(disco3 == "SSD")
    {
        contador = 3;
    }

    if(contador == 3)
    {
        if(ram < ram3)
        {
            console.log("Estoy entrando al contador = 3");

            console.log(`CONVIENE \n Ram: ${ram} \n Disco ${disco} \n Gabinete de cristal`);
            res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                        <br> Gabinete de cristal </b> <br> 
                        La Ram es: <b> ${ram} </b> <br> 
                        El disco: <b> ${disco} </b> <br>
                        Con un presupuesto: <b> ${pres} </b> <br>`
            document.write(res);
        }else if(ram3 < ram)
        {

            console.log(`CONVIENE \n Ram: ${ram3} \n Disco ${disco3} \n Gabinete de acrilico`);
            console.log(`Ram: ${ram3} \n Disco ${disco3} \n Gabinete de acrilico`);
            res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> <br> 
                        <br> Gabinete de acrilico </b> <br> 
                        La Ram es: <b> ${ram3} </b> <br> 
                        El disco: <b> ${disco3} </b> <br>
                        Con un presupuesto: <b> ${pres3} </b> <br>`
            document.write(res);
        }
    }else if(contador == 2)
    {
        /* console.log(`***********${contador}********`);
        console.log(`***********RAM2:${ram2}********`);
        console.log(`***********RAM:${ram}********`);*/
        if(ram < ram2)
        {

            console.log("Hola desde el bueno");
            console.log(`CONVIENE \n Ram: ${ram2} \n Disco ${disco2} \n Gabinete de cristal`);
            res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
            <br> Gabinete de cristal </b> <br> 
            La Ram es: <b> ${ram} </b> <br> 
            El disco: <b> ${disco} </b> <br>
            Con un presupuesto: <b> ${pres} </b> <br>`
            document.write(res);
        }else if(ram2 < ram)
        {
            
            console.log("ADIOS!!");
            console.log(`CONVIENE \n Ram: ${ram2} \n Disco ${disco2} \n Gabinete de plastico`);
            res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
            <br> Gabinete de plastico </b> <br> 
            La Ram es: <b> ${ram2} </b> <br> 
            El disco: <b> ${disco2} </b> <br>
            Con un presupuesto: <b> ${pres2} </b> <br>`
            document.write(res);
        }
    }
}

ramIguales31 = (ram,ram2,disco3,disco,ram3) =>
{
    let contador=0, res;
    if(disco3 == "SSD")
    {
        contador = 3;
    }else if(disco == "SSD")
    {
        contador = 1;
    }

    if(contador == 3)
    {
        if(ram2 < ram3)
        {
            console.log(`CONVIENE \n`);
            console.log(`Ram: ${ram2} \n Disco ${disco2} \n Gabinete de plastico`);
            res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                        <br> Gabinete de plastico </b> <br> 
                        La Ram es: <b> ${ram2} </b> <br> 
                        El disco: <b> ${disco2} </b> <br>
                        Con un presupuesto: <b> ${pres2} </b> <br>`
            document.write(res);
        }else if(ram3 < ram2)
        {
            console.log(`CONVIENE \n`);
            console.log(`Ram: ${ram3} \n Disco ${disco3} \n Gabinete de acrilico`);
            res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                        <br> Gabinete de acrilico </b> <br> 
                        La Ram es: <b> ${ram3} </b> <br> 
                        El disco: <b> ${disco3} </b> <br>
                        Con un presupuesto: <b> ${pres3} </b> <br>`
            document.write(res);
        }
    }else if(contador == 1) ////////////////////////////////
    {
        console.log("Estoy entrando en contador = 1");
        if(ram2 < ram)
        {
            console.log(`CONVIENE \n`);
            console.log(`Ram: ${ram2} \n Disco ${disco2} \n Gabinete de plastico`);
            res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                        <br> Gabinete de plastico </b> <br> 
                        La Ram es: <b> ${ram2} </b> <br> 
                        El disco: <b> ${disco2} </b> <br>
                        Con un presupuesto: <b> ${pres2} </b> <br>`
            document.write(res);
        }else if(ram < ram2)
        {
            console.log(`CONVIENE \n`);
            console.log(`Ram: ${ram} \n Disco ${disco}  \n Gabinete de cristal` );
            res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                        <br> Gabinete de cristal </b> <br> 
                        La Ram es: <b> ${ram} </b> <br> 
                        El disco: <b> ${disco} </b> <br>
                        Con un presupuesto: <b> ${pres} </b> <br>`
            document.write(res);
        }
    } 
}

diccionario = (duplicados2) => {
    let aux2=1,aux=0 , pal;
    const arrAux = [];
    const articulos = ["monitor","teclado","mouse","bocina","audifonos","microfono","usb","fuente de poder","tarjeta madre","procesador","chipset","rom","vga","hdmi","ethernet","cable de alimentacion","disco externo","vebtilador","mousepad","lector de disco","tarjeta grafica","tarjeta de video","joystick","pasta termica","aire comprimido","alcohol isopropilico","pulsera antiestatica","desarmador","desinmantador","contenedor"];
    console.log("Entrando al diccionario");
    console.log("duplicados2 antes: "+duplicados2);
    //console.log("articulos antes:"+articulos);
   // console.log(Math.max(1, 3, 2));
   console.log(duplicados2.length);
   aux = duplicados2/2;
   
   for( let i=0; i<duplicados2.length/2; i++){ 
        //console.log("VALOR DE AUX: "+aux2);
        if(arrAux != undefined)
        {
            arrAux[i] = duplicados2[aux2];
            console.log("arreglo ingreso +1:"+arrAux[i]);
            aux2 = aux2+2;
        }
    }
    console.log("ARREGLO AUXILIAR: "+arrAux);
    console.log("Mayor es " + Math.max(...arrAux));
    aux = Math.max(...arrAux);
    console.log("\n \n STAR SENTENCE");
    for( let i=0; i<duplicados2.length; i++){ 
        //console.log("recorrido palabra: "+duplicados2[i]);
        //console.log("aux palabra: "+ aux);
        if(duplicados2[i] === aux)
        {
            pal = duplicados2[i-1];
            console.log("PALABRA INGRESADA: "+pal);
        }
    }

    for(let i=0; i<articulos.length; i++){
        if(articulos[i] === pal)
            console.log("PALABRA ENCONTRADA EN DICCIONARIO: "+pal);
    }

    // do{
    //     for(let i=0; i<=duplicados2.length; i+2){ //3 1 2 5 1

    //         for (let j = 0; j <= duplicados2.length; j+4){
    //             if(duplicados2[i]>arrAux[j]){
    //                 console.log("valor i:" + duplicados2[i]+" valor j:" + arrAux[j]);
    //                 aux=duplicados2[i];
    //             }
    //             // else console.log("No es mayor");
    //         }
    //         if(axu2 ){

    //         }
    //     }

    // }while(aux != 1);

    // for(let i = 0; i <duplicados2.length; i++)
    // {
    //     console.log("DUPLICADOS Ya cambio:"+ duplicados2[i]);
    //     for (let j = 0; j<articulos.length; j++) {
    //         //console.log("ARTICULOS"+ articulos[j]);
    //     }
    //     i++;
    // }
    // for(let i = 0; i <articulos.length; i++) {
    //     console.log(articulos[i]);
    //     for(let j = 0; j <duplicados2.length; j++)
    //     {
    //         if(articulos[i] === duplicados2[j])
    //         {
    //             console.log("ARTICULO ENCONTRADO " + articulos[i] + " Ingresado: " + duplicados2[j]);
    //         }
    //     }
    //     i++;
    // }
}

do
{
    opc = prompt("SELECCIONA UNA OPCION"+"\n"+"1. Gabinete"+"\n"+"2. Otro"+"\n"+"3. Salir");

    if(opc==1)
    {
        let puntos,puntos2,puntos3;
        ram = prompt("¿Cuanta ram tendra nuestro CPU?"+ "\n" + "16GB"+ "\n" + "24GB"+ "\n" + "8GB");
        disco = prompt("¿Qué tipo de dico tendrá nuestro CPU?"+ "\n" + "SSD"+ "\n" + "HDD");
        pres = prompt("¿Cual es el presupuesto que tendremos para el CPU?"+ "\n" + "3300"+ "\n" + "4500"+ "\n" + "5200");
        puntos = sumaPuntos(ram,disco,pres);
        
        
        ram2 = prompt("¿Cuanta ram tendra nuestro CPU?"+ "\n" + "16GB"+ "\n" + "24GB"+ "\n" + "8GB");
        disco2 = prompt("¿Qué tipo de dico tendrá nuestro CPU?"+ "\n" + "SSD"+ "\n" + "HDD");
        pres2 = prompt("¿Cual es el presupuesto que tendremos para el CPU?"+ "\n" + "3300"+ "\n" + "4500"+ "\n" + "5200");
        puntos2 = sumaPuntos(ram2,disco2,pres2);
        
        ram3 = prompt("¿Cuanta ram tendra nuestro CPU?"+ "\n" + "16GB"+ "\n" + "24GB"+ "\n" + "8GB");
        disco3 = prompt("¿Qué tipo de dico tendrá nuestro CPU?"+ "\n" + "SSD"+ "\n" + "HDD");
        pres3 = prompt("¿Cual es el presupuesto que tendremos para el CPU?"+ "\n" + "3300"+ "\n" + "4500"+ "\n" + "5200");
        puntos3 = sumaPuntos(ram3,disco3,pres3);

        let pc = 
        {
            ram : ram,
            disco: disco,
            pres: pres,
            puntos : puntos
        };

        let pc2 =       
        {
            ram2 : ram2,
            disco2: disco2,
            pres2: pres2,
            puntos : puntos2
        }

        let pc3 =       
        {
            ram3 : ram3,
            disco3: disco3,
            pres3: pres3,
            puntos : puntos3
        }
        
        sentence = `<br><br> Gabinete de cristal --------- Gabinete de plastico  ---------  Gabinete de acrilico </b>
        <br> La Ram es de: <b> ${ram}GB ------ La Ram es de: <b> ${ram2}GB ------- La Ram es de: <b> ${ram3}GB</b> <br> 
        El disco es: <b> ${disco} ---------- El disco es: <b> ${disco2} ---------- El disco es: <b> ${disco3}</b> <br> 
        Presupuesto: <b> ${pres} ------- Presupuesto: <b> ${pres2} --------- Presupuesto: <b> ${pres3}</b> <br>
        ---PUNTOS: <b> ${puntos} ---------------- PUNTOS: <b> ${puntos2} ------------- PUNTOS: <b> ${puntos3}</b> <br>` // ${} = BACKTICKS
        document.write(sentence);

        switch (puntos)
        {
            case 0:
                console.log("");
            break;

            case 2:
                console.log("");
            break;

            case 3:
                console.log("");
            break;

            case 4:
                console.log("");
            break;

            case 5:
                console.log("");
            break;

            case 6:
                console.log("ESTOY ENTRANDO A LA OPCION 6 \n");
                
                if(puntos == puntos2 && puntos2 == puntos3) 
                {
                    if(ram == ram2) 
                    {
                        ramIguales12(ram,ram2,disco,disco2,ram3);
                        
                    }else if(ram2 == ram3) 
                    {
                        ramIguales23(ram,ram2,disco2,disco3,ram3);
                        
                    }else if(ram3 == ram) 
                    {
                        ramIguales31(ram,ram2,disco3,disco,ram3);
                    }

                    //8 12 24
                    /* if(ram > ram2 && ram1 > ram3)
                    {
                        console.log("Mayor ram1:" + ram);
                    }else if(ram2 > ram1 && ram2 > ram3)
                    {
                        console.log("Mayor ram2:" + ram2);
                    }else if(ram3 > ram && ram3 > ram2)
                    {
                        console.log("Mayor ram3:" + ram3);
                    }*/

                }
            break;
        }
        
    }else if(opc==2)
    {
        do
        {
            const ingresArt = [];
            let count = 1;
            for(let i=0; i<count; i++){
                x = prompt("Ingresa un articulo");
                ingresArt[i]=x;
                console.log(ingresArt[i]);
                opc2 = prompt("1. Ingresa otro articulo" + "\n" + "2. Finalizar ingreso"+ "\n");
                if(opc2==2)
                {
                    i+=2;
                }else count++;
            }
            //console.log(ingresArt);

            let duplicados = [];
            let duplicados2 = [];
            let contador = 0;
            const tempArray = [...ingresArt].sort(); //sort (oredena los articulos ingresados )
            console.log("TEMARRAY: "+tempArray);
            for (let i = 0; i < tempArray.length; i++) {
                
                if (tempArray[i + 1] === tempArray[i]) {
                    contador++;
                    if (tempArray[i + 1] != tempArray[i]){
                        duplicados.push(tempArray[i] + " " + contador);
                        duplicados2.push(tempArray[i]);
                        duplicados2.push(contador);
                        contador = 0;
                    }
                }
                else 
                {
                    contador++;
                    duplicados.push(tempArray[i] + " " + contador);
                    duplicados2.push(tempArray[i]);
                    duplicados2.push(contador);
                    contador = 0;
                }
            }
            // console.log(duplicados); 
            // console.log(duplicados2); 

            diccionario(duplicados2);
        }while(opc2!=2);
    }

}while (opc != 3);



/*switch (puntos)  
        {       
            case 1: 
                console.log("Lunes");
            break;
                
            case 2: 
                console.log("Martes");
            break;
            
            case 3: 
                console.log("Miercoles");
            break;
            
            case 4: 
                console.log("Jueves");
            break;
            
            case 5: 
                console.log("Viernes");
            break;
            
            case 6: 
                if(puntos == puntos2 && puntos2 == puntos3) 
                {
                    if(ram == ram2) 
                    {
                        if(disco == "SSD") 
                        {
                            contador = 1;
                        }else if(disco2 == "SSD")
                        {
                            contador = 2;
                        }

                        if(contador == 1)
                        {
                            if(ram < ram3)
                            {
                                console.log(`CONVIENE \n Ram: ${ram} \n Disco ${disco} \n Gabinete de cristal`);
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                                            <br> Gabinete de cristal </b> <br> 
                                            La Ram es: <b> ${ram} </b> <br> 
                                            El disco: <b> ${disco} </b> <br>
                                            Con un presupuesto: <b> ${pres} </b> <br>`
                                document.write(res);
                            }else if(ram3 < ram)
                            {
                                console.log(`CONVIENE \n Ram: ${ram3} \n Disco ${disco3} \n Gabinete de acrilico`);
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b>
                                            <br> Gabinete de acrilico </b> <br> 
                                            La Ram es: <b> ${ram3} </b> <br> 
                                            El disco: <b> ${disco3} </b> <br>
                                            Con un presupuesto: <b> ${pres3} </b> <br>`
                                document.write(res);
                            }
                        }else if(contador == 2)
                        {
                            if(ram2 < ram3)
                            {
                                console.log(`CONVIENE \n Ram: ${ram2} \n Disco ${disco2} \n Gabinete de plastico`);
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                                            <br> Gabinete de plastico </b> <br> 
                                            La Ram es: <b> ${ram2} </b> <br> 
                                            El disco: <b> ${disco2} </b> <br>
                                            Con un presupuesto: <b> ${pres2} </b> <br>`
                                document.write(res);
                            }else if(ram3 < ram2)
                            {
                                console.log(`CONVIENE \n Ram: ${ram3} \n Disco ${disco3} \n Gabinete de acrilico`);
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                                            <br> Gabinete de acrilico </b> <br> 
                                            La Ram es: <b> ${ram3} </b> <br> 
                                            El disco: <b> ${disco3} </b> <br>
                                            Con un presupuesto: <b> ${pres3} </b> <br>`
                                document.write(res);                            
                            }
                        }
                    }else if(ram2 == ram3) 
                    {
                        if(disco2 == "SSD") 
                        {
                            contador = 2;
                        }else if(disco3 == "SSD")
                        {
                            contador = 3;
                        }

                        if(contador == 3)
                        {
                            if(ram > ram3)
                            {

                                console.log(`CONVIENE \n Ram: ${ram} \n Disco ${disco} \n Gabinete de cristal`);
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                                            <br> Gabinete de cristal </b> <br> 
                                            La Ram es: <b> ${ram} </b> <br> 
                                            El disco: <b> ${disco} </b> <br>
                                            Con un presupuesto: <b> ${pres} </b> <br>`
                                document.write(res);
                            }else if(ram3 > ram)
                            {

                                console.log(`CONVIENE \n Ram: ${ram3} \n Disco ${disco3} \n Gabinete de acrilico`);
                                console.log(`Ram: ${ram3} \n Disco ${disco3} \n Gabinete de acrilico`);
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> <br> 
                                            <br> Gabinete de acrilico </b> <br> 
                                            La Ram es: <b> ${ram3} </b> <br> 
                                            El disco: <b> ${disco3} </b> <br>
                                            Con un presupuesto: <b> ${pres3} </b> <br>`
                                document.write(res);
                            }
                        }else if(contador == 2)
                        {
                           /* console.log(`***********${contador}********`);
                            console.log(`***********RAM2:${ram2}********`);
                            console.log(`***********RAM:${ram}********`);*/
                    /*       if(ram < ram2)
                            {

                                console.log("Hola desde el bueno");
                                console.log(`CONVIENE \n Ram: ${ram2} \n Disco ${disco2} \n Gabinete de cristal`);
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                                <br> Gabinete de cristal </b> <br> 
                                La Ram es: <b> ${ram} </b> <br> 
                                El disco: <b> ${disco} </b> <br>
                                Con un presupuesto: <b> ${pres} </b> <br>`
                                document.write(res);
                            }else if(ram2 < ram)
                            {
                                
                                console.log("ADIOS!!");
                                console.log(`CONVIENE \n Ram: ${ram2} \n Disco ${disco2} \n Gabinete de plastico`);
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                                <br> Gabinete de plastico </b> <br> 
                                La Ram es: <b> ${ram2} </b> <br> 
                                El disco: <b> ${disco2} </b> <br>
                                Con un presupuesto: <b> ${pres2} </b> <br>`
                                document.write(res);
                            }
                        }
                    }else if(ram3 == ram) 
                    {
                        if(disco3 == "SSD")
                        {
                            contador = 3;
                        }else if(disco == "SSD")
                        {
                            contador = 1;
                        }

                        if(contador == 3)
                        {
                            if(ram2 < ram3)
                            {
                                console.log(`CONVIENE \n`);
                                console.log(`Ram: ${ram2} \n Disco ${disco2} \n Gabinete de plastico`);
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                                            <br> Gabinete de plastico </b> <br> 
                                            La Ram es: <b> ${ram2} </b> <br> 
                                            El disco: <b> ${disco2} </b> <br>
                                            Con un presupuesto: <b> ${pres2} </b> <br>`
                                document.write(res);
                            }else if(ram3 < ram2)
                            {
                                console.log(`CONVIENE \n`);
                                console.log(`Ram: ${ram3} \n Disco ${disco3} \n Gabinete de acrilico`);
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                                            <br> Gabinete de acrilico </b> <br> 
                                            La Ram es: <b> ${ram3} </b> <br> 
                                            El disco: <b> ${disco3} </b> <br>
                                            Con un presupuesto: <b> ${pres3} </b> <br>`
                                document.write(res);
                            }
                        }else if(contador == 1)
                        {
                            if(ram2 > ram)
                            {
                                console.log(`CONVIENE \n`);
                                console.log(`Ram: ${ram2} \n Disco ${disco2} \n Gabinete de plastico`);
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                                            <br> Gabinete de plastico </b> <br> 
                                            La Ram es: <b> ${ram2} </b> <br> 
                                            El disco: <b> ${disco2} </b> <br>
                                            Con un presupuesto: <b> ${pres2} </b> <br>`
                                document.write(res);
                            }else if(ram > ram2)
                            {
                                console.log(`CONVIENE \n`);
                                console.log(`Ram: ${ram} \n Disco ${disco}  \n Gabinete de cristal` );
                                res = `<br><br> LA OPCIÓN MÁS CONVENIENTE </b> 
                                            <br> Gabinete de cristal </b> <br> 
                                            La Ram es: <b> ${ram} </b> <br> 
                                            El disco: <b> ${disco} </b> <br>
                                            Con un presupuesto: <b> ${pres} </b> <br>`
                                document.write(res);
                            }
                        }
                    }

                    //8 12 24
                   /* if(ram > ram2 && ram1 > ram3)
                    {
                        console.log("Mayor ram1:" + ram);
                    }else if(ram2 > ram1 && ram2 > ram3)
                    {
                        console.log("Mayor ram2:" + ram2);
                    }else if(ram3 > ram && ram3 > ram2)
                    {
                        console.log("Mayor ram3:" + ram3);
                    }*/

                /*     }
            break;

            default:
                console.log("El día no existe!");
            break;
        }*/



// console.log(parseInt(puntos));
// alert (`Puntos obtenidos: ${puntos}`);
// document.write(contador);