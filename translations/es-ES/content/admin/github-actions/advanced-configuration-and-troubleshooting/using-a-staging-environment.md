---
title: Utilizar un ambiente de montaje
intro: 'Aprende sobre cómo utilizar las {% data variables.product.prodname_actions %} con las instancias de pruebas de {% data variables.product.prodname_ghe_server %}.'
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
shortTitle: Utilizar un ambiente de pruebas
---

## Acerca de los ambientes de pruebas para {% data variables.product.product_name %}

Puede ser útil tener un ambiente de montaje o de pruebas para {% data variables.product.product_location %}, para que así puedas probar las actualizaciones o características nuevas antes de implementarlas en tu ambiente productivo. Para obtener más información, consulta "[Configurar una instancia de preparación](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

## Utilizar un ambiente de pruebas con {% data variables.product.prodname_actions %}

Una forma común de crear un ambiente de pruebas es restablecer un respaldo de tu instancia productiva de {% data variables.product.product_name %} a una máquina virtual nueva en dicho ambiente de pruebas. Si utilizas una instancia de pruebas y planeas probar la funcionalidad de {% data variables.product.prodname_actions %}, deberías revisar tu configuración de almacenamiento en el ambiente de pruebas.

Después de que restableces un respaldo de {% data variables.product.prodname_ghe_server %} en la instancia de pruebas, si intentas ver las bitácoras o artefactos de las ejecuciones de flujo de trabajo existentes de {% data variables.product.prodname_actions %} en tu instancia de pruebas, verás errores `404`, ya que estos datos no se encontrarán en tu ubicación de almacenamiento de pruebas. Para solucionar los errores `404`, puedes copiar los datos de producción para utilizarlos en tu ambiente de pruebas.

### Configurar el almacenamiento

Cuando configuras un ambiente de pruebas que incluye una instancia de {% data variables.product.product_name %} con {% data variables.product.prodname_actions %} habilitadas, debes utilizar una configuración de almacenamiento externo diferente para el de {% data variables.product.prodname_actions %} que aquél de tu ambiente productivo.

{% warning %}

**Advertencia**: Si no cambias la configuración de almacenamiento, tu instancia de pruebas podría escribir en el mismo almacenamiento externo que utilizas para producción, lo cual podría hacerte perder datos.

{% endwarning %}

Para obtener más información sobre la configuración de almacenamiento de {% data variables.product.prodname_actions %}, consulta la sección "[Iniciar con {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#enabling-github-actions-with-your-storage-provider)".

### Copiar los archivos de producción a pruebas

Para duplicar tu ambiente productivo con mayor exactitud, opcionalmente, puedes copiar los archivos de tu ubicación de almacenamiento productivo para {% data variables.product.prodname_actions %} a aquella del almacenamiento de pruebas.

* Para una cuenta de almacenamiento de Azure, puedes utilizar [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account). Por ejemplo:

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Para los buckets de Amazon S3, puedes usar [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html). Por ejemplo:

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
