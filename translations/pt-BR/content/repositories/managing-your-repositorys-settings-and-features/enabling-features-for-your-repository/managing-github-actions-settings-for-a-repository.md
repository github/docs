---
title: Managing GitHub Actions settings for a repository
intro: 'You can disable or configure {% data variables.product.prodname_actions %} for a specific repository.'
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Manage GitHub Actions settings
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre as permissões do {% data variables.product.prodname_actions %} para o seu repositório

{% data reusables.github-actions.disabling-github-actions %} Para mais informações sobre {% data variables.product.prodname_actions %}, consulte "[Sobre {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

É possível habilitar o {% data variables.product.prodname_actions %} para seu repositório. {% data reusables.github-actions.enabled-actions-description %} Você pode desabilitar {% data variables.product.prodname_actions %} para o seu repositório completamente. {% data reusables.github-actions.disabled-actions-description %}

Como alternativa, você pode habilitar o {% data variables.product.prodname_actions %} em seu repositório, mas limitar as ações que um fluxo de trabalho pode ser executado. {% data reusables.github-actions.enabled-local-github-actions %}

{% ifversion ghes < 3.0 %}

## Gerenciando as permissões do {% data variables.product.prodname_actions %} para o seu repositório

{% note %}

**Nota:** Talvez você não seja capaz de gerenciar essas configurações se sua organização tem uma política de substituição ou é gerenciada por uma conta corporativa que tem uma política de substituição. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" or {% ifversion fpt %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% elsif ghes %}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. Em "Permissões do Actions", selecione uma opção. ![Habilitar, desabilitar ou limitar ações para este repositório](/assets/images/help/repository/enable-repo-actions.png)

{% endif %}

{% ifversion fpt or ghes > 2.22 %}

## Gerenciando as permissões do {% data variables.product.prodname_actions %} para o seu repositório

É possível desabilitar todos os fluxos de trabalho para um repositório ou definir uma política que configura quais ações podem ser usadas em um repositório.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Nota:** Talvez você não seja capaz de gerenciar essas configurações se sua organização tem uma política de substituição ou é gerenciada por uma conta corporativa que tem uma política de substituição. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" or {% ifversion fpt %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% elsif ghes %}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."

{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Em **Permissões de ações**, selecione uma opção. ![Definir política de ações para esta organização](/assets/images/help/repository/actions-policy.png)
1. Clique em **Salvar**.

## Permitir a execução de ações específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Em **Permissões de ações**, selecione **Permitir ações específicas** e adicione as suas ações necessárias à lista. ![Adicionar ações para permitir lista](/assets/images/help/repository/actions-policy-allow-list.png)
2. Clique em **Salvar**.
{% endif %}

{% ifversion fpt %}
## Configurar a aprovação necessária para fluxos de trabalho de bifurcações públicas

{% data reusables.actions.workflow-run-approve-public-fork %} Você pode configurar este comportamento para um repositório usando o procedimento abaixo. A modificação desta configuração substitui a configuração definida no nível da organização ou empresa.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

{% ifversion fpt or ghes > 2.22 %}
## Habilitar fluxos de trabalho para bifurcações privadas do repositório

{% data reusables.github-actions.private-repository-forks-overview %}

### Configurar a política de bifurcação privada para um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
## Definir as permissões do `GITHUB_TOKEN` para o seu repositório

{% data reusables.github-actions.workflow-permissions-intro %}

As permissões padrão também podem ser configuradas nas configurações da organização. Se o padrão mais restrito foi selecionado nas configurações da organização, a mesma opção será selecionada automaticamente nas configurações do repositório e a opção permissiva estará desabilitada.

{% data reusables.github-actions.workflow-permissions-modifying %}

### Configurar as permissões padrão do `GITHUB_TOKEN`

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Em **permissões do fluxo de trabalho**, escolha se você quer que o `GITHUB_TOKEN` tenha acesso de leitura e gravação para todos os escopos, ou apenas acesso de leitura para o escopo do </code>conteúdo.
<img src="/assets/images/help/settings/actions-workflow-permissions-repository.png" alt="Definir permissões do GITHUB_TOKEN para este repositório" /></p></li>
<li><p spaces-before="0">Clique em <strong x-id="1">Salvar</strong> para aplicar as configurações.
</p>

<p spaces-before="0">{% endif %}</p></li>
</ol>

<p spaces-before="0">{% ifversion fpt or ghes &#062; 2.22 or ghae %}</p>

<h2 spaces-before="0">Configuring the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your repository</h2>

<p spaces-before="0">Você pode configurar o período de retenção para artefatos e registros de {% data variables.product.prodname_actions %} no seu repositório.</p>

<p spaces-before="0">{% data reusables.actions.about-artifact-log-retention %}</p>

<p spaces-before="0">Você também pode definir um período de retenção personalizado para um artefato específico criado por um fluxo de trabalho. Para obter mais informações, consulte "<a href="/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact">Definir o período de retenção para um artefato</a>".</p>

<h2 spaces-before="0">Definir o período de retenção para um repositório</h2>

<p spaces-before="0">{% data reusables.repositories.navigate-to-repo %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.repositories.sidebar-settings %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.repositories.settings-sidebar-actions %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% endif %}</p>
