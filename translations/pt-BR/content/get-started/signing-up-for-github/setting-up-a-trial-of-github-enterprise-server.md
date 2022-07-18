---
title: Configurar uma versão de avaliação do GitHub Enterprise Server
intro: 'Você pode avaliar o {% data variables.product.prodname_ghe_server %} gratuitamente.'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise
  - /articles/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Teste do servidor corporativo
---

## Sobre as versões de avaliação do {% data variables.product.prodname_ghe_server %}

Você pode solicitar uma versão de avaliação por 45 dias do {% data variables.product.prodname_ghe_server %}. A versão de avaliação será instalada como um appliance virtual, com opções para implementação local ou na nuvem. Para obter mais informações sobre {% data variables.product.prodname_ghe_server %}, e para uma lista de plataformas de virtualização compatíveis, consulte "[Sobre {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server)".

{% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}Alertas de Segurança{% endif %} e {% data variables.product.prodname_github_connect %} não estão disponíveis atualmente nos testes de {% data variables.product.prodname_ghe_server %}. Para uma demonstração desses recursos, entre em contato com  {% data variables.contact.contact_enterprise_sales %}. Para obter mais informações sobre essas funcionalidades, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" e "[Conectando sua conta corporativa a {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

As versões de avaliação também estão disponíveis para {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_cloud %}](/articles/setting-up-a-trial-of-github-enterprise-cloud)".

{% data reusables.products.which-product-to-use %}

## Configurar a versão de avaliação do {% data variables.product.prodname_ghe_server %}

O {% data variables.product.prodname_ghe_server %} é instalado como um appliance virtual. Escolha uma pessoa na organização para configurar uma máquina virtual e peça para ela [solicitar uma versão de avaliação](https://enterprise.github.com/trial). Você pode iniciar a versão de avaliação imediatamente após enviar a solicitação.

Para configurar uma conta para o portal da web do {% data variables.product.prodname_enterprise %}, clique no link no e-mail recebido após enviar a solicitação da versão de avaliação e siga as instruções. Depois, baixe seu arquivo de licença. Para obter mais informações, consulte "[Gerenciar a sua licença para {% data variables.product.prodname_enterprise %}](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise)."

Para instalar o {% data variables.product.prodname_ghe_server %}, faça download dos componentes necessários e faça upload do arquivo da licença. Para obter mais informações, consulte as instruções da plataforma de visualização escolhida em "[Configurar uma instância do {% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/installation/setting-up-a-github-enterprise-server-instance)".

## Próximas etapas

Siga estas etapas para aproveitar ao máximo a versão de avaliação:

1. [Crie uma organização](/enterprise-server@latest/admin/user-management/creating-organizations).
2. Para aprender as noções básicas de uso do {% data variables.product.prodname_dotcom %}, consulte:
   - [Introdução ao webcast de {% data variables.product.prodname_dotcom %}](https://resources.github.com/devops/methodology/maximizing-devops-roi/)
   - [Entender o fluxo do {% data variables.product.prodname_dotcom %}](https://guides.github.com/introduction/flow/) nos guias do {% data variables.product.prodname_dotcom %}
   - [Hello World](https://guides.github.com/activities/hello-world/) nos guias do {% data variables.product.prodname_dotcom %}
   - "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)"
3. Para configurar a sua instância para atender as necessidades da sua organização, consulte "[Configurar sua empresa](/enterprise-server@latest/admin/configuration/configuring-your-enterprise)".
4. Para integrar o {% data variables.product.prodname_ghe_server %} ao seu provedor de identidade, consulte "[Usar SAML](/enterprise-server@latest/admin/user-management/using-saml)" e "[Usar LDAP](/enterprise-server@latest/admin/authentication/using-ldap)".
5. Convite o número desejado de pessoas (sem limite) para fazer parte da versão de avaliação.
   - Adicione os usuários à sua instância do {% data variables.product.prodname_ghe_server %} usando autenticação integrada ou seu provedor de identidade configurado. Para obter mais informações, consulte "[Usar autenticação integrada](/enterprise-server@latest/admin/user-management/using-built-in-authentication)".
   - Para convidar pessoas para atuar como administradores da conta, acesse o [portar da web do {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/login).

    {% note %}

    **Observação:** as pessoas convidadas para atuar como administradores da conta receberão um e-mail com um link para aceitar o convite.

    {% endnote %}

{% data reusables.products.product-roadmap %}

## Finalizar a versão de avaliação

Você pode fazer upgrade para as licenças completas no [portal da web do {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/login) a qualquer momento durante o período da avaliação.

Se não fizer upgrade até o último dia do período de avaliação, você receberá um e-mail informando que o período da avaliação terminou. Se precisar de mais tempo para avaliar o {% data variables.product.prodname_enterprise %}, entre em contato com {% data variables.contact.contact_enterprise_sales %} para solicitar uma extensão.

## Leia mais

- "[Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)"
