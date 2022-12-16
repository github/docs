---
title: Solucionar problemas de los errores del Dependabot
intro: 'Algunas veces, el {% data variables.product.prodname_dependabot %} no puede levantar solicitudes de cambios para actualizar tus dependencias. Puedes revisar el error y desbloquear al {% data variables.product.prodname_dependabot %}.'
shortTitle: Troubleshoot errors
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Pull requests
  - Troubleshooting
  - Errors
  - Dependencies
ms.openlocfilehash: 21b7c2b2e6c613d4443b54404dfc120bd8ac00e2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110148'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Acerca de los errores del {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Si existe algo que impida que el {% data variables.product.prodname_dependabot %} levante una solicitud de cambios, esto se reporta como un error.

## Investigar los errores de las {% data variables.product.prodname_dependabot_security_updates %}

Cuando se bloquea al {% data variables.product.prodname_dependabot %} y no puede crear una solicitud de cambios para arreglar una alerta del {% data variables.product.prodname_dependabot %}, éste publica el mensaje de error en la alerta. La vista de {% data variables.product.prodname_dependabot_alerts %} muestra una lista de cualquier alerta que aún no se haya resuelto. Para acceder a la vista de alertas, haga clic en **{% data variables.product.prodname_dependabot_alerts %}** en la pestaña **Security** (Seguridad) del repositorio. Donde sea que se genere una solicitud de cambios que arregle una dependencia vulnerable, la alerta incluirá un enlace a dicha solicitud.

