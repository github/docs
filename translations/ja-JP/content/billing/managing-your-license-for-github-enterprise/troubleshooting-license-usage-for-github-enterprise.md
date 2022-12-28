---
title: GitHub Enterprise のライセンス使用状況のトラブルシューティング
intro: ライセンス レポートを監査することで、エンタープライズ向けのライセンス使用状況のトラブルシューティングを行うことができます。
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Troubleshoot license usage
ms.openlocfilehash: 8595aaad929e534ebbd474270f3e01f87113b5ec
ms.sourcegitcommit: aded2711e14a0c2473049d3d7e05c82a74e4c634
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179942'
---
## 想定外のライセンス使用状況について

エンタープライズの使用済みライセンス数が想定外だった場合、使用済みライセンス レポートを確認し、エンタープライズのデプロイとサブスクリプション全体のライセンス使用状況を監査することができます。 詳しくは、「[GitHub Enterprise のライセンス使用状況の表示](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)」と「[エンタープライズ アカウントのサブスクリプションと使用状況の表示](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)」を参照してください。

エラーが見つかった場合は、トラブルシューティング手順を試すことができます。

プライバシー上の理由から、{% data variables.product.prodname_emus %} を使用しない限り、Enterprise 所有者はユーザー アカウントの詳細に直接アクセスできません。

## 使用済みライセンスの計算について

ユーザーが次の条件の 1 つ以上を満たしている場合、{% data variables.product.company_short %} はユーザーに対して課金を行います。

- ユーザーが {% data variables.product.prodname_ghe_server %} のデプロイを利用する
- ユーザーが {% data variables.product.prodname_ghe_cloud %} の Organization のいずれかのメンバーである
- ユーザーが Organization のいずれかのプライベート リポジトリへの書き込みアクセス権を持っている
- ユーザーが {% data variables.visual_studio.prodname_vs_subscriber %} である

これらのロールの招待は、招待が承諾されるか期限切れになるまでライセンスを使用します。 ライセンスを使用している Enterprise 内の個人について詳しくは「[ユーザーごとの価格付けについて](/billing/managing-billing-for-your-github-account/about-per-user-pricing)」を参照してください。

使用するデプロイの数に関係なく、各ユーザーが 1 つのシートを使用するには、{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} の間でライセンスの使用状況を同期する必要があります。 詳細については、「[{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} の間でユーザー ライセンスの使用状況を手動で同期する](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)」を参照してください。

ライセンス使用状況を同期すると、{% data variables.product.prodname_dotcom %} では、{% data variables.product.prodname_ghe_server %} のユーザー アカウントと、{% data variables.product.prodname_ghe_cloud %} のユーザー アカウントをメール アドレスを使って照合します。

まず、{% data variables.product.prodname_ghe_server %} の各ユーザーのプライマリ メール アドレスを確認します。 次に、そのアドレスと {% data variables.product.prodname_ghe_cloud %} のユーザー アカウントのメール アドレスを照合します。 Enterprise で SAML SSO を使用している場合は、まず次の SAML 属性でメール アドレスを確認します。

- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- `username`
- `NameID`
- `emails`

これらの属性で見つかったメール アドレスが {% data variables.product.prodname_ghe_server %} のプライマリ メール アドレスと一致しない場合、または Enterprise が SAML SSO を使用していない場合は、{% data variables.product.prodname_ghe_cloud %} のユーザーの検証済みメール アドレスを確認します。 {% data variables.product.prodname_dotcom_the_website %} 上のメール アドレスの確認の詳細については、「[メール アドレスを検証する](/enterprise-cloud@latest/get-started/signing-up-for-github/verifying-your-email-address)」{% ifversion not ghec %}({% data variables.product.prodname_ghe_cloud %} ドキュメント){% else %}{% endif %}を参照してください。

## 使用済みライセンス ファイルのフィールド

{% data variables.product.prodname_dotcom_the_website %} ライセンス使用状況レポートと {% data variables.product.prodname_ghe_server %} のエクスポートされたライセンス使用状況ファイルには、エンタープライズのライセンス使用状況のトラブルシューティングに役立つさまざまなフィールドが含まれています。 

### {% data variables.product.prodname_dotcom_the_website %} ライセンス使用状況レポート (CSV ファイル)

エンタープライズのライセンス使用状況レポートは、エンタープライズのメンバーに関する以下の情報を含む CSV ファイルです。 一部のフィールドは、{% data variables.product.prodname_ghe_cloud %} (GHEC) のデプロイ、{% data variables.product.prodname_ghe_server %} (GHES) の接続環境、または GitHub Enterprise との {% data variables.product.prodname_vs %} サブスクリプション (VSS) に固有のものです。

