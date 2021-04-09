---
title: Utilizar un ambiente de montaje
intro: 'Aprende sobre cómo utilizar {% data variables.product.prodname_actions %} con los ambientes de montaje de {% data variables.product.prodname_ghe_server %}.'
versions:
  enterprise-server: '>=3.0'
topics:
  - empresa
---

Puede ser útil tener un ambiente de montaje o de pruebas para {% data variables.product.product_location %}, para que así puedas probar las actualizaciones o características nuevas antes de implementarlas en tu ambiente productivo.

Una forma común para crear el ambiente de montaje es utilizar un respaldo de tu instancia productiva y restablecerlo al ambiente de montaje.

Cuando configures un ambiente de montaje de {% data variables.product.prodname_ghe_server %} que cuente con {% data variables.product.prodname_actions %} habilitadas, debes utilizar una configuración de almacenamiento externo diferente al de tu ambiente productivo para almacenar las {% data variables.product.prodname_actions %}. De lo contrario, tu ambiente de montaje escribirá en el mismo almacenamiento externo que utiliza tu ambiente productivo.

Espera ver errores de tipo `404` en tu ambiente de montaje cuando trates de ver las bitácoras o artefactos para las ejecuciones de flujo de trabajo de {% data variables.product.prodname_actions %}, ya que estos datos estarán ausentes de tu ubicación de almacenamiento de montaje.

Aunque no es necesario que las {% data variables.product.prodname_actions %} sean funcionales en tu ambiente de montaje, opcionalmente, puedes copiar los archivos del la ubicación de almacenamiento productivo hacia la ubicación de almacenamiento de montaje.

* Para una cuenta de almacenamiento de Azure, puedes utilizar [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account). Por ejemplo:

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Para los buckets de Amazon S3, puedes usar [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html). Por ejemplo:

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
