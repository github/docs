---
title: Просмотр ветвей в репозитории
intro: 'Ветви являются центральным элементом совместной работы в {% data variables.product.product_name %}, и их лучше всего просматривать на странице ветвей.'
redirect_from:
  - /articles/viewing-branches-in-your-repository
  - /github/administering-a-repository/viewing-branches-in-your-repository
  - /github/administering-a-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View branches
ms.openlocfilehash: 286c8eb8c717f5a002db0059e65c416ccc3981e8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145136931'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
3. Используйте навигацию в верхней части страницы для просмотра определенных списков ветвей:
    - **Ваши ветви**. В репозиториях, в которых у вас есть доступ на отправку, в представлении **Ваши** отображаются все ветви, в которые вы отправляли код, за исключением ветви по умолчанию. Ветви упорядочены по самым новым.
    - **Активные ветви**. В представлении **Активные** отображаются все ветви, в которые кто-нибудь отправлял фиксации в течение последних трех месяцев. Ветви упорядочены по последним фиксациям.
    - **Устаревшие ветви**. В представлении **Устаревшие** отображаются все ветви, в которые никто не отправлял фиксации за последние три месяца. Ветви упорядочены по самым старым фиксациям. Используйте этот список, чтобы определить, [какие ветви следует удалить](/articles/creating-and-deleting-branches-within-your-repository).
    - **Все ветви**. В представлении **Все** отображается ветвь по умолчанию, а затем все остальные ветви, упорядоченные по ветвям с самыми новыми фиксациями.

4. При необходимости используйте поле поиска в правом верхнем углу. В нем доступен простой поиск по имени ветви без учета регистра. Он не поддерживает дополнительный синтаксис запросов.

![Страница "Ветви" для репозитория Atom](/assets/images/help/branches/branches-overview-atom.png)

## Дополнительные материалы

- [Создание и удаление ветвей в репозитории](/articles/creating-and-deleting-branches-within-your-repository)
- [Удаление неиспользуемых ветвей](/articles/deleting-unused-branches)
