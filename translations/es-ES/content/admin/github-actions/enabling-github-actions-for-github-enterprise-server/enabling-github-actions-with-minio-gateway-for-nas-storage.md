---
title: Habilitar las GitHub Actions con la puerta de enlace de MinIO para el almacenamiento en NAS
intro: 'Puedes habilitar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %} y utilizar la puerta de enlace de MinIO para el almacenamiento en NAS a fin de almacenar datos que generan las ejecuciones del flujo de trabajo.'
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
shortTitle: MinIO Gateway for NAS storage
ms.openlocfilehash: 9fced80eb2a486ffae44d21f3fad278a933eb92d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682313'
---
{% data reusables.actions.minio-gateways-removal %}

## Prerrequisitos

Antes de que habilites las {% data variables.product.prodname_actions %}, asegúrate de que has completado los siguientes pasos:

* Para evitar la contención de recursos en el aplicativo, te recomendamos que hospedes a MinIO separado de {% data variables.product.product_location %}.
* Crea un cubo para almacenar los datos del flujo de trabajo. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Habilitar las {% data variables.product.prodname_actions %} con la puerta de enlace de MinIO para almacenamiento en NAS

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.actions.perform-blob-storage-precheck %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. En "Artifact & Log Storage" (Almacenamiento de artefactos y registros), seleccione **Amazon S3** y escriba los detalles del cubo de almacenamiento:

   * **AWS Service URL** (URL del servicio AWS): dirección URL del servicio MinIO. Por ejemplo, `https://my-minio.example:9000`.
   * **AWS S3 Bucket** (Cubo de AWS S3): nombre del cubo de S3.
   * **AWS S3 Access Key** (Clave de acceso de AWS S3) y **AWS S3 Secret Key** (Clave de secreto de AWS S3): se usan `MINIO_ACCESS_KEY` y `MINIO_SECRET_KEY` para la instancia de MinIO.

   ![Botón radial para seleccionar el almacenamiento de Amazon S3 y los campos para la configuración de MinIO](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. En "Artifact & Log Storage" (Almacenamiento de artefactos y registros), seleccione **Force path style** (Forzar estilo de ruta de acceso).
   ![Casilla Force path style](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) (Forzar estilo de ruta de acceso) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
