---
title: Política de eliminación de datos sensibles de GitHub
redirect_from:
  - /articles/github-sensitive-data-removal-policy
versions:
  free-pro-team: '*'
---

Si crees que el contenido en GitHub infringe un derecho de autor válido que posees, por favor consulta nuestra [política de retiro DMCA](/articles/dmca-takedown-policy/) y nuestra [Guía para enviar una notificación de retiro DMCA](/articles/guide-to-submitting-a-dmca-takedown-notice/). Confiamos en la notificación de la DMCA y en el proceso de retiro para la mayoría de nuestras acciones de eliminación.

Sin embargo, entendemos que de vez en cuando se puede publicar contenido sensible y relacionado con la seguridad en GitHub, ya sea accidentalmente o con propósito. Proporcionamos nuestro proceso de eliminación de datos sensibles para borrar estos datos sensibles en determinadas circunstancias excepcionales en las que el proceso DMCA no aplicaría, tales como cuando su seguridad está en riesgo de contraseñas expuestas y no posees los derechos de autor sobre el contenido específico que necesitas eliminar, o el contenido no está protegido por derechos de autor. Esta guía describe la información que GitHub necesita de usted para procesar una solicitud para eliminar datos sensibles de un repositorio.

### ¿Qué son los datos sensibles?

Para los propósitos de este documento, "datos sensibles" se refiere al contenido que (i) deberías haberse mantenido confidencial, *y* (ii) cuya disponibilidad pública plantea un riesgo específico o dirigido de seguridad para ti o tu organización.

#### Las solicitudes de eliminación de datos sensibles son adecuadas para:
- Credenciales de acceso, como nombres de usuario combinados con contraseñas, tokens de acceso, u otros secretos sensibles que pueden conceder acceso al servidor, red o dominio de tu organización.
- Los token AWS y otras credenciales de acceso similares que conceden acceso a un tercero en tu nombre. Debes tener la capacidad de mostrar que el token te pertenece.
- Documentación (como diagramas de red) que plantea un riesgo específico de seguridad para una organización. Los nombres de servidores internos, direcciones IP y URL, por sí solos, no son lo suficientemente sensibles; debe ser capaz de mostrar que el uso del nombre del servidor interno en un archivo o parte del código en particular que representa una amenaza para la seguridad.

