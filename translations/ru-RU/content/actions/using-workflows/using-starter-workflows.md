---
title: Использование начальных рабочих процессов
shortTitle: Use starter workflows
intro: '{% data variables.product.product_name %} предоставляет начальные рабочие процессы для различных языков и инструментов.'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/learn-github-actions/using-starter-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
ms.openlocfilehash: ac901f30b94dbeb65aaa2f513048e793de35a53f
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010044'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о начальных рабочих процессах

{% data variables.product.product_name %} предлагает начальные рабочие процессы для различных языков и инструментов. Когда вы настраиваете рабочие процессы в своем репозитории, {% data variables.product.product_name %} анализирует код в репозитории и рекомендует рабочие процессы CI в зависимости от языка и платформы в репозитории. Например, если вы используете [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} предложит начальный файл рабочего процесса, который устанавливает пакеты Node.js и выполняет тесты.{% ifversion actions-starter-template-ui %} Вы можете выполнять поиск и фильтрацию, чтобы найти соответствующие начальные рабочие процессы.{% endif %}

{% data reusables.actions.starter-workflow-categories %}

Кроме того, можно создать свой собственный начальный рабочий процесс, чтобы поделиться им в своей организации. Эти начальные рабочие процессы будут отображаться вместе с начальными рабочими процессами, предоставленными {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Создание рабочих процессов начального уровня для вашей организации](/actions/learn-github-actions/creating-starter-workflows-for-your-organization).

## Использование начальных рабочих процессов

Любой пользователь с разрешением на запись в репозиторий может настроить начальные рабочие процессы {% data variables.product.prodname_actions %} для CI/CD или другой автоматизации.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Если в вашем репозитории уже используется рабочий процесс, нажмите кнопку **Создать рабочий процесс**.
1. На странице "{% ifversion actions-starter-template-ui %}Выбрать рабочий процесс{% else %}Выбрать шаблон рабочего процесса{% endif %}" отображается выбор рекомендуемых начальных рабочих процессов. Найдите начальный рабочий процесс, который необходимо использовать, а затем нажмите {% ifversion actions-starter-template-ui %}**Настроить**{% else %}**Настроить этот рабочий процесс**{% endif %}.{% ifversion actions-starter-template-ui %} Чтобы найти нужный начальный рабочий процесс, выполните поиск по ключевым словам или с помощью фильтру по категориям.{% endif %}

   {% ifversion actions-starter-template-ui %}![Настроить этот рабочий процесс](/assets/images/help/settings/actions-create-starter-workflow-updated-ui.png){% else %}![Настроить это рабочий процесс](/assets/images/help/settings/actions-create-starter-workflow.png){% endif %}
1. Если начальный рабочий процесс содержит комментарии, подробные инструкции по настройке, выполните следующие действия. Многие начальные рабочие процессы имеют соответствующие руководства. Дополнительные сведения см. в статье [{% data variables.product.prodname_actions %} Руководства](/actions/guides).
1. В некоторых начальных рабочих процессах используются секреты. Например, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. Если начальный рабочий процесс использует секрет, сохраните значение, описанное в имени секрета в качестве секрета в своем репозитории. Дополнительные сведения см. в статье [Зашифрованные секреты](/actions/reference/encrypted-secrets).
1. При необходимости внесите дополнительные изменения. Например, возможно, при выполнении рабочего процесса потребуется изменить значение `on`.
1. Нажмите кнопку **Начать фиксацию**.
1. Напишите сообщение фиксации и решите, следует ли фиксировать непосредственно в ветви по умолчанию или открывать запрос на вытягивание.

## Дополнительные материалы

- [Сведения о непрерывной интеграции](/articles/about-continuous-integration)
- "[Управление запусками рабочих процессов](/actions/managing-workflow-runs)"
- "[Сведения о мониторинге и устранении неполадок](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"
- "[Ознакомьтесь с {% data variables.product.prodname_actions %}](/actions/learn-github-actions)". {% ifversion fpt or ghec %}
- "[Управление выставлением счетов для {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)" {% endif %}
