---
title: Сведения об архивации содержимого и данных в GitHub
intro: 'Вы можете архивировать содержимое и данные в {% data variables.product.product_name %}, чтобы другие пользователи могли просматривать их и ссылаться на них.'
redirect_from:
  - /articles/about-archiving-content-and-data-on-github
  - /github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-content-and-data-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Archive content & data
ms.openlocfilehash: aeb42b66f2a7d99a2918d3134971ea81b35248a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145137057'
---
## Обеспечение постоянства хранения данных общедоступных репозиториев

{% data variables.product.product_name %} намеревается оставить общедоступные репозитории доступными, пока вы их не удалите. В некоторых случаях мы можем сделать общедоступный контент недоступным, например если:

- Мы получаем [уведомление о снятии DMCA](/free-pro-team@latest/github/site-policy/dmca-takedown-policy) для содержимого в репозитории.
- Мы определяем, что содержимое репозитория нарушает наши [правила сообщества](/free-pro-team@latest/github/site-policy/github-community-guidelines) или [условия предоставления услуг](/free-pro-team@latest/github/site-policy/github-terms-of-service).

Ученые и исследователи могут ссылаться на эту информацию в планах управления данными.

## Сведения о {% data variables.product.prodname_archive %}

{% data reusables.repositories.about-github-archive-program %}

{% data variables.product.prodname_archive %} позволяет сторонним партнерам архивировать общедоступные репозитории с помощью общедоступного API. Эти партнеры архивируют различные типы данных с разной частотой и делают данные доступными для общественности. {% data variables.product.prodname_archive %} также обеспечивает постоянную защиту данных, сохраняя несколько копий в различных форматах данных и в разных местах. Например, {% data variables.product.company_short %} хранит репозитории в {% data variables.product.prodname_arctic_vault %}, очень долговременном архиве, рассчитанном на срок не менее 1000 лет. Дополнительные сведения см. в разделе [{% data variables.product.prodname_archive %}](https://archiveprogram.github.com/).

Ответственное использование архивов включает соблюдение конфиденциальности пользователей. Дополнительные сведения см. в разделе [Общедоступные сведения на GitHub](/free-pro-team@latest/github/site-policy/github-privacy-statement#public-information-on-github).

Можно отказаться от {% data variables.product.prodname_archive %} для репозитория. Дополнительные сведения см. в разделе [Участие или отказ от использования {% data variables.product.prodname_archive %} для общедоступного репозитория](/get-started/privacy-on-github/opting-into-or-out-of-the-github-archive-program-for-your-public-repository).

## Добавление лицензии с открытым кодом для повышения архивируемости

Библиотекам и исследователям может потребоваться юридическая защита для создания архивов общедоступного содержимого. Если вы хотите, чтобы третьи лица рассматривали вашу работу над {% data variables.product.product_name %} для архивирования, вы можете добавить к своим проектам [лицензию с открытым исходным кодом](/articles/open-source-licensing). Лицензия с открытым кодом предоставляет участникам явные разрешения на копирование и распространение материала в репозиториях.
