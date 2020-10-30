---
title: 通知のためのメール設定
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration/
  - /enterprise/admin/articles/configuring-email/
  - /enterprise/admin/articles/troubleshooting-email/
  - /enterprise/admin/articles/email-configuration-and-troubleshooting/
  - /enterprise/admin/user-management/configuring-email-for-notifications
intro: '{% data variables.product.prodname_ghe_server %} のアクティビティにユーザが素早く反応しやすくするために、Issue、プルリクエスト、コミットのコメントに対してメール通知を送信するようインスタンスを設定するとともに、インバウンドのメール返信を許可する追加設定もできます。 通知のメールは、ユーザがWatchしているリポジトリでアクティビティがあった場合、参加しているプルリクエストあるいはIssueにアクティビティがあった場合、コメント中でユーザもしくはメンバーとなっているTeamが@メンションされた場合に送信されます。'
versions:
  enterprise-server: '*'
---

### SMTPの設定

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. ページの上部で**Settings（設定）**をクリックしてください。 ![設定タブ](/assets/images/enterprise/management-console/settings-tab.png)
3. 左のサイドバーで **Email（メール）**をクリックしてください。 ![メールタブ](/assets/images/enterprise/management-console/email-sidebar.png)
4. **Enable email（メールの有効化）**を選択してください。 これでアウトバウンドとインバウンドのメールがどちらも有効化されますが、インバウンドのメールが動作するには[着信メールを許可する DNS とファイアウォールの設定](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)に記述されているように DNS を設定する必要もあります。 ![アウトバウンドメールの有効化](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. メールサーバーの設定を記入してください:
    - [**Server address**] フィールドに SMTP サーバのアドレスを入力します。
    - [**Port**] フィールドには、SMTP サーバがメールを送信するのに使用するポートを入力します。
    - [**Domain**] フィールドには、SMTP サーバが HELO レスポンスを送信するドメイン名があれば入力してください。
    - [** Authentication（認証）**] ドロップダウンでは、SMTP サーバが利用する暗号化の種類を選択してください。
    - [**No-reply email address（No-replyメールアドレス）**] フィールドには、すべての通知メールの From および To フィールドに使うメールアドレスを入力してください。

    {% note %}

    **注釈:** リポジトリの [**Services**] メール webhook で [**Send from author**] チェックボックスを選択した場合、そのリポジトリのアウトバウンドメールは no-reply メールアドレスではなく、作者から送信されます。 For more information, see "[About email notifications for pushes to your repository](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)."

    {% endnote %}

6. no-replyメールアドレスへの着信メールをすべて破棄したい場合には、**Discard email addressed to the no-reply email address（no-replyメールアドレスへのメールの破棄）**を選択してください。 ![no-reply メールアドレス宛のメールを廃棄するチェックボックス](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. [**Support（サポート）**] の下で、ユーザに追加のサポートを提供するリンクの種類を選択してください。
    - **Email（メール）：** 内部的なメールアドレス。
    - **URL:** 内部的なサポートサイトへのリンク。 `http://` または `https://` を含める必要があります。 ![サポートのメールあるいは URL](/assets/images/enterprise/management-console/support-email-url.png)
8. [メール配信のテスト](#testing-email-delivery)。

### メール着信を許可する DNS とファイアウォールの設定

通知へのメールでの返信を許可したいなら、DNSを設定しなければなりません。

1. インスタンスのポート25がSMTPサーバにアクセスできることを確認してください。
2. `reply.[hostname]`を指すAレコードを作成してください。 DNSプロバイダとインスタンスのホスト設定によっては、 `*.[hostname]`を指す単一のAレコードを作成できる場合があります。
3. `reply.[hostname]`を指すMXレコードを作成して、このドメインへのメールがインスタンスにルーティングされるようにしてください。
4. `noreply.[hostname]` が `[hostname]` を指すようにする MX レコードを作成し、 通知メールの `cc` アドレスへの返信がインスタンスにルーティングされるようにしてください。 For more information, see {% if currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}"[About email notifications](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}."

DNSの設定ができたら、うまく動作するかをテストできます。

### メール配信のテスト

1. **Email（メール）**セクションの上部で、**Test email settings（メール設定のテスト）**をクリックしてください。 ![メール設定のテスト](/assets/images/enterprise/management-console/test-email.png)
2. **Send test email to（テストメールの送信先）**フィールドに、テストメールを送信するアドレスを入力してください。 ![メールアドレスのテスト](/assets/images/enterprise/management-console/test-email-address.png)
3. **Send test email（テストメールの送信）**をクリックしてください。 ![テストメールの送信](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **Tip：**即時の配信失敗や送出メール設定のエラーなど、テストメールの送信時にSMTPエラーが生じたなら、それらはTest email settingsダイアログボックスに表示されます。

  {% endtip %}

4. テストメールが失敗したなら[メール設定のトラブルシューティング](#troubleshooting-email-delivery)をしてください。
5. テストメールが成功したなら、ページの下部で**Save settings（設定の保存）**をクリックしてください。 ![設定保存のボタン](/assets/images/enterprise/management-console/save-settings.png)
6. 設定の実行が完了するのを待ってください。 ![インスタンスの設定](/assets/images/enterprise/management-console/configuration-run.png)

### メール配信のトラブルシューティング

#### Support Bundleの作成

表示されたエラーメッセージから何が悪いのかを判断できない場合、メールサーバと {% data variables.product.prodname_ghe_server %} 間の SMTP のやりとりすべてを含む [Support Bundle](/enterprise/{{ currentVersion }}/admin/guides/enterprise-support/providing-data-to-github-support) をダウンロードできます。 Support Bundleをダウンロードして展開したら、完全なSMTPのやりとりのログと関連するエラーを探して*enterprise-manage-logs/unicorn.log*のエントリをチェックしてください。

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

* SMTPサーバとのコネクションを開いている（`Connection opened: smtp.yourdomain.com:587`）。
* コネクションの作成には成功し、TLSの使用を選択している（`TLS connection started`）。
* `login`認証が実行されている（`<- "AUTH LOGIN\r\n"`）。
* SMTPサーバは、認証を不正として拒否している（`-> "535-5.7.1 Username and Password not accepted.`）。

#### {% data variables.product.product_location_enterprise %}ログのチェック

インバウンドのメールが機能していることを検証する必要がある場合、インスタンスの */var/log/mail.log*と*/var/log/mail-replies/metroplex.log* との 2 つのログファイルを検証してください。

*/var/log/mail.log* は、メッセージがサーバーに到達したかを検証します。 以下は、成功したメールの返信の例です:

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

*/var/log/mail-replies/metroplex.log* は、インバウンドのメールが Issue やプルリクエストに返信として追加されるよう処理されているかを示します。 以下は成功したメッセージの例です:

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

`metroplex`がインバウンドのメッセージを捉えて処理し、ファイルを`/data/user/incoming-mail/success`に移動させていることが分かります。

#### DNS設定の検証

インバウンドのメールを適切に処理するには、適切にAレコード（あるいはCNAME）と共にMXレコードを設定しなければなりません。 詳細は「[着信メールを許可するよう DNS およびファイアウォールを設定する](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)」を参照してください。

#### ファイアウォールあるいはAWSセキュリティグループの設定のチェック

{% data variables.product.product_location_enterprise %}がファイアウォールの背後にあったり、AWSのセキュリティグループを通じてアクセスされていたりするなら、`reply@reply.[hostname]`にメールを送信するすべてのメールサーバーに対してポート25がオープンされていることを確かめてください。

#### サポートへの連絡

依然として問題が解決できない場合は、{% data variables.contact.contact_ent_support %} に連絡してください。 問題のトラブルシューティングを支援するため、メールには`http(s)://[hostname]/setup/diagnostics`からの出力ファイルを添付してください。
