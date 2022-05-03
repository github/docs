---
title: セキュリティログをレビューする
intro: You can review the security log for your personal account to better understand actions you've performed and actions others have performed that involve you.
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
shortTitle: セキュリティ ログ
---

## セキュリティログにアクセスする

The security log lists all actions performed within the last 90 days.

{% data reusables.user-settings.access_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. In the "Archives" section of the sidebar, click **{% octicon "log" aria-label="The log icon" %} Security log**.
{% else %}
1. ユーザ設定サイドバーで [**Security log**] をクリックします。 ![セキュリティログのタブ](/assets/images/help/settings/audit-log-tab.png)
{% endif %}

{% ifversion fpt or ghae or ghes or ghec %}
## セキュリティログを検索する

{% data reusables.audit_log.audit-log-search %}

### 実行されたアクションに基づく検索
{% else %}
## セキュリティログでのイベントを理解する
{% endif %}

セキュリティログにリストされているイベントは、アクションによってトリガーされます。 アクションは次のカテゴリに分類されます。

| カテゴリ名                                                                                  | 説明                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| [`支払い`](#billing-category-actions)                                                     | 自分の支払い情報に関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                                |
| [`codespaces`](#codespaces-category-actions)                                           | {% data variables.product.prodname_codespaces %} に関連するすべての活動が対象です。 詳しい情報については、「[{% data variables.product.prodname_codespaces %} について](/github/developing-online-with-codespaces/about-codespaces)」を参照してください。                                                                                                                            |
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | {% data variables.product.prodname_marketplace %} Developer Agreement の署名に関連するすべての活動が対象です。                                                                                                                                                                                                                                               |
| [`marketplace_listing`](#marketplace_listing-category-actions)                         | {% data variables.product.prodname_marketplace %} に一覧表示しているアプリに関連するすべての活動が対象です。{% endif %}
| [`oauth_access`](#oauth_access-category-actions)                                       | Contains all activities related to [{% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) you've connected with.{% ifversion fpt or ghec %}
| [`payment_method`](#payment_method-category-actions)                                   | {% data variables.product.prodname_dotcom %} プランに対する支払いに関連するすべての活動が対象です。{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                 | 自分のプロファイル写真に関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                             |
| [`project`](#project-category-actions)                                                 | プロジェクト ボードに関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                              |
| [`public_key`](#public_key-category-actions)                                           | [公開 SSH キー](/articles/adding-a-new-ssh-key-to-your-github-account)に関連するすべての活動が対象です。                                                                                                                                                                                                                                                      |
| [`repo`](#repo-category-actions)                                                       | Contains all activities related to the repositories you own.{% ifversion fpt or ghec %}
| [`sponsors`](#sponsors-category-actions)                                               | {% data variables.product.prodname_sponsors %} およびスポンサーボタンに関連するすべてのイベントが対象です (「[{% data variables.product.prodname_sponsors %} について](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)」と「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照){% endif %}{% ifversion ghes or ghae %}
| [`Team`](#team-category-actions)                                                       | 所属する Team に関連するすべてのアクティビティが対象です。{% endif %}{% ifversion not ghae %}
| [`two_factor_authentication`](#two_factor_authentication-category-actions)             | [2 要素認証](/articles/securing-your-account-with-two-factor-authentication-2fa)に関連するすべてのアクティビティが対象です。{% endif %}
| [`ユーザ`](#user-category-actions)                                                        | アカウントに関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                                   |

{% ifversion fpt or ghec %}

## セキュリティログをエクスポートする

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

## セキュリティログのアクション

セキュリティログにイベントとして記録される最も一般的なアクションの概要です。

{% ifversion fpt or ghec %}

### `billing` カテゴリアクション

| アクション                 | 説明                                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `change_billing_type` | {% data variables.product.prodname_dotcom %} の[支払い方法を変更する](/articles/adding-or-editing-a-payment-method)ときにトリガーされます。 |
| `change_email`        | [自分のメール アドレスを変更する](/articles/changing-your-primary-email-address)ときにトリガーされます。                                        |

### `codespaces` カテゴリアクション

| アクション                                | 説明                                                                                                                                                                                                                           |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                             | [コードスペースを作成](/github/developing-online-with-codespaces/creating-a-codespace)するとトリガーされます。                                                                                                                                     |
| `resume`                             | 中断されたコードスペースを再開するとトリガーされます。                                                                                                                                                                                                  |
| `delete`                             | [コードスペースを削除](/github/developing-online-with-codespaces/deleting-a-codespace)するとトリガーされます。                                                                                                                                     |
| `manage_access_and_security`         | [コードスペースがアクセスできるリポジトリ](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)を更新するとトリガーされます。                                                                                                 |
| `trusted_repositories_access_update` | Triggered when you change your personal account's [access and security setting for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces). |

### `marketplace_agreement_signature` カテゴリアクション

| アクション    | 説明                                                                                      |
| -------- | --------------------------------------------------------------------------------------- |
| `create` | {% data variables.product.prodname_marketplace %} Developer Agreement に署名するときにトリガーされます。 |

### `marketplace_listing` カテゴリアクション

| アクション     | 説明                                                                                  |
| --------- | ----------------------------------------------------------------------------------- |
| `承認`      | 一覧表を {% data variables.product.prodname_marketplace %}に掲載することが承認されるときにトリガーされます。     |
| `create`  | {% data variables.product.prodname_marketplace %} で自分のアプリケーションの一覧表を作成するときにトリガーされます。 |
| `delist`  | 一覧表が {% data variables.product.prodname_marketplace %} から削除されるときにトリガーされます。          |
| `redraft` | 一覧表がドラフト状態に戻されるときにトリガーされます。                                                         |
| `reject`  | 一覧表が {% data variables.product.prodname_marketplace %} に掲載することを認められないときにトリガーされます。   |

{% endif %}

### `oauth_authorization` category actions

| アクション     | 説明                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`  | Triggered when you [grant access to an {% data variables.product.prodname_oauth_app %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps).                                                                                                                                                                                                              |
| `destroy` | Triggered when you [revoke an {% data variables.product.prodname_oauth_app %}'s access to your account](/articles/reviewing-your-authorized-integrations){% ifversion fpt or ghae-issue-4374 or ghes > 3.2 or ghec %} and when [authorizations are revoked or expire](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).{% else %}.{% endif %}

{% ifversion fpt or ghec %}

### `payment_method` カテゴリアクション

| アクション    | 説明                                                      |
| -------- | ------------------------------------------------------- |
| `create` | 新しいクレジット カードや PayPal アカウントなど、新たな支払い方法が追加されるときにトリガーされます。 |
| `update` | 既存の支払い方法が更新されるときにトリガーされます。                              |

{% endif %}

### `profile_picture` カテゴリアクション

| アクション    | 説明                                                                           |
| -------- | ---------------------------------------------------------------------------- |
| `update` | [自分のプロフィール写真を設定または更新する](/articles/setting-your-profile-picture/)ときにトリガーされます。 |

### `project` カテゴリアクション

| アクション                    | 説明                                                                      |
| ------------------------ | ----------------------------------------------------------------------- |
| `access`                 | プロジェクト ボードの可視性が変更されるときにトリガーされます。                                        |
| `create`                 | プロジェクト ボードが作成されるときにトリガーされます。                                            |
| `rename`                 | プロジェクトボードの名前が変更されるときにトリガーされます。                                          |
| `update`                 | プロジェクト ボードが更新されるときにトリガーされます。                                            |
| `delete`                 | プロジェクトボードが削除されるときにトリガーされます。                                             |
| `link`                   | リポジトリがプロジェクト ボードにリンクされるときにトリガーされます。                                     |
| `unlink`                 | リポジトリがプロジェクトボードからリンク解除されるときにトリガーされます。                                   |
| `update_user_permission` | 外部のコラボレータがプロジェクトボードに追加またはプロジェクトボードから削除されたとき、あるいは許可レベルが変更されたときにトリガーされます。 |

### `public_key` カテゴリアクション

| アクション    | 説明                                                                                                                                                                                                                                                         |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create` | Triggered when you [add a new public SSH key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}](/articles/adding-a-new-ssh-key-to-your-github-account). |
| `delete` | Triggered when you [remove a public SSH key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}](/articles/reviewing-your-ssh-keys).                      |

### `repo` カテゴリアクション

| アクション                                 | 説明                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                              | 自分が所有するリポジトリが["プライベート" から "パブリック" に切り替えられる](/articles/making-a-private-repository-public) (またはその逆) ときにトリガーされます。                                                                                                                                                                                                              |
| `add_member`                          | Triggered when a {% data variables.product.product_name %} user is {% ifversion fpt or ghec %}[invited to have collaboration access](/articles/inviting-collaborators-to-a-personal-repository){% else %}[given collaboration access](/articles/inviting-collaborators-to-a-personal-repository){% endif %} to a repository. |
| `add_topic`                           | リポジトリのオーナーがリポジトリに[トピックを追加する](/articles/classifying-your-repository-with-topics)ときにトリガーされます。                                                                                                                                                                                                                                  |
| `archived`                            | リポジトリのオーナーが[リポジトリをアーカイブする](/articles/about-archiving-repositories)ときにトリガーされます。{% ifversion ghes %}
| `config.disable_anonymous_git_access` | 公開リポジトリで[匿名の Git 読み取りアクセスが無効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                                                                                                             |
| `config.enable_anonymous_git_access`  | 公開リポジトリで[匿名の Git 読み取りアクセスが有効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                                                                                                             |
| `config.lock_anonymous_git_access`    | リポジトリの[匿名の Git 読み取りアクセス設定がロックされる](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。                                                                                                                                                        |
| `config.unlock_anonymous_git_access`  | リポジトリの[匿名の Git 読み取りアクセス設定がロック解除される](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。{% endif %}
| `create`                              | [新たなリポジトリが作成される](/articles/creating-a-new-repository)ときにトリガーされます。                                                                                                                                                                                                                                                            |
| `destroy`                             | [リポジトリが削除される](/articles/deleting-a-repository)ときにトリガーされます。{% ifversion fpt or ghec %}
| `disable`                             | Triggered when a repository is disabled (e.g., for [insufficient funds](/articles/unlocking-a-locked-account)).{% endif %}{% ifversion fpt or ghec %}
| `download_zip`                        | Triggered when a ZIP or TAR archive of a repository is downloaded.                                                                                                                                                                                                                                                           |
| `enable`                              | リポジトリが再び有効になるときにトリガーされます。{% endif %}
| `remove_member`                       | {% data variables.product.product_name %}ユーザが[リポジトリのコラボレーターではなくなる](/articles/removing-a-collaborator-from-a-personal-repository)ときにトリガーされます。                                                                                                                                                                                 |
| `remove_topic`                        | リポジトリのオーナーがリポジトリからトピックを削除するときにトリガーされます。                                                                                                                                                                                                                                                                                      |
| `rename`                              | [リポジトリの名前が変更される](/articles/renaming-a-repository)ときにトリガーされます。                                                                                                                                                                                                                                                                |
| `移譲`                                  | [リポジトリが移譲される](/articles/how-to-transfer-a-repository)ときにトリガーされます。                                                                                                                                                                                                                                                            |
| `transfer_start`                      | リポジトリの移譲が行われようとしているときにトリガーされます。                                                                                                                                                                                                                                                                                              |
| `unarchived`                          | リポジトリのオーナーがリポジトリをアーカイブ解除するときにトリガーされます。                                                                                                                                                                                                                                                                                       |

{% ifversion fpt or ghec %}
### `sponsors` カテゴリアクション

| アクション                                         | 説明                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom_amount_settings_change`               | カスタム金額を有効または無効にするとき、または提案されたカスタム金額を変更するときにトリガーされます (「[スポンサーシップ層を管理する](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)」を参照)。                                                                                                                                      |
| `repo_funding_links_file_action`              | リポジトリで FUNDING ファイルを変更したときにトリガーされます (「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照)                                                                                                                                                                                          |
| `sponsor_sponsorship_cancel`                  | スポンサーシップをキャンセルしたときにトリガーされます (「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)                                                                                                                                                                                                                        |
| `sponsor_sponsorship_create`                  | アカウントをスポンサーするとトリガーされます (「[オープンソースコントリビューターに対するスポンサー](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)」を参照)                                                                                                                                                                      |
| `sponsor_sponsorship_payment_complete`        | アカウントをスポンサーし、支払が処理されるとトリガーされます (「[オープンソースコントリビューターに対するスポンサー](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)」を参照)                                                                                                                                                              |
| `sponsor_sponsorship_preference_change`       | スポンサード開発者からメールで最新情報を受け取るかどうかを変更するとトリガーされます (「[スポンサーシップを管理する](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)」を参照)                                                                                                                                                                          |
| `sponsor_sponsorship_tier_change`             | スポンサーシップをアップグレードまたはダウングレードしたときにトリガーされます (「[スポンサーシップをアップグレードする](/articles/upgrading-a-sponsorship)」および「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)                                                                                                                                                |
| `sponsored_developer_approve`                 | Triggered when your {% data variables.product.prodname_sponsors %} account is approved (see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                     |
| `sponsored_developer_create`                  | Triggered when your {% data variables.product.prodname_sponsors %} account is created (see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                      |
| `sponsored_developer_disable`                 | {% data variables.product.prodname_sponsors %} アカウントが無効になるとトリガーされます                                                                                                                                                                                                                                                 |
| `sponsored_developer_redraft`                 | {% data variables.product.prodname_sponsors %} アカウントが承認済みの状態からドラフト状態に戻るとトリガーされます                                                                                                                                                                                                                                    |
| `sponsored_developer_profile_update`          | スポンサード開発者のプロフィールを編集するとトリガーされます (「[{% data variables.product.prodname_sponsors %} のプロフィール詳細を編集する](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)」を参照)                                                                                                    |
| `sponsored_developer_request_approval`        | Triggered when you submit your application for {% data variables.product.prodname_sponsors %} for approval (see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)") |
| `sponsored_developer_tier_description_update` | スポンサーシップ層の説明を変更したときにトリガーされます (「[スポンサーシップ層を管理する](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)」を参照)                                                                                                                                                                      |
| `sponsored_developer_update_newsletter_send`  | スポンサーにメールで最新情報を送信するとトリガーされます (「[スポンサーに連絡する](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)」を参照)                                                                                                                                                                                 |
| `waitlist_invite_sponsored_developer`         | Triggered when you are invited to join {% data variables.product.prodname_sponsors %} from the waitlist (see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)")    |
| `waitlist_join`                               | Triggered when you join the waitlist to become a sponsored developer (see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                                       |
{% endif %}

{% ifversion fpt or ghec %}
### `successor_invitation` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`  | Triggered when you accept a succession invitation (see "[Maintaining ownership continuity of your personal account's repositories](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")  |
| `cancel`  | Triggered when you cancel a succession invitation (see "[Maintaining ownership continuity of your personal account's repositories](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")  |
| `create`  | Triggered when you create a succession invitation (see "[Maintaining ownership continuity of your personal account's repositories](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")  |
| `decline` | Triggered when you decline a succession invitation (see "[Maintaining ownership continuity of your personal account's repositories](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)") |
| `revoke`  | Triggered when you revoke a succession invitation (see "[Maintaining ownership continuity of your personal account's repositories](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")  |
{% endif %}

{% ifversion ghes or ghae %}

### `team` カテゴリアクション

| アクション               | 説明                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------- |
| `add_member`        | 自分が所属している Organization のメンバーが[自分を Team に追加する](/articles/adding-organization-members-to-a-team)ときにトリガーされます。    |
| `add_repository`    | 自分がメンバーである Team にリポジトリの管理が任せられるときにトリガーされます。                                                                   |
| `create`            | 自分が所属している Organization で新たな Team が作成されるときにトリガーされます。                                                           |
| `destroy`           | 自分がメンバーである Team が Organization から削除されるときにトリガーされます。                                                            |
| `remove_member`     | Organization のメンバーが自分がメンバーである [Team から削除される](/articles/removing-organization-members-from-a-team)ときにトリガーされます。 |
| `remove_repository` | リポジトリが Team の管理下でなくなるときにトリガーされます。                                                                             |

{% endif %}

{% ifversion not ghae %}
### `two_factor_authentication` カテゴリアクション

| アクション      | 説明                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------- |
| `enabled`  | [2 要素認証](/articles/securing-your-account-with-two-factor-authentication-2fa)が有効になるときにトリガーされます。 |
| `disabled` | 2 要素認証が無効になるときにトリガーされます。                                                                       |
{% endif %}

### `user` カテゴリアクション

| アクション                                                                                                                                                                    | 説明                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_email`                                                                                                                                                              | トリガーされる条件                                                                                                                                                                                                                    |
| {% ifversion not ghae %}[add a new email address](/articles/changing-your-primary-email-address){% else %}add a new email address{% endif %}.{% ifversion fpt or ghec %} |                                                                                                                                                                                                                              |
| `codespaces_trusted_repo_access_granted`                                                                                                                                 | Triggered when you [allow the codespaces you create for a repository to access other repositories owned by your personal account](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).    |
| `codespaces_trusted_repo_access_revoked`                                                                                                                                 | Triggered when you [disallow the codespaces you create for a repository to access other repositories owned by your personal account](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces). |{% endif %}
| `create`                                                                                                                                                                 | Triggered when you create a new personal account.{% ifversion not ghae %}
| `change_password`                                                                                                                                                        | 自分のパスワードを変更するときにトリガーされます。                                                                                                                                                                                                    |
| `forgot_password`                                                                                                                                                        | [パスワード のリセット](/articles/how-can-i-reset-my-password)を要求したときにトリガーされます。{% endif %}
| `hide_private_contributions_count`                                                                                                                                       | [自分のプロファイルでプライベート コントリビューションを非表示にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)ときにトリガーされます。                                                                                                 |
| `login`                                                                                                                                                                  | Triggered when you log in to {% data variables.product.product_location %}.{% ifversion ghes or ghae %}


`mandatory_message_viewed`   | 必須メッセージを表示するとトリガーされます (詳細は「[ユーザーメッセージのカスタマイズ](/admin/user-management/customizing-user-messages-for-your-enterprise)」を参照してください) | |{% endif %}| | `failed_login` | 正常にログインできなかったときにトリガーされます。 | `remove_email` | メール アドレスを削除するとトリガーされます。 | `rename` | Triggered when you rename your account.{% ifversion fpt or ghec %} | `report_content` | Triggered when you [report an issue or pull request, or a comment on an issue, pull request, or commit](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %} | `show_private_contributions_count` | Triggered when you [publicize private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% ifversion not ghae %} | `two_factor_requested` | Triggered when {% data variables.product.product_name %} asks you for [your two-factor authentication code](/articles/accessing-github-using-two-factor-authentication).{% endif %}

### `user_status` カテゴリアクション

| アクション     | 説明                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| `update`  | 自分のプロファイルでステータスを設定または変更するときにトリガーされます。 詳細は「[ステータスを設定する](/articles/personalizing-your-profile/#setting-a-status)」を参照してください。 |
| `destroy` | 自分のプロファイルでステータスを消去するときにトリガーされます。                                                                                          |
