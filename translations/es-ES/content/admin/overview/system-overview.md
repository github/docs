---
title: Información general del sistema
intro: 'Obtén más información sobre la seguridad, la funcionalidad y los elementos internos del sistema de {% data variables.product.product_name %}.'
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
ms.openlocfilehash: 656d68b267b4a739812b10e9409609f61cacdd5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066942'
---
## Acerca de {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} {% data reusables.enterprise.github-distributes-ghes %} Para más información, consulta "[Acerca de {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server)".

## Arquitectura de almacenamiento

En {% data variables.product.product_name %}, se necesitan dos volúmenes de almacenamiento: uno montado en la ruta de acceso del *sistema de archivos raíz* (`/`) y el otro, en la ruta de acceso del *sistema de archivos del usuario* (`/data/user`). Esta arquitectura simplifica los procedimientos de actualización, reversión y recuperación al separar el entorno del software que se ejecuta de los datos de aplicación persistentes.

El sistema de archivos raíz está incluido en la imagen de máquina distribuida. Contiene el sistema operativo base y el entorno de aplicación {% data variables.product.product_name %}. El sistema de archivos raíz debería tratarse como efímero. Se reemplazará cualquier dato en el sistema de archivos raíz cuando se actualice con lanzamientos futuros de {% data variables.product.product_name %}.

El volumen de almacenamiento raíz se divide en dos particiones del mismo tamaño. Una de las particiones se montará como el sistema de archivos raíz (`/`). La otra partición solo se montará durante actualizaciones y reversiones de actualizaciones como `/mnt/upgrade`, para facilitar esas reversiones en caso de que sea necesario. Por ejemplo, si se asigna un volumen raíz de 200GB, 100GB se asignarán al sistema de archivos raíz y otros 100GB se reservarán para las mejoras y reversiones.

El sistema de archivos raíz contiene archivos que almacenan la información siguiente. Esta lista no es exhaustiva.

- Certificados de entidad de certificación (CA) personalizada (en `/usr/local/share/ca-certificates*`)
- Las configuraciones de red personalizadas
- Las configuraciones de firewall personalizadas
- El estado de replicación

El sistema de archivos del usuario contiene archivos que almacenan los datos y la configuración siguientes. Esta lista no es exhaustiva.

- Repositorios Git
- Bases de datos
- Índices de búsqueda
- Contenido publicado en los sitios {% data variables.product.prodname_pages %}
- Archivos grandes de {% data variables.large_files.product_name_long %}
- Entornos de enlaces de pre-recepción

## Topologías de implementación

Puedes implementar {% data variables.product.product_name %} en diversas topologías, como un par de alta disponibilidad. Para más información, consulta "[Acerca de {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server#about-deployment-topologies)".

## Retención de datos y redundancia de centro de datos

{% warning %}

**Advertencia**: Antes de usar {% data variables.product.product_name %} en un entorno de producción, recomendamos firmemente que configures copias de seguridad y un plan de recuperación ante desastres.

{% endwarning %}

{% data variables.product.product_name %} incluye compatibilidad con copias de seguridad incrementales y en línea con las {% data variables.product.prodname_enterprise_backup_utilities %}. Puedes tomar instantáneas incrementales sobre un enlace de red seguro (el puerto administrativo SSH) sobre grandes distancias para el almacenamiento externo o geográficamente disperso. Puedes restaurar instantáneas a través de la red en una instancia recientemente aprovisionada al momento de la recuperación en el caso de un desastre en el centro de datos principal.

Además de las copias de seguridad de red, se admiten las instantáneas de disco AWS (EBS) y VMware de los volúmenes de almacenamiento del usuario mientras que la instancia está sin conexión o en modo de mantenimiento. Las instantáneas de volumen regulares pueden usarse como una alternativa de bajo costo y baja complejidad para las copias de seguridad de red con {% data variables.product.prodname_enterprise_backup_utilities %} si tus requisitos de nivel de servicio permiten un mantenimiento fuera de línea regular.

