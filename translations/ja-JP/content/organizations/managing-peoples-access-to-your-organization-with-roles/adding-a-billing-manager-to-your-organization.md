---
title: Organization への支払いマネージャーの追加
intro: '*支払いマネージャー*は、支払い情報の更新など、Organization の支払い設定を管理するユーザです。 Organization の通常のメンバーが支払いのリソースにアクセスできないことが普通なら、これは良い選択肢になります。'
redirect_from:
  - /articles/adding-a-billing-manager-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-a-billing-manager-to-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
  - Billing
---

Organization のオーナーの Team のメンバーは、人に*支払いマネージャー*権限を与えることができます。 Organization の支払いマネージャーになる招待を受け入れた人は、追加で他の人に、支払いマネージャーになるよう招待できます。

{% note %}

**注釈:** 支払いマネージャーは、Organization のプラン中の有料ライセンスを消費しません。

{% endnote %}

### 支払いマネージャーの権限

支払いマネージャーは以下のことができます:

- アカウントのアップグレードまたはダウングレード
- 支払い方法の追加、更新、削除
- 支払い履歴の閲覧
- 領収書のダウンロード
- 支払いマネージャーの表示、招待、削除

加えて、すべての支払いマネージャーは Organization の支払日にメールで領収書を受け取ります。

支払いマネージャーは以下のことは**できません**:

- Organization のリポジトリの作成あるいはアクセス
- Organization のプライベートメンバーの閲覧
- Organization メンバーのリスト内に表示されること
- {% data variables.product.prodname_marketplace %}アプリケーションのサブスクリプションの購入、編集、キャンセル

{% tip %}

**ヒント:** Organization が[ メンバー、支払いマネージャー、外部のコラボレータに 2 要素認証を使うことを求める](/articles/requiring-two-factor-authentication-in-your-organization)場合、ユーザは Organization の支払いマネージャーになるための招待を受け付ける前に 2 要素認証を有効化しなければなりません。

{% endtip %}

### 支払いマネージャーの招待

招待された人は、Organization の支払いマネージャーになることを依頼する招待メールを受信します。 招待された人が招待メール中の受諾のリンクをクリックすると、その人は自動的に支払いマネージャーとして Organization に追加されます。 その人がまだ GitHub のアカウントを持っていない場合は、アカウント作成のためのサインアップにリダイレクトされ、アカウント作成後に自動的に支払いマネージャーとして Organization に追加されます。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
1. Under "Billing management", next to "Billing managers", click **Add**. ![支払いマネージャーの招待](/assets/images/help/billing/settings_billing_managers_list.png)
6. 追加したい人のユーザ名あるいはメールアドレスを入力し、[**Send Invitation**] をクリックします。 ![支払いマネージャーの招待ページ](/assets/images/help/billing/billing_manager_invite.png)