#### Las solicitudes de eliminación de datos sensibles son _no_ adecuadas para:
-  Solicitudes para eliminar contenido que pueda infringir los derechos de autor de tu empresa o de tu organización. Si tienes preguntas sobre cómo maneja GitHub los asuntos relacionados con los derechos de autor o te gustaría informar sobre contenido que potencialmente infractor, por favor revisa nuestra [política de retiro DMCA](/articles/dmca-takedown-policy/). El proceso de eliminación de datos sensibles generalmente no está destinado a la eliminación de archivos o repositorios completos — solo para las partes específicas de datos sensibles en esos archivos. Mientras que puede haber casos en los que los archivos contienen solamente información confidencial, debes justificar el riesgo de seguridad para la eliminación de dichos archivos y esto puede aumentar el tiempo necesario para procesar tu solicitud.
- Disputas de marcas registradas. Si tiene preguntas sobre cómo maneja GitHub los asuntos relacionados con la marca o deseas informar sobre contenido que contiene marcas comerciales o marcas de servicio, revisa nuestra [Política de Marcas](/articles/github-trademark-policy/).
- Menciones simples de la identidad de tu empresa, nombre, marca, nombre de dominio, u otras referencias a tu empresa en archivos en GitHub. Debes tener la capacidad de articular por qué un uso de la identidad de tu empresa es una amenaza para la postura de seguridad de tu empresa antes de tomar medidas en virtud de esta política.
- Reclamaciones de privacidad. Si tiene inquietudes sobre tu propia privacidad o te estás comunicando con nosotros en nombre de tus empleados debido a una preocupación por la privacidad — por ejemplo, si hay direcciones de correo electrónico privadas u otra información personal publicada, por favor contáctanos a través de [nuestro formulario de contacto sobre privacidad](https://github.com/contact/privacy).
- Archivos completos o repositorios que no plantean un riesgo de seguridad específico, pero consideras que son censurables de otro modo.
- Contenido regido por nuestras [Directrices de la comunidad](/articles/github-community-guidelines/), tales como malware o herramientas de uso general. Si tienes dudas sobre nuestros Lineamientos de Comunidad crees que algún contenido de GitHub podría violarlos, puedes utilizar {% data variables.contact.report_content %} para contactarnos.

### Cosas que debes saber

**Realiza preguntas educadamente.** Un gran primer paso antes de enviarnos una solicitud para eliminar datos es intentar contactar directamente con el usuario. Pueden haber ingresado información de contacto en su página de perfil público o en el archivo de soporte o README del repositorio o podrías ponerte en contacto creando una propuesta o solicitud de extracción en el repositorio. Esto no es estrictamente necesario, pero es común.

**Sin bots.** Debes tener un profesional capacitado para evaluar los hechos de cada solicitud que envíes. Si estás subcontratando tus labores a un tercero, asegúrate de saber cómo trabaja y asegúrate que no estén utilizando bots automatizados para presentar quejas en masa. Estas quejas a menudo incluyen datos que no suponen ninguna amenaza para la seguridad y no incluyen suficientes explicaciones, que requieran un retroceso adicional y resulten en retrasos, incluso cuando la queja es válida.

**Envía la solicitud correcta.** Ofrecemos este proceso de eliminación de datos sensibles como un servicio excepcional únicamente para contenido de alto riesgo. No podemos utilizar este proceso para eliminar otros tipos de contenidos, como potencialmente infringir contenido y no podemos procesar ningún otro tipo de solicitudes de eliminación simultáneamente mientras procesamos solicitudes de eliminación de información sensible. Podremos ayudarlo más rápidamente si envías tus solicitudes de eliminación de datos confidenciales por separado de cualquier solicitud para eliminar contenido potencialmente infractor. Si no estás seguro de que su solicitud implique sólo datos confidenciales o también involucre otros asuntos legales, por favor pide asesoramiento legal.

**Tiempo de procesamiento.** Mientras procesamos solicitudes de eliminación de datos sensibles lo antes posible, debido al volumen de solicitudes que procesamos, puede tomar algún tiempo para que tu solicitud se revise.< Las solicitudes adicionales, o múltiples solicitudes de puntos de contacto adicionales, pueden provocar retrasos.

### ¿Cómo funciona realmente?

1. **El reclamante investiga.** Corresponde a la parte solicitante llevar a cabo su propia investigación y proporcionarnos los [detalles que necesitamos](#your-request-must-include) — lo que es más importante, una explicación de cómo los datos plantean un riesgo para la seguridad. GitHub no está en posición de buscar o hacer determinaciones iniciales sobre datos sensibles en nombre de cualquier persona u organización.

2. **El reclamante envía una solicitud de eliminación de datos sensibles.** Después de realizar una investigación, el demandante prepara y [envía una solicitud de eliminación de datos sensibles](#sending-a-sensitive-data-removal-request) a GitHub. Si la solicitud no está lo suficientemente detallada para demostrar el riesgo de seguridad y para que GitHub localice los datos, te responderemos y te solicitaremos más información.

3. **GitHub pide al usuario que haga cambios.** En la mayoría de los casos, nos pondremos en contacto con el usuario que creó el repositorio y le daremos la oportunidad de eliminar o modificar los datos sensibles especificados en la solicitud o de disputar el reclamo.

4. **El usuario notifica a GitHub de los cambios.** Si el usuario decide realizar los cambios especificados, debe comunicarnos dentro del período de tiempo que hayan sido permitidos. Si no lo hace, deshabilitaremos el repositorio. Si el usuario nos notifica que ha realizado cambios, verificaremos que los cambios se hayan realizado y notificaremos al demandante.

  O

5. **El usuario puede impugnar la solicitud.** Si un usuario cree que el contenido en cuestión no es información sensible sujeta a esta Política, puede impugnarlo. Si lo hacen, generalmente dejaremos que el demandante se ponga en contacto con el usuario y trabaje directamente con él, dentro de los límites razonables.

6. **Cambios a las revisiones del demandante.** Si el usuario realiza cambios, el demandante debe revisarlos. Si los cambios son insuficientes, el demandante debe proporcionar a GitHub detalles explicando por qué. GitHub puede desactivar el repositorio o dar al usuario una oportunidad adicional de hacer los cambios.

7. **El usuario puede solicitar una ventana adicional para realizar cambios.** Si el usuario perdió su oportunidad de eliminar los datos confidenciales especificados en el aviso, podríamos permitirle una ventana adicional de aproximadamente 1 día hábil, previa solicitud, para realizar esos cambios. En ese caso, GitHub notificará al demandante.

#### ¿Qué hay de las bifurcaciones? (o ¿Qué es una bifurcación?)
Una de las mejores características de GitHub es la capacidad de los usuarios de "bifurcar" los repositorios de otros. ¿Qué significa esto? En esencia, significa que los usuarios pueden hacer una copia de un proyecto en GitHub en sus propios repositorios. Como la licencia o la ley permite, los usuarios pueden hacer cambios en esa bifurcación para volver al proyecto principal o simplemente mantener como su propia variación de un proyecto. Cada una de estas copias es una "[bifurcación](/articles/github-glossary/#fork)" del repositorio original, que a su vez también se puede llamar la "matriz" de la bifurcación.

GitHub no deshabilitará automáticamente las bifurcaciones cuando se deshabilite un repositorio matriz. Esto se debe a que las bifurcaciones pertenecen a diferentes usuarios y pueden haber sido alteradas de manera significativa. GitHub no lleva a cabo ninguna investigación independiente sobre las bifucaciones. Esperamos que quienes envíen solicitudes de eliminación de datos sensibles lleven a cabo esa investigación y, si consideran que las bifurcaciones también contienen datos sensibles, incluyan expresamente bifurcaciones en su solicitud.

### Cómo enviar una solicitud de eliminación de datos sensibles

Debido al tipo de contenido de los hosts de GitHub (principalmente de código de software) y a la forma en que se gestiona el contenido (con Git), necesitamos que las demandas sean lo más específicas posible. Para que podamos verificar que un usuario ha eliminado por completo los datos sensibles, necesitamos saber exactamente dónde buscar.

Estas directrices están diseñadas para que el procesamiento de solicitudes para eliminar datos sensibles sean lo más sencillas posible.

#### Tu solicitud debe incluir:

1. Un enlace funcional y seleccionable a cada archivo que contiene datos sensibles. (Ten en cuenta que no podemos trabajar a partir de resultados de búsqueda, ejemplos o capturas de pantalla.)
2. Números de línea específicos dentro de cada archivo que contenga los datos sensibles.
3. Una breve descripción de cómo cada elemento identificado supone un riesgo de seguridad para ti o tu organización. ***Es importante que proporciones una explicación de cómo plantean los datos un riesgo de seguridad más allá de simplemente indicar que lo hace.***
4. Si eres un tercero actuando como agente de una organización que se enfrenta a un riesgo de seguridad, incluye una declaración de que tienes un derecho legal a actuar en nombre de dicha organización.
5. OPCIONAL: Haznos saber si tu solicitud es especialmente urgente y por qué. Respondemos a todas las solicitudes de eliminación de datos sensibles lo antes posible. Sin embargo, si esta solicitud es especialmente sensible al tiempo, como una exposición de credenciales muy reciente, por favor explica por qué.

### Como presentar tu solicitud

Puedes enviar tu solicitud para eliminar datos confidenciales a través de nuestro [formulario de contacto](https://support.github.com/contact). Por favor, incluye una versión de texto plano de tu solicitud en el cuerpo de tu mensaje. El envío de tu solicitud en un archivo adjunto puede resultar en retrasos en el proceso.

### Disputas

Si recibiste una solicitud de eliminación de datos confidencial por nuestra parte puedes discutirlo respondiendo a nuestro correo electrónico y haciéndonos saber —con el mayor detalle posible— por qué consideras que el contenido en cuestión no es información sensible sujeta a esta Política.
