---
title: Habilitación de Acciones de GitHub con Google Cloud Storage
intro: 'Puedes habilitar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %} y utilizar Google Cloud Storage para almacenar los datos que generan las ejecuciones de flujos de trabajo.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  feature: actions-ghes-gcp-storage
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
shortTitle: Google Cloud Storage
ms.openlocfilehash: abbac860ed3f6f1caaec1152b426762535b8fba4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110097'
---
{% note %}

**Nota**: La compatibilidad de {% data variables.product.prodname_actions %} con Google Cloud Storage se encuentra actualmente en versión beta y está sujeta a cambios.

{% endnote %}

## Requisitos previos

Antes de que habilites las {% data variables.product.prodname_actions %}, asegúrate de que has completado los siguientes pasos:

* Crea tu cubo de Google Cloud Storage para almacenar los datos que generan las ejecuciones de flujos de trabajo.
* Crea una cuenta de servicio de Google Cloud que pueda acceder al cubo y una clave de código de autenticación de mensajes (HMAC) basada en hash para la cuenta de servicio. Para obtener más información, consulta "[Administración de claves HMAC para las cuentas de servicio](https://cloud.google.com/storage/docs/authentication/managing-hmackeys)" en la documentación de Google Cloud.

  La cuenta de servicio debe tener los siguientes [permisos de Administración de identidad y acceso (IAM)](https://cloud.google.com/storage/docs/access-control/iam-permissions) para el cubo:

  * `storage.objects.create`
  * `storage.objects.get`
  * `storage.objects.list`
  * `storage.objects.update`
  * `storage.objects.delete`
  * `storage.multipartUploads.create`
  * `storage.multipartUploads.abort`
  * `storage.multipartUploads.listParts`
  * `storage.multipartUploads.list` {% data reusables.actions.enterprise-common-prereqs %}

## Habilitación de {% data variables.product.prodname_actions %} con Google Cloud Storage

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. En "Almacenamiento de artefactos y registros", selecciona **Google Could Storage** y escribe los detalles del cubo:

   * **URL del servicio**: la dirección URL del servicio del cubo. Normalmente es `https://storage.googleapis.com`.
   * **Nombre del cubo**: el nombre del cubo.
   * **Id. de acceso de HMAC** y **Secreto de HMAC**: el id. de acceso y el secreto de Google Cloud para la cuenta de almacenamiento. Para obtener más información, consulta "[Administración de claves HMAC para las cuentas de servicio](https://cloud.google.com/storage/docs/authentication/managing-hmackeys)" en la documentación de Google Cloud.

   ![Botón de radio para seleccionar Google Cloud Storage y campos para la configuración](/assets/images/enterprise/management-console/actions-google-cloud-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
