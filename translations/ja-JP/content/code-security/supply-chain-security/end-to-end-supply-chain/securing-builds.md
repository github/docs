---
title: ビルドシステムの保護のベストプラクティス
shortTitle: ビルドの保護
allowTitleToDifferFromFilename: true
intro: サプライチェーンの終端である、成果物のビルドと配布に使うシステムの保護の方法に関するガイダンス。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Fundamentals
  - Security
  - CI
  - CD
---

## このガイドについて

このガイドは、ビルドシステムのセキュリティを高めることができる、もっと影響の大きい変更について説明します。 各セクションは、セキュリティを改善するためにプロセスに加えることができる変更の概要を説明します。 影響の大きい変更から最初にリストされています。

## リスクとは何か？

ソフトウェアサプライチェーンに対する攻撃の中には、ビルドシステムを直接ターゲットとするものもあります。 攻撃者がビルドプロセスを変更できれば、個人アカウントやコードを侵害する労力なしに、システムを悪用できます。 個人アカウントやコードとともに、ビルドシステムを保護することを忘れないようにすることが重要です。

## ビルドシステムの保護

ビルドシステムが持つべきセキュリティの機能がいくつかあります。

1. ビルドステップは明確で再現可能でなければなりません。

2. ビルドプロセス中に何が実行されているかを正確に知っていなければなりません。

3. 侵害されたビルドが将来のビルドに影響し続けることがないよう、各ビルドは新しい環境で開始されなければなりません。

{% data variables.product.prodname_actions %}は、これらの機能を満たすのに役立ちます。 ビルドの手順は、コードとともにリポジトリに保存されます。 ビルドが実行される環境は、Windows、Mac、Linux、自分でホストするランナーを含め、選択できます。 各ビルドは新しい仮想環境で開始され、攻撃がビルド環境に留まり続けるのを難しくします。

セキュリティ上の利点に加えて、{% data variables.product.prodname_actions %}はビルドを手動、定期的、リポジトリでのgitイベントでトリガーし、頻繁に高速なビルドを行えます。

{% data variables.product.prodname_actions %}は大きなトピックですが、「[GitHubホストランナー](/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners)」及び「[ワークフローのトリガー](/actions/using-workflows/triggering-a-workflow)」と合わせて「[GitHub Actionsを理解する](/actions/learn-github-actions/understanding-github-actions)」がよい出発点になります。

## ビルドへの署名

ビルドプロセスが保護されたら、ビルドプロセスの最終結果が誰かに改ざんされないようにします。 そのための素晴らしい方法が、ビルドへの署名です。 ソフトウェアを公に配布する場合、しばしば公開/秘密暗号鍵のペアとともに行われます。 秘密鍵を使ってビルドに署名し、公開鍵を公開してソフトウェアのユーザが利用までにビルドの署名を検証できるようにします。 もしもビルドのバイトが変更されていた場合、署名は検証されません。

ビルドにどの程度正確に署名するかは、書いているコードの種類や、ユーザがどういった人たちかによります。 秘密鍵を安全に保管する方法を知るのは、多くの場合困難です。 ここでの基本的な選択肢の1つは{% data variables.product.prodname_actions %}の暗号化されたシークレットを使うことですが、それらの{% data variables.product.prodname_actions %}ワークフローにアクセスできる人を慎重に制限しなければなりません。 {% ifversion fpt or ghec %}秘密鍵をパブリックなインターネットを通じてアクセスできる他のシステム（Microsoft AzureやHashiCorpのVaultなど）に保存するなら、さらに高度な選択肢はOpenID Connectで認証をして、システム間でシークレットを共有しなくていいようにすることです。{% endif %}秘密鍵にアクセスできるのがプライベートネットワークからのみなのであれば、他の選択肢は{% data variables.product.prodname_actions %}のセルフホストランナーを使うことです。

詳しい情報については「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」{% ifversion fpt or ghec %}、「[OpenID Connectでのセキュリティ強化について](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)」{% endif %}、「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」を参照してください。

## {% data variables.product.prodname_actions %}のセキュリティ強化

{% data variables.product.prodname_actions %}をさらに保護するために行えるステップがもっとたくさんあります。 特に、サードパーティのワークフローを評価する際には注意し、自分のワークフローを変更できる人は`CODEOWNERS`を使って制限することを検討してください。

詳しい情報については「[GitHub Actionsのセキュリティ強化](/actions/security-guides/security-hardening-for-github-actions)」、特に「[サードパーティアクションの利用](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)」及び「[変更をモニタリングするための`CODEOWNERS`の利用](/actions/security-guides/security-hardening-for-github-actions#using-codeowners-to-monitor-changes)」を参照してください。

## 次のステップ

- 「[エンドツーエンドのサプライチェーンの保護](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)」

- 「[アカウントの保護のベストプラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)」

- 「[サプライチェーン中のコードの保護のベストプラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)」
