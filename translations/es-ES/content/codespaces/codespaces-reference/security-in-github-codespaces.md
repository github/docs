---
title: Security in GitHub Codespaces
intro: 'Resumen de la arquitectura de seguridad de {% data variables.product.prodname_github_codespaces %}, con lineamientos para ayudarte a mantener la seguridad y minimizar el riesgo de un ataque.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
type: reference
shortTitle: Seguridad en los Codespaces
redirect_from:
  - /codespaces/codespaces-reference/security-in-codespaces
---

## Resumen de la seguridad de un codespace

{% data variables.product.prodname_github_codespaces %} se diseñó para que, predeterminadamente, tuviera seguridad reforzada. Como consecuencia, necesitarás garantizar que tus prácticas de desarrollo de software no arriesguen el reducir la postura de seguridad de tu codespace.

Esta guía describe la forma en la que Codespaces mantiene seguro tu ambiente de desarrollo y proporciona algunas de las buenas prácticas que ayudarán a mantener tu seguridad conforme trabajas. Como con cualquier herramienta de desarrollo, recuerda que solo debes intentar abrir y trabajar en repositorios que conoces y confías.

### Aislamiento de ambiente

{% data variables.product.prodname_github_codespaces %} se diseñó para mantener tus codespaces separados entre sí, con cada uno utilizando su red y máquina virtual propias.

#### Máquinas virtuales aisladas

Cada codespace se hospeda en su máquina virtual (MV) recién creada. Dos codespaces jamás podrán ubicase en la misma MV.

Cada vez que reinicias un codespace, este se lanza en una MV nueva con las actualizaciones más recientes de seguridad disponibles.

#### Conexiones aisladas

Cada codespace tiene su propia red virtual aislada. Utilizamos cortafuegos para bloquear las conexiones entrantes de la internet y para prevenir que los codespaces se comuniquen entre sí en redes internas. Predeterminadamente, se permite que los codespaces hagan conexiones salientes a la internet.

### Autenticación

Puedes conectarte a un codespace utilizando un buscador web o desde {% data variables.product.prodname_vscode %}. Si te conectas desde {% data variables.product.prodname_vscode_shortname %}, se te pedirá autenticarte con {% data variables.product.product_name %}.

Cada vez que se cree o reinicie un codespace, se le asignará un token de {% data variables.product.company_short %} nuevo con un periodo de vencimiento automático. Este periodo te permite trabajar en el codespace sin necesitar volver a autenticarte durante un día de trabajo habitual, pero reduce la oportunidad de que dejes la conexión abierta cuando dejas de utilizar el codespace.

El alcance del token variará dependiendo del tipo de acceso que tengas en el repositorio en donde se creó el codespace:

- **Si tienes acceso de escritura en el repositorio**: Se dará al token un alcance de acceso de lectura/escritura a este.
- **So solo tienes acceso de lectura al repositorio**: El token solo permitirá que el código se clone desde el repositorio origen. Si intentas subir información a un repositorio privado en donde solo tengas acceso de lectura, {% data variables.product.prodname_codespaces %} te pedirá crear una bifurcación personal de este. El token entonces se actualizará para tener acceso de lectura/escritura a la bifurcación personal nueva.
- **Si habilitaste tu codespace para que acceda a otros repositorios**: Cuando se le otorga [acceso a otros repositorios](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces) a un codespace, cualquiera de ellos que se cree desde ese repositorio tendrá tokens de lectura/escritura con alcance del repositorio origen. Adicionalmente, los tokens también recibirán acceso de lectura para otros repositorios que indique el usuario u organización.

Los administradores de una organización especifican qué repositorios deberían considerarse como confiables. Un administrador puede [elegir confiar en](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces) todos, ninguno o algunos de los repositorios de la organización. Un codespace no puede tener permisos de acceso a los recursos si son mayores que los de la persona que lo creó, incluso si el administrador de la organización otorgó acceso a todos los usuarios y a todos los repositorios.

### Conexiones de los codespaces

Puedes conectar tu codespace utilizando el túnel cifrado de TLS que proporciona el servicio de {% data variables.product.prodname_github_codespaces %}. Solo el creador de un codespace puede conectarse a este. Las conexiones se autentican con {% data variables.product.product_name %}.

Si necesitas permitir el acceso externo a los servicios que se ejecutan en un codespace, puedes habilitar el reenvío de puertos para acceso público o privado.

### Reenvío de puertos

Si necesitas conectarte a un servicio (tal como un servidor web de desarrollo) que se ejecute en tu codespace, puedes configurar el reenvío de puertos para hacer que el servicio esté disponible en la internet.

