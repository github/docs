---
title: Usar etiquetas com executores auto-hospedados
intro: Você pode usar etiquetas para organizar os seus executores auto-hospedados com base em suas características.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Executores de etiqueta
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

For information on how to use labels to route jobs to specific types of self-hosted runners, see "[Using self-hosted runners in a workflow](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)."

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

## Criar etiquetas personalizadas

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
 {% data reusables.actions.settings-sidebar-actions-runner-selection %}
 1. Na seção "Etiquetas", clique em {% octicon "gear" aria-label="The Gear icon" %}.
 1. No campo "Encontrar ou criar uma etiqueta", digite o nome da sua nova etiqueta e clique em **Criar nova etiqueta**. O rótulo personalizado é criado e atribuído ao executor auto-hospedado. É possível remover as etiquetas personalizadas dos executores auto-hospedados, mas não é possível excluí-las manualmente. {% data reusables.actions.actions-unused-labels %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.self-hosted-runner-list %}
{% data reusables.actions.self-hosted-runner-list-group %}
{% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. No campo "Filtrar etiquetas", digite o nome da sua nova etiqueta e clique em **Criar nova etiqueta**. ![Adicionar etiqueta do executor](/assets/images/help/settings/actions-add-runner-label.png)

O rótulo personalizado é criado e atribuído ao executor auto-hospedado. É possível remover as etiquetas personalizadas dos executores auto-hospedados, mas não é possível excluí-las manualmente. {% data reusables.actions.actions-unused-labels %}
{% endif %}

## Atribuir uma etiqueta a um executor auto-hospedado

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.runner-label-settings %}
  1. Para atribuir uma etiqueta ao executor auto-hospedado, no campo "Localizar ou criar uma etiqueta", clique na etiqueta.
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.self-hosted-runner-list %}
{% data reusables.actions.self-hosted-runner-list-group %}
{% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Clique em uma etiqueta a ser atribuída ao seu executor auto-hospedado.
{% endif %}

## Remover uma etiqueta personalizada de um executor auto-hospedado

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.runner-label-settings %}
  1. No campo "Encontre ou crie uma etiqueta", as etiquetas atribuídas são marcadas com a
Ícone de {% octicon "check" aria-label="The Check icon" %}. Clique em uma etiqueta marcada para cancelar a atribuição do seu executor auto-hospedado.
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.self-hosted-runner-list %}
{% data reusables.actions.self-hosted-runner-list-group %}
{% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Clique na etiqueta atribuída para removê-la do seu executor auto-hospedado. {% data reusables.actions.actions-unused-labels %}
{% endif %}

## Usar o script de configuração para criar e atribuir rótulos

You can use the configuration script on the self-hosted runner to create and assign custom labels. For example, this command assigns a label named `gpu` to the self-hosted runner.

```shell
./config.sh --labels gpu
```

The label is created if it does not already exist. You can also use this approach to assign the default labels to runners, such as `x64` or `linux`. When default labels are assigned using the configuration script, {% data variables.product.prodname_actions %} accepts them as given and does not validate that the runner is actually using that operating system or architecture.

You can use comma separation to assign multiple labels. Por exemplo:

```shell
./config.sh --labels gpu,x64,linux
```

{% note %}

** Note:** If you replace an existing runner, then you must reassign any custom labels.

{% endnote %}
