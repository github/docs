---
title: GitHub Codespaces の請求について
shortTitle: About billing
intro: '{% data variables.product.prodname_github_codespaces %} を使用するためのコストと、{% data variables.product.prodname_dotcom %} 個人用アカウントに含まれる月間使用量クォータについて説明します。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-github-codespaces.md
ms.openlocfilehash: 24410721878cd77d2528a4d9e8c91633725ce661
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179549'
---
## {% data variables.product.prodname_github_codespaces %} 価格

{% data reusables.codespaces.codespaces-free-for-personal-intro %}

次のすべてに該当する場合、料金は Organization または Enterprise に対して請求されます。

- codespace が開始されるリポジトリ (またはフォークされたリポジトリの場合は親リポジトリ) が Organization によって所有される。
- Organization は、リポジトリまたはリポジトリのフォークから作成された codespace に対して課金されるように構成されている。
- codespace を作成するユーザーが、Organization に属しているか、または Organization と提携する外部のコラボレーターであり、Organization は、このユーザーによる Organization 所有の codespace の使用分の料金を負担することを選択している。

それ以外の場合、{% data variables.product.prodname_github_codespaces %} の使用は、codespace を作成したユーザーの個人用アカウントに適用され、個人用アカウントに含まれる月間使用量の一部が消費されます。または、含まれているクォータを超えた場合、その使用量に応じてアカウントに課金されます。 

codespace の使用量に対して課金されるように Organization を構成する方法については、「[Organization の {% data variables.product.prodname_github_codespaces %} を有効にする](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)」を参照してください。 Organization および Enterprise アカウントの無料、Team、Enterprise プランには、{% data variables.product.prodname_github_codespaces %} の無料使用は含まれません。 

### 個人用アカウントに含まれる月間ストレージとコア時間

個人用アカウントには、次のストレージとコア時間の使用量が無料で含まれています。

| アカウント プラン | 1 か月あたりのストレージ | 1 か月あたりのコア時間 |
| ------------ | ----------------- | -------------------- |
| 個人用アカウント用の {% data variables.product.prodname_dotcom %} | 15 GB/月 | 120 |
| {% data variables.product.prodname_dotcom %} Pro                        | 20 GB/月 | 180 |

{% note %}

**注**:
- ストレージの GB/月という単位は時間ベースの測定値であり、1 GB/月は 1 GB のストレージを 1 か月間使用できます。 すべての codespace と prebuild によって使われているディスク領域が 1 時間に 1 回評価されて、現在の GB/月の使用量が再計算されます。 そのため、codespace と prebuild がある間は、GB/月の使用量が月を通して増加します。 たとえば、ストレージの合計が 15 GB で、1 か月の請求サイクルを通して変わらない場合は、半月の時点で 7.5 GB、月末の時点で 15 GB 使われます。 詳しくは、後の「[ストレージ使用量に対する課金](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage)」をご覧ください。
- "コア時間" は、含まれるコンピューティング使用量に対して使われるメジャーです。 コア時間を計算するには、codespace がアクティブになっていた時間数に次の料金表の乗数を掛けます。 基本的なマシンの種類の場合、乗数は、codespace をホストするマシン内のプロセッサ コアの数です。 たとえば、codespace に 2 コアのマシンを使用し、それが 1 時間アクティブな場合、2 コア時間使用したことになります。 8 コアのマシンを 1 時間使用すると、8 コア時間使用したことになります。 8 コアのマシンを 2 時間使用すると、16 コア時間使用したことになります。

{% endnote %}

含まれるクォータの 75%、90%、100% を使用すると、メールで通知されます。 通知は、{% data variables.product.prodname_vscode_shortname %} および {% data variables.product.prodname_vscode_shortname %} Web クライアント内の "トースト" メッセージにも表示されます。 メール通知は、必要に応じてオフにすることができます。 詳しい情報については、「[GitHub Codespaces の使用制限を管理する](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-usage-and-spending-limit-email-notifications)」を参照してください。

