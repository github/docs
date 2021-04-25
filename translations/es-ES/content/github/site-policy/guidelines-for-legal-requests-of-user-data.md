---
title: Pautas para las solicitudes legales de los datos del usuario
redirect_from:
  - /law-enforcement-guidelines/
  - /articles/guidelines-for-legal-requests-of-user-data
versions:
  free-pro-team: '*'
topics:
  - política
  - legal
---

¿Eres un agente de la policía que lleva a cabo una investigación que pueda implicar contenido de usuario alojado en GitHub? O quizá seas una persona consciente de la privacidad y te gustaría saber qué información compartimos con las fuerzas policiales y bajo qué circunstancias. Cualquiera que sea la razón, estás en la página correcta.

En estas pautas, proporcionamos algunos antecedentes sobre lo que es GitHub, los tipos de datos que tenemos y las condiciones bajo las cuales divulgaremos información privada del usuario. Sin embargo, antes de entrar en los detalles, aquí se presentan algunos detalles importantes que quizás deseas saber:

- [**Notificaremos a los usuarios afectados**](#we-will-notify-any-affected-account-owners) sobre cualquier solicitud de información de su cuenta a menos que se prohíba hacerlo por ley u orden judicial.
- No divulgaremos **datos de seguimiento de ubicación**, tales como registros de direcciones IP, sin una [orden judicial válida o orden de registro](#with-a-court-order-or-a-search-warrant).
- No divulgaremos ningún **contenido privado del usuario**, incluyendo el contenido de repositorios privados, sin una [orden de registro válida](#only-with-a-search-warrant).

### Acerca de estas pautas

Nuestros usuarios confían en nosotros con sus proyectos de software y código - a menudo algunos de sus activos personales o comerciales más valiosos. Mantener esa confianza es esencial para nosotros, lo que significa mantener los datos de los usuarios seguros y privados.

Mientras que la abrumadora mayoría de nuestros usuarios utilizan los servicios de GitHub para crear nuevas empresas, para construir nuevas tecnologías y para el mejoramiento general de la humanidad, reconocemos que con millones de usuarios repartidos por todo el mundo, no hay duda de que habrá algunas excepciones. En esos casos, deseamos ayudar a las fuerzas policiales a servir a su legítimo interés de proteger al público.

Al proporcionar pautas para el personal encargado de hacer cumplir la ley, esperamos lograr un equilibrio entre los intereses a menudo contrapuestos de la privacidad y la justicia de los usuarios. Esperamos que estas pautas ayuden a establecer expectativas por ambas partes, así como a añadir transparencia a los procesos internos de GitHub. Nuestros usuarios deben saber que valoramos su información privada y que hacemos nuestro mejor esfuerzo para protegerla. Como mínimo, esto significa la liberación de datos a terceros solo cuando se hayan cumplido los requisitos legales adecuados. Por el mismo token, también esperamos educar a los profesionales de la aplicación de la ley sobre los sistemas de GitHub, para que puedan adaptar de manera más eficiente sus solicitudes de datos y dirigir justo esa información necesaria para llevar a cabo su investigación.

### Terminología GitHub

Antes de solicitarnos que divulguemos datos, podría ser útil entender cómo se implementa nuestro sistema. GitHub aloja millones de repositorios de datos usando el [sistema de control de versiones Git](https://git-scm.com/video/what-is-version-control). Los repositorios en GitHub—que pueden ser públicos o privados—se utilizan más comúnmente para proyectos de desarrollo de software pero también se utilizan a menudo para trabajar en el contenido de todo tipo.

- [**Usuarios**](/articles/github-glossary#user) — Los usuarios están representados en nuestro sistema como cuentas personales de GitHub. Cada usuario tiene un perfil personal y puede tener múltiples repositorios. Los usuarios pueden crear o ser invitados a unirse a organizaciones o a colaborar en el repositorio de otro usuario.

- [**Colaboradores**](/articles/github-glossary#collaborator) — Un colaborador es un usuario con acceso de lectura y escritura a un repositorio que ha sido invitado a contribuir por el propietario del repositorio.

- [**Organizaciones**](/articles/github-glossary#organization) — Las organizaciones son un grupo de dos o más usuarios que normalmente reflejan las organizaciones del mundo real, como empresas o proyectos. Son administrados por usuarios y pueden contener tanto repositorios como equipos de usuarios.

- [**Repositorios**](/articles/github-glossary#repository) — Un repositorio es uno de los elementos más básicos de GitHub. Pueden ser los más fáciles de imaginar como una carpeta de un proyecto. Un repositorio contiene todos los archivos del proyecto (incluida la documentación) y almacena cada historial de revisión del archivo. Los repositorios pueden tener múltiples colaboradores y, a discreción de sus administradores, pueden ser públicos o no.

- [**Páginas**](/articles/what-is-github-pages) — Las páginas de GitHub son páginas web públicas libremente alojadas por GitHub que los usuarios pueden publicar fácilmente a través del código almacenado en sus repositorios. Si un usuario u organización tiene una página de GitHub, generalmente se puede encontrar en una URL como `https://username. ithub.io` o pueden tener la página web mapeada a su propio nombre de dominio personalizado.

- [**Gists**](/articles/creating-gists) — Gists son fragmentos de código fuente u otro texto que los usuarios pueden usar para almacenar ideas o compartir con amigos. Al igual que los repositorios normales de GitHub, las listas se crean con Git, por lo que son automáticamente versionadas, bifurcables y descargables. Las listas pueden ser públicas o secretas (accesibles solo a través de una URL conocida). Los Gists públicos no pueden convertirse en Gists secretos.

### Datos de usuario en GitHub.com

Aquí hay una lista no exhaustiva de los tipos de datos que mantenemos sobre usuarios y proyectos en GitHub.

- <a name="public-account-data"></a>
**Datos de cuenta pública** — Hay una variedad de información disponible públicamente en GitHub sobre los usuarios y sus repositorios. Los perfiles de usuario se pueden encontrar en una URL como `https://github.com/username`. Los perfiles de usuario muestran información acerca de cuándo creó su cuenta el usuario, así como su actividad pública en GitHub.com e interacciones sociales. Los perfiles de usuario públicos también pueden incluir información adicional que un usuario pudo haber decidido compartir públicamente. Visualización de todos los perfiles públicos del usuario:
  - Nombre de usuario
  - Los repositorios que el usuario ha marcado
  - Los otros usuarios de GitHub que el usuario sigue
  - Los usuarios que los siguen

  Opcionalmente, un usuario también puede elegir compartir la siguiente información públicamente:
  - Su nombre real
  - Un avatar
  - Una empresa afiliada
  - Su ubicación
  - Una dirección de correo electrónico pública
  - Su página web personal
  - Organizaciones de las que el usuario es miembro (*dependiendo de las preferencias de las organizaciones o de los usuarios*)

- <a name="private-account-data"></a>
**Datos privados de la cuenta** — GitHub también recopila y mantiene cierta información privada sobre los usuarios como se describe en nuestra [Política de Privacidad](/articles/github-privacy-statement).+ Puede incluir:
  - Direcciones de correo electrónico privadas
  - Detalles de pago
  - Registros de acceso de seguridad
  - Datos sobre interacciones con los repositorios privados

  Para obtener un sentido del tipo de información de cuenta privada que recopila GitHub, puedes visitar tu {% data reusables.user_settings.personal_dashboard %} y navegar por las secciones de la barra de menú de la izquierda.

- <a name="organization-account-data"></a>
**Datos de cuenta de la organización** — La información sobre organizaciones, sus usuarios administrativos y repositorios está disponible públicamente en GitHub. Los perfiles de la organización se pueden encontrar en una URL como `https://github.com/organization`. Los perfiles de las organizaciones públicas también pueden incluir información adicional que los propietarios han decidido compartir públicamente. Visualización de todos los perfiles públicos de la organización:
  - Nombre de la organización
  - Los repositorios que los propietarios han marcado
  - Todos los usuarios de GitHub que son propietarios de la organización

  Opcionalmente, los usuarios administrativos también pueden optar por compartir públicamente la siguiente información:
  - Un avatar
  - Una empresa afiliada
  - Su ubicación
  - Miembros directos y equipos
  - Colaboradores

- <a name="public-repository-data"></a>
**Datos del repositorio público**</strong> — GitHub es el hogar de millones de proyectos públicos de software de código público. Puede navegar casi cualquier repositorio público (por ejemplo, el [Proyecto Atom](https://github.com/atom/atom)) para tener un sentido de la información que GitHub recopila y mantiene sobre repositorios. Puede incluir:

  - El código
  - Versiones anteriores del código
  - Versiones de lanzamiento estables del proyecto
  - Información sobre colaboradores, contibuyentes y miembros del repositorio
  - Registros de operaciones de Git como confirmaciones, ramificar, subir, extraer, bifurcar y clonar
  - Conversaciones relacionadas con operaciones de Git como comentarios sobre solicitudes de extracción o confirmaciones
  - Documentación del proyecto como Cuestiones y páginas Wiki
  - Estadísticas y gráficos que muestran contribuciones al proyecto y a la red de colaboradores

- <a name="private-repository-data"></a>
**Datos privados del repositorio** — GitHub recopila y mantiene el mismo tipo de datos para los repositorios privados que se pueden ver en los repositorios públicos, excepto que solamente los usuarios invitados específicamente puedan acceder a los datos del repositorio privado.

- <a name="other-data"></a>
**Otros datos** - Adicionalmente, GitHub recopila datos analíticos tales como visitas de páginas e información ocasionalmente voluntaria por nuestros usuarios (por ejemplo, comunicaciones con nuestro equipo de soporte, información de la encuesta y/o registros del sitio).

### Notificaremos a los propietarios de las cuentas afectadas

Es nuestra política notificar a los usuarios sobre cualquier solicitud pendiente con respecto a sus cuentas o repositorios, a menos que se nos prohíba por ley u orden judicial hacerlo. Antes de revelar la información del usuario haremos un esfuerzo razonable para notificar a cualquier dueño de la cuenta afectada enviando un mensaje a su dirección de correo electrónico verificada proporcionándoles una copia de la cita, orden judicial u orden para que puedan tener la oportunidad de impugnar el proceso legal si lo desean. En circunstancias (raras) exigentes, podemos retrasar la notificación si determinamos que el retraso es necesario para prevenir la muerte o daños graves.

### Divulgación de información no pública

Es nuestra política divulgar información de usuario no pública en relación con una investigación civil o criminal solo con el consentimiento del usuario o tras la recepción de una citación válida, demanda de investigación civil, orden judicial, orden de búsqueda u otro proceso legal válido similar. En ciertas circunstancias exigentes (véase abajo), también podemos compartir información limitada pero sólo correspondiente a la naturaleza de las circunstancias y requeriremos un proceso legal para cualquier tema adicional. GitHub se reserva el derecho de objetar cualquier solicitud de información no pública. Cuando GitHub acuerde producir información no pública en respuesta a una solicitud legal, realizaremos una búsqueda razonable para la información solicitada. Estos son los tipos de información que acordaremos producir, dependiendo del tipo de proceso legal que atendamos:

- <a name="with-user-consent"></a>
**Con el consentimiento del usuario** — GitHub proporcionará información de cuenta privada, si se solicita, directamente al usuario (o un propietario, en el caso de una cuenta de organización) o a un tercero designado con el consentimiento por escrito del usuario una vez que GitHub esté satisfecho de que el usuario haya verificado su identidad.

- <a name="with-a-subpoena"></a>
**Con una citación ** — Si atiende una solicitud de investigación civil válida o un proceso legal similar emitido en relación con una investigación penal o civil oficial, podemos proporcionar cierta información de cuenta no pública, que puede incluir:

  - Nombre(s) asociados con la cuenta
  - Dirección(es) de correo electrónico asociada(s) a la cuenta
  - Información de facturación
  - Fecha de registro y fecha de finalización
  - Dirección IP, fecha y hora al momento del registro de la cuenta
  - Dirección(es) IP utilizada para acceder a la cuenta en un momento o evento específico relevante para la investigación

En el caso de cuentas de organización, podemos proporcionar el(los) nombre(s) y la(s) dirección(es) de correo electrónico del propietario(s) de la cuenta, así como la fecha y la dirección IP en el momento de la creación de la cuenta de la organización. No produciremos información sobre otros miembros o colaboradores, si existen, a la cuenta de la organización o cualquier información adicional relacionada con el propietario o dueño de la cuenta identificada sin una solicitud de seguimiento para esos usuarios específicos.

Tenga en cuenta que la información disponible variará de un caso a otro. Parte de la información es opcional para que los usuarios la proporcionen. En otros casos, es posible que no hayamos recopilado ni conservado la información.

- <a name="with-a-court-order-or-a-search-warrant"></a>
**Con una orden judicial *o* una orden de registro** — No divulgaremos registros de acceso a la cuenta a menos que se nos obligue a hacerlo por (i) una orden judicial emitida bajo 18 U. S.C. Sección 2703(d), sobre una muestra de hechos específicos y articulables que demuestran que existen motivos razonables para creer que la información solicitada es relevante y material para una investigación criminal en curso; o (ii) una orden de búsqueda emitida bajo los procedimientos descritos en las Normas Federales de Procedimiento Penal o procedimientos equivalentes de la orden estatal sobre una muestra de causa probable. Además de la información no pública de la cuenta de usuario listada anteriormente podemos proporcionar registros de acceso a la cuenta en respuesta a una orden judicial o a una orden de registro, que puede incluir:

  - Cualquier registro que revele los movimientos de un usuario a lo largo de un período de tiempo
  - Configuración de la cuenta o repositorio privado (por ejemplo, qué usuarios tienen ciertos permisos, etc.)
  - Datos analíticos específicos del usuario o IP, como el historial de navegación
  - Registros de acceso de seguridad distintos a la creación de cuentas o para una fecha y hora específica

- <a name="only-with-a-search-warrant"></a>
**Sólo con una orden de registro** — No divulgaremos el contenido privado de ninguna cuenta de usuario a menos que se lo obligue a hacerlo bajo una orden de registro emitida de acuerdo con los procedimientos descritos en las Normas Federales de Procedimiento Penal o procedimientos equivalentes de la orden estatal al mostrar una causa probable. Además de la información no pública de la cuenta de usuario y los registros de acceso a la cuenta mencionados anteriormente también proporcionaremos contenido privado de la cuenta de usuario en respuesta a una orden de registro, que puede incluir:

  - Contenidos de Gists secretos
  - Código fuente u otro contenido en los repositorios privados
  - Registros de contribución y colaboración para los repositorios privados
  - Comunicaciones o documentación (como Cuestiones o Wikis) en depósitos privados
  - Cualquier clave de seguridad usada para autenticación o cifrado

- <a name="in-exigent-circumstances"></a>
**Bajo circunstancias exigentes** — Si recibimos una solicitud de información bajo ciertas circunstancias exigentes (donde creemos que la divulgación es necesaria para prevenir una emergencia que implique peligro de muerte o lesiones físicas graves a una persona), podemos divulgar información limitada que determinamos necesaria para permitir que las fuerzas policiales atiendan la emergencia. Para cualquier información adicional, necesitaríamos una citación, una orden de registro, una orden judicial, como se describe anteriormente. Por ejemplo, no divulgaremos contenidos de repositorios privados sin una orden de registro. Antes de divulgar la información, confirmamos que la solicitud procedía de una agencia policial, que una autoridad haya enviado una notificación oficial resumiendo la emergencia y cómo la información solicitada ayudará a resolver la emergencia.

### Reembolso de costes

Bajo la ley federal y estatal, GitHub podrá buscar el reembolso de los costos asociados con el cumplimiento con una demanda legal válida, tal como una citación, orden judicial o orden de búsqueda. Solo cobramos la cantidad de los cargos de recuperación y dichos reembolsos solo cubren una parte de los costos que realmente incurrimos para cumplir con las órdenes legales.

Si bien no hacemos cargos en situaciones de emergencia o en otras circunstancias exigentes, buscamos el reembolso por todo el resto de las solicitudes legales de acuerdo con la siguiente programación, a menos de que se requiera legalmente de otra forma:

- Búsqueda inicial de hasta 25 identificadores: Gratuita
- Información/datos de suscripción o producción hasta 5 cuentas: Gratuito
- Información/datos de suscripción o producción en más de 5 cuentas: $20 por cuenta
- Búsquedas secundarias: $10 por búsqueda

### Conservación de datos

Tomaremos medidas para preservar los registros de la cuenta por hasta 90 días desde que se tenga una solicitud formal de las autoridades policiales de los EE. UU. en conexión con las investigaciones criminales oficiales, y pendiente de emitir una orden judicial u otro proceso.

### Cómo enviar solicitudes

Envía solicitudes a:

```
GitHub, Inc.
c/o Corporation Service Company
2710 Gateway Oaks Drive, Suite 150N
Sacramento, CA 95833-3505
```

Por favor, realiza tus solicitudes lo más específicas y limitadas posible, incluyendo la siguiente información:

- Información completa sobre la autoridad que emite la solicitud de información
- El nombre y el gafete/ID del agente responsable
- Una dirección de correo electrónico oficial y número de teléfono de contacto
- El usuario, organización, nombre(s) del repositorio de interés
- Las URLs de cualquier página, lista o archivos de interés
- La descripción de los tipos de registros que necesitas

Por favor, espera al menos dos semanas para que podamos examinar tu solicitud.

### Solicitudes de aplicación de la ley extranjera

Como empresa de Estados Unidos con sede en California, GitHub no está obligada a proporcionar datos a los gobiernos extranjeros en respuesta al proceso legal emitido por autoridades extranjeras. Los funcionarios encargados de hacer cumplir la ley extranjera que deseen solicitar información a GitHub deben ponerse en contacto con la Oficina de Asuntos Internacionales del Departamento de Justicia de los Estados Unidos. GitHub responderá rápidamente a las solicitudes que se emitan a través del tribunal de los Estados Unidos mediante un tratado de asistencia legal mutuo (“MLAT”) o exhorto. mediante un tratado de asistencia legal mutuo (“MLAT”) o exhorto.

### Preguntas

¿Tiene otras preguntas, comentarios o sugerencias? Ponte en contacto con {% data variables.contact.contact_support %}.
