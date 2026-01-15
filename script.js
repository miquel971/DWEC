const db = {
    uf1: [
        { q: "¿Qué palabra clave define una variable de ámbito de bloque?", a: ["var", "let", "constante"], c: 1 },
        { q: "¿Cuál es el tipo de dato de [1, 2, 3]?", a: ["array", "object", "list"], c: 1 },
        { q: "¿Qué devuelve 'typeof NaN'?", a: ["number", "undefined", "NaN"], c: 0 },
        { q: "¿Cómo se escribe un comentario de una línea?", a: ["", "//", "/* */"], c: 1 },
        { q: "¿Qué método convierte un String a número entero?", a: ["parseInt()", "toNumber()", "castInt()"], c: 0 },
        { q: "¿Qué es JavaScript?", a: ["Marcado", "Programación", "Estilo"], c: 1 },
        { q: "¿Dónde se ejecuta JS?", a: ["Servidor", "Navegador", "BD"], c: 1 },
        { q: "¿Cómo se muestra una alerta?", a: ["msg()", "alert()", "popup()"], c: 1 },
        { q: "Sensibilidad a mayúsculas:", a: ["Sí", "No", "Solo variables"], c: 0 },
        { q: "Operador de asignación:", a: ["==", "=", "==="], c: 1 },
        { q: "Valor de variable no inicializada:", a: ["null", "0", "undefined"], c: 2 },
        { q: "¿Qué devuelve 5 + '5'?", a: ["10", "55", "Error"], c: 1 },
        { q: "Tipo de dato de true:", a: ["String", "Boolean", "Number"], c: 1 },
        { q: "Símbolo de módulo:", a: ["/", "%", "mod"], c: 1 },
        { q: "Declarar constante:", a: ["const", "let", "var"], c: 0 },
        { q: "Nombre de variable válido:", a: ["1var", "_var", "var-name"], c: 1 },
        { q: "Operador 'diferente que':", a: ["<>", "!=", "not"], c: 1 },
        { q: "Convertir a decimal:", a: ["parseFloat()", "parseInt()", "Number()"], c: 0 },
        { q: "Mostrar en consola:", a: ["print()", "console.log()", "write()"], c: 1 },
        { q: "Pedir datos:", a: ["input()", "prompt()", "ask()"], c: 1 },
        { q: "Confirmación (sí/no):", a: ["confirm()", "agree()", "check()"], c: 0 },
        { q: "Longitud string:", a: [".size", ".length", ".count"], c: 1 },
        { q: "Variable global antigua:", a: ["let", "var", "global"], c: 1 },
        { q: "Operador lógico Y:", a: ["||", "&&", "AND"], c: 1 },
        { q: "Operador lógico O:", a: ["||", "&&", "OR"], c: 0 },
        { q: "NaN significa:", a: ["Not a Number", "Null and Null", "New Node"], c: 0 },
        { q: "¿JS es tipado débil?", a: ["Sí", "No", "Solo TS"], c: 0 },
        { q: "Indicar fin instrucción:", a: [":", ";", "."], c: 1 },
        { q: "Comentario multilínea:", a: ["//", "/* */", ""], c: 1 },
        { q: "¿Es obligatorio el ;?", a: ["Sí", "No (opcional)", "Solo en bucles"], c: 1 }
    ],
    uf2: [
        { q: "¿Qué estructura maneja excepciones?", a: ["if", "try...catch", "switch"], c: 1 },
        { q: "Salir de un bucle:", a: ["break", "continue", "return"], c: 0 },
        { q: "Saltar una iteración:", a: ["break", "continue", "next"], c: 1 },
        { q: "Comparación estricta:", a: ["==", "===", "="], c: 1 },
        { q: "¿Qué devuelve Boolean(0)?", a: ["true", "false", "NaN"], c: 1 },
        { q: "Bucle que ejecuta al menos una vez:", a: ["while", "for", "do...while"], c: 2 },
        { q: "Estructura múltiple opción:", a: ["if", "switch", "case"], c: 1 },
        { q: "¿Qué hace 'default'?", a: ["Error", "Opción si nada coincide", "Inicio"], c: 1 },
        { q: "Incrementar en 1:", a: ["i++", "i+1", "i+=1"], c: 0 },
        { q: "Operador ternario:", a: ["if/else", "? :", "&&"], c: 1 },
        { q: "Bucle para objetos:", a: ["for...in", "for...of", "forEach"], c: 0 },
        { q: "Bucle para arrays (ES6):", a: ["for...in", "for...of", "while"], c: 1 },
        { q: "Bucle clásico:", a: ["for(;;)", "while()", "do"], c: 0 },
        { q: "Bloque que se ejecuta siempre:", a: ["try", "catch", "finally"], c: 2 },
        { q: "Lanzar un error:", a: ["throw", "error", "stop"], c: 0 },
        { q: "if(a=5) es:", a: ["Comparación", "Asignación (true)", "Error"], c: 1 },
        { q: "Operador NOT:", a: ["NOT", "!", "~"], c: 1 },
        { q: "Comparar mayor igual:", a: ["=>", ">=", ">>"], c: 1 },
        { q: "Ámbito de 'var':", a: ["Bloque", "Función", "Script"], c: 1 },
        { q: "Switch usa comparación:", a: ["Débil", "Estricta", "Ninguna"], c: 1 },
        { q: "¿Try sin catch?", a: ["No", "Sí, con finally", "Sí"], c: 1 },
        { q: "Condición 'if':", a: ["( )", "{ }", "[ ]"], c: 0 },
        { q: "Operador 'o':", a: ["AND", "&&", "||"], c: 2 },
        { q: "Error de tipo:", a: ["TypeError", "RangeError", "RefError"], c: 0 },
        { q: "Iterar 10 veces:", a: ["for(i=0;i<10;i++)", "while(10)", "repeat(10)"], c: 0 },
        { q: "Evaluar cadena:", a: ["eval()", "run()", "exec()"], c: 0 },
        { q: "Diferencia == y ===:", a: ["Tipo", "Valor", "Nada"], c: 0 },
        { q: "if(null) es:", a: ["true", "false", "error"], c: 1 },
        { q: "Cerrar switch:", a: ["break", "stop", "end"], c: 0 },
        { q: "For in itera:", a: ["Valores", "Propiedades", "Funciones"], c: 1 }
    ],
    uf3: [
        { q: "Primer elemento array 'a':", a: ["a[1]", "a[0]", "a.first"], c: 1 },
        { q: "Añadir al final:", a: ["push()", "pop()", "add()"], c: 0 },
        { q: "Quitar del final:", a: ["push()", "pop()", "remove()"], c: 1 },
        { q: "Añadir al principio:", a: ["unshift()", "shift()", "add()"], c: 0 },
        { q: "Quitar principio:", a: ["unshift()", "shift()", "del()"], c: 1 },
        { q: "Arrow function:", a: ["=>", "->", "=> {}"], c: 2 },
        { q: "Definir objeto:", a: ["{}", "[]", "()"], c: 0 },
        { q: "Acceder propiedad 'p':", a: ["o.p", "o['p']", "Ambas"], c: 2 },
        { q: "Método .map():", a: ["Nada", "Nuevo array", "Booleano"], c: 1 },
        { q: "Filtrar elementos:", a: ["filter()", "find()", "search()"], c: 0 },
        { q: "Unir arrays:", a: ["concat()", "join()", "merge()"], c: 0 },
        { q: "Convertir array string:", a: ["toString()", "join()", "Ambas"], c: 2 },
        { q: "Invertir array:", a: ["reverse()", "sort()", "flip()"], c: 0 },
        { q: "Ordenar array:", a: ["sort()", "order()", "arrange()"], c: 0 },
        { q: "Copiar array (spread):", a: ["[...a]", "{...a}", "copy(a)"], c: 0 },
        { q: "Desestructuración:", a: ["let [x,y]=a", "let {x,y}=o", "Ambas"], c: 2 },
        { q: "Verificar array:", a: ["Array.isArray()", "typeof", "instanceof"], c: 0 },
        { q: "Reducir array:", a: ["map()", "reduce()", "fold()"], c: 1 },
        { q: "Tamaño array:", a: [".size", ".length", ".count"], c: 1 },
        { q: "Eliminar propiedad:", a: ["delete", "remove", "clear"], c: 0 },
        { q: "Claves objeto:", a: ["Object.keys()", "o.keys()", "keys(o)"], c: 0 },
        { q: "Función anónima:", a: ["Sin nombre", "Sin args", "Sin return"], c: 0 },
        { q: "Callback es:", a: ["Función argumento", "Llamada atrás", "Error"], c: 0 },
        { q: "Herencia clases:", a: ["extends", "inherits", "prototype"], c: 0 },
        { q: "Llamar constructor padre:", a: ["super()", "parent()", "this.parent()"], c: 0 },
        { q: "Crear instancia:", a: ["new", "create", "make"], c: 0 },
        { q: "Método estático:", a: ["static", "const", "final"], c: 0 },
        { q: "¿This en arrow function?", a: ["Heredado", "Global", "Null"], c: 0 },
        { q: "Saber si propiedad existe:", a: ["hasOwn()", "in", "Ambas"], c: 2 },
        { q: "Array a string separador:", a: ["join('-')", "split()", "implode()"], c: 0 }
    ],
    uf4: [
        { q: "Objeto global navegador:", a: ["document", "window", "navigator"], c: 1 },
        { q: "Cambiar título pestaña:", a: ["document.title", "window.title", "head.title"], c: 0 },
        { q: "URL actual:", a: ["window.location.href", "document.url", "url()"], c: 0 },
        { q: "Información navegador:", a: ["navigator", "browser", "info"], c: 0 },
        { q: "Temporizador (1 vez):", a: ["setTimeout()", "setInterval()", "wait()"], c: 0 },
        { q: "Temporizador (bucle):", a: ["setTimeout()", "setInterval()", "loop()"], c: 1 },
        { q: "Parar setInterval:", a: ["clearInterval()", "stop()", "clear()"], c: 0 },
        { q: "Almacenamiento persistente:", a: ["localStorage", "sessionStorage", "cookies"], c: 0 },
        { q: "¿Qué es el BOM?", a: ["Browser Object Model", "Basic Object Mode", "Bit Object"], c: 0 },
        { q: "Recargar página:", a: ["location.reload()", "refresh()", "reset()"], c: 0 },
        { q: "Ancho ventana:", a: ["window.innerWidth", "screen.width", "width()"], c: 0 },
        { q: "¿LocalStorage guarda objetos?", a: ["No, solo strings", "Sí", "Solo núms"], c: 0 },
        { q: "Convertir JSON storage:", a: ["JSON.stringify()", "toString()", "JSON()"], c: 0 },
        { q: "Detectar online:", a: ["navigator.onLine", "window.web", "online()"], c: 0 },
        { q: "Ir atrás:", a: ["history.back()", "prev()", "back()"], c: 0 },
        { q: "Cerrar ventana:", a: ["window.close()", "exit()", "close()"], c: 0 },
        { q: "Protocolo URL:", a: ["location.protocol", "type", "http"], c: 0 },
        { q: "Pathname URL:", a: ["location.pathname", "path", "dir"], c: 0 },
        { q: "Abrir ventana:", a: ["window.open()", "popup()", "alert()"], c: 0 },
        { q: "Alerta confirmación:", a: ["confirm()", "alert()", "prompt()"], c: 0 },
        { q: "Alerta entrada texto:", a: ["prompt()", "input()", "alert()"], c: 0 },
        { q: "Resolución pantalla:", a: ["screen.width", "window.width", "size"], c: 0 },
        { q: "Eliminar item storage:", a: ["removeItem()", "delete()", "clear()"], c: 0 },
        { q: "Limpiar storage:", a: ["clear()", "reset()", "delAll()"], c: 0 },
        { q: "Cookie segura:", a: ["Secure", "HttpOnly", "Ambos"], c: 2 },
        { q: "UserAgent sirve para:", a: ["Identificar navegador", "Publicidad", "Seguridad"], c: 0 },
        { q: "History length:", a: ["Páginas visitadas", "Tiempo", "Velocidad"], c: 0 },
        { q: "Scroll a posición:", a: ["scrollTo()", "scroll()", "go()"], c: 0 },
        { q: "Screen color depth:", a: ["Bits color", "Brillo", "Tamaño"], c: 0 },
        { q: "Frames en window:", a: ["window.frames", "window.iframes", "list"], c: 0 }
    ],
    uf5: [
        { q: "Seleccionar por ID:", a: ["getElementById()", "select()", "find()"], c: 0 },
        { q: "Crear elemento HTML:", a: ["createElement()", "new()", "add()"], c: 0 },
        { q: "Eliminar nodo:", a: ["removeChild() / remove()", "delete()", "hide()"], c: 0 },
        { q: "QuerySelector devuelve:", a: ["Primer coincidencia", "Todos", "Array"], c: 0 },
        { q: "¿Qué es el DOM?", a: ["Document Object Model", "Data Object Mode", "Design"], c: 0 },
        { q: "Añadir hijo al final:", a: ["appendChild()", "insert()", "add()"], c: 0 },
        { q: "Cambiar atributo:", a: ["setAttribute()", "attr()", "change()"], c: 0 },
        { q: "Cambiar estilo CSS:", a: ["element.style.color", "css()", "style()"], c: 0 },
        { q: "Añadir clase CSS:", a: ["classList.add()", "addClass()", "style.class"], c: 0 },
        { q: "Conmutar clase:", a: ["classList.toggle()", "switch()", "toggle()"], c: 0 },
        { q: "Nodo raíz:", a: ["document", "html", "window"], c: 0 },
        { q: "Padre de un nodo:", a: ["parentNode", "father", "root"], c: 0 },
        { q: "Hijos de un nodo:", a: ["childNodes", "list", "items"], c: 0 },
        { q: "Siguiente hermano:", a: ["nextSibling", "brother", "after"], c: 0 },
        { q: "Clonar nodo:", a: ["cloneNode()", "copy()", "duplicate()"], c: 0 },
        { q: "Nombre nodo (tag):", a: ["nodeName", "tag", "name"], c: 0 },
        { q: "Contenido texto plano:", a: ["textContent", "text", "val"], c: 0 },
        { q: "Atributos data-*:", a: ["dataset", "data", "info"], c: 0 },
        { q: "Innerhtml vs textcontent:", a: ["HTML interpreta etiquetas", "Iguales", "Text rápido"], c: 0 },
        { q: "Insertar antes:", a: ["insertBefore()", "before()", "add()"], c: 0 },
        { q: "Reemplazar nodo:", a: ["replaceChild()", "swap()", "change()"], c: 0 },
        { q: "Saber si tiene hijos:", a: ["hasChildNodes()", "isParent()", "empty()"], c: 0 },
        { q: "Tipo de nodo:", a: ["nodeType", "type", "kind"], c: 0 },
        { q: "Obtener todos hijos:", a: ["children", "nodes", "all"], c: 0 },
        { q: "Seleccionar clase:", a: ["getElementsByClassName()", "select()", "get()"], c: 0 },
        { q: "Seleccionar etiqueta:", a: ["getElementsByTagName()", "tags()", "get()"], c: 0 },
        { q: "Atributo de valor input:", a: ["value", "text", "content"], c: 0 },
        { q: "Comprobar si tiene clase:", a: ["classList.contains()", "hasClass()", "check()"], c: 0 },
        { q: "Borrar todos hijos:", a: ["innerHTML = ''", "clear()", "empty()"], c: 0 },
        { q: "Nivel de nodo body:", a: ["Hijo de html", "Raíz", "Padre"], c: 0 }
    ],
    uf6: [
        { q: "Registrar evento:", a: ["addEventListener()", "on()", "listen()"], c: 0 },
        { q: "Anular acción defecto:", a: ["preventDefault()", "stop()", "cancel()"], c: 0 },
        { q: "Evento envío formulario:", a: ["submit", "send", "click"], c: 0 },
        { q: "Burbujeo eventos:", a: ["Bubbling", "Explosión", "Eco"], c: 0 },
        { q: "Detener propagación:", a: ["stopPropagation()", "stop()", "end()"], c: 0 },
        { q: "Evento al cargar:", a: ["load", "ready", "start"], c: 0 },
        { q: "Ratón entra:", a: ["mouseenter / mouseover", "mousein", "hover"], c: 0 },
        { q: "Tecla pulsada:", a: ["keydown", "keypress", "key"], c: 0 },
        { q: "Evento clic:", a: ["click", "press", "touch"], c: 0 },
        { q: "Elemento disparó evento:", a: ["event.target", "this.target", "source"], c: 0 },
        { q: "Quitar escuchador:", a: ["removeEventListener()", "off()", "clear()"], c: 0 },
        { q: "Evento foco (entrar):", a: ["focus", "in", "active"], c: 0 },
        { q: "Evento foco (salir):", a: ["blur", "out", "exit"], c: 0 },
        { q: "Fase captura:", a: ["Antes del objetivo", "Después", "Nunca"], c: 0 },
        { q: "Evento scroll:", a: ["scroll", "move", "window"], c: 0 },
        { q: "Saber tecla pulsada:", a: ["event.key", "event.code", "Ambas"], c: 2 },
        { q: "Evento clic derecho:", a: ["contextmenu", "rightclick", "menu"], c: 0 },
        { q: "Once: true en opciones:", a: ["Ejecuta 1 vez", "Falla", "Bucle"], c: 0 },
        { q: "Evento cambio select:", a: ["change", "select", "input"], c: 0 },
        { q: "Evento reset formulario:", a: ["reset", "clear", "back"], c: 0 },
        { q: "Evento mousemove:", a: ["Mover ratón", "Click", "Doble"], c: 0 },
        { q: "Evento dblclick:", a: ["Doble clic", "Derecho", "Medio"], c: 0 },
        { q: "Capturar coordenadas:", a: ["clientX / clientY", "posX / posY", "x / y"], c: 0 },
        { q: "Atributo onclick en HTML:", a: ["Mala práctica", "Recomendado", "Único modo"], c: 0 },
        { q: "Delegación eventos:", a: ["Escuchar en padre", "Escuchar en todos", "Error"], c: 0 },
        { q: "CustomEvent:", a: ["Personalizado", "Framework", "CSS"], c: 0 },
        { q: "Evento al copiar:", a: ["copy", "ctrlc", "out"], c: 0 },
        { q: "Evento al pegar:", a: ["paste", "in", "v"], c: 0 },
        { q: "Evento rueda ratón:", a: ["wheel / mousewheel", "scroll", "roll"], c: 0 },
        { q: "Event.isTrusted:", a: ["Generado por usuario", "Hack", "Seguro"], c: 0 }
    ],
    uf7: [
        { q: "¿Qué es AJAX?", a: ["Asynchronous JS and XML", "JS Pro", "Plugin"], c: 0 },
        { q: "Fetch devuelve:", a: ["Promise", "String", "Number"], c: 0 },
        { q: "JSON a objeto:", a: ["JSON.parse()", "stringify()", "toObj()"], c: 0 },
        { q: "Estado HTTP OK:", a: ["200", "404", "500"], c: 0 },
        { q: "Manejar éxito promesa:", a: [".then()", ".catch()", ".finally()"], c: 0 },
        { q: "Async/Await para:", a: ["Asincronía legible", "Bucles", "Estilo"], c: 0 },
        { q: "Await solo en:", a: ["Funciones async", "Siempre", "HTML"], c: 0 },
        { q: "Método pedir datos:", a: ["GET", "POST", "PUT"], c: 0 },
        { q: "Método enviar datos:", a: ["POST", "GET", "DELETE"], c: 0 },
        { q: "CORS es:", a: ["Seguridad origen cruzado", "Error red", "Protocolo"], c: 0 },
        { q: "¿Qué es una API?", a: ["Interfaz prog. aplicaciones", "Servidor", "Web"], c: 0 },
        { q: "Endpoint es:", a: ["URL de la API", "Final código", "Error"], c: 0 },
        { q: "Promesa pendiente:", a: ["pending", "resolved", "rejected"], c: 0 },
        { q: "Promise.all() espera:", a: ["Todas", "La primera", "Ninguna"], c: 0 },
        { q: "Fetch defecto usa:", a: ["GET", "POST", "HEAD"], c: 0 },
        { q: "Status 404:", a: ["No encontrado", "OK", "Server Error"], c: 0 },
        { q: "JSON.stringify():", a: ["Objeto a String", "String a Objeto", "Borra"], c: 0 },
        { q: "XHR es:", a: ["Antiguo AJAX", "Nuevo Fetch", "Imagen"], c: 0 },
        { q: "Promesa resuelta:", a: ["fulfilled", "pending", "wait"], c: 0 },
        { q: "Bloque try...catch en async:", a: ["Capturar errores red", "Bucle", "Nada"], c: 0 },
        { q: "Token Bearer:", a: ["Autorización", "Estilo", "Dato"], c: 0 },
        { q: "Status 500:", a: ["Error servidor", "OK", "Permiso"], c: 0 },
        { q: "Encabezados (headers):", a: ["Metadatos petición", "Cuerpo", "URL"], c: 0 },
        { q: "Petición asíncrona:", a: ["No bloquea ejecución", "Para todo", "Es lenta"], c: 0 },
        { q: "Fetch: body solo en:", a: ["POST/PUT", "GET", "DELETE"], c: 0 },
        { q: "Response.ok es true si status:", a: ["200-299", "400", "500"], c: 0 },
        { q: "URLSearchParams:", a: ["Manejar parámetros URL", "Buscar", "Google"], c: 0 },
        { q: "AbortController:", a: ["Cancelar petición", "Error", "Pausa"], c: 0 },
        { q: "Bloque finally():", a: ["Ejecuta siempre al final", "Solo error", "Nada"], c: 0 },
        { q: "Status 401:", a: ["No autorizado", "OK", "Forbidden"], c: 0 }
    ]
};

