---
title: LDAPの利用
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication
  - /enterprise/admin/articles/about-ldap-authentication
  - /enterprise/admin/articles/viewing-ldap-users
  - /enterprise/admin/hidden/enabling-ldap-sync
  - /enterprise/admin/hidden/ldap-sync
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
  - /admin/authentication/using-ldap
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
intro: 'If you use Lightweight Directory Access Protocol (LDAP) to centralize access across applications, you can integrate {% data variables.product.product_name %} by configuring LDAP authentication for your instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
---

## About LDAP authentication for {% data variables.product.product_name %}

LDAP is a popular application protocol for access and maintenance of directory information services, and is one of the most common protocols for integration of third-party software with large company user directories. For more information, see "[Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)" on Wikipedia.

If you use an LDAP directory for centralized authentication, you can configure LDAP authentication for the people who use {% data variables.product.product_location %}.

{% data reusables.enterprise_user_management.built-in-authentication %}

## サポートされているLDAPサービス

{% data variables.product.prodname_ghe_server %} は、以下の LDAP サービスと統合できます:

* Active Directory
* FreeIPA
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Open Directory
* 389-ds

## LDAPでのユーザ名についての考慮

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} For more information, see "[Username considerations for external authentication](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

## {% data variables.product.product_location %}とのLDAPの設定

LDAPを設定した後、ユーザは自分のLDAPクレデンシャルでインスタンスにサインインできるようになります。 ユーザが初めてサインインするときに、ディレクトリ内のLDAP属性を使ってプロフィール名、メールアドレス、SSHキーが設定されます。

{% data variables.enterprise.management_console %}経由でユーザのLDAPアクセスを設定した場合、インスタンスにユーザが初めてサインインするまで、ユーザライセンスは使われません。 ただし、サイト管理設定を使ってマニュアルでアカウントを作成した場合、ユーザライセンスはすぐに使われます。

{% warning %}

