---
title: 通知のためのメール設定
intro: 'ユーザが {% data variables.product.product_name %} のアクティビティにすばやく応答できるようにするために、{% data variables.product.product_location %} を設定して、Issue、プルリクエスト、およびコミットコメントのメール通知を送信できます。'
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration
  - /enterprise/admin/articles/configuring-email
  - /enterprise/admin/articles/troubleshooting-email
  - /enterprise/admin/articles/email-configuration-and-troubleshooting
  - /enterprise/admin/user-management/configuring-email-for-notifications
  - /admin/configuration/configuring-email-for-notifications
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Notifications
shortTitle: Configure email notifications
ms.openlocfilehash: d7dd82fa95db462abe8d9d19e8df60a45dab3f0c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718134'
---
{% ifversion ghae %} エンタープライズの所有者は、通知用のメールを設定できます。
{% endif %}
## Enterprise 向けの SMTP を設定する

{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.email-settings %}
4. **[メールを有効にする]** を選択します。 これでアウトバウンドとインバウンドのメールがどちらも有効化されますが、インバウンドのメールが動作するには、以下の「[着信メールを許可する DNS とファイアウォールの設定](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)」に記述されているように DNS を設定する必要もあります。
![アウトバウンド メールの有効化](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. SMTP サーバーの設定を入力します。
      - **[サーバー アドレス]** フィールドに SMTP サーバーのアドレスを入力します。
      - **[ポート]** フィールドに、SMTP サーバーがメールの送信に使用するポートを入力します。
      - **[ドメイン]** フィールドに、SMTP サーバーから HELO 応答が送信されるドメイン名 (存在する場合) を入力します。
      - **[認証]** ドロップダウンを選択し、SMTP サーバーで使用される暗号化の種類を選択します。
      - **[No-reply メール アドレス]** フィールドに、すべての通知メールの [送信元] フィールドと [宛先] フィールドに使用するメール アドレスを入力します。      
6. no-reply メール アドレスへの着信メールをすべて破棄したい場合には、 **[no-reply メール アドレスへのメールの破棄]** を選択してください。
![no-reply メール アドレス宛のメールを廃棄するチェックボックス](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. **[サポート]** で、ユーザーに追加のサポートを提供するリンクの種類を選択します。
    - **[メール]:** 内部メール アドレス。
    - **[URL]:** 内部サポート サイトへのリンク。 `http://` または `https://` のいずれかを含める必要があります。
  ![サポートのメールまたは URL](/assets/images/enterprise/management-console/support-email-url.png)
8. [メール配信のテスト](#testing-email-delivery)
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.email-tab %}
2. **[メールを有効にする]** を選択します。
  ![メール設定の [有効にする] チェックボックス](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. メールサーバーの設定を入力します。
    - **[サーバー アドレス]** フィールドに SMTP サーバーのアドレスを入力します。
    - **[ポート]** フィールドに、SMTP サーバーがメールの送信に使用するポートを入力します。
    - **[ドメイン]** フィールドに、SMTP サーバーから HELO 応答が送信されるドメイン名 (存在する場合) を入力します。
    - **[認証]** ドロップダウンを選択し、SMTP サーバーで使用される暗号化の種類を選択します。
    - **[No-reply メール アドレス]** フィールドに、すべての通知メールの [送信元] フィールドと [宛先] フィールドに使用するメール アドレスを入力します。
4. no-reply メール アドレスへの着信メールをすべて破棄したい場合には、 **[no-reply メール アドレスへのメールの破棄]** を選択してください。
  ![メール設定の [破棄] チェック ボックス](/assets/images/enterprise/configuration/ae-discard-email.png)
5. **[メール設定のテスト]** をクリックします。
  ![メール設定の [メール設定のテスト] ボタン](/assets/images/enterprise/configuration/ae-test-email.png)
6. [テスト メールの送信先] で、テスト用メールを送信するメール アドレスを入力し、 **[テスト メールの送信]** をクリックします。
  ![メール設定の [テスト メールの送信] ボタン](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. **[保存]** をクリックします。
  ![エンタープライズ サポートの連絡先構成の [保存] ボタン](/assets/images/enterprise/configuration/ae-save.png) {% endif %}

{% ifversion ghes %}
## メール配信のテスト

1. **[メール]** セクションの上部で、 **[メール設定のテスト]** をクリックします。
![メール設定のテスト](/assets/images/enterprise/management-console/test-email.png)
2. **[テスト メールの送信先]** フィールドに、テスト メールを送信するアドレスを入力します。
![テスト メールのアドレス](/assets/images/enterprise/management-console/test-email-address.png)
3. **[テスト メールの送信]** をクリックします。
![テスト電子メールを送信する](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **ヒント:** テスト メールの送信中に SMTP エラー (即時配信エラーや送信メール構成エラーなど) が発生した場合は、[メール設定のテスト] ダイアログ ボックスに表示されます。

  {% endtip %}

4. テスト メールが失敗した場合は、[メール設定のトラブルシューティングを行います](#troubleshooting-email-delivery)。
5. テスト メールが成功した場合は、ページの下部で **[設定の保存]** をクリックしてください。
![[設定の保存] ボタン](/assets/images/enterprise/management-console/save-settings.png) {% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

{% ifversion require-tls-for-smtp %}
## SMTP 接続への TLS の適用

すべての受信 SMTP 接続に対して TLS 暗号化を適用できます。これは、ISO-27017 認定要件を満たすのに役立ちます。

{%- ifversion ghes = 3.6 %} {% note %}

**注**: {% data variables.product.product_name %} 3.6.0 では、SMTP 接続に対する TLS の適用は使用できません。 この機能は、今後のリリースで提供する予定です。

{% endnote %} {%- endif %}

{% data reusables.enterprise_site_admin_settings.email-settings %}
1. [認証] で、 **[TLS 認証の強制 (推奨)]** を選びます。

   ![[TLS 認証の強制 (推奨)] のスクリーンショット。](/assets/images/enterprise/configuration/enforce-tls-for-smtp-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% endif %}

## メール着信を許可する DNS とファイアウォールの設定

通知へのメールでの返信を許可したいなら、DNSを設定しなければなりません。

1. インスタンスのポート25がSMTPサーバにアクセスできることを確認してください。
2. `reply.[hostname]` を指す A レコードを作成します。 DNS プロバイダーとインスタンスのホスト設定によっては、代わりに `*.[hostname]` を指す単一の A レコードを作成できる場合があります。
3. `reply.[hostname]` を指す MX レコードを作成して、このドメインへのメールがインスタンスにルーティングされるようにしてください。
4. `noreply.[hostname]` が `[hostname]` を指す MX レコードを作成し、通知メール内の `cc` アドレスへの応答がインスタンスにルーティングされるようにしてください。 詳細については、{% ifversion ghes %} 「[通知の構成](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)」 {% else %} 「[メール通知について](/github/receiving-notifications-about-activity-on-github/about-email-notifications)」{% endif %} を参照してください。

## メール配信のトラブルシューティング

### Support Bundleの作成

表示されたエラー メッセージから何が問題なのかを判断できない場合は、メール サーバーと {% data variables.product.prodname_ghe_server %} の間の SMTP 会話全体を含む[サポート バンドル](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)をダウンロードできます。 バンドルをダウンロードして展開したら、*enterprise-manage-logs/unicorn.log* のエントリをチェックし、SMTP 会話全体のログと関連するエラーを確認してください。

unicornログは以下のようなトランザクションになっているはずです。

```shell
This is a test email generated from https://10.0.0.68/setup/settings
Connection opened: smtp.yourdomain.com:587
-> "220 smtp.yourdomain.com ESMTP nt3sm2942435pbc.14\r\n"
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-STARTTLS\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "STARTTLS\r\n"
-> "220 2.0.0 Ready to start TLS\r\n"
TLS connection started
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-AUTH LOGIN PLAIN XOAUTH\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "AUTH LOGIN\r\n"
-> "334 VXNlcm5hbWU6\r\n"
<- "dGhpc2lzbXlAYWRkcmVzcy5jb20=\r\n"
-> "334 UGFzc3dvcmQ6\r\n"
<- "aXRyZWFsbHl3YXM=\r\n"
-> "535-5.7.1 Username and Password not accepted. Learn more at\r\n"
-> "535 5.7.1 http://support.yourdomain.com/smtp/auth-not-accepted nt3sm2942435pbc.14\r\n"
```

このログからは、アプライアンスについて以下のことが分かります。

* SMTP サーバーとの接続をオープンしました (`Connection opened: smtp.yourdomain.com:587`)。
* 接続に成功し、TLS の使用を選択しました (`TLS connection started`)。
* `login` 認証の型が実行されました (`<- "AUTH LOGIN\r\n"`)。
* SMTP サーバーが認証を無効として拒否しました (`-> "535-5.7.1 Username and Password not accepted.`)。

### {% data variables.product.product_location %} ログのチェック

インバウンドのメールが機能していることを検証する必要があるなら、インスタンスには調べることができる 2 つのログ ファイルがあります。 */var/log/mail.log* と */var/log/mail-replies/metroplex.log* を検証してください。

*/var/log/mail.log* は、メッセージがサーバーに到達していることを確認します。 以下は、成功したメールの返信の例です:

```
Oct 30 00:47:18 54-171-144-1 postfix/smtpd[13210]: connect from st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: 51DC9163323: client=st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/cleanup[13216]: 51DC9163323: message-id=<b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: from=<tcook@icloud.com>, size=5048, nrcpt=1 (queue active)
Oct 30 00:47:19 54-171-144-1 postfix/virtual[13217]: 51DC9163323: to=<reply+i-1-1801beb4df676a79250d1e61e54ab763822c207d-5@reply.ghe.tjl2.co.ie>, relay=virtual, delay=0.12, delays=0.11/0/0/0, dsn=2.0.0, status=sent (delivered to maildir)
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: removed
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: disconnect from st11p06mm-asmtp002.mac.com[17.172.124.250]
```

クライアントがまず接続し、続いてキューがアクティブになっていることに注意してください。 そしてメッセージが配信され、クライアントがキューから削除され、セッションが切断されています。

*/var/log/mail-replies/metroplex.log* は、インバウンドのメールが issue や pull requet に返信として追加されるよう処理されているかどうかを示します。 以下は成功したメッセージの例です:

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

`metroplex` が受信メッセージをキャッチし、それを処理し、ファイルを `/data/user/incoming-mail/success` に移動することがわかります。{% endif %}

### DNS設定の検証

インバウンドのメールを適切に処理するには、適切にAレコード（あるいはCNAME）と共にMXレコードを設定しなければなりません。 詳細については、「[受信メールを許可するための DNS とファイアウォールの設定の構成](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)」を参照してください。

### ファイアウォールあるいはAWSセキュリティグループの設定のチェック

{% data variables.product.product_location %} がファイアウォールの背後にあったり、AWS のセキュリティ グループを通じて提供されていたりするなら、`reply@reply.[hostname]` にメールを送信するすべてのメール サーバーに対してポート 25 が開いていることを確かめてください。

### サポートにお問い合せください
{% ifversion ghes %} 依然として問題が解決できない場合は、{% data variables.contact.contact_ent_support %} に連絡してください。 問題のトラブルシューティングに役立つ `http(s)://[hostname]/setup/diagnostics` からの出力ファイルをメールに添付してください。
{% elsif ghae %}SMTP サーバー経由で通知を送信するための電子メールの構成については、{% data variables.contact.github_support %} にお問い合わせください。 詳細については、「[{% data variables.contact.github_support %} からのヘルプの受信](/admin/enterprise-support/receiving-help-from-github-support)」を参照してください。
{% endif %}
