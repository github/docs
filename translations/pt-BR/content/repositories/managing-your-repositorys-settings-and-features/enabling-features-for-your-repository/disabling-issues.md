---
title: Desabilitar problemas
intro: 'Se você não aceita contribuições ou relatórios de erros, convém desativar problemas do seu repositório.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/disabling-issues
  - /articles/disabling-issues
  - /github/managing-your-work-on-github/disabling-issues
  - /github/administering-a-repository/managing-repository-settings/disabling-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: a706b1431f4f43c9866fb6ef0f01f6d25d6edc46
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881825'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Em Recursos, desmarque a caixa de seleção **Problemas**.
  ![Caixa de seleção Remover Problemas](/assets/images/help/issues/issues_settings_remove_from_repo.png)

Se você decidir habilitar problemas novamente no futuro, qualquer problema que tenha sido adicionado anteriormente ficará disponível.

{% ifversion fpt or ghec %}

{% tip %}

Entre em contato com {% data variables.contact.contact_support %} caso queira desativar problemas por causa de abuso de estranhos.
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