個人用アカウントで、含まれているストレージまたはコンピューティング使用量 (どちらか先に到達した方) をすべて使用し、使用制限が構成されていない場合、{% data variables.product.prodname_github_codespaces %} の使用はブロックされます。 現在の請求月中に {% data variables.product.prodname_github_codespaces %} を引き続き使用するには、支払い方法と使用制限を設定する必要があります。 含まれる使用量は、翌月の請求期間の開始時にリセットされます。 {% data variables.product.prodname_github_codespaces %} の使用がブロックされている間、ストレージには課金されません。 

当月の使用状況の詳細はいつでも表示できます。 詳細については、「[{% data variables.product.prodname_github_codespaces %} の使用状況を表示する](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)」を参照してください。

codespace の再開がブロックされ、codespace で行った変更の作業を続ける場合は、次のいずれかの方法を取ることができます。

- 支払い方法と、0 米ドルを超える使用制限を追加する。
- 変更を codespace からブランチにエクスポートする。 詳細については、「[ブランチへの変更のエクスポート](/codespaces/troubleshooting/exporting-changes-to-a-branch)」を参照してください。
- 含まれる月間使用量が翌月の請求期間の開始時にリセットされるまで待つ。 

含まれているストレージ使用量または含まれているコンピューティング使用量のいずれかをすべて使用し、支払い方法と使用制限を設定している場合、個人用アカウントによって所有されている codespace をさらに使用すると、含まれているクォータが残っていない使用量の種類に対して料金が発生します。 もう一方の種類の使用量については、含まれているクォータをすべて使用するまで課金されることはありません。

### 有料使用の料金

{% data variables.product.prodname_github_codespaces %} インスタンス ("コードスペース") では、アクティブな間はコンピューティング時間に対して、存在する間は codespace が占有するディスク領域の容量に対して料金が発生します。 次の表に示すように、コンピューティング コストは、codespace 用に選択したマシンの種類内のプロセッサ コアの数に比例します。 たとえば、16 コアのマシンで codespace を 1 時間使用する場合のコンピューティング コストは、2 コアのマシンの 8 倍になります。

| コンポーネント           | マシンの種類 | Unit of measure | 含まれる使用量の乗数 | Price |
| ------------------- | ------------ | --------------- | ------------------------- | ----- |
| Codespaces コンピューティング  |  2 コア      | 1 時間          | 2                         | $0.18 |
|                     |  4 コア      | 1 時間          | 4                         | $0.36 |
|                     |  8 コア      | 1 時間          | 8                         | $0.72 |
|                     |  16コア     | 1 時間          | 16                        | $1.44 |
|                     |  32コア     | 1 時間          | 32                        | $2.88 |
| Codespaces ストレージ  |  ストレージ     | 1 GB/月<sup>*</sup> | 該当なし                | $0.07 |

