---
title: Dependabot エラーのトラブルシューティング
intro: '{% data variables.product.prodname_dependabot %} は、依存関係を更新するためのプルリクエストを生成できない場合があります。 エラーをレビューして {% data variables.product.prodname_dependabot %} をブロック解除できます。'
shortTitle: Troubleshoot errors
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Pull requests
  - Troubleshooting
  - Errors
  - Dependencies
ms.openlocfilehash: 21b7c2b2e6c613d4443b54404dfc120bd8ac00e2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109799'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %} エラーについて

{% data reusables.dependabot.pull-request-introduction %}

何らかが {% data variables.product.prodname_dependabot %} によるプルリクエストの発行を妨げる場合、エラーとして報告されます。

## {% data variables.product.prodname_dependabot_security_updates %} でエラーを調査する

{% data variables.product.prodname_dependabot %} が {% data variables.product.prodname_dependabot %} アラートを修正するためのプルリクエストの作成をブロックされると、アラートにエラーメッセージを投稿します。 {% data variables.product.prodname_dependabot_alerts %} ビューには、未解決のアラートのリストが表示されます。 アラート ビューにアクセスするには、リポジトリの **[Security]\(セキュリティ\)** タブで **[{% data variables.product.prodname_dependabot_alerts %}]** をクリックします。 脆弱性のある依存関係を修正するプルリクエストが生成された場合、アラートにはそのプルリクエストへのリンクが含まれます。

