---
title: Публикация рекомендаций по безопасности репозитория
intro: 'Вы можете опубликовать рекомендации по безопасности, чтобы информировать сообщество об уязвимости безопасности в проекте.'
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-security-advisory
  - /code-security/security-advisories/publishing-a-security-advisory
  - /code-security/repository-security-advisories/publishing-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
  - Repositories
shortTitle: Publish repository advisories
ms.openlocfilehash: 17d98e3027c0968f21107ccefdb70fbebca67a35
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114093'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Publishing a security advisory".-->

Любой пользователь с правами администратора в отношении рекомендации по безопасности может опубликовать эту рекомендацию.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Предварительные требования

Прежде чем публиковать рекомендацию по безопасности или запрашивать идентификационный номер CVE, необходимо создать черновик рекомендации по безопасности и предоставить сведения о версиях проекта, затронутых уязвимостью. Дополнительные сведения см. в статье [Создание рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/creating-a-repository-security-advisory).

Если вы создали рекомендацию по безопасности, но еще не предоставили подробные сведения о версиях проекта, затронутых уязвимостью, вы можете изменить эту рекомендацию по безопасности. Дополнительные сведения см. в статье [Изменение рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/editing-a-repository-security-advisory).

## Сведения о публикации рекомендаций по безопасности

При публикации рекомендации по безопасности вы уведомляете свое сообщество об уязвимости, на которую нацелена рекомендация по безопасности. Публикация рекомендации по безопасности упрощает сообществу задачу по обновлению зависимостей пакетов и изучению влияния уязвимости.

{% data reusables.repositories.security-advisories-republishing %}

Перед публикацией рекомендации по безопасности вы можете осуществлять закрытую совместную работу над устранением уязвимости во временной частной вилке. Дополнительные сведения см. в разделе [Совместная работа во временной частной вилке для устранения уязвимости репозитория](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability).

{% warning %}

**Предупреждение**. По возможности следует всегда добавлять исправленную версию в рекомендацию по безопасности перед публикацией этой рекомендации. Если этого не сделать, рекомендация будет опубликована без исправленной версии, и {% data variables.product.prodname_dependabot %} оповестит пользователей о проблеме, не предоставив им безопасную версию для обновления.

В таких ситуациях рекомендуется сделать следующее:

- Если исправленная версия скоро появится и вы можете дождаться ее, сообщите о проблеме, когда исправление будет готово.
- Если версия исправления находится в разработке, но еще не доступна, укажите это в рекомендации и измените рекомендацию позже после публикации.
- Если вы не планируете исправлять проблему, четко укажите это в рекомендации, чтобы ваши пользователи не обращались к вам С вопросами о том, когда будет выпущено исправление. В этом случае полезно указать шаги, которые пользователи могут предпринять для устранения проблемы.

{% endwarning %}

При публикации черновика рекомендации из общедоступного репозитория все могут видеть следующее:

- Текущая версия данных рекомендации.
- Любые благодарности за рекомендацию, на которые согласились пользователи.
  
{% note %}

**Примечание**. Широкая публика никогда не будет иметь доступа к журналу изменений такой рекомендации и будет видеть только опубликованную версию.

{% endnote %}

После публикации рекомендации по безопасности ее URL-адрес останется таким же, как и до публикации. Любой пользователь с доступом на чтение к репозиторию может просматривать рекомендацию по безопасности. Участники совместной работы над рекомендацией по безопасности могут продолжать просматривать прошлые беседы, включая полный поток комментариев, в этой рекомендации, пока пользователь с правами администратора не удалит такого участника из рекомендации. 

Если вам нужно обновить или исправить сведения в опубликованной рекомендации по безопасности, ее можно отредактировать. Дополнительные сведения см. в статье [Изменение рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/editing-a-repository-security-advisory).

## Публикация рекомендаций по безопасности

Публикация рекомендации по безопасности удаляет временную частную вилку для этой рекомендации.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. В списке "Рекомендации по безопасности" щелкните рекомендацию по безопасности, которую хотите опубликовать.
  ![Советы по безопасности в списке](/assets/images/help/security/security-advisory-in-list.png)
5. Щелкните **Publish advisory** (Опубликовать рекомендацию) в нижней части страницы.
  ![Кнопка "Publish advisory" (Опубликовать рекомендацию)](/assets/images/help/security/publish-advisory-button.png)
  
## {% data variables.product.prodname_dependabot_alerts %} для опубликованных рекомендаций по безопасности

{% data reusables.repositories.github-reviews-security-advisories %}

## Запрос идентификационного номера CVE (необязательно)

{% data reusables.repositories.request-security-advisory-cve-id %} Дополнительные сведения см. в разделе [Рекомендации по безопасности репозитория](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories#cve-identification-numbers).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. В списке "Рекомендации по безопасности" щелкните рекомендацию по безопасности, для которой вы хотите запросить идентификационный номер CVE.
  ![Советы по безопасности в списке](/assets/images/help/security/security-advisory-in-list.png)
5. Используйте раскрывающееся меню **Publish advisory** (Опубликовать рекомендацию) и щелкните **Request CVE** (Запросить CVE).
  ![Элемент "Request CVE" (Запросить CVE) в раскрывающемся списке](/assets/images/help/security/security-advisory-drop-down-request-cve.png)
6. Щелкните **Request CVE** (Запросить CVE).
  ![Кнопка "Request CVE" (Запросить CVE)](/assets/images/help/security/security-advisory-request-cve-button.png)

## Дополнительные материалы

- [Отзыв рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)
