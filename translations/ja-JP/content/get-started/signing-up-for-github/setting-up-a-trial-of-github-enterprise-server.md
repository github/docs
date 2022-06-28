---
title: GitHub Enterprise Server のトライアルを設定する
intro: '{% data variables.product.prodname_ghe_server %} のトライアルは無料でできます。'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise
  - /articles/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Server trial
---

## {% data variables.product.prodname_ghe_server %} のトライアルについて

{% data variables.product.prodname_ghe_server %} を評価するための 45 日間トライアルをリクエストできます。 トライアルは仮想アプライアンスとしてインストールされ、オンプレミスまたはクラウドでのデプロイメントのオプションがあります。 For more information about {% data variables.product.prodname_ghe_server %}, and for a list of supported virtualization platforms, see "[About {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server)."

{% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}現在、セキュリティ{% endif %}アラートと {% data variables.product.prodname_github_connect %} は {% data variables.product.prodname_ghe_server %} のトライアルでは利用できません。 これらの機能のデモについては、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。 For more information about these features, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" and "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

{% data variables.product.prodname_ghe_cloud %} のトライアルも利用できます。 詳しい情報については、「[{% data variables.product.prodname_ghe_cloud %} のトライアルを設定する](/articles/setting-up-a-trial-of-github-enterprise-cloud)」を参照してください。

{% data reusables.products.which-product-to-use %}

## {% data variables.product.prodname_ghe_server %} のトライアルを設定する

{% data variables.product.prodname_ghe_server %} は仮想アプライアンスとしてインストールされます。 組織で仮想マシンをセットアップするのに最適な担当者を決定し、その担当者に[トライアルリクエスト](https://enterprise.github.com/trial)をサブミットするよう依頼してください。 トライアルはリクエストをサブミットした直後に開始できます。

{% data variables.product.prodname_enterprise %} ウェブポータルのアカウントをセットアップするため、トライアルリクエストをサブミットした後に受信したメールにあるリンクをクリックして、プロンプトに従います。 次に、ライセンスファイルをダウンロードします。 For more information, see "[Managing your license for {% data variables.product.prodname_enterprise %}](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise)."

{% data variables.product.prodname_ghe_server %} をインストールするために必要なコンポーネントをダウンロードしてライセンスファイルをアップロードします。 詳細は「[{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/enterprise-server@latest/admin/installation/setting-up-a-github-enterprise-server-instance)」で、選択した可視化プラットフォームについての手順を参照してください。

## 次のステップ

トライアルを最大限に活用するためには、次の手順に従ってください:

1. [Organization を作成します](/enterprise-server@latest/admin/user-management/creating-organizations)。
2. {% data variables.product.prodname_dotcom %} の基本的な使い方を学ぶには、次を参照してください:
   - [Intro to {% data variables.product.prodname_dotcom %}](https://resources.github.com/devops/methodology/maximizing-devops-roi/) webcast
   - {% data variables.product.prodname_dotcom %} ガイドの [Understanding the {% data variables.product.prodname_dotcom %}flow](https://guides.github.com/introduction/flow/)
   - {% data variables.product.prodname_dotcom %} ガイドの [Hello World](https://guides.github.com/activities/hello-world/)
   - "[About versions of {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)"
3. 組織のニーズに合わせてインスタンスを設定するには、「[Enterprise を設定する](/enterprise-server@latest/admin/configuration/configuring-your-enterprise)」を参照してください。
4. {% data variables.product.prodname_ghe_server %} とご使用のアイデンティティプロバイダとを統合するには、「[SAML を使用する](/enterprise-server@latest/admin/user-management/using-saml)」および「[LDAP を使用する](/enterprise-server@latest/admin/authentication/using-ldap)」を参照してください。
5. 個人をトライアルに招待します。人数制限はありません。
   - ビルトイン認証または設定済みアイデンティティプロバイダを使用して、ユーザを {% data variables.product.prodname_ghe_server %} インスタンスに追加します。 詳細は「[ビルトイン認証を使用する](/enterprise-server@latest/admin/user-management/using-built-in-authentication)」を参照してください。
   - アカウント管理者になる個人を招待するには、[{% data variables.product.prodname_enterprise %}ウェブポータル](https://enterprise.github.com/login)にアクセスしてください。

    {% note %}

    **注釈:** アカウント管理者になるよう招待したユーザには、招待を承諾するためのリンクが記載されたメールが届きます。

    {% endnote %}

{% data reusables.products.product-roadmap %}

## トライアルを終了する

トライアル期間中のいつでも [{% data variables.product.prodname_enterprise %} Web ポータル](https://enterprise.github.com/login)でフルライセンスにアップグレードできます。

トライアル最終日になってもアップグレードしていない場合、トライアルが終了したことを通知するメールが送信されます。 {% data variables.product.prodname_enterprise %} を評価するための時間がさらに必要な場合は、{% data variables.contact.contact_enterprise_sales %} に連絡して延長をリクエストしてください。

## 参考リンク

- [{% data variables.product.prodname_ghe_cloud %} のトライアルをセットアップする](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)
