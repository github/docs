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
ms.openlocfilehash: 991c060af22a9161e026aa396037a1d52e66fcea
ms.sourcegitcommit: d298d354a4585e6c154f2a8428aebb214d49e2a1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/07/2022
ms.locfileid: '147858626'
---
¿Es un agente de la ley que está realizando una investigación para la que podría necesitar contenido de usuario alojado en GitHub?
¿O tal vez es una persona a la que le preocupa la privacidad y le gustaría saber qué información compartimos con las fuerzas del orden y en qué circunstancias?
En cualquiera de los dos casos, está en la página correcta.

En estas directrices, proporcionamos un poco de información sobre qué es GitHub, los tipos de datos que tenemos y las condiciones bajo las cuales divulgamos la información privada de los usuarios.
Sin embargo, antes de entrar en detalles, aquí tiene algunos datos importantes que quizá desee conocer:

- [**Notificaremos a los usuarios afectados**](#we-will-notify-any-affected-account-owners) sobre cualquier solicitud de información de su cuenta, a menos que la ley o una orden judicial lo prohíban.
- No revelaremos **datos de seguimiento de la ubicación**, como registros de direcciones IP, sin una [orden judicial válida o una orden de registro](#with-a-court-order-or-a-search-warrant).
- No revelaremos ningún **contenido de usuario privado**, incluido el contenido de repositorios privados, sin una [orden de registro](#only-with-a-search-warrant) válida.

## Acerca de estas directrices

Nuestros usuarios nos confían sus proyectos de software y su código, algo que muchas veces son sus activos comerciales o personales más valiosos.
Mantener esa confianza es esencial para nosotros, lo que significa que los datos de los usuarios deben mantenerse seguros, protegidos y privados.

Aunque la gran mayoría de nuestros usuarios utilizan los servicios de GitHub para crear nuevos negocios, desarrollar nuevas tecnologías y mejorar la calidad de vida en general, reconocemos que entre tantos millones de usuarios repartidos por todo el mundo seguro que hay unas cuantas manzanas podridas.
En esos casos, queremos ayudar a las fuerzas del orden público a cumplir su deber legítimo de proteger a la gente.

Al proporcionar unas directrices para el personal de las fuerzas del orden, esperamos conseguir un equilibrio entre los intereses a menudo contrapuestos de la privacidad de los usuarios y la justicia.
Esperamos que estas directrices ayuden a establecer expectativas en ambos lados, así como a mejorar la transparencia de los procesos internos de GitHub.
Nuestros usuarios deben saber que valoramos su información privada y que hacemos todo lo posible para protegerla.
Como mínimo, esto significa que solo divulgamos datos a terceros cuando se cumplan los requisitos legales correspondientes.
Del mismo modo, también esperamos educar a los profesionales de las fuerzas del orden sobre los sistemas de GitHub para que puedan adaptar de manera más eficiente sus solicitudes de datos y enfocarse solo en la información necesaria para realizar su investigación.

## Terminología de GitHub

Antes de pedirnos que divulguemos datos, podría ser útil saber cómo está implementado nuestro sistema.
GitHub aloja millones de repositorios de datos con el [sistema de control de versiones Git](https://git-scm.com/video/what-is-version-control).
Los repositorios de GitHub, que pueden ser públicos o privados, se suelen utilizar para proyectos de desarrollo de software, pero también se usan a menudo para trabajar en contenido de todo tipo.

- [**Usuarios**](/articles/github-glossary#user): los usuarios están representados en nuestro sistema como cuentas personales de GitHub.
Cada usuario tiene un perfil personal y puede poseer varios repositorios.
Los usuarios pueden crear organizaciones o ser invitados a unirse a ellas o colaborar en el repositorio de otro usuario.

- [**Colaboradores**](/articles/github-glossary#collaborator): un colaborador es un usuario con acceso de lectura y escritura a un repositorio al que el propietario le ha invitado a colaborar.

- [**Organizaciones**](/articles/github-glossary#organization): las organizaciones son un grupo de dos o más usuarios que normalmente reflejan organizaciones del mundo real, como negocios o proyectos.
Las administran usuarios y pueden contener tanto repositorios como equipos de usuarios.

- [**Repositorios**](/articles/github-glossary#repository): un repositorio es uno de los elementos más básicos de GitHub.
Es similar a la carpeta de un proyecto.
Un repositorio contiene todos los archivos del proyecto (incluida la documentación) y almacena el historial de revisión de cada archivo.
Los repositorios pueden tener múltiples colaboradores y, a discreción de sus administradores, pueden ser visibles públicamente o no.

- [**Pages**](/articles/what-is-github-pages): GitHub Pages son páginas web públicas alojadas gratuitamente por GitHub que los usuarios pueden publicar fácilmente a través del código almacenado en sus repositorios.
Si un usuario u organización tiene una página de GitHub, esta se suele encontrar en una URL como `https://username.github.io` o podría tener la página web asignada a su propio nombre de dominio personalizado.

- [**Gists**](/articles/creating-gists): los Gists son fragmentos de código fuente u otro texto que los usuarios pueden usar para almacenar ideas o compartirlos con amigos.
Al igual que los repositorios normales de GitHub, los Gists se crean con Git, por lo que se versionan, bifurcan y descargan automáticamente.
Los Gists pueden ser públicos o secretos (solo se puede acceder a ellos a través de una URL conocida). Los Gists públicos no se pueden convertir en Gists secretos.

## Datos de usuario en GitHub.com

Esta es una lista no exhaustiva de los tipos de datos que mantenemos sobre usuarios y proyectos en GitHub.

- <a name="public-account-data"></a>
**Datos de cuentas públicas**: en GitHub hay una gran variedad de información disponible públicamente sobre los usuarios y sus repositorios.
Los perfiles de usuario se pueden encontrar en una URL como `https://github.com/username`.
Los perfiles de usuario muestran información sobre cuándo creó su cuenta el usuario, así como su actividad pública en GitHub.com y sus interacciones sociales.
Los perfiles de usuario públicos también pueden incluir información adicional que un usuario puede haber decidido compartir públicamente.
En todos los perfiles de usuario públicos se muestra lo siguiente:
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

- <a name="private-account-data"></a>
**Datos de cuentas privadas**: GitHub también recopila y mantiene determinada información privada sobre los usuarios de la forma en que se describe en nuestra [Directiva de Privacidad](/articles/github-privacy-statement).
Esto puede incluir:
  - Direcciones de correo electrónico privadas
  - Datos de pago
  - Registros de acceso de seguridad
  - Datos sobre interacciones con repositorios privados

  Para hacerse una idea del tipo de información de cuentas privadas que recopila GitHub, puede visitar su {% data reusables.user-settings.personal_dashboard %} y navegar por los apartados de la barra de menús de la izquierda.

- <a name="organization-account-data"></a>
**Datos de cuentas de organizaciones**: en GitHub, la información sobre las organizaciones, sus usuarios administrativos y los repositorios está disponible públicamente.
Los perfiles de organización se pueden encontrar en una URL como `https://github.com/organization`.
Los perfiles de organización públicos también pueden incluir información adicional que los propietarios podrían haber decidido compartir públicamente.
En todos los perfiles de organización públicos se muestra lo siguiente:
  - El nombre de la organización
  - Los repositorios que los propietarios han puntuado con estrellas
  - Todos los usuarios de GitHub que son propietarios de la organización

  Opcionalmente, los usuarios administrativos también pueden optar por compartir públicamente la siguiente información:
  - Un avatar
  - Una empresa afiliada
  - Su ubicación
  - Miembros directos y equipos
  - Colaboradores

- <a name="public-repository-data"></a>
**Datos de repositorios públicos**: GitHub alberga millones de proyectos de software de código abierto públicos.
Puede examinar casi cualquier repositorio público (por ejemplo, el [proyecto Atom](https://github.com/atom/atom)) para hacerse una idea de la información que GitHub recopila y mantiene sobre los repositorios.
Esto puede incluir:

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

## Notificamos a los propietarios de las cuentas afectadas.

Nuestra directiva nos obliga a notificar a los usuarios sobre cualquier solicitud pendiente con respecto a sus cuentas o repositorios, a menos que nos lo prohíba la ley o una orden judicial. Antes de divulgar la información del usuario, haremos todo el esfuerzo razonable para notificar a los propietarios de las cuentas afectadas enviándoles un mensaje a su dirección de correo electrónico verificada con una copia de la citación, orden judicial u orden de registro para que tengan la oportunidad de impugnar el proceso legal si así lo desean. En circunstancias extremas (muy raras), podríamos retrasar la notificación si determinamos que esa demora es necesaria para evitar una muerte o daños graves o porque hay una investigación en curso.

## Divulgación de información no pública

Es nuestra política divulgar información de usuario no pública en relación con una investigación civil o penal solo con el consentimiento del usuario o cuando recibimos una citación válida, una demanda de investigación civil, una orden judicial, una orden de registro u otro procedimiento legal válido similar. En ciertas circunstancias extremas (descritas a continuación), también podríamos compartir información limitada, pero solo si se aplica a la naturaleza de las circunstancias. Por lo demás, necesitamos que haya un procedimiento legal.
GitHub se reserva el derecho de oponerse a cualquier solicitud de información no pública.
Si GitHub acepta entregar información no pública en respuesta a una solicitud legal, realizaremos una búsqueda razonable de la información solicitada.
Estos son los tipos de información que aceptaremos entregar, según el tipo de procedimiento legal que se nos notifique:

- <a name="with-user-consent"></a>
: GitHub proporciona información de cuentas privadas, si se solicita, directamente al usuario (o a un propietario, en el caso de que sea una cuenta de organización) o a un tercero designado con el consentimiento por escrito del usuario una vez que GitHub concluya que el usuario ha verificado su identidad.

- <a name="with-a-subpoena"></a>
**Con una citación**: si se presenta una citación válida, una demanda de investigación civil o un procedimiento legal similar en relación con una investigación penal o civil oficial, podemos proporcionar determinada información de las cuentas no públicas, que podría incluir:

  - Nombres asociados a la cuenta
  - Direcciones de correo electrónico asociadas a la cuenta
  - Información de facturación
  - Fecha de registro y fecha de terminación
  - Dirección IP, fecha y hora del registro de la cuenta
  - Direcciones IP utilizadas para acceder a la cuenta en un momento específico o durante un evento relevante para la investigación

En el caso de cuentas de organizaciones, podemos proporcionar los nombres y las direcciones de correo electrónico de los propietarios de las cuentas, así como la fecha de creación de la cuenta de la organización y la dirección IP desde la que se creó. No entregaremos información sobre otros miembros o colaboradores, si los hay, de la cuenta de la organización ni ninguna información adicional sobre los propietarios de la cuenta identificados sin una solicitud de seguimiento para esos usuarios específicos.

Tenga en cuenta que la información disponible variará de un caso a otro. Alguna información es opcional para los usuarios. En otros casos, es posible que no hayamos recopilado o conservado la información.

- <a name="with-a-court-order-or-a-search-warrant"></a>
**Con una orden judicial *o* una orden de registro**: no revelaremos los registros de acceso a la cuenta a menos que se nos obligue a hacerlo por medio de (i) una orden judicial emitida en virtud del 18 USC apartado 2703(d), cuando se demuestre que hay datos específicos y razonables de que existen motivos para creer que la información solicitada es relevante e importante para una investigación penal en curso; o (ii) una orden de registro emitida conforme a los procedimientos descritos en las Reglas Federales de Procedimientos Penales o los procedimientos de órdenes de registro estatales equivalentes, previa demostración de que existe una causa probable.
Además de la información de la cuenta no pública mencionada más arriba, podemos proporcionar registros de acceso a la cuenta en respuesta a una orden judicial o una orden de registro, que pueden incluir:

  - cualquier registro que revele los movimientos de un usuario durante un período de tiempo;
  - la configuración de la cuenta o del repositorio privado (por ejemplo, qué usuarios tienen ciertos permisos, etc.);
  - datos analíticos específicos del usuario o de la IP, como el historial de navegación;
  - registros de acceso de seguridad, aparte de los de la creación de la cuenta o de una hora y fecha específicas.

- <a name="only-with-a-search-warrant"></a>
**Solo con orden de registro**: no revelaremos el contenido privado de ninguna cuenta a menos que se nos obligue a hacerlo en virtud de una orden de registro emitida conforme a los procedimientos descritos en las Reglas Federales de Procedimientos Penales o los procedimientos de órdenes de registro estatales equivalentes, previa demostración de que existe una causa probable.
Además de la información no pública de la cuenta y los registros de acceso a la cuenta mencionados más arriba, también proporcionaremos el contenido privado de la cuenta en respuesta a una orden de registro, que puede incluir lo siguiente:

  - Contenido de Gists secretos
  - Código fuente u otro contenido de repositorios privados
  - Registros de contribuciones y colaboraciones en repositorios privados
  - Comunicaciones o documentación (como problemas o Wikis) en repositorios privados
  - Cualquier clave de seguridad utilizada para la autenticación o el cifrado

- <a name="in-exigent-circumstances"></a>
**En circunstancias extremas**: si recibimos una solicitud de información bajo ciertas circunstancias extremas (cuando creamos que es necesario divulgarla para evitar una emergencia que implique un peligro mortal o lesiones físicas graves para una persona), podemos divulgar la información limitada que determinemos necesaria para permitir que las fuerzas del orden atiendan la emergencia. Para cualquier otra información, necesitaríamos una citación, una orden de registro o una orden judicial, como se ha explicado más arriba. Por ejemplo, no divulgaremos el contenido de repositorios privados sin una orden de registro. Antes de divulgar información, confirmamos que la solicitud proviene de un organismo del orden público, que una autoridad ha enviado una notificación oficial en la que se resume la emergencia y cómo la información solicitada ayudará a atender la emergencia.

## Reembolso de los gastos

De acuerdo con la ley estatal y federal, GitHub puede solicitar el reembolso de los gastos asociados con el cumplimiento de una demanda legal válida, como una citación, una orden judicial o una orden de registro. Solo cobramos algunos gastos y estos reembolsos cubren solo una parte de los gastos en los que realmente incurrimos para cumplir las órdenes legales.

Aunque no cobramos en situaciones de emergencia o en otras circunstancias extremas, solicitamos el reembolso de los gastos en todas las demás solicitudes legales de acuerdo con lo siguiente, a menos que la ley exija lo contrario:

- Búsqueda inicial de hasta 25 identificadores: gratis
- Entrega de información/datos de suscriptores de hasta cinco (5) cuentas: gratis
- Entrega de información/datos de suscriptores de más de cinco (5) cuentas: 20 USD por cuenta
- Búsquedas secundarias: 10 USD por búsqueda

## Conservación de datos

Tomaremos medidas para conservar los registros de las cuentas hasta 90 días a petición formal de las fuerzas del orden de los EE. UU. en relación con investigaciones penales oficiales y en espera de que se emita una orden judicial o se inicie otro procedimiento.

## Envío de solicitudes

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

## Solicitudes de fuerzas del orden extranjeras

Como empresa de Estados Unidos con sede en California, GitHub no está obligada a proporcionar datos a gobiernos extranjeros en respuesta a procedimientos legales iniciados por autoridades extranjeras.
Los agentes de las fuerzas del orden extranjeros que deseen solicitar información de GitHub deben comunicarse con la Oficina de Asuntos Internacionales de la División Penal del Departamento de Justicia de los Estados Unidos.
GitHub responderá de inmediato a las solicitudes que se emitan a través de un tribunal de los EE. UU. por medio de un tratado de asistencia legal mutua («MLAT») o carta rogatoria.

## Preguntas

¿Tiene otras preguntas, comentarios o sugerencias? Póngase en contacto con {% data variables.contact.contact_support %}.
