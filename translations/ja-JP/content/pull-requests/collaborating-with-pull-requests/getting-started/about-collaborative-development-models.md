---
title: 共同開発モデルについて
intro: プルリクエストの使い方は、プロジェクトで使う開発モデルのタイプによります。 フォークおよびプル モデルまたは共有リポジトリ モデルを使用できます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/about-collaborative-development-models
  - /articles/types-of-collaborative-development-models
  - /articles/about-collaborative-development-models
  - /github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models
  - /github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Collaborative development
ms.openlocfilehash: 2a054071dc801ac035f3925e81895200c0a7375d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139185'
---
## フォークとプルモデル

フォークとプルモデルでは、誰でも既存のリポジトリをフォークして、個人のフォークに変更をプッシュできます。 ユーザが所有するフォークにプッシュする際に、ソースリポジトリへのアクセス許可は必要ありません。 プロジェクトのメンテナーは、その変更をソースリポジトリにプルできます。 ユーザが所有するフォークのブランチからソース（上流）のリポジトリのブランチへの変更を提案するプルリクエストをオープンすると、上流のリポジトリへのプッシュアクセスを持つすべてのユーザがプルリクエストに変更を加えられるようにすることができます。  このモデルは、新しいコントリビュータにとって摩擦が減り、事前に調整することなく人々が独立して作業できることから、オープンソースプロジェクトでよく使われます。

{% tip %}

**参考:** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning %}

{% endtip %}

## 共有リポジトリ モデル

共有リポジトリモデルでは、コラボレータは単一の共有リポジトリへのプッシュアクセスが許可され、変更の必要がある場合にはトピックブランチが作成されます。 このモデルでは、メインの開発ブランチに変更がマージされる前に、一連の変更についてコードレビューと一般的な議論を始めることができるので、プルリクエストが役に立ちます。 このモデルは、プライベートなプロジェクトで協力する小さなTeamやOrganizationで普及しています。

## 参考資料

- "[pull request について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[フォークから pull request を作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- "[フォークから作成された pull request のブランチへの変更の許可](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
