---
title: Использование списков задач в проблемах для отслеживания оповещений сканирования кода
shortTitle: Track alerts in issues
intro: 'Оповещения сканирования кода можно добавлять в проблемы с помощью списков задач. Это упрощает создание плана для процессов разработки, включающих оповещения об исправлении.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can track {% data variables.product.prodname_code_scanning %} alerts in issues using task lists.'
versions:
  feature: code-scanning-task-lists
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
  - Issues
ms.openlocfilehash: a5112bc5982415865a47d752af4e980a2e3d12ea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116840'
---
{% data reusables.code-scanning.beta-alert-tracking-in-issues %}

## {% data variables.product.prodname_code_scanning %} и отслеживание его оповещений в проблемах

{% data reusables.code-scanning.github-issues-integration %}

Для отслеживания оповещения можно также создать новую проблему:
- Используйте оповещение, которое выдает {% data variables.product.prodname_code_scanning %}, чтобы создать новую проблему и автоматически добавить это оповещение в список задач для нее. Дополнительные сведения см. ниже в разделе [Создание проблемы для отслеживания из оповещения, которое выдает {% data variables.product.prodname_code_scanning %}](#creating-a-tracking-issue-from-a-code-scanning-alert).

- Используйте API-интерфейс обычным образом и укажите ссылку для сканирования кода в основном тексте проблемы. Чтобы создать связь для отслеживания, используйте синтаксис списка задач: 
   - `- [ ] <full-URL- to-the-code-scanning-alert>`
   - Например, если добавить в проблему строку `- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17`, то проблема будет отслеживать оповещение сканирования кода с идентификационным номером 17 на вкладке "Безопасность" репозитория `octocat-repo` в организации `octocat-org`.

Вы можете отслеживать одно и то же оповещение, которое выдает {% data variables.product.prodname_code_scanning %}, из нескольких проблем, которые могут относиться к разным репозиториям, а не к тому, где {% data variables.product.prodname_code_scanning %} находит проблему.


Различные области пользовательского интерфейса {% data variables.product.product_name %} содержат визуальные индикаторы того, что {% data variables.product.prodname_code_scanning %} имеет отслеживаемые оповещения в проблемах.

- Страница списка отслеживаемых оповещений сканирования кода в проблемах позволяет быстро увидеть, какие из оповещений еще требуют обработки.

  ![Индикаторы отслеживания на странице оповещений сканирования кода](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- На соответствующей странице оповещения будет также отображаться раздел "Отслеживается в". 

  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Раздел "Отслеживается в" на странице оповещения сканирования кода](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png) {% else %} ![Раздел "Отслеживается в" на странице оповещения сканирования кода](/assets/images/enterprise/3.4/repository/code-scanning-alert-tracked-in-pill.png) {% endif %}

- В проблеме, где ведется отслеживание, {% data variables.product.prodname_dotcom %} отображает значок безопасности в списке задач и во всплывающем окне. 
  
  {% note %}

  Развернутый URL-адрес оповещения в проблеме и всплывающее окно будут видимы только пользователям, которые имеют разрешение на запись в репозитории. Если у них есть только разрешение на чтение или вообще нет разрешений, будет отображаться только простой URL оповещения.

  {% endnote %}
  
  Значок имеет серый цвет, так как оповещение имеет статус "открыто" или "закрыто" в каждой из ветвей. Проблема отслеживает оповещение, поэтому оно не может иметь в ней только состояние "открыто" или "закрыто". Если оповещение в одной ветви будет закрыто, цвет значка не изменится.

  ![Всплывающее окно в проблеме для отслеживания](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

Если вы установите или снимите флажок элемента списка задач для какого-то из отслеживаемых оповещений в проблеме, статус этого оповещения не изменится.

## Создание проблемы для отслеживания из оповещения, которое выдает сканирование кода

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %} {% ifversion fpt or ghes or ghae %} {% data reusables.code-scanning.explore-alert %}
1. При необходимости вы можете использовать поиск по произвольному тексту или раскрывающиеся меню для фильтрации и поиска отслеживаемого оповещения. Дополнительные сведения см. в разделе [Управление оповещениями о сканировании кода для репозитория](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts).
{% endif %}
1. В верхней части страницы справа щелкните **Создать проблему**. 
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Создание проблемы для отслеживания оповещения сканирования кода](/assets/images/help/repository/code-scanning-create-issue-for-alert.png) {% else %} ![Создание проблемы для отслеживания оповещения сканирования кода](/assets/images/enterprise/3.4/repository/code-scanning-create-issue-for-alert.png) {% endif %} {% data variables.product.prodname_dotcom %} автоматически создаст проблему для отслеживания оповещения и добавит оповещение как элемент списка задач.
   {% data variables.product.prodname_dotcom %} заранее заполняет в проблеме следующее:
   - Имя оповещения, которое выдает {% data variables.product.prodname_code_scanning %}, в заголовке проблемы.
   - Элемент списка задач с полным URL-адресом оповещения, которое выдает {% data variables.product.prodname_code_scanning %}, в основном тексте проблемы. 
2. При необходимости заголовок и текст проблемы можно изменять.
   {% warning %}

    **Предупреждение.** Имеет смысл изменить заголовок проблемы, если он раскрывает конфиденциальные сведения. Вы также можете изменить текст проблемы, но не изменяйте элемент списка задач, иначе отслеживать с ее помощью оповещение станет невозможно.
   {% endwarning %}

   ![Новая проблема для отслеживания оповещения сканирования кода](/assets/images/help/repository/code-scanning-new-tracking-issue.png)
3. Щелкните **Отправить новую проблему**.
