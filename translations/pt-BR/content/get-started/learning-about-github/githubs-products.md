---
title: Produtos do GitHub
intro: 'Uma visão geral dos produtos e planos de preços de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-products
  - /github/getting-started-with-github/githubs-products
  - /github/getting-started-with-github/learning-about-github/githubs-products
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
ms.openlocfilehash: e2965befe319637296361e270646cd331478ae44
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159344'
---
## Sobre os produtos de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} oferece produtos gratuitos e pagos para armazenar e colaborar no código. Alguns produtos aplicam-se apenas a contas pessoais, enquanto outros planos aplicam-se apenas às contas de organização e corporativas. Para obter mais informações sobre contas, confira "[Tipos de contas do {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

Você pode ver o preço e uma lista completa dos recursos de cada produto em <{% data variables.product.pricing_url %}>. {% data reusables.products.product-roadmap %}

Ao ler {% data variables.product.prodname_docs %}, certifique-se de selecionar a versão que reflete seu produto. Para obter mais informações, confira "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

## {% data variables.product.prodname_free_user %} para contas pessoais

Com o {% data variables.product.prodname_free_team %} para contas pessoais, você pode trabalhar com colaboradores ilimitados em repositórios públicos ilimitados com um conjunto completo de recursos e em repositórios privados ilimitados com um conjunto de recursos limitado.

Com o {% data variables.product.prodname_free_user %}, sua conta pessoal inclui:
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- Imposição da autenticação de dois fatores
- 2 mil minutos de {% data variables.product.prodname_actions %} por mês 
- Armazenamento de 500 MB do {% data variables.product.prodname_registry %} {% ifversion fpt or ghec%}
- 120 horas de núcleo dos {% data variables.product.prodname_github_codespaces %} por mês
- 15 GB de armazenamento dos {% data variables.product.prodname_github_codespaces %} por mês {% endif %}

## {% data variables.product.prodname_pro %}

Além dos recursos disponíveis no {% data variables.product.prodname_free_user %} para contas pessoais, o {% data variables.product.prodname_pro %} inclui:
- {% data variables.contact.github_support %} via e-mail
- 3 mil minutos de {% data variables.product.prodname_actions %} por mês 
- Armazenamento de 2 GB do {% data variables.product.prodname_registry %} {% ifversion fpt or ghec%}
- 180 horas de núcleo dos {% data variables.product.prodname_github_codespaces %} por mês
- 20 GB de armazenamento dos {% data variables.product.prodname_github_codespaces %} por mês {% endif %}
- Ferramentas avançadas e insights em repositórios privados:
  - Revisores de solicitação de pull obrigatórios
  - Vários revisores de solicitação de pull
  - Branches protegidos
  - Proprietários de código
  - Referências autovinculadas
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Gráficos de informações de repositório: Pulse, contribuidores, tráfego, commits, frequência de códigos, rede e bifurcações

## {% data variables.product.prodname_free_team %} para organizações

Com o {% data variables.product.prodname_free_team %} para organizações, você pode trabalhar com colaboradores ilimitados em repositórios públicos ilimitados com um conjunto completo de recursos ou em repositórios privados ilimitados com um conjunto de recursos limitado.

Além dos recursos disponíveis no {% data variables.product.prodname_free_user %} para contas pessoais, o {% data variables.product.prodname_free_team %} para organizações inclui:
- {% data variables.product.prodname_gcf %}
- Discussões em equipe
- Controles de acesso da equipe para gerenciamento de grupos
- 2 mil minutos de {% data variables.product.prodname_actions %} por mês 
- 500 GB de armazenamento do {% data variables.product.prodname_registry %} 

## {% data variables.product.prodname_team %}

Além dos recursos disponíveis no {% data variables.product.prodname_free_team %} para organizações, o {% data variables.product.prodname_team %} inclui:
- {% data variables.contact.github_support %} via e-mail
- 3 mil minutos de {% data variables.product.prodname_actions %} por mês 
- 2 GB de armazenamento do {% data variables.product.prodname_registry %} 
- Ferramentas avançadas e insights em repositórios privados:
  - Revisores de solicitação de pull obrigatórios
  - Vários revisores de solicitação de pull
  - Solicitação de pull de rascunho
  - Revisores de solicitação de pull da equipe
  - Branches protegidos
  - Proprietários de código
  - Lembretes agendados
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Grafos de insights do repositório: Pulse, colaboradores, tráfego, commits, frequência de código, rede e forks {%- ifversion fpt or ghec %}
- A opção para habilitar {% data variables.product.prodname_github_codespaces %}
  - Os proprietários da organização podem habilitar {% data variables.product.prodname_github_codespaces %} para a organização definindo um limite de gastos e concedendo permissões de usuário aos integrantes da sua organização. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_github_codespaces %} para sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".
{%- endif %}

{% data variables.product.company_short %} realiza a cobrança para {% data variables.product.prodname_team %} por usuário. Para obter mais informações, confira "[Sobre os preços por usuário]({% ifversion not fpt %}/free-pro-team@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion fpt %}".{% else %}" na documentação da versão Gratuita, do Pro e do Team.{% endif %}

{% data reusables.actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

O {% data variables.product.prodname_enterprise %} inclui duas opções de implementação: hospedagem em nuvem e auto-hospedagem. 

Além dos recursos disponíveis no {% data variables.product.prodname_team %}, o {% data variables.product.prodname_enterprise %} inclui:
- {% data variables.contact.enterprise_support %}
- Segurança adicional, conformidade e controles de instalação
- Autenticação com o logon único do SAML
- Provisionamento de acesso com SAML ou SCIM
- {% data variables.product.prodname_github_connect %}
- A opção de comprar {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

O {% data variables.product.prodname_ghe_cloud %} também inclui:
- {% data variables.contact.enterprise_support %}. Para obter mais informações, confira "<a href="/articles/github-enterprise-cloud-support" class="dotcom-only">Suporte do {% data variables.product.prodname_ghe_cloud %}</a>" e "<a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">Adendo do {% data variables.product.prodname_ghe_cloud %}</a>".
- 50 mil minutos de {% data variables.product.prodname_actions %} por mês 
- 50 GB de armazenamento do {% data variables.product.prodname_registry %} 
- Controle de acesso para sites de {% data variables.product.prodname_pages %}. Para obter mais informações, confira "[Como alterar a visibilidade do seu site do {% data variables.product.prodname_pages %}](/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
- Um contrato de nível de serviço de tempo de atividade mensal de 99,9%
- A opção de configurar sua empresa para {% data variables.product.prodname_emus %}, para que você possa fornecer e gerenciar integrantes com o seu provedor de identidade e restringir as contribuições dos integrantes para apenas a sua empresa. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
- A opção de gerenciar de forma centralizada a política e cobrança para várias organizações {% data variables.product.prodname_dotcom_the_website %} com uma conta corporativa. Para obter mais informações, confira "[Sobre as contas corporativas](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)".

{% data reusables.enterprise.about-github-for-enterprises %}

Você pode configurar uma versão para avaliar o {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, confira "[Como configurar uma avaliação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/articles/setting-up-a-trial-of-github-enterprise-cloud)".

Para obter mais informações sobre como hospedar sua própria instância de dados do {% data variables.product.prodname_ghe_server %}, incluindo como configurar uma avaliação, confira "[Sobre {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server)".

## Leitura adicional

- "[Sobre os preços por usuário]({% ifversion not ghec %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing)"{% ifversion not ghec %}" na documentação do {% data variables.product.prodname_ghe_cloud %}{% endif %}
