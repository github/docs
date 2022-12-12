---
title: Organization への支払いマネージャーの追加
intro: '*"支払いマネージャー"* は、支払い情報の更新など、Organization の支払い設定を管理するユーザーです。 Organization の通常のメンバーが支払いのリソースにアクセスできないことが普通なら、これは良い選択肢になります。'
redirect_from:
  - /articles/adding-a-billing-manager-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-a-billing-manager-to-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Billing
shortTitle: Add a billing manager
ms.openlocfilehash: f7b4e6d17ff0e6680fdf9509b467f314b1a9e4ec
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119229'
---
Organization のオーナーの Team のメンバーは、ユーザーに *支払いマネージャー* 権限を与えることができます。 Organization の支払いマネージャーになる招待を受け入れた人は、追加で他の人に、支払いマネージャーになるよう招待できます。

{% note %}

**注:** 支払いマネージャーは、Organization のプランの有料ライセンスを使いません。

{% endnote %}

## 支払いマネージャーの権限

支払いマネージャーは以下のことができます:

- アカウントのアップグレードまたはダウングレード
- 支払い方法の追加、更新、削除
- 支払い履歴の閲覧
- 領収書のダウンロード
- 支払いマネージャーの表示、招待、削除
- スポンサーシップの開始、変更、またはキャンセル

加えて、すべての支払いマネージャーは Organization の支払日にメールで領収書を受け取ります。

支払いマネージャーは次のことが **できません**。

- Organization のリポジトリの作成あるいはアクセス
- Organization のプライベートメンバーの閲覧
- Organization メンバーのリスト内に表示されること
- {% data variables.product.prodname_marketplace %}アプリケーションのサブスクリプションの購入、編集、キャンセル

{% tip %}

**参考:** Organization が [メンバー、支払いマネージャー、外部のコラボレータに 2 要素認証を使うことを求める](/articles/requiring-two-factor-authentication-in-your-organization)場合、ユーザーは Organization の支払いマネージャーになるための招待を受け付ける前に 2 要素認証を有効化しなければなりません。

{% endtip %}

## 支払いマネージャーの招待

{% ifversion ghec %} {% note %}

**注:** Organization が Enterprise アカウントに所有されている場合、Organization のレベルで支払いマネージャーを招待することはできません。 詳細については、「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」を参照してください。

{% endnote %} {% endif %}

招待された人は、Organization の支払いマネージャーになることを依頼する招待メールを受信します。 招待された人が招待メール中の受諾のリンクをクリックすると、その人は自動的に支払いマネージャーとして Organization に追加されます。 その人がまだ GitHub のアカウントを持っていない場合は、アカウント作成のためのサインアップにリダイレクトされ、アカウント作成後に自動的に支払いマネージャーとして Organization に追加されます。

{% data reusables.organizations.billing-settings %}
1. [支払い管理] で [支払いマネージャー] の横にある **[追加]** をクリックします。
  ![支払いマネージャーの招待](/assets/images/help/billing/settings_billing_managers_list.png)
6. 追加したい人のユーザー名あるいはメールアドレスを入力し、 **[招待の送信]** をクリックします。
  ![[支払いマネージャーの招待] ページ](/assets/images/help/billing/billing_manager_invite.png)

## 参考資料

- {% endif %}{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[エンタープライズのマネージャーになるようにユーザーを招待する](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)」{% ifversion fpt %}
