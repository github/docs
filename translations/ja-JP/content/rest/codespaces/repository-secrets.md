---
title: Codespaces リポジトリ シークレット
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: Codespaces Repository Secrets API を使うと、codespace でユーザーがアクセスできるリポジトリのシークレット (クラウド サービスのアクセス トークンなど) を作成、一覧表示、削除することができます。
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 95b3dfaafef598bf05f55d697716eb1036093697
ms.sourcegitcommit: 9490533fcb7b7d5c16f8fea082a06ee66dd5db8f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/16/2022
ms.locfileid: '148165602'
---
## Codespaces リポジトリ シークレット API について

Codespaces リポジトリ シークレット API を使用すると、ユーザーがアクセスできるリポジトリのシークレット (クラウド サービスのアクセス トークンなど) を作成、一覧表示、削除することができます。 これらのシークレットは、実行時に codespace で使用できます。 詳細については、「[Codespaces の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」を参照してください。