![プルリクエストリンクを示す {% data variables.product.prodname_dependabot_alerts %} ビュー](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

アラートに pull request リンクがない理由は、いくつかあります。

1. {% data variables.product.prodname_dependabot_security_updates %} がリポジトリに対して有効になっていない。
{% ifversion GH-advisory-db-supports-malware %}
1. アラートはマルウェアに関するものであり、安全なバージョンのパッケージはありません。
{% endif %}
1. アラートが、ロックファイルで明示的に定義されていない間接的または推移的な依存関係に対するものである。
1. エラーにより {% data variables.product.prodname_dependabot %} のプルリクエストの作成がブロックされました。

エラーによって {% data variables.product.prodname_dependabot %} によるプルリクエストの作成がブロックされた場合は、アラートをクリックしてエラーの詳細を表示できます。

## {% data variables.product.prodname_dependabot_version_updates %} でエラーを調査する

{% data variables.product.prodname_dependabot %} がエコシステムの依存関係を更新するためのプルリクエストの作成をブロックされると、マニフェストファイルにエラーアイコンを投稿します。 {% data variables.product.prodname_dependabot %} によって管理されるマニフェスト ファイルの一覧は、[{% data variables.product.prodname_dependabot %}] タブに表示されます。このタブにアクセスするには、リポジトリの **[Insights]\(インサイト\)** タブで **[Dependency graph]\(依存関係グラフ\)** をクリックし、 **[{% data variables.product.prodname_dependabot %}]** タブをクリックします。

![エラーを示す {% data variables.product.prodname_dependabot %} ビュー](/assets/images/help/dependabot/dependabot-tab-view-error.png)

{% ifversion fpt or ghec %}

マニフェスト ファイルのログ ファイルを表示するには、 **[Last checked TIME ago]\(最後のチェックは <時間> 前\)** リンクをクリックします。 エラー記号（上のスクリーンショットの Maven など）で示されているマニフェストのログファイルを表示すると、エラーも表示されます。

![{% data variables.product.prodname_dependabot %} バージョン更新エラーとログ ](/assets/images/help/dependabot/dependabot-version-update-error.png)

{% else %}

マニフェスト ファイルのログを表示するには、 **[Last checked TIME ago]\(最後のチェックは <時間> 前\)** リンクをクリックし、 **[View logs]\(ログの表示\)** をクリックします。

![{% data variables.product.prodname_dependabot %} バージョン更新エラーとログ ](/assets/images/enterprise/3.3/dependabot/dependabot-version-update-error.png)

{% endif %}

## {% data variables.product.prodname_dependabot %} エラーを理解する

セキュリティアップデートのプルリクエストは、脆弱性のある依存関係を、脆弱性の修正を含む最小バージョンにアップグレードします。 対照的に、バージョン更新のプルリクエストは、パッケージマニフェストおよび {% data variables.product.prodname_dependabot %} 設定ファイルで許可されている最新バージョンに依存関係をアップグレードするように動作します。 したがって、一部のエラーは 1 つの種類の更新に固有になります。

### {% data variables.product.prodname_dependabot %} が DEPENDENCY を脆弱でないバージョンに更新できない

**セキュリティ アップデートのみ。** {% data variables.product.prodname_dependabot %} は、このリポジトリの依存関係グラフの他の依存関係を壊さずに、脆弱性のある依存関係を安全なバージョンに更新するための pull request を作成することはできません。

依存関係を含むすべてのアプリケーションには、依存関係グラフ、つまり、アプリケーションが直接または間接的に依存するすべてのパッケージバージョンの有向非巡回グラフがあります。 依存関係が更新されるたびに、このグラフを解決する必要があります。解決しない場合、アプリケーションがビルドされません。 npm や RubyGems のように、エコシステムに深く複雑な依存関係グラフがある場合、エコシステム全体をアップグレードせずに単一の依存関係をアップグレードすることは不可能な場合があります。

この問題を回避する最善策としては、たとえばバージョン更新を有効化するなどして、最新のリリースバージョンで最新の状態に保つことです。 これにより、依存関係グラフを壊さない単純なアップグレードで 1 つの依存関係の脆弱性を解決できる可能性が高くなります。 詳しくは、「[{% data variables.product.prodname_dependabot %}の構成](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)」を参照してください。{% ifversion dependabot-security-updates-unlock-transitive-dependencies %}

### {% data variables.product.prodname_dependabot %} がアラートなしで依存関係を更新しようとする

**セキュリティ アップデートのみ。** {% data variables.product.prodname_dependabot %} は、すべてのエコシステムに対して脆弱な、明示的に定義された推移的な依存関係を更新します。 npm の場合、{% data variables.product.prodname_dependabot %} は、それが推移的な依存関係を修正する唯一の方法である場合、親依存関係も更新する pull request を発生させます。

たとえば、`1.0.1` に解決され、`B` バージョン `~1.0.0` への推移的な依存関係がある、`A` バージョン `~2.0.0` への依存関係があるプロジェクトなどです。
```
my project
|
--> A (2.0.0) [~2.0.0]
       |
       --> B (1.0.1) [~1.0.0]
```       
`B` バージョン `<2.0.0` に対してセキュリティの脆弱性がリリースされ、パッチが `2.0.0` で利用可能である場合、{% data variables.product.prodname_dependabot %} は `B` への更新を試みますが、脆弱性の低いバージョンのみが許可される `A` による制限があるため、更新できません。 この脆弱性を解決するために、{% data variables.product.prodname_dependabot %} は `B` の固定バージョンを使用できるようにする、依存関係 `A` の更新プログラムを検索します。 

{% data variables.product.prodname_dependabot %} は、ロックされた親と子両方の推移的な依存関係をアップグレードする pull request を自動的に生成します。{% endif %}

### 最新バージョンのオープンプルリクエストがすでに存在するため、{% data variables.product.prodname_dependabot %} を必要なバージョンに更新できない

**セキュリティ アップデートのみ。** この依存関係を更新するための pull request は既に開かれているため、{% data variables.product.prodname_dependabot %} で脆弱性のある依存関係を安全なバージョンに更新するための pull request は作成されません。 このエラーは、単一の依存関係で脆弱性が検出され、依存関係を最新バージョンに更新するためのオープンプルリクエストがすでに存在する場合に表示されます。

オープンプルリクエストを確認して、変更が安全であると確信したらすぐにマージするか、そのプルリクエストをクローズして新しいセキュリティアップデートプルリクエストをトリガーする、という 2 つのオプションがあります。 詳細については、「[{% data variables.product.prodname_dependabot %} のプル リクエストを手動でトリガーする](#triggering-a-dependabot-pull-request-manually)」を参照してください。

### {% data variables.product.prodname_dependabot %} が更新中にタイムアウトした

{% data variables.product.prodname_dependabot %} は、必要な更新を評価してプルリクエストを準備するために許可された最大時間よりも長く時間を要しました。 このエラーは、通常、多くのマニフェスト ファイルを含む大規模なリポジトリでのみ発生します。たとえば、数百の *package.json* ファイルを含む npm や yarn monorepo プロジェクトなどです。 Composer エコシステムの更新も評価に時間がかかり、タイムアウトする可能性があります。

これは対処が難しいエラーです。 バージョン更新がタイムアウトする場合は、`allow` パラメーターを使用して更新する最も重要な依存関係を指定するか、または `ignore` パラメーターを使用して更新から一部の依存関係を除外できます。 設定を更新すると、{% data variables.product.prodname_dependabot %} がバージョンの更新を確認し、利用可能な時間内にプルリクエストを生成できます。

セキュリティアップデートがタイムアウトする場合、たとえばバージョン更新を有効にするなどして依存関係を最新に保つことで、タイムアウトが発生する可能性を減らすことができます。 詳細については、「[{% data variables.product.prodname_dependabot_security_updates %} バージョンの更新の構成](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)」を参照してください。

### {% data variables.product.prodname_dependabot %} で追加のプルリクエストをオープンできない

{% data variables.product.prodname_dependabot %} が生成するオープンプルリクエスト数には制限があります。 上限に達すると、新しいプルリクエストはオープンされず、このエラーが報告されます。 エラーを解決する最善策として、複数のオープンプルリクエストを確認してマージします。

セキュリティアップデートとバージョン更新のプルリクエストには個別の制限があるため、オープンなバージョン更新のプルリクエストがセキュリティアップデートのプルリクエストの作成をブロックすることはできません。 セキュリティアップデートのプルリクエストの上限は 10 件です。 既定では、バージョン アップデートの上限は 5 件ですが、構成ファイルで `open-pull-requests-limit` パラメータを使用してこれを変更できます。 詳細については、「[dependabot.yml ファイルの構成オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)」を参照してください。

このエラーを解決する最善策として、既存のプルリクエストの一部をマージまたはクローズして、新しいプルリクエストを手動でトリガーします。 詳細については、「[{% data variables.product.prodname_dependabot %} のプル リクエストを手動でトリガーする](#triggering-a-dependabot-pull-request-manually)」を参照してください。

### {% data variables.product.prodname_dependabot %} が依存関係を解決またはアクセスできない

{% data variables.product.prodname_dependabot %} がリポジトリで依存関係のリファレンスを更新する必要があるかどうかを確認しようとしたが、1 つ以上のリファレンスファイルにアクセスできない場合、操作は失敗し、「{% data variables.product.prodname_dependabot %} は LANGUAGE 依存関係ファイルを解決できません」というエラーメッセージが表示されます。 API エラーの種類は `git_dependencies_not_reachable` です。

同様に、{% data variables.product.prodname_dependabot %} が依存関係が存在するプライベートパッケージレジストリにアクセスできない場合、次のエラーのいずれかが生成されます。

*   "Dependabot can't reach a dependency in a private package registry" (Dependabot はプライベート パッケージ レジストリ内の依存関係に到達できません)<br>
   (API エラーの種類: `private_source_not_reachable`)
*   "Dependabot can't authenticate to a private package registry" (Dependabot はプライベート パッケージ レジストリを認証できません)<br>
   (API エラーの種類: `private_source_authentication_failure`)
*   "Dependabot timed out while waiting for a private package registry" (プライベート パッケージ レジストリの待機中に Dependabot がタイムアウトしました)<br>
   (API エラーの種類: `private_source_timed_out`)
*   "Dependabot couldn't validate the certificate for a private package registry" (Dependabot はプライベート パッケージ レジストリの証明書を検証できませんでした)<br>
   (API エラーの種類: `private_source_certificate_failure`)

{% data variables.product.prodname_dependabot %} が依存関係のリファレンスを正常に更新できるようにするには、すべての依存関係のリファレンスがアクセス可能な場所でホストされていることを確認してください。 

**バージョンアップデートのみ。** {% data reusables.dependabot.private-dependencies-note %} さらに、 {% data variables.product.prodname_dependabot %} はすべてのパッケージマネージャーに対して、プライべートな {% data variables.product.prodname_dotcom %} 依存関係をサポートしません。 詳細については、「[GitHub Dependabot のバージョン アップデートについて](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)」を参照してください。

## {% data variables.product.prodname_dependabot %} のプルリクエストを手動でトリガーする

{% data variables.product.prodname_dependabot %} のブロックを解除すると、プルリクエストを作成するための新規の試行を手動でトリガーできます。

- **セキュリティ アップデート** — 修正したエラーを示す {% data variables.product.prodname_dependabot %} アラートを表示し、 **[Create {% data variables.product.prodname_dependabot %} security update]\({% data variables.product.prodname_dependabot %} のセキュリティ アップデートを作成する\)** をクリックします。
- **バージョン アップデート** — リポジトリの **[Insights]\(インサイト\)** タブで **[Dependency graph]\(依存関係グラフ\)** をクリックし、 **[Dependabot]** タブをクリックします。 **[Last checked *TIME* ago]\(最後のチェックは <時間> 前\)** をクリックして、バージョン アップデートの最後のチェックの間に {% data variables.product.prodname_dependabot %} によって生成されたログ ファイルを表示します。 **[更新プログラムのチェック]** をクリックします。

## 参考資料

- [依存関係グラフのトラブルシューティング](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)
- [脆弱性のある依存関係の検出のトラブルシューティング](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)
