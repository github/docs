---
title: サプライチェーン中のコードの保護のベストプラクティス
shortTitle: コードの保護
allowTitleToDifferFromFilename: true
intro: サプライチェーンの中心である、あなたが書くコードと依存するコードの保護の方法に関するガイダンス。
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
---

## このガイドについて

このガイドは、コードのセキュリティを高めることができる、もっと影響の大きい変更について説明します。 各セクションは、セキュリティを改善するためにプロセスに加えることができる変更の概要を説明します。 影響の大きい変更から最初にリストされています。

## リスクとは何か？

開発プロセス中のキーとなるリスクは以下を含みます。

- 攻撃者が悪用できるセキュリティ脆弱性を持つ依存関係の利用。
- 攻撃者がリソースへのアクセスに利用できる認証情報やトークンの漏洩。
- 攻撃者が悪用できる脆弱性のコードへの導入。

これらのリスクによって、リソースやプロジェクトが攻撃に対してオープンになり、それらのリスクはあなたが作成するパッケージを使う人に直接渡ります。 以下のセクションは、あなた自身とあなたのユーザをこれらのリスクから保護する方法を説明します。

## 依存関係に対する脆弱性管理プログラムの作成

依存関係に対する脆弱性管理プログラムを作成することによって、依存するコードを保護できます。 高いレベルでは、これには以下を保証するプロセスが含まれていなければなりません。

1. 依存関係のインベントリの作成。

2. 依存関係にセキュリティ脆弱性がある場合に把握すること。

3. 自分のコードに対するその脆弱性のインパクトを評価し、行うべきアクションを判断すること。

### 自動的なインベントリの生成

最初のステップとして、依存関係の完全なインベントリを作成します。 リポジトリの依存関係グラフは、サポートされているエコシステムの依存関係が表示されます。 依存関係をチェックインするか、他のエコシステムを使うと、これをサードパーティのツールからのデータで補足するか、手動で依存関係をリストする必要があります。 詳しい情報については、「[依存関係グラフについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)」を参照してください。

### 依存関係内の脆弱性の自動検出

{% data variables.product.prodname_dependabot %}は、依存関係をモニタリングし、既知の脆弱性が含まれている場合に通知することによって助けてくれます。 {% ifversion fpt or ghec or ghes > 3.2 %}{% data variables.product.prodname_dependabot %}が依存関係をセキュアなバージョンに更新するのに必要なPull Requestを自動的に起こせるようにすることができます。{% endif %}詳しい情報については「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)」{% ifversion fpt or ghec or ghes > 3.2 %}及び「[Dependabotセキュリティアップデートについて](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)」{% endif %}を参照してください。

### 脆弱性のある依存関係からのリスクへの暴露の評価

たとえばライブラリやフレームワークなど、脆弱性のある依存関係を使っていることが判明した場合、プロジェクトの露出レベルを評価し、取るべきアクションを決定しなければなりません。 脆弱性は通常、その影響がどの程度重要になるかを示す重要度スコアとともに報告されます。 この重要度スコアは有益なガイドですが、コードに対する脆弱性の完全な影響を示しはしません。

コードに対する脆弱性の影響を評価するには、そのライブラリをどのように使っているかを考慮し、実際にどの程度のリスクがシステムにもたらされるかを判断する必要もあります。 その脆弱性はあなたが使用していない機能の一部かもしれず、影響されるライブラリをアップデートして通常のリリースサイクルを継続できるかもしれません。 あるいはあなたのコードはひどくリスクにさらされており、影響されているライブラリをアップデートしてすぐに更新されたビルドを出荷する必要があるかもしれません。 この判断は、そのライブラリをシステム中でどのように使っているかに依存するものであり、判断するための知識を持っているのはあなただけです。

## 通信トークンの保護

コードはしばしば、ネットワークを介して他のシステムと通信しなければならず、認証のためのシークレット（パスワードやAPIキーなど）を必要とします。 システムが実行されるためにはそれらのシークレットにアクセスできなければなりませんが、それらをソースコードには含めないのがベストプラクティスです。 これは特にパブリックリポジトリで重要ですが、多くの人々がアクセスするかもしれないプライベートリポジトリでも重要です。

