---
title: GitHub Terms for Additional Products and Features
redirect_from:
  - /github/site-policy/github-additional-product-terms
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

Version Effective Date: May 26, 2021

When you use GitHub, you may be given access to lots of additional products and features ("Additional Products and Features"). Because many of the Additional Products and Features offer different functionality, specific terms for that product or feature may apply in addition to your main agreement with us—the GitHub Terms of Service, GitHub Corporate Terms of Service, GitHub General Terms, or Microsoft volume licensing agreement (each, the "Agreement"). Below, we've listed those products and features, along with the corresponding additional terms that apply to your use of them.

By using the Additional Products and Features, you also agree to the applicable GitHub Terms for Additional Products and Features listed below. A violation of these GitHub terms for Additional Product and Features is a violation of the Agreement. Capitalized terms not defined here have the meaning given in the Agreement.

**For Enterprise users**
- **GitHub Enterprise Cloud** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, Codespaces, Dependabot Preview, Learning Lab, Octoshift, Packages and Pages.

- **GitHub Enterprise Server** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, Connect, Dependabot Preview, Learning Lab, Octoshift, Packages, Pages and SQL Server Images.

- **GitHub AE** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, {% if currentVersion == "github-ae@next" %}Connect, {% endif %}Dependabot Preview, Octoshift, Packages and Pages.

### アクション
GitHubアクションでは、カスタムソフトウェア開発のライフサイクルにわたるワークフローをGitHubリポジトリに直接作成することができます。 Actions is billed on a usage basis. [Actionsのドキュメント](/actions)には、計算量やストレージ容量 (アカウントのプランによって異なる)、およびActionsの使用分数の監視方法や利用限度の設定方法などの詳細情報が記載されています。