| フィールド | 説明
| ----- | -----------
| github_com_login | ユーザーの GHEC アカウントのユーザー名
| github_com_name | ユーザーの GHEC アカウントの表示名
| github_com_profile | GHEC のユーザーのプロファイル ページの URL
| github_com_user   | ユーザーが GHEC のアカウントを持っているかどうか |
| github_com_member_roles | GHEC でユーザーが所属する Organization ごとの、コロンで区切られた Organization 名とその Organization 内の個人のロール (`Owner` または `Member`)<br><br>コンマで区切られた Organization |
| github_com_enterprise_role | `Owner`、`Member`、`Outside collaborator` のいずれかです
| github_com_verified_domain_emails | Enterprise の検証済みドメインに一致するユーザーの GHEC アカウントに関連付けられているすべてのメール アドレス |
| github_com_saml_name_id | SAML ユーザー名 |
| github_com_orgs_with_pending_invites | ユーザーの GHEC アカウントが Enterprise 内の Organization に参加するための保留中のすべての招待 |
| license_type | `Visual Studio subscription` か `Enterprise` のいずれかです
| enterprise_server_user| ユーザーが GHES に少なくとも 1 つのアカウントを持っているかどうか |
| enterprise_server_primary_emails | 各ユーザーの GHES アカウントに関連付けられているプライマリ メール アドレス |
| enterprise_server_user_ids | ユーザーの GHES アカウントごとの、アカウントのユーザー ID
| total_user_accounts | 個人が GHEC と GHES の両方で持っているアカウントの合計数
| visual_studio_subscription_user | ユーザーが {% data variables.visual_studio.prodname_vs_subscriber %} であるかどうか |
| visual_studio_subscription_email | ユーザーの VSS に関連付けられているメール アドレス |
| visual_studio_license_status | Visual Studio ライセンスが {% data variables.product.company_short %} ユーザーに一致しているかどうか |

エンタープライズ内の 1 つ以上の組織のメンバーになっていない {% data variables.visual_studio.prodname_vs_subscriber %} は、保留中の招待状態でレポートに含まれ、[名前] または [プロファイル リンク] フィールドの値がありません。

### {% data variables.product.prodname_ghe_server %} のエクスポートされたライセンス使用状況 (JSON ファイル)

{% data variables.product.prodname_ghe_server %} のライセンス使用状況は JSON ファイルであり、通常、{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} のデプロイ間でユーザー ライセンスの手動同期を実行するときに使われます。 このファイルには、{% data variables.product.prodname_ghe_server %} 環境に固有の次の情報が含まれています。

| フィールド | 説明
| ----- | -----------
| 機能 | {% data variables.product.prodname_ghe_server %} インスタンスで有効な {% data variables.product.prodname_github_connect %} 機能と、有効になった日時。
| ホスト名 | {% data variables.product.prodname_ghe_server %} インスタンスのホスト名。
| HTTP のみ | {% data variables.product.prodname_ghe_server %} インスタンス上でトランスポート層セキュリティ (TLS) が有効であり、構成されているかどうか。 `True` または `False` のいずれかにすることができます。 
| ライセンス | {% data variables.product.prodname_ghe_server %} ライセンスのハッシュ。
| 公開キー | {% data variables.product.prodname_ghe_server %} ライセンスの公開キーの部分。
| サーバー ID | {% data variables.product.prodname_ghe_server %} インスタンス用に生成された UUID。
| Version | {% data variables.product.prodname_ghe_server %} インスタンスのバージョン。

## 使用済みライセンスのトラブルシューティング

各ユーザーが異なるデプロイとサブスクリプションに対して 1 つのシートのみを使用していることを確認するには、次のトラブルシューティングの手順を試してみてください。

1. 複数のシートを使用しているユーザーを特定するために、Enterprise で {% data variables.product.prodname_ghe_cloud %} の検証済みドメインが使われている場合は、{% data variables.product.prodname_dotcom_the_website %} のアカウントに関連付けられている検証済みドメインのメール アドレスを持たない Enterprise メンバーのリストを確認します。 多くの場合、これらは誤って複数のライセンス シートを使っているユーザーです。 詳細については、「[検証済みドメインのメール アドレスを持たないメンバーの表示](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)」を参照してください。

   {% note %}

  **注:** トラブルシューティングを簡単に行えるようにするため {% data variables.product.prodname_dotcom_the_website %} の Enterprise アカウントで、検証済みドメインを使うことをお勧めします。 詳細については、「[エンタープライズのドメインの確認または承認](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」を参照してください。

  {% endnote %}
1. 複数のシートを使用しているユーザーを特定したら、同じメール アドレスがすべてのユーザーのアカウントに関連付けられていることを確認します。 一致する必要があるメール アドレスについて詳しくは、「[使用されるライセンスの計算について](#about-the-calculation-of-consumed-licenses)」を参照してください。
1. メール アドレスが最近更新されたか、不一致を修正するために検証された場合は、最後のライセンス同期ジョブのタイムスタンプを表示します。 修正が行われた後にジョブが実行されていない場合は、手動で新しいジョブをトリガーします。 詳細については、「[GitHub Enterprise Server と GitHub Enterprise Cloud 間のライセンス使用状況の同期](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)」を参照してください。

前述のようにトラブルシューティング情報を確認した後も、使用済みライセンスについて不明な点がある場合は、{% data variables.contact.contact_enterprise_portal %} を使って {% data variables.contact.github_support %} に問い合わせることができます。
