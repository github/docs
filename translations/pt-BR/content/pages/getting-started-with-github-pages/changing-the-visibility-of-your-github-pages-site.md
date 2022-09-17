---
title: Alterar a visibilidade do site do GitHub Pages
intro: Você pode gerenciar o controle de acesso no seu site de projeto publicando o site publicamente ou privadamente.
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: Change visibility of site
ms.openlocfilehash: f80ec04f0f16413414a4334e02ee3b45f534b46c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145282854'
---
## Sobre controle de acesso para sites de {% data variables.product.prodname_pages %}

Com controle de acesso para {% data variables.product.prodname_pages %}, você pode restringir o acesso ao site do projeto publicando o site de modo privado. Um site publicado de forma privada só pode ser acessado por pessoas com acesso de leitura ao repositório a partir do qual o site é publicado. Você pode usar sites publicados de forma privada para compartilhar sua documentação interna ou base de conhecimento com integrantes da sua empresa. 

{% data reusables.pages.privately-publish-ghec-only %}

Se sua empresa usar {% data variables.product.prodname_emus %}, o controle de acesso não está disponível e todos os sites {% data variables.product.prodname_pages %} são acessíveis apenas para outros membros da empresa. Para obter mais informações sobre os {% data variables.product.prodname_emus %}, confira "[Sobre os {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)".

Se a organização usa o {% data variables.product.prodname_ghe_cloud %} sem {% data variables.product.prodname_emus %}, você pode publicar os sites de modo privado ou público para qualquer pessoa na Internet.

O controle de acesso está disponível para os sites de projeto publicados a partir de um repositório privado ou interno que pertencem à organização. Você não pode gerenciar o controle de acesso para um site da organização. Para obter mais informações sobre os tipos do sites do {% data variables.product.prodname_pages %}, confira "[Sobre o {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

## Sobre subdomínios para sites publicados privadamente

Os sites publicados em particular estão disponíveis em um subdomínio diferente dos sites publicados em modo público. Isso garante que seu site do {% data variables.product.prodname_pages %} esteja seguro a partir do momento em que for publicado:

- Protegemos automaticamente cada subdomínio de `*.pages.github.io` com um certificado TLS e impomos o HSTS para garantir que os navegadores sempre forneçam a página por HTTPS.
- Usamos um subdomínio único para o site publicado de forma privada para garantir que outros repositórios na organização não possam publicar conteúdo na mesma origem do site. Isso protege seu site contra "[jogo de cookie](https://github.blog/2013-04-09-yummy-cookies-across-domains/)". É por isso também que não hospedamos sites do {% data variables.product.prodname_pages %} no domínio `github.com`.

Você pode visualizar o subdomínio único do site na guai "Páginas" das configurações do seu repositório. Se você estiver usando um gerador de site estático configurado para criar o site com o nome do repositório como um caminho, talvez seja necessário atualizar as configurações para o gerador do site estático ao alterar o site para privado. Para obter mais informações, confira "[Como configurar o Jekyll no seu site do {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) ou a documentação do gerador de site estático.

Para usar um domínio mais curto e memorável para seu site publicado privadamente, você poderá configurar um domínio personalizado. Para obter mais informações, confira "[Como configurar um domínio personalizado para o seu site do {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site)".

## Alterar a visibilidade do seu site de {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. Em "{% data variables.product.prodname_pages %}", selecione o menu suspenso **Visibilidade do {% data variables.product.prodname_pages %}** e clique em uma visibilidade.
   ![Menu suspenso para escolher uma visibilidade para seu site](/assets/images/help/pages/public-or-private-visibility.png)
4. Para ver seu site publicado, em "{% data variables.product.prodname_pages %}", clique na URL do seu site.
![URL do seu site publicado no modo privado](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
