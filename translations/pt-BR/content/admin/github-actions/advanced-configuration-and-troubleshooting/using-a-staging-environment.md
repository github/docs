---
title: Usar um ambiente de preparo
intro: 'Aprenda a usar {% data variables.product.prodname_actions %} com instâncias de preparo de {% data variables.product.prodname_ghe_server %}.'
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
shortTitle: Usar ambiente de preparo
---

## Sobre ambientes preparo para {% data variables.product.product_name %}

Pode ser útil ter um ambiente de preparo ou de teste para {% data variables.product.product_location %} para que você possa testar atualizações ou novas funcionalidades antes de implementá-las no seu ambiente de produção. Para obter mais informações, consulte "[Configurar instância de preparo](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

## Usando um ambiente de preparo com {% data variables.product.prodname_actions %}

Uma maneira comum de criar o ambiente de preparo é restaurar um backup da sua instância de produção de {% data variables.product.product_name %} para uma nova máquina virtual no ambiente de preparo. Se você usa uma instância de preparo e planeja testar a funcionalidade de {% data variables.product.prodname_actions %}, você deverá revisar a configuração de armazenamento no ambiente de preparo.

Depois de restaurar um backup de {% data variables.product.prodname_ghe_server %} para a instância de preparo, se você tentar visualizar logs ou artefatos de {% data variables.product.prodname_actions %} existentes são executados na sua instância de preparo. Você visualizará os erros `404`, porque esses dados estarão ausentes no seu local de armazenamento de preparo. Para contornar os erros `404`, você pode copiar dados de produção para usar em seu ambiente de preparo.

### Configurando armazenamento

Ao configurar um ambiente de preparo que inclui uma instância de {% data variables.product.product_name %} com {% data variables.product.prodname_actions %} habilitado, você deverá usar uma configuração de armazenamento externo diferente do seu ambiente de produção para {% data variables.product.prodname_actions %}.

{% warning %}

**Aviso**: Se você não alterar a configuração de armazenamento, sua instância de preparo poderá gravar no mesmo armazenamento externo que você usa para produção, o que pode resultar em perda de dados.

{% endwarning %}

Para obter mais informações sobre a configuração do armazenamento para {% data variables.product.prodname_actions %}, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} por {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#enabling-github-actions-with-your-storage-provider)".

### Copiando arquivos da produção para o preparo

Para refletir com maior precisão seu ambiente de produção, você pode copiar opcionalmente arquivos do local de armazenamento de produção para {% data variables.product.prodname_actions %} para o local de armazenamento de preparo.

* Para uma conta de armazenamento do Azure, você pode usar [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account). Por exemplo:

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Para os buckets do Amazon S3, você pode usar [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html). Por exemplo:

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
