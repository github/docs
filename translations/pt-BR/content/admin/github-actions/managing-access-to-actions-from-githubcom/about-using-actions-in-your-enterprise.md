---
title: Sobre como usar ações na sua empresa
intro: 'O {% data variables.product.product_name %} inclui a maioria das ações criadas pelo {% data variables.product.prodname_dotcom %} e tem opções para permitir o acesso a outras ações do {% data variables.product.prodname_dotcom_the_website %} e do {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
shortTitle: About actions in your enterprise
ms.openlocfilehash: 2e18b932548aa7ad9b65c090b6a5418762bcb501
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139005'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre ações em {% data variables.product.product_name %}

Os fluxos de trabalho do {% data variables.product.prodname_actions %} podem usar _ações_, que são tarefas individuais que podem ser combinadas para criar trabalhos e personalizar seu fluxo de trabalho. Você pode criar suas próprias ações ou usar e personalizar ações compartilhadas pela comunidade {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.enterprise-no-internet-actions %} Você pode restringir seus desenvolvedores a usar ações que são armazenadas em {% data variables.product.product_location %}, o que inclui a maioria das ações oficiais de criadas por {% data variables.product.company_short %}, bem como quaisquer ações que seus desenvolvedores criarem. Como alternativa, para permitir que seus desenvolvedores se beneficiem de todo o ecossistema de ações criadas pelos líderes do setor e pela comunidade de código aberto você pode configurar o acesso a outras ações a partir de {% data variables.product.prodname_dotcom_the_website %}. 

Recomendamos permitir acesso automático a todas as ações de {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghes %}No entanto, isso exige que {% data variables.product.product_name %} faça conexões de saída para {% data variables.product.prodname_dotcom_the_website %}. Se você não quiser permitir essas conexões ou{% else %}Se{% endif %} se você quiser ter maior controle sobre quais ações são usadas em sua empresa, você pode sincronizar manualmente ações específicas de {% data variables.product.prodname_dotcom_the_website %}.

## Ações oficiais agrupadas com a sua instância corporativa

{% data reusables.actions.actions-bundled-with-ghes %}

As acções oficiais agrupadas incluem, entre outras, as listadas a seguir.
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- Várias ações `actions/setup-`

Para ver todas as ações oficiais incluídas na sua instância corporativa, navegue até a organização `actions` na sua instância: <code>https://<em>HOSTNAME</em>/actions</code>.

Não há conexão necessária entre {% data variables.product.product_location %} e {% data variables.product.prodname_dotcom_the_website %} para usar essas ações.

Cada ação é um repositório na organização `actions`, e cada repositório de ações inclui as tags, os branches e os SHAs de commit necessários que seus fluxos de trabalho podem usar para referenciar a ação. Para obter informações sobre como atualizar as ações oficiais empacotadas, confira "[Como usar a última versão das ações empacotadas oficiais](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions)".

{% note %}

**Observações:** 
- Quando as ações de instalação (como `actions/setup-LANGUAGE`) são usadas no {% data variables.product.product_name %} com executores auto-hospedados, talvez seja necessário configurar o cache de ferramentas nos executores que não têm acesso à Internet. Para obter mais informações, confira "[Como configurar o cache de ferramentas em executores auto-hospedados sem acesso à Internet](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)".
- Quando o {% data variables.product.product_name %} é atualizado, as ações em pacote são substituídas automaticamente por versões padrão no pacote de atualização.

{% endnote %}

## Configurar o acesso a ações no {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.actions.access-actions-on-dotcom %}

A abordagem recomendada é habilitar o acesso automático para todas as ações a partir de {% data variables.product.prodname_dotcom_the_website %}. Faça isso usando o {% data variables.product.prodname_github_connect %} para integrar o {% data variables.product.product_name %} ao {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, confira "[Como habilitar o acesso automático às ações do {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)". 

{% ifversion ghes %} {% note %}

**Observação:** para configurar o acesso às ações do {% data variables.product.prodname_dotcom_the_website %}, você precisa configurar o {% data variables.product.product_location %} para usar o {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_actions %} para GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".


{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

Como alternativa, se você quiser ter um controle mais rigoroso sobre as ações que são permitidas na sua empresa ou não quiser permitir conexões de saída com o {% data variables.product.prodname_dotcom_the_website %}, baixe e sincronize as ações manualmente na sua instância corporativa usando a ferramenta `actions-sync`. Para obter mais informações, confira "[Como sincronizar as ações manualmente no {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)".
