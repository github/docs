---
title: Usar rótulos com os executores auto-hospedados
intro: Você pode usar etiquetas para organizar os seus executores auto-hospedados com base em suas características.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Label runners
ms.openlocfilehash: 3b26db5c8b6494ebb63cc3ce9cc9a0109bac4545
ms.sourcegitcommit: 929818065a8545476e4cf8e2cab6517f40345ef0
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163249'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Para obter informações sobre como usar rótulos para encaminhar trabalhos para tipos específicos de executores auto-hospedados, confira "[Como usar executores auto-hospedados em um fluxo de trabalho](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)". {% ifversion target-runner-groups %}Você também pode rotear trabalhos para executores em um grupo específico. Para obter mais informações, confira "[Direcionar executores em um grupo](/actions/using-jobs/choosing-the-runner-for-a-job#targeting-runners-in-a-group)".{% endif %}

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

## Criar etiquetas personalizadas

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %}
 1. Na seção "Etiquetas", clique em {% octicon "gear" aria-label="The Gear icon" %}.
 1. No campo "Localizar ou criar um rótulo", digite o nome do novo rótulo e clique em **Criar rótulo**.
 O rótulo personalizado é criado e atribuído ao executor auto-hospedado. É possível remover as etiquetas personalizadas dos executores auto-hospedados, mas não é possível excluí-las manualmente. {% data reusables.actions.actions-unused-labels %} {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. No campo "Filtrar rótulos", digite o nome do novo rótulo e clique em **Criar rótulo**.
    ![Adição de rótulo do executor](/assets/images/help/settings/actions-add-runner-label.png)
    
O rótulo personalizado é criado e atribuído ao executor auto-hospedado. É possível remover as etiquetas personalizadas dos executores auto-hospedados, mas não é possível excluí-las manualmente. {% data reusables.actions.actions-unused-labels %} {% endif %}

## Atribuir uma etiqueta a um executor auto-hospedado

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. Para atribuir uma etiqueta ao executor auto-hospedado, no campo "Localizar ou criar uma etiqueta", clique na etiqueta. {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Clique em uma etiqueta a ser atribuída ao seu executor auto-hospedado. {% endif %}

## Remover uma etiqueta personalizada de um executor auto-hospedado

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. No campo "Localizar ou criar um rótulo", os rótulos atribuídos são marcados com o ícone {% octicon "check" aria-label="The Check icon" %}. Clique em uma etiqueta marcada para cancelar a atribuição do seu executor auto-hospedado. {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Clique na etiqueta atribuída para removê-la do seu executor auto-hospedado. {% data reusables.actions.actions-unused-labels %} {% endif %}

## Atribuir rótulos programaticamente

É possível atribuir rótulos programaticamente a um executor auto-hospedado após a criação dele ou durante sua configuração inicial.

* Para atribuir rótulos programaticamente a um executor auto-hospedado existente, você deve usar a API REST. Para saber mais, confira a API REST dos "[Executores auto-hospedados](/rest/actions/self-hosted-runners)".
* Para atribuir rótulos programaticamente a um executor auto-hospedado durante a configuração inicial dele, transmita nomes de rótulo ao script `config` usando o parâmetro `labels`.

  {% note %}
  
  **Nota:** não é possível usar o script `config` para atribuir rótulos a um executor auto-hospedado existente.
  
  {% endnote %}

  Por exemplo, o seguinte comando atribui um rótulo `gpu` durante a configuração de um novo executor auto-hospedado:

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu
  ```

  Caso não exista, a etiqueta será criada. Use também essa abordagem para atribuir os rótulos padrão aos executores, como `x64` ou `linux`. Quando as etiquetas-padrão são atribuídas usando o script de configuração, {% data variables.product.prodname_actions %} aceita-as como dadas e não valida que o executor está realmente usando esse sistema operacional ou arquitetura.

  Você pode usar a separação por vírgula para atribuir múltiplas etiquetas. Por exemplo:

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu,x64,linux
  ```

  {% note %}

  ** Observação:** Se você substituir um executor existente, você deverá reatribuir quaisquer etiquetas personalizadas.

  {% endnote %}
