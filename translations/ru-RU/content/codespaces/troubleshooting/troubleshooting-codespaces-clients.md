---
title: Устранение неполадок с клиентами Codespaces
intro: Вы можете использовать {% data variables.product.prodname_codespaces %} в браузере или с помощью {% data variables.product.prodname_vscode %}. В этой статье приведены действия для устранения проблем на клиентах.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Codespaces clients
ms.openlocfilehash: 9b8a04083665a1f2d555d568f855e3ebdf57fb56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145115040"
---
## Устранение неполадок с {% data variables.product.prodname_vscode %}

При подключении классической версии {% data variables.product.prodname_vscode %} к codespace вы заметите несколько различий по сравнению с работой в обычной рабочей области, но взаимодействие будет примерно таким же. 

При открытии codespace в браузере с помощью {% data variables.product.prodname_vscode %} в Интернете вы заметите больше различий. Например, некоторое настраиваемое сочетание клавиш будет отличаться или отсутствовать, а некоторые расширения могут вести себя по-разному. Сводку см. в разделе [Известные ограничения и адаптации](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations) в документации {% data variables.product.prodname_vscode %}.

Вы можете проверить наличие известных проблем и записать новые проблемы с помощью интерфейса {% data variables.product.prodname_vscode %} в репозитории [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders — это наиболее частый выпуск {% data variables.product.prodname_vscode %}. Он содержит все последние функции и исправления ошибок, но иногда может содержать новые проблемы, которые приводят к неисправной сборке.

Если вы используете сборку программы предварительной оценки и заметили реакцию на проблемы в работе, рекомендуется переключиться на {% data variables.product.prodname_vscode %} (стабильная версия) и повторить попытку.

В классической версии {% data variables.product.prodname_vscode %} можно перейти на стабильную версию, закрыв приложение {% data variables.product.prodname_vscode %} Insiders, открыв приложение {% data variables.product.prodname_vscode %} (стабильная версия) и повторно открыв codespace.

В веб-версии {% data variables.product.prodname_vscode %} можно нажать значок {% octicon "gear" aria-label="The manage icon" %} в левом нижнем углу редактора и выбрать **Switch to Stable Version...** (Переключиться на стабильную версию...). Если веб-версия не загружается или значок {% octicon "gear" aria-label="The manage icon" %} недоступен, вы можете принудительно переключиться на {% data variables.product.prodname_vscode %} (стабильная версия) путем добавления `?vscodeChannel=stable` к URL-адресу codespace и скачать codespace по этому URL-адресу.

Если проблема не устранена в {% data variables.product.prodname_vscode %} (стабильная версия), следуйте приведенным выше инструкциям по устранению неполадок.

## Устранение неполадок браузера

Если вы столкнулись с проблемами при использовании codespaces в браузере, отличном от Chromium, попробуйте переключиться на браузер на основе Chromium или проверьте наличие известных проблем с вашим браузером в репозитории `microsoft/vscode`, выполнив поиск проблем с пометкой названия вашего браузера, например [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) или [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

При возникновении проблем с использованием codespaces в браузере на основе Chromium вы можете проверить, возникает ли другая известная проблема с {% data variables.product.prodname_vscode %} в репозитории [`microsoft/vscode`](https://github.com/microsoft/vscode/issues).
