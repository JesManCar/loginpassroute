// Snippets de código para poder componer el programa

//Usado?:  ✅
  const middlewares = require('./middlewares');
//--- Explicación: 
/*
* Importa middlewares de la carpeta middlewares.js
* para poder usar las funciones de validación y verificación de sesión.
*/
// -------------------------------------------------------------------------------------

//Usado?:  ✅
const bodyParser = require('body-parser');
//--- Explicación:
/*
* Importa bodyParser para poder parsear el cuerpo de las peticiones HTTP
*/
// -------------------------------------------------------------------------------------

//Usado?:  ✅
const session = require('express-session');
//--- Explicación:
/*
* Importa express-session para poder manejar sesiones en la aplicación.
*/
// -------------------------------------------------------------------------------------

//Usado?: ✅
const express = require('express');
//--- Explicación:
/*
* Importa express para poder crear la aplicación web y manejar rutas.
*/
// -------------------------------------------------------------------------------------

//Usado?:  ✅
const bodyParser = require('body-parser');
//--- Explicación:
/*
* Importa bodyParser para poder parsear el cuerpo de las peticiones HTTP
*/
// -------------------------------------------------------------------------------------

//Usado?:  ✅
const session = require('express-session');
//--- Explicación:
/*
* Importa express-session para poder manejar sesiones en la aplicación.
*/
// -------------------------------------------------------------------------------------

//Usado?:  ✅
const dotenv = require('dotenv');
//--- Explicación:
/*
* Importa dotenv para poder manejar variables de entorno.
*/
// -------------------------------------------------------------------------------------

//Usado?: ✅
const middlewares = require('./middlewares');
//--- Explicación:
/*
* Importa middlewares de la carpeta middlewares.js
* para poder usar las funciones de validación y verificación de sesión.
*/
// -------------------------------------------------------------------------------------

//Usado?:  ✅
const routes = require('./routes');
//--- Explicación:
/*
* Importa routes de la carpeta routes.js
* para poder usar las rutas de la aplicación. 
*/
// -------------------------------------------------------------------------------------

//Usado?:  ✅
dotenv.config();
//--- Explicación:
/*
* Carga las variables de entorno desde el archivo .env
* para poder usarlas en la aplicación.
*/
// -------------------------------------------------------------------------------------

//Usado?: ✅
const app = express();
//--- Explicación:
/*
* Crea un objeto de la aplicación express para poder manejar el servidor.
*/

// -------------------------------------------------------------------------------------

//Usado?: ✅
const PORT = 4000;
//--- Explicación:
/*
* Define el puerto en el que se va a ejecutar la aplicación.
*/
// -------------------------------------------------------------------------------------

//Usado?:  ✅
const dotenv = require('dotenv');
//--- Explicación:
/*
* Importa dotenv para poder manejar variables de entorno.
*/
// -------------------------------------------------------------------------------------

//Usado?: ✅
dotenv.config();
//--- Explicación:
/*
* Carga las variables de entorno desde el archivo .env
* para poder usarlas en la aplicación.
*/
// -------------------------------------------------------------------------------------

//Usado?: ✅
middlewares.setupApp(app);
//--- Explicación: 
/*
* Configura la aplicación para usar bodyParser y session
* para poder manejar el cuerpo de las peticiones y las sesiones.
*/
// -------------------------------------------------------------------------------------

//Usado?: ✅
routes.setup(app);
//--- Explicación: 
/*
* Configura las rutas de la aplicación para poder manejar las peticiones HTTP.
*/
// -------------------------------------------------------------------------------------

//Usado?: ✅
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: 
/*
* Middleware que valida si la palabra introducida es correcta.
* Si es correcta, guarda la palabra en la sesión y llama a next() para continuar con la siguiente función.
* Si no es correcta, redirige a la página de inicio con un mensaje de error.
*/

// -------------------------------------------------------------------------------------


//Usado?:  ✅
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: 
/*
* Configura la ruta raiz de la aplicación y configura el mensaje de error.
* Si la sesión contiene la palabra secreta, redirige a la ruta de perfil.
*/

// -------------------------------------------------------------------------------------


//Usado?:  ✅
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: 
/*
* Envía una respuesta HTML con un formulario para introducir la palabra secreta.
* Si hay un mensaje de error, lo muestra en la página.
*/

// -------------------------------------------------------------------------------------


//Usado?: ✅
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación: 
/*
* Configura la aplicación para usar bodyParser y session
*/

//Usado?: ✅
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
/*
* Configura la ruta del perfil, usando el middleware validarPalabraMiddleware para 
* validar la palabra secreta.
*/
// -------------------------------------------------------------------------------------

//Usado?: ✅
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 
/* 
* Configura el bodyParser para poder parsear el cuerpo de las peticiones HTTP.
*/

// -------------------------------------------------------------------------------------

//Usado?: ✅
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 
/*
* Configura la sesión para poder manejar las sesiones en la aplicación.
* Usa la palabra secreta definida en el archivo .env o una por defecto.
*/

// -------------------------------------------------------------------------------------

//Usado?: ✅
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 
/*
* Inicia el servidor en el puerto definido y muestra un mensaje en la consola.
*/
// -------------------------------------------------------------------------------------

//Usado?:  ✅
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 
/*
* Middleware que verifica si la sesión contiene la palabra secreta.
*/

// -------------------------------------------------------------------------------------


//Usado?: ✅
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
/*
* Configura la ruta del perfil, usando el middleware verificarSesionMiddleware 
* para verificar la sesión.
*/
// -------------------------------------------------------------------------------------


//Usado?: ✅
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 
/*
* Configura la ruta de logout, destruyendo la sesión y redirigiendo a la página de inicio.
*/

// -------------------------------------------------------------------------------------

//Usado?: ✅
module.exports = {
  setup,
};
//--- Explicación:
/*
* Exporta la función setup para poder usarla en otros módulos.
*/

// -------------------------------------------------------------------------------------

//Usado?: ✅
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:
/*
* Exporta las funciones validarPalabraMiddleware, verificarSesionMiddleware y setupAPP
* para poder usarlas en otros módulos.
*/

// -------------------------------------------------------------------------------------

