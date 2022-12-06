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
ms.openlocfilehash: 9beee350488bdf27beb7107deda3c44f560d29e9
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163558'
---
## {% data variables.product.prodname_ghe_server %} の試用版について

{% data variables.product.prodname_ghe_server %} を評価するための 45 日間トライアルをリクエストできます。 トライアルは仮想アプライアンスとしてインストールされ、オンプレミスまたはクラウドでのデプロイメントのオプションがあります。 {% data variables.product.prodname_ghe_server %} に関する詳しい情報と、サポートされている仮想化プラットフォームの一覧については、「[{% data variables.product.prodname_ghe_server %} について](/enterprise-server/admin/overview/about-github-enterprise-server)」を参照してください。

{% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}セキュリティ{% endif %} アラートと {% data variables.product.prodname_github_connect %} は、{% data variables.product.prodname_ghe_server %} の試用版では現在利用できません。 これらの機能のデモについては、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。 これらの機能の詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」と「[エンタープライズ アカウントを {% data variables.product.prodname_ghe_cloud %} に接続する](/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)」を参照してください。

{% data variables.product.prodname_ghe_cloud %} のトライアルも利用できます。 詳細については、「[{% data variables.product.prodname_ghe_cloud %} の試用版を設定する](/articles/setting-up-a-trial-of-github-enterprise-cloud)」を参照してください。

{% data reusables.products.which-product-to-use %}

## {% data variables.product.prodname_ghe_server %} のトライアルを設定する

{% data variables.product.prodname_ghe_server %} は仮想アプライアンスとしてインストールされます。 組織で仮想マシンをセットアップするのに最適な担当者を決定し、その担当者に[試用版のリクエスト](https://enterprise.github.com/trial)をサブミットするよう依頼してください。 トライアルはリクエストをサブミットした直後に開始できます。

{% data variables.product.prodname_enterprise %} ウェブポータルのアカウントをセットアップするため、トライアルリクエストをサブミットした後に受信したメールにあるリンクをクリックして、プロンプトに従います。 次に、ライセンスファイルをダウンロードします。 詳細については、「[{% data variables.product.prodname_enterprise %} のライセンスの管理](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise)」を参照してください。

{% data variables.product.prodname_ghe_server %} をインストールするために必要なコンポーネントをダウンロードしてライセンスファイルをアップロードします。 詳細については、「[{% data variables.product.prodname_ghe_server %} インスタンスを設定する](/enterprise-server@latest/admin/installation/setting-up-a-github-enterprise-server-instance)」の選択した視覚化プラットフォームの手順を参照してください。

## 次の手順

トライアルを最大限に活用するためには、次の手順に従ってください:

1. [組織の作成](/enterprise-server@latest/admin/user-management/creating-organizations)。
2. {% data variables.product.prodname_dotcom %} の基本的な使い方を学ぶには、次を参照してください:
   - [{% data variables.product.prodname_dotcom %} の概要](https://resources.github.com/devops/methodology/maximizing-devops-roi/) Web キャスト
   - {% data variables.product.prodname_dotcom %} ガイドの [{% data variables.product.prodname_dotcom %} フローについて](https://guides.github.com/introduction/flow/)
   - {% data variables.product.prodname_dotcom %} ガイドの [Hello World](https://guides.github.com/activities/hello-world/)
   - 「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs)」
3. 組織のニーズを満たすようにインスタンスを構成するには、「[エンタープライズの構成](/enterprise-server@latest/admin/configuration/configuring-your-enterprise)」を参照してください。
4. {% data variables.product.prodname_ghe_server %} を ID プロバイダーと統合するには、「[SAML の使用](/enterprise-server@latest/admin/user-management/using-saml)」および「[LDAP の使用](/enterprise-server@latest/admin/authentication/using-ldap)」を参照してください。
5. 個人をトライアルに招待します。人数制限はありません。
   - ビルトイン認証または設定済みアイデンティティプロバイダを使用して、ユーザを {% data variables.product.prodname_ghe_server %} インスタンスに追加します。 詳細については、「[ビルトイン認証を使用する](/enterprise-server@latest/admin/user-management/using-built-in-authentication)」を参照してください。
   - ユーザーをアカウント管理者に招待するには、[{% data variables.product.prodname_enterprise %} Web ポータル](https://enterprise.github.com/login)にアクセスします。

    {% note %}

    **注:** アカウント管理者になるよう招待された個人は、招待を承諾するためのリンクを含むメールを受信します。

    {% endnote %}

{% data reusables.enterprise.best-practices %}    

{% data reusables.products.product-roadmap %}

## トライアルを終了する

試用期間中いつでも [{% data variables.product.prodname_enterprise %} Web ポータル](https://enterprise.github.com/login)でフル ライセンスにアップグレードできます。

トライアル最終日になってもアップグレードしていない場合、トライアルが終了したことを通知するメールが送信されます。 {% data variables.product.prodname_enterprise %} を評価するための時間がさらに必要な場合は、{% data variables.contact.contact_enterprise_sales %} に連絡して延長をリクエストしてください。

## 参考資料

- 「[{% data variables.product.prodname_ghe_cloud %} の試用版を設定する](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)」
