---
title: Configurar uma versão de avaliação do GitHub Enterprise Cloud
intro: 'Você pode avaliar o {% data variables.product.prodname_ghe_cloud %} gratuitamente.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - contas
---

### Sobre as versões de avaliação do {% data variables.product.prodname_ghe_cloud %}

Você pode configurar uma versão para avaliar o {% data variables.product.prodname_ghe_cloud %} por 14 dias em uma nova conta de organização. Não há necessidade de fornecer um método de pagamento durante a avaliação, a menos que você adicione à sua organização aplicativos do {% data variables.product.prodname_marketplace %} que exijam um método de pagamento. Para obter mais informações, consulte "<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">Sobre a cobrança do {% data variables.product.prodname_marketplace %}</a>".

Sua versão de avaliação inclui 50 estações. Se precisar de mais estações para avaliar o {% data variables.product.prodname_ghe_cloud %}, entre em contato com {% data variables.contact.contact_enterprise_sales %}. Ao final da avaliação, você poderá escolher um número diferente de estações.

As versões de avaliação também estão disponíveis para o {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)".

{% data reusables.products.which-product-to-use %}

### Configurar a versão de avaliação do {% data variables.product.prodname_ghe_cloud %}

Antes de começar sua avaliação do {% data variables.product.prodname_ghe_cloud %}, você deve ter uma conta de usuário existente ou criar uma nova conta de usuário. Para obter mais informações, consulte "<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">Inscrever-se em uma nova conta do {% data variables.product.prodname_dotcom %}</a>".

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
4. Em "Enterprise", clique em **Start your 14-day free trial** (Começar uma avaliação grátis por 14 dias). ![Botão para comerçar a avaliação](/assets/images/help/organizations/start-trial-button.png)
5. Digite o nome de sua empresa. ![Campo nome da empresa](/assets/images/help/organizations/company-name-field.png)
{% data reusables.organizations.organization-name %}
7. Em "Full name" (nome completo), digite seu nome completo. ![Campo nome completo](/assets/images/help/organizations/full-name-field.png)
8. Em "Work email" (E-mail comercial), digite o e-mail que você usa para trabalhar. ![Campo e-mail comercial](/assets/images/help/organizations/work-email-field.png)
8. No menu suspenso **Industry** (Setor), selecione o setor de sua empresa. ![Menu suspenso Setor](/assets/images/help/organizations/industry-drop-down.png)
9. No menu suspenso **Number of employees** (Número de funcionários), selecione o número de funcionários de sua empresa. ![Menu suspenso número de funcionários](/assets/images/help/organizations/employees-drop-down.png)
10. Revise o <a href="/articles/github-enterprise-cloud-evaluation-agreement" class="dotcom-only">Contrato de Licença de Avaliação</a> e clique em **Next** (Próximo).

### Explorar o {% data variables.product.prodname_ghe_cloud %}

Depois de configurar sua versão de avaliação, você pode explorar o {% data variables.product.prodname_ghe_cloud %} seguindo o [Guia de Ativação Enterprise](https://resources.github.com/enterprise-onboarding/).

{% data reusables.products.product-roadmap %}

### Finalizar a versão de avaliação

Você pode comprar o {% data variables.product.prodname_enterprise %} ou fazer downgrade para o {% data variables.product.prodname_team %} em qualquer momento de sua avaliação.

Se você não comprar o {% data variables.product.prodname_enterprise %} ou o {% data variables.product.prodname_team %} antes de expirar sua versão de avaliação, sua organização será rebaixada para o {% data variables.product.prodname_free_team %} e perder acesso a ferramentas e recursos avançados incluídos apenas em produtos pagos, incluindo sites {% data variables.product.prodname_pages %} publicados a partir desses repositórios privados. Se você não planeja atualizar, para evitar a perda de acesso aos recursos avançados, transforme-os em repositórios públicos antes de sua versão de avaliação expirar. Para obter mais informações, consulte "[Configurar visibilidade do repositório](/articles/setting-repository-visibility)".

Fazer downgrade para o {% data variables.product.prodname_free_team %} para organizações também desabilita quaisquer configurações SAML feitas durante o período de avaliação. Ao adquirir o {% data variables.product.prodname_enterprise %} ou o {% data variables.product.prodname_team %}, suas configurações SAML serão habilitadas novamente para os usuários da organização se autenticarem.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
5. Em "{% data variables.product.prodname_ghe_cloud %} Free Trial" (Versão de avaliação grátis do {% data variables.product.prodname_ghe_cloud %}) clique em **Buy Enterprise** (Comprar versão Enterprise) ou **Downgrade to Team** (Fazer downgrade para versão Team). ![Botões comprar versão Enterprise e fazer downgrade para versão Team](/assets/images/help/organizations/finish-trial-buttons.png)
6. Siga as instruções para inserir seu método de pagamento e clique em **Submit** (Enviar).

### Leia mais

- [Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)
