---
title: GitHub 追加製品および機能の利用規約
redirect_from:
  - /github/site-policy/github-additional-product-terms
  - /github/site-policy/github-terms-for-additional-products-and-features
  - /github/site-policy-deprecated/github-connect-addendum-to-the-github-enterprise-license-agreement
  - /articles/github-com-connection-addendum-to-the-github-enterprise-license-agreement
  - /articles/github-connect-addendum-to-the-github-enterprise-license-agreement
  - /github/site-policy/github-connect-addendum-to-the-github-enterprise-license-agreement
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

Version Effective Date: August 10, 2021

GitHub を利用する際、数多くの追加製品や機能 (「追加製品および機能」) にもアクセス権を与えられることがあります。 「追加製品および機能」の多くはさまざまな機能を提供するため、当社との主な契約、すなわち「GitHub 利用規約」、「GitHub 企業向け利用規約」、「GitHub 一般規約」、Microsoft ボリュームライセンス契約 (それぞれ「契約」) に加えて、製品や機能に特定の規約が適用される場合があります。 以下に、こうした製品や機能と、その利用に対して適用される追加の規約を示します。

「追加製品および機能」を利用することにより、お客様は以下に挙げた該当する「GitHub 追加製品および機能の利用規約」にも同意することとなります。 「追加製品および機能の GitHub 利用規約」に違反することは、「契約」に違反することにもなります。 かぎ括弧に括られた用語のうち、ここで定義されていないものについては、「契約」に示された意味を持つものとします。

**Enterprise ユーザ向け**
- **GitHub Enterprise Cloud** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, Codespaces, Dependabot Preview, GitHub Enterprise Importer, Learning Lab, Packages, and Pages.

- **GitHub Enterprise Server** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, Connect, Dependabot Preview, GitHub Enterprise Importer, Learning Lab, Packages, Pages, and SQL Server Images.

- **GitHub AE** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, Connect, Dependabot Preview, GitHub Enterprise Importer, Packages and Pages.

## Actions
GitHubアクションでは、カスタムソフトウェア開発のライフサイクルにわたるワークフローをGitHubリポジトリに直接作成することができます。 Actionsは、使用量に基づいて課金されます。 [Actionsのドキュメント](/actions)には、計算量やストレージ容量 (アカウントのプランによって異なる)、およびActionsの使用分数の監視方法や利用限度の設定方法などの詳細情報が記載されています。

