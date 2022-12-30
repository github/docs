---
title: Guía para Presentar una Notificación de Retirada de la DMCA
redirect_from:
  - /dmca-notice-how-to
  - /articles/dmca-notice-how-to
  - /articles/guide-to-submitting-a-dmca-takedown-notice
  - /github/site-policy/guide-to-submitting-a-dmca-takedown-notice
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
ms.openlocfilehash: c664d164136504f695a3954b03b01e0d47191eab
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 08/29/2022
ms.locfileid: '144556711'
---
En esta guía se describe la información que necesita GitHub para procesar una solicitud de retirada de la DMCA. Si tiene preguntas más generales sobre qué es la DMCA o cómo procesa GitHub las solicitudes de retirada de la DMCA, consulte nuestra [Directiva de Retirada de la DMCA](/articles/dmca-takedown-policy).

Debido al tipo de contenido que aloja GitHub (principalmente código de software) y la forma en que se administra el contenido (con Git), necesitamos que las quejas sean lo más específicas posible. Estas directrices se han diseñado para que la tramitación de las notificaciones de presuntas infracciones sea lo más sencilla posible. Nuestro formulario de notificación, que se incluye a continuación, utiliza el formato sugerido por el estatuto de la DMCA, que se puede encontrar en el sitio web oficial de la Oficina de Derechos de Autor de EE. UU.: <https://www.copyright.gov>.

Al igual que sucede con todos los asuntos legales, siempre es mejor consultar a un profesional las preguntas o situaciones específicas. Le recomendamos encarecidamente que lo haga antes de emprender cualquier acción que pueda afectar a sus derechos. Esta guía no constituye asesoramiento legal ni debe tomarse como tal.

## Antes de Empezar

