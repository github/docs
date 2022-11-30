---
title: 脆弱性のある依存関係の検出のトラブルシューティング
intro: '{% data variables.product.product_name %} によって報告された依存関係の情報が期待したものと異なる場合、いくつかの考慮するポイントと、様々な確認項目があります。'
shortTitle: トラブルシューティングの検出
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/troubleshooting-the-detection-of-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - Security
---
{% data variables.product.product_name %} によって報告された依存関係の検出結果は、他のツールから返される結果とは異なる場合があります。 これには理由があり、{% data variables.product.prodname_dotcom %} がプロジェクトの依存関係をどのように決定するかを理解しておくと便利です。

### 一部の依存関係がないように見えるのはなぜですか？

{% data variables.product.prodname_dotcom %} は、他のツールとは異なる方法で依存関係データを生成および表示します。 したがって、依存関係を特定するために別のツールを使用している場合は、ほぼ確実に異なる結果が表示されます。 次のことを考慮してください。

*   {% data variables.product.prodname_advisory_database %} は、{% data variables.product.prodname_dotcom %} が脆弱性のある依存関係を識別するために使用するデータソースの 1 つです。 これは、{% data variables.product.prodname_dotcom %} の一般的なパッケージエコシステムの脆弱性情報がキュレーションされた無料のデータベースです。 これには、{% data variables.product.prodname_security_advisories %} から {% data variables.product.prodname_dotcom %} に直接報告されたデータと、公式フィードおよびコミュニティソースの両方が含まれます。 このデータは {% data variables.product.prodname_dotcom %} によってレビューおよびキュレーションされ、虚偽または実行不可能な情報が開発コミュニティと共有されないようにします。 {% data reusables.security-advisory.link-browsing-advisory-db %}
*   依存関係グラフは、ユーザのリポジトリ内のすべての既知のパッケージマニフェストファイルを解析します。 たとえば、npm の場合、_package-lock.json_ ファイルを解析します。 リポジトリのすべての依存関係とパブリック依存関係のグラフを作成します。 これは、依存関係グラフを有効にし、誰かがデフォルトブランチにプッシュしたときに発生します。また、サポートされているマニフェスト形式に変更を加えるコミットが含まれています。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。
*   {% data variables.product.prodname_dependabot %} は、マニフェストファイルを含むデフォルトブランチへのプッシュをスキャンします。 新しい脆弱性レコードが追加されると、既存のすべてのリポジトリがスキャンされ、脆弱性のあるリポジトリごとにアラートが生成されます。 {% data variables.product.prodname_dependabot_alerts %} は、脆弱性ごとに 1 つのアラートを作成するのではなく、リポジトリレベルで集約されます。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。
*   {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dependabot_security_updates %} are triggered when you receive an alert about a vulnerable dependency in your repository. 可能な場合、{% data variables.product.prodname_dependabot %} はリポジトリ内でプルリクエストを作成して、脆弱性を回避するために必要な最小限の安全なバージョンに脆弱性のある依存関係をアップグレードします。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」および「[{% data variables.product.prodname_dependabot %} エラーのトラブルシューティング](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)」を参照してください。

    {% endif %}{% data variables.product.prodname_dependabot %} doesn't scan repositories for vulnerable dependencies on a schedule, but rather when something changes. For example, a scan is triggered when a new dependency is added ({% data variables.product.prodname_dotcom %} checks for this on every push), or when a new vulnerability is added to the advisory database{% if currentVersion ver_gt "enterprise-server@2.22" %} and synchronized to {% data variables.product.prodname_ghe_server %}{% endif %}. 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-vulnerable-dependencies)」を参照してください。

### 一部のエコシステムの脆弱性アラートが表示されないのはなぜですか？

{% data variables.product.prodname_dotcom %} では、脆弱性アラートのサポートを、高品質で実用的なデータを提供できる一連のエコシステムに限定しています。 Curated vulnerabilities in the {% data variables.product.prodname_advisory_database %}, the dependency graph, {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dependabot %} security updates, {% endif %}and {% data variables.product.prodname_dependabot %} alerts are provided for several ecosystems, including Java’s Maven, JavaScript’s npm and Yarn, .NET’s NuGet, Python’s pip, Ruby's RubyGems, and PHP’s Composer. 今後も、より多くのエコシステムのサポートを追加していきます。 サポートされているパッケージエコシステムの概要については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」を参照してください。

It's worth noting that {% data variables.product.prodname_dotcom %} Security Advisories may exist for other ecosystems. セキュリティアドバイザリの情報は、特定のリポジトリのメンテナによって提供されます。 このデータは、サポートされているエコシステムの情報と同じ方法でキュレーションされていません。 {% if currentVersion == "free-pro-team@latest" %}For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."{% endif %}

**チェック**: 未捕捉の脆弱性は、サポートされていないエコシステムに適用されますか？

### 依存関係グラフは、マニフェストとロックファイルの依存関係のみを検索しますか？

依存関係グラフには、環境で明示的に宣言されている依存関係に関する情報が含まれています。 つまり、マニフェストまたはロックファイルで指定されている依存関係です。 依存関係グラフには、通常、マニフェストファイル内の依存関係の依存関係を調べることにより、ロックファイルで指定されていない場合でも、推移的な依存関係も含まれます。

{% data variables.product.prodname_dependabot_alerts %} は、推移的な依存関係を含め、更新する必要のある依存関係についてアドバイスします。この場合、バージョンはマニフェストまたはロックファイルから判別できます。 {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dependabot_security_updates %} only suggest a change where {% data variables.product.prodname_dependabot %} can directly "fix" the dependency, that is, when these are:
* マニフェストまたはロックファイルで明示的に宣言されている直接依存関係
* Transitive dependencies declared in a lockfile{% endif %}

