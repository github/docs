---
title: Tablero de administración del sitio
intro: '{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %}'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard/
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
  - /admin/configuration/site-admin-dashboard
versions:
  enterprise-server: '*'
type: reference
topics:
  - Enterprise
  - Fundamentals
---

Para acceder al tablero, en la esquina superior derecha de cualquier página, haz clic en {% octicon "rocket" aria-label="The rocket ship" %}. ![Icono de cohete para acceder a la configuración de administrador del sitio](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Buscar

Aquí puedes iniciar la {{ site.data.variables.enterprise.management_console }} para administrar las configuraciones del aparato virtual como el dominio, la autenticación y SSL.

{% else %}

### Información de la licencia & buscar

Consulta esta sección del tablero de administración del sitio para controlar tu licencia {% data variables.product.prodname_enterprise %} actual, para buscar usuarios y repositorios y para consultar el [registro de auditoría](#audit-log).

{% endif %}

### {% data variables.enterprise.management_console %}

Aquí puedes iniciar la {% data variables.enterprise.management_console %} para administrar las configuraciones del aparato virtual como el dominio, la autenticación y SSL.

### Explorar

Los datos para la [página de tendencia][] de GitHub se calculan en lapsos de tiempo diarios, semanales y mensuales para ambos repositorios y programadores. Puedes ver cuándo estos datos fueron almacenados en caché por última vez y poner en cola las tareas nuevas de cálculo de tendencia desde la sección **Explore (Explorar)**.

### Registro de auditoría

{% data variables.product.prodname_enterprise %} mantiene un registro continuo de las acciones auditadas que puedes consultar.

Por defecto, el registro de auditoría te muestra una lista de todas las acciones auditadas en orden cronológico reverso. Puedes filtrar esta lista al ingresar pares de valores clave en el casillero de texto de **Query (Consulta)** y después hacer clic en **Search (Buscar)**, como se explicó en "[Buscar el registro de auditoría](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log)."

Para obtener más información acerca de las bitácoras de auditoria en general, consulta "[Bitácoras de Auditoría](/enterprise/{{ currentVersion }}/admin/guides/installation/audit-logging)". Para encontrar una lista completa de las acciones auditadas, consulta la sección "[Acciones auditadas](/enterprise/{{ currentVersion }}/admin/guides/installation/audited-actions)".

### Informes

Si necesitas obtener información sobre los usuarios, organizaciones y repositorios en {% data variables.product.product_location %}, comúnmente extraerías datos JSON a través de la [API de GitHub](/rest). Lamentablemente, es posible que la API no proporcione todos los datos que deseas y se requiera algo de conocimiento técnico para usarla. Este tablero de administración del sitio ofrece una sección de **Reports (Informes)** como una alternativa, haciendo que sea fácil descargar informes CSV con la mayoría de la información que probablemente necesites para los usuarios, las organizaciones y los repositorios.

Específicamente, puedes descargar informes CSV que enumeren a

- todos los usuarios
- todos los usuarios que han estado activos dentro del último mes
- todos los usuarios que han estado inactivos durante un mes o más
- todos los usuarios que han sido suspendidos
- todas las organizaciones
- todos los repositorios

También puedes acceder a estos informes mediante programación a través de una autenticación estándar de HTTP con una cuenta de administrador del sitio. Debes utilizar un token de acceso personal con alcance de `site_admin`. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

Por ejemplo, así es como descargarías el informe "todos los usuarios" utilizando cURL:

```shell
curl -L -u <em>username</em>:<em>token</em> http(s)://<em>hostname</em>/stafftools/reports/all_users.csv
```

Para acceder a otros informes mediante programación, reemplaza `all_users` con `active_users`, `dormant_users`, `suspended_users`, `all_organizations`, o `all_repositories`.

{% note %}

**Nota:** La solicitud `curl` inicial devolverá una respuesta 202 HTTP si no hay informes en caché disponibles; se generará un informe en segundo plano. Puedes enviar una segunda solicitud para descargar el informe. Puedes utilizar una contraseña o un token de OAuth con el alcance `site_admin` en lugar de la contraseña.

{% endnote %}

#### Informes del usuario

|                    Clave | Descripción                                                                       |
| ------------------------:| --------------------------------------------------------------------------------- |
| `created_at (creado en)` | Cuándo fue creada la cuenta de usuario (como una marca de tiempo ISO 8601)        |
|                     `id` | ID de la cuenta para el usuario o la organización                                 |
|                  `login` | Nombre de inicio de sesión de la cuenta                                           |
|     `correo electrónico` | Dirección principal de correo electrónico de la cuenta                            |
|                    `rol` | Si la cuenta es de un usuario administrador o de un usuario común                 |
|             `suspended?` | Si la cuenta ha sido suspendida                                                   |
|         `last_logged_ip` | La dirección IP más reciente que se registró en la cuenta                         |
|                  `repos` | Cantidad de repositorios que posee la cuenta                                      |
|               `ssh_keys` | Cantidad de claves SSH registradas en la cuenta                                   |
|        `org_memberships` | Cantidad de organizaciones a las que pertenece la cuenta                          |
|               `dormant?` | Si la cuenta está inactiva                                                        |
|            `last_active` | Cuándo la cuenta estuvo activa por última vez (como una marca de tiempo ISO 8601) |
|              `raw_login` | Información de inicio de sesión sin procesar (en formato JSON)                    |
|           `2fa_enabled?` | Si el usuario ha habilitado autenticación de dos factores                         |

#### Informes de la organización

|                    Clave | Descripción                                                  |
| ------------------------:| ------------------------------------------------------------ |
|                     `id` | ID de la organización                                        |
| `created_at (creado en)` | Cuándo se creó la organización                               |
|                  `login` | Nombre de inicio de sesión de la organización                |
|     `correo electrónico` | Dirección principal de correo electrónico de la organización |
|                 `owners` | Cantidad de propietarios de la organización                  |
|                `members` | Cantidad de miembros de la organización                      |
|                `equipos` | Cantidad de equipos de la organización                       |
|                  `repos` | Cantidad de repositorios de la organización                  |
|          `2fa_required?` | Si la organización requiere autenticación de dos factores    |

#### Informes del repositorio

|                    Clave | Descripción                                                        |
| ------------------------:| ------------------------------------------------------------------ |
| `created_at (creado en)` | Cuándo fue creado el repositorio                                   |
|               `owner_id` | ID del propietario del repositorio                                 |
|             `owner_type` | Si el repositorio es propiedad de un usuario o de una organización |
|             `owner_name` | Nombre del propietario del repositorio                             |
|                     `id` | ID del repositorio                                                 |
|          `name (nombre)` | Nombre del repositorio                                             |
|            `visibilidad` | Si el repositorio es público o privado                             |
|          `readable_size` | El tamaño del repositorio en un formato legible                    |
|               `raw_size` | Tamaño del repositorio como un número                              |
|          `collaborators` | Cantidad de colaboradores del repositorio                          |
|                  `fork?` | Si el repositorio es una bifurcación                               |
|               `deleted?` | Si el repositorio ha sido borrado                                  |

### Indexar

Las funciones de [búsqueda de código][] de GitHub son propulsadas por [ElasticSearch][]. Esta sección del tablero de administración del sitio muestra el estado actual de tu agrupación de ElasticSearch y brinda diversas herramientas para controlar el comportamiento de búsqueda e indexación. Estas herramientas están separadas en las siguientes tres categorías.

#### Búsqueda de código

Esto te permite habilitar o deshabilitar tanto las operaciones de búsqueda como de indexación en el código fuente.

#### Reparación del índice de búsqueda de código

Esto controla cómo se repara el índice de búsqueda de código. Puedes

- habilitar o inhabilitar tareas de reparación de índices
- comenzar una nueva tarea de reparación de índice
- restablecer todos los estados de reparación de índices

{% data variables.product.prodname_enterprise %} utiliza tareas de reparación para compaginar el estado del índice de búsqueda con los datos almacenados en una base de datos (propuestas, solicitudes de extracción, repositorios y usuarios) y los datos almacenados en los repositorios de Git (código fuente). Esto sucede cuando

- se crea un nuevo índice de búsqueda;
- faltan datos que se deben reponer; o
- los datos de búsqueda antiguos deben ser actualizados.

En otras palabras, las tareas de reparación se inician según se necesiten y se ejecutan en segundo plano, no están programados por los administradores del sitio de ningún modo.

Además, las tareas de reparación utilizan una "compensación de reparación" para la paralelización. Esto es una compensación dentro de la tabla de base de datos para el registro que se está compaginando. Múltiples tareas en segundo plano pueden sincronizar el trabajo en base a esta compensación.

Una barra de progreso muestra el estado actual de la tarea de reparación a través de todos sus trabajadores en segundo plano. Es la diferencia de porcentaje de la compensación de reparación con el ID de registro más alto en la base de datos. No te preocupes sobre el valor que se muestra en la barra de progreso después de que una tarea de reparación se haya completado: ya que muestra la diferencia entre la compensación de reparación y el ID del registro más alto en la base de datos, disminuirá a medida que se agreguen más repositorios a {% data variables.product.product_location %} incluso aquellos repositorios que están de hecho indexados.

Puedes comenzar una nueva tarea de reparación de índice de búsqueda de código en cualquier momento. Utilizará una CPU única ya que compagina el índice de búsqueda con la base de datos y los datos del repositorio de Git. Para minimizar los efectos que esto tendrá en el desempeño de I/O y reducir las posibilidades de que las operaciones queden inactivas, trata de ejecutar una tarea de reparación durante las horas valle en primer lugar. Controla las cargas promedio de tu sistema y el uso de tu CPU con una herramienta como `top`; si no notas cambios significativos, debería ser seguro ejecutar una tarea de reparación de índice también durante las horas pico.

#### Reparación de índice de propuestas

Esto controla de qué manera se repara el [índice de propuestas][]. Puedes

- habilitar o inhabilitar tareas de reparación de índices
- comenzar una nueva tarea de reparación de índice
- restablecer todos los estados de reparación de índices

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Todos los usuarios

Aquí puedes ver todos los usuarios que han sido suspendidos en {{ site.data.variables.product.product_location_enterprise }}, e [iniciar una auditoría clave de SSH](/enterprise/{{ page.version }}/admin/guides/user-management/auditing-ssh-keys).

{% endif %}

### Repositorios

Es una lista de los repositorios en {% data variables.product.product_location %}. Puedes hacer clic en un nombre de repositorio y acceder a las funciones para administrar el repositorio.

- [Bloquear empujes forzados en un repositorio](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [Configurar {% data variables.large_files.product_name_long %}](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [Archivar y desarchivar repositorios](/enterprise/{{ currentVersion }}/admin/guides/user-management/archiving-and-unarchiving-repositories/)

### Todos los usuarios

Aquí puedes ver todos los usuarios en {% data variables.product.product_location %}—, e [iniciar una auditoría clave de SSH](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

### Administrador del sitio

Aquí puedes ver todos los administradores en {% data variables.product.product_location %}, e [iniciar una auditoría clave en SSH](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

### Usuarios inactivos

Aquí puedes ver y [suspender](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users) todos los usuarios inactivos en {% data variables.product.product_location %}. Una cuenta de usuario se considera inactiva ("dormant") cuando:

- Ha existido durante más tiempo del umbral de inactividad que está establecido para {% data variables.product.product_location %}.
- No ha generado ninguna actividad dentro de ese período.
- No es un administrador del sitio.

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} Para obtener más información, consulta "[Administrar usuarios inactivos](/enterprise/{{ currentVersion }}/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold)."

### Usuarios suspendidos

Aquí puedes ver todos los usuarios que han sido suspendidos en {% data variables.product.product_location %}, e [iniciar una auditoría clave de SSH](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

  [página de tendencia]: https://github.com/blog/1585-explore-what-is-trending-on-github

  [búsqueda de código]: https://github.com/blog/1381-a-whole-new-code-search
  [ElasticSearch]: http://www.elasticsearch.org/

  [índice de propuestas]: https://github.com/blog/831-issues-2-0-the-next-generation
