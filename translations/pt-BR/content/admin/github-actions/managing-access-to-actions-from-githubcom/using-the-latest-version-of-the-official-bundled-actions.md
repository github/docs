---
title: Usar a versão mais recente das ações agrupadas oficialmente
intro: 'Você pode atualizar as ações que estão empacotadas com a sua empresa ou usar ações diretamente a partir de {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '>=2.22'
  github-ae: next
topics:
  - Enterprise
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

A instância da sua empresa inclui uma série de ações integradas que podem ser usadas nos seus fluxos de trabalho. Para obter mais informações sobre as ações agrupadas, consulte "[Ações oficiais agrupadas com a sua instância corporativa](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)".

Essas ações empacotadas são um instantâneo no momento das ações oficiais encontradas em https://github.com/actions. Portanto, pode haver versões mais recentes dessas ações disponíveis. Você pode usar a ferramenta de `actions-sync` para atualizar essas ações ou você pode configurar {% data variables.product.prodname_github_connect %} para permitir o acesso às últimas ações em {% data variables.product.prodname_dotcom_the_website %}. Estas opções são descritas nas seguintes seções.

### Usar `actions-sync` para atualizar as ações empacotadas

Para atualizar as ações agrupadas, você pode usar a ferramenta `actions-sync` para atualizar o instantâneo. Para obter mais informações sobre como usar `actions-sync`, consulte "[Sincronizar as ações manualmente de {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom)".

### Usar {% data variables.product.prodname_github_connect %} para acessar as últimas ações

Você pode usar {% data variables.product.prodname_github_connect %} para permitir que {% data variables.product.product_name %} use ações a partir do {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Habilitar o acesso automático às ações de {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

Uma vez configurado {% data variables.product.prodname_github_connect %}, você poderá usar a última versão de uma ação, excluindo seu repositório local nas `ações` da organização na sua instância. Por exemplo, se a instância corporativa estiver usando a ação `actions/checkout@v1`, e você precisar usar `actions/checkout@v2` que não estão disponíveis na sua instância corporativa, por exemplo, siga as etapas a seguir para poder usar a última ação de `checkout` de {% data variables.product.prodname_dotcom_the_website %}:

1. Por padrão, os administradores do site não são proprietários da organização de ações agrupadas. Para obter o acesso necessário para excluir o repositório </code>checkout`, use o comando<code>ghe-org-admin-promote` para promover um usuário a proprietário da organização das `ações` empacotadas. Para obter mais informações, consulte "[Acessar o shell administrativa (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" e "[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)". Por exemplo:

   ```shell
   $ ghe-org-admin-promote -u octocat -o actions
    Do you want to give organization admin privileges for actions to octocat? (y/N) y
    Making octocat an admin of actions
     --> Adding octocat as an admin of actions
     --> octocat is now an admin of the actions organization
     --> Done.
   ```
1. Na sua instância {% data variables.product.product_name %}, exclua o repositório `checkout` dentro da organização de `ações`. Para obter informações sobre como excluir um repositório, consulte "[Excluir um repositório ](/github/administering-a-repository/deleting-a-repository)".
1. É recomendável que você deixe as `ações` da organização uma vez que não necessite mais de acesso administrativo. Para obter mais informações, consulte "[Remover-se de uma organização ](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-an-organization)".
1. Configure o YAML do seu fluxo de trabalho para usar `ações/checkout@v2`.
1. Cada vez que o seu fluxo de trabalho é executado, o executor usará a versão `v2` de `actions/checkout` de {% data variables.product.prodname_dotcom_the_website %}.
