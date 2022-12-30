---
title: Уровни разрешений для рекомендаций по безопасности репозитория
intro: 'Действия, которые можно предпринять в рамках рекомендаций по безопасности для репозитория, зависят от того, есть ли у вас разрешения администратора или разрешения для записи в рекомендации по безопасности.'
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
  - /code-security/security-advisories/permission-levels-for-security-advisories
  - /code-security/repository-security-advisories/permission-levels-for-repository-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
shortTitle: Permission levels
ms.openlocfilehash: f4195822de121780f1629fda3d646170d4c4e566
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114135'
---
Эта статья относится только к рекомендациям по безопасности на уровне репозитория. Любой может вносить вклад в глобальные рекомендации по безопасности в {% data variables.product.prodname_advisory_database %} на сайте [github.com/advisories](https://github.com/advisories). Правки в глобальных рекомендациях не изменяют и не влияют на параметры отображения рекомендаций в репозитории.  Дополнительные сведения см. в разделе [Редактирование рекомендаций по безопасности в {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database).

## Permissions overview (Общие сведения о разрешениях)

{% data reusables.repositories.security-advisory-admin-permissions %} Дополнительные сведения о добавлении участника совместной работы в рекомендацию по безопасности см. в разделе [Добавление участника совместной работы в рекомендации по безопасности репозитория](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory).

Действие | Разрешения на запись | Разрешения администратора |
------ | ----------------- | ----------------- |
Просмотр черновика рекомендации по безопасности | X | X |
Добавление участников совместной работы в рекомендацию по безопасности (см. раздел [Добавление участника совместной работы в рекомендации по безопасности репозитория](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)) | | X |
Изменение и удаление комментариев в рекомендации по безопасности | X | X |
Создание временной частной вилки в рекомендации по безопасности (см. раздел[Совместная работа во временной частной вилке для устранения уязвимости системы безопасности репозитория](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)) | | X |
Добавление изменений во временную частную вилку в рекомендации по безопасности (см. раздел[Совместная работа во временной частной вилке для устранения уязвимости системы безопасности репозитория](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)) | X | X |
Создание запросов на вытягивание во временной частной вилке (см. раздел[Совместная работа во временной частной вилке для устранения уязвимости системы безопасности репозитория](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)) | X | X |
Слияние изменений в рекомендации по безопасности (см. раздел[Совместная работа во временной частной вилке для устранения уязвимости системы безопасности репозитория](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)) | | X |
Добавление и изменение метаданных в рекомендации по безопасности (см. раздел [Публикация рекомендации по безопасности для репозитория](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)) | X | X |
Добавление и удаление кредитов для рекомендации по безопасности (см. раздел [Изменение рекомендации по безопасности для репозитория](/code-security/repository-security-advisories/editing-a-repository-security-advisory)) | X | X |
Закрытие черновика рекомендации по безопасности | | X |
Публикация рекомендации по безопасности (см. раздел [Публикация рекомендации по безопасности для репозитория](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)) | | X |

## Дополнительные материалы

- [Добавление участника совместной работы в рекомендации по безопасности репозитория](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)
- [Совместная работа во временной частной вилке для устранения уязвимости репозитория](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)
- [Удаление участника совместной работы из рекомендации по безопасности репозитория](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)
- [Отзыв рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)
