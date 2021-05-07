---
title: Descripción general del sistema para la información de GitHub
intro: '{% data variables.product.prodname_insights %} es una aplicación autónoma que interactúa con {% data variables.product.prodname_enterprise %}.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/system-overview-for-github-insights
versions:
  enterprise-server: '*'
---

### Requisitos para la ejecución {% data variables.product.prodname_insights %}

{% data variables.product.prodname_insights %} requiere una versión compatible de {% data variables.product.prodname_ghe_server %}.

{% data reusables.github-insights.requires-machine %} Se admiten máquinas de tipo estándar con un sistema operativo base de Debian Buster, Debian Stretch o cualquier versión LTS de Ubuntu 16.04 +.

Para aprovisionar {% data variables.product.prodname_insights %}, el servidor de aplicaciones debe poder ejecutar ciertas dependencias, incluido Docker. {% data reusables.github-insights.docker-requirements %} Para obtener más información, consulta "[Instalar {% data variables.product.prodname_insights %}](/insights/installing-and-configuring-github-insights/installing-github-insights#prerequisites)".

El servidor de aplicaciones debe cumplir con las especificaciones mínimas.

| Especificación | Mínimo |
| -------------- | ------ |
| vCPU           | 16     |
| Ram            | GB     |
| Disco          | 250GB  |

Si vas a usar {% data variables.product.prodname_insights %} para importar grandes cantidades de datos, recomendamos especificaciones mínimas mayores. Para obtener más información, consulta "[Administrar repositorios](/github/installing-and-configuring-github-insights/managing-repositories#about-import-times)."

### Seguridad y autenticación para {% data variables.product.prodname_insights %}

{% data variables.product.prodname_insights %} se ejecuta en tu infraestructura y se rige por tus controles de seguridad de la información existentes. {% data variables.product.prodname_insights %} utiliza cuentas de usuario existentes en {% data variables.product.prodname_enterprise %} para autenticación y permisos de acceso.

#### Seguridad de la red

El firewall interno de {% data variables.product.prodname_insights %} restringe el acceso a la red a los servicios del servidor de la aplicación. Solo se encuentran disponibles en la red los servicios necesarios para que el servidor de aplicación funcione.

{% data variables.product.prodname_insights %} requiere que los siguientes puertos estén abiertos para el tráfico entrante y saliente.

| Port (Puerto) | Servicio       | Protocolo |
| ------------- | -------------- | --------- |
| 22            | USUARIO DE SSH | TCP       |
| 80            | USUARIO HTTP   | TCP       |
| 443           | USUARIO HTTPS  | TCP       |

#### Permisos de autenticación y acceso

La autenticación para {% data variables.product.prodname_insights %} se maneja mediante {% data variables.product.prodname_enterprise %}. Durante la instalación, crearás un {% data variables.product.prodname_github_app %}, que permite que {% data variables.product.prodname_insights %} autorice a los usuarios. El {% data variables.product.prodname_github_app %} también se usa para interactuar con {% data variables.product.prodname_enterprise %} dentro del alcance de los permisos del usuario y de la app.

{% data reusables.github-insights.permissions-levels %}

El acceso a los datos en {% data variables.product.prodname_insights %} está restringido según el acceso a los datos de cada usuario en {% data variables.product.prodname_enterprise %}. Un usuario nunca verá datos en {% data variables.product.prodname_insights %} para los repositorios a los que el usuario no tiene acceso en {% data variables.product.prodname_enterprise %}.

### Arquitectura de {% data variables.product.prodname_insights %}

![Arquitectura del sistema](/assets/images/help/insights/github-isights-system-diagram.png)
