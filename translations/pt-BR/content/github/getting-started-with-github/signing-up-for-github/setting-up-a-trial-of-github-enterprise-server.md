---
title: Configurar uma versão de avaliação do GitHub Enterprise Server
intro: 'Você pode avaliar o {% data variables.product.prodname_ghe_server %} gratuitamente.'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise/
  - /articles/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---
### Sobre as versões de avaliação do {% data variables.product.prodname_ghe_server %}

Você pode solicitar uma versão de avaliação por 45 dias do {% data variables.product.prodname_ghe_server %}. A versão de avaliação será instalada como um appliance virtual, com opções para implementação local ou na nuvem. Consulte a lista de plataformas de visualização compatíveis em "[Configurar uma instância do GitHub Enterprise Server](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)".

{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}Alertas {% endif %} de segurança e {% data variables.product.prodname_github_connect %} não estão atualmente disponíveis em testes de {% data variables.product.prodname_ghe_server %}. Para uma demonstração desses recursos, entre em contato com  {% data variables.contact.contact_enterprise_sales %}. Para obter mais informações sobre esses recursos, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" e "[Conectando {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".

As versões de avaliação também estão disponíveis para {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_cloud %}](/articles/setting-up-a-trial-of-github-enterprise-cloud)".

{% data reusables.products.which-product-to-use %}

### Configurar a versão de avaliação do {% data variables.product.prodname_ghe_server %}

O {% data variables.product.prodname_ghe_server %} é instalado como um appliance virtual. Escolha uma pessoa na organização para configurar uma máquina virtual e peça para ela [solicitar uma versão de avaliação](https://enterprise.github.com/trial). Você pode iniciar a versão de avaliação imediatamente após enviar a solicitação.

Para configurar uma conta para o portal da web do {% data variables.product.prodname_enterprise %}, clique no link no e-mail recebido após enviar a solicitação da versão de avaliação e siga as instruções. Depois, baixe seu arquivo de licença. Para obter mais informações, consulte "[Gerenciar a licença do {% data variables.product.prodname_enterprise %}](/enterprise/admin/installation/managing-your-github-enterprise-license)".

Para instalar o {% data variables.product.prodname_ghe_server %}, faça download dos componentes necessários e faça upload do arquivo da licença. Para obter mais informações, consulte as instruções da plataforma de visualização escolhida em "[Configurar uma instância do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)".

### Próximas etapas

Siga estas etapas para aproveitar ao máximo a versão de avaliação:

1. [Crie uma organização](/enterprise/admin/user-management/creating-organizations).
2. Para aprender as noções básicas de uso do {% data variables.product.prodname_dotcom %}, consulte:
   - Webcast [Guia de início rápido do {% data variables.product.prodname_dotcom %}](https://resources.github.com/webcasts/Quick-start-guide-to-GitHub/)
   - [Entender o fluxo do {% data variables.product.prodname_dotcom %}](https://guides.github.com/introduction/flow/) nos guias do {% data variables.product.prodname_dotcom %}
   - [Hello World](https://guides.github.com/activities/hello-world/) nos guias do {% data variables.product.prodname_dotcom %}
3. Para configurar a sua instância para atender as necessidades da sua organização, consulte "[Configurar sua empresa](/enterprise/admin/configuration/configuring-your-enterprise)".
4. Para integrar o {% data variables.product.prodname_ghe_server %} ao seu provedor de identidade, consulte "[Usar SAML](/enterprise/admin/user-management/using-saml)" e "[Usar LDAP](/enterprise/admin/authentication/using-ldap)".
5. Convite o número desejado de pessoas (sem limite) para fazer parte da versão de avaliação.
   - Adicione os usuários à sua instância do {% data variables.product.prodname_ghe_server %} usando autenticação integrada ou seu provedor de identidade configurado. Para obter mais informações, consulte "[Usar autenticação integrada](/enterprise/admin/user-management/using-built-in-authentication)".
   - Para convidar pessoas para atuar como administradores da conta, acesse o [portar da web do {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/login).

    {% note %}

    **Observação:** as pessoas convidadas para atuar como administradores da conta receberão um e-mail com um link para aceitar o convite.

    {% endnote %}

{% data reusables.products.product-roadmap %}

### Finalizar a versão de avaliação

Você pode fazer upgrade para as licenças completas no [portal da web do {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/login) a qualquer momento durante o período da avaliação.

Se não fizer upgrade até o último dia do período de avaliação, você receberá um e-mail informando que o período da avaliação terminou. Se precisar de mais tempo para avaliar o {% data variables.product.prodname_enterprise %}, entre em contato com {% data variables.contact.contact_enterprise_sales %} para solicitar uma extensão.

### Leia mais

- "[Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_cloud %}](/articles/setting-up-a-trial-of-github-enterprise-cloud)"
