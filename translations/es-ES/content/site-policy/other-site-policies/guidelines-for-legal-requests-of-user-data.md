---
title: Directrices para las Solicitudes Legales de Datos de Usuarios
redirect_from:
  - /law-enforcement-guidelines
  - /articles/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/github-terms-and-other-site-policies/guidelines-for-legal-requests-of-user-data
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

Are you a law enforcement officer conducting an investigation that may involve user content hosted on GitHub?
Or maybe you're a privacy-conscious person who would like to know what information we share with law enforcement and under what circumstances.
Either way, you're on the right page.

In these guidelines, we provide a little background about what GitHub is, the types of data we have, and the conditions under which we will disclose private user information.
Before we get into the details, however, here are a few important details you may want to know:

- [**Notificaremos a los usuarios afectados**](#we-will-notify-any-affected-account-owners) sobre cualquier solicitud de información de su cuenta, a menos que la ley o una orden judicial lo prohíban.
- No revelaremos **datos de seguimiento de la ubicación**, como registros de direcciones IP, sin una [orden judicial válida o una orden de registro](#with-a-court-order-or-a-search-warrant).
- No revelaremos ningún **contenido de usuario privado**, incluido el contenido de repositorios privados, sin una [orden de registro](#only-with-a-search-warrant) válida.

## <a name="about-these-guidelines"></a>Acerca de estas directrices

¿Es un agente de la ley que está realizando una investigación para la que podría necesitar contenido de usuario alojado en GitHub?

¿O tal vez es una persona a la que le preocupa la privacidad y le gustaría saber qué información compartimos con las fuerzas del orden y en qué circunstancias?

En cualquiera de los dos casos, está en la página correcta.

## <a name="github-terminology"></a>Terminología de GitHub

Before asking us to disclose data, it may be useful to understand how our system is implemented.
GitHub hosts millions of data repositories using the <bpt id="p1">[</bpt>Git version control system<ept id="p1">](https://git-scm.com/video/what-is-version-control)</ept>.
Repositories on GitHub—which may be public or private—are most commonly used for software development projects, but are also often used to work on content of all kinds.

- En estas directrices, proporcionamos un poco de información sobre qué es GitHub, los tipos de datos que tenemos y las condiciones bajo las cuales divulgamos la información privada de los usuarios.

- [**Colaboradores**](/articles/github-glossary#collaborator): un colaborador es un usuario con acceso de lectura y escritura a un repositorio al que el propietario le ha invitado a colaborar.

- Sin embargo, antes de entrar en detalles, aquí tiene algunos datos importantes que quizá desee conocer:

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Repositories<ept id="p2">**</ept><ept id="p1">](/articles/github-glossary#repository)</ept> — A repository is one of the most basic GitHub elements.
They may be easiest to imagine as a project's folder.
A repository contains all of the project files (including documentation), and stores each file's revision history.
Repositories can have multiple collaborators and, at its administrators' discretion, may be publicly viewable or not.

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Pages<ept id="p2">**</ept><ept id="p1">](/articles/what-is-github-pages)</ept> — GitHub Pages are public webpages freely hosted by GitHub that users can easily publish through code stored in their repositories.
If a user or organization has a GitHub Page, it can usually be found at a URL such as <ph id="ph1">`https://username.github.io`</ph> or they may have the webpage mapped to their own custom domain name.

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Gists<ept id="p2">**</ept><ept id="p1">](/articles/creating-gists)</ept> — Gists are snippets of source code or other text that users can use to store ideas or share with friends.
Like regular GitHub repositories, Gists are created with Git, so they are automatically versioned, forkable and downloadable.
Gists can either be public or secret (accessible only through a known URL). Public Gists cannot be converted into secret Gists.

## <a name="user-data-on-githubcom"></a>Datos de usuario en GitHub.com

Esta es una lista no exhaustiva de los tipos de datos que mantenemos sobre usuarios y proyectos en GitHub.

- <bpt id="p1">&lt;a name="public-account-data"&gt;</bpt><ept id="p1">&lt;/a&gt;</ept><ph id="ph1">
</ph><bpt id="p2">**</bpt>Public account data<ept id="p2">**</ept> — There is a variety of information publicly available on GitHub about users and their repositories.
User profiles can be found at a URL such as <ph id="ph1">`https://github.com/username`</ph>.
User profiles display information about when the user created their account as well their public activity on GitHub.com and social interactions.
Public user profiles can also include additional information that a user may have chosen to share publicly.
All user public profiles display:
  - Nombre de usuario
  - Los repositorios que el usuario ha puntuado con estrellas
  - Otros usuarios de GitHub a los que sigue el usuario
  - Los usuarios que le siguen

  Opcionalmente, un usuario también puede optar por compartir públicamente la siguiente información:
  - Su verdadero nombre
  - Un avatar
  - Una empresa afiliada
  - Su ubicación
  - Una dirección de correo electrónico pública
  - Su página web personal
  - Organizaciones a las que pertenece el usuario (*dependiendo de las preferencias de las organizaciones o de los usuarios*)

- <bpt id="p1">&lt;a name="private-account-data"&gt;</bpt><ept id="p1">&lt;/a&gt;</ept><ph id="ph1">
</ph><bpt id="p2">**</bpt>Private account data<ept id="p2">**</ept> — GitHub also collects and maintains certain private information about users as outlined in our <bpt id="p3">[</bpt>Privacy Policy<ept id="p3">](/articles/github-privacy-statement)</ept>.
This may include:
  - Direcciones de correo electrónico privadas
  - Datos de pago
  - Registros de acceso de seguridad
  - Datos sobre interacciones con repositorios privados

  Para hacerse una idea del tipo de información de cuentas privadas que recopila GitHub, puede visitar su {% data reusables.user-settings.personal_dashboard %} y navegar por los apartados de la barra de menús de la izquierda.

- Nuestros usuarios nos confían sus proyectos de software y su código, algo que muchas veces son sus activos comerciales o personales más valiosos.
  - El nombre de la organización
  - Los repositorios que los propietarios han puntuado con estrellas
  - Todos los usuarios de GitHub que son propietarios de la organización

  Opcionalmente, los usuarios administrativos también pueden optar por compartir públicamente la siguiente información:
  - Un avatar
  - Una empresa afiliada
  - Su ubicación
  - Miembros directos y equipos
  - Colaboradores

- Mantener esa confianza es esencial para nosotros, lo que significa que los datos de los usuarios deben mantenerse seguros, protegidos y privados.

  - El código propiamente dicho
  - Versiones anteriores del código
  - Versiones de lanzamiento estables del proyecto
  - Información sobre colaboradores, contribuyentes y miembros del repositorio
  - Registros de operaciones de Git, como confirmaciones, ramificaciones, inserciones, extracciones, bifurcaciones y clonaciones
  - Conversaciones relacionadas con operaciones de Git, como comentarios sobre solicitudes de incorporación de cambios o confirmaciones
  - Documentación del proyecto, como problemas y páginas wiki
  - Estadísticas y gráficos que muestren las contribuciones en el proyecto y la red de colaboradores.

- <a name="private-repository-data"></a>
**Datos de repositorios privados**: GitHub recopila y mantiene el mismo tipo de datos para los repositorios privados que se pueden ver en los repositorios públicos, excepto que los usuarios invitados de forma específica pueden acceder a los datos del repositorio privado.

- <a name="other-data"></a>
**Otros datos**: además, GitHub recopila datos analíticos, como visitas a páginas e información que ocasionalmente nos ofrecen voluntariamente nuestros usuarios (como comunicaciones con nuestro equipo de soporte, información de encuestas y/o registros en el sitio).

## <a name="we-will-notify-any-affected-account-owners"></a>Notificamos a los propietarios de las cuentas afectadas.

It is our policy to notify users about any pending requests regarding their accounts or repositories, unless we are prohibited by law or court order from doing so. Before disclosing user information, we will make a reasonable effort to notify any affected account owner(s) by sending a message to their verified email address providing them with a copy of the subpoena, court order, or warrant so that they can have an opportunity to challenge the legal process if they wish. In (rare) exigent circumstances, we may delay notification if we determine delay is necessary to prevent death or serious harm or due to an ongoing investigation.

## <a name="disclosure-of-non-public-information"></a>Divulgación de información no pública

Aunque la gran mayoría de nuestros usuarios utilizan los servicios de GitHub para crear nuevos negocios, desarrollar nuevas tecnologías y mejorar la calidad de vida en general, reconocemos que entre tantos millones de usuarios repartidos por todo el mundo seguro que hay unas cuantas manzanas podridas.

- <a name="with-user-consent"></a>
****: GitHub proporciona información de cuentas privadas, si se solicita, directamente al usuario (o a un propietario, en el caso de que sea una cuenta de organización) o a un tercero designado con el consentimiento por escrito del usuario una vez que GitHub concluya que el usuario ha verificado su identidad.

- <a name="with-a-subpoena"></a>
**Con una citación**: si se presenta una citación válida, una demanda de investigación civil o un procedimiento legal similar en relación con una investigación penal o civil oficial, podemos proporcionar determinada información de las cuentas no públicas, que podría incluir:

  - Nombres asociados a la cuenta
  - Direcciones de correo electrónico asociadas a la cuenta
  - Información de facturación
  - Fecha de registro y fecha de terminación
  - Dirección IP, fecha y hora del registro de la cuenta
  - Direcciones IP utilizadas para acceder a la cuenta en un momento específico o durante un evento relevante para la investigación

En esos casos, queremos ayudar a las fuerzas del orden público a cumplir su deber legítimo de proteger a la gente.

Please note that the information available will vary from case to case. Some of the information is optional for users to provide. In other cases, we may not have collected or retained the information.

- Al proporcionar unas directrices para el personal de las fuerzas del orden, esperamos conseguir un equilibrio entre los intereses a menudo contrapuestos de la privacidad de los usuarios y la justicia.

  - cualquier registro que revele los movimientos de un usuario durante un período de tiempo;
  - la configuración de la cuenta o del repositorio privado (por ejemplo, qué usuarios tienen ciertos permisos, etc.);
  - datos analíticos específicos del usuario o de la IP, como el historial de navegación;
  - registros de acceso de seguridad, aparte de los de la creación de la cuenta o de una hora y fecha específicas.

- Esperamos que estas directrices ayuden a establecer expectativas en ambos lados, así como a mejorar la transparencia de los procesos internos de GitHub.

  - Contenido de Gists secretos
  - Código fuente u otro contenido de repositorios privados
  - Registros de contribuciones y colaboraciones en repositorios privados
  - Comunicaciones o documentación (como problemas o Wikis) en repositorios privados
  - Cualquier clave de seguridad utilizada para la autenticación o el cifrado

- Nuestros usuarios deben saber que valoramos su información privada y que hacemos todo lo posible para protegerla.

## <a name="cost-reimbursement"></a>Reembolso de los gastos

Como mínimo, esto significa que solo divulgamos datos a terceros cuando se cumplan los requisitos legales correspondientes.

Aunque no cobramos en situaciones de emergencia o en otras circunstancias extremas, solicitamos el reembolso de los gastos en todas las demás solicitudes legales de acuerdo con lo siguiente, a menos que la ley exija lo contrario:

- Búsqueda inicial de hasta 25 identificadores: gratis
- Entrega de información/datos de suscriptores de hasta cinco (5) cuentas: gratis
- Entrega de información/datos de suscriptores de más de cinco (5) cuentas: 20 USD por cuenta
- Búsquedas secundarias: 10 USD por búsqueda

## <a name="data-preservation"></a>Conservación de datos

Tomaremos medidas para conservar los registros de las cuentas hasta 90 días a petición formal de las fuerzas del orden de los EE. UU. en relación con investigaciones penales oficiales y en espera de que se emita una orden judicial o se inicie otro procedimiento.

## <a name="submitting-requests"></a>Envío de solicitudes

Envíe las solicitudes a:

```
GitHub, Inc.
c/o Corporation Service Company
2710 Gateway Oaks Drive, Suite 150N
Sacramento, CA 95833-3505
```

Como cortesía, se pueden enviar copias por correo electrónico a legal-support@github.com.

Procure que sus solicitudes sean lo más específicas y concretas posible, y que incluyan la siguiente información:

- Información completa sobre la autoridad que emite la solicitud de información
- El nombre y la insignia/identificador del agente responsable
- Una dirección de correo electrónico y un número de teléfono de contacto oficiales
- Los nombres de usuario, organización y repositorios de interés
- Las direcciones URL de cualquier página, gist o archivo de interés
- La descripción de los tipos de registros que necesita

Espere al menos dos semanas a que podamos examinar su solicitud.

## <a name="requests-from-foreign-law-enforcement"></a>Solicitudes de fuerzas del orden extranjeras

Del mismo modo, también esperamos educar a los profesionales de las fuerzas del orden sobre los sistemas de GitHub para que puedan adaptar de manera más eficiente sus solicitudes de datos y enfocarse solo en la información necesaria para realizar su investigación.

## <a name="questions"></a>Preguntas

Do you have other questions, comments or suggestions? Please contact {% data variables.contact.contact_support %}.
