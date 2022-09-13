---
title: Iniciar con GitHub Packages para tu empresa
shortTitle: Getting started with GitHub Packages
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
ms.openlocfilehash: 2389eba768a8b2f865165b43dde0e1b6381c6ae7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '146199966'
---
{% data reusables.package_registry.packages-cluster-support %}

## Paso 1: Verifica si el {% data variables.product.prodname_registry %} está disponible para tu empresa

El {% data variables.product.prodname_registry %} está disponible para {% data variables.product.prodname_ghe_server %} 3.0 o superior. Si estás utilizando una versión más antigua de {% data variables.product.prodname_ghe_server %}, tendrás que mejorarla para utilizar el {% data variables.product.prodname_registry %}. Para más información sobre cómo actualizar la instancia de {% data variables.product.prodname_ghe_server %}, vea "[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)".
## Paso 2: Habilitación de {% data variables.product.prodname_registry %} y configuración del almacenamiento externo

{% data variables.product.prodname_registry %} en {% data variables.product.prodname_ghe_server %} utiliza almacenamiento externo de blobs para almacenar tus paquetes.

Después de habilitar el {% data variables.product.prodname_registry %} para {% data variables.product.product_location %}, necesitarás preparar tu bucket de almacenamiento de terceros. La cantidad de almacenamiento que requieras dependerá de tu uso del {% data variables.product.prodname_registry %}, y los lineamientos de configuración podrán variar dependiendo del proveedor de almacenamiento.

Proveedores de almacenamiento externo compatibles
- Amazon Web Services (AWS) S3 {% ifversion ghes %}
- Azure Blob Storage {% endif %}
- MinIO

Para habilitar el {% data variables.product.prodname_registry %} y configurar el almacenamiento de terceros, consulta:
  - "[Habilitación de paquetes de GitHub con AWS](/admin/packages/enabling-github-packages-with-aws)"{% ifversion ghes %}
  - "[Habilitación de paquetes de GitHub con Azure Blob Storage](/admin/packages/enabling-github-packages-with-azure-blob-storage)"{% endif %}
  - "[Habilitación de paquetes de GitHub con MinIO](/admin/packages/enabling-github-packages-with-minio)"

## Paso 3: Especificación de los ecosistemas de paquetes que admitir en la instancia

Elige qué ecosistemas de paquetes te gustaría habilitar, inhabilitar o configurar como de solo lectura en tu {% data variables.product.product_location %}. Las opciones disponibles son {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker, RubyGems, npm, Apache Maven, Gradle, o NuGet.  Para más información, vea "[Configuración de la compatibilidad del ecosistema de paquetes para la empresa](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)".

## Paso 4: Comprobación de que hay un certificado TLS para la URL de host del paquete, si es necesario

Si se habilitado el aislamiento de subdominios para {% data variables.product.product_location %}, tendrá que crear y cargar un certificado TLS que permita la URL del host de paquete para cada ecosistema que quiera utilizar, por ejemplo `{% data reusables.package_registry.container-registry-hostname %}`. Asegúrese de que cada URL de host de paquete incluya `https://`.

  Puede crear el certificado manualmente, o bien puede usar _Let's Encrypt_. Si ya usa _Let's Encrypt_, debe solicitar un certificado TLS nuevo después de habilitar {% data variables.product.prodname_registry %}. Para más información sobre las direcciones URL de host de paquete, vea ["Habilitación del aislamiento de subdominios](/enterprise/admin/configuration/enabling-subdomain-isolation)". Para más información sobre cómo cargar certificados TLS en {% data variables.product.product_name %}, vea "[Configuración de TLS](/enterprise/admin/configuration/configuring-tls)".

## Paso 5: Búsqueda y cambio de nombres reservados

Si quieres usar el ecosistema de Docker con aislamiento de subdominio deshabilitado, **debes** cambiar el nombre de cualquier usuario u organización denominados `v2` en {% data variables.product.product_location %} antes de habilitar la compatibilidad con el ecosistema de Docker en {% data variables.enterprise.management_console %}. Docker usa el nombre de cuenta `v2` para administrar conflictos de ruta de acceso con la API de Docker y, una vez que hayas habilitado la compatibilidad con el registro de Docker, ya no podrás usar este nombre.

Para ver una lista completa de inicios de sesión reservados para uso interno, accede a la página "Inicios de sesión reservados" del panel de administración del sitio. Para obtener más información, consulta "[Inicios de sesión reservados](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins)".
