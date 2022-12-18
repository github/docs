---
title: Seguridad en los Codespaces
intro: Resumen de la arquitectura de seguridad de {% data variables.product.prodname_codespaces %}, con lineamientos para ayudarte a mantener la seguridad y minimizar el riesgo de un ataque.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
- Security
type: reference
shortTitle: Security in Codespaces
ms.openlocfilehash: 679cc2de9b31159f4162eaea473ca9dd5001d22d
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "146764575"
---
## <a name="overview-of-codespace-security"></a>Resumen de la seguridad de un codespace

{% data variables.product.prodname_codespaces %} se diseñó para que, predeterminadamente, tuviera seguridad reforzada. Como consecuencia, necesitarás garantizar que tus prácticas de desarrollo de software no arriesguen el reducir la postura de seguridad de tu codespace. 

Esta guía describe la forma en la que Codespaces mantiene seguro tu ambiente de desarrollo y proporciona algunas de las buenas prácticas que ayudarán a mantener tu seguridad conforme trabajas. Como con cualquier herramienta de desarrollo, recuerda que solo debes intentar abrir y trabajar en repositorios que conoces y confías.

### <a name="environment-isolation"></a>Aislamiento de entorno

{% data variables.product.prodname_codespaces %} se diseñó para mantener tus codespaces separados entre sí, con cada uno utilizando su red y máquina virtual propias.

#### <a name="isolated-virtual-machines"></a>Máquinas virtuales aisladas

Cada codespace se hospeda en su máquina virtual (MV) recién creada. Dos codespaces jamás podrán ubicase en la misma MV. 

Cada vez que reinicias un codespace, este se lanza en una MV nueva con las actualizaciones más recientes de seguridad disponibles.

#### <a name="isolated-networking"></a>Conexiones aisladas

Cada codespace tiene su propia red virtual aislada. Utilizamos cortafuegos para bloquear las conexiones entrantes de la internet y para prevenir que los codespaces se comuniquen entre sí en redes internas. Predeterminadamente, se permite que los codespaces hagan conexiones salientes a la internet.

### <a name="authentication"></a>Authentication

Puedes conectarte a un codespace mediante un explorador web o desde {% data variables.product.prodname_vscode %}. Si te conectas desde {% data variables.product.prodname_vscode_shortname %}, se te pedirá que te autentiques con {% data variables.product.product_name %}. 

Cada vez que se cree o reinicie un codespace, se le asignará un token de {% data variables.product.company_short %} nuevo con un periodo de vencimiento automático. Este periodo te permite trabajar en el codespace sin necesitar volver a autenticarte durante un día de trabajo habitual, pero reduce la oportunidad de que dejes la conexión abierta cuando dejas de utilizar el codespace.

El alcance del token variará dependiendo del tipo de acceso que tengas en el repositorio en donde se creó el codespace:

- **Si tiene acceso de escritura al repositorio**: el token tendrá como ámbito el acceso de lectura y escritura al repositorio.
- **Si solo tiene acceso de lectura al repositorio**: el token solo permitirá que el código se clone desde el repositorio de origen. Si intentas subir información a un repositorio privado en donde solo tengas acceso de lectura, {% data variables.product.prodname_codespaces %} te pedirá crear una bifurcación personal de este. El token entonces se actualizará para tener acceso de lectura/escritura a la bifurcación personal nueva. 
- **Si ha habilitado el codespace para acceder a otros repositorios**: cuando se ha concedido a un codespace acceso [a otros repositorios](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces), cualquier codespace creado a partir de ese repositorio tendrá tokens de lectura y escritura cuyo ámbito será el repositorio de origen. Adicionalmente, los tokens también recibirán acceso de lectura para otros repositorios que indique el usuario u organización.

Los administradores de una organización especifican qué repositorios deberían considerarse como confiables. Un administrador puede [elegir confiar](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces) en todos, ninguno o algunos de los repositorios de la organización. Un codespace no puede tener permisos de acceso a los recursos si son mayores que los de la persona que lo creó, incluso si el administrador de la organización otorgó acceso a todos los usuarios y a todos los repositorios.

### <a name="codespace-connections"></a>Conexiones de los codespaces

Puedes conectar tu codespace utilizando el túnel cifrado de TLS que proporciona el servicio de {% data variables.product.prodname_codespaces %}. Solo el creador de un codespace puede conectarse a este. Las conexiones se autentican con {% data variables.product.product_name %}.

Si necesitas permitir el acceso externo a los servicios que se ejecutan en un codespace, puedes habilitar el reenvío de puertos para acceso público o privado.

### <a name="port-forwarding"></a>Reenvío de puertos

Si necesitas conectarte a un servicio (tal como un servidor web de desarrollo) que se ejecute en tu codespace, puedes configurar el reenvío de puertos para hacer que el servicio esté disponible en la internet. 

Los propietarios de la organización pueden restringir la capacidad de hacer que los puertos de reenvío estén disponibles públicamente o dentro de la organización. Para más información, vea "[Restricción de la visibilidad de los puertos reenviados](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)".

