---
title: コミットのステータス
intro: Commit Status API を使うと、外部サービスでコミットの状態を設定できます。これは、それらのコミットが含まれる pull request に反映されます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c75b4817ecddad0e91460d7d12eddabc634d588
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882296'
---
## コミット ステータス API について

コミット ステータス API を使用すると、外部サービスによってコミットに `error`、`failure`、`pending`、または `success` の各ステータスがマークされます。これは、このようなコミットが含まれる pull request に反映されます。 また、ステータスには、オプションとして、`description` と `target_url` を含めることもできます。これにより、GitHub UI では、ステータスがさらに有用なものとなるため、強くお勧めします。

たとえば、ビルドの成功または失敗について、ステータスを使用してコミットをマークすることは、継続的インテグレーション サービスの一般的な使用方法の一例です。  `target_url` は、ビルド出力のフル URL となり、`description` は、ビルドの状況の概要をまとめたものとなります。

ステータスには、どのサービスがそのステータスを備えているかを示す `context` を含めることができます。 たとえば、継続的インテグレーション サービスのプッシュ ステータスには `ci` のコンテキストを、セキュリティ監査ツールのプッシュ ステータスには `security` のコンテキストを含めることができます。  その後、「[特定の参照に関する複合ステータスの取得](/rest/reference/commits#get-the-combined-status-for-a-specific-reference)」を参照して、コミットの全体的なステータスを取得します。

`repo:status` [OAuth スコープ](/developers/apps/scopes-for-oauth-apps)では、リポジトリ コードへのアクセスを許可 **しない** で、ステータスへの対象アクセスを許可しますが、一方で、`repo` スコープでは、ステータスに加えてコードへのアクセス許可も許可していることに注意してください。

GitHub App を開発しており、外部サービスについても詳しい情報を提供したいと考えている場合は、[Checks API](/rest/reference/checks) に関する記事を参照するのがよいでしょう。
