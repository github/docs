---
title: Сведения о подключениях к GitHub
intro: '{% data variables.product.prodname_desktop %} использует протокол HTTPS для безопасного обмена данными с {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/about-connections-to-github
  - /desktop/installing-and-configuring-github-desktop/about-connections-to-github
versions:
  fpt: '*'
shortTitle: About connections
ms.openlocfilehash: 4b5458cd036c106beafdc63a9727aed859022f7f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098639'
---
{% data variables.product.prodname_desktop %} подключается к {% data variables.product.prodname_dotcom %} при вытягивании, отправке, клонировании и создании вилки для удаленных репозиториев. Чтобы подключиться к {% data variables.product.prodname_dotcom %} с помощью {% data variables.product.prodname_desktop %}, необходимо выполнить проверку подлинности учетной записи. Дополнительные сведения см. в разделе [Проверка подлинности в {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github).

После проверки подлинности в {% data variables.product.prodname_dotcom %} можно подключиться к удаленным репозиториям с помощью {% data variables.product.prodname_desktop %}. {% данных variables.product.prodname_desktop %} кэширует учетные данные (имя пользователя и пароль или {% данных variables.product.pat_generic %}) и использует учетные данные для проверки подлинности для каждого подключения к удаленному репозиторию.

{% data variables.product.prodname_desktop %} подключается к {% data variables.product.prodname_dotcom %} с помощью протокола HTTPS. При использовании {% data variables.product.prodname_desktop %} для доступа к репозиториям, клонированным с помощью SSH, могут возникнуть ошибки. Чтобы подключиться к репозиторию, клонированному с помощью SSH, измените URL-адреса удаленного репозитория. Дополнительные сведения см. в разделе [Управление удаленными репозиториями](/github/getting-started-with-github/managing-remote-repositories).

## Дополнительные материалы
- [Клонирование и создание вилки для репозиториев из GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)
