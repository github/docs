---
title: Секреты Dependabot
shortTitle: Secrets
intro: 'С помощью API секретов {% data variables.product.prodname_dependabot %} можно управлять секретами {% data variables.product.prodname_dependabot %} организации или репозитория.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 0cabee9ace44e75d8fcd2ce81aa9d7583b39e59d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882290'
---
## Сведения об API секретов {% data variables.product.prodname_dependabot %}

API секретов {% data variables.product.prodname_dependabot %} позволяет создавать, обновлять, удалять и извлекать сведения о зашифрованных секретах. {% data reusables.actions.about-secrets %} Дополнительные сведения см. в разделе [Управление зашифрованными секретами для Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} должны иметь разрешение `dependabot_secrets` на использование этого API. Пользователи, прошедшие проверку подлинности, должны иметь доступ к репозиторию для создания, обновления или чтения секретов, с возможностью совместной работы.
