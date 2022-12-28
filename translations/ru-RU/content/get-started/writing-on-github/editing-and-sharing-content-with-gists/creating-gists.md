---
title: Создание gist
intro: 'Вы можете создать два вида gist: {% ifversion ghae %}внутренний{% else %}общедоступный{% endif %} и секретный. Создайте {% ifversion ghae %}внутренний{% else %}общедоступный{% endif %} gist, если вы готовы поделиться своими идеями с {% ifversion ghae %}участниками предприятия{% else %}мир{% endif %} или секретный gist, если не готовы делать это.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-gist %}'
redirect_from:
  - /articles/about-gists
  - /articles/cannot-delete-an-anonymous-gist
  - /articles/deleting-an-anonymous-gist
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
  - /github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e0ac449dc71bb0c525ee1559b82e509a281e55ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145069881'
---
## Сведения о gist

Каждый gist — это репозиторий GIT, поэтому он допускает создание вилок и клонирование. {% ifversion not ghae %}При условии входа в {% data variables.product.product_name %} при{% else %}При{% endif %} создании gist он будет связан с вашей учетной записью и появится в списке gist на {% data variables.gists.gist_homepage %}.

Gist может быть {% ifversion ghae %}внутренним{% else %}общедоступным{% endif %} или секретным. {% ifversion ghae %}Внутренние{% else %}Общедоступные{% endif %} gist отображаются на странице {% data variables.gists.discover_url %}, где {% ifversion ghae %}сотрудники организации{% else %}пользователи{% endif %} могут просматривать новые gist по мере их создания. Они также доступны для поиска, так что другие пользователи могут находить их и знакомиться с результатами вашей работы.

Секретные gist не отображаются на странице {% data variables.gists.discover_url %} и недоступны для поиска. Секретные gist не являются частными. Если вы отправляете URL-адрес секретного gist {% ifversion ghae %}другому сотруднику организации{% else %}другу{% endif %}, он сможет просмотреть его. Однако если {% ifversion ghae %}любой другой сотрудник организации{% else %}кто-то незнакомый вам{% endif %} найдет этот URL-адрес, он также сможет просмотреть ваш gist. Если вам нужно скрыть код от посторонних, возможно, потребуется вместо этого [создать частный репозиторий](/articles/creating-a-new-repository).

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% ifversion ghes %}

Если администратор сайта отключил частный режим, можно также использовать анонимные gist, которые могут быть общедоступными или секретными.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

Вы получите уведомление в указанных ниже случаях.
- Вы являетесь автором gist.
- Кто-то упоминает вас в gist.
- Вы подписались на gist, нажав кнопку **Подписаться** в верхней его части.

{% ifversion fpt or ghes or ghec %}

Вы можете закреплять gist в своем профиле, чтобы другие пользователи могли легко их видеть. Дополнительные сведения см. в разделе [Закрепление элементов в профиле](/articles/pinning-items-to-your-profile).

{% endif %}

Вы можете обнаружить {% ifversion ghae %}внутренние{% else %}общедоступные{% endif %} gist, созданные другими пользователями, перейдя на {% data variables.gists.gist_homepage %} и щелкнув **Все gist**. Вы перейдете на страницу со всеми gist, отсортированными по времени создания или изменения. Gist можно также искать по языку с помощью {% data variables.gists.gist_search_url %}. При поиске gist используется тот же синтаксис, что и при [поиске кода](/search-github/searching-on-github/searching-code).

Так как gist — это репозитории GIT, вы можете просматривать их полный журнал фиксаций вместе с различиями. Gist также допускают создание вилок или клонирование. Дополнительные сведения см. в разделе [Создание вилок и клонирование gist](/articles/forking-and-cloning-gists).

ZIP-файл с gist можно скачать, нажав кнопку **Скачать ZIP** в верхней части gist. Gist можно внедрить в любое текстовое поле, поддерживающее JavaScript, например в запись блога. Чтобы получить код внедрения, щелкните значок буфера обмена рядом с URL-адресом **внедрения** gist. Чтобы внедрить определенный файл gist, добавьте к URL-адресу **внедрения** элемент `?file=FILENAME`.

{% ifversion fpt or ghec %}

Gist поддерживает сопоставление файлов GeoJSON. Эти карты отображаются во внедренных gist, так что ими можно легко делиться и внедрять их. Дополнительные сведения см. в статье [Работа с файлами, не связанными с кодом](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github).

{% endif %}

## Создание gist

Чтобы создать gist, выполните указанные ниже действия.

{% note %}

Вы можете легко создать gist с помощью {% data variables.product.prodname_cli %}. Дополнительные сведения см. в разделе [`gh gist create`](https://cli.github.com/manual/gh_gist_create) в документации по {% data variables.product.prodname_cli %}.

Кроме того, можно перетащить текстовый файл с рабочего стола непосредственно в редактор.

{% endnote %}

1. Войдите в {% data variables.product.product_name %}.
2. Перейдите на {% data variables.gists.gist_homepage %}.
3. Введите необязательное описание и имя gist.
![Описание и имя gist](/assets/images/help/gist/gist_name_description.png)

4. Введите текст gist в текстовом поле gist.
![Текстовое поле gist](/assets/images/help/gist/gist_text_box.png)

5. Если необходимо создать {% ifversion ghae %}внутренний{% else %}общедоступный{% endif %} gist, щелкните значок {% octicon "triangle-down" aria-label="The downwards triangle icon" %}, а затем выберите пункт **Создать {% ifversion ghae %}внутренний{% else %}общедоступный{% endif %} gist**.
![Раскрывающееся меню для выбора видимости gist]{% ifversion ghae %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. Щелкните **Создать секретный gist** или **Создать {% ifversion ghae %}внутренний{% else %}общедоступный{% endif %} gist**.
  ![Кнопка для создания gist](/assets/images/help/gist/create-secret-gist-button.png)
