---
title: Habilitar GitHub packages con AWS
intro: 'Configura el {% data variables.product.prodname_registry %} con AWS como tu almacenamiento externo.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Packages
  - Packages
shortTitle: Enable Packages with AWS
ms.openlocfilehash: 185373657cad88bc0a45e48eb5835abdf394f9ce
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116441'
---
{% warning %}

**Advertencias:**
- Es crítico que configures cualquier política de acceso restrictivo que necesites para tu bucket de almacenamiento, ya que {% data variables.product.company_short %} no aplica permisos de objeto específicos para cualquier lista de control de accesos (ACL) a tu configuración de bucket de almacenamiento. Por ejemplo, si haces público tu bucket, el público general en la internet podrá acceder a los datos que se encuentren ahí. Para más información, vea "[Establecimiento de permisos de acceso a cubos y objetos](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html)" en la documentación de AWS.
- Te recomendamos utilizar un bucket dedicado para {% data variables.product.prodname_registry %}, separado de aquél que utilices para almacenar {% data variables.product.prodname_actions %}.
- Asegúrate de configurar el bucket que quieres utilizar en el futuro. No te recomendamos cambiar tu almacenamiento después de que comienzas a utilizar {% data variables.product.prodname_registry %}.

{% endwarning %}

## Requisitos previos

Antes de que puedas habilitar y configurar el {% data variables.product.prodname_registry %} en {% data variables.product.product_location_enterprise %}, necesitas preparar tu bucket de almacenamiento de AWS. Para preparar el cubo de almacenamiento de AWS, se recomienda consultar la documentación oficial de AWS en la [documentación de AWS](https://docs.aws.amazon.com/index.html).

Asegúrate de que la ID de tu clave y secreto de acceso de AWS tengan los siguientes permisos:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## Habilitar el {% data variables.product.prodname_registry %} con el almacenamiento externo de AWS

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. En "Almacenamiento de paquetes", seleccione **Amazon S3** y escriba los detalles del cubo de almacenamiento:
    - **URL del servicio de AWS**: la dirección URL del servicio del cubo. Por ejemplo, si el cubo de S3 se ha creado en `us-west-2 region`, este valor debe ser `https://s3.us-west-2.amazonaws.com`.

      Para más información, vea "[Puntos de conexión del servicio AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html)" en la documentación de AWS.

    - **Cubo AWS S3:** nombre del cubo de S3 dedicado para {% data variables.product.prodname_registry %}.
    - **Clave de acceso de AWS S3** y **Clave secreta de AWS S3**: el identificador de la clave de acceso de AWS y la clave secreta para acceder al cubo.

      Para más información sobre cómo administrar las claves de acceso de AWS,vea la "[documentación sobre administración de identidades y accesos de AWS](https://docs.aws.amazon.com/iam/index.html)".

    ![Cuadros de entrada para los detalles del cubo de AWS S3](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## Pasos siguientes

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