**警告：**{% data variables.product.product_location %}でLDAPを設定する前に、利用するLDAPサービスがページ化された結果をサポートしていることを確認してください。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. "Authentication（認証）"の下で**LDAP**を選択してください。 ![LDAP の選択](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![LDAP のビルトイン認証の選択チェックボックス](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. 設定を追加してください。

## LDAPの属性
{% data variables.product.product_location %}のlDAPの設定を完了させるために、以下の属性を使ってください。

| 属性名                                              | 種類 | 説明                                                                                                                                                                                                                                                        |
| ------------------------------------------------ | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Host`                                           | 必須 | LDAP のホスト。例: `ldap.example.com` あるいは `10.0.0.30`。 ホスト名が内部ネットワークからしか利用できないなら、まず{% data variables.product.product_location %}のDNSを設定してホスト名を内部のネームサーバを使って解決できるようにする必要があるかもしれません。                                                                             |
| `ポート`                                            | 必須 | ホストの LDAP サービスが待ち受けるポート。 例：389及び636（LDAPS用）。                                                                                                                                                                                                              |
| `Encryption`                                     | 必須 | LDAP サーバーとの通信をセキュアにするために使われる暗号化の方法。 例：plain（暗号化なし）、SSL/LDAPS（最初からの暗号化）、StartTLS（接続後に暗号化通信にアップグレード）。                                                                                                                                                       |
| `Domain search user`                             | 任意 | 認証を許可するために、サインインする他のユーザを検索する LDAP ユーザ。 これは通常、サードパーティとのインテグレーションのために特に作成されるサービスアカウントです。 `cn=Administrator,cn=Users,dc=Example,dc=com`のような完全修飾名を使ってください。 Active Directoryでは、ドメイン検索ユーザとして `[DOMAIN]\[USERNAME]`という構文（例：`WINDOWS\Administrator`）を使うこともできます。 |
| `Domain search password`                         | 任意 | ドメイン検索ユーザのためのパスワード。                                                                                                                                                                                                                                       |
| `Administrators group`                           | 任意 | このグループ内のユーザは、アプライアンスへサインインしたときにサイト管理者に昇格します。 LDAPの管理者グループを設定しなければ、アプライアンスに最初にサインインしたLDAPユーザが自動的にサイト管理者に昇格します。                                                                                                                                             |
| `Domain base`                                    | 必須 | ユーザおよびグループの検索を行う LDAP サブツリーの完全修飾 `Distinguished Name` (DN)。 いくつでも追加できるが、それぞれのグループはユーザが属するのと同じドメインベースで定義されなければなりません。 制限されたユーザグループを指定したなら、それらのグループに属するユーザだけがスコープに入ります。 ドメインベースにはLDAPディレクトリツリーの最上位を指定し、制限されたユーザグループでアクセス制御することをおすすめします。                      |
| `Restricted user groups`                         | 任意 | 指定された場合、このグループ内のユーザだけがログインできます。 指定が必要なのはグループのcommon name（CN）だけで、グループはいくつでも追加できます。 グループが指定されていなければ、指定されたドメインベースのスコープ内の*すべての*ユーザが {% data variables.product.prodname_ghe_server %} インスタンスにサインインできるようになります。                                                |
| `User ID`                                        | 必須 | 認証を受けようとした LDAP ユーザを特定する LDAP 属性。 マッピングが確立されたら、ユーザは自分の {% data variables.product.prodname_ghe_server %} ユーザ名を変更できます。 このフィールドはほとんどのActive Directoryの環境では`sAMAccountName`にすべきですが、OpenLDAPなどの他のLDAPソリューションでは`uid`になることがあります。 デフォルト値は`uid`です。               |
| `Profile name`                                   | 任意 | ユーザの {% data variables.product.prodname_ghe_server %} プロフィールページに表示される名前。 LDAP Syncが有効化されていなければ、ユーザは自分のプロフィール名を変更できます。                                                                                                                                   |
| `メール`                                            | 任意 | ユーザの {% data variables.product.prodname_ghe_server %} アカウントのメールアドレス。                                                                                                                                                                                    |
| `SSH keys`                                       | 任意 | ユーザの {% data variables.product.prodname_ghe_server %} アカウントにアタッチされた公開 SSH キー。 キーはOpenSSH形式でなければなりません。                                                                                                                                                   |
| `GPG keys`                                       | 任意 | ユーザの {% data variables.product.prodname_ghe_server %} アカウントにアタッチされたGPGキー。                                                                                                                                                                               |
| `Disable LDAP authentication for Git operations` | 任意 | 選択した場合、ユーザが LDAP パスワードで Git の操作の認証を受けるのが[オフ](#disabling-password-authentication-for-git-operations)になります。                                                                                                                                                 |
| `Enable LDAP certificate verification`           | 任意 | 選択した場合、LDAP 証明書の検証が[オン](#enabling-ldap-certificate-verification)になります。                                                                                                                                                                                    |
| `Synchronization`                                | 任意 | 選択した場合、LDAP Sync が[オン](#enabling-ldap-sync)になります。                                                                                                                                                                                                         |

### Gitの操作のパスワード認証の無効化

LDAP 設定中の [**Disable username and password authentication for Git operations（Git の操作でのユーザ名およびパスワード認証の無効化）**] を選択し、Git アクセスでの個人アクセストークンあるいは SSH キーの使用を強制してください。そうすれば、サーバーが LDAP 認証のリクエストで過負荷になるのを防ぐのに役に立ちます。 特にポーリングによる大量のリクエストと組み合わさると、レスポンスの遅いLDAPサーバーは頻繁にパフォーマンス問題や障害の原因となるので、この設定をおすすめします。

![GItチェックボックスのためのLDAPパスワード認証の無効化](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

このオプションが選択されると、ユーザがコマンドライン経由のGitの操作でパスワードを使おうとすると、次のようなエラーメッセージが返されます。`Password authentication is not allowed for Git operations. You must use a personal access token.`

### LDAPの証明書検証の有効化

TLSと共に使うLDAPサーバの証明書を検証するには、LDAPの設定で**Enable LDAP certificate verification（LDAPの証明書検証の有効化）**を選択してください。

![LDAP証明書の検証ボックス](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

このオプションが選択されると、以下のことを確実にするために証明書が検証されます:
- 証明書にAlternative Name (SAN) が少なくとも1つ含まれている場合には、SANの1つがLDAPホスト名に一致し、 そうでない場合はコモンネーム (CN) がLDAPホスト名に一致すること。
- 証明書の期限が切れていないこと。
- 証明書が信頼されている認証局 (CA) によって署名されていること。

### LDAP Syncの有効化

{% note %}

**注釈:** LDAP Sync を使用する Team は、最大 1499 人のメンバーに制限されています。

{% endnote %}

LDAP Sync を使うと、{% data variables.product.prodname_ghe_server %} のユーザおよび Team のメンバーシップを、確立された LDAP グループに対して同期できます。 そうすることで、{% data variables.product.prodname_ghe_server %} 内で手作業で行う代わりに、LDAP サーバからユーザのロールベースのアクセス制御を確立できます。 詳細は「[チームを作成する](/enterprise/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled)」を参照してください。

LDAP Sync を有効化するには、[**Synchronize Emails**]、[**Synchronize SSH Keys**]、または [**Synchronize GPG Keys**] を選択します。

![同期チェックボックス](/assets/images/enterprise/management-console/ldap-synchronize.png)

LDAP Sync を有効化すると、同期のジョブが指定された間隔で動作し、各ユーザアカウントに対して以下の操作を行います:

- アイデンティティプロバイダ外のユーザに対してビルトイン認証を許可し、ユーザがビルトイン認証を使っているなら、次のユーザに進みます。
- ユーザに LDAP のマッピングが存在しないなら、ユーザをディレクトリ中の LDAP エントリにマップしようとします。 ユーザが LDAP のエントリにマップできなかった場合、ユーザをサスペンドして次のユーザに進みます。
- LDAP マッピングが存在し、ディレクトリ中の対応する LDAP のエントリが欠けている場合、そのユーザをサスペンドして次のユーザに進みます。
- 対応する LDAP のエントリが無効としてマークされており、ユーザがまだサスペンドされていないなら、そのユーザをサスペンドして次のユーザに進みます。
- 対応する LDAP のエントリが無効としてマークされておらず、そのユーザがサスペンドされており、Admin center で [_Reactivate suspended users（サスペンドされたユーザを再アクティベート_] が有効化されているなら、ユーザのサスペンドを解除します。
- If one or more restricted user groups are configured on the instance and the corresponding LDAP entry is not in one of these groups, suspend the user.
- If one or more restricted user groups are configured on the instance, the corresponding LDAP entry is in one of these groups, and _Reactivate suspended users_ is enabled in the Admin Center, unsuspend the user.
- 対応する LDAP エントリが `name` 属性を含んでいるなら、ユーザのプロフィール名を更新します。
- 対応する LDAP エントリが Administrators グループ内にあるなら、そのユーザをサイト管理者に昇格させます。
- 対応する LDAP エントリが Administrators グループ内にないなら、そのユーザを通常のアカウントに降格させます。
- LDAP の User フィールドがメール用に定義されているなら、ユーザのメール設定を LDAP のエントリと同期します。 最初の LDAP の `mail` エントリをプライマリのメールとして設定します。
- LDAP の User フィールドが公開 SSH キー用に定義されているなら、ユーザの公開 SSH キーを LDAP のエントリと同期します。
- LDAP の User フィールドが GPG キー用に定義されているなら、ユーザの GPG キーを LDAP のエントリと同期します。

{% note %}

**メモ**: LDAP のエントリが無効としてマークされるのは、Active Directory を使用しており、`userAccountControl` が存在して `ACCOUNTDISABLE` とされている場合のみです。 Some variations of Active Directory, such as AD LDS and ADAM, don't support the `userAccountControl` attribute.

{% endnote %}

同期ジョブは、LDAP グループにマップされなかった各 Team に対して以下の操作を行うためにも、指定された間隔で動作します。

- Team に対応する LDAP グループが削除された場合、すべてのメンバーを Team から削除します。
- LDAP グループから LDAP のメンバーエントリが削除された場合、対応するユーザを Team から削除します。 If the user is no longer a member of any team in the organization, remove the user from the organization. その結果、ユーザがリポジトリへのアクセスを失った場合、それらのリポジトリでユーザが持っていたプライベートなフォークを削除します。
- LDAP グループに LDAP のメンバーエントリが追加された場合、対応するユーザを Team に追加します。 その結果、ユーザがリポジトリへのアクセスを再度得ることになった場合、過去 90 日以内にユーザがアクセスを失ったために削除されたリポジトリのプライベートフォークがリストアされます。

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**セキュリティの警告:**

LDAP Sync が有効化されると、サイト管理者と Organization のオーナーは Team をマップするグループを LDAP のディレクトリで検索できます。

これは、以下を含む組織に関する機密情報を契約者やその他の権限を持たないユーザに開示してしまう可能性があります。

- *ドメイン検索ユーザ*に特定の LDAP グループの存在が見えてしまう。
- {% data variables.product.prodname_ghe_server %} のユーザアカウントを持つ LDAP グループのメンバーが、その LDAP グループと同期する Team を作ったときに開示されてしまう。

こういった情報が開示されることを望まないなら、企業あるいは組織は管理コンソールで設定された*ドメイン検索ユーザ*の権限を制限しなければなりません。 そういった制限ができない場合は、{% data variables.contact.contact_ent_support %} に連絡してください。

{% endwarning %}

### サポートされるLDAPグループのオブジェクトクラス

{% data variables.product.prodname_ghe_server %} は、以下の LDAP グループオブジェクトクラスをサポートします。 グループは入れ子にできます。

- `group`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

## LDAPユーザの表示と作成

インスタンスにアクセスできる LDAP ユーザの完全なリストを表示し、新しいユーザをプロビジョニングできます。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 左のサイドバーで**LDAP users（LDAPユーザ）**をクリックしてください。 ![LDAP ユーザタブ](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. ユーザを検索するには、完全なユーザ名もしくはユーザ名の一部を入力し、**Search（検索）**をクリックしてください。 検索結果に該当するユーザが表示されます。 該当するユーザがいなければ、**Create（作成）**をクリックして新しいユーザアカウントをプロビジョニングできます。 ![LDAP検索](/assets/images/enterprise/site-admin-settings/ldap-users-search.jpg)

## LDAPアカウントの更新

[LDAP Sync が有効化](#enabling-ldap-sync)されていない限り、LDAP アカウントへの変更は自動的には {% data variables.product.prodname_ghe_server %} に同期されません。

* 新しい LDAP 管理者グループを使うには、LDAP 内での変更を反映させるためにユーザを {% data variables.product.prodname_ghe_server %} 上で手動で昇格および降格させなければなりません。
* LDAP 管理者グループに LDAP アカウントを追加あるいは削除するには、[{% data variables.product.prodname_ghe_server %} 上でそのアカウントを昇格もしくは降格](/enterprise/admin/guides/user-management/promoting-or-demoting-a-site-administrator)させてください。
* LDAP アカウントを削除するには、[{% data variables.product.prodname_ghe_server %} アカウントをサスペンド](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)してください。

### 手動でのLDAPアカウントの同期

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. "LDAP"の下で**Sync now（即時同期）**をクリックして、LDAPサーバからのデータでアカウントを手動更新してください。 ![LDAPの即時同期ボタン](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

[API を使用して手動同期をトリガー](/enterprise/user/rest/reference/enterprise-admin#ldap)することもできます。

## {% data variables.product.product_location %}へのアクセスの削除

[LDAP Sync が有効化](#enabling-ldap-sync)されているなら、ユーザの LDAP のクレデンシャルを削除すれば、次の同期が行われた後にそのユーザのアカウントはサスペンドされます。

LDAP Sync が有効化**されていない**なら、LDAP のクレデンシャルの削除後に {% data variables.product.prodname_ghe_server %} アカウントを手動でサスペンドしなければなりません。 詳しい情報については[ユーザのサスペンドとサスペンドの解除](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)を参照してください。
