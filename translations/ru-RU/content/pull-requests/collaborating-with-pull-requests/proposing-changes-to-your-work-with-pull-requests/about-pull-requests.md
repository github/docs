---
title: Сведения о запросах на вытягивание
intro: 'Запросы на вытягивание позволяют другим пользователям сообщать об изменениях, отправленных в ветвь в репозитории на {% data variables.product.product_name %}. После открытия запроса на вытягивание можно обсудить и просмотреть потенциальные изменения с участниками совместной работы и добавить дальнейшие фиксации, прежде чем изменения будут объединены в базовую ветвь.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 6912f0ca38cc522d5698a9e8b1a1042f445b999e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111115'
---
## Сведения о запросах на вытягивание

{% note %}

**Примечание.** При работе с запросами на вытягивание помните следующее:
* Если вы работаете в [модели общего репозитория](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models), рекомендуется использовать для запроса на вытягивание тематическую ветвь. При том, что запросы на вытягивание можно отправлять из любой ветви или фиксации, тематическая ветвь позволяет отправлять дальнейшие фиксации, если вам нужно обновить предлагаемые изменения.
* При принудительной отправке фиксаций в запрос на вытягивание будьте предельно внимательны. Принудительная отправка меняет журнал репозитория и может вызвать повреждение запроса на вытягивание. Если другие участники совместной работы перед принудительной отправкой создают ветви, то принудительная отправка может перезаписать фиксации, на которых участники строят свою работу.

{% endnote %}

Запросы на вытягивание можно создавать в {% data variables.product.prodname_dotcom_the_website %}, с помощью {% data variables.product.prodname_desktop %}, в {% data variables.product.prodname_github_codespaces %}, в {% data variables.product.prodname_mobile %} и при использовании интерфейса командной строки GitHub.

После инициализации запроса на вытягивание вы увидите обзорную страницу с общими сведениями о различиях между вашей ветвью (ветвью сравнения) и базовой ветвью репозитория. Здесь можно добавить сводку предлагаемых изменений, просмотреть изменения, внесенные фиксациями, добавить метки, вехи и ответственных, а также отметить (@mention) отдельных участников или команд. Дополнительные сведения см. в разделе [Создание запроса на вытягивание](/articles/creating-a-pull-request).

После создания запроса на вытягивание вы сможете отправить фиксации из тематической ветви, чтобы добавить их в существующий запрос на вытягивание. Фиксации отображаются в запросе на вытягивание в хронологическом порядке, а изменения показываются на вкладке "Измененные файлы".

Другие участники совместной работы могут просматривать предложенные изменения, добавлять комментарии к проверке, участвовать в обсуждении запроса на вытягивание и даже добавлять фиксации в запрос на вытягивание. {% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

{% ifversion fpt or ghec %} Сведения о текущем состоянии развертывания ветви и прошлых действиях развертывания можно просмотреть на вкладке "Беседа". Дополнительные сведения см. в разделе [Просмотр действий развертывания для репозитория](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository).
{% endif %}

Если предложенные изменения вас устраивают, запрос на вытягивание можно объединить. Если вы работаете в модели общего репозитория, вы создаете запрос на вытягивание, а затем вы или другой пользователь объединяете изменения из ветви компонента в базовую ветвь, указанную в запросе на вытягивание. Дополнительные сведения см. в разделе [Слияние запроса на вытягивание](/articles/merging-a-pull-request).

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**Советы**
- Для свертывания или развертывания всех устаревших комментариев к проверке в запросе на вытягивание, щелкните **Показать устаревшие** или **Скрыть устаревшие**, нажав и удерживая клавишу <span class="platform-mac"><kbd>Option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> . Другие сочетания клавиш см. в статье [Сочетания клавиш](/articles/keyboard-shortcuts).
- При слиянии запроса на вытягивание фиксации можно сжать, чтобы получить более простое представление изменений. Дополнительную информацию см. в статье [Сведения о слияниях запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges).

{% endtip %}

Для быстрого поиска ссылок на недавно обновленные запросы на вытягивание, над которыми вы работаете или на которые вы подписаны, можно использовать панель мониторинга. Дополнительные сведения см. в разделе [Сведения о личной панели мониторинга](/articles/about-your-personal-dashboard).

## Черновые запросы на вытягивание

{% data reusables.gated-features.draft-prs %}

При создании запроса на вытягивание можно создать запрос на вытягивание, готовый к проверке, или черновик запроса на вытягивание. Черновики запросов на вытягивание нельзя объединять и проверка таких черновиков не запрашивается у владельцев кода автоматически. Дополнительные сведения о создании черновика запроса на вытягивание см. в статьях [Создание запроса на вытягивание](/articles/creating-a-pull-request) и [Создание запроса на вытягивание из вилки](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

{% data reusables.pull_requests.mark-ready-review %} Запрос на вытягивание можно в любой момент преобразовать в черновик. Дополнительные сведения см. в разделе [Изменение этапа запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).

## Различия между фиксациями на страницах сравнения и на страницах запроса на вытягивание

На страницах сравнения и на страницах запроса на вытягивание используются различные методы вычисления различий между измененными файлами:

- На страницах сравнения отображается различие между подсказкой начальной ссылки и актуальным общим предком (т. е. базой слияния) головной и базовой ссылки.
- На страницах запросов на вытягивание отображается различие между подсказкой начальной ссылки и общим предком головной и базовой ссылки на момент создания запроса на вытягивание. Это значит, что база слияния, используемая для сравнения, может отличаться.

## Дополнительные материалы

- [Запрос на вытягивание](/articles/github-glossary/#pull-request) в глоссарии {% data variables.product.prodname_dotcom %}
- [Сведения о ветвях](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [Комментирование запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
- [Закрытие запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)
