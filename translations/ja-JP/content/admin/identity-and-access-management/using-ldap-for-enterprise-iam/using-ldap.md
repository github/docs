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
intro: 'ライトウェイト ディレクトリ アクセス プロトコル (LDAP) を使ってアプリケーション間のアクセスを一元化する場合は、インスタンスの LDAP 認証を構成することで、{% data variables.product.product_name %} を統合できます。'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
ms.openlocfilehash: 5d9b6aa9a5d641afa0b24dbe0e0f446ab723c735
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107526'
---
## {% data variables.product.product_name %} の LDAP 認証について

LDAP はディレクトリ情報サービスへのアクセスと管理のための広く使われているアプリケーション プロトコルで、大企業のユーザー ディレクトリとサードパーティのソフトウェアを統合するための最も一般的なプロトコルの 1 つです。 詳細については、Wikipedia の「[Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)」を参照してください。

一元化された認証に LDAP ディレクトリを使用する場合は、{% data variables.location.product_location %}を使用するユーザーに対して LDAP 認証を構成できます。

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

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} 詳細については、「[外部認証のユーザー名に関する考慮事項](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)」を参照してください。

## {% data variables.location.product_location %}での LDAP の設定

LDAPを設定した後、ユーザは自分のLDAPクレデンシャルでインスタンスにサインインできるようになります。 ユーザが初めてサインインするときに、ディレクトリ内のLDAP属性を使ってプロフィール名、メールアドレス、SSHキーが設定されます。

{% data variables.enterprise.management_console %}経由でユーザのLDAPアクセスを設定した場合、インスタンスにユーザが初めてサインインするまで、ユーザライセンスは使われません。 ただし、サイト管理設定を使ってマニュアルでアカウントを作成した場合、ユーザライセンスはすぐに使われます。

{% warning %}

