---
title: Habilitar los GitHub Packages con MinIO
intro: 'Configura el {% data variables.product.prodname_registry %} con MinIO como tu almacenamiento externo.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with MinIO
ms.openlocfilehash: 2e7d76ee696dfbcd2369c577ef2d2ee803a09638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116434'
---
{% warning %}

**Advertencias:**
- Es crítico que configures las políticas de acceso restrictivo que necesites para tu bucket de almacenamiento, ya que {% data variables.product.company_short %} no aplica permisos de objeto específicos o listas de control de acceso adicionales (ACLs) a tu configuración de bucket de almacenamiento. Por ejemplo, si haces a tu bucket público, el público general en la internet podrá acceder a ellos.
- Te recomendamos utilizar un bucket dedicado para {% data variables.product.prodname_registry %}, separado de aquél que utilices para almacenar {% data variables.product.prodname_actions %}.
- Asegúrate de configurar el bucket que quieres utilizar en el futuro. No te recomendamos cambiar tu almacenamiento después de que comienzas a utilizar {% data variables.product.prodname_registry %}.

{% endwarning %}

## Requisitos previos

Antes de que puedas habilitar y configurar el {% data variables.product.prodname_registry %} en {% data variables.product.product_location_enterprise %}, necesitas preparar tu bucket de almacenamiento de MinIO. Para ayudarle a configurar rápidamente un cubo de MinIO y navegar por las opciones de personalización de MinIO, vea el "[Inicio rápido para configurar el cubo de almacenamiento de MinIO para {% data variables.product.prodname_registry %}](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages)".

Asegúrate que tu ID de clave de acceso y secreto de almacenamiento externo de MinIO tenga estos permisos:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## Habilitar el {% data variables.product.prodname_registry %} con el almacenamiento externo de MinIO

Aunque MinIO no aparece actualmente en la interface de usuario debajo de "Almacenamiento de Paquetes", este aún es compatible con el {% data variables.product.prodname_registry %} en {% data variables.product.prodname_enterprise %}. También debes tomar en cuenta que el almacenamiento de objetos de MinIO es compatible con la API de S3 y puedes ingresar los detalles del bucket de MinIO en vez de aquellos de AWS S3.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. En "Packages Storage", seleccione **Amazon S3**.
1. Ingresa tus detalles de bucket de almacenamiento de MinIO en la configuración de almacenamiento de AWS.
    - **AWS Service URL:** dirección URL de hospedaje del cubo de MinIO.
    - **AWS S3 Bucket:** nombre del cubo de MinIO compatible con S3 dedicado para {% data variables.product.prodname_registry %}.
    - **AWS S3 Access Key** y **AWS S3 Secret Key**: escriba el identificador de clave de acceso de MinIO y la clave secreta para acceder al cubo.

    ![Cuadros de entrada para los detalles del cubo de AWS S3](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## Pasos siguientes

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