<sup>*</sup> 測定単位 GB/月の詳しい情報については、下記の「[ストレージ使用量に対する課金](#billing-for-storage-usage)」を参照してください。

Codespace のプレビルドを有効にすると、追加料金がかかります。 詳しい情報については、「[{% data variables.product.prodname_codespaces %} のプレビルドに対する課金](#billing-for-codespaces-prebuilds)」を参照してください。

## {% data variables.product.prodname_github_codespaces %} に対する課金について

{% data variables.product.prodname_github_codespaces %} は、コンピューティング時間と codespace で使用するストレージ領域の容量に応じて、米ドル (USD) で課金されます。 {% data reusables.codespaces.codespaces-monthly-billing %}

{% data variables.product.prodname_github_codespaces %} の請求は、アカウントの既存の支払い方法と領収書を共有します。 詳しい情報については、「[プランと請求日を表示する](/articles/viewing-your-subscriptions-and-billing-date)」を参照してください。

{% ifversion ghec %}Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプション ID を Enterprise アカウントに接続し、{% data variables.product.prodname_github_codespaces %} の使用を有効にして支払うことができます。 詳細については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

### コンピューティング使用量に対する課金
codespace のコンピューティング使用量は、その codespace がアクティブである時間の長さに、codespace のマシンの種類の料金表にある乗数を掛けたものです。 コンピューティング使用量の合計は、特定のアカウントに請求可能なすべての codespace で使用された時間を合計して計算されます。 これらの合計は、1 時間ごとに課金サービスに報告され、毎月請求されます。

たとえば、codespace が 1 時間 15 分アクティブである場合、コンピューティング コストは、マシンの種類によって決定される codespace の 1 時間あたりのコストに 1.25 を掛けたものになります。

コンピューティング使用量は、codespace を停止することで制御できます。 詳しい情報については、「[codespace の停止と開始](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)」を参照してください。 codespace は、構成可能な非アクティブ期間後に自動的に停止されます。 タイムアウト期間は、ユーザーによって、または Organization レベルで構成できます。 詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} のタイムアウト期間を設定する](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)」および「[アイドル タイムアウト期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)」を参照してください。

### ストレージ使用量に対する課金
{% data variables.product.prodname_github_codespaces %} に対する課金のために、ストレージは、アカウント内のすべての codespace とプレビルドで使用されるディスク領域で構成されます。 これには、クローンされたリポジトリ、構成ファイル、codespace に読み込まれたデータ (たとえば、リポジトリで実行されているソフトウェアの入出力など)、拡張機能など、codespace で使用されるすべてのファイルが含まれます。 ストレージは、codespace がアクティブであるか非アクティブであるかに関係なく、既存のすべての codespace に対して課金されます。ただし、含まれている使用量クォータが使い果たされたか、または使用制限に達したために使用がブロックされている期間を除きます。 codespace のストレージに対する課金は、codespace が削除されると終了します。

{% note %}

**注**: 

- 既定の開発コンテナー構成 (「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)」を参照) を使用する場合、既定のコンテナーは、使用済みストレージとしてカウントされません。 開発コンテナー構成と別の基本イメージを使用してカスタム コンテナーを作成する場合、コンテナーは使用済みストレージとしてカウントされます。
- 既定のイメージからコンテナーを再構築する場合、基本コンテナーは使用済みストレージとしてカウントされません。 その他の基本イメージの場合、基本コンテナーを含めて、codespace で消費されるすべてのストレージは、使用済みストレージとしてカウントされます。

{% endnote %}

codespace ストレージは、GB/月単位で報告されます。 請求月は、月中の所定の日から翌月の同日までです。 ほとんどの場合、月中の日は、現在の {% data variables.product.prodname_dotcom %} プランの開始日によって決まります。 ストレージ (GB/月) は、次のように計算されます。 1 時間に 1 回、現在アクティブな codespace と停止している codespace のすべてで使用されているストレージが評価されます。 次に、この数字を、現在の請求月内の時間数で除算します (`total storage size / hours this month`)。 結果は、その月の codespace ストレージの累計に加算されます。

たとえば、100 GB のストレージを使用する codespace が 1 つあり、1 時間存在している場合、1 か月 (30 日) に `100 / (24 * 30) = 0.1388` GB/月のストレージを使用したことになります。 30 日間の月に {% data variables.product.prodname_github_codespaces %} を使用した場合、3 日間存在していた 2 つの 100 GB のコードスペースが構成されている場合は、これらの codespace のストレージに関する時間単位の`24 * 3`レポートが作成され、合計 GB 月が提供されます`(24 * 3) * 200 / (24 * 30) = 20`。

各毎時レポートでは、前の 1 時間のストレージ使用量が秒単位で計算されます。 その結果、codespace が 60 分間完全に存在しなかった場合、ストレージの丸 1 時間分は請求されません。 月末に、{% data variables.product.prodname_dotcom %}はストレージ使用量を最も近いGBに丸めます。