Actions and any elements of the Actions product or service may not be used in violation of the Agreement, the [GitHub Acceptable Use Polices](/github/site-policy/github-acceptable-use-policies), or the GitHub Actions service limitations set forth in the [Actions documentation](/actions/reference/usage-limits-billing-and-administration). Additionally, regardless of whether an Action is using self-hosted runners, Actions should not be used for:
- クリプトマイニング;
- disrupting, gaining, or attempting to gain unauthorized access to, any service, device, data, account, or network (other than those authorized by the [GitHub Bug Bounty program](https://bounty.github.com));
- the provision of a stand-alone or integrated application or service offering the Actions product or service, or any elements of the Actions product or service, for commercial purposes;
- ユーザに与えるメリットと釣り合わない負荷をサーバーにかける行為 (たとえば、Actionsをコンテンツ配信ネットワークやサーバーレスアプリケーションの一部として利用してはなりません。ただし、メリットが低くても、負荷も低い場合は問題ありません。)、
- if using GitHub-hosted runners, any other activity unrelated to the production, testing, deployment, or publication of the software project associated with the repository where GitHub Actions are used.

このような使用制限違反や、GitHubアクションの悪用を防ぐために、GitHubはGitHubアクションの使用を監視する場合があります。 Misuse of GitHub Actions may result in termination of jobs, restrictions in your ability to use GitHub Actions, disabling of repositories created to run Actions in a way that violates these Terms, or in some cases, suspension or termination of your GitHub account.

*Use for Development and Testing*

You may only access and use GitHub Actions to develop and test your application(s). Only one licensed user may access a virtual machine provided by Actions at any time.

*Authorized Developer*

You appoint GitHub as your authorized developer with respect to Apple software included in Actions. GitHub is responsible for complying with the terms for any such software included in Actions and will keep confidential any confidential information of Apple accessed as part of Actions.

*Third Party Repository Service Access*

If you grant GitHub access to your third-party repository service account(s), you authorize GitHub to scan the account(s), including the contents of your Public and Private Repositories, for purposes of providing GitHub Actions.

*Self-Hosted Runners on GitHub Actions*

If you use self-hosted runners, you have the ability to turn off automatic updates but GitHub reserves the right to override your choice for critical security updates.

## Advanced Security
Advanced Security ライセンスを取得しているお客様に対して、GitHub は追加セキュリティ機能を提供しています。 追加機能にはコードスキャン、シークレットスキャン、依存関係レビューが含まれます。 詳細は [Advanced Security のドキュメント](/github/getting-started-with-github/about-github-advanced-security)をご覧ください。

Advanced Security のライセンスは、「ユニークコミッター」ごとに付与されます。 A "Unique Committer" is a licensed user of GitHub Enterprise, GitHub Enterprise Cloud, GitHub Enterprise Server, or GitHub AE, who has made a commit in the last 90 days to any repository with any GitHub Advanced Security functionality activated. お客様の各「ユニークコミッター」ごとに、GitHub Advanced Securityの「ユーザライセンス」を取得する必要があります。 GitHub Advanced Securityは、お客様によりまたはお客様のために開発されたコードベースにおいてのみ使用できます。 GitHub Enterprise Cloud ユーザの場合、一部のAdvanced Securityセキュリティ機能にはGitHub Actionsを使用する必要もあります。

## Advisory Database
GitHub Advisory Databaseを使用すると、GitHubのオープンソースプロジェクトに影響を与える脆弱性を閲覧および検索できます。

_当社へのライセンス許可_

当社には、GitHub Advisory Databaseへのコントリビューションを[National Vulnerability Database](https://nvd.nist.gov/)などのパブリックドメインデータセットに提出するための法的権利、並びに、セキュリティ研究者、オープンソースコミュニティ、業界、および公衆が使用するためのオープンタームに基づいてGitHub Advisory Databaseをライセンス付与するための法的権利が必要です 。 あなたは、[Creative Commons Zeroライセンス](https://creativecommons.org/publicdomain/zero/1.0/)の下でGitHub Advisory Databaseへのコントリビューションをリリースすることに同意するものとします。

_GitHub Advisory Databaseのライセンス_

GitHub Advisory Databaseは、[Creative Commons Attribution 4.0ライセンス](https://creativecommons.org/licenses/by/4.0/)の下でライセンスされています。 帰属条件は、<https://github.com/advisories>のGitHub Advisory Databaseまたは使用される個々のGitHub Advisory Databaseレコード（<https://github.com/advisories>で始まる）にリンクすることで満たすことができます。

## Codespaces
_Note: The github.dev service, available by pressing `.` on a repo or navigating directly to github.dev, is governed by [GitHub's Beta Terms of service](/github/site-policy/github-terms-of-service#j-beta-previews)._

GitHub Codespaces enables you to develop code directly from your browser using the code within your GitHub repository. Codespaces and any elements of the Codespaces service may not be used in violation of the Agreement or the Acceptable Use Policies. Additionally, Codespaces should not be used for:
- クリプトマイニング;
- using our servers to disrupt, or to gain or to attempt to gain unauthorized access to any service, device, data, account or network (other than those authorized by the GitHub Bug Bounty program);
- the provision of a stand-alone or integrated application or service offering Codespaces or any elements of Codespaces for commercial purposes;
- any activity that places a burden on our servers, where that burden is disproportionate to the benefits provided to users (for example, don't use Codespaces as a content delivery network, as part of a serverless application, or to host any kind of production-facing application); or
- any other activity unrelated to the development or testing of the software project associated with the repository where GitHub Codespaces is initiated.

In order to prevent violations of these limitations and abuse of GitHub Codespaces, GitHub may monitor your use of GitHub Codespaces. Misuse of GitHub Codespaces may result in termination of your access to Codespaces, restrictions in your ability to use GitHub Codespaces, or the disabling of repositories created to run Codespaces in a way that violates these Terms.

Codespaces allows you to load extensions from the Microsoft Visual Studio Marketplace (“Marketplace Extensions”) for use in your development environment, for example, to process the programming languages that your code is written in. Marketplace Extensions are licensed under their own separate terms of use as noted in the Visual Studio Marketplace, and the terms of use located at https://aka.ms/vsmarketplace-ToU. GitHub makes no warranties of any kind in relation to Marketplace Extensions and is not liable for actions of third-party authors of Marketplace Extensions that are granted access to Your Content. Codespaces also allows you to load software into your environment through devcontainer features. Such software is provided under the separate terms of use accompanying it. サードパーティアプリケーションを、お客様は自らの責任ににおいて利用するものとします。

The generally available version of Codespaces is not currently available for U.S. government customers. アメリカ合衆国の祝日 government customers may continue to use the Codespaces Beta Preview under separate terms. See [Beta Preview terms](/github/site-policy/github-terms-of-service#j-beta-previews).

## Connect
With GitHub Connect, you can share certain features and data between your GitHub Enterprise Server or GitHub AE instance and your GitHub Enterprise Cloud organization or enterprise account on GitHub.com. In order to enable GitHub Connect, you must have at least one (1) account on GitHub Enterprise Cloud or GitHub.com, and one (1) licensed instance of GitHub Enterprise Server or GitHub AE. Connect経由でのGitHub Enterprise CloudまたはGitHub.comの利用は、GitHub Enterprise CloudまたはGitHub.comのライセンスに基づく規約が適用されます。 「個人データ」の利用には、「[GitHubのプライバシーについての声明](/github/site-policy/github-privacy-statement)」が適用されます。

## GitHub Enterprise Importer
Importer is a framework for exporting data from other sources to be imported to the GitHub platform. Importer is provided “AS-IS”.

## Learning Lab
GitHub Learning Lab では、GitHub に組み込まれたインタラクティブなコースを無料で提供しており、自動の即時フィードバックやヘルプも備わっています。

*コース資料。*GitHubは、自らが提供するコース資料の所有者であり、Learning Labの使用に関連した内部的な業務目的で、かかるコース資料を複製、保守、使用、および実行するための世界的で非独占的、期間限定、譲渡不可の無料ライセンスをお客様に付与します。

コース資料で提供されるソースコードの一部には、オープンソースライセンスの条項が適用される場合があります。

お客様が作成するコースはお客様が所有し、GitHubに対して、かかるコース資料を複製、保守、使用、および実行するための世界的で非独占的、期間限定、譲渡不可の無料ライセンスをGitHubに付与します。

GitHubコースの使用、ならびにお客様ご自身によるコース資料の作成および保管は、いずれかの当事者による相手方の知的所有権の共同所有権を構成するものではありません。

「個人データ」の利用には、「[GitHubのプライバシーについての声明](/github/site-policy/github-privacy-statement)」が適用されます。

## npm
npm はソフトウェアパッケージのホスティングサービスであり、ソフトウェアパッケージをプライベートまたパブリックでホストでき、パッケージをプロジェクト中で依存関係として使えるようになります。 npm はJavaScriptエコシステムのためのレコードのレジストリです。 npm 公開レジストリの利用は無料ですが、プライベートパッケージを公開したり、チームを使用してプライベートパッケージを管理したい場合には有料となります。 [npm ドキュメント](https://docs.npmjs.com/)にはアカウントの種類の制限や、[プライベートパッケージ](https://docs.npmjs.com/about-private-packages)および[Organization](https://docs.npmjs.com/organizations)の管理方法についての詳細が記載されています。 npm registryレジストリの利用規程は、[オープンソース規約](https://www.npmjs.com/policies/open-source-terms)に概説されています。 また、npm [solo](https://www.npmjs.com/policies/solo-plan)と[org](https://www.npmjs.com/policies/orgs-plan)の両方のプランに補足条項があります。 npmの利用には、npm[利用規約](https://www.npmjs.com/policies/terms)が適用されます。

## Packages
GitHub Packagesはソフトウェアパッケージのホスティングサービスであり、ソフトウェアパッケージをプライベートもしくはパブリックでホストでき、パッケージをプロジェクト中で依存関係として使えるようになります GitHub Packagesは、使用量に基づいて課金されます。 [Packagesのドキュメント](/packages/learn-github-packages/introduction-to-github-packages)には、帯域幅やストレージ容量 (アカウントのプランによって異なる)、およびPackagesの使用量の監視方法や利用限度の設定方法などの詳細情報が記載されています。 Packagesの帯域幅使用量は[「GitHub利用規定」](/github/site-policy/github-acceptable-use-policies)によって制限されます。

## Pages

各「アカウント」には、[GitHub Pagesの静的ホスティングサービス](/github/working-with-github-pages/about-github-pages)へのアクセス権があります。 GitHub Pages は静的Webページをホストするためのサービスですが、主に個人および組織のプロジェクトのためのショーケースの役割をはたしています。

GitHub Pagesは、オンラインビジネス、eコマースサイト、主に商取引の円滑化またはサービスとしての商用ソフトウェアの提供 (SaaS) のいずれかを目的とする、その他のウェブサイトを運営するための無料のウェブホスティングサービスとしての使用を意図したものではなく、またそのような使用を許可するものでもありません。 ページでは、寄付のボタンやクラウドファンディングのリンクなど、収益化の行為が一部認められています。

_帯域幅と利用限度_

GitHub Pagesは、特定の帯域幅を対象とし、利用限度が適用されるため、一定以上の高帯域の利用には適していない場合があります。 Please see our [GitHub Pages limits](/github/working-with-github-pages/about-github-pages) for more information.

_禁止される用途_

GitHub Pages may not be used in violation of the Agreement, the GitHub [Acceptable Use Policies](/github/site-policy/github-acceptable-use-policies), or the GitHub Pages service limitations set forth in the [Pages documentation](/pages/getting-started-with-github-pages/about-github-pages#guidelines-for-using-github-pages).

If you have questions about whether your use or intended use falls into these categories, please contact [GitHub Support](https://support.github.com/contact?tags=docs-policy). GitHubは、責任を負うことなくGitHubの任意のサブドメインを取得する権利を常に有します。

## Previews

Previews means software, online services and additional products and features provided for preview, evaluation, demonstration or trial purposes, or pre-release versions of those, such as alpha, beta, or early access. If your Agreement does not include terms and conditions that address Previews, then the following terms apply. GitHub grants a limited right to use a non-production instance of the Preview. Previews are provided “AS-IS”, “WITH ALL FAULTS” and “AS AVAILABLE”. GitHub may change or discontinue Previews at any time without notice. Any information we give you about a private Preview will be considered GitHub’s confidential information. If you choose to provide comments or suggestions about a Preview, we may use that feedback for any purpose without obligation of any kind. GitHub’s maximum liability is limited to direct damages up to US $5,000. GitHub has no obligation to defend, indemnify, or hold you harmless for claims brought by third parties arising from your use of Previews.

## Sponsorsプログラム

GitHub Sponsorsにより、開発者コミュニティが依存しているオープンソースプロジェクトの設計、構築、維持に携わる人々や Organization を、GitHubで直接、経済的に支援できます。 スポンサード開発者になるには、[GitHub Sponsorsプログラムの追加条項](/github/site-policy/github-sponsors-additional-terms)に同意する必要があります。

## SQL Server Images

お客様は、Linuxファイル用のMicrosoft SQL Server Standard Editionコンテナ (「SQL Server Images」) をダウンロードできます。 「ソフトウェア」の使用権が終了した場合は、SQL Server Imagesをアンインストールする必要があります。 Microsoft Corporation は、「SQL Server Images」をいつでも無効にすることができます。
