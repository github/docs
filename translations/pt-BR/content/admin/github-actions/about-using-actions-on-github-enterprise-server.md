---
title: Sobre como usar ações no GitHub Enterprise Server
intro: '{% data variables.product.prodname_ghe_server %} inclui a maioria das ações de autoria de {% data variables.product.prodname_dotcom %} e tem opções para permitir o acesso a outras ações de {% data variables.product.prodname_dotcom_the_website %} e {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
versions:
  enterprise-server: '>=2.22'
topics:
  - enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Os fluxos de trabalho de {% data variables.product.prodname_actions %} podem usar _ações_, que são tarefas individuais que você pode combinar para criar tarefas e personalizar seu fluxo de trabalho. Você pode criar suas próprias ações ou usar e personalizar ações compartilhadas pela comunidade {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.enterprise-no-internet-actions %}

### Ações oficiais agrupadas com {% data variables.product.prodname_ghe_server %}

A maioria das ações oficiais de autoria de {% data variables.product.prodname_dotcom %} são automaticamente agrupadas com {% data variables.product.prodname_ghe_server %} e são capturadas em um momento a partir do {% data variables.product.prodname_marketplace %}. Quando sua instância do {% data variables.product.prodname_ghe_server %} é atualizada, as ações oficiais agrupadas também são atualizadas.

As ações oficiais empacotadas incluem `ações/checkout`, `actions/upload-artefact`, `actions/download-artefact`, `actions/labeler`, e várias ações de `actions/setup-`, entre outras. Para ver todas as ações oficiais incluídas na instância da sua empresa, acesse a organização das `ações` na sua instância: <code>https://<em>HOSTNAME</em>/actions</code>.

Cada ação é um repositório na organização de `ações`, e cada repositório de ação inclui as tags necessárias, branches e commit de SHAs que seus fluxos de trabalho podem usar para fazer referência à ação.

{% note %}

**Observação:** Ao usar ações de configuração (como `actions/setup-LANGUAGE`) em {% data variables.product.prodname_ghe_server %} com executores auto-hospedados, você pode precisar configurar o cache de ferramentas em executores que não possuem acesso à Internet. Para obter mais informações, consulte "[Configurar o cache da ferramenta em executores auto-hospedados sem acesso à internet](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)".

{% endnote %}

### Configurar o acesso a ações no {% data variables.product.prodname_dotcom_the_website %}

Se os usuários na instância corporativa precisarem de acesso a outras ações de {% data variables.product.prodname_dotcom_the_website %} ou {% data variables.product.prodname_marketplace %}, há algumas opções de configuração.

A abordagem recomendada é habilitar o acesso automático para todas as ações a partir de {% data variables.product.prodname_dotcom_the_website %}. Você pode fazer isso usando {% data variables.product.prodname_github_connect %} para integrar {% data variables.product.prodname_ghe_server %} com {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Habilitar acesso automático a ações de {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)". {% data reusables.actions.enterprise-limit-actions-use %}

Como alternativa, se você quiser ter um controle mais rigoroso sobre quais as ações que são permitidas na sua empresa, você pode fazer o download e sincronizar manualmente as ações na instância da sua empresa usando a ferramenta de `actions-sync`. Para obter mais informações, consulte "[Sincronizando ações manualmente com o {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)".
