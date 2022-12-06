---
title: Секреты репозитория Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: 'API секретов репозитория Codespaces позволяет пользователю создавать, перечислять и удалять секреты (например, токены доступа для облачных служб) для репозиториев, к которым у пользователя есть доступ из codespace.'
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 95b3dfaafef598bf05f55d697716eb1036093697
ms.sourcegitcommit: 9490533fcb7b7d5c16f8fea082a06ee66dd5db8f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/16/2022
ms.locfileid: '148165604'
---
## Сведения об API секретов репозитория Codespaces

API секретов репозитория Codespaces позволяет пользователю создавать, перечислять и удалять секреты (например, токены доступа для облачных служб) для репозиториев, к которым у пользователя есть доступ. Эти секреты становятся доступными для кодового пространства в среде выполнения. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для ваших кодовых пространств](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).
