---
title: Сведения об использовании ваших данных в GitHub
redirect_from:
  - /articles/about-github-s-use-of-your-data
  - /articles/about-githubs-use-of-your-data
  - /github/understanding-how-github-uses-and-protects-your-data/about-githubs-use-of-your-data
intro: '{% data variables.product.product_name %} использует данные репозитория для подключения к соответствующим средствам, пользователям, проектам и информации.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: GitHub's use of your data
ms.openlocfilehash: f49f90a981b92d2c7d5d34b0fac28ec05adbadd0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135644'
---
## Сведения об использовании ваших данных в {% data variables.product.product_name %}

{% data variables.product.product_name %} объединяет метаданные и анализирует шаблоны содержимого для предоставления обобщенных аналитических сведений в продукте. Он использует данные из общедоступных репозиториев, а также использует метаданные и агрегированные данные из частных репозиториев, когда владелец репозитория решил предоставить {% data variables.product.product_name %} общий доступ к данным, включив граф зависимостей. Если включить граф зависимостей для частного репозитория, {% data variables.product.product_name %} будет выполнять анализ только для чтения этого частного репозитория.

Если вы включите использование данных для частного репозитория, мы будем продолжать рассматривать ваши частные данные, исходный код или торговые секреты как конфиденциальные и частные в соответствии с [нашими условиями предоставления услуг](/free-pro-team@latest/github/site-policy/github-terms-of-service). Источником информации, которую мы узнаем, являются только агрегированные данные. Дополнительные сведения см. в статье "[Управление параметрами использования данных для частного репозитория](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".

{% data reusables.repositories.about-github-archive-program %} Дополнительные сведения см. в статье "[Сведения о архивации содержимого и данных в {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".

{% data reusables.user-settings.export-data %} Дополнительные сведения см. в статье "[Запрос архива данных личной учетной записи](/articles/requesting-an-archive-of-your-personal-account-s-data)".

Мы объявим о существенных новых функциях, использующих метаданные или агрегированные данные, в [блоге, посвященном {% data variables.product.prodname_dotcom %}](https://github.com/blog).

## Как данные улучшают рекомендации по безопасности

Пример использования ваших данных: мы можем обнаруживать уязвимости безопасности в зависимостях вашего общедоступного репозитория и оповещать вас о них. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

Чтобы обнаружить потенциальные уязвимости системы безопасности, {% data variables.product.product_name %} сканирует содержимое файла манифеста зависимостей для получения списка зависимостей проекта.

{% data variables.product.product_name %} также учится на изменениях, которые вы вносите в манифест зависимостей. Например, если вы обновляете уязвимую зависимость до безопасной версии после получения предупреждения о безопасности, и другие пользователи делают то же самое, {% data variables.product.product_name %} узнает, как исправить уязвимость и может порекомендовать аналогичное исправление для затронутых репозиториев.

## Конфиденциальность и общий доступ к данным

Данные частного репозитория проверяются компьютером и никогда не считываются сотрудниками {% data variables.product.product_name %}. Люди никогда не увидят содержимое ваших частных репозиториев, за исключением случаев, описанных в наших [условиях предоставления услуг](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access).

Ваши персональные данные или данные репозитория не будут предоставляться третьим лицам. Мы можем делиться агрегированными данными, полученными в результате анализа, с нашими партнерами.
