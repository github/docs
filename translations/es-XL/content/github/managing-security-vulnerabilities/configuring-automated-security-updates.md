---
title: Configurando actualizaciones de seguridad automatizadas
intro: Puedes usar solicitudes de extracción automatizadas o manuales para actualizar fácilmente dependencias vulnerables.
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
versions:
  free-pro-team: '*'
---

### Sobre las actualizaciones de seguridad automatizadas

Puedes habilitar actualizaciones de seguridad automatizadas para cualquier repositorio que utilice alertas de seguridad y el gráfico de dependencias. Puedes desactivar las actualizaciones de seguridad automatizadas para un repositorio individual o para todos los repositorios que sean propiedad de tu cuenta de usuario u organización.

Cuando recibas una alerta de seguridad sobre una dependencia vulnerable en tu repositorio, puedes resolver la vulnerabilidad usando una actualización de seguridad automatizada en una solicitud de extracción que corresponde a dicha alerta. Las actualizaciones de seguridad automatizadas se encuentran disponibles en los repositorios que utilicen la gráfica de dependencias. Por defecto, {% data variables.product.prodname_dotcom %} automáticamente crea una solicitud de extracción en tu repositorio para actualizar la dependencia vulnerable a la mínima versión segura posible que se necesita para evitar la vulnerabilidad. Si lo prefieres, puedes inhabilitar las solicitudes de extracción automáticas y crear manualmente solicitudes de extracción para actualizar dependencias solo cuando lo desees.

Las solicitudes de seguridad automatizadas tienen todo lo que necesitas para revisar y fusionar de manera rápida y segura una corrección propuesta en tu proyecto, incluida la información sobre la vulnerabilidad como notas de lanzamiento, entradas de registro de cambios y detalles de confirmaciones.

Las actualizaciones de seguridad automatizadas se abren por medio de Dependabot a nombre de {% data variables.product.prodname_dotcom %}. El Dependabot {% data variables.product.prodname_github_app %} se instala automáticamente en cada repositorio donde se habiliten las actualizaciones de seguridad automatizadas.

Las personas con acceso a las alertas de seguridad de tu repositorio verán un enlace a las alertas de seguridad pertinentes, si bien otras personas con acceso a la solicitud de extracción no podrán ver qué vulnerabilidad resuelve la solicitud de extracción.

Cuando fusionas una solicitud de extracción que contiene una actualización de seguridad automatizada, la alerta de seguridad correspondiente se marca como resuelta en tu repositorio.

{% note %}

**Nota:**Las actualizaciones de seguridad automatizadas únicamente resuelven vulnerabilidades de seguridad. Las actualizaciones de seguridad automatizadas no se crean para resolver vulnerabilidades en registros o paquetes privados hospedados en repositorios privados.

{% endnote %}

### Repositorios compatibles

{% data variables.product.prodname_dotcom %} habilita automáticamente las actualizaciones de seguridad automatizadas para todo repositorio que cumpla con los siguientes requisitos.

{% note %}

**Nota**: Para los repositorios creados antes de noviembre de 2019, {% data variables.product.prodname_dotcom %} ha habilitado automáticamente las actualizaciones de seguirdad automatizadas si el repositorio cumple con los siguientes criterios y ha recibido por lo menos una subida de información desde el 23 de mayo de 2019.

{% endnote %}

| Requisito                                                                                                                                                                                                                                   | Más información                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Que el repositorio no sea una bifrucación                                                                                                                                                                                                   | "[Acerca de las bifurcaciones](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                                                                                   |
| Que el repositorio no esté archivado                                                                                                                                                                                                        | "[Archivar repositorios](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                                                                                              |
| Que el repositorio sea público, o que sea privado y hayas habilitado un análisis de solo lectura por {% data variables.product.prodname_dotcom %}, gráfica de dependencias y alertas de vulnerabilidades en la configuración del mismo | "[Optar por utilizar datos para tu repositorio privado](/github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository#opting-into-data-use-for-your-private-repository)" |
| Que el repositorio contenga un archivo de manifiesto de dependencias de un ecosistema de paquete que sea compatible con {% data variables.product.prodname_dotcom %}                                                                   | "[Ecosistemas de paquete compatibles](/github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on#supported-package-ecosystems)"                                                             |
| Que las actualizaciones de seguridad automatizadas no se inhabiliten en el repositorio                                                                                                                                                      | "[Administrar las actualizaciones de seguridad automatizadas para tu repositorio](#managing-automated-security-updates-for-your-repository)"                                                                                       |
| Que el repositorio no esté utilizando ya una integración para administración de dependencias                                                                                                                                                | "[Acerca de las integraciones](/github/customizing-your-github-workflow/about-integrations)"                                                                                                                                       |

Si tu repositorio no tiene habilitadas las actualizaciones de seguridad automatizadas y no sabes por qué, puedes [contactar a soporte](https://support.github.com/contact).

### Acerca de las puntuaciones de compatibilidad

Las actualizaciones de seguridad automatizadas también incluyen puntajes de compatibilidad para que puedas saber si actualizar una vulnerabilidad podría causar cambios importantes en tu proyecto. Revisamos las pruebas de IC aprobadas previamente en repositorios públicos donde hemos generado alguna actualización de seguridad automática para aprender si esta causa que las pruebas fallen. Una puntuación de compatibilidad de la actualización es el porcentaje de ejecuciones de CI que se aprobaron al actualizar entre las versiones relevantes de la dependencia.

### Administrar las actualizaciones de seguridad automatizadas para tu repositorio

Puedes habilitar o inhabilitar las actualizaciones de seguridad automatizadas par aun repositorio individual.

Estas actualizaciones requieren una configuración específica del repositorio. Para obtener más información, consulta la sección "[Repositorios compatibles](#supported-repositories)".

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
4. Arriba del listado de alertas, utiliza el menú desplegable y selecciona o deselecciona **Actualizaciones de seguridad automatizadas**. ![Menú desplegable con la opción de habilitar las actualizaciones de seguridad automatizadas](/assets/images/help/repository/enable-automated-security-updates-drop-down.png)

### Administrar las actualizaciones de seguridad automatizadas para tu cuenta de usuario

Puedes inhabilitar las actualizaciones de seguridad automatizadas para todos los repositorios que pertenezcan a tu cuenta de usuario. Si lo haces, aún puedes habilitar dichas actualizaciones para repositorios individuales que pertenezcan a tu cuenta de usuario.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.repositories.opt-out-automated-security-updates %}

### Administrar las actualizaciones de seguridad automatizadas para tu organización

Los propietarios de las organizaciones pueden inhabilitar las actualizaciones de seguridad automatizadas para todos los repositorios que les pertenezcan. Si lo hacen, cualquiera con permisos de administrador en un repositorio individual que pertenezca a la organización aún podrá habilitar estas actualizaciones en el mismo.

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.repositories.opt-out-automated-security-updates %}

### Leer más

- "[Acerca de las alertas de seguridad para las dependencias vulnerables](/articles/about-security-alerts-for-vulnerable-dependencies)"
- "[Optar por utilizar datos para tu repositorio privado](/github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository#opting-into-data-use-for-your-private-repository)"
- "[Ecosistemas de paquete compatibles](/github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on#supported-package-ecosystems)"
