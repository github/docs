---
title: Iniciar con GitHub Packages para tu empresa
shortTitle: Comenzar con los Paquetes de GitHub
intro: 'Puedes comenzar a utilizar el {% data variables.product.prodname_registry %} en {% data variables.product.product_location %} si habilitas esta característica, configurando un almacenamiento de terceros, configurando los ecosistemas que quieras que sea compatibles y actualizando tu certificado TLS.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
---


{% data reusables.package_registry.packages-cluster-support %}

## Paso 1: Verifica si el {% data variables.product.prodname_registry %} está disponible para tu empresa

El {% data variables.product.prodname_registry %} está disponible para {% data variables.product.prodname_ghe_server %} 3.0 o superior. Si estás utilizando una versión más antigua de {% data variables.product.prodname_ghe_server %}, tendrás que mejorarla para utilizar el {% data variables.product.prodname_registry %}. Para obtener más información sobre cómo mejorar tu instancia de {% data variables.product.prodname_ghe_server %}, consulta la sección "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)".
## Paso 2: Habilita el {% data variables.product.prodname_registry %} y configura el almacenamiento externo

{% data variables.product.prodname_registry %} en {% data variables.product.prodname_ghe_server %} utiliza almacenamiento externo de blobs para almacenar tus paquetes.

Después de habilitar el {% data variables.product.prodname_registry %} para {% data variables.product.product_location %}, necesitarás preparar tu bucket de almacenamiento de terceros. La cantidad de almacenamiento que requieras dependerá de tu uso del {% data variables.product.prodname_registry %}, y los lineamientos de configuración podrán variar dependiendo del proveedor de almacenamiento.

Proveedores de almacenamiento externo compatibles
- Amazon Web Services (AWS) S3 {% ifversion ghes %}
- Azure Blob Storage {% endif %}
- MinIO

Para habilitar el {% data variables.product.prodname_registry %} y configurar el almacenamiento de terceros, consulta:
  - "[Habilitar GitHub Packages con AWS](/admin/packages/enabling-github-packages-with-aws)"{% ifversion ghes %}
  - "[Habilitar GitHub Packages con Azure Blob Storage](/admin/packages/enabling-github-packages-with-azure-blob-storage)"{% endif %}
  - "[Habilitar GitHub Packages con MinIO](/admin/packages/enabling-github-packages-with-minio)"

## Paso 3: Especifica los ecosistemas de paquetes que serán compatibles con tu instancia

Elige qué ecosistemas de paquetes te gustaría habilitar, inhabilitar o configurar como de solo lectura en tu {% data variables.product.product_location %}. Las opciones disponibles son {% ifversion ghes > 3.4 %}el {% data variables.product.prodname_container_registry %}, {% endif %}Docker, RubyGems, npm, Apache Maven, Gradle o NuGet.  Para obtener más información, consulta la sección "[Configurar la compatibilidad de ecosistemas de paquetes para tu empresa](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)".

## Paso 4: De ser necesario, asegúrate de que tienes un certificado de TLS para la URL de hospedaje de tu paquete

Si el aislamiento de subdominios se habilita para {% data variables.product.product_location %}, necesitarás crear y cargar un certificado TLS que permita la URL del host de paquetes para cada ecosistema que quieras utilizar, tal como `{% data reusables.package_registry.container-registry-hostname %}`. Asegúrate de que cada URL de host de paquete incluya `https://`.

  Puedes crear el certificado manualmente, o puedes utilizar _Let's Encrypt_. Si ya utilizas _Let's Encrypt_, debes solicitar un certificado TLS nuevo después de habilitar el {% data variables.product.prodname_registry %}. Para obtener más información acerca de las URL del host de los paquetes, consulta "[Habilitar el aislamiento de subdominios](/enterprise/admin/configuration/enabling-subdomain-isolation)". Para obtener más información sobre cómo cargar certificados TLS a {% data variables.product.product_name %}, consulta la sección "[Configurar el TLS](/enterprise/admin/configuration/configuring-tls)".

## Paso 5: Verifica y renombra los nombres reservados

Si quieres utilizar el ecosistema de Docker con el aislamiento de subdominios inhabilitado, **debes** renombrar primero a cualquier usuario u organización de nombre `v2` en {% data variables.product.product_location %} antes de habilitar la compatibilidad con el ecosistema de Docker en la {% data variables.enterprise.management_console %}. Docker utiliza un nombre de cuenta `v2` para administrar los conflictos de ruta con la API de Docker y, una vez que se habilita la compatibilidad con el registro de Docker, ya no podrás utilizar este nombre.

Puedes ver una lista completa de la información de inicio de sesión reservada para uso interno si navegas a la página de "Inicios de sesión reservados" en el tablero de administrador de sitio. Para obtener más información, consulta la sección "[Inicios de sesión reservados](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins)".
