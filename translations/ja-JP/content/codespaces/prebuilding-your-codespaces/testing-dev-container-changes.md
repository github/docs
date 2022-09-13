---
title: 事前ビルドが可能なブランチに対する開発コンテナー構成の変更のテスト
shortTitle: Test dev container changes
allowTitleToDifferFromFilename: true
intro: 事前ビルド用に有効になっているブランチの開発コンテナー構成を変更する場合は、コード空間で変更をテストする必要があります。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with write permissions to a repository can create or edit the dev container configuration for a branch.
ms.openlocfilehash: ad89e9242f27c00bf95dab308b8ce571e3d3b1b2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147548073'
---
プレビルドが可能なブランチの開発コンテナー構成に変更を加えると、codespace 構成と関連するプレビルド テンプレートが更新されます。 そのため、アクティブに使用されているリポジトリのブランチに対して変更をコミットする前に、テスト ブランチから codespace でこのような変更をテストすることが重要です。 これにより、チームに破壊的変更を導入しないようにすることができます。

詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)に関するページをご覧ください。

## 開発コンテナー構成に対する変更のテスト

1. 事前ビルドが可能なブランチから codespace を作成します。このブランチの開発コンテナーを変更します。 詳細については、「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」を参照してください。
1. codespace で、テスト ブランチをチェックアウトします。 詳細については、「[Codespace でソース コントロールを使用する](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#creating-or-switching-branches)」を参照してください
1. 開発コンテナー構成に必要な変更を加えます。
1. コンテナーを再ビルドして変更を適用します。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)に関するページをご覧ください。
1. すべてが正常に表示されたら、テスト ブランチから新しい codespace を作成して、すべてが動作していることを確認することもお勧めします。 その後、リポジトリの既定のブランチまたはアクティブな機能ブランチに変更をコミットして、そのブランチのプレビルドの更新をトリガーできます。

   {% note %}
   
   **注**: この codespace を作成する場合、事前ビルド済みのものから作成するわけではないので、通常よりも時間がかかります。
   
   {% endnote %}
