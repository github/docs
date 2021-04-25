---
title: Política de Eliminación de Información Privada de GitHub
redirect_from:
  - /articles/github-sensitive-data-removal-policy
  - /github/site-policy/github-sensitive-data-removal-policy
versions:
  free-pro-team: '*'
topics:
  - política
  - legal
---

Ofrecemos este proceso de eliminación de información privada como un servicio excepcional únicamente para el contenido de alto riesgo que viola las [Condiciones de Servicio de GitHub](/github/site-policy/github-acceptable-use-policies#3-conduct-restrictions), tal como cuando tu seguridad está en riesgo debido a que se expusieron tus credenciales de acceso. Esta guía describe la información que GitHub necesita de ti para procesar una solicitud para eliminar la información privada de un repositorio.

### ¿Qué es la información privada?

Para los propósitos de este documento, "información privada" se refiere al contenido que (i) debe haberse mantenido como confidencial, *y* (ii) cuya disponibilidad al público representa un riesgo específico o dirigido de seguridad para tu organización.

"Riesgo de seguridad" se refiere a una situación que involucra la exposición a un daño físico, robo de identidad o posibilidad incrementada de acceso no autorizado a las instalaciones físicas o de red.

#### Las solicitudes de eliminación de la información privada son adecuadas para:
- Credenciales de acceso, como nombres de usuario combinados con contraseñas, tokens de acceso, u otros secretos sensibles que pueden conceder acceso al servidor, red o dominio de tu organización.
- Los token AWS y otras credenciales de acceso similares que conceden acceso a un tercero en tu nombre. Debes tener la capacidad de mostrar que el token te pertenece.
- Documnetación (tal como diagramas de red o de arquitectura) que posea un riesgo de seguridad específico para una organización.
- [Información](/github/site-policy/github-community-guidelines#doxxing-and-invasion-of-privacy) relacionada con y que represente un riesgo de seguridad para ti, como individuo (tal como números de seguridad social u otros números de identificación gubernamental).

#### Las solicitudes de eliminación de información privada _no_ son adecuados para:
- Nombres de servidores internos, direcciones IP y URL, por sí solos. Debes poder demostrar que su uso en un archivo en particular o una pieza de código representan un riesgo de seguridad.
- Menciones simples de la identidad de tu empresa, nombre, marca, nombre de dominio, u otras referencias a tu empresa en archivos en GitHub. Debes poder explicar por qué el utilizar la identidad de tu empresa representa un riesgo a la postura de seguridad de ella.
- Archivos completos o repositorios que no plantean un riesgo de seguridad específico, pero consideras que son censurables de otro modo.
- Solicitudes para eliminar contenido que pueda infringir los derechos de autor de tu empresa o de tu organización. Si tienes preguntas sobre cómo maneja GitHub los asuntos relacionados con los derechos de autor o te gustaría informar sobre contenido que potencialmente infractor, por favor revisa nuestra [política de retiro DMCA](/articles/dmca-takedown-policy/). No se pretende generalmente que el proceso de eliminación de información privada se utilice para eliminar archivos o repositorios completos, sino únicamente pedazos específicos de la información privada que estos contienen. Si bien podrían existir casos en donde los archivos se llenen integralmente con información privada, debes justificar el riesgo de seguridad para eliminar dichos archivos y esto podría aumentar el tiempo que se necesita para procesar tu solicitud.
- Disputas de marcas registradas. Si tiene preguntas sobre cómo maneja GitHub los asuntos relacionados con la marca o deseas informar sobre contenido que contiene marcas comerciales o marcas de servicio, revisa nuestra [Política de Marcas](/articles/github-trademark-policy/).
- Reclamaciones de privacidad. Si quieres acceder, transferir, cambiar o borrar tu información personal en GitHub, por favor, contáctanos a través de nuestro [Formato de contacto para la Privacidad](https://github.com/contact/privacy).
- Contenido regido por nuestras [Directrices de la comunidad](/articles/github-community-guidelines/), tales como malware o herramientas de uso general. Si tienes dudas sobre nuestros Lineamientos de Comunidad crees que algún contenido de GitHub podría violarlos, puedes utilizar {% data variables.contact.report_content %} para contactarnos.

### Cosas que debes saber

**Realiza preguntas educadamente.** Un gran primer paso antes de enviarnos una solicitud para eliminar datos es intentar contactar directamente con el usuario. Pueden haber ingresado información de contacto en su página de perfil público o en el archivo de soporte o README del repositorio o podrías ponerte en contacto creando una propuesta o solicitud de extracción en el repositorio. Esto no es estrictamente necesario, pero es común.

**Sin bots.** Debes tener un profesional capacitado para evaluar los hechos de cada solicitud que envíes. Si estás subcontratando tus labores a un tercero, asegúrate de saber cómo trabaja y asegúrate que no estén utilizando bots automatizados para presentar quejas en masa. Estas quejas a menudo incluyen datos que no suponen ninguna amenaza para la seguridad y no incluyen suficientes explicaciones, que requieran un retroceso adicional y resulten en retrasos, incluso cuando la queja es válida.

**Envía la solicitud correcta.** Como se explica anteriormente, ofrecemos este proceso de eliminación de información privada como un servicio excepcional únicamente para el contenido de alto riesgo. No podemos utilizar este proceso para eliminar otro tipo de contenido, tal como contenido que pudiera vulnerar derechos potencialmente y no podemos procesar ningún otro tipo de solicitudes de eliminación simultáneamente mientras procesamos las solicitudes de eliminación de información privada. Podremos ayudarte más rápidamente si envías las solicitudes de eliminación de información privada por separado de cualquier otra solicitud para eliminar contenido que vulnere derechos potencialmente. Si no estás seguro si tu solicitud involucra únicamente información privada o si también involucra otros asuntos legales, por favor, busca asesoramiento legal.

**Tiempo de procesamiento.** Si bien procesamos las solicitudes de eliminación de información privada tan pronto como nos es posible, debido al volúmen de solicitudes que rocesamos, podría tomarnos algo de tiempo revisar la tuya. Las solicitudes adicionales, o múltiples solicitudes de puntos de contacto adicionales, pueden provocar retrasos.

### ¿Cómo funciona realmente?

1. **El reclamante investiga.** Corresponde a la parte solicitante llevar a cabo su propia investigación y proporcionarnos los [detalles que necesitamos](#your-request-must-include) — lo que es más importante, una explicación de cómo los datos plantean un riesgo para la seguridad. GitHub no se encuentra en una posición para buscar o hacer determinaciones iniciales sobre la información privada en nombre de ningún individuo u organización.

2. **El quejoso es quien envía la solicitud de eliminación de información privada.** Después de llevar a cabo una investigación, el quejoso se preparará y [enviará una solicitud de eliminación de información privada ](#sending-a-private-information-removal-request) a GitHub. Si la solicitud no está lo suficientemente detallada para demostrar el riesgo de seguridad y para que GitHub localice los datos, te responderemos y te solicitaremos más información.

3. **GitHub pide a los usuarios hacer los cambios.** En la mayoría de los casos, contactaremos al usuario que creó el repositorio y le daremos la oportunidad de borrar o modificar la información privada que se especifica en la solicitud o de disputar el reclamo.

4. **El usuario notifica a GitHub de los cambios.** Si el usuario decide realizar los cambios especificados, debe comunicarnos dentro del período de tiempo que hayan sido permitidos. Si no lo hace, deshabilitaremos el repositorio. Si el usuario nos notifica que ha realizado cambios, verificaremos que los cambios se hayan realizado y notificaremos al demandante.

  O

5. **El usuario podría disputar la solicitud.** Si un usuario cree que el contenido en cuestión no constituye información privada que esté sujeta a esta Política, podrían disputarlo. Si lo hacen, generalmente dejaremos que el demandante se ponga en contacto con el usuario y trabaje directamente con él, dentro de los límites razonables.

6. **Cambios a las revisiones del demandante.** Si el usuario realiza cambios, el demandante debe revisarlos. Si los cambios son insuficientes, el demandante debe proporcionar a GitHub detalles explicando por qué. GitHub puede desactivar el repositorio o dar al usuario una oportunidad adicional de hacer los cambios.

7. **Los usuarios podrían solicitar una ventana de tiempo adicional para realizar los cambios.** Si el usuario no aprovechó la oportunidad para eliminar la información privada que se especifica en la notificación, podremos permitirles una ventana de tiempo adicional de aproximadamente 1 día laboral, bajo solicitud, para realizar los cambios pertinentes. En ese caso, GitHub notificará al demandante.

#### ¿Qué hay de las bifurcaciones? (o ¿Qué es una bifurcación?)
Una de las mejores características de GitHub es la capacidad de los usuarios de "bifurcar" los repositorios de otros. ¿Qué significa esto? En esencia, significa que los usuarios pueden hacer una copia de un proyecto en GitHub en sus propios repositorios. Como la licencia o la ley permite, los usuarios pueden hacer cambios en esa bifurcación para volver al proyecto principal o simplemente mantener como su propia variación de un proyecto. Cada una de estas copias es una "[bifurcación](/articles/github-glossary/#fork)" del repositorio original, que a su vez también se puede llamar la "matriz" de la bifurcación.

GitHub no deshabilitará automáticamente las bifurcaciones cuando se deshabilite un repositorio matriz. Esto se debe a que las bifurcaciones pertenecen a diferentes usuarios y pueden haber sido alteradas de manera significativa. GitHub no lleva a cabo ninguna investigación independiente sobre las bifucaciones. Esperamos que aquellos que envían solicitudes de eliminación de información privada lleven a cabo esta investigación y, en caso de que crean que las bifurcaciones también contienen información privada, las incluyan expresamente en su solicitud.

Si en el momento en el que emitiste tu notificación identificaste todas las bifurcaciones existentes en ese repositorio, podríamos procesar un reclamo válido contra todas las bifurcaciones en esa red en el momento en el que procesemos la notificación. Haremos esto dada la probabilidad de que todas las bifurcaciones recién creadas contengan lo mismo. Adicionalmente, si la red que se reportó y que contiene el contendo reportado es mayor a cien (100) repositorios y, por lo tanto, sería difícil revisarla integralmente, podríamos considerar inhabilitar toda la red si declaras en la notificación que, con base en la cantidad representativa de bifurcaciones que revisaste, crees que todas o la mayoría de las bifrucaciones albergan el contenido que se reporta en el repositorio padre.

### Enviar una solicitud de eliminación de información privada

Debido al tipo de contenido de los hosts de GitHub (principalmente de código de software) y a la forma en que se gestiona el contenido (con Git), necesitamos que las demandas sean lo más específicas posible. Para que podamos verificar que un usuario eliminó integralmente la información privada que se reportó, necesitamos saber exactamente en dónde buscar.

Estos lineamientos se diseñan para hacer el procesamiento de las solicitudes para eliminar la información privada tan sencillamente como sea posible.

#### Tu solicitud debe incluir:

1. Un enlace funcional y que se pueda seguir con un clic para cada archivo que contenga información privada. (Ten en cuenta que no podemos trabajar a partir de resultados de búsqueda, ejemplos o capturas de pantalla.)
2. Números de línea específicos dentro de cada archivo que contenga la información privada.
3. Una breve descripción de cómo cada elemento identificado supone un riesgo de seguridad para ti o tu organización. ***Es importante que proporciones una explicación de cómo plantean los datos un riesgo de seguridad más allá de simplemente indicar que lo hace.***
4. Si eres un tercero actuando como agente de una organización que se enfrenta a un riesgo de seguridad, incluye una declaración de que tienes un derecho legal a actuar en nombre de dicha organización.
5. OPCIONAL: Haznos saber si tu solicitud es especialmente urgente y por qué. Responderemos a todas las solicitudes de eliminación de información privada tan rápidamente como sea posible. Sin embargo, si esta solicitud es especialmente sensible al tiempo, como una exposición de credenciales muy reciente, por favor explica por qué.

### Como presentar tu solicitud

Puedes enviar tu solicitud para eliminar información privada a través de nuestro [formato de contacto](https://support.github.com/contact?tags=docs-private-information). Por favor, incluye una versión de texto plano de tu solicitud en el cuerpo de tu mensaje. El envío de tu solicitud en un archivo adjunto puede resultar en retrasos en el proceso.

### Disputas

Si recibes una solicitud de eliminación de información privada de nuestra parte, puedes disputarla si respondes a nuestro correo electrónico y nos dejas saber, con tanto detalle como sea posible, la razón por la cual el contenido en cuestión no constituye información privada que esté sujeta a esta Política.