Los propietarios de las organizaciones pueden restringir la capacidad para hacer que los puertos reenviados estén disponibles públicamente o dentro de la organización. Para obtener más información, consulta la sección "[restringir la visbilidad de los puertos reenviados](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)".

**Puertos reenviados de forma privada**: Son accesibles mediante el internet, pero solo el creador del codespace puede acceder a ellos después de autenticarse en {% data variables.product.product_name %}.

**Puertos reenviados públicamente dentro de tu organización**: Se puede acceder a ellos a través de la internet, pero solo pueden hacerlo los miembros de la misma organización, como el codespace, después de autenticarse en {% data variables.product.product_name %}.

**Puertos reenviados de forma pública**: Se puede acceder a ellos desde internet y todos pueden acceder a ellos. No se necesita autenticación para acceder a los puertos públicos reenviados.

Todos los puertos reenviados son privados predeterminadamente, lo cual significa que necesitarás autenticarte antes de poder acceder al puerto. El acceso a los puertos privados reenviados de un codespace se controla mediante cookies de autenticación con un periodo de vencimiento de 3 horas. Cuando la cookie venza, necesitarás volver a autenticarte.

Un puerto público renviado se revertirá automáticamente a privado cuando elimines y vuelvas a agregar dicho puerto o si reinicias el codespace.

Puedes utilizar el panel de "Puertos" para configurar uno de ellos para su acceso público o privado y puedes detener el reenvío de puertos cuando ya no sea necesario. Para obtener más información, consulta la sección "[Reenviar puertos en tu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

## Buenas prácticas de seguridad para tus codespaces

Los codespaces se diseñan para estar fortalecidos en seguridad predeterminadamente. Para ayudar a mantener esta postura, te recomendamos que sigas las buenas prácticas de seguridad durante tus procedimientos de desarrollo:

- Como con cualquier herramienta de desarrollo, recuerda que solo debes intentar abrir y trabajar en repositorios que conoces y confías.
- Antes de agregar cualquier dependencia nueva al codespace, revisa si se mantienen bien y si lanzan actualizaciones para arreglar cualquier vulnerabilidad de seguridad que se encuentre en su código.

### Utilizar secretos para acceder a la información sensible

Utiliza siempre secretos cifrados cuando quieras utilizar información sensible (tal como tokens de acceso) en un codespace. Puedes acceder a tus secretos como variables de ambiente en el codespace, incluso desde la terminal. Por ejemplo, puedes lanzar una terminal dentro de tu codespace y utilizar `echo $SECRET_NAME` para ver el valor del secreto.

The secret values are copied to environment variables whenever the codespace is resumed or created and are also synced when they are changed.

Secrets are not copied into the environment if you don't have write access to the codespace's repository.

Para obtener más información sobre los secretos, consulta:
- "[Administrar los secretos cifrados para tus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"
- "[Administrar los secretos cifrados de tu repositorio y organización en {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)"

### Trabajar con las contribuciones y repositorios de otros

Cuando creas un codespace desde una rama de solicitud de cambios desde una bifurcación, el token en el codespace variará dependiendo de si el repositorio es público o privado:
- En el caso de un repositorio privado, el codespace obtiene acceso tanto a la bifurcación como al padre.
- En el caso de un repositorio público, el codespace solo tendrá acceso a la bifurcación y a abrir solicitudes de cambios en el padre.

We also further protect you in these scenarios by not injecting any of your [codespace secrets](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) into the environment.

### Buenas prácticas adicionales

Existen algunas buenas prácticas adicionales y riesgos de los cuales debes estar consciente cuando utilices los {% data variables.product.prodname_codespaces %}.

#### Entender el archivo de devcontainer.json de un repositorio

Cuando creas un codespace, si se encuentra un un archivo de `devcontainer.json` para tu repositorio, este se interpreta y utiliza para configurar tu codespace. El archivo `devcontainer.json` puede contener características poderosas, tales como instalar extensiones de terceros y ejecutar el código arbitrario que se suministra en un `postCreateCommand`.

Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

#### Otorgar acceso a través de características

Ciertas características de desarrollo pueden agregar riesgos a tu ambiente potencialmente. Por ejemplo, el firmar confirmaciones, inyectar secretos en las variables de ambiente, tener acceso autenticado al registro y acceder a los paquetes pueden representar problemas potenciales de seguridad. Te recomendamos que solo otorgues acceso a aquellos que lo necesiten y que adoptes una política de ser tan restrictivo como sea posible.

#### Utilizar extensiones

Cualquier extensión adicional de {% data variables.product.prodname_vscode_shortname %} que hayas instalado puede introducir más riesgos potencialmente. Para ayudar a mitigar este riesgo, asegúrate de que solo instales extensiones confiables y de que siempre se mantengan actualizadas.
