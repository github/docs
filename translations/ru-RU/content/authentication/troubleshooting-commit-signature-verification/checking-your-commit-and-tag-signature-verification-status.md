---
title: Проверка состояния проверки сигнатуры фиксации и тега
intro: 'Вы можете проверить состояние проверки подписей фиксации и тегов в {% data variables.product.product_name %}.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status
  - /articles/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Check verification status
ms.openlocfilehash: 726d292ca2b91b54c9002dc393e6e21f76648889
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: '145088263'
---
## <a name="checking-your-commit-signature-verification-status"></a>Проверка состояния проверки сигнатуры фиксации

1. В {% data variables.product.product_name %} перейдите к запросу на вытягивание.
{% data reusables.repositories.review-pr-commits %}
3. Рядом с сокращенным хэшем фиксации есть поле, показывающее, проверена ли сигнатура фиксации{% ifversion fpt or ghec %}, частично проверена{% endif %} или не проверена.
![Подписанная фиксация](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. Чтобы просмотреть более подробные сведения о сигнатуре фиксации, щелкните **Проверено**{% ifversion fpt or ghec %}, **Частично проверено**{% endif %} или **Не проверено**.
![Проверенная подписанная фиксация](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

## <a name="checking-your-tag-signature-verification-status"></a>Проверка состояния проверки сигнатуры тега

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
2. В верхней части страницы "Выпуски" щелкните **Теги**.
![Страница "Теги"](/assets/images/help/releases/tags-list.png)
3. Рядом с описанием тега есть поле, показывающее, проверена ли сигнатура тега{% ifversion fpt or ghec %}, частично проверена{% endif %} или не проверена.
![проверенная сигнатура тега](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. Чтобы просмотреть более подробные сведения о сигнатуры тега, щелкните **Проверено**{% ifversion fpt or ghec %}, **Частично проверено**{% endif %} или **Не проверено**. 
![Проверенный подписанный тег](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

## <a name="further-reading"></a>Дополнительные материалы

- "[Сведения о проверке подписи фиксации](/articles/about-commit-signature-verification)"
- [Подписывание фиксаций](/articles/signing-commits)
- [Подписывание тегов](/articles/signing-tags)
