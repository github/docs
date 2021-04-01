---
title: Notas de lanzamiento de GitHub AE
intro: 1 de marzo de 2021
versions:
  github-ae: '*'
---

### Características

#### {% data variables.product.prodname_actions %} beta

[{% data variables.product.prodname_actions %}](https://github.com/features/actions) es una solución potente y flexible para IC/DC y automatización de flujos de trabajo. Para obtener más información, consulta la sección "[Introducción a las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/introduction-to-github-actions)".

Las {% data variables.product.prodname_actions %} en {% data variables.product.product_name %} utilizan un [{% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners) nuevo, el cual sólo está disponible para {% data variables.product.product_name %} y te habilita para personalizar el tamaño, imagen y configuración de trabajo en red para los ejecutores. Estos ejecutores son un ambiente de cómputo de IC con un servicio finalizado y auto escalamiento y administración que {% data variables.product.company_short %} administra integralmente. Durante el beta, el uso de los {% data variables.actions.hosted_runner %} es gratuito. Para obtener más información, consulta la sección "[Agregar {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/adding-ae-hosted-runners)".

Por favor, nota que cuando se habilitan las {% data variables.product.prodname_actions %} durante esta actualización, dos organizaciones de nombre "GitHub Actions" (@**actions** y @**github**) se mostrarán en {% data variables.product.product_location %}. {% data variables.product.prodname_actions %} necesita de ambas organizaciones. Los usuarios que se llaman @**ghost** y @**actions** se muestran como los actores para la creación de estas organizaciones en la bitácora de auditoría.

#### {% data variables.product.prodname_registry %} beta

[{% data variables.product.prodname_registry %}](https://github.com/features/packages) es un servicio de hospedaje de paquetes que se integra nativamente con {% data variables.product.prodname_actions %}, las API, y los webhooks. Crea un [flujo de trabajo de extremo a extremo de DevOps](/github-ae@latest/packages/quickstart) que incluya tu código, integración contínua y soluciones de despliegue. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-github-packages)".

Durante este beta, el {% data variables.product.prodname_registry %} es gratuito para los clientes de {% data variables.product.product_name %}.

#### {% data variables.product.prodname_GH_advanced_security %} beta

{% data variables.product.prodname_GH_advanced_security %} se encuentra disponible en beta e incluye tanto {% data variables.product.prodname_code_scanning %} como {% data variables.product.prodname_secret_scanning %}. Los administradores de repositorio y propietarios de organizaciones pueden decidir participar en las características de {% data variables.product.prodname_advanced_security %}, en la configuración de un repositorio u organización, dentro de la pestaña de **Seguridad y análisis**. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

Durante este beta, las características de {% data variables.product.prodname_advanced_security %} serán gratuitas para los clientes de {% data variables.product.product_name %}.

#### Administra equipos desde tu proveedor de identidad (IdP)

Los clientes que utilizan SCIM (Sistema para la Adminsitración de Identidades entre Dominios) ahora pueden sincronizar los grupos de seguridad en Azure Active Directory con los equipos de {% data variables.product.company_short %}. Una vez que un equipo se haya enlazado con un grupo de seguridad, la membercía se actualizará automáticamente en {% data variables.product.product_name %} cuando se agregue o elimine a un suuario de su grupo de seguridad asignado. Para obtener más información, consulta la sección "[Sincronizar a un equipo con un grupo de proveedor de identidad](/github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group)".

#### Beta de listas de IP permitidas

Los propietarios de empresas y organizaciones ahora pueden utilizar las listas de IP permitidas para restringir el tráfico a las empresas u organizaciones específicas. Después de que configuras una lista de IP permitidas, solo los visitantes de las direcciónes IP permitidas podrán acceder a los recursos que protege dicha lista.

Esta funcionalidad se proporciona adicionalmente a la capacidad de solicitar cambios en los grupos de seguridad en redes que filtren el tráfico del inquilino de {% data variables.product.product_name %} integralmente.

Para obtener más información, consulta las secciones "[Restringir el tráfico de red a tu empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)" y "[Administrar direcciones IP permitidas en tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization)".

#### Fusión automática de solicitudes de cambio

Con la fusión automática, las solicitudes de cambio pueden configurarse para que se fusionen automáticamente cuando todos los requisitos de fusión se hayan completado satisfactoriamente. Esto ahorra a los clientes la necesidad de verificar constantemente el estado de sus solicitudes de cambio solo para fusionarlos. Un usuario con permisos para fusionar puede habilitar la fusión automática y también se puede hacer en las solicitudes de cambios que tengan requisitos de fusión que no se hayan completado satisfactoriamente (como aprobaciones faltantes o verificaciones de estado requeridas pendientes o que fallaron). Para obtener más información, consulta la sección "[Fusionar una solicitud de cambios automáticamente](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)".

### Cambios

#### Cambios del desarrollador

- [Los propietarios de organización ahora pueden inhabilitar la publicación](/github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization) de los sitios de {% data variables.product.prodname_pages %} desde los repositorios en la organización. Esto no dejará de publicar los sitios existentes.
- Los repositorios que utilicen {% data variables.product.prodname_pages %} ahora pueden [crear y desplegar desde cualquier rama](/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites).
- Cuando escribes una propuesta o solicitud de cambios, la sintaxis de lista para las viñetas, números y tareas ahora se completará auotmáticamente cuando presiones `return` o `enter`.
- Ahora puedes borrar un directorio de un repositorio desde la página de repositorio. Cuando navegues a un directorio, un botón de kebab nuevo junto al botón de "Agergar archivo" te da la opción de borrar el directorio.
- Ahora es más fácil y rápido [referenciar las propuestas o solicitudes de cambio](/github/writing-on-github/basic-writing-and-formatting-syntax#referencing-issues-and-pull-requests) con una búsqueda a través de varias palabras después del "#".

##### Cambios en la administración

- Los propietarios de las empresas ahora pueden [publicar un mensaje obligatorio](/admin/user-management/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message). El mensaje se muestra a todos los usuarios y deben reconocerlo. Esto se puede utilizar para mostrar información importante, condiciones de servicio o políticas.
- El permiso de ruta única de archivo de {% data variables.product.prodname_github_app%} ahora puede [ser compatible con hasta diez archivos](/developers/apps/creating-a-github-app-using-url-parameters).
- Cuando configuras una {% data variables.product.prodname_github_app%}, la URL de rellamado de la autorización es un campo requerido. Ahora permitiremos que el integrador especifique URL múltiples de rellamado. {% data variables.product.product_name %} negará la autorización si la URL de rellamado de la solicitud no se listó.
- Una [terminal nueva de la API](/rest/reference/apps#create-a-scoped-access-token) habilita el intercambio de un token de usuario a servidor para los usuarios con un token de servidor con alcance para repositorios específicos.
- Los eventos ahora se registran en la bitácora de auditoría para [promover a un miembro del equipo para que sea un mantenedor del equipo y para degradar a un mantenedor de equipo para que sea un miembro del equipo](/admin/user-management/audited-actions#teams).
- Ahora, el [Flujo de autorización de dispositivos de OAuth](/developers/apps/authorizing-oauth-apps#device-flow) es compatible. Esto permite que cualquier cliente de CLI o herramienta de desarrollador se autentique utilizando un sistema secundario.
- Los usuarios ya no pueden borrar sus cuentas si se habilita el aprovisionamiento de SCIM.

##### Renombrar la rama predeterminada

Los propietarios de empresas y organizaciones ahora pueden configurar el nombre de la rama predeterminada para los repositorios nuevos. Los propietarios de empresas también pueden requerir su elección de nombre para las ramas predeterminadas en todas las organizaciones o permitir que cada organización escoja el suyo propio. Para obtener más información, consulta las secciones "[Requerir políticas de administración de repositorios en tu empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)" y "[Administrar el nombre de la rama predeterminada para los repositorios de tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization)".

Estas configuraciones no afectarán a los repositorios existentes y los nombres de sus ramas predeterminadas no cambiarán.

Este cambio es uno de los muchos que está haciendo {% data variables.product.company_short %} para apoyar a los proyectos y mantenedores que quieran renombrar su rama predeterminada. Para aprender más, consulta [github/renaming](https://github.com/github/renaming).


### Corrección de errores
- Los usuarios ya no pueden configurar una dirección de correo electrónico de respaldo en su perfil. Su dirección de correo electrónico se configura únicamente a través del IdP.
- Ya no puedes habilitar la autenticación bifactorial después de configurar la autenticación a través de tu IdP.
- {% data variables.product.product_name %} ahora puede conectarse a los tableros de Azure.
- Los encabezados de versión no estaban en las API y ahora se configuraron en "GitHub AE".
- Se arreglaron los enlaces a la documentación.
- Estaba fallando la configuración para reenviar bitácoras de auditoría dentro de los ajustes de empresa.
- El navegar hacia los gists podría resultar en un error 500.
- La URL o correo electrónico de soporte no podía guardarse. Ahora se guarda después de que transcurran algunos minutos.
- Las plantillas de solicitudes de cambio a nivel organizacional no se estaban aplicando a todas las solicitudes de cambio en la organización.

### Problemas conocidos

- Los datos de la ubicación geográfica no se muestran en la bitácora de auditoría. La información de ubicación se puede discernir de otra forma desde la dirección IP asociada con cada evento.
- El enlace al {% data variables.product.prodname_registry %} desde una página de repositorio muestra una página de búsqueda incorrecta cuando dicho repositorio no tiene paquetes.