Organization 所有者は次の作業を行うことができます。
- Organization の現在アクティブな codespace と停止されている codespace を一覧表示する。 詳しい情報については、「[Organization 内の codespace を一覧表示する](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)」を参照してください。 当月の {% data variables.product.prodname_github_codespaces %} のコストには、これらの codespace に加えて、当月のはじめに存在していたがその後削除された codespace のコストが含まれる場合があります。 
- 当月の当日までの Organization の {% data variables.product.prodname_github_codespaces %} コンピューティング使用量とストレージ使用量を確認する。 詳細については、「[{% data variables.product.prodname_github_codespaces %} の使用状況を表示する](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)」を参照してください。
- {% data variables.product.prodname_github_codespaces %} のコストを管理するように Organization の設定を構成する。 詳しい情報については、「[Organization 内の {% data variables.product.prodname_github_codespaces %} のコストを管理する](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)」を参照してください。

従量制サービスのコストを見積もるには、{% data variables.product.prodname_dotcom %} [料金計算ツール](https://github.com/pricing/calculator?feature=codespaces) を使用できます。

### {% data variables.product.prodname_codespaces %}プレビルドに対する支払い

{% data reusables.codespaces.prebuilds-definition %} 詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} のプレビルドについて](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)」を参照してください。

#### プレビルドの {% data variables.product.prodname_actions %} コスト

プレビルドは、{% data variables.product.prodname_dotcom %} でホストされるランナーで {% data variables.product.prodname_actions %} ワークフローを実行することによって作成および更新されます。 プレビルドの更新を自動的にトリガーする方法を構成できます。 詳しい情報については、「[プレビルドの構成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)」を参照してください。