### リポジトリのコミットされたシークレットの自動検出

{% note %}

**ノート:** {% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
{% data variables.product.prodname_dotcom %}は多くのプロバイダとパートナーになり、パブリックリポジトリにシークレットがコミットあるいは保存されたときに自動的に検出し、アカウントがセキュアな状態を保たれるように適切なアクションをプロバイダが取れるよう、プロバイダに通知します。 詳しい情報については「[パートナーパターンのための{% data variables.product.prodname_secret_scanning %}について](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)」を参照してください。
{% endif %}

{% ifversion fpt %}
{% data reusables.secret-scanning.fpt-GHAS-scans %}
{% elsif ghec %}
Organizationが{% data variables.product.prodname_GH_advanced_security %}を使っているなら、Organizationが所有するいずれのリポジトリでも{% data variables.product.prodname_secret_scanning_GHAS %}を有効化できます。 リポジトリ、Organization、Entepriseのレベルで、追加のシークレットを検出するためのカスタムパターンを定義することもできます。 詳しい情報については「[{% data variables.product.prodname_secret_scanning_GHAS %}について](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security)」を参照してください。
{% else %}
多くのサービスプロバイダが発行したシークレットをチェックし、検出されたときには通知してくれるよう{% data variables.product.prodname_secret_scanning %}を設定できます。 リポジトリ、Organization、Entepriseのレベルで、追加のシークレットを検出するためのカスタムパターンを定義することもできます。 詳しい情報については「[Secret scanningについて](/code-security/secret-scanning/about-secret-scanning)」及び「[Secret scanningのパターン](/code-security/secret-scanning/secret-scanning-patterns)」を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 or ghae %}
### {% data variables.product.product_name %}で使用するシークレットの安全なストレージ
{% endif %}

{% ifversion fpt or ghec %}
コードに加えて、他の場所にあるシークレットを使う必要もあるでしょう。 たとえば、{% data variables.product.prodname_actions %}や{% data variables.product.prodname_dependabot %}や自分の{% data variables.product.prodname_codespaces %}開発環境を他のシステムと通信できるようにするためです。 シークレットの安全な保存と利用方法に関する詳しい情報については「[Actionsの暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」、「[Dependabotのための暗号化されたシークレットの管理](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」、「[codespacesのための暗号化されたシークレットの管理](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」を参照してください。
{% endif %}

{% ifversion ghes > 3.2 or ghae %}
コードに加えて、他の場所にあるシークレットを使う必要もあるでしょう。 たとえば{% data variables.product.prodname_actions %}ワークフロー{% ifversion ghes %}あるいは{% data variables.product.prodname_dependabot %}{% endif %}が他のシステムと通信できるようにするためです。 シークレットの安全な保存と利用方法に関する詳しい情報については「[Actionsの暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」{% ifversion ghes %}及び「[Dependabotのための暗号化されたシークレットの管理](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」{% else %}{% endif %}を参照してください。
{% endif %}

## リポジトリからの脆弱性のあるコーディングパターンの排除

{% note %}

**ノート:** {% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Pull Requestレビュープロセスの作成

コードの品質とセキュリティを、すべてのPull Requestがマージ前にレビューされ、テストされていることを保証することによって改善できます。 {% data variables.product.prodname_dotcom %}には、レビューとマージのプロセスの制御に使える多くの機能があります。 「[保護されたブランチ](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)」を見て始めていってください。

### 脆弱性のあるパターンを探してコードをスキャン

安全でないコードパターンは、支援なしではレビューアが特定するのが難しいことがよくあります。 シークレットを探してコードをスキャンするのに加えて、セキュリティ脆弱性に関連するパターンを探してコードをチェックできます。 たとえばメモリセーフではない関数や、インジェクション脆弱性につながるかもしれないユーザの入力のエスケーピングの失敗などです。 {% data variables.product.prodname_dotcom %}は、コードをスキャンする方法とタイミングの両方にアプローチする様々な方法を提供します。 「[Code scanningについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)」を見て始めていってください。

## 次のステップ

- 「[エンドツーエンドのサプライチェーンの保護](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)」

- 「[アカウントの保護のベストプラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)」

- 「[ビルドシステムの保護のベストプラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)」
