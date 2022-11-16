---
title: Изменение рекомендаций по безопасности репозитория
intro: 'Вы можете изменить метаданные и описание рекомендаций по обеспечению безопасности репозитория, если необходимо обновить сведения или исправить ошибки.'
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
  - /code-security/security-advisories/editing-a-security-advisory
  - /code-security/repository-security-advisories/editing-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Edit repository advisories
ms.openlocfilehash: db25b39285c65cd1ba83e1a2b6e76e7ec0d6e3e4
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114127'
---
Пользователи с разрешениями администратора в отношении рекомендаций по безопасности репозитория изменять эти рекомендации.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Сведения о благодарностях за рекомендации по безопасности

Вы можете включать в раздел благодарностей людей, которые помогли обнаружить, зарегистрировать или устранить уязвимость. Если вы решаете включить какого-либо человека в раздел благодарностей, он может принять или отклонить такое предложение.

Если человек принимает это предложение, его имя пользователя отображается в разделе "Credits" (Благодарности) рекомендации по безопасности. Любой пользователь с доступом на чтение к репозиторию может видеть рекомендацию и людей, которые приняли предложение о включении в раздел благодарностей за нее.

Если вы считаете, что должны быть включены в раздел благодарностей для рекомендации по безопасности, обратитесь к создавшему ее лицу и попросите изменить рекомендацию, чтобы включить вас в раздел благодарностей. Только автор рекомендации может включить вас в раздел благодарностей, поэтому пожалуйста, не обращайтесь в службу поддержки GitHub по поводу благодарностей за рекомендации по безопасности.

## Изменение рекомендаций по безопасности

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. В списке "Рекомендации по безопасности" щелкните рекомендацию по безопасности, которую хотите изменить.
5. В правом верхнем углу сведений о рекомендациях по безопасности щелкните {% octicon "pencil" aria-label="The edit icon" %}. Откроется форма рекомендаций по безопасности в режиме редактирования.
  ![Кнопка "Изменить" для рекомендаций по безопасности](/assets/images/help/security/security-advisory-edit-button.png) {% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. При необходимости измените раздел "Credits" (Благодарности) для рекомендации по безопасности.
  ![Благодарности для рекомендации по безопасности](/assets/images/help/security/security-advisory-credits.png)
12. Щелкните **Update security advisory** (Обновить рекомендации по безопасности).
  ![Кнопка "Update security advisory" (Обновить рекомендации по безопасности)](/assets/images/help/security/update-advisory-button.png)
13. Люди, указанные в разделе "Credits" (Благодарности), получат электронное письмо или веб-уведомление с приглашением принять благодарность. Если человек принимает это приглашение, его имя пользователя станет общедоступным после публикации рекомендации по безопасности.

## Дополнительные материалы

- [Отзыв рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)
