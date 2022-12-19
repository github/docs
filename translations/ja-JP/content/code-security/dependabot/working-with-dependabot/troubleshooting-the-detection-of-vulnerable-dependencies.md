---
title: 脆弱性のある依存関係の検出のトラブルシューティング
intro: '{% data variables.product.product_name %} によって報告された依存関係の情報が期待したものと異なる場合、いくつかの考慮するポイントと、様々な確認項目があります。'
shortTitle: Troubleshoot vulnerability detection
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Troubleshooting
  - Errors
  - Security updates
  - Dependencies
  - Vulnerabilities
  - CVEs
  - Repositories
ms.openlocfilehash: 78ab86bf3314717a1f79b858496c4eb9fa323819
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106534'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.result-discrepancy %}

## 一部の依存関係がないように見えるのはなぜですか？

{% data variables.product.prodname_dotcom %} は、他のツールとは異なる方法で依存関係データを生成および表示します。 したがって、依存関係を特定するために別のツールを使用している場合は、ほぼ確実に異なる結果が表示されます。 次に例を示します。

*   {% data variables.product.prodname_advisory_database %} は、{% data variables.product.prodname_dotcom %} が脆弱性のある依存関係{% ifversion GH-advisory-db-supports-malware %}とマルウェア{% endif %}を識別するために使用するデータ ソースの 1 つです。 これは、{% data variables.product.prodname_dotcom %} の一般的なパッケージ エコシステムのセキュリティ アドバイザリがキュレーションされた無料のデータベースです。 これには、{% data variables.product.prodname_security_advisories %} から {% data variables.product.prodname_dotcom %} に直接報告されたデータと、公式フィードおよびコミュニティソースの両方が含まれます。 このデータは {% data variables.product.prodname_dotcom %} によってレビューおよびキュレーションされ、虚偽または実行不可能な情報が開発コミュニティと共有されないようにします。 {% data reusables.security-advisory.link-browsing-advisory-db %}
*   依存関係グラフは、ユーザのリポジトリ内のすべての既知のパッケージマニフェストファイルを解析します。 たとえば、npm の場合、_package-lock.json_ ファイルを解析します。 リポジトリのすべての依存関係とパブリック依存関係のグラフを作成します。 これは、依存関係グラフを有効にし、誰かがデフォルトブランチにプッシュしたときに発生します。また、サポートされているマニフェスト形式に変更を加えるコミットが含まれています。 詳細については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」および「[依存関係グラフのトラブルシューティング](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)」を参照してください。
*   {% data variables.product.prodname_dependabot %} は、マニフェストファイルを含むデフォルトブランチへのプッシュをスキャンします。 新しいアドバイザリが追加されると、既存のすべてのリポジトリがスキャンされ、影響を受けるリポジトリごとにアラートが生成されます。 {% data variables.product.prodname_dependabot_alerts %} は、アドバイザリごとに 1 つのアラートを作成するのではなく、リポジトリ レベルで集約されます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。
*   {% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dependabot_security_updates %} は、リポジトリ内の脆弱性のある依存関係に関するアラートを受け取ったときにトリガーされます。 可能な場合、{% data variables.product.prodname_dependabot %} はリポジトリ内でプルリクエストを作成して、脆弱性を回避するために必要な最小限の安全なバージョンに脆弱性のある依存関係をアップグレードします。 詳細については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」と「[{% data variables.product.prodname_dependabot %} エラーのトラブルシューティング](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)」を参照してください。
  
    {% endif %}{% data variables.product.prodname_dependabot %} は、スケジュールに従ってではなく、何か変更があった場合にリポジトリをスキャンします。 スキャンがトリガーされるのは、たとえば、新しい依存関係が追加されたとき ({% data variables.product.prodname_dotcom %} はプッシュのたびにこれをチェックします)、または新しいアドバイザリがデータベースに追加され{% ifversion ghes or ghae %}、{% data variables.location.product_location %} に同期され{% endif %}たときです。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-insecure-dependencies)」を参照してください。

## {% data variables.product.prodname_dependabot_alerts %} は、マニフェストとロックファイルの安全でない依存関係にのみ関連していますか?

{% data variables.product.prodname_dependabot_alerts %} は、推移的な依存関係を含め、更新する必要のある依存関係についてアドバイスします。この場合、バージョンはマニフェストまたはロックファイルから判別できます。 {% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dependabot_security_updates %} は、{% data variables.product.prodname_dependabot %} が依存関係を直接 "修正" できる場合、つまり以下のような場合にのみ変更を提案します。
* マニフェストまたはロックファイルで明示的に宣言されている直接依存関係
* ロックファイルで宣言されている推移的な依存関係{% endif %}

**チェック**: リポジトリのマニフェストまたはロックファイル内で指定されていないコンポーネントに対する、キャッチされていない脆弱性はありますか?

## 一部のエコシステムで {% data variables.product.prodname_dependabot_alerts %} が生成されないのはなぜですか?

