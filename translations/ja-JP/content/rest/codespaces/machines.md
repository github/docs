---
title: Codespaces マシン
allowTitleToDifferFromFilename: true
shortTitle: Machines
intro: Codespaces マシン API を使うと、ユーザーは、特定のリポジトリまたは認証済みユーザーとして、codespace の作成に使えるマシン タイプを判断することができます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 4ef510cd054696025d885bec854f5360cae17e96
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067979'
---
## Codespaces マシン API について

Codespaces マシン API を使うと、ユーザーは、特定のリポジトリまたは認証済みユーザーとして、codespace の作成に使えるマシン タイプを判断することができます。 詳細については、「[マシン タイプについて](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)」を参照してください。

また、この情報は、既存の codespace のマシンを、その `machine` プロパティを更新することで変更する場合にも、参照することができます。 マシンの更新は、次回 codepace が起動するときに実行されます。 詳細については、「[codespace に合わせたコンピューターの種類の変更](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)」を参照してください。
