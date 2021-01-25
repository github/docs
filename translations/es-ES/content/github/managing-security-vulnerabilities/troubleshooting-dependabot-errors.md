---
title: Solucionar problemas de los errores del Dependabot
intro: 'Algunas veces, el {% data variables.product.prodname_dependabot %} no puede levantar solicitudes de cambios para actualizar tus dependencias. Puedes revisar el error y desbloquear al {% data variables.product.prodname_dependabot %}.'
shortTitle: Solución de errores
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### Acerca de los errores del {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Si existe algo que impida que el {% data variables.product.prodname_dependabot %} levante una solicitud de cambios, esto se reporta como un error.

### Investigar los errores de las {% data variables.product.prodname_dependabot_security_updates %}

Cuando se bloquea al {% data variables.product.prodname_dependabot %} y no puede crear una solicitud de cambios para arreglar una alerta del {% data variables.product.prodname_dependabot %}, éste publica el mensaje de error en la alerta. La vista de {% data variables.product.prodname_dependabot_alerts %} muestra una lista de cualquier alerta que aún no se haya resuelto. Para acceder a la vista de alertas, da clic en **{% data variables.product.prodname_dependabot_alerts %}** en la pestaña de **Seguridad** del repositorio. Donde sea que se genere una solicitud de cambios que arregle una dependencia vulnerable, la alerta incluirá un enlace a dicha solicitud.

