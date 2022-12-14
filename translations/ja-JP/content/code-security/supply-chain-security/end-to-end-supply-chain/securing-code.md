---
title: サプライ チェーンのコードをセキュリティで保護するためのベスト プラクティス
shortTitle: Securing code
allowTitleToDifferFromFilename: true
intro: サプライ チェーンの中心、つまり記述するコードと依存するコードを保護する方法に関するガイダンスです。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 9fa10b05cfeadb4e2cde37829e703fc527571c67
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184005'
---
## このガイドについて

このガイドでは、コードのセキュリティを向上させるために行うことができる最も影響が大きい変更について説明します。 各セクションで、セキュリティを向上させるためにプロセスに対して行うことができる変更の概要を示します。 変更は影響が大きい順に示されます。

## リスクとは

開発プロセスの主なリスクは次のとおりです。

- 攻撃者が悪用する可能性がある、セキュリティの脆弱性を含む依存関係の使用。
- 攻撃者がリソースへのアクセスに使用できる、認証資格情報またはトークンの漏洩。
- 攻撃者が悪用する可能性がある、脆弱性の自身のコードへの取り込み。

これらのリスクによって、リソースとプロジェクトが攻撃を受け入れるようになります。また、それらのリスクが、作成したパッケージを使用するすべてのユーザーに直接引き継がれます。 次のセクションでは、これらのリスクに対して自身とユーザーを保護する方法について説明します。

## 依存関係の脆弱性管理プログラムを作成する

依存関係の脆弱性管理プログラムを作成ことで、依存するコードをセキュリティで保護できます。 概要としては次を保証するプロセスが含める必要があります。

1. 依存関係のインベントリを作成します。

1. セキュリティ脆弱性が依存関係に含まれたときに把握します。
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
1. pull request に依存関係のレビューを適用します。{% endif %}

1. その脆弱性がコードに及ぼす影響を評価し、実行するアクションを決定します。

### 自動インベントリ生成

最初の手順として、依存関係の完全なインベントリを作成することをお勧めします。 リポジトリの依存関係グラフに、サポートされているエコシステムの依存関係が表示されます。 依存関係をチェックインする場合、または他のエコシステムを使用する場合は、これを補完するために、サードパーティ製ツールのデータを使用したり、依存関係を手動で指定したりする必要があります。 詳細については、「[依存関係グラフの概要](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)」を参照してください。

### 依存関係の脆弱性の自動検出

{% data variables.product.prodname_dependabot %} は、依存関係を監視して、既知の脆弱性が含まれる場合に通知することで役立ちます。 {% ifversion fpt or ghec or ghes %}さらに、依存関係をセキュアなバージョンに更新するための pull request を {% data variables.product.prodname_dependabot %} が自動的に生成できるようにすることもできます。{% endif %}詳しくは、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)」{% ifversion fpt or ghec or ghes %}および「[Dependabot のセキュリティ更新プログラムについて](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)」{% endif %}を参照してください。
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
### pull request の脆弱性の自動検出