他のワークフローと同様に、プレビルド ワークフローが実行されている間、アカウントに含まれている {% data variables.product.prodname_actions %} の分数を消費するか (残っている場合)、{% data variables.product.prodname_actions %} の分数に対して料金が発生します。 {% data variables.product.prodname_actions %} の分数の料金について詳しくは、「[{% data variables.product.prodname_actions %} に対する課金について](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」を参照してください。 プレビルドの作成または更新に伴う {% data variables.product.prodname_codespaces %} コンピューティング コストはありません。

プレビルド ワークフローとストレージの使用量を追跡するには、お使いのアカウントの使用状況レポートをダウンロードします。 詳細については、「[{% data variables.product.prodname_github_codespaces %} の使用状況を表示する](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)」を参照してください。

#### プレビルドのストレージ コスト

{% data variables.product.prodname_actions %} の分数に加えて、特定のリポジトリおよびリージョンの各プレビルド構成に関連付けられたプレビルドのストレージに対しても課金されます。 プレビルドのストレージは、codespace のストレージと同じレートで課金されます。

1 つのリージョン内のプレビルドのストレージ コストは、そのプレビルドから作成された 1 つの codespace を格納するために発生するストレージ コストはほぼ同じです。 たとえば、codespace の作成時に `updateContentCommand` コマンドと `postCreateCommand` コマンドを使用してより多くのファイルを開発コンテナーにダウンロードする場合、生成された codespace のストレージ コストは prebuild のコストを超える可能性があります。

プレビルド構成に関連付けられた合計ストレージは、次の要因によって異なります。

- GB あたりのストレージ料金。 上記の表を参照してください。
- 生成されたプレビルドのサイズ (GB 単位)。
- プレビルドを使用できるリージョンの数 (プレビルドのコピーが各リージョンに格納されるため)。
- 保持されているプレビルドの以前のバージョンの数。

このため、プレビルド構成によって生成されるプレビルドのストレージ コストは、`price per GB * size (GB) * regions * versions`として計算されます。

#### プレビルドのコストの制御

Actions 利用時間 (分) の消費を抑えるために、開発コンテナー構成ファイルを変更したときのみ、またはカスタム スケジュールで指定したときにのみ、プレビルドを更新するように設定することができます。 また、保持されている各プレビルドの以前のバージョンの数を調整することで、ストレージ使用量を管理することもできます。 詳しくは、「[事前ビルドを構成する](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)」をご覧ください。

プレビルドに関連付けられたストレージ コストを制限するには、選択されたリージョンのみでプレビルドを作成することを選択できます。また、保持される以前のバージョンのプレビルドの数を指定することもできます。 詳しくは、「[事前ビルドを構成する](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)」をご覧ください。

{% note %}

**注**: プレビルドは、請求月中に複数回更新される場合があります。 プレビルドの新しいバージョンは、以前のバージョンよりも大きい場合もあれば、小さい場合もあります。 これは、ストレージ料金に影響します。 請求月中のストレージを計算する方法の詳しい情報については、上記の「[ストレージ使用量に対する課金](#billing-for-storage-usage)」を参照してください。

{% endnote %}

#### プレビルドから作成された codespace のコスト

プレビルドを使用して作成された codespace の使用は、通常の codespace と同じレートで課金されます。

## 利用限度の設定

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

アカウントの使用制限の管理と変更について詳しくは、「[{% data variables.product.prodname_github_codespaces %} の使用制限の管理](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)」を参照してください。

{% data reusables.codespaces.exporting-changes %}

## Organization で所有する codespace のマシンの種類を制限する

既定では、codespace を作成するときに、有効なリソースが最も少ないマシンの種類が使われます。 ただし、よりリソースの多いマシンの種類をユーザーが選択できる場合があります。 これは、codespace を作成するとき、または既存の codespace のマシンの種類を変更するときに行うことができます。 詳しい情報については、「[リポジトリ用の codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)」および「[codespace のマシンの種類を変更する](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)」を参照してください。

リソース数の多いマシンの種類を選択した場合、前述のとおり、その codespace の 1 分あたりの料金に影響します。 

Organization 所有者は、Organization または Enterprise アカウントに課金される codespace 用にユーザーが選択できるマシンの種類を制限するポリシーを作成できます。 詳細については、「[コンピューターの種類へのアクセスの制限](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」を参照してください。

## フォークされたリポジトリでの支払いの扱い

アップストリーム (または親) リポジトリが、ユーザーが Organization のメンバーまたは外部コラボレーターとして Organization の codespace を使用することが許可されている Organization 内に存在する場合を除いて、フォークされたリポジトリから作成された codespace の使用は、そのユーザーの個人アカウントに課金されます。

たとえば、そのユーザーの codespace に対する課金を許可している組織のメンバーまたは外部コラボレーターについて考えてみましょう。 ユーザーが Organization 所有のプライベート リポジトリをフォークするアクセス許可を持っている場合、その後、Organization の費用で新しいリポジトリ用の codespace を作成して使用できます。 これは、Organization が親リポジトリの所有者であるためです。 Organization 所有者は、プライベート リポジトリ、フォークされたリポジトリ、したがって codespace へのユーザーのアクセス権を削除できることに注意してください。 Organization 所有者は、親ディレクトリを削除できます。これにより、フォークされたリポジトリも削除されます。 詳細については、「[リポジトリのフォーク ポリシーを管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)」を参照してください。

{% data reusables.codespaces.codespaces-disabling-org-billing %}

## リポジトリが別の Organization に移転された場合の課金の処理方法

使用量は、1 時間ごとに計算されます。 Organization の設定で Organization に対して課金することを許可している場合、Organization は、Organization が所有するリポジトリから作成された codespace の使用量に対して料金を支払います。 詳しくは、「[Organization での {% data variables.product.prodname_github_codespaces %} の有効化](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)」をご覧ください。 リポジトリが Organization から移転されると、それに応じて、そのリポジトリに関連付けられているすべての codespace の所有権と課金責任は変更されます。

## ユーザが削除されたときに生じること

Organizationもしくはリポジトリからユーザが削除されると、そのユーザのcodespaceは自動的に削除されます。 
