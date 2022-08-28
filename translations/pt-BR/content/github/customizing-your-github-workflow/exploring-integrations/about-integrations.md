---
title: Sobre integrações
intro: 'As integrações são ferramentas e serviços que se conectam ao {% data variables.product.product_name %} para complementar e estender o fluxo de trabalho.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
versions:
  free-pro-team: '*'
---

Você pode instalar integrações em sua conta pessoal ou em organizações que possui. Também é possível instalar {% data variables.product.prodname_github_app %}s de terceiros em um repositório específico, onde você tenha permissões de administrador ou que seja de propriedade da sua organização.

### Diferenças entre os {% data variables.product.prodname_github_app %}s e {% data variables.product.prodname_oauth_app %}s

As integrações podem ser {% data variables.product.prodname_github_app %}s, {% data variables.product.prodname_oauth_app %}s ou tudo que utilize APIs ou webhooks do {% data variables.product.product_name %}.

Os {% data variables.product.prodname_github_app %}s oferecem permissões granulares e solicitam acesso apenas ao que o app precisa. Os {% data variables.product.prodname_github_app %}s também oferecem permissões específicas no nível de usuário que cada usuário deve autorizar individualmente quando um app é instalado ou quando o integrador muda as permissões solicitadas pelo app.

Para obter mais informações, consulte:
- "[Diferenças entre {% data variables.product.prodname_github_app %}s e {% data variables.product.prodname_oauth_app %}s](/apps/differences-between-apps/)"
- "[Sobre aplicativos](/apps/about-apps/)"
- "[Permissões de nível de usuário](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)"
- "[Autorizar{% data variables.product.prodname_oauth_app %}s](/articles/authorizing-oauth-apps/)"
- "[Revisar integrações autorizadas](/articles/reviewing-your-authorized-integrations/)"

Será possível instalar um {% data variables.product.prodname_github_app %} pré-configurado se os integradores ou criadores de app tiverem criado o respectivo app com o fluxo de manifesto do {% data variables.product.prodname_github_app %}. Para obter informações sobre como executar o {% data variables.product.prodname_github_app %} com configuração automatizada, entre em contato com o integrador ou criador do app.

Você poderá criar um {% data variables.product.prodname_github_app %} com configuração simplificada se usar o Probot. Para obter mais informações, consulte o site de [documentos do Probot](https://probot.github.io/docs/).

### Descobrir integrações no {% data variables.product.prodname_marketplace %}

É possível encontrar uma integração para instalar ou publicar a sua própria integração no {% data variables.product.prodname_marketplace %}.

O [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) contém{% data variables.product.prodname_github_app %}s e {% data variables.product.prodname_oauth_app %}s. Para obter mais informações sobre como encontrar uma integração ou criar sua própria integração, consulte "[Sobre o {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace)".

### Integrações compradas diretamente de integradores

Você também pode comprar algumas integrações diretamente de integradores. Como um integrante da organização, ao encontrar um {% data variables.product.prodname_github_app %} que queira usar, você poderá solicitar que uma organização aprove e instale o app para a organização.

Caso tenha permissões de administrador para todos os repositórios de propriedade da organização em que o app está instalado, você poderá instalar os {% data variables.product.prodname_github_app %}s com permissões no nível de repositório sem precisar solicitar a um proprietário da organização que aprove o app. Quando um integrador altera as permissões do app, se as permissões forem apenas para um repositório, os proprietários da organização e as pessoas com permissões de administrador para um repositório com esse app instalado poderão revisar e aceitar as novas permissões.
