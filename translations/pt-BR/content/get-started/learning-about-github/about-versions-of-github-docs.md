---
title: Sobre versões da Documentação do GitHub
intro: Você pode ler a documentação que reflete o produto de {% data variables.product.company_short %} que você está usando atualmente.
versions: '*'
shortTitle: Docs versions
ms.openlocfilehash: 656cb53b79409329299d63e9f77b14a56b809f6c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146681292"
---
## Sobre as versões de {% data variables.product.prodname_docs %}

{% data variables.product.company_short %} oferece diferentes produtos para armazenar e colaborar no código. O produto que você usa determina quais funcionalidades estão disponíveis para você. Para obter mais informações, confira "[Produtos do {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)".

Este site, {% data variables.product.prodname_docs %}, fornece documentação para todos os produtos de {% data variables.product.company_short %}. Se o conteúdo que você está lendo se aplicar a mais de um produto, você poderá escolher a versão da documentação que é relevante para você, selecionando o produto que você está usando atualmente.

Na parte superior de uma página em {% data variables.product.prodname_docs %}, selecione o menu suspenso e clique em um produto. Se a janela do seu navegador não for grande o suficiente para exibir a barra de navegação inteira, talvez você precise clicar primeiro em {% octicon "three-bars" aria-label="The three bars icon" %}.

![Captura de tela do menu suspenso para escolher uma versão de {% data variables.product.prodname_docs %} para ver](/assets/images/help/docs/version-picker.png)

{% note %}

**Observação**: você já pode experimentar alterar a versão. Você está vendo {% ifversion ghes %}uma{% else %}a{% endif %} {% ifversion fpt %}versão Gratuita, Pro e Team{% else %}{% data variables.product.product_name %}{% endif %} deste artigo.

{% endnote %}

## Determinando quais produtos de {% data variables.product.company_short %} você usa

Você pode determinar qual produto {% data variables.product.company_short %} você está usando atualmente revisando a URL na barra de endereços do seu navegador e o título para o site {% data variables.product.prodname_dotcom %} que você está visitando.

Você pode usar mais de um produto de {% data variables.product.company_short %}. Por exemplo, você pode contribuir para o código aberto em {% data variables.product.prodname_dotcom_the_website %} e colaborar no código na instância de {% data variables.product.prodname_ghe_server %} do seu empregador. É possível que você precise visualizar diferentes versões do mesmo artigo em momentos diferentes, dependendo do problema que você está tentando resolver.

### Planos de {% data variables.product.prodname_dotcom_the_website %} ou {% data variables.product.prodname_ghe_cloud %}

Se você acessar o {% data variables.product.prodname_dotcom %} em https://github.com, usará os recursos de um plano Gratuito, Pro ou Team ou usará o {% data variables.product.prodname_ghe_cloud %}.

Na janela ampla de um navegador, não há texto que siga imediatamente o logotipo de {% data variables.product.company_short %} no lado esquerdo do cabeçalho.

![Captura de tela da barra de endereços e o header de {% data variables.product.prodname_dotcom_the_website %} em um navegador](/assets/images/help/docs/header-dotcom.png)

Em {% data variables.product.prodname_dotcom_the_website %}, cada conta tem seu próprio plano. Cada conta pessoal tem um plano associado que oferece acesso a determinadas funcionalidades, e cada organização tem um plano associado diferente. Se a sua conta pessoal for integrante de uma organização em {% data variables.product.prodname_dotcom_the_website %}, você poderá ter acesso a diferentes funcionalidades quando usar recursos pertencentes a essa organização do que quando você usa recursos pertencentes à sua conta pessoal. Para obter mais informações, confira "[Tipos de contas do {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

Se você não sabe se uma organização usa o {% data variables.product.prodname_ghe_cloud %}, pergunte ao proprietário de uma organização. Para obter mais informações, confira "[Como ver as funções das pessoas em uma organização](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization)".

### {% data variables.product.prodname_ghe_server %}

Se você acessar o {% data variables.product.prodname_dotcom %} em uma URL diferente de https://github.com, `https://*.githubenterprise.com`, `https://*.github.us` ou `https://*.ghe.com`, você usará o {% data variables.product.prodname_ghe_server %}. Por exemplo, você pode acessar o {% data variables.product.prodname_ghe_server %} em `https://github.YOUR-COMPANY-NAME.com`. Seus administradores podem escolher uma URL que não inclua a palavra "{% data variables.product.company_short %}".

Em uma janela ampla do navegador, a palavra "Enterprise" segue imediatamente o logotipo {% data variables.product.company_short %} no lado esquerdo do header.

![Captura de tela da barra de endereços e header {% data variables.product.prodname_ghe_server %} em um navegador](/assets/images/help/docs/header-ghes.png)

Você pode ver a versão do {% data variables.product.prodname_ghe_server %} que está usando no rodapé de qualquer página.

![Captura de tela do rodapé do {% data variables.product.prodname_ghe_server %}, com a versão realçada](/assets/images/help/docs/ghes-version-in-footer.png)

### {% data variables.product.prodname_ghe_managed %}

Se você acessar o {% data variables.product.prodname_dotcom %} em `https://*.githubenterprise.com`, `https://*.github.us` ou `https://*.ghe.com`, usará o {% data variables.product.prodname_ghe_managed %}.

Na janela ampla de um navegador, as palavras "{% data variables.product.prodname_ghe_managed %}" seguem imediatamente o logotipo de {% data variables.product.company_short %} no header.

![Barra de endereços e header de {% data variables.product.prodname_ghe_managed %} em um navegador](/assets/images/help/docs/header-ghae.png)
