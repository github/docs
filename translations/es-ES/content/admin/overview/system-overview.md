---
title: Descripción del sistema
intro: 'Aprende más sobre lo interno, la funcionalidad y la seguridad del sistema de {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/installation/system-overview
  - /enterprise/admin/overview/system-overview
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Security
  - Storage
---

## About {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} {% data reusables.enterprise.github-distributes-ghes %} Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server)".

## Arquitectura de almacenamiento

{% data variables.product.product_name %} requiere dos volúmenes de almacenamiento, uno montado en la ruta del *sistema de archivos raíz* (`/`) y otra en la ruta del *sistema de archivos del usuario* (`/data/user`). Esta arquitectura simplifica los procedimientos de actualización, reversión y recuperación al separar el ambiente del software que se ejecuta desde los datos de aplicación persistentes.

El sistema de archivos raíz se incluye en la imagen de la máquina distribuída. Esta contiene el sistema operativo base y el ambiente de la aplicación de {% data variables.product.product_name %}. El sistema de archivos raíz se debe tratar como efímero. Cualquier tipo de datos en el sistema de archivos raíz se reemplazará cuando se haga una mejora a lanzamientos futuros de {% data variables.product.product_name %}.

El volumen de almacenamiento se dividen en dos particiones del mismo tamaño. Una de estas se montará como el sistema de archivos raíz (`/`). La otra partición solo se montará durante las mejoras y reversiones de mejoras como `/mnt/upgrade`, para hacer que dichas reversiones se lleven a cabo más fácilmente en caso de que sea necesario. Por ejemplo, si se asigna un volumen raíz de 200GB, 100GB se asignarán al sistema de archivos raíz y otros 100GB se reservarán para las mejoras y reversiones.

El sistema de archivos raíz contiene archivos que almacenan la siguiente información. Esta lista no es exhasutiva.

- Certificados de autoridad de certificados (CA) personalizados (en `/usr/local/share/ca-certificates*`)
- Las configuraciones de red personalizadas
- Las configuraciones de firewall personalizadas
- El estado de replicación

El sistema de archivos del usuario contiene archivos que almacenan los siguientes datos y configuraciones. Esta lista no es exhasutiva.

- Repositorios Git
- Bases de datos
- Índices de búsqueda
- Contenido publicado en los sitios {% data variables.product.prodname_pages %}
- Archivos grandes de {% data variables.large_files.product_name_long %}
- Entornos de enlaces de pre-recepción

## Topologías de despliegue

Puedes desplegar {% data variables.product.product_name %} en diversas topologías, tales como un par de disponibilidad alta. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server#about-deployment-topologies)".

## Retención de datos y redundancia de centro de datos

{% warning %}

**Advertencia**: Antes de utilizar {% data variables.product.product_name %} en un ambiente productivo, te recomendamos ampliamente que configures respaldos y un plan de recuperación de desastres.

{% endwarning %}

{% data variables.product.product_name %} incluye apoyo para los respaldos incrementales y en línea con {% data variables.product.prodname_enterprise_backup_utilities %}. Puedes tomar instantáneas incrementales sobre un enlace de red seguro (el puerto administrativo SSH) sobre grandes distancias para el almacenamiento externo o geográficamente disperso. Puedes restablecer capturas de la red en una instancia recién aprovisionada en el momento de la recuperación en caso de que se suscite un desastre en el centro de datos primario.

Adicionalmente a los respaldos de red, tanto las capturas de disco de los volúmenes de almacenamiento de usuario de AWS (EBS) como las de VMware son compatibles mientras la instancia está desconectada o en modo de mantenimiento. Las instantáneas de volumen regulares pueden usarse como una alternativa de bajo costo y baja complejidad para las copias de seguridad de red con {% data variables.product.prodname_enterprise_backup_utilities %} si tus requisitos de nivel de servicio permiten un mantenimiento fuera de línea regular.

Para obtener más información, consulta "[Configurar copias de seguridad en tu aparato](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)"

## Seguridad

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data variables.product.product_name %} también incluye características de seguridad adicionales.

