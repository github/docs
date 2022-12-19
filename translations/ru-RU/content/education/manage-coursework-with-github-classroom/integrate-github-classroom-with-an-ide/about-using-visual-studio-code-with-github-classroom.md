---
title: Сведения об использовании Visual Studio Code с GitHub Classroom
shortTitle: About using Visual Studio Code
intro: 'Вы можете настроить {% data variables.product.prodname_vscode %} как предпочтительный редактор для назначений в {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
ms.openlocfilehash: fe0e8e0c3194f9c97cc30c80dcec00256824e6ab
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145148747'
---
## Сведения о {% data variables.product.prodname_vscode %}

{% data variables.product.prodname_vscode %} — это простой, но мощный редактор исходного кода, который запускается на рабочем столе и доступен для Windows, macOS и Linux. С помощью [расширения GitHub Classroom для {% data variables.product.prodname_vscode_shortname %}](https://aka.ms/classroom-vscode-ext) учащиеся могут легко просматривать, изменять, отправлять, тестировать свои назначения Classroom и совместно работать над ними. Дополнительные сведения о средах IDE и {% data variables.product.prodname_classroom %} см. в разделе [Интеграция {% data variables.product.prodname_classroom %} со средой IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide).

### Редактор, выбранный учащимся 
Интеграция GitHub Classroom с {% data variables.product.prodname_vscode_shortname %} предоставляет учащимся пакет расширений, который содержит:

1. [Расширение GitHub Classroom](https://aka.ms/classroom-vscode-ext) с пользовательскими абстракциями, которые упрощают для учащихся начало работы.
2. [Расширение Visual Studio Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack), интегрируемое в представление учащихся, что позволяет легко взаимодействовать с помощниками по обучению и одноклассниками для поддержки и совместной работы.
3. [Расширение GitHub Pull Request](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github), которое позволяет учащимся просматривать обратную связь от преподавателей в редакторе. 

### Практическое руководство по запуску назначения в {% data variables.product.prodname_vscode_shortname %}
При создании назначения можно добавить {% data variables.product.prodname_vscode_shortname %} в качестве предпочтительного редактора для назначения. Дополнительные сведения см. в разделе [Интеграция {% data variables.product.prodname_classroom %} с интегрированной средой разработки](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide).

Это будет включать индикатор событий "Открыть в {% data variables.product.prodname_vscode_shortname %}" во всех репозиториях учащихся. Этот индикатор событий отвечает за установку {% data variables.product.prodname_vscode_shortname %}, пакета расширения Classroom и открытие активного назначения одним щелчком мыши.

{% note %}

**Примечание.** Учащийся должен установить Git на своем компьютере, чтобы отправить код из {% data variables.product.prodname_vscode_shortname %} в свой репозиторий. Это не устанавливается автоматически при нажатии **Открыть в {% data variables.product.prodname_vscode_shortname %}** . Учащийся может скачать Git [отсюда](https://git-scm.com/downloads).

{% endnote %}

### Использование пакета расширений GitHub Classroom 
Расширение GitHub Classroom содержит два основных компонента: представление "Аудитории" и представление "Активное назначение". 

Когда учащийся запускает расширение впервые, он автоматически переходит на вкладку обозревателя в {% data variables.product.prodname_vscode_shortname %}, где можно увидеть представление "Активное назначение" вместе с деревом представлений файлов в репозитории. 

![Представление "Активные назначения" в GitHub Classroom](/assets/images/help/classroom/vs-code-active-assignment.png)

Учащийся может передать свои фиксации в последнюю версию удаленного приложения, нажав на кнопку **Изменения синхронизации**, отображаемую при наведении указателя мыши на строку "Активное назначение". Это абстрагирует управление версиями с помощью Git, позволяя инструкторам преподавать основы Git в собственном темпе.
Синхронизация изменений также активирует "Тесты", которые выполняются, если преподаватель настроил автоматическую проверку назначения.

Узел "Группа" в разделе "Активное назначение" будет отображать участников группы, если назначение является групповым проектом. В нем также будут отображаться администраторы репозитория, которые могут помочь, если у учащегося возникли сложности. Для совместной работы над проектом учащийся может начать сеанс Live Share с любым пользователем в узле группы; при этом он сразу предоставит общий доступ ко всему контексту репозитория. Дополнительные сведения о Live Share и совместной работе с этим расширением см. [здесь](https://docs.microsoft.com/en-us/visualstudio/liveshare/).

После выполнения назначения учащийся также может перейти к другим назначениям и аудиториям. Их можно найти на вкладке GitHub.