{% data variables.product.prodname_dependency_review_action %} は pull request に対する依存関係のレビューを適用するため、pull request によってリポジトリに脆弱なバージョンの依存関係が導入されるかどうかを簡単に確認できます。 脆弱性が検出された場合、{% data variables.product.prodname_dependency_review_action %} によって pull request のマージをブロックできます。 詳しい情報については、「[依存関係レビューの適用](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#dependency-review-enforcement)」を参照してください。{% endif %} 
    

### 脆弱な依存関係によるリスク露出の評価

脆弱な依存関係 (ライブラリやフレームワークなど) を使用していることが判明した場合は、プロジェクトの露出レベルを評価し、実行するアクションを決定する必要があります。 通常、脆弱性は、影響がどれほど深刻であるかを示す重大度スコアを使用して報告されます。 重大度スコアは指針として役立ちますが、コードに対する脆弱性の影響を完全に示すことはできません。

コードに対する脆弱性の影響を評価するには、ライブラリの使用方法を検討し、実際にシステムにもたらされるリスクの程度を判断する必要もあります。 仮に、この脆弱性が使用しない機能に含まれているのであれば、影響を受けるライブラリを更新し、通常のリリース サイクルを続行することができます。 または、仮に、コードが重大な危険にさらされているのであれば、影響を受けるライブラリを更新し、更新されたビルドをすぐに出荷する必要があります。 この決定はシステムでライブラリを使用している方法によって異なり、それを行うために必要な知識があるのは自分だけです。

## 通信トークンをセキュリティで保護する

多くの場合、コードはネットワーク経由で他のシステムと通信する必要があり、認証のためにシークレット (パスワードや API キーなど) が必要です。 システムが作動するためにはこれらのシークレットにアクセスする必要がありますが、ソース コードにはシークレットを含めないことをお勧めします。 これは、多くのユーザーがアクセス権を持つリポジトリではなく{% ifversion not ghae %}、パブリック リポジトリにとって重要である場合に特に重要です{% endif %}。

### リポジトリにコミットされたシークレットの自動検出

{% note %}

**注:** {% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

プロバイダーが多い {% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} パートナーは、シークレットがパブリック リポジトリにいつコミットまたは格納されたかを自動的に検出して、プロバイダーに通知します。これにより、プロバイダーはアカウントのセキュリティを確保するために適切なアクションを実行することができます。 詳細については、「[パートナー パターンの{% data variables.product.prodname_secret_scanning %}について](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)」を参照してください。
{% endif %}

{% ifversion fpt %} {% data reusables.secret-scanning.fpt-GHAS-scans %} {% elsif ghec %} 組織が {% data variables.product.prodname_GH_advanced_security %} を使用している場合、組織が所有するすべてのリポジトリで{% data variables.product.prodname_secret_scanning_GHAS %}を有効にすることができます。 また、カスタム パターンを定義して、リポジトリ、組織、またはエンタープライズ レベルで追加のシークレットを検出することもできます。 詳細については、「[{% data variables.product.prodname_secret_scanning_GHAS %}について](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security)」を参照してください。
{% else %} {% data variables.product.prodname_secret_scanning %}を構成して、多くのサービス プロバイダーによって発行されたシークレットを確認し、それらが検出されたときに通知できます。 また、カスタム パターンを定義して、リポジトリ、組織、またはエンタープライズ レベルで追加のシークレットを検出することもできます。 詳細については、「[シークレット スキャンについて](/code-security/secret-scanning/about-secret-scanning)」と「[シークレット スキャン パターン](/code-security/secret-scanning/secret-scanning-patterns)」を参照してください。
{% endif %}

### {% data variables.product.product_name %} で使用するシークレットのストレージをセキュリティで保護する

{% ifversion fpt or ghec %} コード以外に、他の場所でシークレットを使用する必要がある可能性があります。 たとえば、{% data variables.product.prodname_actions %} ワークフロー、{% data variables.product.prodname_dependabot %}、または自身の {% data variables.product.prodname_github_codespaces %} 開発環境が、他のシステムと通信できるようにする場合です。 シークレットを安全に格納して使用する方法の詳細については、「[アクションでの暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」、「[Dependabot の暗号化されたシークレットの管理](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」、「[codespace の暗号化されたシークレットの管理](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」を参照してください。
{% endif %}

{% ifversion ghes or ghae %}コード以外に、他の場所でシークレットを使用する必要がある可能性があります。 たとえば、{% data variables.product.prodname_actions %} ワークフロー{% ifversion ghes %}または {% data variables.product.prodname_dependabot %} {% endif %}が他のシステムと通信できるようにする場合です。 シークレットを安全に格納して使用する方法について詳しくは、「[アクションでの暗号化されたシークレット](/actions/security-guides/encrypted-secrets){% ifversion ghes %}」および「[Dependabot の暗号化されたシークレットの管理](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」{% else %}」{% endif %}を参照してください。{% endif %}

## 脆弱なコーディング パターンをリポジトリから除外する

{% note %}

**注:** {% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### pull request レビュー プロセスを作成する

マージの前にすべての pull request がレビューおよびテストされるようにして、コードの品質とセキュリティを向上させることができます。 {% data variables.product.prodname_dotcom %} には、レビューとマージのプロセスを制御するために使用できる多くの機能があります。 作業を開始するには、「[保護されたブランチについて](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)」を参照してください。

### コードの脆弱なパターンをスキャンする

多くの場合、セキュアでないコード パターンをレビュー担当者が見つけるのは困難です。 コードでのシークレットのスキャンに加え、セキュリティの脆弱性に関連するパターンがないかを確認できます。 たとえば、メモリセーフではない関数や、インジェクションの脆弱性につながる可能性があるユーザー入力のエスケープもれです。 {% data variables.product.prodname_dotcom %} には、コードのスキャンの方法とタイミングの両方にアプローチするいくつかの異なる方法が用意されています。 作業を開始するには、「[コード スキャンについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)」を参照してください。

## 次の手順

- 「[エンドツーエンドのサプライ チェーンのセキュリティ保護](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)」

- 「[アカウントをセキュリティで保護するためのベスト プラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)」

- 「[ビルド システムをセキュリティで保護するためのベスト プラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)」
