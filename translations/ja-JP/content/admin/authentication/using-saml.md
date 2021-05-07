---
title: SAMLの利用
redirect_from:
  - /enterprise/admin/articles/configuring-saml-authentication/
  - /enterprise/admin/articles/about-saml-authentication/
  - /enterprise/admin/user-management/using-saml
  - /enterprise/admin/authentication/using-saml
intro: 'SAML は認証と認可のための XML ベースの標準です。 {% data variables.product.prodname_ghe_server %} は、内部的な SAML アイデンティティプロバイダ (IdP) とサービスプロバイダ (SP) として動作できます。'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### サポートされているSAMLサービス

{% data reusables.saml.saml-supported-idps %}

{% data reusables.saml.saml-single-logout-not-supported %}

### SAMLでのユーザ名についての考慮

各{% data variables.product.prodname_ghe_server %}ユーザ名は、SAMLの応答で次のアサーションのいずれかによって決定され、優先順位で並べられます。

- カスタムユーザ名属性 (定義済みかつ存在する場合)
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`アサーション (存在する場合)
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`アサーション (存在する場合)
- `NameID`要素

`NameID`要素は、他の属性が存在する場合でも必須です。

A mapping is created between the `NameID` and the {% data variables.product.prodname_ghe_server %} username, so the `NameID` should be persistent, unique, and not subject to change for the lifecycle of the user.

{% note %}

