---
title: GitHub AE を初期化する
intro: '{% data variables.product.product_name %} の初期設定を完了して Enterprise で使用できるようにします。'
versions:
  github-ae: '*'
---

### 初期化について

Enterprise を初期化する前に、{% data variables.product.product_name %} を購入する必要があります。 詳細については、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。

{% data variables.product.product_name %} を購入後、Enterprise を初期化するユーザのメールアドレスとユーザ名を入力するように求められます。 {% data variables.contact.enterprise_support %} の専任のテクニカルアカウントマネージャーが Enterprise オーナーのアカウントを作成し、Enterprise オーナーにメールを送信して {% data variables.product.product_name %} にログイン後、初期化を完了します。 提供する情報が、IdP 内の目的の Enterprise オーナーの情報と一致することを確認してください。 Enterprise オーナーの詳細については、「[Enterprise 内のロール](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-owner)」を参照してください。

初期化中に、Enterprise オーナーは Enterprise に名前を付け、SAML SSO を設定し、Enterprise 内のすべての Organization のポリシーを作成して、ユーザのサポート連絡先を設定します。

### 必要な環境

{% note %}

**注釈**: 初期化を開始する前に、{% data variables.product.prodname_ghe_managed %} の初期ユーザ名とパスワードをパスワードマネージャーに安全に保存してください。 {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

1. {% data variables.product.product_location %} を初期化するには、SAML アイデンティティプロバイダ (IdP) が必要です。 {% data reusables.saml.ae-uses-saml-sso %} 初期化中に IdP を Enterprise に接続するには、IdP のエンティティ ID (SSO) URL、発行者 ID URL、公開署名証明書 (Base64 エンコード) が必要です。 詳しい情報については、「[Enterprise のアイデンティティとアクセス管理について](/admin/authentication/about-identity-and-access-management-for-your-enterprise)」を参照してください。

    {% note %}

    **注釈**: {% data reusables.saml.create-a-machine-user %}

    {% endnote %}

2. {% data reusables.saml.assert-the-administrator-attribute %}

### サインインして Enterprise に名前を付ける

1. ようこそメールの指示に従って、Enterprise にアクセスします。
2. [Change password] の下に認証情報を入力し、[**Change password**] をクリックします。
3. [What would you like your enterprise account to be named?] の下に Enterprise の名前を入力し、[**Save and continue**] をクリックします。 ![Enterprise に名前を付けるための [Save and continue] ボタン](/assets/images/enterprise/configuration/ae-enterprise-configuration.png)

### IdP を Enterprise に接続する

{% data variables.product.product_name %} の認証を設定するには、{% data variables.product.product_name %} に SAML IdP の詳細を提供する必要があります。 {% data variables.product.company_short %} は、IdP として Azure AD を使用することを推奨しています。 詳しい情報については、「[アイデンティティプロバイダで認証とプロビジョニングを設定する](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)」を参照してください。

1. [Set up your identity provider] の右側にある [**Configure**] をクリックします。 ![IdP 設定の [Configure] ボタン](/assets/images/enterprise/configuration/ae-idp-configure.png)
1. [Sign on URL] で、SAML IdP の URL をコピーして貼り付けます。 ![SAML IdP のサインオン URL のテキストフィールド](/assets/images/enterprise/configuration/ae-idp-sign-on-url.png)
1. [Issuer] の下に、SAML IdP の発行者 URL をコピーして貼り付けます。 ![SAML IdP の発行者 URL のテキストフィールド](/assets/images/enterprise/configuration/ae-idp-issuer-url.png)
1. [Public certificate] の下で、SAML IdP の公開証明書をコピーして貼り付けます。 ![SAML IdP の公開証明書のテキストフィールド](/assets/images/enterprise/configuration/ae-idp-public-certificate.png)
1. [**Test SAML configuration**] をクリックして、入力した情報が正しいことを確認します。 ![[Test SAML configuration] ボタン](/assets/images/enterprise/configuration/ae-test-saml-configuration.png)
1. [**Save**] をクリックします。 ![IdP 設定の [Save] ボタン](/assets/images/enterprise/configuration/ae-save.png)

### Enterprise のポリシーを設定する

ポリシーを設定すると、Enterprise のリポジトリと Organization の管理に制限が設定されます。 これらは、初期化プロセスの後に再設定できます。

1. [Set your enterprise policies] の右側にある [**Configure**] をクリックします。 ![ポリシー設定の [Configure] ボタン](/assets/images/enterprise/configuration/ae-policies-configure.png)
2. [Default Repository Permissions] の下で、ドロップダウンメニューを使用して、Enterprise 内のリポジトリのデフォルトの権限レベルをクリックします。 個人、チーム、または Organization のメンバーとして、Organization への複数のアクセス手段がある場合、最上位の権限レベルが下位の権限レベルよりも優先されます。 必要に応じて、Enterprise 内の Organization がデフォルトのリポジトリ権限を設定できるようにするには、[**No policy**] をクリックします。 ![デフォルトのリポジトリ権限オプションのドロップダウンメニュー](/assets/images/enterprise/configuration/ae-repository-permissions-menu.png)
3. [Repository creation] の下で、メンバーにリポジトリの作成を許可するかどうかを選択します。 必要に応じて、Enterprise 内の Organization が権限を設定できるようにするには、[**No policy**] をクリックします。 ![Enterprise ポリシー設定用の [Members can create repositories] ボタン](/assets/images/enterprise/configuration/ae-repository-creation-permissions.png)
4. [Repository forking] の下で、プライベートリポジトリと内部リポジトリのフォークを許可するかどうかを選択します。 必要に応じて、Enterprise 内の Organization が権限を設定できるようにするには、[**No policy**] をクリックします。 ![リポジトリフォーク権限オプションのドロップダウンメニュー](/assets/images/enterprise/configuration/ae-repository-forking-menu.png)
5. [Repository invitations] の下で、メンバーまたは Organization のオーナーがコラボレータをリポジトリに招待できるかどうかを選択します。 必要に応じて、Enterprise 内の Organization が権限を設定できるようにするには、[**No policy**] をクリックします。 ![リポジトリ招待権限オプションのドロップダウンメニュー](/assets/images/enterprise/configuration/ae-repository-invitations-menu.png)
6. [Default repository visibility] で、ドロップダウンメニューを使用して、新しいリポジトリのデフォルトの可視性設定をクリックします。 ![デフォルトのリポジトリ可視性オプションのドロップダウンメニュー](/assets/images/enterprise/configuration/ae-repository-visibility-menu.png)
7. [Users can create organizations] の下で、ドロップダウンメニューを使用して、Enterprise のメンバーの Organization 作成アクセスを有効または無効にします。 ![Organization 作成権限オプションのドロップダウンメニュー](/assets/images/enterprise/configuration/ae-organization-creation-permissions-menu.png)
8. [Force pushes] の下で、ドロップダウンメニューを使用して、フォースプッシュを許可するかブロックするかを選択します。 ![フォースプッシュ設定オプションのドロップダウンメニュー](/assets/images/enterprise/configuration/ae-force-pushes-configuration-menu.png)
9. [Git SSH access] の下で、ドロップダウンメニューを使用して、Enterprise 内のすべてのリポジトリに対して Git SSH アクセスを有効にするかどうかを選択します。 ![Git SSH アクセスオプションのドロップダウンメニュー](/assets/images/enterprise/configuration/ae-git-ssh-access-menu.png)
10. [**Save**] をクリックします。 ![Enterprise ポリシー設定の [Save] ボタン](/assets/images/enterprise/configuration/ae-save.png)
11. 必要に応じて、すべての選択をリセットするには、[Reset to default policies] をクリックします。 ![すべてのデフォルトポリシーをリセットするためのリンク](/assets/images/enterprise/configuration/ae-reset-default-options.png)

### 内部のサポート連絡先を設定する

ユーザが内部のサポートチームに連絡する方法を設定できます。 これは、初期化プロセスの後に再設定できます。

1. [Internal support contact] の右側にある [**Configure**] をクリックします。 ![内部サポート連絡先設定の [Configure] ボタン](/assets/images/enterprise/configuration/ae-support-configure.png)
2. [Internal support contact] の下で、Enterprise のユーザが URL またはメールアドレスを使用してサポートに連絡する方法を選択します。 次に、サポートの連絡先情報を入力します。 ![内部サポート連絡先 URL のテキストフィールド](/assets/images/enterprise/configuration/ae-support-link-url.png)
3. [**Save**] をクリックします。 ![Enterprise サポート連絡先設定の [Save] ボタン](/assets/images/enterprise/configuration/ae-save.png)

### メール設定

これを初期化すると、初期化プロセス後に再設定できます。 詳しい情報については、「[通知のためのメールを設定する](/admin/configuration/configuring-email-for-notifications)」を参照してください。

1. [Configure email settings] の右側にある [**Configure**] をクリックします。 ![メール設定の [Configure] ボタン](/assets/images/enterprise/configuration/ae-email-configure.png)
2. **Enable email（メールの有効化）**を選択してください。 これにより、アウトバウンドメールとインバウンドメールの両方が有効になりますが、インバウンドメールが動作するようにするには、DNS 設定を行う必要があります。 詳しい情報については、「[着信メールを許可するよう DNS およびファイアウォールを設定する](/admin/configuration/configuring-email-for-notifications#configuring-dns-and-firewall-settings-to-allow-incoming-emails)」を参照してください。 ![メール設定の [Enable] チェックボックス](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. メールサーバーの設定を完了します。
  - [**Server address**] フィールドに SMTP サーバのアドレスを入力します。
  - [**Port**] フィールドには、SMTP サーバがメールを送信するのに使用するポートを入力します。
  - [**Domain**] フィールドには、SMTP サーバが HELO レスポンスを送信するドメイン名があれば入力してください。
  - [** Authentication（認証）**] ドロップダウンでは、SMTP サーバが利用する暗号化の種類を選択してください。
  - [**No-reply email address（No-replyメールアドレス）**] フィールドには、すべての通知メールの From および To フィールドに使うメールアドレスを入力してください。

4. no-replyメールアドレスへの着信メールをすべて破棄したい場合には、**Discard email addressed to the no-reply email address（no-replyメールアドレスへのメールの破棄）**を選択してください。 ![メール設定の [Discard] チェックボックス](/assets/images/enterprise/configuration/ae-discard-email.png)
5. [**Test email settings**] をクリックします。 ![メール設定の [Test email settings] ボタン](/assets/images/enterprise/configuration/ae-test-email.png)
6. [Send test email to] で、テストメールを送信するメールアドレスを入力し、[**Send test email**] をクリックします。 ![メール設定の [Send test email] ボタン](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. [**Save**] をクリックします。 ![Enterprise サポート連絡先設定の [Save] ボタン](/assets/images/enterprise/configuration/ae-save.png)
