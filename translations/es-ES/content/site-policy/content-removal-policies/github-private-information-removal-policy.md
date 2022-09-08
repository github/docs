---
title: Directiva de Eliminación de Información Privada de GitHub
redirect_from:
  - /articles/github-sensitive-data-removal-policy
  - /github/site-policy/github-sensitive-data-removal-policy
  - /github/site-policy/github-private-information-removal-policy
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
ms.openlocfilehash: 42dbae3bcd7a1ee09a209c7bb5d81506e2d473bf
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 08/29/2022
ms.locfileid: '147099176'
---
Ofrecemos este proceso de eliminación de información privada como un servicio excepcional solo para contenido de alto riesgo que infrinja los [Términos de Servicio de GitHub](/github/site-policy/github-acceptable-use-policies#3-conduct-restrictions), como cuando su seguridad está en riesgo por la exposición de las credenciales de acceso. En esta guía se describe la información que GitHub necesita de usted a fin de procesar una solicitud de eliminación de información privada de un repositorio.

## ¿Qué se entiende por Información Privada?

A efectos de este documento, se entiende por «información privada» el contenido que (i) debería haberse mantenido confidencial, *y* (ii) cuya disponibilidad pública represente un riesgo de seguridad específico o concreto para usted o su organización. 

«Riesgo de seguridad» se refiere a una situación que implica la exposición a un peligro físico, el robo de identidad o una mayor probabilidad de acceso no autorizado a instalaciones físicas o de red.

### Las solicitudes de eliminación de información privada son adecuadas para:
- Las credenciales de acceso, como los nombres de usuario combinados con las contraseñas, los tokens de acceso u otros secretos de carácter confidencial que pueden conceder acceso al servidor, la red o el dominio de su organización.
- Tokens de AWS y otras credenciales de acceso similares que otorgan acceso a un tercero en su nombre. Debe poder demostrar que el token le pertenece.
- Documentación (como diagramas de red o arquitectura) que suponga un riesgo de seguridad específico para una organización. 
- [Información](/site-policy/acceptable-use-policies/github-doxxing-and-invasion-of-privacy) relacionada con usted como persona y que represente un riesgo para su seguridad (como números de la Seguridad Social u otros números de identificación oficiales).

### Las solicitudes de eliminación de información privada _no_ son adecuadas para:
- Nombres de servidores internos, direcciones IP y URL, por sí solos. Debe poder demostrar que su uso en un archivo o elemento de código en particular representa una amenaza para la seguridad.
- Las meras menciones de la identidad, el nombre, la marca, el nombre de dominio o cualquier otra referencia a su empresa en los archivos de GitHub. Debe ser capaz de articular por qué el uso de la identidad de su empresa supone una amenaza para la seguridad de su empresa.
- Archivos o repositorios enteros que no supongan un riesgo específico para la seguridad, pero que usted crea que son censurables por otros motivos.
- Solicitudes para eliminar contenidos que puedan infringir sus derechos de autor o los de su organización. Si tiene alguna pregunta sobre cómo gestiona GitHub las cuestiones relativas a los derechos de autor o si desea denunciar contenido potencialmente infractor, consulte nuestra [Directiva de Retirada de la DMCA](/articles/dmca-takedown-policy/). El proceso de eliminación de información privada generalmente no está pensado para la eliminación de archivos o repositorios completos: solo para partes específicas de información privada en dichos archivos. Aunque puede haber casos en los que los archivos estén repletos de información privada, debe justificar el riesgo de seguridad para la eliminación de tales archivos y esto puede prolongar el tiempo necesario para procesar la solicitud.
- Conflictos de marcas registradas. Si tiene preguntas sobre cómo gestiona GitHub las cuestiones relativas a las marcas comerciales o desea informar sobre contenidos que incluyan marcas comerciales o de servicio de su organización, revise nuestra [Directiva de Marcas Registradas](/articles/github-trademark-policy/).
- Reclamaciones de privacidad. Si desea acceder, transferir, modificar o eliminar su información personal en GitHub, póngase en contacto con nosotros a través de [nuestro formulario de contacto de Privacidad](https://github.com/contact/privacy). 
- Contenido que se rige por nuestras [Directrices de la Comunidad](/articles/github-community-guidelines/), como malware o herramientas para fines generales. Si tiene preguntas acerca de nuestras Directrices de la Comunidad o cree que el contenido de GitHub podría infringir nuestras directrices, puede usar {% data variables.contact.report_content %} para ponerse en contacto con nosotros.

## Información importante

**Pregunte educadamente primero.** Un primer paso recomendable antes de enviarnos una solicitud de eliminación de datos es intentar ponerse en contacto con el usuario directamente. Puede que haya incluido información de contacto en su página de perfil público o en el archivo LÉAME o de Soporte del repositorio, o puede ponerse en contacto creando una incidencia o una solicitud de extracción en el repositorio. Esto no es estrictamente necesario, pero es un gesto que se agradece.

**Sin bots.** Debe hacer que un profesional capacitado evalúe los hechos de cada solicitud que envíe. Si subcontrata las tareas a un tercero, asegúrese de conocer cómo opera y de que no utiliza bots automatizados para presentar reclamaciones en masa. Estas reclamaciones suelen incluir datos que no suponen ninguna amenaza para la seguridad y no incluyen explicaciones suficientes, lo que requiere trámites adicionales y provoca retrasos, incluso cuando la reclamación es válida.

**Envíe la solicitud correcta.** Como se ha indicado anteriormente, ofrecemos este proceso de eliminación de información privada como un servicio excepcional solo para contenidos de alto riesgo. No podemos utilizar este proceso para eliminar otro tipo de contenidos, como los potencialmente infractores y no podemos procesar ningún otro tipo de solicitudes de eliminación simultánea mientras procesamos las solicitudes de eliminación de información privada. Podremos ayudarle antes si envía las solicitudes de eliminación de información privada por separado de cualquier solicitud de eliminación de contenidos potencialmente infractores. Si no está seguro de si la solicitud implica solo información privada o también otras cuestiones legales, consulte a un asesor legal. 

**Tiempo de procesamiento.** Aunque tramitamos las solicitudes de eliminación de información privada lo más pronto posible, dado el volumen de solicitudes que tramitamos, puede pasar algún tiempo hasta que se revise su solicitud. Las solicitudes adicionales o solicitudes múltiples de puntos de contacto adicionales pueden ocasionar demoras.

## ¿Cómo funciona esto realmente?

1. **El demandante investiga.** Corresponde a la parte solicitante llevar a cabo su propia investigación y facilitarnos los [detalles que solicitamos](#your-request-must-include) y, lo más importante, una explicación de las razones por las que los datos suponen un riesgo para la seguridad. GitHub no está en disposición de buscar o hacer valoraciones iniciales sobre la información privada en nombre de ninguna persona física u organización.

2. **El demandante envía una solicitud de eliminación de información privada.** Después de llevar a cabo una investigación, el demandante prepara y [envía una solicitud de eliminación de información privada](#sending-a-private-information-removal-request) a GitHub. Si la solicitud no es lo suficientemente detallada a la hora de demostrar el riesgo de seguridad y para que GitHub pueda localizar los datos, le responderemos y solicitaremos información adicional.

3. **GitHub solicita al usuario que realice cambios.** En la mayoría de los casos, nos pondremos en contacto con el usuario que creó el repositorio y le ofreceremos la oportunidad de eliminar o modificar la información privada especificada en la solicitud o de impugnar la reclamación.

4. **El usuario notifica a GitHub los cambios.** Si el usuario decide llevar a cabo los cambios especificados, nos los debe indicar dentro del plazo que se le ha concedido. Si no lo hace, deshabilitaremos el repositorio. Si el usuario nos notifica que ha realizado cambios, comprobaremos que dichos cambios se hayan realizado y se lo notificaremos al demandante.

  O

5. **El usuario puede impugnar la solicitud.** Si un usuario considera que el contenido en cuestión no es información privada sujeta a esta Directiva, puede impugnarlo. Si lo hace, generalmente dejaremos que el demandante se ponga en contacto con el usuario y resuelva la cuestión directamente con él, dentro de lo razonable.

6. **Cambios en las revisiones del demandante.** Si el usuario realiza cambios, el demandante debe revisarlos. Si los cambios son insuficientes, el demandante debe facilitar detalles a GitHub que expliquen la razón. GitHub puede deshabilitar el repositorio o darle al usuario otra oportunidad de realizar los cambios.

7. **El usuario puede solicitar un plazo adicional para realizar los cambios.** Si el usuario no tuvo la oportunidad de eliminar la información privada especificada en el aviso, podemos concederle un plazo adicional de aproximadamente un (1) día hábil, previa solicitud, para realizar esos cambios. En ese caso, GitHub se lo notificará al demandante.

### ¿Qué hay de las bifurcaciones? (o ¿Qué es una «bifurcación»?)
Una de las mejores características de GitHub es la capacidad de los usuarios de «bifurcar» («fork» en inglés) los repositorios de los demás. ¿Qué significa eso? Básicamente, significa que los usuarios pueden hacer una copia de un proyecto en GitHub en sus propios repositorios. Según lo permita la licencia o la ley, los usuarios pueden hacer cambios en esa bifurcación para volver al proyecto principal o simplemente mantenerlo como su propia variante de un proyecto. Cada una de estas copias es una «[bifurcación](/articles/github-glossary/#fork)» del repositorio original, que a su vez también puede llamarse «matriz» de la bifurcación.

GitHub no deshabilitará automáticamente las bifurcaciones cuando deshabilite un repositorio matriz. Esto se debe a que las bifurcaciones pertenecen a diferentes usuarios y se pueden haber alterado de manera importante. GitHub no lleva a cabo ninguna investigación independiente sobre las bifurcaciones. Esperamos que quienes envían solicitudes de eliminación de información privada lleven a cabo esa investigación y, si consideran que las bifurcaciones también contienen información privada, las incluyan expresamente en su solicitud.

Si en el momento de enviar la notificación, identificó todas las bifurcaciones existentes de ese repositorio, procesaríamos una reclamación válida contra todas las bifurcaciones en esa red al momento de procesar la notificación. Lo haríamos dada la probabilidad de que todas las bifurcaciones recién creadas tengan el mismo contenido. Además, si la red que se denuncia por incluir contenido denunciado tiene más de cien (100) repositorios y, por lo tanto, es difícil revisarla íntegramente, podríamos plantearnos deshabilitar toda la red si declara en su aviso que, de acuerdo con la cantidad representativa de bifurcaciones que ha revisado, cree que todas o la mayoría de las bifurcaciones contienen el contenido denunciado en el repositorio principal.

## Envío de una solicitud de eliminación de información privada

Debido al tipo de contenido que aloja GitHub (principalmente código de software) y la forma en que se administra el contenido (con Git), necesitamos que las quejas sean lo más específicas posible. Para poder verificar si un usuario ha eliminado por completo la información privada denunciada, tenemos que saber dónde buscar exactamente.

Estas directrices se han diseñado para que la tramitación de las solicitudes de eliminación de información privada resulte lo más sencilla posible.

### Su solicitud debe incluir:

1. Un enlace funcional en el que se pueda hacer clic para cada archivo que contenga información privada. (Tenga en cuenta que no podemos trabajar a partir de resultados de búsqueda, ejemplos o capturas de pantalla).
2. Números de línea específicos dentro de cada archivo que contenga la información privada.
3. Una breve descripción de por qué cada elemento que ha identificado supone un riesgo de seguridad para usted o su organización. ***Es importante ofrecer una explicación de por qué los datos suponen un riesgo para la seguridad más allá de limitarse a indicar que lo hacen.***
4. Si usted es un tercero que actúa como agente de una organización que se enfrenta a un riesgo de seguridad, incluya una declaración en la que se indique que tiene derecho legal a actuar en nombre de dicha organización.
5. OPCIONAL: Díganos si su solicitud es especialmente urgente y por qué. Respondemos a todas las solicitudes de eliminación de información privada lo antes posible. Sin embargo, si esta solicitud es especialmente urgente, como una exposición de credenciales muy reciente, explique los motivos.

## Cómo enviar su solicitud

Puede enviar su solicitud para eliminar información privada a través de nuestro [formulario de contacto](https://support.github.com/contact?tags=docs-private-information). Incluya una versión de texto sin formato de su solicitud en el cuerpo del mensaje. El envío de la solicitud en un archivo adjunto puede provocar retrasos en la tramitación.

## Conflictos

Si ha recibido una solicitud de eliminación de información privada por nuestra parte, puede impugnarla respondiendo a nuestro correo electrónico y haciéndonos saber, con el máximo detalle posible, por qué cree que el contenido en cuestión no es información privada sujeta a esta Directiva.
