---
title: Usar um ambiente de preparo
intro: 'Aprenda a usar {% data variables.product.prodname_actions %} com ambientes de preparo de {% data variables.product.prodname_ghe_server %}.'
versions:
  enterprise-server: '>=3.0'
---

Pode ser útil ter um ambiente de preparo ou de teste para {% data variables.product.product_location %} para que você possa testar atualizações ou novas funcionalidades antes de implementá-las no seu ambiente de produção.

Uma maneira comum de criar o ambiente de preparo é usar um backup da sua instância de produção e restaurá-lo para o ambiente de preparo.

Ao configurar um ambiente de preparação de {% data variables.product.prodname_ghe_server %} que {% data variables.product.prodname_actions %} habilitou, você deve usar uma configuração de armazenamento externo diferente para {% data variables.product.prodname_actions %} armazenamento da usada pelo seu ambiente de produção. Caso contrário, seu ambiente de preparo escreverá no mesmo armazenamento externo da produção.

Espere ver erros do tipo `404` no seu ambiente de preparo ao tentar visualizar os registros ou artefatos de execuções de fluxo de trabalho já existentes, {% data variables.product.prodname_actions %} porque esses dados estarão faltando no seu local de preparo de armazenamento.

Embora não seja necessário que {% data variables.product.prodname_actions %} seja funcional no seu ambiente de preparo, você pode copiar, opcionalmente, os arquivos do local de armazenamento de produção para o local de armazenamento de preparo.

* Para uma conta de armazenamento do Azure, você pode usar [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account). Por exemplo:

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Para os buckets do Amazon S3, você pode usar [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html). Por exemplo:

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
