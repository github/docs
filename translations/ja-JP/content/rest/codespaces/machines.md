---
title: Codespaces マシン
allowTitleToDifferFromFilename: true
shortTitle: Machines
intro: REST API を使って、codespace 用に使えるマシン タイプを管理できます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5b53ceb3fb7cf137f61285b1f9ed0aa7838a9179
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193548'
---
## {% data variables.product.prodname_codespaces %} マシンについて

特定のリポジトリに、または認証済みユーザーとして、codespace の作成に使えるマシン タイプを決めることができます。 詳細については、「[マシン タイプについて](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)」を参照してください。

また、この情報は、既存の codespace のマシンを、その `machine` プロパティを更新することで変更する場合にも、参照することができます。 マシンの更新は、次回 codepace が起動するときに実行されます。 詳細については、「[codespace に合わせたコンピューターの種類の変更](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)」を参照してください。