依存関係グラフには、「寛容な」依存関係は含まれていません。 「寛容な」依存関係は、パッケージマネージャーのマニフェストまたはロックファイルで参照されるのではなく、別のソースからコピーされ、リポジトリに直接またはアーカイブ内でチェックインされる個々のファイル（ZIP ファイルや JAR ファイルなど）です。

**チェック**: リポジトリのマニフェストまたはロックファイル内で指定されていないコンポーネントに対する未捕捉の脆弱性はありますか？

### 依存関係グラフは、変数を使用して指定された依存関係を検出しますか？

依存関係グラフは、マニフェストが {% data variables.product.prodname_dotcom %} にプッシュされるときにマニフェストを分析します。 したがって、依存関係グラフはプロジェクトのビルド環境にアクセスできないため、マニフェスト内で使用される変数を解決できません。 マニフェスト内で変数を使用して名前、またはより一般的には依存関係のバージョンを指定する場合、その依存関係は依存関係グラフに含まれません。

**チェック**: 見つからない依存関係は、名前またはバージョンに変数を使用してマニフェストで宣言されていますか？

### 依存関係グラフのデータに影響する制限はありますか？

はい、依存関係グラフの制限には 2 つのカテゴリがあります。

1. **処理制限**

    これらは {% data variables.product.prodname_dotcom %} 内に表示される依存関係グラフに影響を与え、{% data variables.product.prodname_dependabot_alerts %} が作成されないようにします。

    サイズが 0.5 MB を超えるマニフェストは、Enterprise アカウントに対してのみ処理されます。 他のアカウントの場合、0.5 MB を超えるマニフェストは無視され、{% data variables.product.prodname_dependabot_alerts %} は作成されません。

    デフォルト設定では、{% data variables.product.prodname_dotcom %} はリポジトリごとに 20 個を超えるマニフェストを処理しません。 {% data variables.product.prodname_dependabot_alerts %} は、この制限を超えるマニフェストに対しては作成されません。 制限を増やす必要がある場合は、{% data variables.contact.contact_support %} にお問い合わせください。

2. **表示制限**

    これらは、{% data variables.product.prodname_dotcom %} 内の依存関係グラフに表示される内容に影響します。 ただし、作成された {% data variables.product.prodname_dependabot_alerts %} には影響しません。

    リポジトリの依存関係グラフの依存関係ビューには、100 個のマニフェストのみが表示されます。 通常、これは上記の処理制限よりも大幅に高いので十分です。 処理制限が100 個を超える状況でも、{% data variables.product.prodname_dotcom %} 内に表示されていないマニフェストに対して {% data variables.product.prodname_dependabot_alerts %} が作成されます。

**チェック**: 0.5 MB を超えるマニフェストファイル、または多数のマニフェストがあるリポジトリに見つからない依存関係はありませんか？

### {% data variables.product.prodname_dependabot %} は、何年も前から知られている脆弱性に対してアラートを生成しますか？

{% data variables.product.prodname_advisory_database %} は 2019 年 11 月にリリースされ、2017 年からサポートされているエコシステムの脆弱性情報を含めるために当初にバックフィルされました。 データベースに CVE を追加するときは、新しい CVE のキュレーションと、新しいバージョンのソフトウェアに影響を与える CVE を優先します。

古い脆弱性に関するいくつかの情報は、特にこれらの CVE が特に広範囲に及ぶ場合に利用可能ですが、一部の古い脆弱性は {% data variables.product.prodname_advisory_database %} に含まれていません。 データベースに含める必要のある特定の古い脆弱性がある場合は、{% data variables.contact.contact_support %} にお問い合わせください。

**チェック**: 未捕捉の脆弱性の公開日は、National Vulnerability Database で 2017 年より前ですか？

### {% data variables.product.prodname_advisory_database %} が公開された脆弱性データのサブセットを使用するのはなぜですか？

一部のサードパーティツールは、人間によるチェックまたはフィルタが行われていない未キュレートの CVE データを使用しています。 これは、タグ付けや重要度のエラー、またはその他の品質に問題のある CVE により、わずらわしく有用性の低いアラートが頻出するということです。

{% data variables.product.prodname_dependabot %} は {% data variables.product.prodname_advisory_database %} で厳選されたデータを使用するため、アラートの数は少なくなる可能性があります。ただし、受信するアラートは正確で関連性があるものです。

{% if currentVersion == "free-pro-team@latest" %}
### 依存関係の脆弱性ごとに個別のアラートが生成されますか？

依存関係に複数の脆弱性がある場合、脆弱性ごとに 1 つのアラートではなく、その依存関係に対して 1 つの集約アラートのみが生成されます。

{% data variables.product.prodname_dependabot_alerts %} の {% data variables.product.prodname_dotcom %} の数は、アラートの数、つまり脆弱性の数ではなく、脆弱性のある依存関係の合計数を示します。

![{% data variables.product.prodname_dependabot_alerts %} ビュー](/assets/images/help/repository/dependabot-alerts-view.png)

クリックしてアラートの詳細を表示すると、アラートに含まれている脆弱性の数を確認できます。

![{% data variables.product.prodname_dependabot %} アラートに対する複数の脆弱性](/assets/images/help/repository/dependabot-vulnerabilities-number.png)

**チェック**: 表示されている合計に不一致がある場合は、アラート番号と脆弱性番号を比較していないかどうか確認してください。
{% endif %}

### 参考リンク

- 「[脆弱性のある依存関係に対するアラートについて](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」
- [リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"{% if currentVersion == "free-pro-team@latest" %}
- "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
