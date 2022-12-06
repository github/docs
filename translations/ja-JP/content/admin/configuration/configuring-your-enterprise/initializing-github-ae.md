---
title: GitHub AE を初期化する
intro: '{% data variables.product.product_name %} の初期設定を完了して Enterprise で使用できるようにします。'
versions:
  ghae: '*'
type: how_to
topics:
  - Enterprise
redirect_from:
  - /admin/configuration/initializing-github-ae
  - /enterprise-server@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae
ms.openlocfilehash: a3c32a770bbf58be3589824302fe3a32be0e239a
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167053'
---
## 初期化について

Enterprise を初期化する前に、{% data variables.product.product_name %} を購入する必要があります。 詳細については、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。

{% data reusables.github-ae.initialize-enterprise %} 指定した情報が、ID プロバイダーの目的の Enterprise 所有者の情報と一致していることを確認します。 Enterprise 所有者の詳細については、「[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)」を参照してください。

{% note %}

**注**:

- 初期化を完了する前に {% data variables.product.prodname_ghe_managed %} の初期パスワードの有効期限が切れた場合は、招待メールからいつでもパスワード リセットを要求できます。

- パスワード マネージャーで {% data variables.product.prodname_ghe_managed %} の初期ユーザー名とパスワードを安全に保存します。 {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

初期化中に、Enterprise オーナーは Enterprise に名前を付け、SAML SSO を設定し、Enterprise 内のすべての Organization のポリシーを作成して、ユーザのサポート連絡先を設定します。

## 前提条件

初期化を開始するにあたり、{% data variables.product.company_short %} から招待メールを受け取ります。 {% data variables.product.prodname_ghe_managed %} を構成する前に、次の前提条件を確認してください。


{% data variables.location.product_location %} を初期化するには、SAML ID プロバイダー (IdP) が必要です。 {% data reusables.saml.ae-uses-saml-sso %} 初期化中に IdP を Enterprise に接続するには、IdP のエンティティ ID (SSO) URL、発行者 ID URL、公開署名証明書 (Base64 エンコード) が必要です。 詳細については、[Enterprise の ID およびアクセス管理](/admin/authentication/about-identity-and-access-management-for-your-enterprise)に関するページを参照してください。

{% note %}

**注**: {% data reusables.saml.create-a-machine-user %}

{% endnote %}

## サインインして Enterprise に名前を付ける

1. ようこそメールの指示に従って、Enterprise にアクセスします。
2. パスワードの変更 の下に資格情報を入力し、**パスワードの変更** をクリックします。
3. [Enterprise アカウントの名前を入力してください] の下に会社の名前を入力し、 **[保存して続行]** をクリックします。
  ![Enterprise に名前を付けるための [保存して続行] ボタン](/assets/images/enterprise/configuration/ae-enterprise-configuration.png)

## IdP を Enterprise に接続する

{% data variables.product.product_name %} の認証を設定するには、{% data variables.product.product_name %} に SAML IdP の詳細を提供する必要があります。 {% data variables.product.company_short %} は、IdP として Azure AD を使用することを推奨しています。 詳細については、「[ID プロバイダーで認証とプロビジョニングを設定する](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)」を参照してください。

1. [ID プロバイダーの設定] の右側にある **[構成]** をクリックします。
  ![IdP 構成の [構成] ボタン](/assets/images/enterprise/configuration/ae-idp-configure.png)
1. [Sign on URL] で、SAML IdP の URL をコピーして貼り付けます。
  ![SAML IdP のサインオン URL のテキスト フィールド](/assets/images/enterprise/configuration/ae-idp-sign-on-url.png)
1. [Issuer] の下に、SAML IdP の発行者 URL をコピーして貼り付けます。
  ![SAML IdP の発行者 URL のテキスト フィールド](/assets/images/enterprise/configuration/ae-idp-issuer-url.png)
1. [Public certificate] の下で、SAML IdP の公開証明書をコピーして貼り付けます。
  ![SAML IdP の公開証明書のテキスト フィールド](/assets/images/enterprise/configuration/ae-idp-public-certificate.png)
1. **[SAML 構成のテスト]** をクリックして、入力した情報が正しいことを確認します。
  ![[SAML 構成のテスト] ボタン](/assets/images/enterprise/configuration/ae-test-saml-configuration.png)
1. **[保存]** をクリックします。
  ![IdP 構成の [保存] ボタン](/assets/images/enterprise/configuration/ae-save.png)
1. {% data reusables.saml.assert-the-administrator-attribute %}

## Enterprise のポリシーを設定する

ポリシーを設定すると、Enterprise のリポジトリと Organization の管理に制限が設定されます。 これらは、初期化プロセスの後に再設定できます。

1. [Enterprise ポリシーの設定] の右側にある **[構成]** をクリックします。
  ![ポリシー構成の [構成] ボタン](/assets/images/enterprise/configuration/ae-policies-configure.png)
2. [Default Repository Permissions] の下で、ドロップダウンメニューを使用して、Enterprise 内のリポジトリのデフォルトの権限レベルをクリックします。 個人、チーム、または Organization のメンバーとして、Organization への複数のアクセス手段がある場合、最上位の権限レベルが下位の権限レベルよりも優先されます。 必要に応じて、Enterprise 内の組織が既定のリポジトリのアクセス許可を設定できるようにするには、 **[ポリシーなし]** をクリックします。
  ![既定のリポジトリ アクセス許可オプションのドロップダウン メニュー](/assets/images/enterprise/configuration/ae-repository-permissions-menu.png)
3. [Repository creation] の下で、メンバーにリポジトリの作成を許可するかどうかを選択します。 必要に応じて、Enterprise 内の組織がアクセス許可を設定できるようにするには、 **[ポリシーなし]** をクリックします。
  ![Enterprise ポリシー構成用の [メンバーがリポジトリを作成できるようにする] ボタン](/assets/images/enterprise/configuration/ae-repository-creation-permissions.png)
4. [Repository forking] の下で、プライベートリポジトリと内部リポジトリのフォークを許可するかどうかを選択します。 必要に応じて、Enterprise 内の組織にアクセス許可の設定を許可するには、 **[ポリシーなし]** をクリックします。
  ![リポジトリのフォーク アクセス許可オプションのドロップダウン メニュー](/assets/images/enterprise/configuration/ae-repository-forking-menu.png)
5. [Repository invitations] の下で、メンバーまたは Organization のオーナーがコラボレータをリポジトリに招待できるかどうかを選択します。 必要に応じて、Enterprise 内の組織にアクセス許可の設定を許可するには、 **[ポリシーなし]** をクリックします。
  ![リポジトリの招待アクセス許可オプションのドロップダウン メニュー](/assets/images/enterprise/configuration/ae-repository-invitations-menu.png)
6. [Default repository visibility] で、ドロップダウンメニューを使用して、新しいリポジトリのデフォルトの可視性設定をクリックします。
  ![既定のリポジトリ可視性オプションのドロップダウン メニュー](/assets/images/enterprise/configuration/ae-repository-visibility-menu.png)
7. [Users can create organizations] の下で、ドロップダウンメニューを使用して、Enterprise のメンバーの Organization 作成アクセスを有効または無効にします。
  ![組織の作成アクセス許可オプションのドロップダウン メニュー](/assets/images/enterprise/configuration/ae-organization-creation-permissions-menu.png)
8. [Force pushes] の下で、ドロップダウンメニューを使用して、フォースプッシュを許可するかブロックするかを選択します。
  ![強制プッシュ構成オプションのドロップダウン メニュー](/assets/images/enterprise/configuration/ae-force-pushes-configuration-menu.png)
9. [Git SSH access] の下で、ドロップダウンメニューを使用して、Enterprise 内のすべてのリポジトリに対して Git SSH アクセスを有効にするかどうかを選択します。
  ![Git SSH アクセス オプションのドロップダウン メニュー](/assets/images/enterprise/configuration/ae-git-ssh-access-menu.png)
10. **[保存]** ボタンをクリックします。
  ![Enterprise ポリシー構成の [保存] ボタン](/assets/images/enterprise/configuration/ae-save.png)
11. 必要に応じて、すべての選択をリセットするには、[Reset to default policies] をクリックします。
  ![すべての既定のポリシーをリセットするためのリンク](/assets/images/enterprise/configuration/ae-reset-default-options.png)

## 内部のサポート連絡先を設定する

ユーザが内部のサポートチームに連絡する方法を設定できます。 これは、初期化プロセスの後に再設定できます。

1. [内部サポート連絡先] の右側にある **[構成]** をクリックします。
  ![内部サポート連絡先構成の [構成] ボタン](/assets/images/enterprise/configuration/ae-support-configure.png)
2. [Internal support contact] の下で、Enterprise のユーザが URL またはメールアドレスを使用してサポートに連絡する方法を選択します。 次に、サポートの連絡先情報を入力します。
  ![内部サポート連絡先 URL のテキスト フィールド](/assets/images/enterprise/configuration/ae-support-link-url.png)
3. **[保存]** をクリックします。
  ![Enterprise サポート連絡先構成の [保存] ボタン](/assets/images/enterprise/configuration/ae-save.png)

## メール設定

これを初期化すると、初期化プロセス後に再設定できます。 詳細については、「[通知のためのメールを設定する](/admin/configuration/configuring-email-for-notifications)」を参照してください。

1. [メール設定の構成] の右側にある **[構成]** をクリックします。
  ![メール設定の構成の [構成] ボタン](/assets/images/enterprise/configuration/ae-email-configure.png)
2. **[メールを有効にする]** を選択します。 これにより、アウトバウンドメールとインバウンドメールの両方が有効になりますが、インバウンドメールが動作するようにするには、DNS 設定を行う必要があります。 詳細については、「[受信メールを許可するための DNS とファイアウォールの設定の構成](/admin/configuration/configuring-email-for-notifications#configuring-dns-and-firewall-settings-to-allow-incoming-emails)」を参照してください。
 ![メール設定の [有効にする] チェックボックス](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. メールサーバーの設定を完了します。
    - **[サーバー アドレス]** フィールドに SMTP サーバーのアドレスを入力します。
    - **[ポート]** フィールドに、SMTP サーバーがメールの送信に使用するポートを入力します。
    - **[ドメイン]** フィールドに、SMTP サーバーから HELO 応答が送信されるドメイン名 (存在する場合) を入力します。
    - **[認証]** ドロップダウンで SMTP サーバーで使用される暗号化の種類を選択します。
    - **[No-reply メール アドレス]** フィールドに、すべての通知メールの [送信元] フィールドと [宛先] フィールドに使用するメール アドレスを入力します。

4. no-reply メール アドレスへの着信メールをすべて破棄したい場合には、 **[no-reply メール アドレスへのメールの破棄]** を選択してください。
  ![メール設定の [破棄] チェック ボックス](/assets/images/enterprise/configuration/ae-discard-email.png)
5. **[メール設定のテスト]** をクリックします。
  ![メール設定の [メール設定のテスト] ボタン](/assets/images/enterprise/configuration/ae-test-email.png)
6. [テスト メールの送信先] で、テスト用メールを送信するメール アドレスを入力し、 **[テスト メールの送信]** をクリックします。
  ![メール設定の [テスト メールの送信] ボタン](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. **[保存]** をクリックします。
  ![Enterprise サポート連絡先構成の [保存] ボタン](/assets/images/enterprise/configuration/ae-save.png)
