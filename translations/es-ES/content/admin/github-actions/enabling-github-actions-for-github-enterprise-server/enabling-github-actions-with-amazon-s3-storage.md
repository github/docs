---
title: Habilitar las GitHub Actions con el almacenamiento de Amazon S3
intro: 'Puedes habilitar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %} y utilizar el almacenamiento de Amazon S3 para almacenar datos generados por ejecuciones de flujos de trabajo.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/enabling-github-actions-with-amazon-s3-storage
shortTitle: Amazon S3 storage
ms.openlocfilehash: dd0f4c7135def456212de3355d6f6af17076c40c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192989'
---
{% data reusables.actions.enterprise-storage-about %}

## Prerrequisitos

{% note %}

**Advertencia:** Los únicos proveedores de almacenamiento de S3 compatibles con {% data variables.product.prodname_dotcom %} son Amazon S3 y MinIO Gateway for NAS.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

Antes de que habilites las {% data variables.product.prodname_actions %}, asegúrate de que has completado los siguientes pasos:

* Crea tu cubo de Amazon S3 para almacenar los datos que generan las ejecuciones de flujo de trabajo. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Habilitar {% data variables.product.prodname_actions %} con almacenamiento de Amazon S3

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. En "Artifact & Log Storage" (Almacenamiento de artefactos y registros), seleccione **Amazon S3** y escriba los detalles del cubo de almacenamiento:

   * **URL del servicio de AWS**: la dirección URL del servicio del cubo. Por ejemplo, si el cubo de S3 se ha creado en la región `us-west-2`, este valor debe ser `https://s3.us-west-2.amazonaws.com`.

     Para más información, vea "[Puntos de conexión del servicio AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html)" en la documentación de AWS.
   * **AWS S3 Bucket** (Cubo de AWS S3): nombre del cubo de S3.
   * **AWS S3 Access Key** y **AWS S3 Secret Key**: el identificador de clave de acceso de AWS y la clave secreta para el cubo. Para más información sobre cómo administrar las claves de acceso de AWS,vea la "[documentación sobre administración de identidades y accesos de AWS](https://docs.aws.amazon.com/iam/index.html)".

   ![Botón de radio para seleccionar Amazon S3 Storage y campos para la configuración de S3](/assets/images/enterprise/management-console/actions-aws-s3-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