Para más información, vea "[Configuración de copias de seguridad en el dispositivo](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

## Seguridad

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data variables.product.product_name %} también incluye características de seguridad adicionales.

- [Sistema operativo, software y revisiones](#operating-system-software-and-patches)
- [Seguridad de las redes](#network-security)
- [Seguridad de las aplicaciones](#application-security)
- [Servicios externos y acceso de soporte](#external-services-and-support-access)
- [Comunicación cifrada](#encrypted-communication)
- [Usuarios y permisos de acceso](#users-and-access-permissions)
- [Autenticación](#authentication)
- [Registro de auditoría y acceso](#audit-and-access-logging)

### Sistema operativo, software y parches

{% data variables.product.product_name %} ejecuta un sistema operativo Linux personalizado con solo las aplicaciones y los servicios necesarios. {% data variables.product.company_short %} distribuye las revisiones del sistema operativo central de la instancia como parte de su ciclo estándar de lanzamiento de productos. Las revisiones abordan problemas de funcionalidad, estabilidad y de seguridad no críticos para {% data variables.product.product_name %}. {% data variables.product.company_short %} también proporciona revisiones críticas de seguridad según se necesiten fuera del ciclo de lanzamiento regular.

{% data variables.product.product_name %} se proporciona como un dispositivo y muchos de los paquetes de sistema operativo se modifican en comparación con la distribución habitual de Debian. Por esta razón no se admite la modificación del sistema operativo subyacente (incluidas las actualizaciones del sistema operativo), lo que se alinea con el [contrato de licencia y soporte técnico de {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/license), bajo las exclusiones de la sección 11.3.

Actualmente, el sistema operativo base para {% data variables.product.product_name %} es Debian 9 (Stretch), que recibe soporte técnico bajo el programa de Soporte técnico a largo plazo de Debian.  Existen planes para migrarse a un sistema operativo base nuevo antes del final del periodo de Debian LTS para Stretch.

Las actualizaciones de revisiones periódicas se publican en la página de [versiones](https://enterprise.github.com/releases) de {% data variables.product.product_name %}. Además, la página de [notas de la versión](/admin/release-notes) proporciona más información. Estos parches a menudo contienen un proveedor de nivel superior y parches de seguridad de proyecto después de que se prueban y que nuestro equipo de ingeniería aprueba su calidad. Puede haber una demora de tiempo pequeña desde el momento en que se lanza la actualización ascendente hasta el momento en que se prueba y se empaqueta en el lanzamiento de una revisión futura de {% data variables.product.product_name %}.

### Seguridad de las redes

El firewall interno de {% data variables.product.product_name %} restringe el acceso de la red a los servicios de la instancia. Están disponibles en la red únicamente los servicios necesarios para que el aparato funcione. Para más información, vea "[Puertos de red](/admin/configuration/configuring-network-settings/network-ports)".

### Seguridad de las aplicaciones

El equipo de seguridad de la aplicación de {% data variables.product.company_short %} se centra completamente en la evaluación de vulnerabilidades, la prueba de penetración y la revisión del código para los productos de {% data variables.product.company_short %}, incluido {% data variables.product.product_name %}. {% data variables.product.company_short %} también contrata firmas de seguridad externas para proporcionar valoraciones de seguridad puntuales de los productos de {% data variables.product.company_short %}.

### Servicios externos y acceso de soporte

{% data variables.product.product_name %} puede funcionar sin ningún acceso de salida de tu red a servicios externos. De forma opcional, puedes habilitar la integración con servicios externos para la entrega de correo electrónico, el monitoreo externo y el reenvío de bitácoras. Para más información, vea "[Configuración del correo electrónico para notificaciones](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)", "[Configuración de la supervisión externa](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring)" y "[Reenvío de registros](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".

Puedes recopilar y enviar manualmente datos de resolución de problemas a {% data variables.contact.github_support %}. Para más información, vea "[Suministro de datos a {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support)".

### Comunicación encriptada

{% data variables.product.company_short %} diseña {% data variables.product.product_name %} para que se ejecute detrás de tu firewall corporativo. Para asegurar la comunicación a través del cable, te alentamos a habilitar la seguridad de la capa de transporte (TLS). {% data variables.product.product_name %} admite certificados TLS comerciales de 2048 bits y superiores para el tráfico HTTPS. Para más información, vea "[Configuración de TLS](/admin/configuration/configuring-network-settings/configuring-tls)".

De manera predeterminada, la instancia también ofrece acceso Secure Shell (SSH) con fines administrativos y para el acceso al repositorio utilizando Git. Para más información, vea "[Acerca de SSH](/authentication/connecting-to-github-with-ssh/about-ssh)" y "[Acceso al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

{% ifversion ghes > 3.3 %}

Si configuras la autenticación de SAML para {% data variables.product.product_location %}, puedes habilitar las aserciones cifradas entre la instancia y tu IdP de SAML. Para más información, vea "[Uso de SAML](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml#enabling-encrypted-assertions)".

{% endif %}

### Usuarios y permisos de acceso

{% data variables.product.product_name %} proporciona tres tipos de cuentas.

- La cuenta de usuario de Linux `admin` ha controlado el acceso al sistema operativo subyacente, incluido el acceso directo al sistema de archivos y la base de datos. Un pequeño conjunto de administradores de confianza debería tener acceso a esta cuenta, a la que pueden acceder por medio de SSH. Para más información, vea "[Acceso al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".
- Las cuentas de usuario en la aplicación web de la instancia tienen acceso completo a sus propios datos y a cualquier dato que otros usuarios u organizaciones concedan de manera explícita.
- Los administradores del sitio en la aplicación web de la instancia son cuentas de usuario que pueden administrar los ajustes de instancia y aplicación web de alto nivel, la configuración de las cuentas de usuario y organización, y los datos del repositorio.

Para más información sobre los permisos de usuario de {% data variables.product.product_name %}, consulta "[Permisos de acceso en {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/access-permissions-on-github)".

### Authentication

{% data variables.product.product_name %} proporciona cuatro métodos de autenticación.

- La autenticación de claves públicas SSH proporciona acceso del repositorio usando Git y el shell administrativo. Para más información, vea "[Acerca de SSH](/authentication/connecting-to-github-with-ssh/about-ssh)" y "[Acceso al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".
- El nombre de usuario y la autenticación de contraseña con cookies HTTP proporciona acceso a la aplicación web y la gestión de sesiones, con autenticación opcional de dos factores (2FA). Para más información, vea "[Uso de la autenticación integrada](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication)".
- La autenticación externa LDAP, SAML o CAS mediante un servicio LDAP, SAML Identity Provider (IdP) u otro servicio compatible proporciona acceso a la aplicación web. Para más información, consulta "[Administración de IAM de la empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise)".
- OAuth y los token de acceso personal proporcionan acceso a los datos del repositorio de Git y a API para clientes externos y servicios. Para más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

### Auditoría y registro de acceso

{% data variables.product.product_name %} almacena registros tradicionales tanto de aplicaciones como de sistemas operativos. La aplicación también escribe registros de auditoría y seguridad detallados, que {% data variables.product.product_name %} almacena de manera permanente. Puede reenviar ambos tipos de registros en tiempo real a varios destinos por medio del protocolo `syslog-ng`. Para más información, consulta "[Acerca del registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)" y "[Reenvío de registros](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".

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

Puedes ver una lista completa de las dependencias en la versión de {% data variables.product.product_name %} de la instancia, así como a la licencia de cada proyecto, en `http(s)://HOSTNAME/site/credits`.

En la instancia, están disponibles los tarballs con una lista completa de las dependencias y los metadatos asociados.

- Para las dependencias comunes a todas las plataformas, en `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`
- Para las dependencias específicas de una plataforma, en `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`

También hay archivos .tar disponibles, con una lista completa de dependencias y metadatos, en `https://enterprise.github.com/releases/<version>/download.html`.

## Información adicional

- "[Configuración de una prueba de {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)"
- "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)"
