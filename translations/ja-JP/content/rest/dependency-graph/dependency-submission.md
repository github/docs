---
title: Dependency Submission
intro: Dependency Submission API を使うと、プロジェクトがビルドまたはコンパイルされるときに解決される依存関係など、プロジェクトの依存関係を送信できます。
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 72ffb8376c33972ab02c0a5fb48504b92fef3cec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080389'
---
## Dependency Submission API について

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

依存関係は、スナップショットの形式で Dependency Submission API に送信されます。 スナップショットは、コミット SHA や他のメタデータに関連付けられている依存関係のセットであり、コミットのリポジトリの現在の状態を反映しています。  事前に作成されたアクションを使用するか、独自のアクションを作成して、プロジェクトがビルドされるたびに必要な形式で Dependency Submission API に依存関係を送信するかを選べます。 Dependency Submission API の使用について詳しくは、「[Dependency submission API の利用](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)」をご覧ください。

依存関係グラフに含める複数の依存関係セットを Dependency Submission API に送信できます。 この API では、スナップショットの `job.correlator` プロパティと `detector.name` カテゴリを使用して、各ワークフローの最新の送信が確実に表示されるようにします。 `correlator` プロパティ自体は、独立した送信を区別するために使用する主要なフィールドです。 `correlator` の例としては、アクションの実行で使用できる `<GITHUB_WORKFLOW> <GITHUB_JOB>` という 2 つの変数のシンプルな組み合わせがあります。