**警告:** LDAP を {% data variables.location.product_location %}で構成する前に、ページングされた結果が LDAP サービスでサポートされることを確認します。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. [認証] で、 **[LDAP]** を選択します。
![LDAP の選択](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![LDAP のビルトイン認証の選択チェックボックス](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. 設定を追加してください。

## LDAPの属性
以下の属性を使用して {% data variables.location.product_location %}の LDAP の構成を完了します。

| 属性名           | 型     | 説明 |
|--------------------------|----------|-------------|
| `Host`                   | 必須 | LDAP ホスト。たとえば、`ldap.example.com` または `10.0.0.30`。 ホスト名が内部ネットワークからしか利用できな場合は、まず、ホスト名を内部のネームサーバーを使って解決できるように {% data variables.location.product_location %}の DNS を構成する必要があるかもしれません。 |
| `Port`                   | 必須 | ホストの LDAP サービスが待ち受けるポート。 例：389及び636（LDAPS用）。 |
| `Encryption`             | 必須 | LDAP サーバーとの通信をセキュアにするために使われる暗号化の方法。 例：plain（暗号化なし）、SSL/LDAPS（最初からの暗号化）、StartTLS（接続後に暗号化通信にアップグレード）。 |
| `Domain search user`     | オプション | 認証を許可するために、サインインする他のユーザを検索する LDAP ユーザ。 これは通常、サードパーティとのインテグレーションのために特に作成されるサービスアカウントです。 `cn=Administrator,cn=Users,dc=Example,dc=com` のような完全修飾名を使用します。 Active Directory では、ドメイン検索ユーザーに対して `[DOMAIN]\[USERNAME]` 構文 (`WINDOWS\Administrator` など) も使用できます。 |
| `Domain search password` | オプション | ドメイン検索ユーザのためのパスワード。 |
| `Administrators group`   | オプション | このグループ内のユーザは、アプライアンスへサインインしたときにサイト管理者に昇格します。 LDAPの管理者グループを設定しなければ、アプライアンスに最初にサインインしたLDAPユーザが自動的にサイト管理者に昇格します。 |
| `Domain base`            | 必須 | ユーザーとグループを検索しようとする LDAP サブツリーの完全修飾された `Distinguished Name` (DN)。 いくつでも追加できるが、それぞれのグループはユーザが属するのと同じドメインベースで定義されなければなりません。 制限されたユーザグループを指定したなら、それらのグループに属するユーザだけがスコープに入ります。 ドメインベースにはLDAPディレクトリツリーの最上位を指定し、制限されたユーザグループでアクセス制御することをおすすめします。 |
| `Restricted user groups` | オプション | 指定された場合、このグループ内のユーザだけがログインできます。 指定が必要なのはグループのcommon name（CN）だけで、グループはいくつでも追加できます。 グループが指定されていなければ、指定されたドメイン ベースのスコープ内の "*すべての*" ユーザーが {% data variables.product.prodname_ghe_server %} インスタンスにサインインできるようになります。 |
| `User ID`                | 必須 | 認証を受けようとした LDAP ユーザを特定する LDAP 属性。 マッピングが確立されたら、ユーザは自分の {% data variables.product.prodname_ghe_server %} ユーザ名を変更できます。 このフィールドは、ほとんどの Active Directory インストールで `sAMAccountName` にする必要がありますが、他の LDAP ソリューション (OpenLDAP など) では `uid` にすることもできます。 既定値は `uid` です。 |
| `Profile name`           | 省略可能 | ユーザの {% data variables.product.prodname_ghe_server %} プロフィールページに表示される名前。 LDAP Syncが有効化されていなければ、ユーザは自分のプロフィール名を変更できます。 |
| `Emails`                 | オプション | ユーザの {% data variables.product.prodname_ghe_server %} アカウントのメールアドレス。 |
| `SSH keys`               | オプション | ユーザの {% data variables.product.prodname_ghe_server %} アカウントにアタッチされた公開 SSH キー。 キーはOpenSSH形式でなければなりません。 |
| `GPG keys`               | オプション | ユーザの {% data variables.product.prodname_ghe_server %} アカウントにアタッチされたGPGキー。 |
| `Disable LDAP authentication for Git operations` | オプション |選択した場合、ユーザーが LDAP パスワードを使用して Git 操作を認証する機能が[無効](#disabling-password-authentication-for-git-operations)になります。 |
| `Enable LDAP certificate verification` | オプション |選択した場合、LDAP 証明書の検証が[有効](#enabling-ldap-certificate-verification)になります。 |
| `Synchronization` | オプション |選択した場合、LDAP 同期が[有効](#enabling-ldap-sync)になります。 |

### Gitの操作のパスワード認証の無効化

LDAP 設定の **[Git の操作でのユーザー名およびパスワード認証の無効化]** を選び、Git アクセスでの{% data variables.product.pat_generic %}あるいは SSH キーの使用を強制してください。そうすれば、サーバーが LDAP 認証要求で過負荷になるのを防ぐのに役に立ちます。 特にポーリングによる大量のリクエストと組み合わさると、レスポンスの遅いLDAPサーバーは頻繁にパフォーマンス問題や障害の原因となるので、この設定をおすすめします。

![GItチェックボックスのためのLDAPパスワード認証の無効化](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

このオプションを選択したときに、ユーザーがコマンド ラインを使用して Git 操作でパスワードを使用しようとすると、次のようなエラー メッセージが表示されます。`Password authentication is not allowed for Git operations. You must use a {% data variables.product.pat_generic %}.`

### LDAPの証明書検証の有効化

TLS と共に使う LDAP サーバーの証明書を検証するには、LDAP の設定で **[Enable LDAP certificate verification]\(LDAP の証明書検証の有効化\)** を選択します。

![LDAP証明書の検証ボックス](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

このオプションが選択されると、以下のことを確実にするために証明書が検証されます:
- 証明書にAlternative Name (SAN) が少なくとも1つ含まれている場合には、SANの1つがLDAPホスト名に一致し、 そうでない場合はコモンネーム (CN) がLDAPホスト名に一致すること。
- 証明書の有効期限が切れていない。
- 証明書が信頼されている認証局 (CA) によって署名されていること。

### LDAP Syncの有効化

{% note %}

**注:** LDAP 同期を使用するチームのメンバー数の上限は 1499 人です。

{% endnote %}

LDAP Sync を使うと、{% data variables.product.prodname_ghe_server %} のユーザおよび Team のメンバーシップを、確立された LDAP グループに対して同期できます。 そうすることで、{% data variables.product.prodname_ghe_server %} 内で手作業で行う代わりに、LDAP サーバからユーザのロールベースのアクセス制御を確立できます。 詳細については、「[チームの作成](/enterprise/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled)」を参照してください。

LDAP 同期を有効にするには、LDAP 設定で、 **[Synchronize Emails]\(メール アドレスの同期\)** 、 **[Synchronize SSH Keys]\(SSH キーの同期\)** 、または **[Synchronize GPG Keys]\(GPG キーの同期\)** を選択します。

![同期チェックボックス](/assets/images/enterprise/management-console/ldap-synchronize.png)

LDAP Sync を有効化すると、同期のジョブが指定された間隔で動作し、各ユーザアカウントに対して以下の操作を行います:

- アイデンティティプロバイダ外のユーザに対してビルトイン認証を許可し、ユーザがビルトイン認証を使っているなら、次のユーザに進みます。
- ユーザに LDAP のマッピングが存在しないなら、ユーザをディレクトリ中の LDAP エントリにマップしようとします。 ユーザが LDAP のエントリにマップできなかった場合、ユーザをサスペンドして次のユーザに進みます。
- LDAP マッピングが存在し、ディレクトリ中の対応する LDAP のエントリが欠けている場合、そのユーザをサスペンドして次のユーザに進みます。
- 対応する LDAP のエントリが無効としてマークされており、ユーザがまだサスペンドされていないなら、そのユーザをサスペンドして次のユーザに進みます。
- 対応する LDAP のエントリが無効としてマークされておらず、そのユーザーが一時停止されており、Admin Center で _[Reactivate suspended users]\(一時停止されたユーザを再アクティベート\)_ が有効化されているなら、ユーザーの一時停止を解除します。
- インスタンスに 1 つ以上の制限付きユーザー グループが構成されていて、対応する LDAP エントリがこれらのグループのいずれにも含まれていない場合は、ユーザーを一時停止します。
- インスタンスに 1 つ以上の制限付きユーザー グループが構成されていて、対応する LDAP エントリがこれらのグループのいずれかに含まれ、Admin Ceter で _[Reactivate suspended users]\(一時停止されたユーザを再アクティベート\)_ が有効化されているなら、ユーザーの一時停止を解除します。
- 対応する LDAP エントリが `name` 属性を含んでいる場合、ユーザーのプロファイル名を更新します。
- 対応する LDAP エントリが Administrators グループ内にあるなら、そのユーザをサイト管理者に昇格させます。
- 対応する LDAP エントリが Administrators グループ内にないなら、そのユーザを通常のアカウントに降格させます。
- LDAP の User フィールドがメール用に定義されているなら、ユーザのメール設定を LDAP のエントリと同期します。 最初の LDAP `mail` エントリをプライマリ メール アドレスとして設定します。
- LDAP の User フィールドが公開 SSH キー用に定義されているなら、ユーザの公開 SSH キーを LDAP のエントリと同期します。  
- LDAP の User フィールドが GPG キー用に定義されているなら、ユーザの GPG キーを LDAP のエントリと同期します。  

{% note %}

**注**: LDAP エントリを無効としてマークできるのは、Active Directory を使用しており、`userAccountControl` 属性が存在し、`ACCOUNTDISABLE` のフラグが設定されている場合のみです。 Active Directory の一部のバリエーション (AD LDS や ADAM など) では `userAccountControl` 属性はサポートされません。

{% endnote %}

同期ジョブは、LDAP グループにマップされなかった各 Team に対して以下の操作を行うためにも、指定された間隔で動作します。

- Team に対応する LDAP グループが削除された場合、すべてのメンバーを Team から削除します。
- LDAP グループから LDAP のメンバーエントリが削除された場合、対応するユーザを Team から削除します。 ユーザーが組織内のどのチームのメンバーでもなく、また組織の所有者でもなくなった場合は、そのユーザーを組織から削除します。 その結果、ユーザがリポジトリへのアクセスを失った場合、それらのリポジトリでユーザが持っていたプライベートなフォークを削除します。

  {% note %}

  **注:** LDAP Sync では、ユーザーがその組織の所有者である場合、組織からユーザーが削除されません。 別の組織の所有者が、代わりにユーザーを手動で削除する必要があります。

  {% endnote %}
- LDAP グループに LDAP のメンバーエントリが追加された場合、対応するユーザを Team に追加します。 その結果、ユーザがリポジトリへのアクセスを再度得ることになった場合、過去 90 日以内にユーザがアクセスを失ったために削除されたリポジトリのプライベートフォークがリストアされます。

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**セキュリティの警告:**

LDAP Sync が有効化されると、サイト管理者と Organization のオーナーは Team をマップするグループを LDAP のディレクトリで検索できます。

これは、以下を含む組織に関する機密情報を契約者やその他の権限を持たないユーザに開示してしまう可能性があります。

- "*ドメイン検索ユーザー*" に特定の LDAP グループの存在が見えてしまう。
- {% data variables.product.prodname_ghe_server %} のユーザアカウントを持つ LDAP グループのメンバーが、その LDAP グループと同期する Team を作ったときに開示されてしまう。

こういった情報が開示されることを望まないなら、企業あるいは組織は構成された "*ドメイン検索ユーザー*" の権限を管理コンソールで制限する必要があります。 そういった制限ができない場合は、{% data variables.contact.contact_ent_support %} に連絡してください。

{% endwarning %}

### サポートされるLDAPグループのオブジェクトクラス

{% data variables.product.prodname_ghe_server %} は、以下の LDAP グループオブジェクトクラスをサポートします。 グループは入れ子にできます。

- `group`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

## LDAPユーザの表示と作成

インスタンスにアクセスできる LDAP ユーザの完全なリストを表示し、新しいユーザをプロビジョニングできます。

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %}
3. 左側のサイドバーで、 **[LDAP users](LDAP ユーザー\)** タブをクリックします。
![[LDAP users](LDAP ユーザー\) タブ](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. ユーザーを検索するには、ユーザー名の全体または一部を入力し、 **[Search]\(検索\)** をクリックします。 検索結果に該当するユーザが表示されます。 ユーザーが存在しない場合は、 **[Create]\(作成\)** をクリックして新しいユーザー アカウントをプロビジョニングします。
![LDAP 検索](/assets/images/enterprise/site-admin-settings/ldap-users-search.jpg)

## LDAPアカウントの更新

[LDAP 同期が有効](#enabling-ldap-sync)でない限り、LDAP アカウントの変更が自動的に {% data variables.product.prodname_ghe_server %} と同期されることはありません。

* 新しい LDAP 管理者グループを使うには、LDAP 内での変更を反映させるためにユーザを {% data variables.product.prodname_ghe_server %} 上で手動で昇格および降格させなければなりません。
* LDAP 管理グループに対して LDAP アカウントを追加または削除するには、[{% data variables.product.prodname_ghe_server %} 上でアカウントを昇格または降格](/enterprise/admin/guides/user-management/promoting-or-demoting-a-site-administrator)します。
* LDAP アカウントを削除するには、[{% data variables.product.prodname_ghe_server %} アカウントを一時停止](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)します。

### 手動でのLDAPアカウントの同期

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. [LDAP] の **[Sync now]\(今すぐ同期\)** をクリックして、LDAP サーバーのデータでアカウントを手動で更新します。
![LDAP の [Sync now]\(今すぐ同期\) ボタン](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

[API を使用して手動同期をトリガー](/enterprise/user/rest/reference/enterprise-admin#ldap)することもできます。

## {% data variables.location.product_location %}へのアクセスの取り消し

[LDAP 同期が有効](#enabling-ldap-sync)な場合にユーザーの LDAP 資格情報を削除すると、次の同期の実行後にそのユーザーのアカウントが一時停止されます。

LDAP 同期が有効 **でない** 場合は、LDAP 資格情報を削除した後で、{% data variables.product.prodname_ghe_server %} アカウントを手動で一時停止する必要があります。 詳細については、[ユーザーの一時停止と一時停止解除](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)に関するページを参照してください。
