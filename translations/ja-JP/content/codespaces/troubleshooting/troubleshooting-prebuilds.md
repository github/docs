---
title: プレビルドに関するトラブルシューティング
shortTitle: Codespaces prebuilds
intro: プレビルドを使用して、codespace の作成を高速化できます。 この記事では、プレビルドを使った一般的な問題のトラブルシューティング手順を示します。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 14c02804641eeb845c2b503eff92f38cac28d108
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147547989'
---
{% data variables.product.prodname_codespaces %} のプレビルドの詳細については、「[codespace のプレビルド](/codespaces/prebuilding-your-codespaces)」を参照してください。

## codespace がプレビルドから作成されたかどうかの確認

codespace を作成する際には、使用する仮想マシンの種類を選択できます。 仮想マシンの種類に対してプレビルドが使用可能な場合は、その横に "{% octicon "zap" aria-label="The zap icon" %} Prebuild ready \(プレビルド対応\)" が表示されます。

![使用可能なマシンの種類のリスト](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% data variables.product.prodname_codespaces %} エディターの基本設定を [{% data variables.product.prodname_vscode %} for Web] に設定しており、プレビルドが使用されている場合は、[codespace の設定] ページに "プレビルド codespace が見つかりました" というメッセージが表示されます。 

!["プレビルド codespace が見つかりました" というメッセージ](/assets/images/help/codespaces/prebuilt-codespace-found.png)

同様に、エディターの基本設定が [{% data variables.product.prodname_vscode_shortname %}] の場合、統合ターミナルには、新しい codespace を作成するときに、"リポジトリのプレビルド構成で定義されたプレビルド codespace を使用しています" というメッセージが含まれます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の既定のエディターを設定する](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)」をご覧ください。

codespace を作成した後、ターミナルで次の {% data variables.product.prodname_cli %} コマンドを実行して、プレビルドから作成されたかどうかを確認できます。

```shell{:copy}
gh api /user/codespaces/$CODESPACE_NAME --jq .prebuild
```

codespace がプレビルドを使用して作成された場合は、`true` が返されます。

{% data variables.product.prodname_cli %} (`gh`) がインストールされていない場合は、次のコマンドを使用できます。codespace がプレビルドから作成された場合は、`createFromPrebuild` が返されます。 

```shell{:copy}
cat /workspaces/.codespaces/shared/environment-variables.json | jq '.ACTION_NAME'
```

## "Prebuild Ready" ラベルが欠落している場合がある

プレビルドが有効なブランチから新しい codespace を作成する場合、コンピューターの種類を選択するためのダイアログ ボックスに "{% octicon "zap" aria-label="The zap icon" %} Prebuild Ready" ラベルが表示されないことがあります。 これは、プレビルドが現在使用できないことを意味します。

既定では、プレビルドが有効なブランチにプッシュするたびに、プレビルドが更新されます。 プッシュ操作に開発コンテナー構成への変更が含まれている場合は、更新中に、"{% octicon "zap" aria-label="The zap icon" %} Prebuild Ready \(プレビルド対応\)" ラベルがマシンの種類のリストから削除されます。 この期間も、プレビルドを使用せずに codespace を作成できます。 必要であれば、開発コンテナー構成ファイルを変更したときのみ、またはカスタム スケジュールで指定したときにのみプレビルドが更新されるように設定することで、リポジトリにプレビルドを使用できない場合を減らすことができます。 詳細については、「[プレビルドの構成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)」を参照してください。

ブランチがプレビルドに対して特に有効になっていない場合でも、プレビルドが有効なブランチから分岐された場合はプレビルドの利点が得られる可能性があります。 しかし、開発コンテナー構成がご利用のブランチで変更されたために、ベース ブランチの構成とは異なる場合、プレビルドはご利用のブランチで使用できなくなります。

特定のブランチに対して "{% octicon "zap" aria-label="The zap icon" %} Prebuild Ready" ラベルが表示されない場合の確認事項を以下に示します。

* このブランチのプレビルド構成が存在することを確認する。 リポジトリ管理者でない場合は、管理者に連絡して確認する必要があります。 
* プレビルド構成に自分のリージョンが含まれることを確認する。
* 開発コンテナー構成への変更が、最近、プレビルドが有効になったブランチにプッシュされたかどうかを確認する。 そうである場合は、通常、このプッシュに対してプレビルド ワークフローが実行されるまで待たないと、プレビルドを再び使用することはできません。
* 構成の変更が最近行われなかった場合は、リポジトリの **[アクション]** タブに移動し、ワークフロー リストの **{% octicon "codespaces" aria-label="The Codespaces icon" %} [{% data variables.product.prodname_codespaces %} プレビルド]** をクリックし、ブランチに対してプレビルド ワークフローが正常に実行されたことを確認します。 ワークフローの最新の実行が失敗し、これらの失敗した実行の 1 つ以上に開発コンテナー構成への変更が含まれていた場合、関連するブランチに対して使用可能なプレビルドはありません。 

## プレビルドを使って作った codespace で一部のリソースにアクセスできない

プレビルド構成の `devcontainer.json` 構成ファイルで、他のリポジトリへのアクセス許可が必要であることが指定されている場合、リポジトリ管理者は、プレビルド構成を作成または更新するときに、これらのアクセス許可を認可するように求められます。 管理者が要求されたすべてのアクセス許可を付与していない場合、プレビルドと、このプレビルドから作った codespace で問題が発生する可能性があります。 これは、このプレビルドに基づいて codespace を作るユーザーが、すべてのアクセス許可を付与するように求められ、"付与した" 場合でも起こります。

## プレビルドに対するワークフロー実行が失敗した場合のトラブルシューティング

プレビルド構成の `devcontainer.json` 構成ファイルが、他のリポジトリへのアクセス許可が必要であることを指定するように更新され、リポジトリ管理者がプレビルド構成にこれらのアクセス許可を認可するように求められなかった場合、プレビルド ワークフローが失敗する可能性があります。 何も変更せずに、プレビルド構成を更新してみてください。 **[更新]** をクリックして、認可ページが表示される場合は、要求されたアクセス許可が適切であることを確認し、適切であれば、要求を認可します。 詳しくは、「[プレビルドを管理する](/codespaces/prebuilding-your-codespaces/managing-prebuilds#editing-a-prebuild-configuration)」と「[codespace 内の他のリポジトリへのアクセスを管理する](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces#setting-additional-repository-permissions)」をご覧ください。

プレビルド構成に対するワークフロー実行が失敗する場合は、調査の間、一時的にプレビルド構成を無効にすることができます。 詳細については、「[プレビルドの管理](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration)」を参照してください。

## 参考資料

- [プレビルドの構成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)
- [プレビルドの管理](/codespaces/prebuilding-your-codespaces/managing-prebuilds)
