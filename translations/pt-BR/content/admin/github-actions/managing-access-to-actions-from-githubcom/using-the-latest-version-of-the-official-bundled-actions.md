---
title: Usar a versão mais recente das ações agrupadas oficialmente
intro: 'Você pode atualizar as ações que estão empacotadas com a sua empresa ou usar ações diretamente a partir de {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: Use as últimas ações empacotadas
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

A instância da sua empresa inclui uma série de ações integradas que podem ser usadas nos seus fluxos de trabalho. Para obter mais informações sobre as ações agrupadas, consulte "[Ações oficiais agrupadas com a sua instância corporativa](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)".

Essas ações empacotadas são um instantâneo no momento das ações oficiais encontradas em https://github.com/actions. Portanto, pode haver versões mais recentes dessas ações disponíveis. Você pode usar a ferramenta de `actions-sync` para atualizar essas ações ou você pode configurar {% data variables.product.prodname_github_connect %} para permitir o acesso às últimas ações em {% data variables.product.prodname_dotcom_the_website %}. Estas opções são descritas nas seguintes seções.

## Usar `actions-sync` para atualizar as ações empacotadas

Para atualizar as ações agrupadas, você pode usar a ferramenta `actions-sync` para atualizar o instantâneo. Para obter mais informações sobre como usar `actions-sync`, consulte "[Sincronizar as ações manualmente de {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom)".

## Usar {% data variables.product.prodname_github_connect %} para acessar as últimas ações

Você pode usar {% data variables.product.prodname_github_connect %} para permitir que {% data variables.product.product_name %} use ações a partir do {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Habilitar o acesso automático às ações de {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

Uma vez configurado {% data variables.product.prodname_github_connect %}, você poderá usar a última versão de uma ação, excluindo seu repositório local nas `ações` da organização na sua instância. Por exemplo, se sua instância corporativa estiver usando `v1` da ação `ações/checkout`, e você precisa usar `{% data reusables.actions.action-checkout %}`, que não está disponível na instância corporativa, execute as seguintes etapas para poder usar a última ação `checkout` de {% data variables.product.prodname_dotcom_the_website %}:

1. Em uma conta de proprietário corporativo em {% data variables.product.product_name %}, acesse o repositório que você deseja excluir da organização *ações* (neste exemplo `checkout`).
1. Por padrão, os administradores do site não são proprietários da organização de *ações* agrupadas. Para obter o acesso necessário para excluir o repositório de `checkout`, você deve usar as ferramentas de administrador do site. Clique em {% octicon "rocket" aria-label="The rocket ship" %} no canto superior direito de qualquer página do repositório. ![Ícone de foguete para acessar as configurações de administrador do site](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. Clique em {% octicon "shield-lock" %} **Segurança** para ver a visão geral de segurança do repositório. ![Cabeçalho de segurança do repositório](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. Em "Privilégio de acesso", clique em **Desbloquear**. ![Botão Desbloquear](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. Em **Motivo**, digite um motivo para desbloquear o repositório e depois clique em **Desbloquear**. ![Diálogo de confirmação](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. Agora que o repositório está desbloqueado, você pode sair das páginas de administrador do site e excluir o repositório dentro das `ações da organização`. Na parte superior da página, clique no nome do repositório, neste exemplo **check-out**, para retornar à página de resumo. ![Link para nome do repositório](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. Em "Informações do repositório", clique em **Ver código** para sair das páginas de administração do site e exibir o repositório `check-out`.
1. Exclua o repositório do `check-out` dentro organização das `ações`. Para obter informações sobre como excluir um repositório, consulte "[Excluir um repositório](/github/administering-a-repository/deleting-a-repository)". ![Ver link de código](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. Configure o YAML do seu fluxo de trabalho para usar `{% data reusables.actions.action-checkout %}`.
1. Cada vez que o seu fluxo de trabalho é executado, o executor usará a versão especificada `ações/checkout` de {% data variables.product.prodname_dotcom_the_website %}.

   {% ifversion ghes > 3.2 or ghae-issue-4815 %}
   {% note %}

   **Nota:** A primeira vez que a ação `checkout` é usada a partir de {% data variables.product.prodname_dotcom_the_website %}, o namespace `actions/check-` é automaticamente desativado em {% data variables.product.product_location %}. Se você quiser reverter para uma cópia local da ação, primeiro você precisará remover o namespace da desativação. Para obter mais informações, consulte "[Desativação automática de namespaces para ações acessadas em {% data variables.product.prodname_dotcom_the_website%}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)".

   {% endnote %}
   {% endif %}