{% data variables.product.prodname_dependabot_alerts %} は、高品質でアクションにつながるデータを提供できるエコシステムのセットに対してサポートされています。 {% data variables.product.prodname_advisory_database %}、依存関係グラフ、{% ifversion fpt or ghec %}{% data variables.product.prodname_dependabot %} のセキュリティ更新プログラム、{% endif %}および {% data variables.product.prodname_dependabot_alerts %} のキュレーションされたアドバイザリは、Java の Maven、JavaScript の npm と Yarn、.NET の NuGet、Python の pip、Ruby の RubyGems、PHP の Composer など、いくつかのエコシステムに対して提供されます。 今後も、より多くのエコシステムのサポートを追加していきます。 サポートされているパッケージ エコシステムの概要については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」を参照してください。

セキュリティ アドバイザリは、その他のエコシステムに対しても存在するかもしれないことに注意してください。 レビューされていないセキュリティ アドバイザリの情報は、特定のリポジトリの保守担当者によって提供されます。 このデータは {% data variables.product.prodname_dotcom %} によってキュレーションされません。 {% data reusables.security-advisory.link-browsing-advisory-db %}

**チェック**: キャッチされていない脆弱性は、サポートされていないエコシステムに適用されますか?

## {% data variables.product.prodname_dependabot %} は、何年も前から知られている脆弱性に対してアラートを生成しますか？

{% data variables.product.prodname_advisory_database %} は 2019 年 11 月にリリースされ、2017 年からサポートされているエコシステムのセキュリティ リスクのアドバイザリを含めるために当初にバックフィルされました。 データベースに CVE を追加するときは、新しい CVE のキュレーションと、新しいバージョンのソフトウェアに影響を与える CVE を優先します。

古い脆弱性に関するいくつかの情報は、特にこれらの CVE が特に広範囲に及ぶ場合に利用可能ですが、一部の古い脆弱性は {% data variables.product.prodname_advisory_database %} に含まれていません。 データベースに含める必要のある特定の古い脆弱性がある場合は、{% data variables.contact.contact_support %} にお問い合わせください。 

**チェック**: キャッチされていない脆弱性の公開日は、National Vulnerability Database で 2017 年より前ですか?

## {% data variables.product.prodname_advisory_database %} が公開された脆弱性データのサブセットを使用するのはなぜですか？

一部のサードパーティツールは、人間によるチェックまたはフィルタが行われていない未キュレートの CVE データを使用しています。 これは、タグ付けや重要度のエラー、またはその他の品質に問題のある CVE により、わずらわしく有用性の低いアラートが頻出するということです。

{% data variables.product.prodname_dependabot %} は {% data variables.product.prodname_advisory_database %} で厳選されたデータを使用するため、アラートの数は少なくなる可能性があります。ただし、受信するアラートは正確で関連性があるものです。

{% ifversion fpt or ghec %}
## 安全でない依存関係ごとに個別のアラートが生成されますか？

依存関係に複数の脆弱性がある場合、アドバイザリとマニフェストのレベルで脆弱性ごとにアラートが生成されます。

![異なるマニフェストを持つ同じパッケージからの 2 つのアラートを示す {% data variables.product.prodname_dependabot_alerts %} タブのスクリーンショット。](/assets/images/help/repository/dependabot-alerts-view.png)

従来の {% data variables.product.prodname_dependabot_alerts %} は、同じ依存関係のすべての脆弱性を含む 1 つの集約アラートにグループ化されました。 従来の {% data variables.product.prodname_dependabot %} アラートへのリンクに移動すると、その依存パッケージとマニフェストの脆弱性を表示するためにフィルター処理された {% data variables.product.prodname_dependabot_alerts %} タブにリダイレクトされます。

![従来の {% data variables.product.prodname_dependabot %} アラートに移動して、フィルター処理されたアラートを示す {% data variables.product.prodname_dependabot_alerts %} タブのスクリーンショット。](/assets/images/help/repository/legacy-dependabot-alerts-view.png)

{% data variables.product.prodname_dotcom %} の {% data variables.product.prodname_dependabot_alerts %} の数は、アラートの合計数、つまり依存関係の数ではなく、脆弱性の数を示します。

**チェック**: 表示されている合計に不一致がある場合は、アラートの数と依存関係の数を比較していないかどうかを確認してください。 また、フィルター処理されたアラートのサブセットではなく、すべてのアラートを表示していることを確認します。
{% endif %}

{% ifversion fpt or ghec or ghes %}
## Dependabot では特定の依存関係を無視できますか?

構成ファイル内の特定の依存関係を無視するように {% data variables.product.prodname_dependabot %} を構成できます。これにより、それらの依存関係に関するセキュリティとバージョンの更新が防止されます。 セキュリティ更新プログラムのみを使用したい場合は、構成ファイルで既定の動作をオーバーライドする必要があります。 詳細については、バージョンの更新がアクティブ化されないようにする方法について「[構成ファイルで既定の動作をオーバーライドする](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#overriding-the-default-behavior-with-a-configuration-file)」を参照してください。 依存関係を無視する方法については、「[`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)」を参照してください。{% endif %}

## 参考資料

- 「[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」
- 「[{% data variables.product.prodname_dependabot_alerts %} の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)」
- 「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」
- 「[依存関係グラフのトラブルシューティング](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)」{% ifversion fpt or ghec or ghes %}
- 「[{% data variables.product.prodname_dependabot %} エラーのトラブルシューティング](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)」{% endif %}
