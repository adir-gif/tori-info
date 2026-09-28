/**
 * pingo-legal/content/es.js — Español.
 *
 * ‼️ **Traducido de `he.js`, que es la fuente de verdad.** La numeración de
 * secciones, el orden y la redacción de cada compromiso lo siguen
 * exactamente. Un cambio hecho solo aquí haría que los dos documentos
 * declaren cosas distintas sobre la misma app.
 *
 * ⚠️ **Un solo texto sirve a `es-MX` y a `es-ES`.** Por eso se usa la
 * segunda persona del singular (`tú`) y se evitan `ustedes` y `vosotros`,
 * que son justamente las formas que obligarían a dos versiones.
 */

const MAIL = 'adirkatar@gmail.com';
const SUBJ = 'Solicitud%20de%20eliminación%20de%20cuenta%20Tori';

module.exports = {
  index: {
    title: 'Tori · Información legal',
    h1: 'Tori',
    sub: 'Una app de tareas, hábitos y premios para familias',
    body: `
<a class="row" href="./privacy.html">
  <strong>Política de privacidad</strong>
  <span>Qué información se recopila, adónde va y qué no se recopila</span>
</a>

<a class="row" href="./delete-account.html">
  <strong>Eliminar tu cuenta y tus datos</strong>
  <span>Cómo eliminar la cuenta y toda la información de la familia</span>
</a>

<footer>
  Contacto · <a href="mailto:${MAIL}">${MAIL}</a>
</footer>`,
  },

  privacy: {
    title: 'Política de privacidad · Tori',
    h1: 'Política de privacidad de Tori',
    sub: 'Última actualización: 28 de septiembre de 2026 · versión 1.3',
    body: `
<p>
  Tori es una app de tareas, hábitos y premios para familias. Este documento explica exactamente
  <strong>qué información se recopila, adónde se envía, qué no se recopila y cómo se borra todo</strong>.
  Está escrito para que un padre o una madre pueda leerlo hasta el final y entender qué pasa con la
  información de sus hijos.
</p>

<div class="card note">
  <strong>Tres cosas que conviene saber de inmediato:</strong>
  <ul style="margin-bottom:0">
    <li>Los <strong>niños no tienen cuenta</strong> en Tori. Sin correo, sin contraseña, sin teléfono.</li>
    <li>La app no tiene <strong>anuncios, ni herramientas de analítica, ni rastreadores</strong> de terceros.</li>
    <li>Si una familia usa Tori <strong>en un solo dispositivo, sus datos se quedan en el teléfono</strong>.
        No se envía al servidor ningún nombre, tarea, foto ni contenido. Lo único que queda registrado
        en el servidor al instalar es una <strong>huella cifrada del dispositivo</strong>, para que la
        semana gratis se otorgue una sola vez — sección 2.7.</li>
  </ul>
</div>

<h2>1 · Quién es responsable de los datos</h2>
<p>
  El operador de la app y responsable del tratamiento es el desarrollador de Tori.
  Para cualquier pregunta, solicitud o reclamación sobre privacidad:
  <a href="mailto:${MAIL}">${MAIL}</a>.
  Respondemos en un plazo de 30 días.
</p>

<h2>2 · Qué información se recopila</h2>

<h3>2.1 · Información que ingresa el padre y se guarda en el dispositivo</h3>
<p>
  El núcleo de la app funciona de forma local. Lo siguiente se guarda en el almacenamiento de la app,
  en el teléfono:
</p>
<ul>
  <li>El <strong>nombre de la familia</strong> y los nombres o apodos de los padres y los hijos</li>
  <li>La <strong>edad o el curso de cada hijo</strong> — sirve para ajustar el modo de la interfaz (5–8 / 9–12 / 13–15)</li>
  <li>Una <strong>foto de perfil</strong> del hijo, si el padre decide añadirla — se guarda en el dispositivo</li>
  <li>Las <strong>tareas, hábitos, puntos, energía, premios y eventos de calendario</strong> de la familia</li>
  <li><strong>Preferencias</strong>: hora del recordatorio, modo de visualización, reglas de aprobación</li>
</ul>

<h3>2.2 · Información que llega al servidor — solo al vincular un segundo dispositivo</h3>
<p>
  Mientras la familia trabaja en un solo dispositivo, ninguno de sus contenidos se envía al servidor
  (salvo lo descrito en la sección 2.7).
  <strong>En cuanto el padre genera un código para vincular otro dispositivo</strong> (el teléfono de un
  hijo o de un segundo adulto), el documento de la familia se sincroniza con nuestro servidor para que
  ambos dispositivos vean la misma información. El documento contiene los elementos de la sección 2.1.
</p>
<p>
  Junto al documento se guarda un <strong>identificador anónimo de dispositivo</strong>, generado al azar
  por nuestro sistema de autenticación. No está vinculado a un correo, un teléfono, una cuenta de Google
  o de Apple, ni a ninguna otra identidad personal.
</p>

<h3>2.3 · Fotos como prueba de una tarea</h3>
<p>
  Un padre puede marcar una tarea como que requiere foto. En ese caso la foto que toma el niño
  <strong>se guarda en el espacio de almacenamiento de la familia en el servidor</strong>, en una carpeta
  separada asociada únicamente a esa familia. Las reglas de permisos de la base de datos impiden el
  acceso a las fotos de otra familia. Las fotos se eliminan junto con la cuenta.
</p>

<h3>2.4 · Conversaciones con Pingo y ayuda con la tarea escolar</h3>
<p>
  Pingo es un asistente basado en inteligencia artificial. Cuando un niño o un padre le escribe:
</p>
<ul>
  <li>El texto se envía <strong>a través de nuestro servidor</strong> a <strong>OpenAI</strong>, que opera
      el modelo de lenguaje, y regresa una respuesta.</li>
  <li><strong>Para que Pingo pueda responder con sentido, se envía también el estado de la familia</strong>:
      los nombres o apodos de los hijos, las edades, las tareas, los hábitos y los saldos de puntos. Sin
      eso no puede responder a "¿qué me queda hoy?". <strong>No se envían</strong> fotos de perfil, datos de
      contacto ni ningún identificador del dispositivo.</li>
  <li>En la ayuda con la tarea escolar el niño puede <strong>fotografiar un ejercicio</strong>. La foto se
      envía por la misma ruta a OpenAI para analizar el ejercicio, y
      <strong>no se guarda ni en nuestros servidores ni en la app</strong>.</li>
  <li>Nuestro servidor <strong>no guarda el contenido de las conversaciones</strong>. Solo cuenta solicitudes
      (ver 2.6).</li>
  <li>El historial de la conversación se guarda localmente en el dispositivo para que la charla continúe,
      y se borra junto con la app.</li>
</ul>
<p class="muted">
  OpenAI procesa las solicitudes para generar la respuesta. Según sus términos comerciales de API, la
  entrada enviada a través de la API no se usa para entrenar modelos de forma predeterminada, y puede
  conservarse durante un tiempo limitado únicamente para detectar usos indebidos.
  Política de privacidad de OpenAI:
  <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener">openai.com/policies/privacy-policy</a>.
</p>

<div class="card">
  <strong>El padre tiene un interruptor para apagarlo.</strong> En Ajustes → "Pingo · el asistente
  inteligente" hay un interruptor <em>"Asistente de IA para los niños"</em>. Cuando está apagado, Pingo y
  la ayuda con la tarea no aparecen en el lado de los niños, y desde ahí no se puede enviar ningún texto
  ni ninguna foto.
</div>

<h3>2.5 · Hablar en lugar de escribir</h3>
<p>
  Se puede hablar con Pingo en lugar de escribir. La conversión de voz a texto la realiza el
  <strong>servicio de reconocimiento de voz del sistema operativo</strong> (Google en Android, Apple en
  iOS), sujeto a sus políticas de privacidad. Nosotros recibimos <strong>solo el texto</strong>, no la
  grabación. Las grabaciones de voz no se guardan con nosotros ni se envían a nuestro servidor.
  El permiso del micrófono se solicita únicamente al pulsar el botón de hablar.
</p>

<h3>2.6 · Contadores operativos</h3>
<p>
  Para cada familia se guarda el <strong>número de solicitudes por día</strong> a Pingo, para aplicar una
  cuota y evitar abusos. Se guarda solo un número: ni contenido, ni preguntas, ni respuestas.
</p>

<h3>2.7 · El registro de la semana gratis</h3>
<p>
  Tori ofrece <strong>una semana de prueba por dispositivo</strong>. Para que de verdad se otorgue una sola
  vez —y no de nuevo con cada desinstalación y reinstalación— se guarda en el servidor una única fila con
  tres datos:
</p>
<ul>
  <li>Una <strong>huella cifrada del dispositivo</strong>, no el identificador del dispositivo en sí. La app
      calcula a partir de él una huella unidireccional (sha256), <strong>y solo esa se envía</strong>. No se
      puede recuperar el identificador a partir de ella, y la huella es exclusiva de Tori: el mismo
      dispositivo genera una huella completamente distinta en cualquier otra app, así que aquí no hay
      ningún identificador que permita cruzar datos entre servicios.</li>
  <li>La <strong>fecha en que empezó la semana gratis</strong> en ese dispositivo.</li>
  <li>El <strong>número de veces</strong> que la app se ha reinstalado en ese dispositivo.</li>
</ul>
<p>
  Esta fila <strong>no está vinculada a la familia, a los nombres, al documento familiar ni a ninguna otra
  información</strong> de esta política, y no puede identificar a una persona. No se usa para publicidad,
  análisis de uso ni segmentación: únicamente para aplicar la prueba única.
</p>
<p>
  <strong>Lo que no se guarda:</strong> el identificador del dispositivo en sí, el modelo del dispositivo, un
  número de teléfono, una dirección IP como registro permanente, ni ningún identificador publicitario.
</p>

<h3>2.8 · "Encontrar el teléfono": la ubicación del teléfono del niño</h3>
<p>
  Un padre puede hacer sonar el teléfono de un hijo vinculado a la familia, o ver dónde está ese teléfono
  en este momento. La función <strong>está apagada hasta que un padre la activa en el propio teléfono del
  niño</strong>: aparece una pantalla explicativa y, después, el sistema operativo pide el permiso de
  ubicación. Sin esa autorización no se recopila ninguna ubicación.
</p>
<ul>
  <li><strong>Cuándo se recopila:</strong> <strong>solo cuando un padre de la misma familia pulsa "¿Dónde está
      el teléfono?"</strong>. Para que funcione también con la app cerrada, el permiso es "Siempre", pero la
      app <strong>no hace seguimiento en segundo plano</strong> ni mide la ubicación por su cuenta. Si ningún
      padre lo pide, no se mide nada.</li>
  <li><strong>Qué se recopila:</strong> latitud y longitud precisas, el margen de precisión en metros y el
      momento de la medición.</li>
  <li><strong>Qué se guarda:</strong> <strong>solo la última ubicación</strong>: una fila por teléfono, que se
      sobrescribe con cada nueva solicitud. <strong>No hay historial ni recorrido</strong>.</li>
  <li><strong>Quién la ve:</strong> solo los dispositivos de <strong>los padres de la misma familia</strong>.
      Esto se aplica con reglas de permisos en la base de datos, no solo en la app. La ubicación no se
      envía a nadie más, no se usa para publicidad y no se comparte con terceros.</li>
  <li><strong>Cómo se desactiva:</strong> en cualquier momento, en los ajustes del teléfono del niño →
      Tori → Ubicación → "Nunca".</li>
</ul>
<p>
  Hacer sonar el teléfono no recopila ningún dato: es un aviso que llega al teléfono del niño y reproduce
  un sonido o una vibración.
</p>

<h3>2.9 · Token de notificaciones</h3>
<p>
  En el teléfono de un niño donde se activó "Encontrar el teléfono", el servidor guarda un
  <strong>token de notificaciones</strong>: un identificador que otorga el sistema operativo para poder
  enviar avisos a ese teléfono. Se usa <strong>únicamente</strong> para transmitir la solicitud del padre
  (sonido o ubicación), y ningún dispositivo puede leerlo, ni siquiera los de los padres. Los avisos pasan
  por el servicio de notificaciones de <strong>Expo</strong> y, desde ahí, por
  <strong>Firebase Cloud Messaging de Google</strong> (Android) o por <strong>Apple Push Notification
  Service</strong> (iOS). El aviso en sí no contiene la ubicación, nombres ni contenido de la familia.
</p>

<h2>3 · Lo que <u>no</u> se recopila</h2>
<table>
  <tr><th>Categoría</th><th>Cómo está en Tori</th></tr>
  <tr><td>Anuncios y redes publicitarias</td><td>No hay. La app no muestra publicidad en absoluto.</td></tr>
  <tr><td>Herramientas de analítica y rastreo</td><td>No hay. No se instala ningún SDK de análisis de uso ni de rastreo.</td></tr>
  <tr><td>Seguimiento continuo de la ubicación o historial de ubicaciones</td><td>No hay. La ubicación se mide solo cuando un padre lo pide, y solo se guarda la última (sección 2.8).</td></tr>
  <tr><td>Contactos, calendario del dispositivo, galería completa</td><td>No accesibles. Solo la foto que se elige de forma explícita.</td></tr>
  <tr><td>Correo / contraseña / teléfono de un niño</td><td>No existen. El niño no tiene cuenta.</td></tr>
  <tr><td>Venta de datos a terceros</td><td>No se realiza, de ninguna forma.</td></tr>
  <tr><td>Texto libre entre hermanos</td><td>No existe en la app. Solo acciones estructuradas.</td></tr>
</table>

<h2>4 · Privacidad de los niños</h2>
<p>
  Tori está pensada para uso familiar, <strong>gestionada por el padre y bajo su responsabilidad</strong>.
  El padre instala la app, crea los perfiles de los hijos y decide qué funciones están activas.
</p>
<ul>
  <li>El niño no crea una cuenta ni entrega datos de contacto. Entra con un código de vinculación temporal
      o con un PIN de 4 dígitos que define el padre.</li>
  <li>La única información sobre el niño es la que ingresó el padre: nombre o apodo, edad y una foto de
      perfil opcional; y, si el padre activó "Encontrar el teléfono", la última ubicación de su teléfono
      (sección 2.8).</li>
  <li>En la app no hay chat libre entre niños, ni enlaces a redes sociales, ni contenido externo.</li>
  <li>El padre puede apagar el asistente inteligente para los niños en cualquier momento y borrar toda la
      información.</li>
</ul>
<p>
  No recopilamos a sabiendas información personal de niños más allá de lo descrito aquí. Un padre que
  considere que se recopiló información sin su consentimiento puede escribirnos, y la eliminaremos de
  inmediato.
</p>

<h2>5 · Dónde se almacenan los datos</h2>
<p>
  La información sincronizada con el servidor se almacena en la infraestructura de <strong>Supabase</strong>
  (base de datos y almacenamiento de archivos), en servidores de <strong>Fráncfort, Alemania</strong> (Unión
  Europea), protegida por reglas de permisos a nivel de fila que limitan a cada familia a sus propios datos.
</p>
<p>
  Las solicitudes a Pingo las procesa <strong>OpenAI</strong>, que puede procesarlas fuera de la Unión
  Europea, incluido en Estados Unidos. Lo mismo ocurre con los servicios de notificaciones (Expo, Google,
  Apple) y con la gestión de suscripciones (RevenueCat).
</p>

<h2>6 · Cuánto tiempo se conserva</h2>
<ul>
  <li><strong>Datos locales</strong>: mientras la app esté instalada. Borrar la app los borra.</li>
  <li><strong>El documento familiar y las fotos en el servidor</strong>: mientras exista la cuenta, hasta su
      eliminación.</li>
  <li><strong>Códigos de vinculación</strong>: caducan automáticamente a los 15 minutos.</li>
  <li><strong>Contadores operativos</strong>: se borran automáticamente en 48 horas.</li>
  <li><strong>Contenido de las conversaciones</strong>: nunca se guarda en el servidor.</li>
  <li><strong>La ubicación del teléfono del niño</strong> (sección 2.8): solo la última, se sobrescribe con
      cada solicitud y se borra al eliminar la cuenta. Un teléfono desvinculado de la familia deja de
      aparecer para los padres.</li>
  <li><strong>Token de notificaciones</strong> (sección 2.9): hasta que el sistema operativo lo revoque, o
      hasta que se elimine la cuenta.</li>
  <li><strong>El registro de la semana gratis</strong> (sección 2.7): <strong>se conserva sin límite de
      tiempo</strong>. Ese es todo su propósito: un registro borrado al cabo de un año significa otra semana
      gratis para quien esperó. Contiene solo una huella cifrada y una fecha, y no identifica a una persona.</li>
</ul>

<h2>7 · Cómo borrar todo</h2>
<div class="card">
  <p style="margin-top:0"><strong>Desde la app:</strong>
    Ajustes → Avanzado → <em>Eliminar la cuenta y los datos</em>.
    La acción borra del servidor el documento familiar, las fotos de prueba, el registro de dispositivos,
    la última ubicación y los tokens de notificaciones, y reinicia el dispositivo. No hay forma de recuperarlo.</p>
  <p><strong>Lo que no se borra:</strong> el registro de la semana gratis (sección 2.7). No forma parte de la
    cuenta ni está vinculado a ella: es una huella cifrada del dispositivo y una fecha, y borrarlo anularía
    en la práctica la prueba única. Conservarlo se apoya en un interés legítimo en evitar abusos. Para pedir
    que también se borre, escríbenos a la dirección de abajo.</p>
  <p style="margin-bottom:0"><strong>Sin la app:</strong>
    Puedes enviar una solicitud de eliminación a
    <a href="mailto:${MAIL}?subject=${SUBJ}">${MAIL}</a>.
    Más detalles en la página de <a href="./delete-account.html">eliminación de cuenta</a>.</p>
</div>

<h2>8 · Tus derechos</h2>
<p>
  Puedes solicitar en cualquier momento <strong>acceso</strong> a los datos guardados, su
  <strong>rectificación</strong>, su <strong>eliminación</strong> completa o una <strong>copia</strong>. La
  mayoría de estas acciones están disponibles directamente en la app; para el resto puedes escribirnos por
  correo. Si te encuentras en la Unión Europea, te asisten los derechos del RGPD, incluido el de presentar
  una reclamación ante una autoridad de control local.
</p>

<h2>9 · Pagos</h2>
<p>
  La suscripción de pago se compra y se gestiona <strong>a través de la tienda de apps desde la que se
  instaló la aplicación</strong>: la App Store de Apple o Google Play. No vemos ni guardamos datos de pago
  —tarjeta, cuenta bancaria ni ningún otro dato financiero—. De la tienda solo recibimos si existe una
  suscripción activa.
</p>
<p>
  Las suscripciones las gestiona por nosotros <strong>RevenueCat</strong>. Recibe un <strong>identificador
  anónimo de la familia</strong> y los datos de la compra que envía la tienda, pero no nombres ni contenido.
  Si se introdujo un <strong>código promocional</strong> en la pantalla de suscripción, el código se guarda
  en RevenueCat junto a ese identificador, para decidir qué precio mostrar y saber de qué código procede la
  suscripción. Política de privacidad de RevenueCat:
  <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a>.
</p>

<h2>10 · Seguridad</h2>
<p>
  La comunicación está cifrada con TLS. El acceso a los datos se aplica a nivel de base de datos y no solo
  en la app. Las claves de acceso a proveedores externos se guardan únicamente en el servidor y no existen
  dentro de la app. Dicho esto, ningún sistema es totalmente inmune y no podemos garantizar una seguridad
  absoluta.
</p>

<h2>11 · Cambios en esta política</h2>
<p>
  Si cambiamos la política, actualizaremos la fecha al inicio de la página. Un cambio sustancial —por
  ejemplo, una nueva categoría de datos o un nuevo proveedor— se mostrará además dentro de la app antes de
  entrar en vigor.
</p>

<h2>12 · Contacto</h2>
<p>
  <a href="mailto:${MAIL}">${MAIL}</a>
</p>

<footer>
  Tori · Política de privacidad · versión 1.3 · 28 de septiembre de 2026
</footer>`,
  },

  deleteAccount: {
    title: 'Eliminar tu cuenta · Tori',
    h1: 'Eliminar tu cuenta y tus datos',
    sub: 'Tori · actualizado el 13 de septiembre de 2026',
    body: `
<p>
  Esta página explica cómo eliminar la cuenta de Tori de tu familia y toda la información guardada con
  ella. Hay dos formas, y las dos borran los mismos datos.
</p>

<h2>La primera forma — desde la app</h2>
<div class="card">
  <ol style="margin:0">
    <li>Abrir Tori en el lado de los padres</li>
    <li>Ajustes → <strong>Avanzado</strong></li>
    <li>Pulsar <strong>Eliminar la cuenta y los datos</strong></li>
    <li>Confirmar</li>
  </ol>
</div>
<p>La eliminación es inmediata. No hace falta escribirnos y no hay espera.</p>

<h2>La segunda forma — una solicitud por correo</h2>
<p>
  Si ya no tienes acceso a la app —por ejemplo, si se perdió el dispositivo o se desinstaló la
  aplicación— puedes enviarnos una solicitud y borraremos los datos manualmente.
</p>
<a class="btn" href="mailto:${MAIL}?subject=${SUBJ}">
  Enviar una solicitud de eliminación
</a>
<p style="margin-top:14px">
  Para poder localizar a la familia, conviene indicar el <strong>nombre de la familia tal como está en la
  app</strong> y la fecha aproximada de instalación. Atendemos las solicitudes en un plazo de
  <strong>30 días</strong> y confirmamos por correo.
</p>

<h2>Qué se borra</h2>
<table>
  <tr><th>Qué</th><th>Cuándo</th></tr>
  <tr><td>El documento familiar en el servidor: hijos, tareas, hábitos, puntos, premios, eventos</td><td>De inmediato</td></tr>
  <tr><td>Las fotos de prueba de tareas subidas al servidor</td><td>De inmediato</td></tr>
  <tr><td>El registro de dispositivos vinculados y los códigos activos</td><td>De inmediato</td></tr>
  <tr><td>La última ubicación de los teléfonos de los niños y los tokens de notificaciones ("Encontrar el teléfono")</td><td>De inmediato</td></tr>
  <tr><td>Toda la información guardada en el propio dispositivo</td><td>De inmediato (al borrar desde la app)</td></tr>
  <tr><td>Contadores operativos anónimos: solicitudes por día, sin contenido</td><td>Hasta 48 horas</td></tr>
</table>

<div class="card note">
  <strong>La eliminación es definitiva.</strong> No hay copia de seguridad ni forma de recuperarlo. Si la
  familia quiere volver a Tori más adelante, empezará de cero.
</div>

<h2>Qué no se borra de esta forma</h2>
<ul>
  <li><strong>Una suscripción activa en la tienda.</strong> Eliminar la cuenta con nosotros no cancela la
      suscripción ni da derecho a reembolso. La cancelación se hace en la tienda donde se compró:
      <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noopener">suscripciones en la App Store</a>
      o
      <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener">suscripciones en Google Play</a>.
      Conviene cancelar <strong>antes</strong> de eliminar.</li>
  <li><strong>Información en poder de proveedores externos</strong> que procesan solicitudes de inteligencia
      artificial, sujeta a sus políticas de conservación. El contenido de las conversaciones nunca se guarda
      en nuestro servidor — ver la <a href="./privacy.html">política de privacidad</a>, sección 2.4.</li>
</ul>

<h2>Preguntas</h2>
<p><a href="mailto:${MAIL}">${MAIL}</a></p>

<footer>
  Tori · <a href="./privacy.html">Política de privacidad</a> · <a href="./index.html">Inicio</a>
</footer>`,
  },
};