![Vista de las {% data variables.product.prodname_dependabot_alerts %} que muestra un enlace a una solicitud de cambios](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

Hay varias razones por las cuales una alerta podría no tener un enlace a una solicitud de incorporación de cambios:

1. No se han habilitado las {% data variables.product.prodname_dependabot_security_updates %} en el repositorio.
{% ifversion GH-advisory-db-supports-malware %}
1. La alerta es para malware y no hay ninguna versión segura del paquete.
{% endif %}
1. La alerta es para una dependencia transitoria o indirecta que no se definió explícitamente en un archivo de bloqueo.
1. Un error bloqueó al {% data variables.product.prodname_dependabot %} y éste no puede crear una solicitud de cambios.

Si existe un error que bloqueó al {% data variables.product.prodname_dependabot %} y éste no puede crear una solicitud de cambios, puedes mostrar los detalles del error si das clic en la alerta.

## Investigar los errores de las {% data variables.product.prodname_dependabot_version_updates %}

Cuando el {% data variables.product.prodname_dependabot %} se bloquea y no puede crear una solicitud de cambios para actualizar una dependencia en un ecosistema, éste publica el icono de error en el archivo de manifiesto. Los archivos de manifiesto que administra {% data variables.product.prodname_dependabot %} aparecen en la pestaña {% data variables.product.prodname_dependabot %}. Para acceder a esta, en la pestaña **Insights** (Información) del repositorio, haga clic en **Dependency graph** (Gráfico de dependencias) y luego en la pestaña **{% data variables.product.prodname_dependabot %}** .

![vista del {% data variables.product.prodname_dependabot %} que muestra un error](/assets/images/help/dependabot/dependabot-tab-view-error.png)

{% ifversion fpt or ghec %}

Para ver el archivo de registro de cualquier archivo de manifiesto, haga clic en el vínculo **Last checked TIME ago** (Última comprobación hace TIME). Cuando muestras el archivo de bitácora de un manifiesto que se muestra con un símbolo de error (por ejemplo, Maven en la impresión de pantalla anterior), cualquier error se mostrará también.

![Error y bitácora de una actualizacón de versión del {% data variables.product.prodname_dependabot %} ](/assets/images/help/dependabot/dependabot-version-update-error.png)

{% else %}

Para ver los registros de cualquier archivo de manifiesto, haga clic en el vínculo **Last checked TIME ago** (Última comprobación hace TIME) y luego en **View logs** (Ver registros).

![Error y bitácora de una actualizacón de versión del {% data variables.product.prodname_dependabot %} ](/assets/images/enterprise/3.3/dependabot/dependabot-version-update-error.png)

{% endif %}

## Entender los errores del {% data variables.product.prodname_dependabot %}

Las solicitudes de cambios para las actualizaciones de seguridad actúan para mejorar una dependencia vulnerable a la versión mínima que incluya un arreglo de la vulnerabilidad. Por el contrario, las solicitudes de cambios para las actualizaciones de versión actúan para mejorar una dependencia a la última versión que permite el paquete de archivos de manifiesto y de configuración del {% data variables.product.prodname_dependabot %}. Como consecuencia, algunos errores son específicos de un tipo de actualización.

### El {% data variables.product.prodname_dependabot %} no puede actualizar la DEPENDENCIA a una versión no-vulnerable

**Únicamente actualizaciones de seguridad**. {% data variables.product.prodname_dependabot %} no puede crear una solicitud de incorporación de cambios a fin de actualizar la dependencia vulnerable a una versión segura sin interrumpir otras dependencias del gráfico de dependencias para este repositorio.

Cada aplicación que tenga dependencias tiene una gráfica de dependencias, esto es, una gráfica acíclica dirigida de cada versión de paquete de la cual depende la aplicación directa o indirectamente. Cada vez que se actualiza una dependencia, esta gráfica debe resolverse o la aplicación no se compilará. Cuando un ecosistema tiene una gráfica de dependencias profunda y compleja, por ejemplo, npm y RubyGems, es a menudo imposible mejorar una sola dependencia sin mejorar todo el ecosistema.

La mejor forma de evitar este problema es mantenerse actualizado con los lanzamientos de versiones más recientes, por ejemplo, habilitando las actualizaciones de versión. Esto aumenta la probabilidad de que una vulnerabilidad en alguna dependencia pueda resolverse con una mejora simple que no afecte la gráfica de dependencias. Para obtener más información, consulta "[Configurar las actualizaciones de versión de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)". {% ifversion dependabot-security-updates-unlock-transitive-dependencies %}

### {% data variables.product.prodname_dependabot %} intenta actualizar las dependencias sin una alerta

**Únicamente actualizaciones de seguridad**. {% data variables.product.prodname_dependabot %} actualiza las dependencias transitivas definidas explícitamente como vulnerables para todos los ecosistemas. En el caso de npm, {% data variables.product.prodname_dependabot %} generará una solicitud de incorporación de cambios que también actualiza la dependencia primaria si es la única manera de corregir la dependencia transitiva.

Por ejemplo, un proyecto con una dependencia de `A` versión `~2.0.0` que tiene una dependencia transitiva de `B` versión `~1.0.0` que se ha resuelto en `1.0.1`.
```
my project
|
--> A (2.0.0) [~2.0.0]
       |
       --> B (1.0.1) [~1.0.0]
```       
Si se publica una vulnerabilidad de seguridad para `B` versiones `<2.0.0` y hay una revisión disponible en `2.0.0`, {% data variables.product.prodname_dependabot %} intentará actualizar `B`, pero se encontrará con que no es posible debido a la restricción implementada por `A`, que solo permite versiones vulnerables más bajas. Para corregir la vulnerabilidad, {% data variables.product.prodname_dependabot %} buscará actualizaciones de la dependencia de `A` que permitan usar la versión fija de `B`. 

{% data variables.product.prodname_dependabot %} genera automáticamente una solicitud de incorporación de cambios que actualiza las dependencias transitivas primarias y secundarias bloqueadas. {% endif %}

### El {% data variables.product.prodname_dependabot %} no puede actualizar a la versión requerida porque ya existe una solicitud de cambios abierta para la última versión

**Únicamente actualizaciones de seguridad**. {% data variables.product.prodname_dependabot %} no creará una solicitud de incorporación de cambios a fin de actualizar la dependencia vulnerable a una versión segura porque ya hay una solicitud de incorporación de cambios abierta para actualizar esta dependencia. Verás éste error cuando se detecte una vulnerabilidad en una dependencia específica y ya exista una solicitud de cambios abierta para actualizar dicha dependencia a la última versión disponible.

Existen dos opciones: puedes revisar la solicitud de cambios abierta y fusionarla tan pronto como puedas garantizar que el cambio es seguro, o cerrar la solicitud de cambios y activar una solicitud nueva de actualización de seguridad. Para obtener más información, vea "[Desencadenamiento manual de una solicitud de incorporación de cambios de {% data variables.product.prodname_dependabot %}](#triggering-a-dependabot-pull-request-manually)".

### El {% data variables.product.prodname_dependabot %} agotó el tiempo de espera durante su actualización

El {% data variables.product.prodname_dependabot %} tardó más del límite de tiempo máximo permitido para valorar la actualización requerida y preparar una solicitud de cambios. Este error normalmente se ve únicamente en los repositorios de gran tamaño con muchos archivos de manifiesto, por ejemplo, en los proyectos de npm o yarn de un repositorio, que tienen cientos de archivos *package.json*. Las actualizaciones en el ecosistema de Composer también llevan más tiempo para su valoración y podrían exceder el tiempo de espera.

Es difícil tratar a este error. Si una actualización de versión agota el tiempo de espera, podría especificar las dependencias más importantes que se van a actualizar mediante el parámetro `allow` o, como alternativa, utilizar el parámetro `ignore` para excluir algunas de las dependencias de estas actualizaciones. El actualizar tu configuración podría permitir que el {% data variables.product.prodname_dependabot %} revise la actualización de versión y genere la solicitud de cambios en el tiempo disponible.

Si una actualización de seguridad excede el tiempo de espera, puedes reducir la probabilidad de que esto suceda si mantienes las dependencias actualizadas, por ejemplo, habilitando las actualizaciones de versión. Para más información, vea "[Configuración de las actualizaciones de la versión de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)".

### El {% data variables.product.prodname_dependabot %} no puede abrir más solicitudes de cambios

Hay un límite en la cantidad de solicitudes de cambios abiertas que el {% data variables.product.prodname_dependabot %} puede generar. Cuando se llega a éste límite, no se podrán abrir más solicitudes de cambios y se reportará este error. La mejor forma de resolver este error es revisar y fusionar algunas de las solicitudes de cambios abiertas.

Hay límites separados para las solicitudes de cambios de actualización de seguridad y de versión, y esto es para que aquellas de actualización de versión no bloqueen la creación de las de actualización de seguridad. El límite para las solicitudes de cambios de actualizaciones de seguridad es de 10. De manera predeterminada, el límite de las actualizaciones de versión es 5, pero puede cambiarlo mediante el parámetro `open-pull-requests-limit` en el archivo de configuración. Para más información, vea "[Opciones de configuración para el archivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)".

La mejor forma de resolver este error es fusionar o cerrar algunas de las solicitudes de cambios existentes y activar una solicitud de cambios nueva manualmente. Para obtener más información, vea "[Desencadenamiento manual de una solicitud de incorporación de cambios de {% data variables.product.prodname_dependabot %}](#triggering-a-dependabot-pull-request-manually)".

### El {% data variables.product.prodname_dependabot %} no puede resolver o acceder a tus dependencias

Si el {% data variables.product.prodname_dependabot %} intenta verificar si las referencias de la dependencia necesitan actualizarse en un repositorio, pero no puede acceder a uno o más de los archivos referenciados, la operación fallará con el mensaje de error "{% data variables.product.prodname_dependabot %} can't resolve your LANGUAGE dependency files". El tipo de error de la API es `git_dependencies_not_reachable`.

De forma similar, si el {% data variables.product.prodname_dependabot %} no puede acceder a un registro de un paquete privado en el cual se ubica la dependencia, se generará alguno de los siguientes errores:

*   "Dependabot can't reach a dependency in a private package registry" (Dependabot no puede acceder a una dependencia en un registro de paquete privado)<br>
   (Tipo de error de la API: `private_source_not_reachable`)
*   "Dependabot can't authenticate to a private package registry" (Dependabot no se puede autenticar en un registro de paquetes privado)<br>
   (Tipo de error de la API: `private_source_authentication_failure`)
*   "Dependabot timed out while waiting for a private package registry" (Dependabot agota el tiempo de espera mientras espera un registro de paquete privado)<br>
   (Tipo de error de la API: `private_source_timed_out`)
*   "Dependabot couldn't validate the certificate for a private package registry" (Dependabot no ha podido validar el certificado para un registro de paquete privado)<br>
   (Tipo de error de la API: `private_source_certificate_failure`)

Para permitir añ {% data variables.product.prodname_dependabot %} actualizar las referencias de dependencia exitosamente, asegúrate que todas las dependencias referencias se hospeden en ubicaciones accesibles. 

**Únicamente actualizaciones de versiones**. {% data reusables.dependabot.private-dependencies-note %} Adicionalmente, el {% data variables.product.prodname_dependabot %} no es compatible con dependencias privadas de {% data variables.product.prodname_dotcom %} para todos los administradores de paquetes. Para obtener más información, vea "[Acerca de las actualizaciones de versiones de Dependabot](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)".

## Activar una solicitud de cambios del {% data variables.product.prodname_dependabot %} manualmente

Si desbloqueas al {% data variables.product.prodname_dependabot %}, puedes activar manualmente un nuevo intento de crear una solicitud de cambios.

- **Actualizaciones de seguridad**: muestre la alerta de {% data variables.product.prodname_dependabot %} que indica el error que ha corregido y haga clic en **Crear actualización de seguridad de {% data variables.product.prodname_dependabot %}** .
- **Actualizaciones de versión**: en la pestaña **Insights** (Información) del repositorio, haga clic en **Dependency graph** (Gráfico de dependencias) y luego en la pestaña **Dependabot**. Haga clic en **Last checked *TIME* ago** (Última comprobación hace TIME) para ver el archivo de registro que {% data variables.product.prodname_dependabot %} ha generado durante la última comprobación de actualizaciones de versión. Haga clic en **Buscar actualizaciones**.

## Información adicional

- "[Solución de problemas del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"
- "[Solución de problemas en la detección de dependencias vulnerables](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"