***Diga la verdad.** _ La DMCA exige que jure los hechos en su reclamación de derechos de autor bajo pena de perjurio *. Es un delito federal mentir intencionadamente en una declaración jurada. (* Consulte el* [Código de EE. UU., Título 18, Apartado 1621](https://www.gpo.gov/fdsys/pkg/USCODE-2011-title18/html/USCODE-2011-title18-partI-chap79-sec1621.htm).) Enviar información falsa también podría derivar en una responsabilidad civil, es decir, podría ser demandado por daños económicos. La propia DMCA [prevé la imposición de una indemnización por daños y perjuicios](https://en.wikipedia.org/wiki/Online_Copyright_Infringement_Liability_Limitation_Act#%C2%A7_512(f)_Misrepresentations) a cualquier persona que, a sabiendas, tergiverse de forma importante el material o la actividad que está infringiendo.

***Investigar.*** Millones de usuarios y organizaciones ponen todo su empeño en los proyectos que crean y en los que colaboran en GitHub. Presentar una queja a la DMCA contra un proyecto de este tipo es una acusación legal grave que tiene consecuencias reales para personas reales. Por eso, le pedimos que realice una investigación exhaustiva y consulte a un abogado antes de enviar una solicitud de retirada para asegurarse de que ese uso no esté permitido de verdad.

***Pregunte educadamente primero.*** Un buen primer paso antes de enviarnos una notificación de retirada es intentar ponerse en contacto con el usuario directamente. Puede que haya incluido la información de contacto en la página del perfil público o en el archivo LÉAME, o podría ponerse en contacto con él abriendo una incidencia o una solicitud de incorporación de cambios en el repositorio. Esto no es estrictamente necesario, pero es un gesto que se agradece.

***Envíe la solicitud correcta.*** Solo podemos aceptar notificaciones de retirada de la DMCA para obras que estén protegidas por derechos de autor y en las que se identifique una obra específica sujeta a derechos de autor. Si tiene una queja sobre el uso indebido de marcas comerciales, consulte nuestra [directiva de marcas registradas](/articles/github-trademark-policy/). Si desea eliminar datos confidenciales, como contraseñas, consulte nuestra [directiva sobre datos confidenciales](/articles/github-sensitive-data-removal-policy/). Si se trata de una difamación u otro comportamiento abusivo, consulte nuestras [Directrices de la Comunidad](/articles/github-community-guidelines/).

***El código no es igual que otro contenido creativo.*** GitHub se ha diseñado para la colaboración en código de software. Por este motivo, la identificación de una infracción de derechos de autor válida es más complicada que, por ejemplo, en fotos, música o vídeos.

Hay varias razones por las que el código es diferente de otro contenido creativo. Por ejemplo:

- Un repositorio puede incluir fragmentos de código de muchas personas diferentes, pero quizá solo hay un archivo o incluso una subrutina dentro de un archivo que infringe sus derechos de autor.
- El código mezcla la funcionalidad con la expresión creativa, pero los derechos de autor solo protegen los elementos expresivos, no las partes que son funcionales.
- Con frecuencia, hay que tener en cuenta las licencias. El hecho de que un código tenga un aviso de derechos de autor no significa necesariamente que se estén infringiendo estos derechos. Es posible que el código se esté utilizando de acuerdo con una licencia de código abierto.
- Un uso determinado puede ser [justo](https://www.lumendatabase.org/topics/22) si solo se utiliza una pequeña cantidad del contenido protegido por derechos de autor, el contenido se utiliza de una manera transformadora o con fines educativos, o se da alguna combinación de estos usos. Debido a que el código se presta por naturaleza a usos de este tipo, cada caso de uso es diferente y debe considerarse por separado.
- Se puede alegar que el código infringe los derechos de autor de muchas maneras diferentes, para lo que es necesario proporcionar explicaciones e identificaciones detalladas de las obras.

Esta lista no es exhaustiva, por eso es doblemente importante hablar con un profesional legal sobre su queja cuando se trata de código.

***Sin bots.*** Debe pedirle a un profesional cualificado que evalúe los hechos de cada notificación de retirada que envíe. Si subcontrata las tareas a un tercero, asegúrese de saber cómo trabaja y de que no utiliza bots automatizados para presentar reclamaciones en masa. Estas quejas no suelen ser válidas y dan como resultado la retirada innecesaria de proyectos.

***Los asuntos relacionados con los derechos de autor son complicados.*** Puede ser muy difícil determinar si una obra en particular está o no protegida por derechos de autor. Por ejemplo, los hechos (incluidos los datos) generalmente no tienen derechos de autor. Las palabras y frases cortas generalmente no tienen derechos de autor. Las direcciones URL y los nombres de dominio generalmente no tienen derechos de autor. Dado que solo puede usar el procedimiento de la DMCA si el contenido está protegido por derechos de autor, debe hablar con un abogado si tiene dudas sobre si su contenido está protegido o no.

***Podría recibir una contranotificación.*** Cualquier usuario afectado por su notificación de retirada podría decidir enviarle una [contranotificación](/articles/guide-to-submitting-a-dmca-counter-notice). En ese caso, volveremos a habilitar su contenido en un plazo de 10 a 14 días, a menos que nos notifique que ha iniciado una acción legal para evitar que el usuario participe en actividades infractoras relacionadas con el contenido en GitHub.

***Su queja se publicará.*** Como se señala en nuestra [Directiva de Retirada de la DMCA](/articles/dmca-takedown-policy#d-transparency), después de eliminar la información personal, publicamos todas las notificaciones sobre retiradas completas y procesables en <https://github.com/github/dmca>.

***GitHub no es el juez.***
GitHub tiene poco poder de decisión en el proceso, aparte de determinar si las notificaciones cumplen los requisitos mínimos de la DMCA. Corresponde a las partes (y a sus abogados) evaluar el fundamento de sus reclamaciones, teniendo en cuenta que las notificaciones deben hacerse bajo pena de perjurio.

## Su Queja Debe...

1. **Incluya la siguiente declaración: «He leído y entiendo la Guía de GitHub para presentar una notificación a la DMCA».** No nos negaremos a procesar una queja completa si no incluye esta declaración, pero eso nos dará a entender que no ha leído estas directrices y es posible que le pidamos que lo haga.

2. **Identifique la obra protegida por derechos de autor que cree que se ha infringido.** Esta información es importante porque ayuda al usuario afectado a evaluar su reclamación y le ofrece la posibilidad de comparar su obra con la suya. Los detalles de esta identificación dependerán de la naturaleza de la obra que crea que se ha infringido. Si ha publicado la obra, es posible que pueda enviar un vínculo a la página web donde se encuentra. Si está patentada y no está publicada, puede describirla y explicar que está patentada. Si la ha registrado en la Oficina de Derechos de Autor, debe incluir el número de registro. Si alega que el contenido alojado es una copia directa y literal de su obra, también puede explicarlo.

3. **Identifique el material que alega que está infringiendo la obra protegida por derechos de autor que se indica en el punto 2 anterior.** Es importante ser lo más concreto posible en su identificación. Esta identificación debe ser razonablemente suficiente para que GitHub pueda localizar el material. Como mínimo, esto significa que debe incluir las direcciones URL del material que presuntamente infringe sus derechos de autor. Si alega que infringe menos de un repositorio completo, identifique los archivos específicos o los números de líneas dentro del archivo que alega que infringe. Si alega que infringe todo el contenido de una URL, sea específico al respecto también. 
   - Tenga en cuenta que GitHub *no* deshabilita automáticamente las [bifurcaciones](/articles/dmca-takedown-policy#b-what-about-forks-or-whats-a-fork) al deshabilitar un repositorio principal. Si ha investigado y analizado las bifurcaciones de un repositorio y cree que también están infringiendo sus derechos de autor, identifique explícitamente cada bifurcación presuntamente infractora. Confirme también que ha investigado cada caso individual y que sus declaraciones juradas se aplican a todas las bifurcaciones identificadas. En casos excepcionales, es posible que se alegue una infracción de derechos de autor en un repositorio completo que se está bifurcando activamente. Si en el momento de enviar la notificación, identificó todas las bifurcaciones existentes de ese repositorio como supuestamente infractoras, procesaríamos una reclamación válida contra todas las bifurcaciones presentes en esa red en el momento de procesar la notificación. Lo haríamos dada la probabilidad de que todas las bifurcaciones recién creadas tengan el mismo contenido. Además, si la red que se denuncia por incluir contenido supuestamente infractor tiene más de cien (100) repositorios y, por lo tanto, es difícil revisarla íntegramente, podríamos plantearnos deshabilitar toda la red si usted declara en su notificación que, «Debido a la cantidad representativa de bifurcaciones que ha revisado, considero que todas o la mayoría de las bifurcaciones son infractoras en la misma medida que el repositorio principal». Su declaración jurada se aplicaría a esta afirmación.

4. **Explique qué tendría que hacer el usuario afectado para subsanar la infracción.** Una vez más, es importante ser concreto. De esta manera, cuando transmitamos su queja al usuario, sabrá lo que debe hacer para evitar que se deshabilite el resto de su contenido. ¿El usuario solo tiene que añadir una declaración de atribución? ¿Tiene que eliminar determinadas líneas de su código o archivos completos? Por supuesto, entendemos que, en algunos casos, si se alega que todo el contenido de un usuario infringe sus derechos de autor, lo único que se puede hacer es eliminarlo todo. Si es así, le rogamos que lo deje claro también.

5. **Proporcione su información de contacto.** Incluya su dirección de correo electrónico, nombre, número de teléfono y dirección física.

6. **Proporcione la información de contacto, si la conoce, del presunto infractor.** Por lo general, bastará que proporcione el nombre de usuario de GitHub asociado con el contenido presuntamente infractor. Sin embargo, puede haber casos en los que tenga información adicional sobre el presunto infractor. Si es así, por favor, comparta esa información con nosotros.

7. **Incluya la siguiente declaración: «Creo de buena fe que el uso de los materiales con derechos de autor descritos anteriormente en las páginas web infractoras no está autorizado por su propietario, su representante o la ley. He tenido en cuenta el uso justo».**

8. **Incluya también la siguiente declaración: «Juro, bajo pena de perjurio, que la información contenida en esta notificación es exacta y que soy el propietario de los derechos de autor o estoy autorizado para actuar en nombre del propietario de un derecho exclusivo que supuestamente se infringe».**

9. **Incluya su firma física o electrónica.**

## Quejas sobre la Tecnología Antielusión

La Ley de Derechos de Autor prohíbe eludir las medidas tecnológicas que controlan de forma eficiente el acceso a las obras protegidas por derechos de autor. Si cree que el contenido alojado en GitHub infringe esta prohibición, envíenos una denuncia a través de nuestro {% data variables.contact.contact_dmca %}. Una notificación de elusión debe incluir los siguientes detalles sobre las medidas técnicas implementadas y sobre la forma en que el proyecto denunciado las elude. En concreto, la notificación enviada a GitHub debe incluir indicaciones detalladas que describan:
1. cuáles son las medidas técnicas;
2. cómo controlan de forma eficaz el acceso al material protegido por derechos de autor; y 
3. por qué el proyecto denunciado está diseñado para eludir las medidas tecnológicas de protección descritas anteriormente.

## Cómo Enviar su Queja

La forma más rápida de obtener una respuesta es introducir su información y responder todas las preguntas en nuestro {% data variables.contact.contact_dmca %}.

También puede enviar una notificación por correo electrónico a <copyright@github.com>. Puede incluir un archivo adjunto si lo desea, pero debe incluir también una versión de texto sin formato de su carta en el cuerpo del mensaje.

Si debe enviar su notificación por correo postal, también puede hacerlo, pero tardaremos *mucho* más tiempo en recibirlo y responder. Las notificaciones que recibimos por correo electrónico con texto sin formato se responden mucho más rápido que los archivos adjuntos en PDF o el correo postal. Si aun así desea enviarnos su notificación por correo, nuestra dirección física es:

```
GitHub, Inc
Attn: DMCA Agent
88 Colin P Kelly Jr St
San Francisco, CA. 94107
```
