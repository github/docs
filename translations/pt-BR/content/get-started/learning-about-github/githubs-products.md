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
---

## Sobre os produtos de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} oferece produtos gratuitos e pagos para armazenar e colaborar no código. Alguns produtos aplicam-se apenas a contas pessoais, enquanto outros planos aplicam-se apenas às contas da organização e corporativas. Para obter mais informações sobre as contas, consulte "[Tipos de contas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

Você pode ver o preço e uma lista completa dos recursos de cada produto em <{% data variables.product.pricing_url %}>. {% data reusables.products.product-roadmap %}

Ao ler {% data variables.product.prodname_docs %}, certifique-se de selecionar a versão que reflete seu produto. Para obter mais informações, consulte "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)."

## {% data variables.product.prodname_free_user %} para contas pessoais

Com o {% data variables.product.prodname_free_team %} para contas pessoais, você pode trabalhar com colaboradores ilimitados em repositórios públicos ilimitados com um conjunto completo de recursos e em repositórios privados ilimitados com um conjunto de recursos limitado.

Com o {% data variables.product.prodname_free_user %}, sua conta pessoal inclui:
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- Implementação de autenticação de dois fatores
- 2.000 {% data variables.product.prodname_actions %} minutos
- 500MB {% data variables.product.prodname_registry %} de armazenamento

## {% data variables.product.prodname_pro %}

Além dos recursos disponíveis no {% data variables.product.prodname_free_user %} para contas pessoais, o {% data variables.product.prodname_pro %} inclui:
- {% data variables.contact.github_support %} via e-mail
- 3.000 {% data variables.product.prodname_actions %} minutos
- 2GB {% data variables.product.prodname_registry %} de armazenamento
- Ferramentas avançadas e insights em repositórios privados:
  - Revisores de pull request necessários
  - Múltiplos revisores de pull request
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
- Discussões de equipe
- Controles de acesso de equipes para gerenciar grupos
- 2.000 {% data variables.product.prodname_actions %} minutos
- 500MB {% data variables.product.prodname_registry %} de armazenamento

## {% data variables.product.prodname_team %}

Além dos recursos disponíveis no {% data variables.product.prodname_free_team %} para organizações, o {% data variables.product.prodname_team %} inclui:
- {% data variables.contact.github_support %} via e-mail
- 3.000 {% data variables.product.prodname_actions %} minutos
- 2GB {% data variables.product.prodname_registry %} de armazenamento
- Ferramentas avançadas e insights em repositórios privados:
  - Revisores de pull request necessários
  - Múltiplos revisores de pull request
  - Pull requests de rascunho
  - Equipe de revisores de pull request
  - Branches protegidos
  - Proprietários de código
  - Lembretes agendados
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Gráficos de informações de repositório: Pulse, contribuidores, tráfego, commits, frequência de códigos, rede e bifurcações
{%- ifversion fpt or ghec %}
- A opção para habilitar {% data variables.product.prodname_github_codespaces %}
  - Os proprietários da organização podem habilitar {% data variables.product.prodname_github_codespaces %} para a organização definindo um limite de gastos e concedendo permissões de usuário aos integrantes da sua organização. Para obter mais informações, consulte "[Habilitando codespaces para a sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)".
{%- endif %}

{% data variables.product.company_short %} realiza a cobrança para {% data variables.product.prodname_team %} por usuário. Para obter mais informações, consulte "[Sobre os preços por usuário]({% ifversion not fpt %}/free-pro-team@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion fpt %}. "{% else %}" na documentação dos planos Grátis, Pro, & Equipe.{% endif %}

{% data reusables.actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

O {% data variables.product.prodname_enterprise %} inclui duas opções de implementação: hospedagem em nuvem e auto-hospedagem.

Além dos recursos disponíveis no {% data variables.product.prodname_team %}, o {% data variables.product.prodname_enterprise %} inclui:
- {% data variables.contact.enterprise_support %}
- Segurança adicional, conformidade e controles de instalação
- Autenticação com SAML de logon único
- Provisionamento de acesso com SAML ou SCIM
- {% data variables.product.prodname_github_connect %}
- A opção de comprar {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

O {% data variables.product.prodname_ghe_cloud %} também inclui:
- {% data variables.contact.enterprise_support %}. Para obter mais informações, consulte "<a href="/articles/github-enterprise-cloud-support" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} suporte</a>" e "<a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} Adendo</a>"
- 50.000 {% data variables.product.prodname_actions %} minutos
- 50GB {% data variables.product.prodname_registry %} de armazenamento
- Controle de acesso para sites de {% data variables.product.prodname_pages %}. Para obter mais informações, consulte <a href="/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site" class="dotcom-only">Alterar a visibilidade do seu site de {% data variables.product.prodname_pages %}</a>"
- Um acordo de nível de serviço para tempo de atividade de 99,9% por mês
- A opção de configurar sua empresa para {% data variables.product.prodname_emus %}, para que você possa fornecer e gerenciar integrantes com o seu provedor de identidade e restringir as contribuições dos integrantes para apenas a sua empresa. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
- A opção de gerenciar de forma centralizada a política e cobrança para várias organizações {% data variables.product.prodname_dotcom_the_website %} com uma conta corporativa. Para obter mais informações, consulte "[Sobre contas corporativas](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)".

{% data variables.product.company_short %} realiza a cobrança para {% data variables.product.prodname_ghe_cloud %} por usuário. Para obter mais informações, consulte "[Sobre o preço por usuário]({% ifversion not ghec %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion ghec %}".{% else %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% endif %}

Você pode configurar uma versão para avaliar o {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "<a href="/articles/setting-up-a-trial-of-github-enterprise-cloud" class="dotcom-only">Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_cloud %}</a>".

Para obter mais informações sobre hospedar sua própria instância do [{% data variables.product.prodname_ghe_server %}](https://enterprise.github.com), entre em contato com {% data variables.contact.contact_enterprise_sales %}. {% data reusables.enterprise_installation.request-a-trial %}
