---
title: Краткое руководство по GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} помогает в работе, предлагая встроенные предложения по мере написания кода.'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
ms.openlocfilehash: d2131a506990a959f803b13353b794a9dd347174
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193475'
---
## Введение

{% data variables.product.prodname_copilot %} — помощник по написанию кода на базе ИИ. {% data variables.product.prodname_copilot %} может предлагать целые строки и функции прямо в редакторе.

В этом руководстве показано, как зарегистрироваться в {% data variables.product.prodname_copilot %} с помощью личной учетной записи, установить расширение {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vscode %} и получить первое предложение. Дополнительные сведения о {% data variables.product.prodname_copilot %} см. в разделе [Сведения о {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot). Дополнительные сведения об использовании {% data variables.product.prodname_copilot %} в различных средах см. в разделе [Начало работы](/copilot/getting-started-with-github-copilot).

## Предварительные требования

{% data reusables.copilot.copilot-prerequisites %}
- Чтобы использовать {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vscode %}, необходимо установить {% data variables.product.prodname_vscode %}. Дополнительные сведения см. в документации по [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/).

## Регистрация в {% data variables.product.prodname_copilot %}

Прежде чем приступить к использованию {% data variables.product.prodname_copilot %}, необходимо настроить бесплатную пробную версию или подписку для личной учетной записи. 

{% note %}

**Примечание:** Если вы являетесь членом организации, принадлежащей учетной записи {% data variables.product.prodname_ghe_cloud %} с подпиской на {% data variables.product.prodname_copilot %}, и вам назначено {% data variables.product.prodname_copilot %} место вашей организации, можно перейти к [установке расширения {% data variables.product.prodname_copilot %} для {% data variables.product.prodname_vscode %}](/copilot/quickstart#installing-the-github-copilot-extension-for-visual-studio-code).

{% endnote %}

{% data reusables.copilot.signup-procedure %}

## Установка расширения {% data variables.product.prodname_copilot %} для {% data variables.product.prodname_vscode %}

Чтобы использовать {% data variables.product.prodname_copilot %}, сначала установите {% data variables.product.prodname_vscode %}.

1. В {% data variables.product.prodname_vscode %} Marketplace перейдите на страницу [Расширение {% data variables.product.prodname_copilot %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) и щелкните **Установить**.
   ![Установка расширения {% data variables.product.prodname_copilot %} {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. Появится всплывающее окно с просьбой открыть {% data variables.product.prodname_vscode %}. Щелкните **Открыть {% data variables.product.prodname_vscode %}** .
1. На вкладке "Расширение: {% data variables.product.prodname_copilot %}" в {% data variables.product.prodname_vscode %} щелкните **Установить**.
   ![Кнопка установки в {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. Если вы еще не авторизовали {% data variables.product.prodname_vscode %} в учетной записи {% data variables.product.prodname_dotcom %}, появится запрос на вход в {% data variables.product.prodname_dotcom %} в {% data variables.product.prodname_vscode %}.
   - Если вы уже авторизовали {% data variables.product.prodname_vscode %} для учетной записи на {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} будет авторизован автоматически.
   ![Снимок экрана: экран авторизации {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. В браузере {% data variables.product.prodname_dotcom %} запросит необходимые разрешения для {% data variables.product.prodname_copilot %}. Чтобы одобрить эти разрешения, щелкните **Авторизовать {% data variables.product.prodname_vscode %}** . 
1. В {% data variables.product.prodname_vscode %} в диалоговом окне "{% data variables.product.prodname_vscode %}" для подтверждения подлинности щелкните **Открыть**. 

## Получение первого предложения

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Следующие примеры приводятся на JavaScript, но будут работать аналогичным образом и для других языков.

1. Откройте {% data variables.product.prodname_vscode %}.
{% data reusables.copilot.create-js-file %} {% data reusables.copilot.type-function-header %} {% data variables.product.prodname_copilot %} автоматически предложит текст целой функции, выделенный серым, как показано ниже. Точное предложение может отличаться.
![Первое предложение {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## Next Steps

Вы успешно установили {% data variables.product.prodname_copilot %} и получили первое предложение, но это только начало. Далее приведены некоторые полезные ресурсы для продолжения работы с {% data variables.product.prodname_copilot %}.

- [Начало работы](/copilot/getting-started-with-github-copilot). Вы узнали, как получить первое предложение в {% data variables.product.prodname_vscode %}. В этих руководствах объясняется, как настраивать и использовать различные функции {% data variables.product.prodname_copilot %} во всех поддерживаемых средах.
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/). Ознакомьтесь с практическими примерами того, как {% data variables.product.prodname_copilot %} помогает в работе.
- [Настройка {% data variables.product.prodname_copilot %}](/copilot/configuring-github-copilot). В этих руководствах приводятся подробные сведения о настройке {% data variables.product.prodname_copilot %} для ваших потребностей.


## Дополнительные сведения

- [Сведения о {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)