**Puertos reenviados de forma privada**: se puede acceder a ellos a través de Internet, pero solo puede hacerlo el creador del codespace después de autenticarse en {% data variables.product.product_name %}.

**Puertos reenviados públicamente dentro de la organización**: se puede acceder a ellos a través de Internet, pero solo pueden hacerlo los miembros de la misma organización que el codespace después de autenticarse en {% data variables.product.product_name %}.

**Puertos reenviados de forma pública**: cualquier persona puede acceder a ellos en Internet. No se necesita autenticación para acceder a los puertos públicos reenviados.

Todos los puertos reenviados son privados predeterminadamente, lo cual significa que necesitarás autenticarte antes de poder acceder al puerto. El acceso a los puertos privados reenviados de un codespace se controla mediante cookies de autenticación con un periodo de vencimiento de 3 horas. Cuando la cookie venza, necesitarás volver a autenticarte.

Un puerto público renviado se revertirá automáticamente a privado cuando elimines y vuelvas a agregar dicho puerto o si reinicias el codespace.

Puedes utilizar el panel de "Puertos" para configurar uno de ellos para su acceso público o privado y puedes detener el reenvío de puertos cuando ya no sea necesario. Para más información, vea "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

## <a name="good-security-practices-for-your-codespaces"></a>Buenas prácticas de seguridad para tus codespaces

Los codespaces se diseñan para estar fortalecidos en seguridad predeterminadamente. Para ayudar a mantener esta postura, te recomendamos que sigas las buenas prácticas de seguridad durante tus procedimientos de desarrollo: 

- Como con cualquier herramienta de desarrollo, recuerda que solo debes intentar abrir y trabajar en repositorios que conoces y confías.
- Antes de agregar cualquier dependencia nueva al codespace, revisa si se mantienen bien y si lanzan actualizaciones para arreglar cualquier vulnerabilidad de seguridad que se encuentre en su código.

### <a name="using-secrets-to-access-sensitive-information"></a>Utilizar secretos para acceder a la información sensible 

Utiliza siempre secretos cifrados cuando quieras utilizar información sensible (tal como tokens de acceso) en un codespace. Puedes acceder a tus secretos como variables de ambiente en el codespace, incluso desde la terminal. Por ejemplo, puede iniciar un terminal en el codespace y usar `echo $SECRET_NAME ` para ver el valor de un secreto.

Los valores secretos se copian en variables de entorno cada vez que se reanuda o se crea el codespace y también se sincronizan cuando cambian.

Los secretos no se copian en el entorno si no tienes acceso de escritura al repositorio del codespace.

Para obtener más información sobre los secretos, consulta:
- "[Administración de secretos cifrados para los codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"
- "[Administración de secretos cifrados para el repositorio y la organización para Codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)"

### <a name="working-with-other-peoples-contributions-and-repositories"></a>Trabajar con las contribuciones y repositorios de otros

Cuando creas un codespace desde una rama de solicitud de cambios desde una bifurcación, el token en el codespace variará dependiendo de si el repositorio es público o privado:
- En el caso de un repositorio privado, el codespace obtiene acceso tanto a la bifurcación como al padre.
- En el caso de un repositorio público, el codespace solo tendrá acceso a la bifurcación y a abrir solicitudes de cambios en el padre.

También te protegemos aún más en estos escenarios, ya que no insertamos ninguno de los [secretos de codespace](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) en el entorno.

### <a name="additional-good-practices"></a>Buenas prácticas adicionales

Existen algunas buenas prácticas adicionales y riesgos de los cuales debes estar consciente cuando utilices los {% data variables.product.prodname_codespaces %}. 

#### <a name="understanding-a-repositorys-devcontainerjson-file"></a>Entender el archivo de devcontainer.json de un repositorio

Al crear un codespace, si se encuentra un archivo `devcontainer.json` para el repositorio, se analiza y se usa para configurar el codespace. El archivo `postCreateCommand` contiene características eficaces, por ejemplo, permite instalar extensiones de terceros y ejecutar código arbitrario a través de una propiedad `devcontainer.json`.

Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

#### <a name="granting-access-through-features"></a>Otorgar acceso a través de características

Ciertas características de desarrollo pueden agregar riesgos a tu ambiente potencialmente. Por ejemplo, el firmar confirmaciones, inyectar secretos en las variables de ambiente, tener acceso autenticado al registro y acceder a los paquetes pueden representar problemas potenciales de seguridad. Te recomendamos que solo otorgues acceso a aquellos que lo necesiten y que adoptes una política de ser tan restrictivo como sea posible. 

#### <a name="using-extensions"></a>Uso de extensiones

Cualquier extensión adicional de {% data variables.product.prodname_vscode_shortname %} que hayas instalado puede introducir más riesgos potencialmente. Para ayudar a mitigar este riesgo, asegúrate de que solo instales extensiones confiables y de que siempre se mantengan actualizadas.
