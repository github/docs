---
title: Sobre como usar ações na sua empresa
intro: '{% data variables.product.product_name %} inclui a maioria das ações de autoria de {% data variables.product.prodname_dotcom %} e tem opções para permitir o acesso a outras ações de {% data variables.product.prodname_dotcom_the_website %} e {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
shortTitle: About actions in your enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre ações em {% data variables.product.product_name %}

Os fluxos de trabalho de {% data variables.product.prodname_actions %} podem usar _ações_, que são tarefas individuais que você pode combinar para criar tarefas e personalizar seu fluxo de trabalho. Você pode criar suas próprias ações ou usar e personalizar ações compartilhadas pela comunidade {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.enterprise-no-internet-actions %} You can restrict your developers to using actions that are stored on {% data variables.product.product_location %}, which includes most official {% data variables.product.company_short %}-authored actions, as well as any actions your developers create. Alternatively, to allow your developers to benefit from the full ecosystem of actions built by industry leaders and the open source community, you can configure access to other actions from {% data variables.product.prodname_dotcom_the_website %}.

We recommend allowing automatic access to all actions from {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghes %}However, this does require {% data variables.product.product_name %} to make outbound connections to {% data variables.product.prodname_dotcom_the_website %}. If you don't want to allow these connections, or{% else %}If{% endif %} you want to have greater control over which actions are used on your enterprise, you can manually sync specific actions from {% data variables.product.prodname_dotcom_the_website %}.

## Ações oficiais agrupadas com a sua instância corporativa

{% data reusables.actions.actions-bundled-with-ghes %}

The bundled official actions include the following, among others.
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- Various `actions/setup-` actions

Para ver todas as ações oficiais incluídas na instância da sua empresa, acesse a organização das `ações` na sua instância: <code>https://<em>HOSTNAME</em>/actions</code>.

There is no connection required between {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %} to use these actions.

Cada ação é um repositório na organização de `ações`, e cada repositório de ação inclui as tags necessárias, branches e commit de SHAs que seus fluxos de trabalho podem usar para fazer referência à ação. Para obter informações sobre como atualizar as ações oficiais empacotadas, consulte "[Usar a versão mais recente das ações oficiais empacotadas](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions)".

{% note %}

**Notas:**
- Ao usar ações de configuração (como `actions/setup-LANGUAGE`) em {% data variables.product.product_name %} com executores auto-hospedados, você pode precisar configurar o armazenamento de ferramentas em executores que não possuem acesso à internet. Para obter mais informações, consulte "[Configurar o cache da ferramenta em executores auto-hospedados sem acesso à internet](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)".
- As atualizações para {% data variables.product.product_name %} não a atualização de ações agregadas.

{% endnote %}

## Configurar o acesso a ações no {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.actions.access-actions-on-dotcom %}

A abordagem recomendada é habilitar o acesso automático para todas as ações a partir de {% data variables.product.prodname_dotcom_the_website %}. Você pode fazer isso usando {% data variables.product.prodname_github_connect %} para integrar {% data variables.product.product_name %} com {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Habilitar acesso automático a ações de {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

{% ifversion ghes %}
{% note %}

**Note:** Before you can configure access to actions on {% data variables.product.prodname_dotcom_the_website %}, you must configure {% data variables.product.product_location %} to use {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} para o GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."


{% endnote %}
{% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

Alternatively, if you want stricter control over which actions are allowed in your enterprise, or you do not want to allow outbound connections to {% data variables.product.prodname_dotcom_the_website %}, you can manually download and sync actions onto your enterprise instance using the `actions-sync` tool. Para obter mais informações, consulte "[Sincronizando ações manualmente com o {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)".
