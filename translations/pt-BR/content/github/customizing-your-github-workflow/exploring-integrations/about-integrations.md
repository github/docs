---
title: Sobre integrações
intro: 'As integrações são ferramentas e serviços que se conectam ao {% data variables.product.product_name %} para complementar e estender o fluxo de trabalho.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
versions:
  fpt: '*'
---

Você pode instalar integrações em sua conta pessoal ou em organizações que possui. You can also install {% data variables.product.prodname_github_apps %} from a third-party in a specific repository where you have admin permissions or which is owned by your organization.

## Differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}

Integrations can be {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, or anything that utilizes {% data variables.product.product_name %} APIs or webhooks.

{% data variables.product.prodname_github_apps %} offer granular permissions and request access to only what the app needs. {% data variables.product.prodname_github_apps %} also offer specific user-level permissions that each user must authorize individually when an app is installed or when the integrator changes the permissions requested by the app.

Para obter mais informações, consulte:
- "[Differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/)"
- "[Sobre aplicativos](/apps/about-apps/)"
- "[Permissões de nível de usuário](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)"
- "[Autorizar {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)"
- "[Autorizar {% data variables.product.prodname_github_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- "[Revisar integrações autorizadas](/articles/reviewing-your-authorized-integrations/)"

Será possível instalar um {% data variables.product.prodname_github_app %} pré-configurado se os integradores ou criadores de app tiverem criado o respectivo app com o fluxo de manifesto do {% data variables.product.prodname_github_app %}. Para obter informações sobre como executar o {% data variables.product.prodname_github_app %} com configuração automatizada, entre em contato com o integrador ou criador do app.

Você poderá criar um {% data variables.product.prodname_github_app %} com configuração simplificada se usar o Probot. Para obter mais informações, consulte o site de [documentos do Probot](https://probot.github.io/docs/).

## Descobrir integrações no {% data variables.product.prodname_marketplace %}

É possível encontrar uma integração para instalar ou publicar a sua própria integração no {% data variables.product.prodname_marketplace %}.

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) contains {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}. Para obter mais informações sobre como encontrar uma integração ou criar sua própria integração, consulte "[Sobre o {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace)".

## Integrações compradas diretamente de integradores

Você também pode comprar algumas integrações diretamente de integradores. Como um integrante da organização, ao encontrar um {% data variables.product.prodname_github_app %} que queira usar, você poderá solicitar que uma organização aprove e instale o app para a organização.

If you have admin permissions for all organization-owned repositories the app is installed on, you can install {% data variables.product.prodname_github_apps %} with repository-level permissions without having to ask an organization owner to approve the app. Quando um integrador altera as permissões do app, se as permissões forem apenas para um repositório, os proprietários da organização e as pessoas com permissões de administrador para um repositório com esse app instalado poderão revisar e aceitar as novas permissões.
