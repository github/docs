---
title: Habilitación de Acciones de GitHub con almacenamiento de MinIO
intro: 'Puedes habilitar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %} y utilizar el almacenamiento de MinIO para almacenar datos generados por las ejecuciones de flujos de trabajo.'
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
  - /admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-gateway-for-nas-storage
shortTitle: MinIO storage
ms.openlocfilehash: fec0720c8779ba643735156e6413005ae35f5d85
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192966'
---
{% data reusables.actions.enterprise-storage-about %}

## Requisitos previos

Antes de que habilites las {% data variables.product.prodname_actions %}, asegúrate de que has completado los siguientes pasos:

* Crea tu cubo de MinIO para almacenar los datos que generan las ejecuciones de flujo de trabajo. Para obtener más información sobre cómo instalar y configurar MinIO, consulta: "[Almacenamiento de objetos de alto rendimiento de MinIO ](https://min.io/docs/minio/container/index.html)" y "[mc mb](https://min.io/docs/minio/linux/reference/minio-mc/mc-mb.html)" en la documentación de MinIO.

  Para evitar la contención de recursos en el dispositivo, te recomendamos que hospedes MinIO separado de {% data variables.location.product_location %}.

  {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %} {% data reusables.actions.enterprise-common-prereqs %}

## Habilitar {% data variables.product.prodname_actions %} mediante el almacenamiento de MinIO

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. En "Artifact & Log Storage" (Almacenamiento de artefactos y registros), seleccione **Amazon S3** y escriba los detalles del cubo de almacenamiento:

   * **AWS Service URL** (URL del servicio AWS): dirección URL del servicio MinIO. Por ejemplo, `https://my-minio.example:9000`.
   * **AWS S3 Bucket** (Cubo de AWS S3): nombre del cubo de S3.
   * **AWS S3 Access Key** (Clave de acceso de AWS S3) y **AWS S3 Secret Key** (Clave de secreto de AWS S3): se usan `MINIO_ACCESS_KEY` y `MINIO_SECRET_KEY` para la instancia de MinIO.

   ![Botón radial para seleccionar el almacenamiento de Amazon S3 y los campos para la configuración de MinIO](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. En "Artifact & Log Storage" (Almacenamiento de artefactos y registros), seleccione **Force path style** (Forzar estilo de ruta de acceso).

   ![Casilla Forzar estilo de ruta de acceso](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
