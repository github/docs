---
title: Работа со службой поддержки для GitHub Codespaces
intro: 'Советы по получению помощи от службы поддержки по работе с {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Working with support
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
ms.openlocfilehash: a4db589cb5d8de71e6e8c7d109e0156885c33848
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159898'
---
Прежде чем поддержка поможет устранить проблемы с codespaces, необходимо знать постоянное имя codespace и его идентификатор codespaces (идентификатор). Кроме того, служба поддержки может попросить вас предоставить общий доступ к некоторым журналам. Дополнительные сведения см. в разделе [Журналы {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs) и [Сведения о поддержке GitHub](/github/working-with-github-support/about-github-support).

## Имена пространств кода

Каждое пространство кода имеет уникальное имя, представляющее собой сочетание дескриптора {% data variables.product.company_short %}, двух или трех автоматически созданных слов и некоторых случайных символов. Например: `octocat-literate-space-parakeet-mld5`. Два или три автоматически созданных слова также формируют начальное отображаемое имя codespace, в данном случае `literate-space-parakeet`. Вы можете изменить отображаемое имя для codespace, но это не повлияет на постоянное имя. Дополнительные сведения см. в разделе [Переименование пространства кода](/codespaces/customizing-your-codespace/renaming-a-codespace).

Чтобы выяснить имя пространства кода, выполните следующие действия.

- Откройте пространство кода в браузере. Поддомен URL-адреса — это имя пространства кода. Например: `https://octocat-literate-space-parakeet-mld5.github.dev` — URL-адрес для пространства кода `octocat-literate-space-parakeet-mld5`.
- Если вы не можете открыть пространство кода, вы можете получить доступ к имени в {% data variables.product.product_name %} в https://github.com/codespaces. Имя отображается во всплывающем окне при наведении указателя мыши на отображаемое имя codespace в https://github.com/codespaces. 
  ![Имя пространства кода, отображаемое при наведении курсора мыши](/assets/images/help/codespaces/find-codespace-name-github.png)

Имя пространства кода также включено во многие файлы журнала. Например, в журналах пространства кода в качестве значения `friendlyName` в журнале расширения {% data variables.product.prodname_github_codespaces %} после `making GET request for`, а также в журнале консоли браузера после `clientUrl`. Дополнительные сведения см. в статье [Журналы {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs).

## Идентификаторы пространств кода

Каждое пространство кода также имеет идентификатор. Этот параметр не отображается по умолчанию в {% data variables.product.prodname_vscode %}, поэтому вам может потребоваться обновить настройки для расширения {% data variables.product.prodname_github_codespaces %} прежде, чем вы получите доступ к идентификатору.

1. В браузере или на рабочем столе {% data variables.product.prodname_vscode %} на панели действий слева щелкните **Удаленный обозреватель**, чтобы отобразить сведения о пространстве кода.
{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}
1. Если боковая панель содержит раздел "Производительность пространства кода", наведите курсор мыши на идентификатор пространства кода и щелкните значок буфера обмена, чтобы скопировать идентификатор.
1. Если сведения не отображаются, щелкните {% octicon "gear" aria-label="The gear icon" %}, в левом нижнем углу панели действий, чтобы отобразить вкладку "Параметры".
1. Разверните узел **Расширение** и нажмите **{% data variables.product.prodname_github_codespaces %}** , чтобы отобразить параметры для расширения. Затем включите **Показать обозреватель производительности**, чтобы отобразить раздел "Производительность пространства кода" на боковой панели.
  ![Идентификатор и параметры пространства кода, необходимые для отображения сведений о производительности](/assets/images/help/codespaces/find-codespace-id.png)
