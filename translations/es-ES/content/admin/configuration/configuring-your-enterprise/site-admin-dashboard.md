---
title: Tablero de administración del sitio
intro: '{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %}'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
  - /admin/configuration/site-admin-dashboard
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 5e845824a5216e43f1e4e8f7b73f08963ce1d71b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147763712'
---
Para acceder al panel, en la esquina superior derecha de cualquier página, haga clic en {% octicon "rocket" aria-label="The rocket ship" %}.
![Icono de cohete para acceder a la configuración de administrador del sitio](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% ifversion ghes or ghae %}

## Buscar

Consulte esta sección del panel de administración del sitio para buscar usuarios y repositorios y para consultar el [registro de auditoría](#audit-log).

{% else %}

## Búsqueda e información de licencias

Consulte esta sección del panel de administración del sitio para consultar su licencia actual de {% data variables.product.prodname_enterprise %}, para buscar usuarios y repositorios y para consultar el [registro de auditoría](#audit-log).

{% endif %} {% ifversion ghes %}
## {% data variables.enterprise.management_console %}

Aquí puedes iniciar la {% data variables.enterprise.management_console %} para administrar las configuraciones del aparato virtual como el dominio, la autenticación y SSL.
{% endif %}
## Explorar

Los datos de la [página de tendencias][] de GitHub se calculan en intervalos de tiempo diarios, semanales y mensuales para los repositorios y los desarrolladores. Puede ver cuándo se almacenaron en caché por última vez estos datos y poner en cola nuevos trabajos de cálculo de tendencias en la sección **Explore** (Explorar).

  [página de tendencias]: https://github.com/blog/1585-explore-what-is-trending-on-github

## Registro de auditoría

{% data variables.product.product_name %} mantiene un registro de las acciones auditadas que puede consultar.

Por defecto, el registro de auditoría te muestra una lista de todas las acciones auditadas en orden cronológico reverso. Para filtrar esta lista, escriba pares clave-valor en el cuadro de texto **Query** (Consulta) y, después, haga clic en **Search** (Buscar), como se explica en "[Búsqueda en el registro de auditoría de la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)".

Para obtener más información sobre el registro de auditoría en general, consulte "[Acerca del registro de auditoría de la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)". Para obtener una lista completa de las acciones auditadas, vea "[Eventos de registro de auditoría de la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

## Informes

Si necesita obtener información sobre los usuarios, las organizaciones y los repositorios en {% data variables.product.product_location %}, normalmente capturaría los datos JSON mediante la [API de GitHub](/rest). Lamentablemente, es posible que la API no proporcione todos los datos que deseas y se requiera algo de conocimiento técnico para usarla. El panel de administración del sitio ofrece una sección **Reports** (Informes) como alternativa, la cual facilita la descarga de informes CSV con gran parte de la información que probablemente necesite para los usuarios, las organizaciones y los repositorios.

Específicamente, puedes descargar informes CSV que enumeren a

- todos los usuarios
- todos los usuarios activos
- todos los [usuarios inactivos](/admin/user-management/managing-dormant-users)
- todos los usuarios que han sido suspendidos
- todas las organizaciones
- todos los repositorios

También puedes acceder a estos informes mediante programación a través de una autenticación estándar de HTTP con una cuenta de administrador del sitio. Debe usar un token de acceso personal con el ámbito `site_admin`. Para más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

Por ejemplo, así es como descargarías el informe "todos los usuarios" utilizando cURL:

```shell
curl -L -u <em>username</em>:<em>token</em> http(s)://<em>hostname</em>/stafftools/reports/all_users.csv
```

Para acceder a los demás informes mediante programación, reemplace `all_users` por `active_users`, `dormant_users`, `suspended_users`, `all_organizations` o `all_repositories`.

{% note %}

**Nota:** La solicitud `curl` inicial devolverá una respuesta 202 HTTP si no hay informes en caché disponibles; se generará un informe en segundo plano. Puedes enviar una segunda solicitud para descargar el informe. Puede usar una contraseña o un token de OAuth con el ámbito `site_admin` en lugar de una contraseña.

{% endnote %}

### Informes del usuario

Clave               | Descripción
-----------------:| ------------------------------------------------------------
`created_at`      | Cuándo fue creada la cuenta de usuario (como una marca de tiempo ISO 8601)
`id`              | ID de la cuenta para el usuario o la organización
`login`           | Nombre de inicio de sesión de la cuenta
`email`           | Dirección principal de correo electrónico de la cuenta
`role`            | Si la cuenta es de un usuario administrador o de un usuario común
`suspended?`      | Si la cuenta ha sido suspendida
`last_logged_ip`  | La dirección IP más reciente que se registró en la cuenta
`repos`           | Cantidad de repositorios que posee la cuenta
`ssh_keys`        | Cantidad de claves SSH registradas en la cuenta
`org_memberships` | Cantidad de organizaciones a las que pertenece la cuenta
`dormant?`        | Si la cuenta está inactiva
`last_active`     | Cuándo la cuenta estuvo activa por última vez (como una marca de tiempo ISO 8601)
`raw_login`       | Información de inicio de sesión sin procesar (en formato JSON)
`2fa_enabled?`    | Si el usuario ha habilitado autenticación de dos factores

### Informes de la organización

Clave            | Descripción
--------------:| ------------------------------------
`id`           | Identificador de la organización
`created_at`   | Cuándo se creó la organización
`login`        | Nombre de inicio de sesión de la organización
`email`        | Dirección principal de correo electrónico de la organización
`owners`       | Cantidad de propietarios de la organización
`members`      | Cantidad de miembros de la organización
`teams`        | Cantidad de equipos de la organización
`repos`        | Cantidad de repositorios de la organización
`2fa_required?`| Si la organización requiere autenticación de dos factores

### Informes del repositorio

Clave             | Descripción
---------------:| ------------------------------------------------------------
`created_at`    | Cuándo fue creado el repositorio
`owner_id`      | ID del propietario del repositorio
`owner_type`    | Si el repositorio es propiedad de un usuario o de una organización
`owner_name`    | Nombre del propietario del repositorio
`id`            | ID del repositorio
`name`          | Nombre del repositorio
`visibility`    | Si el repositorio es público o privado
`readable_size` | El tamaño del repositorio en un formato legible
`raw_size`      | Tamaño del repositorio como un número
`collaborators` | Cantidad de colaboradores del repositorio
`fork?`         | Si el repositorio es una bifurcación
`deleted?`      | Si el repositorio ha sido borrado

{% ifversion ghes %}
## Indización

Las características de búsqueda de GitHub se basan en la tecnología ElasticSearch. Esta sección del tablero de administración del sitio muestra el estado actual de tu cluster de ElasticSearch y brinda diversas herramientas para controlar el comportamiento de búsqueda e indexación.

Par más información sobre la búsqueda de código, consulta "[Búsqueda de información sobre {% data variables.product.prodname_dotcom %}](/search-github)". Para más información sobre Elasticsearch, consulta el [sitio web de Elasticsearch](https://elastic.co).

{% note %}

**Nota**: En uso normal, los administradores del sitio no necesitan crear nuevos índices ni programar trabajos de reparación. Para solucionar problemas u otros fines de soporte técnico, {% data variables.contact.github_support %} puede indicarte que ejecutes un trabajo de reparación.

{% endnote %}

### Administración de índices

{% data variables.product.product_name %} reconcilia el estado del índice de búsqueda con los datos de la instancia de forma automática y periódica.

- Propuestas, solicitudes de incorporación de cambios, repositorios y usuarios en la base de datos
- Repositorios de Git (código fuente) en disco

La instancia usa trabajos de reparación para conciliar los datos y programa un trabajo de reparación en segundo plano cuando se producen los siguientes eventos.

- Se crea un nuevo índice de búsqueda;
- faltan datos que se deben reponer; o
- los datos de búsqueda antiguos deben ser actualizados.

Puedes crear un nuevo índice o hacer clic en un índice existente en la lista para administrar el índice. Puedes realizar las siguientes operaciones en un índice.

- Haz que el índice se pueda buscar.
- Haz que el índice se pueda escribir.
- Actualiza el índice.
- Elimina el índice.
- Restablece el estado de reparación del índice.
- Comienza una nueva tarea de reparación de índice.
- Habilita o inhabilita tareas de reparación de índices.

Una barra de progreso muestra el estado actual de la tarea de reparación a través de todos sus trabajadores en segundo plano. La barra es la diferencia de porcentaje de la compensación de reparación con el ID de registro más alto en la base de datos. Puedes omitir el valor que se muestra en la barra de progreso después de que se haya completado un trabajo de reparación. La barra de progreso muestra la diferencia entre la compensación de reparación y el identificador de registro más alto en la base de datos. Además, este valor disminuirá a medida que se agreguen más repositorios a {% data variables.product.product_location %} incluso aunque esos repositorios estén indexados.

Para minimizar los efectos que esto tendrá en el desempeño de E/S y reducir las posibilidades de que las operaciones queden inactivas, trata de ejecutar una tarea de reparación durante las horas de poca actividad. A medida que el trabajo reconcilia el índice de búsqueda con la base de datos de Git y los datos del repositorio, se usará una CPU. Supervisa los promedios de carga del sistema y el uso de CPU con una utilidad como `top`. Si no observas ningún aumento significativo en el consumo de recursos, también debe ser seguro ejecutar un trabajo de reparación de índices durante las horas de más actividad.

Las tareas de reparación utilizan una "compensación de reparación" para la paralelización. Esto es una compensación dentro de la tabla de base de datos para el registro que se está compaginando. Múltiples tareas en segundo plano pueden sincronizar el trabajo en base a esta compensación.

### Búsqueda de código

Esto te permite habilitar o deshabilitar tanto las operaciones de búsqueda como de indexación en el código fuente.

{% endif %}
## Inicios de sesión reservados

Algunas palabras se reservan para uso interno en {% data variables.product.product_location %}, lo cual significa que estas no pueden utilizarse como nombres de usuario.

Por ejemplo, las siguientes palabras, entre otras, son reservadas:

- `admin`
- `enterprise`
- `login`
- `staff`
- `support`

Para una lista completa de palabras reservadas, navega a la sección de "Inicios de sesión reservados" en el tablero de administrador de sitio.

{% ifversion ghas-committers-calculator %}
## Confirmadores de {% data variables.product.prodname_advanced_security %}

Puedes ver el número de confirmadores activos que actualmente usan puestos para {% data variables.product.prodname_GH_advanced_security %}, y puedes calcular cuántos puestos adicionales se usarían si has habilitado {% data variables.product.prodname_GH_advanced_security %} para más organizaciones y repositorios.

En "Recuento de confirmadores activos actuales", puedes ver el número de confirmadores activos para repositorios con {% data variables.product.prodname_GH_advanced_security %} habilitado. Este es el número de puestos con licencia que se están usando actualmente.

En "Número máximo de confirmadores en toda la instancia", puedes ver el número de confirmadores activos en todos los repositorios de la empresa. Este es el número de puestos que se usarían si habilitaste {% data variables.product.prodname_GH_advanced_security %} para cada repositorio de la empresa.

En "Calcular confirmadores avanzados adicionales", puedes calcular cuántos puestos adicionales se usarán si habilitas {% data variables.product.prodname_GH_advanced_security %} para organizaciones y repositorios específicos. En "Organizaciones y repositorios", escribe o pega una lista de organizaciones y repositorios, con una organización o repositorio por línea. 

```
example-org
octo-org/octo-repo
```

El resultado es el número de puestos adicionales que se usarían si habilitaste {% data variables.product.prodname_GH_advanced_security %} para esas organizaciones y repositorios.

Para obtener más información sobre la facturación de {% data variables.product.prodname_advanced_security %}, consulta "[Acerca de la facturación de {% data variables.product.prodname_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".
{% endif %}

## Todos los usuarios

Consulte esta sección del panel de administración del sitio para administrar organizaciones, personas, directivas y configuraciones.

## Repositorios

Esta es una lista de los repositorios en {% data variables.product.product_location %}. Puedes hacer clic en un nombre de repositorio y acceder a las funciones para administrar el repositorio.

- [Bloqueo de inserciones forzadas en un repositorio](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [Configuración de {% data variables.large_files.product_name_long %}](/enterprise/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [Archivado y desarchivado de repositorios](/enterprise/admin/guides/user-management/archiving-and-unarchiving-repositories/)

## Todos los usuarios

Aquí puede ver a todos los usuarios de {% data variables.product.product_location %} e [iniciar una auditoría de clave SSH](/enterprise/admin/guides/user-management/auditing-ssh-keys).

## Administrador del sitio

Aquí puede ver a todos los administradores de {% data variables.product.product_location %} e [iniciar una auditoría de clave SSH](/enterprise/admin/guides/user-management/auditing-ssh-keys).

## Usuarios inactivos
{% ifversion ghes %} Aquí puede ver y [suspender](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) a todos los usuarios inactivos de {% data variables.product.product_location %}. Se considera que una cuenta de usuario está inactiva cuando: {% endif %} {% ifversion ghae %} Aquí puede ver y suspender a todos los usuarios inactivos de {% data variables.product.product_location %}. Se considera que una cuenta de usuario está inactiva cuando: {% endif %}

- Ha existido durante más tiempo que el umbral de inactividad establecido para {% data variables.product.product_location %}.
- No ha generado ninguna actividad dentro de ese período.
- No es un administrador del sitio.

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} Para obtener más información, vea "[Administración de usuarios inactivos](/enterprise/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold)".

## Usuarios suspendidos

Aquí puede ver a todos los usuarios suspendidos de {% data variables.product.product_location %} e [iniciar una auditoría de clave SSH](/enterprise/admin/guides/user-management/auditing-ssh-keys).