![Vista de las {% data variables.product.prodname_dependabot_alerts %} que muestra un enlace a una solicitud de cambios](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

Hay tres razones por las cuales una alerta pudiera no tener un enlace a una solicitud de cambios:

1. No se han habilitado las {% data variables.product.prodname_dependabot_security_updates %} en el repositorio.
1. La alerta es para una dependencia transitoria o indirecta que no se definió explícitamente en un archivo de bloqueo.
1. Un error bloqueó al {% data variables.product.prodname_dependabot %} y éste no puede crear una solicitud de cambios.

Si existe un error que bloqueó al {% data variables.product.prodname_dependabot %} y éste no puede crear una solicitud de cambios, puedes mostrar los detalles del error si das clic en la alerta.

![Alerta del {% data variables.product.prodname_dependabot %} que mustra el error que bloqueó la creación de una solicitud de cambios](/assets/images/help/dependabot/dependabot-security-update-error.png)

### Investigar los errores de las {% data variables.product.prodname_dependabot_version_updates %}

Cuando el {% data variables.product.prodname_dependabot %} se bloquea y no puede crear una solicitud de cambios para actualizar una dependencia en un ecosistema, éste publica el icono de error en el archivo de manifiesto. Los archivos de manifiesto que administra el {% data variables.product.prodname_dependabot %} se listan en la pestaña de {% data variables.product.prodname_dependabot %}. Para acceder a esta pestaña, en la pestaña de **perspectivas** del repositorio, da clic en **Gráfica de dependencias**, y luego en la pestaña **{% data variables.product.prodname_dependabot %}**.

![vista del {% data variables.product.prodname_dependabot %} que muestra un error](/assets/images/help/dependabot/dependabot-tab-view-error-beta.png)

Para ver el archivo de bitácora de cualquier archivo de manifiesto, da clic en el enlace de **Última revisión hace TIEMPO**. Cuando muestras el archivo de bitácora de un manifiesto que se muestra con un símbolo de error (por ejemplo, Maven en la impresión de pantalla anterior), cualquier error se mostrará también.

![Error y bitácora de una actualizacón de versión del {% data variables.product.prodname_dependabot %} ](/assets/images/help/dependabot/dependabot-version-update-error-beta.png)

### Entender los errores del {% data variables.product.prodname_dependabot %}

Las solicitudes de cambios para las actualizaciones de seguridad actúan para mejorar una dependencia vulnerable a la versión mínima que incluya un arreglo de la vulnerabilidad. Por el contrario, las solicitudes de cambios para las actualizaciones de versión actúan para mejorar una dependencia a la última versión que permite el paquete de archivos de manifiesto y de configuración del {% data variables.product.prodname_dependabot %}. Como consecuencia, algunos errores son específicos de un tipo de actualización.

#### El {% data variables.product.prodname_dependabot %} no puede actualizar la DEPENDENCIA a una versión no-vulnerable

**Únicamente actualizaciones de seguridad.** El {% data variables.product.prodname_dependabot %} no puede crear una solicitud de cambios para actualizar la dependencia vulnerable a una versión segura sin afectar otras dependencias en la gráfica de dependencias de este repositorio.

Cada aplicación que tenga dependencias tiene una gráfica de dependencias, esto es, una gráfica acíclica dirigida de cada versión de paquete de la cual depende la aplicación directa o indirectamente. Cada vez que se actualiza una dependencia, esta gráfica debe resolverse o la aplicación no se compilará. Cuando un ecosistema tiene una gráfica de dependencias profunda y compleja, por ejemplo, npm y RubyGems, es a menudo imposible mejorar una sola dependencia sin mejorar todo el ecosistema.

La mejor forma de evitar este problema es mantenerse actualizado con los lanzamientos de versiones más recientes, por ejemplo, habilitando las actualizaciones de versión. Esto aumenta la probabilidad de que una vulnerabilidad en alguna dependencia pueda resolverse con una mejora simple que no afecte la gráfica de dependencias. Para obtener más información, consulta la sección "[Habilitar e inhabilitar las actualizaciones de versión](/github/administering-a-repository/enabling-and-disabling-version-updates)".

#### El {% data variables.product.prodname_dependabot %} no puede actualizar a la versión requerida porque ya existe una solicitud de cambios abierta para la última versión

**Únicamente actualizaciones de seguridad.** El {% data variables.product.prodname_dependabot %}no creará una solicitud de cambios para actualizar la dependencia vulnerable a una versión segura porque ya existe una solicitud de cambios abierta para actualizar dicha dependencia. Verás éste error cuando se detecte una vulnerabilidad en una dependencia específica y ya exista una solicitud de cambios abierta para actualizar dicha dependencia a la última versión disponible.

Existen dos opciones: puedes revisar la solicitud de cambios abierta y fusionarla tan pronto como puedas garantizar que el cambio es seguro, o cerrar la solicitud de cambios y activar una solicitud nueva de actualización de seguridad. Para obtener más información, consulta la sección "[Activar una solicitud de cambios del {% data variables.product.prodname_dependabot %} manualmente](#triggering-a-dependabot-pull-request-manually)".

#### El {% data variables.product.prodname_dependabot %} agotó el tiempo de espera durante su actualización

El {% data variables.product.prodname_dependabot %} tardó más del límite de tiempo máximo permitido para valorar la actualización requerida y preparar una solicitud de cambios. Este error a menudo se ve únicamente en los repositorios grandes con muchos archivos de manifiesto, por ejemplo, en los proyectos de npm o yarn monorepo, que tienen cientos de archivos *package.json*. Las actualizaciones en el ecosistema de Composer también llevan más tiempo para su valoración y podrían exceder el tiempo de espera.

Es difícil tratar a este error. Si una actualización de versión excede el tiempo de espera, podrías especificar las dependencias más importantes a actualizar utilizando el parámetro `allow` o, como alternativa, utilizar el parámetro `ignore` para excluir algunas de las dependencias de estas actualizaciones. El actualizar tu configuración podría permitir que el {% data variables.product.prodname_dependabot %} revise la actualización de versión y genere la solicitud de cambios en el tiempo disponible.

Si una actualización de seguridad excede el tiempo de espera, puedes reducir la probabilidad de que esto suceda si mantienes las dependencias actualizadas, por ejemplo, habilitando las actualizaciones de versión. Para obtener más información, consulta la sección "[Habilitar e inhabilitar las actualizaciones de versión](/github/administering-a-repository/enabling-and-disabling-version-updates)".

#### El {% data variables.product.prodname_dependabot %} no puede abrir más solicitudes de cambios

Hay un límite en la cantidad de solicitudes de cambios abiertas que el {% data variables.product.prodname_dependabot %} puede generar. Cuando se llega a éste límite, no se podrán abrir más solicitudes de cambios y se reportará este error. La mejor forma de resolver este error es revisar y fusionar algunas de las solicitudes de cambios abiertas.

Hay límites separados para las solicitudes de cambios de actualización de seguridad y de versión, y esto es para que aquellas de actualización de versión no bloqueen la creación de las de actualización de seguridad. El límite para las solicitudes de cambios de actualizaciones de seguridad es de 10. Predeterminadamente, el límite para las actualizaciones de versión es de 5, pero puedes cambiar ésto utilizando el parámetro `open-pull-requests-limit` en el archivo de configuración. Para obtener más información, consulta la sección "[Opciones de configuración para las actualizaciones de dependencias](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)".

La mejor forma de resolver este error es fusionar o cerrar algunas de las solicitudes de cambios existentes y activar una solicitud de cambios nueva manualmente. Para obtener más información, consulta la sección "[Activar una solicitud de cambios del {% data variables.product.prodname_dependabot %} manualmente](#triggering-a-dependabot-pull-request-manually)".

#### El {% data variables.product.prodname_dependabot %} no puede resolver tus archivos de dependencia

If {% data variables.product.prodname_dependabot %} attempts to check whether dependency references need to be updated in a repository, but can't access one or more of the referenced files, the operation will fail with the error message "{% data variables.product.prodname_dependabot %} can't resolve your LANGUAGE dependency files." The API error type is `git_dependencies_not_reachable`.

To allow {% data variables.product.prodname_dependabot %} to update the dependency references successfully, make sure that all of the referenced dependencies are hosted at accessible locations.

**Version updates only.** {% data reusables.dependabot.private-dependencies-note %} Additionally, {% data variables.product.prodname_dependabot %} doesn't support private {% data variables.product.prodname_dotcom %} dependencies for all package managers. Para obtener más información, consulta la sección "[Acerca de las actualizaciones de versión del Dependabot](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)".

### Activar una solicitud de cambios del {% data variables.product.prodname_dependabot %} manualmente

Si desbloqueas al {% data variables.product.prodname_dependabot %}, puedes activar manualmente un nuevo intento de crear una solicitud de cambios.

- **Actualizaciones de seguridad**—muestra la alerta del {% data variables.product.prodname_dependabot %} que presente el error que arreglaste y da clic en **Crear una actualización de seguridad del {% data variables.product.prodname_dependabot %}**.
- **Version updates**—on the **Insights** tab for the repository click **Dependency graph**, and then click the **Dependabot** tab. Click **Last checked *TIME* ago** to see the log file that {% data variables.product.prodname_dependabot %} generated during the last check for version updates. Click **Check for updates**.
