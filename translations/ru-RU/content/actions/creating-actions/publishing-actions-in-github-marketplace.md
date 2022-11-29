---
title: Публикация действий в GitHub Marketplace
intro: 'Вы можете публиковать действия в {% data variables.product.prodname_marketplace %} и предоставлять общий доступ к созданным действиям в сообществе {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
shortTitle: Publish in GitHub Marketplace
ms.openlocfilehash: e16f65116d7aa7c327e937dc2eba8964195e547d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884304'
---
Для публикации действий в {% data variables.product.prodname_marketplace %} необходимо принять условия предоставления услуг.

## Сведения о публикации действий

Перед публикацией действия необходимо создать его в репозитории. Дополнительные сведения см. в статье "[Создание действий](/actions/creating-actions)".

При планировании публикации действия в {% data variables.product.prodname_marketplace %} необходимо убедиться в том, что в репозитории содержатся только файл метаданных, код и файлы, необходимые для действия. Создание отдельного репозитория для действия позволяет пометить, выпустить и упаковать код в одном блоке. На {% data variables.product.prodname_dotcom %} метаданные действия также используются на странице {% data variables.product.prodname_marketplace %}.

Действия публикуются в {% data variables.product.prodname_marketplace %} немедленно и не проверяются {% data variables.product.prodname_dotcom %} при условии соответствия следующим требованиям:

- Действие должно находиться в общедоступном репозитории.
- Каждый репозиторий должен содержать одно действие.
- Файл метаданных действия (`action.yml` или `action.yaml`) должен находиться в корневом каталоге репозитория.
- Атрибут `name` в файле метаданных действия должен быть уникальным.
  - Атрибут `name` не может совпадать с именем существующего действия, опубликованного в {% data variables.product.prodname_marketplace %}.
  - Атрибут `name` не может совпадать с именем пользователя или организации на {% data variables.product.prodname_dotcom %}, если это действие не публикует пользователь или владелец организации. Например, только организация {% data variables.product.prodname_dotcom %} может опубликовать действие с именем `github`.
  - Атрибут `name` не должен совпадать с существующей категорией {% data variables.product.prodname_marketplace %}.
  - Имена функций {% data variables.product.prodname_dotcom %} на {% data variables.product.prodname_dotcom %} зарезервированы.

## Публикация действия

Вы можете добавить созданное вами действие в {% data variables.product.prodname_marketplace %}, пометив его как новый выпуск и опубликовав.

Чтобы создать черновик нового выпуска и опубликовать действие в {% data variables.product.prodname_marketplace %}, выполните приведенные ниже инструкции.

{% data reusables.repositories.navigate-to-repo %}
1. Перейдите к файлу метаданных действия в вашем репозитории (`action.yml` или `action.yaml`), и вы увидите баннер для публикации действия в {% data variables.product.prodname_marketplace %}. Нажмите кнопку **Создать черновик выпуска**.

   ![Кнопка публикации действия в Marketplace](/assets/images/help/repository/publish-github-action-to-marketplace-button.png)
1. В разделе "Действие выпуска" установите флажок для публикации действия в {% data variables.product.prodname_marketplace %}. Если вы не можете установить флажок, сначала перейдите по ссылке, чтобы прочитать и принять {% data variables.product.prodname_marketplace %} Соглашение разработчика.
![Выберите публикацию в Marketplace](/assets/images/help/repository/marketplace_actions_publish.png)
1. Если метки в файле метаданных содержат какие-либо проблемы, появится сообщение об ошибке.
![См. уведомление](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. Если вы увидите какие-либо предложения на экране, внесите соответствующие изменения в файл метаданных. По завершении вы увидите сообщение "Все в порядке!" .
![Исправление ошибок](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. Выберите основную категорию и при необходимости дополнительную категорию, чтобы пользователям было проще найти ваше действие в {% data variables.product.prodname_marketplace %}.
![Выбор категории](/assets/images/help/repository/marketplace_actions_categories.png)
1. Добавьте к действию тег версии и заголовок выпуска. Это поможет пользователям узнать, какие изменения или функции включены в выпуск. Пользователи будут видеть версию на странице действия в {% data variables.product.prodname_marketplace %}.
![Пометка версии](/assets/images/help/repository/marketplace_actions_version.png)
1. Заполните остальные поля и щелкните **Опубликовать выпуск**. Для публикации необходимо использовать двухфакторную проверку подлинности. Подробнее: [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication/).
![Публикация выпуска](/assets/images/help/repository/marketplace_actions_publishrelease.png)

## Удаление действия из {% data variables.product.prodname_marketplace %}

Чтобы удалить опубликованное действие из {% data variables.product.prodname_marketplace %}, необходимо обновить каждый опубликованный выпуск. Выполните указанные ниже действия для каждого выпуска действия, опубликованного в {% data variables.product.prodname_marketplace %}.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. На странице "Выпуски" справа от выпуска, который нужно изменить, нажмите кнопку **Изменить**.
![Кнопка изменения выпуска](/assets/images/help/releases/release-edit-btn.png)
4. Выберите **Опубликовать это действие в {% data variables.product.prodname_marketplace %}** , чтобы снять флажок.
![Кнопка "Опубликовать это действие"](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. В нижней части страницы щелкните **Обновить выпуск**.
![Кнопка "Обновить выпуск"](/assets/images/help/repository/actions-marketplace-update-release.png)