**注釈**: ユーザの `NameID` が IdP で変更された場合、ユーザが {% data variables.product.prodname_ghe_server %} インスタンスにサインインしようとすると、エラーメッセージが表示されます。 {% if currentVersion ver_gt "enterprise-server@2.21" %} ユーザのアクセスを復元するには、ユーザアカウントの `NameID` マッピングを更新する必要があります。 詳しい情報については、「[ユーザの SAML `NameID` を更新する](#updating-a-users-saml-nameid)」を参照してください。{% else %} 詳しい情報については、「[エラー: '別のユーザーがすでにアカウントを所有しています'](#error-another-user-already-owns-the-account)」を参照してください。{% endif %}

{% endnote %}

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### SAMLのメタデータ

Your {% data variables.product.prodname_ghe_server %} instance's service provider metadata is available at `http(s)://[hostname]/saml/metadata`.

アイデンティティプロバイダを手動で設定するなら、Assertion Consumer Service (ACS) URLは`http(s)://[hostname]/saml/consume`です。 これは`urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`バインディングを利用します。

### SAMLの属性

以下の属性が利用できます。 `administrator`属性以外の属性の名前は[Management Console](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console/)で変更できます。

| デフォルトの属性名       | 種類 | 説明                                                                                                                          |
| --------------- | -- | --------------------------------------------------------------------------------------------------------------------------- |
| `NameID`        | 必須 | 永続ユーザ識別子。 任意の名前識別子の形式を使用できます。 どの代替アサーションも指定しない場合、{% data variables.product.prodname_ghe_server %}ユーザ名には`NameID`要素が使用されます。 |
| `administrator` | 任意 | この値が 'true' であれば、ユーザは自動的に管理者に昇格します。 他の値、あるいは値が存在しない場合は、ユーザは通常のユーザアカウントに降格します。                                               |
| `ユーザ名`          | 任意 | {% data variables.product.prodname_ghe_server %} のユーザ名                                                                    |
| `full_name`     | 任意 | ユーザのプロフィールページに表示されるユーザ名です。 ユーザはプロビジョニング後に名前を変更できます。                                                                         |
| `emails`        | 任意 | ユーザのメールアドレス。 複数指定することができます。                                                                                                 |
| `public_keys`   | 任意 | ユーザの公開 SSH キー。 複数指定することができます。                                                                                               |
| `gpg_keys`      | 任意 | ユーザの GPG キー。 複数指定することができます。                                                                                                 |

### SAMLの設定

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. **SAML**を選択してください。 ![SAML認証](/assets/images/enterprise/management-console/auth-select-saml.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![SAML ビルトイン認証の選択チェックボックス](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
5. オプションで、未承諾応答SSOを有効化する場合は [**IdP initiated SSO**] を選択します。 デフォルトでは、{% data variables.product.prodname_ghe_server %}は未承認アイデンティティプロバイダ (IdP) 起点のリクエストに対して、IdPへの`AuthnRequest`返信で応答します。 ![SAML idP SSO](/assets/images/enterprise/management-console/saml-idp-sso.png)

  {% tip %}

  **ノート**：この値は**選択しない**でおくことをおすすめします。 この機能を有効にするのは、SAMLの実装がサービスプロバイダ起点のSSOをサポートしないまれな場合と、{% data variables.contact.enterprise_support %}によって推奨された場合**だけ**にすべきです。

  {% endtip %}

5. {% data variables.product.product_location %} 上のユーザの管理者権限を SAML プロバイダに決めさせたく**ない**場合、[**Disable administrator demotion/promotion**] を選択します。 ![SAMLの無効化の管理者設定](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
6. **Single sign-on URL（シングルサインオンURL）**フィールドに、使用するIdpのシングルサインオンのリクエストのためのHTTPあるいはHTTPSエンドポイントを入力してください。 この値はIdpの設定によって決まります。 ホストが内部のネットワークからしか利用できない場合、[{% data variables.product.product_location %}を内部ネームサーバーを利用するように設定](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-dns-nameservers/)する必要があるかもしれません。 ![SAML認証](/assets/images/enterprise/management-console/saml-single-sign-url.png)
7. または、[**Issuer**] フィールドに、SAML の発行者の名前を入力します。 これは、{% data variables.product.product_location %} へ送信されるメッセージの真正性を検証します。 ![SAML発行者](/assets/images/enterprise/management-console/saml-issuer.png)
8. [**Signature Method**] および [**Digest Method**] ドロップダウンメニューで、SAML の発行者が {% data variables.product.product_location %} からのリクエストの整合性の検証に使うハッシュアルゴリズムを選択します。 ** Name Identifier Format（Name Identifier形式）**ドロップダウンメニューから形式を指定してください。 ![SAML方式](/assets/images/enterprise/management-console/saml-method.png)
9. [**Verification certificate**] の下で、[**Choose File**] をクリックし、IdP からの SAML のレスポンスを検証するための証明書を選択してください。 ![SAML認証](/assets/images/enterprise/management-console/saml-verification-cert.png)
10. 必要に応じてSAMLの属性名はIdPに合わせて修正してください。あるいはデフォルト名をそのまま受け付けてください。 ![SAMLの属性名](/assets/images/enterprise/management-console/saml-attributes.png)

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### {{ site.data.variables.product.product_location_enterprise }}へのアクセスの削除

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. **SAML**を選択してください。 ![サイト管理者設定の "All users" サイドバー項目](/assets/images/enterprise/site-admin-settings/all-users.png)
3. ユーザーのリストで、`NameID` マッピングを更新するユーザ名をクリックします。 ![インスタンスユーザアカウントのリストにあるユーザ名](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. [Update SAML NameID] の右にある [**Edit**] アイコンをクリックします。 ![SAML認証](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. [NameID] フィールドに、ユーザの新しい `NameID` を入力します。 ![入力済みの NameID を含むモーダルダイアログの "NameID" フィールド](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. [**Update NameID**] をクリックします。 ![モーダル内の更新された NameID 値の下の "Update NameID" ボタン](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)

{% endif %}

### {% data variables.product.product_location %}へのアクセスの削除

アイデンティティプロバイダからユーザを削除したなら、そのユーザを手動でサスペンドもしなければなりません。 そうしなければ、そのユーザはアクセストークンあるいはSSHキーを使って引き続き認証を受けることができてしまいます。 詳しい情報については[ユーザのサスペンドとサスペンドの解除](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)を参照してください。

### レスポンスメッセージについての要求

レスポンスメッセージは以下の要求を満たさなければなりません。

- `<Destination>`要素はルートレスポンスドキュメントで指定されていなければならず、ACS URLに一致する必要があります。ただし、これはルートレスポンスドキュメントに署名がある場合のみです。 アサーションに署名がある場合は無視されます。
- `<AudienceRestriction>`要素の一部として、`<Audience>`要素は常に指定する必要があります。 `<AudienceRestriction>`要素の一部として、`<Audience>`要素は常に指定する必要があります。 これは、`https://ghe.corp.example.com`というような、{% data variables.product.prodname_ghe_server %}インスタンスへのURLです。
- レスポンス中での各アサーションは、電子署名で保護されていなければ**なりません**。 これは、個々の`<Assertion>`要素に署名するか、`<Response>`要素を署名するかすることによって行います。
- `<Subject>`要素の一部として`<NameID>`要素を指定する必要があります。 任意の名前識別子の形式を使用できます。
- `Recipient` 属性は存在しなければならず、ACS URL に設定されなければなりません。 例:

```xml
<samlp:Response ...>
  <saml:Assertion ...>
    <saml:Subject>
      <saml:NameID ...>...</saml:NameID>
      <saml:SubjectConfirmation ...>
        <saml:SubjectConfirmationData Recipient="https://ghe.corp.example.com/saml/consume" .../>
      </saml:SubjectConfirmation>
    </saml:Subject>
    <saml:AttributeStatement>
      <saml:Attribute FriendlyName="USERNAME-ATTRIBUTE" ...>
        <saml:AttributeValue>monalisa</saml:AttributeValue>
      </saml:Attribute>
    </saml:AttributeStatement>
  </saml:Assertion>
</samlp:Response>
```

### SAML認証

{% data variables.product.prodname_ghe_server %} は、認証ログの _/var/log/github/auth.log_ で失敗した SAML 認証のエラーメッセージをログに記録します。 SAML レスポンス要件の詳細については、「[レスポンスメッセージの要件](#response-message-requirements)」を参照してください。

#### エラー:「別のユーザがすでにアカウントを所有しています」

ユーザが SAML 認証を使用して初めて {% data variables.product.prodname_ghe_server %} にサインインすると、{% data variables.product.prodname_ghe_server %} はインスタンスにユーザアカウントを作成し、SAML `NameID` をアカウントにマップします。

ユーザが再度サインインすると、{% data variables.product.prodname_ghe_server %} はアカウントの `NameID` マッピングを IdP のレスポンスと比較します。 IdP のレスポンスの `NameID` が、{% data variables.product.prodname_ghe_server %} がユーザに対して想定している `NameID` とマッチしなくなると、サインインは失敗します。 ユーザには次のメッセージが表示されます。

> 別のユーザが既にアカウントを所有しています。 管理者に認証ログを確認するようご依頼ください。

このメッセージは通常、その人のユーザ名またはメールアドレスが IdP で変更されたということを示します。 {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_ghe_server %} のユーザアカウントの `NameID` マッピングが IdP のユーザの `NameID` とマッチすることを確認します。 詳しい情報については、「[ユーザの SAML `NameID` の更新](#updating-a-users-saml-nameid)」を参照してください。{% else %} `NameID` マッピングの更新については、{% data variables.contact.contact_ent_support %} にお問い合わせください。{% endif %}

#### SAMLレスポンスが署名されていなかった場合、あるいは署名が内容とマッチしなかった場合、authログに以下のエラーメッセージが残されます。

`Recipient`がACS URLと一致しなかった場合、authログに以下のエラーメッセージが残されます。

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

IdP の `Recipient` の値を、{% data variables.product.prodname_ghe_server %} インスタンスの完全な ACS URL に設定してください。 例: `https://ghe.corp.example.com/saml/consume`

#### エラー:「SAML レスポンスが署名されていないか、変更されています」

IdP が SAML レスポンスに署名しない場合、または署名が内容と一致しない場合、次のエラーメッセージが認証ログに表示されます。

```
SAML Response is not signed or has been modified.
```

IdP で {% data variables.product.prodname_ghe_server %} アプリケーションの署名済みアサーションを設定していることを確認してください。

#### エラー:「Audience が無効です」または「アサーションが見つかりません」

IdP のレスポンスに `Audience` の値がないか、または正しくない場合、次のエラーメッセージが認証ログに表示されます。

```shell
Audience is invalid. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

IdP の `Audience` の値を、{% data variables.product.prodname_ghe_server %} インスタンスの `EntityId` に設定してください。これは、{% data variables.product.prodname_ghe_server %} インスタンスへの完全な URL です。 例: `https://ghe.corp.example.com`