ActionsおよびActionsのサービスに含まれるあらゆる要素は、本「契約」、[「GitHub利用規定」](/github/site-policy/github-acceptable-use-policies)、および[「Actionsのドキュメンテーション」](/actions/reference/usage-limits-billing-and-administration)に記載されているサービスの制限に反して利用してはなりません。 また、アクションは次の用途には使用しないでください。
- クリプトマイニング;
- 当社サーバーを使用して、何らかのサービス、デバイス、データ、アカウントまたはネットワークを妨害すること、またはこれらに不正アクセスするかあるいはこれを試みること ([GitHub Bug Bounty Program](https://bounty.github.com) により許可されている場合を除く)、
- 商用目的でアクションまたはアクションの要素を提供するスタンドアロンまたは統合型のアプリケーションまたはサービスのプロビジョニング、
- ユーザに与えるメリットと釣り合わない負荷をサーバーにかける行為 (たとえば、Actionsをコンテンツ配信ネットワークやサーバーレスアプリケーションの一部として利用してはなりません。ただし、メリットが低くても、負荷も低い場合は問題ありません。)、
- gitHubアクションが使用されるリポジトリに関連するソフトウェアプロジェクトの製造、テスト、デプロイ、公開に関連しないその他の行為。

このような使用制限違反や、GitHubアクションの悪用を防ぐために、GitHubはGitHubアクションの使用を監視する場合があります。 GitHub Actionsを不正利用した場合には、ジョブが停止されたり、GitHub Actionsの使用が制限されたり、本「利用規約」を侵害するような方法でActionsを実行するために作成されたリポジトリが無効になったりすることもあります。


### Advanced Security
GitHub makes extra security features available to customers under an Advanced Security license. These features include code scanning, secret scanning, and dependency review. The [Advanced Security documentation](/github/getting-started-with-github/about-github-advanced-security) provides more details.

Advanced Security is licensed on a "Unique Committer" basis. 「ユニークコミッター」とは、GitHub Enterprise、GitHub Enterprise Cloud、GitHub Enterprise Server、またはGitHub AEのライセンスを付与されており、直近90日間にGitHub Advanced Securityの何らかの機能を有効化してコードのコミットを行ったユーザのことです。 お客様の各「ユニークコミッター」ごとに、GitHub Advanced Securityの「ユーザライセンス」を取得する必要があります。 GitHub Advanced Securityは、お客様によりまたはお客様のために開発されたコードベースにおいてのみ使用できます。 For GitHub Enterprise Cloud users, some Advanced Security features also require the use of GitHub Actions.

### Advisory Database
The GitHub Advisory Database allows you to browse or search for vulnerabilities that affect open source projects on GitHub.

_当社へのライセンス許可_

当社には、GitHub Advisory Databaseへのコントリビューションを[National Vulnerability Database](https://nvd.nist.gov/)などのパブリックドメインデータセットに提出するための法的権利、並びに、セキュリティ研究者、オープンソースコミュニティ、業界、および公衆が使用するためのオープンタームに基づいてGitHub Advisory Databaseをライセンス付与するための法的権利が必要です 。 あなたは、[Creative Commons Zeroライセンス](https://creativecommons.org/publicdomain/zero/1.0/)の下でGitHub Advisory Databaseへのコントリビューションをリリースすることに同意するものとします。

_GitHub Advisory Databaseのライセンス_

GitHub Advisory Databaseは、[Creative Commons Attribution 4.0ライセンス](https://creativecommons.org/licenses/by/4.0/)の下でライセンスされています。 帰属条件は、<https://github.com/advisories>のGitHub Advisory Databaseまたは使用される個々のGitHub Advisory Databaseレコード（<https://github.com/advisories>で始まる）にリンクすることで満たすことができます。

### Connect
With GitHub Connect, you can share certain features and data between your GitHub Enterprise Server {% if currentVersion == "github-ae@next" %}or GitHub AE {% endif %}instance and your GitHub Enterprise Cloud organization or enterprise account on GitHub.com. In order to enable GitHub Connect, you must have at least one (1) account on GitHub Enterprise Cloud or GitHub.com, and one (1) licensed instance of GitHub Enterprise Server{% if currentVersion == "github-ae@next" %} or GitHub AE{% endif %}. Your use of GitHub Enterprise Cloud or GitHub.com through Connect is governed by the terms under which you license GitHub Enterprise Cloud or GitHub.com. Use of Personal Data is governed by the [GitHub Privacy Statement](/github/site-policy/github-privacy-statement).

### Dependabot Preview
You can use Dependabot to keep the packages you use updated to the latest versions. Dependabot Previewの使用には、別の[利用規約](https://dependabot.com/terms)および[プライバシーポリシー](https://dependabot.com/privacy)が適用されます。

### Learning Lab
GitHub Learning Lab offers free interactive courses that are built into GitHub with instant automated feedback and help.

*Course Materials.* GitHub owns course materials that it provides and grants you a worldwide, non-exclusive, limited-term, non-transferable, royalty-free license to copy, maintain, use and run such course materials for your internal business purposes associated with Learning Lab use.

Open source license terms may apply to portions of source code provided in the course materials.

You own course materials that you create and grant GitHub a worldwide, non-exclusive, perpetual, non-transferable, royalty-free license to copy, maintain, use, host, and run such course materials.

The use of GitHub course materials and creation and storage of your own course materials do not constitute joint ownership to either party's respective intellectual property.

Use of Personal Data is governed by the [GitHub Privacy Statement](/github/site-policy/github-privacy-statement).

### npm
npm is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. npm is the registry of record for the JavaScript ecosystem. The npm public registry is free to use but customers are billed if they want to publish private packages or manage private packages using teams. The [npm documentation](https://docs.npmjs.com/) includes details about the limitation of account types and how to manage [private packages](https://docs.npmjs.com/about-private-packages) and [organizations](https://docs.npmjs.com/organizations). Acceptable use of the npm registry is outlined in the [open-source terms](https://www.npmjs.com/policies/open-source-terms). There are supplementary terms for both the npm [solo](https://www.npmjs.com/policies/solo-plan) and [org](https://www.npmjs.com/policies/orgs-plan) plans. The npm [Terms of Use](https://www.npmjs.com/policies/terms) apply to your use of npm.

### Octoshift
Octoshift is a framework for exporting data from other sources to be imported to the GitHub platform. Octoshift is provided “AS-IS”.

### Packages
GitHub Packagesはソフトウェアパッケージのホスティングサービスであり、ソフトウェアパッケージをプライベートもしくはパブリックでホストでき、パッケージをプロジェクト中で依存関係として使えるようになります GitHub Packagesは、使用量に基づいて課金されます。 [Packagesのドキュメント](/packages/learn-github-packages/introduction-to-github-packages)には、帯域幅やストレージ容量 (アカウントのプランによって異なる)、およびPackagesの使用量の監視方法や利用限度の設定方法などの詳細情報が記載されています。 Packagesの帯域幅使用量は[「GitHub利用規定」](/github/site-policy/github-acceptable-use-policies)によって制限されます。

### ページ

各「アカウント」には、[GitHub Pagesの静的ホスティングサービス](/github/working-with-github-pages/about-github-pages)へのアクセス権があります。 GitHub Pages is intended to host static web pages, but primarily as a showcase for personal and organizational projects.

GitHub Pagesは、オンラインビジネス、eコマースサイト、主に商取引の円滑化またはサービスとしての商用ソフトウェアの提供 (SaaS) のいずれかを目的とする、その他のウェブサイトを運営するための無料のウェブホスティングサービスとしての使用を意図したものではなく、またそのような使用を許可するものでもありません。 ページでは、寄付のボタンやクラウドファンディングのリンクなど、収益化の行為が一部認められています。

#### a. 帯域幅と利用限度
GitHub Pagesは、特定の帯域幅を対象とし、利用限度が適用されるため、一定以上の高帯域の利用には適していない場合があります。 詳細は、「[GitHub Pagesのガイドライン](/github/working-with-github-pages/about-github-pages)」を参照してください。

#### b. 禁止される用途
GitHub Pagesの禁止される用途には以下が含まれます。
- 法律違反、あるいはそれ以外で当社の「[利用規約](/github/site-policy/github-terms-of-service)」、「[利用規定](/github/site-policy/github-acceptable-use-policies)」、または「[コミュニティガイドライン](/github/site-policy/github-community-guidelines)」に反するコンテンツまたは活動
- 暴力的または脅迫的なコンテンツまたは活動
- 過剰な自動一括活動 (スパム送信など)
- GitHub ユーザまたは GitHub サービスを危険にさらす活動
- 攻略法詐欺
- 性的・わいせつなコンテンツ
- 自分の素性またはサイトの目的を誤って表現しているコンテンツ

お客様の利用または用途がこれらのカテゴリに該当するかどうかについて質問がある場合は、[GitHub Support](https://support.github.com/contact)または[GitHub Premium Support](https://premium.githubsupport.com/)へお問い合わせください。 GitHubは、責任を負うことなくGitHubの任意のサブドメインを取得する権利を常に有します。

### Sponsorsプログラム

GitHub Sponsorsにより、開発者コミュニティが依存しているオープンソースプロジェクトの設計、構築、維持に携わる人々や Organization を、GitHubで直接、経済的に支援できます。 スポンサード開発者になるには、[GitHub Sponsorsプログラムの追加条項](/github/site-policy/github-sponsors-additional-terms)に同意する必要があります。

### SQL Server Images

お客様は、Linuxファイル用のMicrosoft SQL Server Standard Editionコンテナ (「SQL Server Images」) をダウンロードできます。 「ソフトウェア」の使用権が終了した場合は、SQL Server Imagesをアンインストールする必要があります。 Microsoft Corporation may disable SQL Server Images at any time.
