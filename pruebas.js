document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("b")

    onBut.importZip();
    boton.onclick = function () {
        // onBut.join();
        // onBut.join("--");
        // onBut.importZip().then(resolve => {
        //      onBut.createFile("nombre", ["nombre.txt", "archivo.txt"]); 
        //     onBut.createFile("prueba.txt", "prueba->", false).then(data => {
        //         const link = document.getElementById("link");
        //         link.setAttribute("href", data.url);
        //         link.setAttribute("download", data.name);
        //     });
        // });



        // onBut.createFile("nombre.txt", "Pregunta:", "archivo.txt"); 
        // onBut.createFile("nombre", ["nombre.txt", "archivo.txt"]); 
        // onBut.createFile("nombre", ["nombre.txt", "Pregunta:", "archivo.txt"]); 
        // onBut.createFile("nombre", ["nombre1.txt", "Pregunta:", "archivo.txt"], ["nombre2.txt", "Prueba"]); 
        // onBut.createFile("nombre", ["nombre.txt", "Pregunta:", "archivo.txt"], ["nombre2", ["nombre.txt", "otro"]]);
        // onBut.createFile("carpeta1",["carpeta2", ["archivo", "contenido"]]);
        // onBut.createFile("prueba.txt", "prueba->", false).then(data => {        
        //     const link = document.getElementById("link");
        //     link.setAttribute("href", data.url);
        //     link.setAttribute("download", data.name);
        // });



        // onBut.createFile("nombre.txt"); 
        // onBut.createFile("carpeta", ["archivo_bug.txt"], ["archivo_bien.txt", "archivo.txt"]); 


        // onBut.getFile("otro.json");
        // onBut.getFile("archivo.txt");
        // onBut.getFile("archivo.txt", false);

        // !Errores
        // Error nº1
        // onBut.createFile("carpeta", "archivo_bug.txt", ["archivo_bien.txt", "archivo.txt"]); 

    };

});