---
title: Habilitar las GitHub Actions con el almacenamiento de Azure Blob
intro: 'Puedes habilitar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %} y utilizar Azure Blob Storage para almacenar datos generados por ejecuciones de flujos de trabajo.'
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
  - /admin/github-actions/enabling-github-actions-with-azure-blob-storage
shortTitle: Azure Blob storage
ms.openlocfilehash: 856748a3219be7789f0339c43210ca204fe56d91
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192981'
---
{% data reusables.actions.enterprise-storage-about %}

## Requisitos previos

Antes de que habilites las {% data variables.product.prodname_actions %}, asegúrate de que has completado los siguientes pasos:

* Crea tu cuenta de Azure Storage para almacenar datos del flujo de trabajo. {% data variables.product.prodname_actions %} almacena sus datos como blobs de bloque y son compatibles dos tipos de cuenta de almacenamiento:
  * Una cuenta de almacenamiento de **uso general** (también conocida como `general-purpose v1` o `general-purpose v2`) que usa el nivel de rendimiento **estándar**.

    {% warning %}

    **Advertencia:** No se admite el uso del nivel de rendimiento **prémium** con una cuenta de almacenamiento de uso general. El nivel de rendimiento **estándar** se debe seleccionar cuando se crea la cuenta de almacenamiento y no se puede cambiar después.

    {% endwarning %}
  * Una cuenta de almacenamiento de **BlockBlobStorage** con un nivel de rendimiento **prémium**.

  Para obtener más información sobre los tipos de cuentas de almacenamiento de Azure y los niveles de rendimiento, consulte la [documentación de Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=/azure/storage/blobs/toc.json#types-of-storage-accounts).
{% data reusables.actions.enterprise-common-prereqs %}

## Habilitar las {% data variables.product.prodname_actions %} con el almacenamiento de Blobs de Azure

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. En "Artifact & Log Storage" (Almacenamiento de artefactos y registros), seleccione **Azure Blob Storage** y escriba la cadena de conexión de la cuenta de almacenamiento de Azure. Para más información sobre cómo obtener la cadena de conexión de la cuenta de almacenamiento, consulte la [documentación de Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys).

   ![Botón de radio para seleccionar Azure Blob Storage y el campo Cadena de conexión](/assets/images/enterprise/management-console/actions-azure-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
