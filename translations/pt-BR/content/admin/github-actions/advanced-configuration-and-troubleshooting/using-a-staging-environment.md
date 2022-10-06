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
shortTitle: Use staging environment
ms.openlocfilehash: 3d244d25aae5a6e21b4db1cd04352343d6650975
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095912'
---
## Sobre ambientes de preparo para {% data variables.product.product_name %}

Pode ser útil ter um ambiente de preparo ou de teste para {% data variables.product.product_location %} para que você possa testar atualizações ou novas funcionalidades antes de implementá-las no seu ambiente de produção. Para obter mais informações, confira "[Como configurar uma instância de preparo](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

## Usar um ambiente de preparo com {% data variables.product.prodname_actions %}

Uma maneira comum de criar o ambiente de preparo é restaurar um backup da sua instância de produção {% data variables.product.product_name %} para uma nova máquina virtual no ambiente de preparo. Se você usa uma instância de preparo e planeja testar a funcionalidade do {% data variables.product.prodname_actions %}, examine a configuração de armazenamento no ambiente de preparo.

Depois de restaurar um backup do {% data variables.product.prodname_ghe_server %} para a instância de preparo, se você tentar exibir logs ou artefatos do {% data variables.product.prodname_actions %} existentes de fluxo de trabalho em sua instância de preparo, verá erros `404`, pois esses dados estarão ausentes do local de armazenamento de preparo. Para contornar os erros `404`, você pode copiar dados da produção para usar em seu ambiente de preparo.

### Configurando o armazenamento

Ao configurar um ambiente de preparo que inclua uma instância do {% data variables.product.product_name %} com o {% data variables.product.prodname_actions %} habilitado, você deve usar uma configuração de armazenamento externo para o armazenamento do {% data variables.product.prodname_actions %} diferente do ambiente de produção.

{% warning %}

**Aviso**: se você não alterar a configuração de armazenamento, sua instância de preparo poderá gravar no mesmo armazenamento externo que você usa para produção, o que pode resultar em perda de dados.

{% endwarning %}

Para obter mais informações sobre a configuração de armazenamento para {% data variables.product.prodname_actions %}, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#enabling-github-actions-with-your-storage-provider)".

### Copiar arquivos da produção para o preparo

Para espelhar com mais precisão seu ambiente de produção, você pode copiar arquivos do local de armazenamento de produção do {% data variables.product.prodname_actions %} para o local de armazenamento de preparo.

* Para uma conta de armazenamento do Azure, você pode usar [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account). Por exemplo:

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Para buckets do Amazon S3, você pode usar [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html). Por exemplo:

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