- [Sistema operativo, software y parches](#operating-system-software-and-patches)
- [Seguridad de la red](#network-security)
- [Seguridad de la aplicación](#application-security)
- [Servicios externos y acceso de soporte](#external-services-and-support-access)
- [Comunicación encriptada](#encrypted-communication)
- [Usuarios y permisos de acceso](#users-and-access-permissions)
- [Autenticación](#authentication)
- [Auditoría y registro de acceso](#audit-and-access-logging)

### Sistema operativo, software y parches

{% data variables.product.product_name %} ejecuta un sistema operativo Linux personalizado que solo cuenta con las aplicaciones y servicios necesarios. {% data variables.product.company_short %} distribuye parches para el sistema operativo nuclear de la instancia como parte de su ciclo de lanzamiento de producto estándar. Los parches tratan la funcionalidad, estabilidad y los problemas de seguridad no críticos para {% data variables.product.product_name %}. {% data variables.product.company_short %} también proporciona parches de seguridad críticos conforme asea necesario fuera del ciclo de lanzamiento habitual.

{% data variables.product.product_name %} se proporciona como un aplicativo y muchos de los paquetes de sistema operativo se modifican en comparación con la distribución habitual de Debian. No ofrecemos compatibilidad con la modificación del sistema operativo subyacente por esta razón (incluyendo las mejoras de los sistemas operativos), lo cual se alinea con la [licencia de {% data variables.product.prodname_ghe_server %} y el acuerdo de soporte](https://enterprise.github.com/license), bajo las exclusiones de la sección 11.3.

Actualmente, el sistema operativo base de {% data variables.product.product_name %} es Debian 9 (Stretch), el cual recibe soporte bajo el programa de Soporte a Largo Plazo de Debian.  Existen planes para migrarse a un sistema operativo base nuevo antes del final del periodo de Debian LTS para Stretch.

Las actualizaciones habituales de parches se lanzan en la página de [lanzamientos](https://enterprise.github.com/releases)de {% data variables.product.product_name %} y la página de [notas de lanzamiento](/admin/release-notes) proporciona más información al respecto. Estos parches a menudo contienen un proveedor de nivel superior y parches de seguridad de proyecto después de que se prueban y que nuestro equipo de ingeniería aprueba su calidad. Puede haber un ligero retraso desde cuando se lanza la actualización de nivel superior a cuando esta se prueba y se empaqueta en un lanzamiento de parche de {% data variables.product.product_name %} subsecuente.

### Seguridad de la red

El cortafuegos interno de {% data variables.product.product_name %} restringe el acceso a la red de los servicios de la instancia. Están disponibles en la red únicamente los servicios necesarios para que el aparato funcione. Para obtener más información, consulta "[Puertos de red](/admin/configuration/configuring-network-settings/network-ports)."

### Seguridad de la aplicación

El equipo de seguridad de la aplicación de {% data variables.product.company_short %} se enfoca por tiempo completo en la valoración de vulnerabilidades, pruebas de penetración y revisión de código para los productos de {% data variables.product.company_short %}, incluyendo a {% data variables.product.product_name %}. {% data variables.product.company_short %} también hace contratos con empresas de seguridad externas para proporcionar valoraciones de seguridad a los productos de {% data variables.product.company_short %} en momentos específicos.

### Servicios externos y acceso de soporte

{% data variables.product.product_name %} puede operar sin ningún acceso de salida desde tu red hacia los servicios externos. De forma opcional, puedes habilitar la integración con servicios externos para la entrega de correo electrónico, el monitoreo externo y el reenvío de bitácoras. Para obtener más información, consulta las secciones "[Configurar las notificaciones por correo electrónico](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)", "[Configurar el monitoreo externo](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring)", y "[Reenvío de bitácoras](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".

Puedes recopilar y enviar manualmente datos de resolución de problemas a {% data variables.contact.github_support %}. Para obtener más información, consulta "[Proporcionar datos a {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support)".

### Comunicación encriptada

{% data variables.product.company_short %} diseña a {% data variables.product.product_name %} para que se ejecute detrás de tu cortafuegos corporativo. Para asegurar la comunicación a través del cable, te alentamos a habilitar la seguridad de la capa de transporte (TLS). {% data variables.product.product_name %} es compatible con certificados TLS comerciales de 2048 bits y superiores para el tráfico HTTPS. Para obtener más información, consulta la sección "[Configurar el TLS](/admin/configuration/configuring-network-settings/configuring-tls)".

Predeterminadamente, la instancia también ofrece acceso de "Secure Shell" (SSH) tanto para el acceso al repositorio utilizando Git como para propósitos administrativos. Para obtener más información, consulta "[Acerca de SSH](/authentication/connecting-to-github-with-ssh/about-ssh)" y "[Acceder al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."

{% ifversion ghes > 3.3 %}

Si configuras la autenticación de SAML para {% data variables.product.product_location %}, puedes habilitar las aserciones cifradas entre la instancia y tu IdP de SAML. Para obtener más información, consulta la sección "[Utilizar SAML](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml#enabling-encrypted-assertions)".

{% endif %}

### Usuarios y permisos de acceso

{% data variables.product.product_name %} proporciona tres tipos de cuentas.

- La cuenta de usuario de Linux del `administrador` ha controlado el acceso al sistema operativo subyacente, incluido el sistema de archivos directo y el acceso a la base de datos. Un pequeño conjunto de administradores de confianza debería tener acceso a esta cuenta, a la que pueden acceder por medio de SSH. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".
- Las cuentas de usuario en la aplicación web de la instancia tienen acceso total a sus propios datos y a cualquier otros que los usuarios u organizaciones otorguen acceso explícitamente.
- Los administradores de sitio en la aplicación web de la instancia son cuentas de usuario que pueden administrar ajustes de instancia y aplicación web de alto nivel, ajustes de cuenta de organización y de usuario y datos de repositorio.

Para obtener más información sobre los permisos de usuario de {% data variables.product.product_name %}, consulta la sección "[Permisos de acceso en {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/access-permissions-on-github)".

### Autenticación

{% data variables.product.product_name %} proporciona cuatro métodos de autenticación.

- La autenticación de claves públicas SSH proporciona acceso del repositorio usando Git y el shell administrativo. Para obtener más información, consulta "[Acerca de SSH](/authentication/connecting-to-github-with-ssh/about-ssh)" y "[Acceder al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."
- El nombre de usuario y la autenticación de contraseña con cookies HTTP proporciona acceso a la aplicación web y la gestión de sesiones, con autenticación opcional de dos factores (2FA). Para obtener más información, consulta ña sección "[Utilizar la autenticación integrada](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication)".
- La autenticación externa LDAP, SAML o CAS mediante un servicio LDAP, SAML Identity Provider (IdP) u otro servicio compatible proporciona acceso a la aplicación web. Para obtener más información, consulta la sección "[Administrar el IAM para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise)".
- OAuth y los token de acceso personal proporcionan acceso a los datos del repositorio de Git y a API para clientes externos y servicios. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

### Auditoría y registro de acceso

{% data variables.product.product_name %} almacena tanto sistemas operativos tradicionales como bitácoras de aplicación. La aplicación también escribe bitácoras de seguridad y de auditoría detalladas, las cuales {% data variables.product.product_name %} almacena premanentemente. Puedes reenviar ambos tipos de bitácoras en tiempo real a varios destinos a través del protocolo `syslog-ng`. Para obtener más información, consulta las secciones "[Acerca de la bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)" y "[Reenvío de bitácoras](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".

Los registros de acceso y de auditoría incluyen información como la siguiente.

#### Registros de acceso

- Registros completos de servidor web tanto para el navegador como para el acceso a la API
- Registros completos para acceder a los datos del repositorio por medio de protocolos Git, HTTPS y SSH
- Registros de acceso administrativo por medio de HTTPS y SSH

#### Registros de auditoría

- Inicios de sesión del usuario, restablecimientos de contraseña, solicitudes 2FA, cambios en la configuración del correo electrónico y cambios en aplicaciones autorizadas y API
- Acciones de administrador del sitio, como desbloquear cuentas de usuario y repositorios
- Eventos push de repositorio, permisos de acceso, transferencias y renombres
- Cambios de membresía de la organización, incluida la creación y la destrucción de equipo

## Dependencias de código abierto para {% data variables.product.product_name %}

Puedes ver una lista completa de dependencias en la versión de {% data variables.product.product_name %} de tu instancia, así como la licencia de cada proyecto, en `http(s)://HOSTNAME/site/credits`.

Las tarballs con una lista completa de dependencias y los metadatos asociados están disponibles en tu instancia.

- Para conocer las dependencias comunes a todas las plataformas, ingresa en `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`.
- Para conocer las dependencias específicas de una plataforma, ingresa en `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`.

También están disponibles los tarballes, con una lista completa de las dependencias y los metadatos, en `https://enterprise.github.com/releases/<version>/download.html`.

## Leer más

- "[Configurar una prueba de {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)"
- "[Configurar una instancia de {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)"
