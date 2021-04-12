---
title: セキュリティログをレビューする
intro: ユーザアカウントのセキュリティログをレビューして、自分が実行したアクションと、他のユーザが実行したアクションについて詳しく知ることができます。
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/reviewing-your-security-log
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - アイデンティティ
  - アクセス管理
---

### セキュリティログにアクセスする

セキュリティログには、過去 90 日間に実行されたすべてのアクションが{% if currentVersion ver_lt "enterprise-server@2.20" %}最大 50 件まで{% endif %}リストされます。

{% data reusables.user_settings.access_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
2. ユーザ設定サイドバーで [**Security log**] をクリックします。 ![セキュリティログのタブ](/assets/images/help/settings/audit-log-tab.png)
{% else %}
{% data reusables.user_settings.security %}
3. [Security history] の下に、自分のログが表示されます。 ![セキュリティ ログ](/assets/images/help/settings/user_security_log.png)
4. エントリをクリックして、イベントに関する詳細情報を表示します。 ![セキュリティ ログ](/assets/images/help/settings/user_security_history_action.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### セキュリティログを検索する

{% data reusables.audit_log.audit-log-search %}

#### 実行されたアクションに基づく検索
{% else %}
### セキュリティログでのイベントを理解する
{% endif %}

セキュリティログにリストされているイベントは、アクションによってトリガーされます。 アクションは次のカテゴリに分類されます。

| カテゴリ名                                                                                  | 説明                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |{% if currentVersion == "free-pro-team@latest" %}
| [`account_recovery_token`](#account_recovery_token-category-actions)                   | | カテゴリ名 | 説明 [リカバリトークンの追加](/articles/configuring-two-factor-authentication-recovery-methods)に関連するすべての活動が対象です。                                                                                                                                                                                                                                                            |
| [`支払い`](#billing-category-actions)                                                     | 自分の支払い情報に関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                                                                |
| [`codespaces`](#codespaces-category-actions)                                           | {% data variables.product.prodname_codespaces %} に関連するすべての活動が対象です。 詳しい情報については、「[{% data variables.product.prodname_codespaces %} について](/github/developing-online-with-codespaces/about-codespaces)」を参照してください。                                                                                                                                                            |
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | {% data variables.product.prodname_marketplace %} Developer Agreement の署名に関連するすべての活動が対象です。                                                                                                                                                                                                                                                                               |
| [`marketplace_listing`](#marketplace_listing-category-actions)                         | {% data variables.product.prodname_marketplace %} に一覧表示しているアプリに関連するすべての活動が対象です。{% endif %}
| [`oauth_access`](#oauth_access-category-actions)                                       | 接続している [{% data variables.product.prodname_oauth_app %}](/articles/authorizing-oauth-apps) に関連するすべてのアクティビティが対象です。{% if currentVersion == "free-pro-team@latest" %}
| [`payment_method`](#payment_method-category-actions)                                   | {% data variables.product.prodname_dotcom %} プランに対する支払いに関連するすべての活動が対象です。{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                 | 自分のプロファイル写真に関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                                                             |
| [`project`](#project-category-actions)                                                 | プロジェクト ボードに関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                                                              |
| [`public_key`](#public_key-category-actions)                                           | [公開 SSH キー](/articles/adding-a-new-ssh-key-to-your-github-account)に関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                      |
| [`repo`](#repo-category-actions)                                                       | 所有するリポジトリに関連するすべてのアクティビティが対象です。{% if currentVersion == "free-pro-team@latest" %}
| [`sponsors`](#sponsors-category-actions)                                               | {% data variables.product.prodname_sponsors %} およびスポンサーボタンに関連するすべてのイベントが対象です (「[{% data variables.product.prodname_sponsors %} について](/articles/about-github-sponsors)」と「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照){% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| [`Team`](#team-category-actions)                                                       | 所属する Team に関連するすべてのアクティビティが対象です。{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`two_factor_authentication`](#two_factor_authentication-category-actions)             | [2 要素認証](/articles/securing-your-account-with-two-factor-authentication-2fa)に関連するすべてのアクティビティが対象です。{% endif %}
| [`ユーザ`](#user-category-actions)                                                        | アカウントに関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                                                                   |

{% if currentVersion == "free-pro-team@latest" %}

### セキュリティログをエクスポートする

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

### セキュリティログのアクション

セキュリティログにイベントとして記録される最も一般的なアクションの概要です。

{% if currentVersion == "free-pro-team@latest" %}

#### `account_recovery_token` カテゴリアクション

| アクション           | 説明                                                                                                          |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| `confirm`       | 正常に[リカバリプロバイダ付きの新たなトークンを保存する](/articles/configuring-two-factor-authentication-recovery-methods)ときにトリガーされます。 |
| `recover`       | 正常に[アカウント リカバリ トークンを引き換える](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)ときにトリガーされます。  |
| `recover_error` | トークンが使用されているにもかかわらず {% data variables.product.prodname_dotcom %} がそれを有効にできないときにトリガーされます。                    |

#### `billing` カテゴリアクション

| アクション                 | 説明                                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `change_billing_type` | {% data variables.product.prodname_dotcom %} の[支払い方法を変更する](/articles/adding-or-editing-a-payment-method)ときにトリガーされます。 |
| `change_email`        | [自分のメール アドレスを変更する](/articles/changing-your-primary-email-address)ときにトリガーされます。                                        |

#### `codespaces` カテゴリアクション

| アクション                                | 説明                                                                                                                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `trusted_repositories_access_update` | ユーザーアカウントの [ アクセスと、{% data variables.product.prodname_codespaces %} のセキュリティ設定](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)を変更するとトリガーされます。 |

#### `marketplace_agreement_signature` カテゴリアクション

| アクション    | 説明                                                                                      |
| -------- | --------------------------------------------------------------------------------------- |
| `create` | {% data variables.product.prodname_marketplace %} Developer Agreement に署名するときにトリガーされます。 |

#### `marketplace_listing` カテゴリアクション

| アクション     | 説明                                                                                  |
| --------- | ----------------------------------------------------------------------------------- |
| `承認`      | 一覧表を {% data variables.product.prodname_marketplace %}に掲載することが承認されるときにトリガーされます。     |
| `create`  | {% data variables.product.prodname_marketplace %} で自分のアプリケーションの一覧表を作成するときにトリガーされます。 |
| `delist`  | 一覧表が {% data variables.product.prodname_marketplace %} から削除されるときにトリガーされます。          |
| `redraft` | 一覧表がドラフト状態に戻されるときにトリガーされます。                                                         |
| `reject`  | 一覧表が {% data variables.product.prodname_marketplace %} に掲載することを認められないときにトリガーされます。   |

{% endif %}

#### `oauth_access` カテゴリアクション

| アクション     | 説明                                                                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `create`  | [{% data variables.product.prodname_oauth_app %} へのアクセスを許可する](/articles/authorizing-oauth-apps)ときにトリガーされます。                            |
| `destroy` | [自分のアカウントへの {% data variables.product.prodname_oauth_app %} のアクセス権を取り消す](/articles/reviewing-your-authorized-integrations)ときにトリガーされます。 |

{% if currentVersion == "free-pro-team@latest" %}

#### `payment_method` カテゴリアクション

| アクション    | 説明                                                                   |
| -------- | -------------------------------------------------------------------- |
| `clear`  | ファイルでの[支払い方法](/articles/removing-a-payment-method)が削除されるときにトリガーされます。 |
| `create` | 新しいクレジット カードや PayPal アカウントなど、新たな支払い方法が追加されるときにトリガーされます。              |
| `update` | 既存の支払い方法が更新されるときにトリガーされます。                                           |

{% endif %}

#### `profile_picture` カテゴリアクション

| アクション    | 説明                                                                           |
| -------- | ---------------------------------------------------------------------------- |
| `update` | [自分のプロフィール写真を設定または更新する](/articles/setting-your-profile-picture/)ときにトリガーされます。 |

#### `project` カテゴリアクション

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

#### `public_key` カテゴリアクション

| アクション    | 説明                                                                                                                                         |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `create` | [新たな公開 SSH キーを自分の {% data variables.product.product_name %} アカウントに追加する](/articles/adding-a-new-ssh-key-to-your-github-account)ときにトリガーされます。 |
| `delete` | [公開 SSH キーを自分の {% data variables.product.product_name %} アカウントから削除する](/articles/reviewing-your-ssh-keys)ときにトリガーされます。                       |

#### `repo` カテゴリアクション

| アクション                                 | 説明                                                                                                                                                                                                                                                                                                 |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                              | 自分が所有するリポジトリが["プライベート" から "パブリック" に切り替えられる](/articles/making-a-private-repository-public) (またはその逆) ときにトリガーされます。                                                                                                                                                                                    |
| `add_member`                          | {% data variables.product.product_name %} ユーザがリポジトリへの{% if currentVersion == "free-pro-team@latest" %}[共同アクセス権を保有するように招待される](/articles/inviting-collaborators-to-a-personal-repository){% else %}[共同アクセス権を付与される](/articles/inviting-collaborators-to-a-personal-repository){% endif %}ときにトリガーされます。 |
| `add_topic`                           | リポジトリのオーナーがリポジトリに[トピックを追加する](/articles/classifying-your-repository-with-topics)ときにトリガーされます。                                                                                                                                                                                                        |
| `archived`                            | リポジトリのオーナーが[リポジトリをアーカイブする](/articles/about-archiving-repositories)ときにトリガーされます。{% if enterpriseServerVersions contains currentVersion %}
| `config.disable_anonymous_git_access` | 公開リポジトリで[匿名の Git 読み取りアクセスが無効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                                                                                   |
| `config.enable_anonymous_git_access`  | 公開リポジトリで[匿名の Git 読み取りアクセスが有効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                                                                                   |
| `config.lock_anonymous_git_access`    | リポジトリの[匿名の Git 読み取りアクセス設定がロックされる](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。                                                                                                                              |
| `config.unlock_anonymous_git_access`  | リポジトリの[匿名の Git 読み取りアクセス設定がロック解除される](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。{% endif %}
| `create`                              | [新たなリポジトリが作成される](/articles/creating-a-new-repository)ときにトリガーされます。                                                                                                                                                                                                                                  |
| `destroy`                             | [リポジトリが削除される](/articles/deleting-a-repository)ときにトリガーされます。{% if currentVersion == "free-pro-team@latest" %}
| `disable`                             | リポジトリが無効になるときにトリガーされます ([残高不足](/articles/unlocking-a-locked-account)などの場合)。{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `enable`                              | リポジトリが再び有効になるときにトリガーされます。{% endif %}
| `remove_member`                       | {% data variables.product.product_name %}ユーザが[リポジトリのコラボレーターではなくなる](/articles/removing-a-collaborator-from-a-personal-repository)ときにトリガーされます。                                                                                                                                                       |
| `remove_topic`                        | リポジトリのオーナーがリポジトリからトピックを削除するときにトリガーされます。                                                                                                                                                                                                                                                            |
| `rename`                              | [リポジトリの名前が変更される](/articles/renaming-a-repository)ときにトリガーされます。                                                                                                                                                                                                                                      |
| `移譲`                                  | [リポジトリが移譲される](/articles/how-to-transfer-a-repository)ときにトリガーされます。                                                                                                                                                                                                                                  |
| `transfer_start`                      | リポジトリの移譲が行われようとしているときにトリガーされます。                                                                                                                                                                                                                                                                    |
| `unarchived`                          | リポジトリのオーナーがリポジトリをアーカイブ解除するときにトリガーされます。                                                                                                                                                                                                                                                             |

{% if currentVersion == "free-pro-team@latest" %}
#### `sponsors` カテゴリアクション

| アクション                                         | 説明                                                                                                                                                                                                                                                                      |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo_funding_link_button_toggle`             | リポジトリでスポンサーボタンの表示を有効化または無効化したときにトリガーされます (「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照)                                                                                                                                         |
| `repo_funding_links_file_action`              | リポジトリで FUNDING ファイルを変更したときにトリガーされます (「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照)                                                                                                                                              |
| `sponsor_sponsorship_cancel`                  | スポンサーシップをキャンセルしたときにトリガーされます (「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)                                                                                                                                                                            |
| `sponsor_sponsorship_create`                  | アカウントをスポンサーするとトリガーされます (「[オープンソースコントリビューターに対するスポンサー](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-an-open-source-contributor)」を参照)                                                                                                      |
| `sponsor_sponsorship_preference_change`       | スポンサード開発者からメールで最新情報を受け取るかどうかを変更したときにトリガーされます (「[スポンサーシップを管理する](/articles/managing-your-sponsorship)」を参照)                                                                                                                                                                |
| `sponsor_sponsorship_tier_change`             | スポンサーシップをアップグレードまたはダウングレードしたときにトリガーされます (「[スポンサーシップをアップグレードする](/articles/upgrading-a-sponsorship)」および「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)                                                                                                    |
| `sponsored_developer_approve`                 | {% data variables.product.prodname_sponsors %}アカウントが承認されるとトリガーされます（「[ユーザアカウントに{% data variables.product.prodname_sponsors %}を設定する](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)」を参照）             |
| `sponsored_developer_create`                  | {% data variables.product.prodname_sponsors %}アカウントが作成されるとトリガーされます（「[ユーザアカウントに{% data variables.product.prodname_sponsors %}を設定する](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)」を参照）             |
| `sponsored_developer_profile_update`          | スポンサード開発者のプロフィールを編集するとトリガーされます（「[{% data variables.product.prodname_sponsors %}のプロフィール詳細を編集する](/github/supporting-the-open-source-community-with-github-sponsors/editing-your-profile-details-for-github-sponsors)」を参照）                                                 |
| `sponsored_developer_request_approval`        | 承認のために{% data variables.product.prodname_sponsors %}のアプリケーションをサブミットするとトリガーされます（「[ユーザアカウントに{% data variables.product.prodname_sponsors %}を設定する](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)」を参照） |
| `sponsored_developer_tier_description_update` | スポンサーシップ層の説明を変更したときにトリガーされます (「[スポンサーシップ層を変更する](/articles/changing-your-sponsorship-tiers)」を参照)                                                                                                                                                                         |
| `sponsored_developer_update_newsletter_send`  | スポンサーにメールで最新情報を送信したときにトリガーされます (「[スポンサーに連絡する](/articles/contacting-your-sponsors)」を参照)                                                                                                                                                                                  |
| `waitlist_invite_sponsored_developer`         | 待ちリストから{% data variables.product.prodname_sponsors %}に参加するよう招待されたときにトリガーされます（「[ユーザアカウントに{% data variables.product.prodname_sponsors %}を設定する](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)」を参照）   |
| `waitlist_join`                               | スポンサード開発者になるために待ちリストに参加するとトリガーされます（「[ユーザアカウントに{% data variables.product.prodname_sponsors %}を設定する](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)」を参照）                                             |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `successor_invitation` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`  | 継承の招待を承諾するとトリガーされます（「[ユーザアカウントのリポジトリの所有権の継続性を管理する](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)」を参照）    |
| `cancel`  | 継承の招待をキャンセルするとトリガーされます（「[ユーザアカウントのリポジトリの所有権の継続性を管理する](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)」を参照） |
| `create`  | 継承の招待を作成するとトリガーされます（「[ユーザアカウントのリポジトリの所有権の継続性を管理する](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)」を参照）    |
| `decline` | 継承の招待を拒否するとトリガーされます（「[ユーザアカウントのリポジトリの所有権の継続性を管理する](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)」を参照）    |
| `revoke`  | 継承の招待を取り消すとトリガーされます（「[ユーザアカウントのリポジトリの所有権の継続性を管理する](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)」を参照）    |
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

#### `team` カテゴリアクション

| アクション               | 説明                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------- |
| `add_member`        | 自分が所属している Organization のメンバーが[自分を Team に追加する](/articles/adding-organization-members-to-a-team)ときにトリガーされます。    |
| `add_repository`    | 自分がメンバーである Team にリポジトリの管理が任せられるときにトリガーされます。                                                                   |
| `create`            | 自分が所属している Organization で新たな Team が作成されるときにトリガーされます。                                                           |
| `destroy`           | 自分がメンバーである Team が Organization から削除されるときにトリガーされます。                                                            |
| `remove_member`     | Organization のメンバーが自分がメンバーである [Team から削除される](/articles/removing-organization-members-from-a-team)ときにトリガーされます。 |
| `remove_repository` | リポジトリが Team の管理下でなくなるときにトリガーされます。                                                                             |

{% endif %}

{% if currentVersion != "github-ae@latest" %}
#### `two_factor_authentication` カテゴリアクション

| アクション      | 説明                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------- |
| `enabled`  | [2 要素認証](/articles/securing-your-account-with-two-factor-authentication-2fa)が有効になるときにトリガーされます。 |
| `disabled` | 2 要素認証が無効になるときにトリガーされます。                                                                       |
{% endif %}

#### `user` カテゴリアクション

| アクション                                                                                                                                                                                               | 説明                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_email`                                                                                                                                                                                         | トリガーされる条件                                                                                                                                                        |
| {% if currentVersion != "github-ae@latest" %}[新しいメールアドレスを追加する](/articles/changing-your-primary-email-address){% else %}新しいメールアドレスを追加する{% endif %}。{% if currentVersion == "free-pro-team@latest" %} |                                                                                                                                                                  |
| `codespaces_trusted_repo_access_granted`                                                                                                                                                            | リポジトリに作成する Codespaces で、自分のユーザーアカウントが所有している他のリポジトリにアクセスするのを許可するとトリガーされます (/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces. |
| `codespaces_trusted_repo_access_revoked`                                                                                                                                                            | リポジトリに作成する Codespaces で、自分のユーザーアカウントが所有している他のリポジトリにアクセスするのを禁止するとトリガーされます (/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces. |{% endif %}
| `create`                                                                                                                                                                                            | 新しいユーザアカウントを作成するとトリガーされます。{% if currentVersion != "github-ae@latest" %}
| `change_password`                                                                                                                                                                                   | 自分のパスワードを変更するときにトリガーされます。                                                                                                                                        |
| `forgot_password`                                                                                                                                                                                   | [パスワード のリセット](/articles/how-can-i-reset-my-password)を要求したときにトリガーされます。{% endif %}
| `hide_private_contributions_count`                                                                                                                                                                  | [自分のプロファイルでプライベート コントリビューションを非表示にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)ときにトリガーされます。                                     |
| `login`                                                                                                                                                                                             | {% data variables.product.product_location %} にログインするとトリガーされます。{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}


`mandatory_message_viewed`   | 必須メッセージを表示するとトリガーされます (詳細は「[ユーザーメッセージのカスタマイズ](/admin/user-management/customizing-user-messages-for-your-enterprise)」を参照してください) | |{% endif %}| | `failed_login` | 正常にログインできなかったときにトリガーされます。 | `remove_email` | メール アドレスを削除するとトリガーされます。 | `rename` | 自分のアカウント名を変更するとトリガーされます。{% if currentVersion == "free-pro-team@latest" %} | `report_content` | [Issue またはプルリクエスト、または Issue、プルリクエスト、またはコミットにコメントをレポートすると](/articles/reporting-abuse-or-spam)トリガーされます。{% endif %} | `show_private_contributions_count` | [プロフィールでプライベートコントリビューションを公開](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)するとトリガーされます {% if currentVersion != "github-ae@latest" %} | `two_factor_requested` | {% data variables.product.product_name %} が[2要素認証コード](/articles/accessing-github-using-two-factor-authentication)を要求すると{% endif %}トリガーされます。

#### `user_status` カテゴリアクション

| アクション     | 説明                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| `update`  | 自分のプロファイルでステータスを設定または変更するときにトリガーされます。 詳細は「[ステータスを設定する](/articles/personalizing-your-profile/#setting-a-status)」を参照してください。 |
| `destroy` | 自分のプロファイルでステータスを消去するときにトリガーされます。                                                                                          |