// --- MOTOR DEL TEST ---
let preguntasActuales = [];
let aciertos = 0;

const menuPrincipal = document.getElementById('menu-principal');
const zonaTest = document.getElementById('zona-test');
const lista = document.getElementById('preguntas-lista');
const titulo = document.getElementById('titulo-test');
const divResultado = document.getElementById('resultado');

function iniciarTest(modo) {
    menuPrincipal.style.display = 'none';
    zonaTest.style.display = 'block';
    lista.innerHTML = '';
    divResultado.innerText = '';
    aciertos = 0;

    if (modo === 'mix') {
        titulo.innerText = "Examen Mix DWEC (UF1 - UF7)";
        preguntasActuales = generarExamenMix();
    } else {
        titulo.innerText = "Entrenamiento: " + modo.toUpperCase();
        preguntasActuales = [...db[modo]].sort(() => 0.5 - Math.random());
    }
    renderizarPreguntas();
    window.scrollTo(0, 0);
}

function generarExamenMix() {
    let mix = [];
    const sacar = (uf, n) => [...db[uf]].sort(() => 0.5 - Math.random()).slice(0, n);
    mix.push(...sacar('uf1', 4), ...sacar('uf2', 4), ...sacar('uf3', 4), ...sacar('uf4', 4), ...sacar('uf5', 5), ...sacar('uf6', 5), ...sacar('uf7', 4));
    return mix;
}

