---
title: GitHub Enterprise Server のトライアルを設定する
intro: '{{ site.data.variables.product.prodname_ghe_server }} のトライアルは無料でできます。'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise/
  - /articles/setting-up-a-trial-of-github-enterprise-server
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### {{ site.data.variables.product.prodname_ghe_server }} のトライアルについて

{{ site.data.variables.product.prodname_ghe_server }} を評価するための 45 日間トライアルをリクエストできます。 トライアルは仮想アプライアンスとしてインストールされ、オンプレミスまたはクラウドでのデプロイメントのオプションがあります。 サポートされている仮想化プラットフォームの一覧については「[GitHub Enterprise Server インスタンスをセットアップする](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。

セキュリティアラートと {{ site.data.variables.product.prodname_github_connect }} は、{{ site.data.variables.product.prodname_ghe_server }} のトライアルでは現在利用できません。 これらの機能のデモについては、{{ site.data.variables.contact.contact_enterprise_sales }} にお問い合わせください。 これらの機能の詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」 および「[{{ site.data.variables.product.prodname_ghe_server }} を {{ site.data.variables.product.prodname_dotcom_the_website }} に接続する](/enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

{{ site.data.variables.product.prodname_ghe_cloud }} のトライアルも利用できます。 詳しい情報については、「[{{ site.data.variables.product.prodname_ghe_cloud }} のトライアルを設定する](/articles/setting-up-a-trial-of-github-enterprise-cloud)」を参照してください。

{{ site.data.reusables.products.which-product-to-use }}

### {{ site.data.variables.product.prodname_ghe_server }} のトライアルを設定する

{{ site.data.variables.product.prodname_ghe_server }} は仮想アプライアンスとしてインストールされます。 組織で仮想マシンをセットアップするのに最適な担当者を決定し、その担当者に[トライアルリクエスト](https://enterprise.github.com/trial)をサブミットするよう依頼してください。 トライアルはリクエストをサブミットした直後に開始できます。

{{ site.data.variables.product.prodname_enterprise }} ウェブポータルのアカウントをセットアップするため、トライアルリクエストをサブミットした後に受信したメールにあるリンクをクリックして、プロンプトに従います。 次に、ライセンスファイルをダウンロードします。 詳細は「[{{ site.data.variables.product.prodname_enterprise }} ライセンスを管理する](/enterprise/admin/installation/managing-your-github-enterprise-license)」を参照してください。

{{ site.data.variables.product.prodname_ghe_server }} をインストールするために必要なコンポーネントをダウンロードしてライセンスファイルをアップロードします。 詳細は「[{{ site.data.variables.product.prodname_ghe_server }} インスタンスをセットアップする](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)」で、選択した可視化プラットフォームについての手順を参照してください。

### 次のステップ

トライアルを最大限に活用するためには、次の手順に従ってください:

1. [Organization を作成します](/enterprise/admin/user-management/creating-organizations)。
2. {{ site.data.variables.product.prodname_dotcom }} の基本的な使い方を学ぶには、次を参照してください:
   - [Quick start guide to {{ site.data.variables.product.prodname_dotcom }}](https://resources.github.com/webcasts/Quick-start-guide-to-GitHub/) ウェブキャスト
   - {{ site.data.variables.product.prodname_dotcom }} ガイドの [Understanding the {{ site.data.variables.product.prodname_dotcom }}flow](https://guides.github.com/introduction/flow/)
   - {{ site.data.variables.product.prodname_dotcom }} ガイドの [Hello World](https://guides.github.com/activities/hello-world/)
3. 組織のニーズに合わせてインスタンスを設定するには、「[{{ site.data.variables.product.prodname_ghe_server }} アプライアンスを設定する](/enterprise/admin/installation/configuring-the-github-enterprise-server-appliance)」を参照してください。
4. {{ site.data.variables.product.prodname_ghe_server }} とご使用のアイデンティティプロバイダとを統合するには、「[SAML を使用する](/enterprise/admin/user-management/using-saml)」および「[LDAP を使用する](/enterprise/admin/authentication/using-ldap)」を参照してください。
5. 個人をトライアルに招待します。人数制限はありません。
   - ビルトイン認証または設定済みアイデンティティプロバイダを使用して、ユーザを {{ site.data.variables.product.prodname_ghe_server }} インスタンスに追加します。 詳細は「[ビルトイン認証を使用する](/enterprise/admin/user-management/using-built-in-authentication)」を参照してください。
   - アカウント管理者になる個人を招待するには、[{{ site.data.variables.product.prodname_enterprise }}ウェブポータル](https://enterprise.github.com/login)にアクセスしてください。

    {% note %}

    **注釈:** アカウント管理者になるよう招待したユーザには、招待を承諾するためのリンクが記載されたメールが届きます。

    {% endnote %}

{{ site.data.reusables.products.product-roadmap }}

### トライアルを終了する

トライアル期間中のいつでも [{{ site.data.variables.product.prodname_enterprise }} Web ポータル](https://enterprise.github.com/login)でフルライセンスにアップグレードできます。

トライアル最終日になってもアップグレードしていない場合、トライアルが終了したことを通知するメールが送信されます。 {{ site.data.variables.product.prodname_enterprise }} を評価するための時間がさらに必要な場合は、{{ site.data.variables.contact.contact_enterprise_sales }} に連絡して延長をリクエストしてください。

### 参考リンク

- [{{ site.data.variables.product.prodname_ghe_cloud }} のトライアルをセットアップする](/articles/setting-up-a-trial-of-github-enterprise-cloud)
