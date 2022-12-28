---
title: Codespaces リポジトリ シークレット
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: REST API を使用し、ユーザーが codespace でアクセスできるリポジトリのシークレットを管理します。
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f38e196db7ab0601a28612cf13c363f18181342a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192730'
---
## {% data variables.product.prodname_codespaces %} リポジトリ シークレットについて

ユーザーがアクセスできるリポジトリのシークレット (クラウド サービスのアクセス トークンなど) を作成、一覧表示、削除できます。 これらのシークレットは、実行時に codespace で使用できます。 詳細については、「[Codespaces の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」を参照してください。
