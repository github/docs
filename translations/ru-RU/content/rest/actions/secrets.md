---
title: Секреты GitHub Actions
allowTitleToDifferFromFilename: true
shortTitle: Secrets
intro: 'API секретов {% data variables.product.prodname_actions %} позволяет создавать, обновлять, удалять и извлекать сведения о зашифрованных секретах, которые можно использовать в рабочих процессах {% data variables.product.prodname_actions %}.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: bd72024abd61feb6b69e3efb09d1ddc2b8f27a23
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061988'
---
## Сведения об API секретов

API секретов {% data variables.product.prodname_actions %} позволяет создавать, обновлять, удалять и извлекать сведения о зашифрованных секретах, которые можно использовать в рабочих процессах {% data variables.product.prodname_actions %}. {% data reusables.actions.about-secrets %} Дополнительные сведения см. в разделе [Создание и использование зашифрованных секретов для Dependabot](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} должны иметь разрешение `secrets` на использование этого API. Пользователи, прошедшие проверку подлинности, должны иметь доступ к репозиторию для создания, обновления или чтения секретов, с возможностью совместной работы.
