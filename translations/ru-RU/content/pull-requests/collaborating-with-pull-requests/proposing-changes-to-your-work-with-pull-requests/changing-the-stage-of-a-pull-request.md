---
title: Изменение этапа запроса на вытягивание
intro: Вы можете пометить черновик запроса на вытягивание как готовый для проверки или преобразовать запрос на вытягивание в черновик.
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
  - /articles/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the state
ms.openlocfilehash: 5ef2845e57518c4b66f13a804919f7bdea327040
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883298'
---
## Пометка запроса на вытягивание как готового к проверке

{% data reusables.pull_requests.mark-ready-review %}

{% tip %}

**Совет.** Вы также можете пометить запрос на вытягивание как готовый для проверки с помощью {% data variables.product.prodname_cli %}. Дополнительные сведения см. в разделе [`gh pr ready`](https://cli.github.com/manual/gh_pr_ready) в документации по {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. В списке "Запросы на вытягивание" щелкните тот, который вы хотите пометить как готовый для проверки.
3. В поле слияния нажмите кнопку **Готово к проверке**.
  ![Кнопка "Готово к проверке"](/assets/images/help/pull_requests/ready-for-review-button.png)

## Преобразование запроса на вытягивание в черновик

Запрос на вытягивание можно в любое время преобразовать в черновик. Например, если вы случайно открыли запрос на вытягивание вместо черновика или получили отзыв о вашем запросе на вытягивание, который необходимо разрешить, можно преобразовать запрос на вытягивание в черновик, чтобы указать, что необходимы дальнейшие изменения. Никто не сможет объединить запрос на вытягивание, пока вы не пометите его как снова готовый к проверке. Люди, которые уже подписаны на уведомления для этого запроса на вытягивание, не будут отписаны при преобразовании запроса на вытягивание в черновик.

{% data reusables.repositories.sidebar-pr %}
2. В списке "Запросы на вытягивание" щелкните запрос на вытягивание, который хотите преобразовать в черновик.
3. В правой боковой панели в разделе "Рецензенты" нажмите ссылку **Преобразовать в черновик**.
  ![Ссылка для преобразования в черновик](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. Нажмите ссылку **Преобразовать в черновик**.
  ![Подтверждение преобразования в черновик](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

## Дополнительные материалы

- [Сведения о запросах на вытягивание](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
