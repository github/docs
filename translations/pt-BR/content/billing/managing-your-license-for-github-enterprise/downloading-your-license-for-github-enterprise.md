---
title: Fazendo o download da sua licença para o GitHub Enterprise
intro: 'Você pode fazer o download de uma cópia do arquivo da sua licença para {% data variables.product.prodname_ghe_server %}.'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Download your license
ms.openlocfilehash: eed588e2580558280e2e11639f0904b5f9fcf118
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083419'
---
## Sobre os arquivos de licença para {% data variables.product.prodname_enterprise %}

Após comprar ou atualizar uma licença para {% data variables.product.prodname_enterprise %} de {% data variables.contact.contact_enterprise_sales %}, você deverá fazer o download do arquivo da sua nova licença. Para obter mais informações sobre licenças do {% data variables.product.prodname_enterprise %}, confira "[Sobre as licenças do {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)".

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Fazer o download da sua licença de {% data variables.product.prodname_dotcom_the_website %}

Você deve ter uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %} para fazer o download da sua licença em {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, confira "[Sobre as contas corporativas](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion ghes %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% elsif ghec %}".{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Licenciamento do Enterprise**.
  ![Guia "Licenciamento do Enterprise" na barra lateral das configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Em "Instâncias do Enterprise Server", clique em {% octicon "download" aria-label="The download icon" %} para baixar o arquivo de licença.
  ![Baixar licença do GitHub Enterprise Server](/assets/images/help/business-accounts/download-ghes-license.png)

Depois de fazer o download do arquivo da sua licença, você poderá enviar o arquivo para {% data variables.product.product_location_enterprise %} para validar seu aplicativo. Para obter mais informações, confira {% ifversion ghec %}"[Como carregar uma nova licença do {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" na documentação do {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Como carregar uma nova licença do {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% endif %}

## Fazer o download da sua licença se você não tiver uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %}

Caso você não tenha uma conta corporativa do {% data variables.product.prodname_dotcom_the_website %}, ou não tenha certeza, talvez consiga baixar a licença do {% data variables.product.prodname_ghe_server %} no [site do {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/download).

Em caso de dúvidas sobre o download da sua licença, entre em contato com {% data variables.contact.contact_enterprise_sales %}.
