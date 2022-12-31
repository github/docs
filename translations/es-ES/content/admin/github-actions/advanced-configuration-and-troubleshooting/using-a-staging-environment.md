---
title: Utilizar un ambiente de montaje
intro: 'Obtén información sobre el uso de {% data variables.product.prodname_actions %} con instancias de almacenamiento provisional de {% data variables.product.prodname_ghe_server %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Upgrades
redirect_from:
  - /admin/github-actions/using-a-staging-environment
shortTitle: Use staging environment
ms.openlocfilehash: 3d244d25aae5a6e21b4db1cd04352343d6650975
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120457'
---
## Acerca de los entornos de ensayo para {% data variables.product.product_name %}

Puede ser útil tener un ambiente de montaje o de pruebas para {% data variables.product.product_location %}, para que así puedas probar las actualizaciones o características nuevas antes de implementarlas en tu ambiente productivo. Para más información, vea "[Configuración de una instancia de almacenamiento provisional](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

## Uso de un entorno de ensayo con {% data variables.product.prodname_actions %}

Una manera común de crear el entorno de ensayo es restaurar una copia de seguridad de la instancia de {% data variables.product.product_name %} en producción a una máquina virtual nueva en el entorno de ensayo. Si utilizas una instancia de almacenamiento provisional y planeas probar la funcionalidad de {% data variables.product.prodname_actions %}, debes revisar la configuración de almacenamiento del entorno de ensayo.

Después de restaurar una copia de seguridad de {% data variables.product.prodname_ghe_server %} en la instancia de almacenamiento provisional, si intentas ver registros o artefactos de ejecuciones de flujos de trabajo de {% data variables.product.prodname_actions %} existentes, verás `404` errores, porque estos datos faltarán en la ubicación del almacenamiento provisional. Para solucionar los `404` errores, puedes copiar los datos del entorno de producción para utilizarlos en el entorno de ensayo.

### Configuración del almacenamiento

Cuando configures un entorno de ensayo que incluya una instancia de {% data variables.product.product_name %} con {% data variables.product.prodname_actions %} habilitado, debes usar una configuración de almacenamiento externo para el almacenamiento de {% data variables.product.prodname_actions %} que sea diferente a la de tu entorno de producción.

{% warning %}

**Advertencia**: Si no cambias la configuración de almacenamiento, es posible que la instancia de almacenamiento provisional pueda escribir en el mismo almacenamiento externo que utilizas para producción, lo que podría provocar la pérdida de datos.

{% endwarning %}

Para más información sobre la configuración de almacenamiento para {% data variables.product.prodname_actions %}, consulta "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#enabling-github-actions-with-your-storage-provider)".

### Copia de archivos de producción al almacenamiento provisional

Para reflejar con más precisión el entorno de producción, tienes la opción de copiar archivos desde la ubicación de almacenamiento de producción para {% data variables.product.prodname_actions %} a la ubicación del almacenamiento provisional.

* Para una cuenta de almacenamiento de Azure, puede usar [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account). Por ejemplo:

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Para los cubos de Amazon S3, puede usar [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html). Por ejemplo:

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
