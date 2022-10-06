---
title: Sobre licenças para o GitHub Enterprise
intro: '{% ifversion ghec %}Se você implantar {% data variables.product.prodname_ghe_server %} além de usar {% data variables.product.prodname_ghe_cloud %}, você{% else %}Você{% endif %} poderá sincronizar o uso de sua licença entre implementações de {% ifversion ghes %} {% data variables.product.prodname_enterprise %}{% endif %} e usar um arquivo de licença para desbloquear cada instância {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About licenses
ms.openlocfilehash: eb904ed497df785cfefa25cee7a5cb1fe5acfaa0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910508'
---
## Sobre o licenciamento de {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

Para garantir que o mesmo usuário não esteja consumindo mais de uma licença para várias implantações empresariais, você pode sincronizar o uso de licença entre as implantações {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}.

Para usar uma instância de {% data variables.product.prodname_ghe_server %}, você deve carregar um arquivo de licença que o {% data variables.product.company_short %} fornece quando você compra, renova ou adiciona licenças de usuário a {% data variables.product.prodname_enterprise %}.

## Sobre a sincronização do uso da licença para {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise-licensing.about-license-sync %} Para mais informações, confira "[Como sincronizar o uso da licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

## Sobre os arquivos de licença para {% data variables.product.prodname_enterprise %}

Quando você compra ou renova o {% data variables.product.prodname_enterprise %}, o {% data variables.product.company_short %} fornece um arquivo de licença {% ifversion ghec %}para suas implantações do {% data variables.product.prodname_ghe_server %}{% elsif ghes %}para o {% data variables.product.product_location_enterprise %}{% endif %}. O arquivo de uma licença tem uma data de validade e controla o número de pessoas que podem usar {% data variables.product.product_location_enterprise %}. Após fazer o download e instalar o {% data variables.product.prodname_ghe_server %}, você deverá fazer o upload do arquivo de licença para desbloquear o aplicativo para você usar.

Para obter mais informações sobre como baixar o arquivo de licença, confira "[Como baixar sua licença do {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)". 

Para obter mais informações sobre como carregar seu arquivo de licença, confira {% ifversion ghec %}"[Como carregar uma nova licença do {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" na documentação do {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Como carregar uma nova licença do {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% endif %}

Se sua licença vencer, você não poderá acessar {% data variables.product.prodname_ghe_server %} por meio de um navegador ou Git. Se necessário, você poderá usar os utilitários de linha de comando para fazer backup de todos os seus dados. Para obter mais informações, confira {% ifversion ghec %}"[Como configurar backups no seu dispositivo]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance)" na documentação do {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Como configurar backups no seu dispositivo](/admin/guides/installation/configuring-backups-on-your-appliance)". {% endif %}

Se você tiver alguma dúvida sobre a renovação da sua licença, contate {% data variables.contact.contact_enterprise_sales %}.

## Leitura adicional

- "[Sobre a cobrança para sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)"
- Site [Versões do {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/releases/)
- "[Como configurar uma instância do {% data variables.product.prodname_ghe_server %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)"
