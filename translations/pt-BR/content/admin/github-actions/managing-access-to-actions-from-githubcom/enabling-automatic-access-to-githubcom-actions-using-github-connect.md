---
title: Habilitar o acesso automático às ações do GitHub.com usando o GitHub Connect
intro: 'Para permitir que {% data variables.product.prodname_actions %} na sua empresa use ações a partir de {% data variables.product.prodname_dotcom_the_website %}, você pode conectar a sua instância corporativa a {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Site administrators for {% data variables.product.product_name %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable access to all {% data variables.product.prodname_dotcom_the_website %} actions.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
  - /admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
shortTitle: Usar GitHub Connect para ações
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre o acesso automático a ações de {% data variables.product.prodname_dotcom_the_website %}

Por padrão, os fluxos de trabalho {% data variables.product.prodname_actions %} em {% data variables.product.product_name %} não podem usar ações diretamente de {% data variables.product.prodname_dotcom_the_website %} ou [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

Para tornar todas as ações de {% data variables.product.prodname_dotcom_the_website %} disponíveis na sua instância corporativa, você pode usar {% data variables.product.prodname_github_connect %} para integrar {% data variables.product.product_name %} a {% data variables.product.prodname_ghe_cloud %}. Para saber outras formas de acessar ações a partir da {% data variables.product.prodname_dotcom_the_website %}, consulte "[Sobre o uso de ações na sua empresa](/admin/github-actions/about-using-actions-in-your-enterprise)".

Para usar ações de {% data variables.product.prodname_dotcom_the_website %}, seus executores auto-hospedados devem conseguir fazer o download das ações públicas de `api.github.com`.

## Habilitar o acesso automático a todas as ações de {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.actions.enterprise-github-connect-warning %}

Antes de habilitar o acesso a todas as ações de {% data variables.product.prodname_dotcom_the_website %} na sua instância corporativa, você deve conectar sua empresa a {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Conectando sua empresa a {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

{% data reusables.enterprise-accounts.access-enterprise %}
{%- ifversion ghes < 3.1 %}
{% data reusables.enterprise-accounts.settings-tab %}
{%- endif %}
{% data reusables.enterprise-accounts.github-connect-tab %}
{%- ifversion ghes > 3.0 or ghae %}
1. Em "Os usuários podem usar as ações do GitHub.com em execuções do fluxo de trabalho", use o menu suspenso e selecione **Habilitado**. ![Menu suspenso para ações do GitHub.com em execuções do fluxos de trabalho](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down-ae.png)
{%- else %}
1. Em "Servidor pode usar ações do GitHub.com em execuções de fluxos de trabalho", use o menu suspenso e selecione **Habilitado**. ![Menu suspenso para ações do GitHub.com em execuções do fluxos de trabalho](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)
{%- endif %}
1. {% data reusables.actions.enterprise-limit-actions-use %}

{% ifversion ghes > 3.2 or ghae-issue-4815 %}

## Retirada automática de namespaces para ações acessadas em {% data variables.product.prodname_dotcom_the_website %}

Ao habilitar {% data variables.product.prodname_github_connect %}, os usuários não verão nenhuma alteração no comportamento para fluxos de trabalho existentes porque {% data variables.product.prodname_actions %} procura {% data variables.product.product_location %} para cada ação antes de voltar a {% data variables.product.prodname_dotcom_the_website%}. Isso garante que todas as versões personalizadas de ações que a sua empresa criou sejam usadas em preferência para suas contrapartes em {% data variables.product.prodname_dotcom_the_website%}.

A desativação automática de namespaces para ações acessadas em {% data variables.product.prodname_dotcom_the_website %} bloqueia o potencial de um ataque de um intermediário por um usuário malicioso com acesso a {% data variables.product.product_location %}. Quando uma ação em {% data variables.product.prodname_dotcom_the_website %} é usada pela primeira vez, esse namespace fica desativado em {% data variables.product.product_location %}. Isso bloqueia qualquer usuário que criar uma organização e repositório na sua empresa que corresponda a essa organização e nome do repositório em {% data variables.product.prodname_dotcom_the_website %}. Isso garante que, quando um fluxo de trabalho é executado, a ação pretendida é sempre executada.

Depois de usar uma ação de {% data variables.product.prodname_dotcom_the_website %}, se você deseja criar uma ação em {% data variables.product.product_location %} com o mesmo nome, primeiro você precisa tornar o namespace para a organização e repositório disponíveis.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Na barra lateral esquerda, em **administrador do site** clique em **namespaces desativados**.
3. Localize o namespace que você quer usar em {% data variables.product.product_location %} e clique em **Cancelar desativação**. ![Cancelar desativação do namespace](/assets/images/enterprise/site-admin-settings/unretire-namespace.png)
4. Acesse a organização relevante e crie um novo repositório.

   {% tip %}

   **Dica:** quando você cancelar a desativação de um namespace, sempre crie o novo repositório com esse nome o mais rápido possível. Se um fluxo de trabalho chamar a ação associada em {% data variables.product.prodname_dotcom_the_website %} antes de criar o repositório local, o namespace será desativado novamente. Para ações usadas em fluxos de trabalho frequentemente, você pode considerar que um namespace foi desativado novamente antes de ter tempo para criar o repositório local. Neste caso, você pode desabilitar temporariamente os fluxos de trabalho relevantes até criar o novo repositório.

   {% endtip %}

{% endif %}