function renderizarPreguntas() {
    preguntasActuales.forEach((p, i) => {
        const div = document.createElement('div');
        div.className = 'pregunta';
        div.innerHTML = `<p>${i + 1}. ${p.q}</p><div class="opciones" id="opts-${i}"></div>`;
        lista.appendChild(div);

        // MEZCLA DE RESPUESTAS (Algoritmo Fisher-Yates)
        let opciones = p.a.map((texto, index) => ({ texto, index }));
        for (let j = opciones.length - 1; j > 0; j--) {
            const k = Math.floor(Math.random() * (j + 1));
            [opciones[j], opciones[k]] = [opciones[k], opciones[j]];
        }

        opciones.forEach((opt) => {
            const btn = document.createElement('button');
            btn.className = 'opcion';
            btn.innerText = opt.texto;
            btn.onclick = () => validar(btn, i, opt.index);
            document.getElementById(`opts-${i}`).appendChild(btn);
        });
    });
}

function validar(btn, pIdx, oIdxElegido) {
    const contenedor = document.getElementById(`opts-${pIdx}`);
    const botones = contenedor.children;
    if (botones[0].disabled) return;
    
    for (let b of botones) b.disabled = true;

    if (oIdxElegido === preguntasActuales[pIdx].c) {
        btn.classList.add('correcta');
        aciertos++;
    } else {
        btn.classList.add('incorrecta');
        for (let b of botones) {
            // Buscamos el texto que coincide con la correcta original para marcarlo
            if (b.innerText === preguntasActuales[pIdx].a[preguntasActuales[pIdx].c]) {
                b.classList.add('correcta');
            }
        }
    }
}

document.getElementById('btn-nota').onclick = () => {
    const total = preguntasActuales.length;
    const notaFinal = (aciertos / total) * 10;
    let frase = ""; let clase = "";
    
    if (notaFinal < 5) { frase = "WATTAFAK?"; clase = "nota-critica"; }
    else if (notaFinal < 7) { frase = "ESBIEN"; clase = "nota-aprobada"; }
    else if (notaFinal < 9) { frase = "BOMBOCLAT"; clase = "nota-notable"; }
    else { frase = "PUTACRANCKPELUT!!!"; clase = "nota-crack"; }

    divResultado.innerHTML = `
        <div style="font-size: 2rem; font-family: 'Oswald';">Nota: ${aciertos} / ${total} (${notaFinal.toFixed(1)})</div>
        <div class="frase-test ${clase}">${frase}</div>
    `;
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

function volverAlMenu() {
    zonaTest.style.display = 'none';
    menuPrincipal.style.display = 'grid';
    titulo.innerText = "REPASO EXAMEN TEORIA DWEC";
    window.scrollTo(0, 0);
}

document.getElementById('btn-matrix').addEventListener('click', function() {
    document.body.classList.toggle('matrix-active');
});