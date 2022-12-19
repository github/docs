---
title: セキュリティ ログをレビューする
intro: 個人アカウントのセキュリティ ログを確認して、自分が実行したアクションと、他のユーザーが実行したアクションについて詳しく知ることができます。
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-your-security-log
  - /github/authenticating-to-github/reviewing-your-security-log
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Security log
ms.openlocfilehash: af0c238e3bda40874ed09d6afb402cc6934e7c4b
ms.sourcegitcommit: 5b0becac9098ab45c2204882d719f5cf17bfff18
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120848'
---
## セキュリティログにアクセスする

セキュリティ ログには、過去 90 日以内に実行されたすべてのアクションが一覧表示されます。

{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. サイドバーの [アーカイブ] セクションで、 **{% octicon "log" aria-label="The log icon" %} [セキュリティ ログ]** をクリックします。
{% else %}
1. ユーザー設定サイドバーで、 **[セキュリティ ログ]** をクリックします。
  ![[セキュリティ ログ] タブ](/assets/images/help/settings/audit-log-tab.png) {% endif %}

## セキュリティログを検索する

{% data reusables.audit_log.audit-log-search %}

### 実行されたアクションに基づく検索

セキュリティログにリストされているイベントは、アクションによってトリガーされます。 アクションは次のカテゴリに分類されます。

| カテゴリ名 | 説明 |------------------|-------------------{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | 課金情報に関連するすべてのアクティビティが含まれます。
| [`codespaces`](#codespaces-category-actions) | {% data variables.product.prodname_github_codespaces %} に関連するすべてのアクティビティが含まれます。 詳細については、[{% data variables.product.prodname_codespaces %} に関するページ](/github/developing-online-with-codespaces/about-codespaces)を参照してください。
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | {% data variables.product.prodname_marketplace %} 開発者同意書に関連するすべてのアクティビティが含まれます。
| [`marketplace_listing`](#marketplace_listing-category-actions) | {% data variables.product.prodname_marketplace %} のアプリの一覧表示に関連するアクティビティが含まれます。{% endif %} | [`oauth_access`](#oauth_access-category-actions) | 接続先の [{% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) に関連するすべてのアクティビティが含まれます。{% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | {% data variables.product.prodname_dotcom %} サブスクリプションに対する支払いに関連するすべてのアクティビティが含まれます。{% endif %}{% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | {% data variables.product.pat_v2 %} に関連するすべてのアクティビティが含まれます。 詳しくは、「[{% data variables.product.pat_generic %} の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。{% endif %} | [`profile_picture`](#profile_picture-category-actions) | プロファイル画像に関連するすべてのアクティビティが含まれます。
| [`project`](#project-category-actions) | プロジェクト ボードに関連するすべてのアクティビティが含まれます。
| [`public_key`](#public_key-category-actions) | [パブリック SSH キー](/articles/adding-a-new-ssh-key-to-your-github-account)に関連するすべてのアクティビティが含まれます。
| [`repo`](#repo-category-actions) | 所有するリポジトリに関連するすべてのアクティビティが含まれます。{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | {% data variables.product.prodname_sponsors %} に関連するすべてのイベントとスポンサー ボタンが含まれます (「[{% data variables.product.prodname_sponsors %} について](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)」および「[リポジトリにスポンサー ボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照)。{% endif %}{% ifversion ghes or ghae %} | [`team`](#team-category-actions) | 所属しているチームに関連するすべてのアクティビティが含まれます。{% endif %}{% ifversion not ghae %} | [`two_factor_authentication`](#two_factor_authentication-category-actions) | [2 要素認証](/articles/securing-your-account-with-two-factor-authentication-2fa)に関連するすべてのアクティビティが含まれます。{% endif %} | [`user`](#user-category-actions) | アカウントに関連するすべてのアクティビティが含まれます。

{% ifversion fpt or ghec %}

## セキュリティログをエクスポートする

{% data reusables.audit_log.export-log %} {% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

## セキュリティログのアクション

セキュリティログにイベントとして記録される最も一般的なアクションの概要です。

{% ifversion fpt or ghec %}

### `billing` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `change_billing_type` | {% data variables.product.prodname_dotcom %} の[支払い方法を変更](/articles/adding-or-editing-a-payment-method)するときにトリガーされます。
| `change_email` | [メール アドレスを変更](/articles/changing-your-primary-email-address)するときにトリガーされます。

### `codespaces` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | [codespace を作成](/github/developing-online-with-codespaces/creating-a-codespace)するときにトリガーされます。
| `resume` | 中断されたコードスペースを再開するとトリガーされます。
| `delete` | [codespace を削除](/github/developing-online-with-codespaces/deleting-a-codespace)するときにトリガーされます。
| `manage_access_and_security` | [codespace からアクセスできるリポジトリ](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)を更新するときにトリガーされます。
| `trusted_repositories_access_update` | 個人用アカウントの [{% data variables.product.prodname_codespaces %} のアクセスとセキュリティ設定](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)を変更するときにトリガーされます。

### `marketplace_agreement_signature` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | {% data variables.product.prodname_marketplace %} Developer Agreement に署名するときにトリガーされます。

### `marketplace_listing` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `approve` | 一覧表を {% data variables.product.prodname_marketplace %}に掲載することが承認されるときにトリガーされます。
| `create` | {% data variables.product.prodname_marketplace %} で自分のアプリケーションの一覧表を作成するときにトリガーされます。
| `delist` | 一覧表が {% data variables.product.prodname_marketplace %} から削除されるときにトリガーされます。
| `redraft` | 一覧表がドラフト状態に戻されるときにトリガーされます。
| `reject` | 一覧表が {% data variables.product.prodname_marketplace %} に掲載することを認められないときにトリガーされます。

{% endif %}

### `oauth_authorization` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | [{% data variables.product.prodname_oauth_app %}へのアクセス権を付与](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)するときにトリガーされます。
| `destroy` | [アカウントへの {% data variables.product.prodname_oauth_app %} のアクセスを取り消す](/articles/reviewing-your-authorized-integrations)とき、および[認可が取り消されるか期限切れになった](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)ときにトリガーされます。

{% ifversion fpt or ghec %}

### `payment_method` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | 新しいクレジット カードや PayPal アカウントなど、新たな支払い方法が追加されるときにトリガーされます。
| `update` | 既存の支払い方法が更新されるときにトリガーされます。

{% endif %}

{% ifversion pat-v2 %}

### `personal_access_token` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `access_granted` | 作成した {% data variables.product.pat_v2 %} にリソースへのアクセス権が付与されたときにトリガーされます。
| `access_revoked` | 作成した {% data variables.product.pat_v2 %} が取り消されたときにトリガーされます。 トークンでは引き続きパブリック Organization リソースを読み取ることができます。
| `create` | {% data variables.product.pat_v2 %} を作成するときにトリガーされます。
| `credential_regenerated` | {% data variables.product.pat_v2 %} を再生成するときにトリガーされます。
| `destroy` | {% data variables.product.pat_v2 %} を削除するときにトリガーされます。
| `request_cancelled` | {% data variables.product.pat_v2 %} の保留中の要求を取り消して Organization リソースにアクセスするときにトリガーされます。
| `request_created` | Organization リソースにアクセスするために {% data variables.product.pat_v2 %} を作成し、{% data variables.product.pat_v2 %} が Organization リソースにアクセスする前 Organization が承認を必要とするときにトリガーされます。
| `request_denied` | Organization リソースにアクセスするための {% data variables.product.pat_v2 %} の要求が拒否されたときにトリガーされます。 詳しくは、「[Organization での {% data variables.product.pat_generic %} の要求の管理](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)」を参照してください。

{% endif %}

### `profile_picture` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `update` | [プロフィール画像を設定または更新](/articles/setting-your-profile-picture/)するときにトリガーされます。

### `project` カテゴリのアクション

| アクション | 説明
|--------------------|---------------------
| `access` | プロジェクト ボードの可視性が変更されるときにトリガーされます。
| `create` | プロジェクト ボードが作成されるときにトリガーされます。
| `rename` | プロジェクトボードの名前が変更されるときにトリガーされます。
| `update` | プロジェクト ボードが更新されるときにトリガーされます。
| `delete` | プロジェクトボードが削除されるときにトリガーされます。
| `link`   | リポジトリがプロジェクト ボードにリンクされるときにトリガーされます。
| `unlink` | リポジトリがプロジェクトボードからリンク解除されるときにトリガーされます。
| `update_user_permission` | 外部のコラボレータがプロジェクトボードに追加またはプロジェクトボードから削除されたとき、あるいは許可レベルが変更されたときにトリガーされます。

### `public_key` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | [{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} で新しいパブリック SSH キーをアカウントに追加](/articles/adding-a-new-ssh-key-to-your-github-account)するときにトリガーされます。
| `delete` | [{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} でパブリック SSH キーをアカウントから削除](/articles/reviewing-your-ssh-keys)するときにトリガーされます。

### `repo` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `access` | 所有するリポジトリが ["プライベート" から "パブリック" (またはその逆) に切り替えられた](/articles/making-a-private-repository-public)ときにトリガーされます。
| `add_member` | {% data variables.product.product_name %} ユーザーがリポジトリへの{% ifversion fpt or ghec %}[コラボレーション アクセス権を付与するために招待された](/articles/inviting-collaborators-to-a-personal-repository){% else %}[コラボレーション アクセス権を付与された](/articles/inviting-collaborators-to-a-personal-repository){% endif %}ときにトリガーされます。
| `add_topic` | リポジトリ所有者がリポジトリに[トピックを追加](/articles/classifying-your-repository-with-topics)するときにトリガーされます。
| `archived` | リポジトリ所有者が[リポジトリをアーカイブ](/articles/about-archiving-repositories)するときにトリガーされます。{% ifversion ghes %}
| `config.disable_anonymous_git_access` | パブリック リポジトリで[匿名の Git 読み取りアクセスが無効になった](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。
| `config.enable_anonymous_git_access` | パブリック リポジトリで[匿名の Git 読み取りアクセスが有効になった](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。
| `config.lock_anonymous_git_access` | リポジトリの[匿名の Git 読み取りアクセス設定がロックされる](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。
| `config.unlock_anonymous_git_access` | リポジトリの[匿名の Git 読み取りアクセス設定がロック解除される](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。{% endif %}
| `create` | [新しいリポジトリが作成される](/articles/creating-a-new-repository)ときにトリガーされます。
| `destroy` |  [リポジトリが削除される](/articles/deleting-a-repository)ときにトリガーされます。{% ifversion fpt or ghec %}
| `disable` | リポジトリが無効になっているときにトリガーされます ([資金が不足している](/articles/unlocking-a-locked-account)場合など)。{% endif %}{% ifversion fpt or ghec %}
| `download_zip` | リポジトリの ZIP または TAR アーカイブがダウンロードされたときにトリガーされます。
| `enable` | リポジトリが再び有効になるときにトリガーされます。{% endif %}
| `remove_member` | {% data variables.product.product_name %} ユーザーが[コラボレーターとしてリポジトリから削除される](/articles/removing-a-collaborator-from-a-personal-repository)ときにトリガーされます。
| `remove_topic` | リポジトリのオーナーがリポジトリからトピックを削除するときにトリガーされます。
| `rename` | [リポジトリの名前が変更される](/articles/renaming-a-repository)ときにトリガーされます。
| `staff_unlock` | エンタープライズ所有者または {% data variables.contact.github_support %} (リポジトリ管理者からのアクセス許可を持つ) が一時的にリポジトリのロックを解除したときにトリガーされます。 リポジトリの可視性は変更されません。
| `transfer` | [リポジトリが移譲される](/articles/how-to-transfer-a-repository)ときにトリガーされます。
| `transfer_start` | リポジトリの移譲が行われようとしているときにトリガーされます。
| `unarchived` | リポジトリのオーナーがリポジトリをアーカイブ解除するときにトリガーされます。

{% ifversion fpt or ghec %}
### `sponsors` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `custom_amount_settings_change` | カスタムの額を有効または無効にするとき、あるいは推奨されるカスタムの額を変更するときにトリガーされます (「[スポンサーシップ層を管理する](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)」を参照)。
| `repo_funding_links_file_action` | リポジトリ内の FUNDING ファイルを変更するときにトリガーされます (「[リポジトリにスポンサー ボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照)。
| `sponsor_sponsorship_cancel` | スポンサーシップをキャンセルするときにトリガーされます (「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)。
| `sponsor_sponsorship_create` | アカウントをスポンサーするときにトリガーされます (「[オープンソース共同作成者をスポンサーする](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)」を参照)。
| `sponsor_sponsorship_payment_complete` | アカウントをスポンサーして支払いが処理された後にトリガーされます (「[オープンソース共同作成者をスポンサーする](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)」を参照)。
| `sponsor_sponsorship_preference_change` | スポンサー付き開発者からメールによる更新を受け取るかどうかを変更するときにトリガーされます (「[スポンサーシップを管理する](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)」を参照)。
| `sponsor_sponsorship_tier_change` | スポンサーシップをアップグレードまたはダウングレードするときにトリガーされます (「[スポンサーシップをアップグレードする](/articles/upgrading-a-sponsorship)」および「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)。
| `sponsored_developer_approve` | {% data variables.product.prodname_sponsors %} アカウントが承認されるときにトリガーされます ([個人用アカウントに対する {% data variables.product.prodname_sponsors %} の設定に関するページ](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)を参照)。
| `sponsored_developer_create` | {% data variables.product.prodname_sponsors %} アカウントが作成されるときにトリガーされます ([個人用アカウントに対する {% data variables.product.prodname_sponsors %} の設定に関するページ](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)を参照)。
| `sponsored_developer_disable` | {% data variables.product.prodname_sponsors %} アカウントが無効になるとトリガーされます
| `sponsored_developer_redraft` | {% data variables.product.prodname_sponsors %} アカウントが承認済みの状態からドラフト状態に戻るとトリガーされます
| `sponsored_developer_profile_update` | スポンサー付き開発者のプロフィールを編集するときにトリガーされます (「[{% data variables.product.prodname_sponsors %} のプロフィール詳細を編集する](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)」を参照)。
| `sponsored_developer_request_approval` | 承認のために {% data variables.product.prodname_sponsors %} のアプリケーションを送信するときにトリガーされます ([個人用アカウントに対する {% data variables.product.prodname_sponsors %} の設定に関するページ](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)を参照)。
| `sponsored_developer_tier_description_update` | スポンサーシップ層の説明を変更するときにトリガーされます (「[スポンサーシップ層を管理する](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)」を参照)。
| `sponsored_developer_update_newsletter_send` | メールによる更新をスポンサーに送信するときにトリガーされます (「[スポンサーに連絡する](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)」を参照)。
| `waitlist_invite_sponsored_developer` | 順番待ちリストから {% data variables.product.prodname_sponsors %} への参加の招待を受けたときにトリガーされます ([個人用アカウントに対する {% data variables.product.prodname_sponsors %} の設定に関するページ](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)を参照)。
| `waitlist_join` | スポンサー付き開発者になるために順番待ちリストに参加するときにトリガーされます ([個人用アカウントに対する {% data variables.product.prodname_sponsors %} の設定に関するページ](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)を参照)。
{% endif %}

{% ifversion fpt or ghec %}
### `successor_invitation` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `accept` | 後継者の招待を受けるときにトリガーされます ([個人用アカウントのリポジトリの所有権の継続性の維持に関するページ](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)を参照)。
| `cancel` | 後継者の招待をキャンセルするときにトリガーされます ([個人用アカウントのリポジトリの所有権の継続性の維持に関するページ](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)を参照)。
| `create` | 後継者の招待を作成するときにトリガーされます ([個人用アカウントのリポジトリの所有権の継続性の維持に関するページ](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)を参照)。
| `decline` | 後継者の招待を拒否するときにトリガーされます ([個人用アカウントのリポジトリの所有権の継続性の維持に関するページ](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)を参照)。
| `revoke` | 後継者の招待を取り消すときにトリガーされます ([個人用アカウントのリポジトリの所有権の継続性の維持に関するページ](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)を参照)。
{% endif %}

{% ifversion ghes or ghae %}

### `team` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `add_member` | 所属する組織のメンバーが[ユーザーをチームに追加する](/articles/adding-organization-members-to-a-team)ときにトリガーされます。
| `add_repository` | 自分がメンバーである Team にリポジトリの管理が任せられるときにトリガーされます。
| `create` | 自分が所属している Organization で新たな Team が作成されるときにトリガーされます。
| `destroy` | 自分がメンバーである Team が Organization から削除されるときにトリガーされます。
| `remove_member` | 組織のメンバーが所属する[チームから削除される](/articles/removing-organization-members-from-a-team)ときにトリガーされます。
| `remove_repository` | リポジトリが Team の管理下でなくなるときにトリガーされます。

{% endif %}

{% ifversion not ghae %}
### `two_factor_authentication` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `enabled` | [2 要素認証](/articles/securing-your-account-with-two-factor-authentication-2fa)が有効になっているときにトリガーされます。
| `disabled` | 2 要素認証が無効になるときにトリガーされます。
{% endif %}

### `user` カテゴリのアクション

| アクション | 説明
|--------------------|---------------------
| `add_email` | {% ifversion not ghae %}[新しいメール アドレスを追加する](/articles/changing-your-primary-email-address){% else %}新しいメール アドレスを追加する{% endif %}ときにトリガーされます。{% ifversion fpt or ghec %}
| `codespaces_trusted_repo_access_granted` | [リポジトリ用に作成した codespace からご利用の個人用アカウントが所有する他のリポジトリへのアクセスを許可する](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)ときにトリガーされます。
| `codespaces_trusted_repo_access_revoked` | [リポジトリ用に作成した codespace からご利用の個人用アカウントが所有する他のリポジトリへのアクセスを禁止する](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)ときにトリガーされます。 {% endif %}
| `create` | 新しい個人用アカウントを作成するときにトリガーされます。{% ifversion not ghae %}
| `change_password` | 自分のパスワードを変更するときにトリガーされます。
| `forgot_password` | [パスワードのリセット](/articles/how-can-i-reset-my-password)を求めるときにトリガーされます。{% endif %}
| `hide_private_contributions_count` | [プライベート コントリビューションをプロフィールで非公開にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)ときにトリガーされます。
| `login` | {% data variables.location.product_location %} にログインするときにトリガーされます。{% ifversion ghes or ghae %}
`mandatory_message_viewed`   | 必須メッセージを表示するときにトリガーされます ([ユーザー メッセージのカスタマイズに関するページ](/admin/user-management/customizing-user-messages-for-your-enterprise)を参照)。 | {% endif %}
| `failed_login` | 正常にログインできなかったときにトリガーされます
| `remove_email` | メール アドレスを削除するときにトリガーされます。
| `rename` | アカウントの名前を変更するときにトリガーされます。{% ifversion fpt or ghec %}
| `report_content` | [イシューまたは pull request、あるいはイシュー、pull request、コミットに関するコメントをレポートする](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)ときにトリガーされます。{% endif %}
| `show_private_contributions_count` | [プライベート コントリビューションをプロフィールで公開する](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)ときにトリガーされます。{% ifversion not ghae %}
| `two_factor_requested` | {% data variables.product.product_name %} から [2 要素認証コード](/articles/accessing-github-using-two-factor-authentication)を求められたときにトリガーされます。{% endif %}

### `user_status` カテゴリのアクション

| アクション | 説明
|--------------------|---------------------
| `update` | 自分のプロファイルでステータスを設定または変更するときにトリガーされます。 詳細については、「[状態を設定する](/articles/personalizing-your-profile/#setting-a-status)」を参照してください。
| `destroy` | 自分のプロファイルでステータスを消去するときにトリガーされます。
