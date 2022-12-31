---
title: Секреты репозитория Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: 'Используйте REST API для управления секретами для репозиториев, к которым пользователь имеет доступ в codespace.'
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f38e196db7ab0601a28612cf13c363f18181342a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192732'
---
## Сведения о секретах репозитория {% data variables.product.prodname_codespaces %}

Вы можете создавать, перечислять и удалять секреты (например, маркеры доступа для облачных служб) для репозиториев, к которым у пользователя есть доступ. Эти секреты становятся доступными для кодового пространства в среде выполнения. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для ваших кодовых пространств](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).
