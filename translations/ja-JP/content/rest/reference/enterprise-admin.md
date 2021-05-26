---
title: GitHub Enterprise の管理
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/enterprise-admin
  - /v3/enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

You can use these {{ site.data.variables.product.prodname_ghe_cloud }} endpoints to administer your enterprise account.

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**注釈:** この記事は {% data variables.product.prodname_ghe_cloud %} に適用されます。 {% data variables.product.prodname_ghe_managed %}あるいは{% data variables.product.prodname_ghe_server %}のバージョンを見るには、**{% data ui.pages.article_version %}**ドロップダウンメニューを使ってください。

{% endnote %}

{% endif %}

### エンドポイント URL

REST API エンドポイント{% if enterpriseServerVersions contains currentVersion %}（[管理コンソール](#management-console) API エンドポイントを除く）{% endif %}の前には、次の URL が付けられます。

```shell
{% data variables.product.api_url_pre %}
```

{% if enterpriseServerVersions contains currentVersion %}
[管理コンソール](#management-console) API エンドポイントには、ホスト名のみがプレフィックスとして付加されます。

```shell
http(s)://<em>hostname</em>/
```
{% endif %}
{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}
### 認証

{% data variables.product.product_name %} のインストールの API エンドポイントは、GitHub.com APIと[同じ認証方法](/rest/overview/resources-in-the-rest-api#authentication)を受け入れます。 **[OAuth トークン](/apps/building-integrations/setting-up-and-registering-oauth-apps/)**{% if enterpriseServerVersions contains currentVersion %}（[a href="/rest/reference/oauth-authorizations#create-a-new-authorization">認証 API](/rest/reference/oauth-authorizations#create-a-new-authorization) を使用して作成可能）{% endif %}または **[Basic 認証](/rest/overview/resources-in-the-rest-api#basic-authentication)**で自分自身を認証できます。 {% if enterpriseServerVersions contains currentVersion %}Enterprise 固有のエンドポイントで使用する場合、OAuthトークンには `site_admin` [OAuth スコープ](/developers/apps/scopes-for-oauth-apps#available-scopes)が必要です。{% endif %}

Enterprise 管理 API エンドポイントには、認証された {% data variables.product.product_name %} サイト管理者のみがアクセスできます。{% if enterpriseServerVersions contains currentVersion %}ただし、[Management Console のパスワード](/enterprise/admin/articles/accessing-the-management-console/)が必要な [Management Console](#management-console) API は除きます。{% endif %}

{% endif %}

{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}
### バージョン情報

Enterprise の現在のバージョンは、すべての API のレスポンスヘッダで返されます: `X-GitHub-Enterprise-Version: {{currentVersion}}.0` [メタエンドポイント](/rest/reference/meta/)を呼び出して、現在のバージョンを読み取ることもできます。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

## Audit log

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'audit-log' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
## 支払い

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'billing' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
## GitHub Actions

{% data reusables.actions.ae-beta %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'actions' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
## SCIM

### Enterprise 向け SCIM プロビジョニング

SCIM 対応のアイデンティティプロバイダ（IdP）は、SCIM API を使用して Enterprise メンバーシップのプロビジョニングを自動化できます。 The {% data variables.product.product_name %} API は [SCIM 標準](http://www.simplecloud.info/)のバージョン 2.0 に基づいています。

IdP は、SCIM エンドポイントとして `{% data variables.product.api_url_code %}/scim/v2/enterprises/{enterprise}/` を使用する必要があります。

{% note %}

**注釈:** Enterprise SCIM API は、[SAML SSO](/rest/overview/other-authentication-methods#authenticating-for-saml-sso) が有効になっている [{% data variables.product.prodname_ghe_cloud %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-accounts) 上の Enterprise でのみ使用できます。 SCIM に関する詳細は「[SCIM について](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim)」を参照してください。

{% endnote %}

### SCIM API への呼び出しを認証する

SCIM API を使用するには、{% data variables.product.product_name %} Enterprise の所有者として認証する必要があります。 API は、[OAuth 2.0 Bearer](/developers/apps/authenticating-with-github-apps) トークンが `Authorization` ヘッダに含まれていることを想定しています。 個人アクセストークンを使用することもできますが、まず [SAML SSO Enterprise で使用するためにトークンを承認する](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)必要があります。

### SAML および SCIM データのマッピング

SAML IdP および SCIM クライアントは、ユーザごとに一致する `NameID` と `userName` の値を使用する必要があります。 これにより、SAML を介して認証するユーザを、プロビジョニングされた SCIM ID にリンクできます。

SCIM グループは、Enterprise アカウントが所有している、完全に同じ名前の {% data variables.product.product_name %} Organization と一致します。

SAML IdP および SCIM クライアントは、SCIM グループの `displayName` が対応する {% data variables.product.product_name %} Organization の名前と完全に一致するように設定する必要があります。 これにより、{% data variables.product.product_name %} が SCIM グループを {% data variables.product.product_name %} Organization メンバーシップにリンクできるようになります。

### サポートされている SCIM ユーザ属性

| 名前               | 種類        | 説明                                                                                                                                                                                                                                                                            |
| ---------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userName`       | `string`  | ユーザのユーザ名。                                                                                                                                                                                                                                                                     |
| `name.givenName` | `string`  | ユーザーの名。                                                                                                                                                                                                                                                                       |
| `name.lastName`  | `string`  | ユーザーの姓。                                                                                                                                                                                                                                                                       |
| `emails`         | `array`   | ユーザのメール一覧。                                                                                                                                                                                                                                                                    |
| `externalId`     | `string`  | この識別子は SAML プロバイダによって生成され、GitHub ユーザと照合するためにSAML プロバイダによって一意の ID として使用されます。 ユーザの `externalID` は、SAML プロバイダ、または [Enterprise の SCIM プロビジョニング済み ID の一覧表示](#list-scim-provisioned-identities-for-an-enterprise)エンドポイントを使用して、ユーザの GitHub ユーザ名やメールアドレスなどの他の既知の属性でフィルタして見つけることができます。 |
| `id`             | `string`  | GitHub SCIM エンドポイントによって生成された識別子。                                                                                                                                                                                                                                              |
| `active`         | `boolean` | ID がアクティブである（true）か、プロビジョニングを解除する必要がある（false）かを示すために使用する。                                                                                                                                                                                                                     |
| `groups`         | `array`   | ユーザがメンバーになっている SCIM グループ ID のオプションのリスト。                                                                                                                                                                                                                                       |

{% note %}

**注釈:** SCIM API のエンドポイント URL では、大文字と小文字が区別されます。 たとえば、`Users` エンドポイントの最初の文字は大文字にする必要があります。

```shell
GET /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}
```

{% endnote %}

### サポートされている SCIM グループ属性

| 名前            | 種類       | 説明                                                                                                                                                                                     |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName` | `string` | SCIM グループの名前。対応する {% data variables.product.product_name %} Organization の名前と完全に一致する必要があります。 たとえば、Organization の URL が `https://github.com/octo-org` の場合、グループ名は `octo-org` である必要があります。 |
| `members`     | `array`  | グループのメンバーである SCIM ユーザ ID の一覧。                                                                                                                                                          |

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'scim' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}
## 管理統計

管理統計 API は、インストールに関するさまざまなメトリクスを提供します。 *[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。*通常のユーザがアクセスしようとすると、`404` レスポンスを受け取ります。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'admin-stats' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

## アナウンス

アナウンス API を使用すると、Enterprise でグローバルなアナウンスバナーを管理できます。 詳しい情報については「[Enterprise のユーザメッセージをカスタマイズする](/admin/user-management/customizing-user-messages-for-your-enterprise#creating-a-global-announcement-banner)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'announcement' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}

## グローバル webhook

グローバル webhook は Enterprise にインストールされています。 グローバル webhook を使用して、Engerprise のユーザ、Organization、Team、およびリポジトリのルールを自動的に監視、対応、強制することができます。 グローバル webhook は、[Organization](/developers/webhooks-and-events/webhook-events-and-payloads#organization)、[ユーザ](/developers/webhooks-and-events/webhook-events-and-payloads#user)、[リポジトリ](/developers/webhooks-and-events/webhook-events-and-payloads#repository)、[Team](/developers/webhooks-and-events/webhook-events-and-payloads#team)、[メンバー](/developers/webhooks-and-events/webhook-events-and-payloads#member)、[メンバーシップ](/developers/webhooks-and-events/webhook-events-and-payloads#membership)、[フォーク](/developers/webhooks-and-events/webhook-events-and-payloads#fork)、[ping](/developers/webhooks-and-events/about-webhooks#ping-event) イベントタイプをサブスクライブできます。

*この API は、[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。*通常のユーザがアクセスしようとすると、`404` レスポンスを受け取ります。 グローバル webhook の設定方法については、[グローバル webhookについて](/enterprise/admin/user-management/about-global-webhooks)を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'global-webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}

## LDAP

LDAP API を使用して、{% data variables.product.product_name %} ユーザまたは Team とそのリンクされた LDAP エントリ間のアカウント関係を更新するか、新しい同期をキューに入れることができます。

LDAP マッピングエンドポイントを使用すると、ユーザまたは Team がマッピングする識別名（DN）を更新できます。 LDAP エンドポイントは通常、{% data variables.product.product_name %} アプライアンスで [LDAP 同期が有効](/enterprise/admin/authentication/using-ldap)になっている場合にのみ有効です。 [ユーザの LDAP マッピングの更新](#update-ldap-mapping-for-a-user)エンドポイントは、LDAP 同期が無効になっている場合でも、LDAP が有効になっていれば使用できます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'ldap' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}


{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}
## ライセンス

ライセンス API は、Enterprise ライセンスに関する情報を提供します。 *[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。*通常のユーザがアクセスしようとすると、`404` レスポンスを受け取ります。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'license' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}

## Management Console

管理コンソール API は、{% data variables.product.product_name %} インストールの管理に役立ちます。

{% tip %}

Management Console への API 呼び出しを行うときは、ポート番号を明示的に設定する必要があります。 Enterprise で TLS が有効になっている場合、ポート番号は `8443` です。それ以外の場合、ポート番号は `8080` です。

ポート番号を提供しない場合は、自動的にリダイレクトに従うようにツールを設定する必要があります。

{% data variables.product.product_name %} は、[独自の TLS 証明書](/enterprise/admin/guides/installation/configuring-tls/)を追加する前に自己署名証明書を使用するため、`cURL` を使用するときに [`-k` フラグ](http://curl.haxx.se/docs/manpage.html#-k)を追加する必要がある場合もあります。

{% endtip %}

### 認証

[Management Console のパスワード](/enterprise/admin/articles/accessing-the-management-console/)を認証トークンとして [`/setup/api/start`](#create-a-github-enterprise-server-license) を除くすべての Management Console API エンドポイントに渡す必要があります。

`api_key` パラメータを使用して、リクエストごとにこのトークンを送信します。 例:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

標準の HTTP 認証を使用してこのトークンを送信することもできます。 例:

```shell
$ curl -L 'https://api_key:<em>your-amazing-password</em>@<em>hostname</em>:<em>admin_port</em>/setup/api'
```

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'management-console' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}
## Organization

Organization 管理 API を使用すると、Enterprise に Organization を作成できます。 *[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。*通常のユーザがアクセスしようとすると、`404` レスポンスを受け取ります。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}


{% if enterpriseServerVersions contains currentVersion %}
## Organization pre-receive フック

Organization pre-receive フック API を使用すると、Organization で使用可能な pre-receive フックの適用を表示および変更できます。

### オブジェクトの属性

| 名前                               | 種類        | 説明                       |
| -------------------------------- | --------- | ------------------------ |
| `name`                           | `string`  | フックの名前。                  |
| `enforcement`                    | `string`  | このリポジトリでのフックの適用状態。       |
| `allow_downstream_configuration` | `boolean` | リポジトリが適用をオーバーライドできるかどうか。 |
| `configuration_url`              | `string`  | 適用設定されているエンドポイントの URL。   |

*適用*可能な値は、`enabled`、`disabled`、`testing` です。 `disabled` は、pre-receive フックが実行されないことを示します。 `enabled` は、それが実行され、ゼロ以外の状態になるプッシュを拒否することを示します。 `testing` は、スクリプトは実行されるが、プッシュが拒否されないことを示します。

`configuration_url` は、このエンドポイントまたはこのフックのグローバル設定へのリンクです。 サイトアドミンのみがグローバル設定にアクセスできます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'org-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}

## pre-receive 環境

pre-receive 環境 API を使用すると、pre-receive フックの環境を作成、一覧表示、更新、および削除できます。 *[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。*通常のユーザがアクセスしようとすると、`404` レスポンスを受け取ります。

### オブジェクトの属性

#### pre-receive 環境

| 名前                    | 種類        | 説明                                                               |
| --------------------- | --------- | ---------------------------------------------------------------- |
| `name`                | `string`  | UI に表示される環境の名前。                                                  |
| `image_url`           | `string`  | ダウンロードおよび抽出される tarball への URL。                                   |
| `default_environment` | `boolean` | これが {% data variables.product.product_name %} に同梱されるデフォルト環境かどうか。 |
| `download`            | `オブジェクト`  | この環境のダウンロードステータス。                                                |
| `hooks_count`         | `integer` | この環境を使用する pre-receive フックの数。                                     |

#### pre-receive 環境のダウンロード

| 名前              | 種類       | 説明                    |
| --------------- | -------- | --------------------- |
| `state`         | `string` | 最新のダウンロードの状態。         |
| `downloaded_at` | `string` | 最新のダウンロードの開始時刻。       |
| `message`       | `string` | 失敗時に、エラーメッセージが生成されます。 |

`state` の設定可能な値は、`not_started`、`in_progress`、`success`、`failed` です。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-environments' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
## pre-receive フック

pre-receive フック API を使用すると、pre-receive フックを作成、一覧表示、更新、および削除できます。 *これは[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。*通常のユーザがアクセスしようとすると、`404` レスポンスを受け取ります。

### オブジェクトの属性

#### pre-receive フック

| 名前                               | 種類        | 説明                                   |
| -------------------------------- | --------- | ------------------------------------ |
| `name`                           | `string`  | フックの名前。                              |
| `script`                         | `string`  | フックが実行するスクリプト。                       |
| `script_repository`              | `オブジェクト`  | スクリプトが保存されている GitHub リポジトリ。          |
| `environment`                    | `オブジェクト`  | スクリプトが実行される pre-receive 環境。          |
| `enforcement`                    | `string`  | このフックの適用状態。                          |
| `allow_downstream_configuration` | `boolean` | 適用の Org レベルまたは repo レベルでのオーバーライドの可否。 |

*適用*可能な値は、`enabled`、`disabled`、`testing` です。 `disabled` は、pre-receive フックが実行されないことを示します。 `enabled` は、それが実行され、ゼロ以外の状態になるプッシュを拒否することを示します。 `testing` は、スクリプトは実行されるが、プッシュが拒否されないことを示します。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}

## リポジトリ pre-receive フック

リポジトリ pre-receive フック API を使用すると、リポジトリで使用可能な pre-receive フックの適用を表示および変更できます。

### オブジェクトの属性

| 名前                  | 種類       | 説明                     |
| ------------------- | -------- | ---------------------- |
| `name`              | `string` | フックの名前。                |
| `enforcement`       | `string` | このリポジトリでのフックの適用状態。     |
| `configuration_url` | `string` | 適用設定されているエンドポイントの URL。 |

*適用*可能な値は、`enabled`、`disabled`、`testing` です。 `disabled` は、pre-receive フックが実行されないことを示します。 `enabled` は、それが実行され、ゼロ以外の状態になるプッシュを拒否することを示します。 `testing` は、スクリプトは実行されるが、プッシュが拒否されないことを示します。

`configuration_url` は、このリポジトリ、その Organization のオーナー、またはグローバル設定へのリンクである場合があります。 `configuration_url` でエンドポイントにアクセスする権限は、所有者またはサイトアドミンレベルで決定されます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repo-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}
## ユーザ

ユーザ管理 API では、Enterprise でユーザをサスペンド{% if enterpriseServerVersions contains currentVersion %}、サスペンド解除、昇格、降格、{% endif %}{% if currentVersion == "github-ae@latest" %}およびサスペンド解除{% endif %}できます。 *これは[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。*通常のユーザがアクセスしようとすると、`403` レスポンスを受け取ります。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'users' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
