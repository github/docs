---
title: 通知を設定する
intro: '通知を受信する {% data variables.product.prodname_dotcom %} のアクティビティのタイプと、これらの更新の配信方法を選択します。'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails
  - /articles/configuring-notification-emails
  - /articles/about-notification-emails
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods
  - /articles/managing-notification-delivery-methods
  - /articles/managing-notification-emails-for-organizations
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive
  - /github/managing-subscriptions-and-notifications-on-github/configuring-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: b7822a7db40455476c5fc5ac6f779e45d7f558a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060763'
---
## 通知配信オプション

次の場所で、{% data variables.product.product_location %} のアクティビティに関する通知を受け取ることができます。

  - {% data variables.product.product_location %} Web インターフェイスの通知インボックス{% ifversion fpt or ghes or ghec %}
  - {% data variables.product.product_location %} のインボックスと同期する {% data variables.product.prodname_mobile %} の通知インボックス{% endif %}
  - 認証済みメール アドレスを使用するメール クライアント。{% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} および {% data variables.product.prodname_mobile %} の通知インボックスとも同期可能{% endif %}

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} 詳しい情報については、「[通知設定を選択する](#choosing-your-notification-settings)」を参照してください。
{% endif %}

{% data reusables.notifications.shared_state %}

### 通知インボックスの利点

{% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} および {% data variables.product.prodname_mobile %}{% endif %} の通知インボックスには、{% data variables.product.prodname_dotcom %} 通知フロー用に特別に設計されたトリアージ オプションが含まれています。
  - 複数の通知を一度にトリアージする。
  - 完了した通知を **[完了]** としてマークし、インボックスから削除する。 **[完了]** とマークされているすべての通知を表示するには、`is:done` クエリを使います。
  - 後で確認するために通知を保存する。 保存した通知にはインボックスでフラグが設定され、無期限に保持されます。 保存したすべての通知を表示するには、`is:saved` クエリを使います。
  - 通知のサブスクライブを解除し、インボックスから削除する。
  - 通知が、通知インボックスから {% data variables.product.product_location %} で発生する Issue、Pull Request、または Team ディスカッションをプレビューする。
  - `reasons` ラベルを使って、インボックスから通知を受信する最新の理由の 1 つを表示する。
  - 必要に応じて、さまざまな通知に焦点を当てるカスタム フィルターを作成する。
  - インボックスの通知をリポジトリまたは日付別にグループ化して、コンテキストの切り替えを減らし、概要をすばやく確認する。

{% ifversion fpt or ghes or ghec %} さらに、{% data variables.product.prodname_mobile %} を使用して、モバイル デバイスで通知を受信およびトリアージすることもできます。 詳細については、「[GitHub Mobile で通知設定を管理する](#managing-your-notification-settings-with-github-mobile)」または「[GitHub Mobile](/get-started/using-github/github-mobile)」を参照してください。
{% endif %}

### 通知にメールクライアントを使用する利点

メールクライアントを使用する利点の 1 つは、メールクライアントのストレージ容量に応じて、すべての通知を無期限に保持できることです。 受信トレイの通知は、保存済みとしてマークしていない限り、{% data variables.product.prodname_dotcom %} に対して 5 か月間のみ保持 **されます**。 **保存済** の通知は、無期限に保持されます。 インボックスの保持ポリシーの詳細については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)」を参照してください。

メールクライアントに通知を送信すると、メールクライアントの設定に従ってインボックスをカスタマイズすることもできます。これには、カスタムラベルまたは色分けされたラベルを含めることができます。

メール通知では、受信する各種通知に柔軟に対応し、更新用にさまざまなメールアドレスを選択できます。 たとえば、リポジトリの特定の通知を検証済みの個人のメールアドレスに送信できます。 メールのカスタマイズ オプションの詳細については、「[メール通知をカスタマイズする](#customizing-your-email-notifications)」を参照してください。

## 参加と Watch 対象の通知について

リポジトリの Watch 時は、そのリポジトリでのアクティビティの更新をサブスクライブしています。 同様に、特定の Team のディスカッションの Watch 時は、その Team のページですべての会話の更新をサブスクライブしていることになります。 詳細については、「[Team ディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions)」を参照してください。

自分が Watch しているリポジトリを表示するには、[Watch ページ](https://github.com/watching)にアクセスします。 詳細については、「[GitHub でサブスクリプションと通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)」を参照してください。

{% ifversion ghae %}
### 通知を設定する
{% endif %} リポジトリの通知は、リポジトリ ページまたは Watch ページで設定できます。

### カスタム通知について
リポジトリの通知はカスタマイズできます。 たとえば、リポジトリ内で複数のタイプのイベント ({% data reusables.notifications-v2.custom-notification-types %}) の更新が発生した場合にのみ通知を受け取るか、リポジトリのすべての通知を無視するかを選択できます。 詳細については、後述の「[個々のリポジトリのウォッチ設定の構成](#configuring-your-watch-settings-for-an-individual-repository)」を参照してください。

### 会話への参加
会話にコメントしたり、あなたのユーザー名が @mentions されたりすると、会話に _参加_ することになります。 デフォルトでは、会話に参加すると、会話に自動的にサブスクライブされます。 手動で参加した会話をサブスクライブ解除するには、Issue または Pull Request で **[サブスクライブ解除]** をクリックするか、通知インボックスの **[サブスクライブ解除]** オプションを使用します。

Watch 中または参加中の会話について、メールまたは {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} と {% data variables.product.prodname_mobile %}{% endif %} の通知インボックスで通知を受け取るかどうかを選択できます。

![参加および Watch 対象の通知オプション](/assets/images/help/notifications-v2/participating-and-watching-options.png)

次に例を示します。
  - 通知をメールに送信しない場合は、 **[メール]** をオフにして、参加と Watch 対象の通知を行います。
  - 会話に参加したときにメールで通知を受信する場合は、[Participating]\(参加中\) の下の **[メール]** を選択します。

Web{% ifversion fpt or ghes or ghec %} およびモバイル{% endif %} の Watch 通知または参加通知を有効にしない場合、通知インボックスは更新されません。

## メール通知をカスタマイズする

メール通知を有効化すると、{% data variables.product.product_location %} はコンテンツを HTML とプレーン テキストの両方で含むマルチパートのメールとして通知を送信します。 メール通知のコンテンツには、{% data variables.product.product_location %} のオリジナルのコンテンツに含まれる Markdown、@mentions、絵文字、ハッシュリンクなどがすべて含まれます。 メールでテキストだけを見たいなら、プレーンテキストのコピーだけを表示するようにメールクライアントを設定できます。

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% ifversion fpt or ghec %}

Gmailを使っているなら、通知メールの横にあるボタンをクリックして、通知を生成したオリジナルのIssueあるいはプルリクエストにアクセスできます。

![Gmailのボタン](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

参加中または Watch 中の会話の更新を送信するデフォルトのメールアドレスを選択します。 また、既定のメール アドレスの用途として、{% data variables.product.product_location %} のどのアクティビティの更新を受信するかを指定することもできます。 たとえば、デフォルトのメールを次の場所から更新するかどうかを選択します。
  - Issue やプルリクエストへのコメント。
  - Pull request のレビュー。
  - プルリクエストのプッシュ。
  - Issue やプルリクエストのオープン、コメント、クローズなどの、自分自身の操作による更新。

リポジトリを所有する Organization に応じて、さまざまなメールアドレスに通知を送信することもできます。 Organization では、特定のドメインのメールアドレスを検証する必要がある場合があります。 詳細については、「[Organization のメール通知の送信先を選択する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)」を参照してください。

特定のリポジトリの通知をメールアドレスに送信することもできます。 詳細については、「[リポジトリへのプッシュに対するメール通知について](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)」を参照してください。

{% data reusables.notifications-v2.email-notification-caveats %}

## メール通知のフィルタリング

{% data variables.product.product_location %} が送信する各メール通知には、ヘッダー情報が含まれています。 各メールのヘッダー情報には一貫性があるので、それを使ってメール クライアントですべての {% data variables.product.prodname_dotcom %} 通知あるいは特定の種類の {% data variables.product.prodname_dotcom %} 通知をフィルタリングしたりフォワードしたりできます。

自分に属していない通知を受け取っていると思われる場合は、その `X-GitHub-Recipient` ヘッダーと `X-GitHub-Recipient-Address` ヘッダーを調べます。 これらのヘッダは、対象の受信者を示しています。 メールの設定によっては、別のユーザ向けの通知を受け取る場合があります。

{% data variables.product.product_location %} からのメール通知には、以下のヘッダー情報が含まれています:

| Header | 情報 |
| --- | --- |
| `From` アドレス | このアドレスは常に、{% ifversion fpt or ghec %}"`notifications@github.com`"{% else %}"サイトの管理者が設定した no-reply メール アドレス"{% endif %} になります。 |
| `To` のフィールド | このフィールドはスレッドに直接接続します。{% ifversion not ghae %}メールに返信すると、会話に新しいコメントが追加されます。{% endif %} |
| `Cc` アドレス | あなたが会話をサブスクライブしていれば、{% data variables.product.product_name %} はあなたに `Cc` します。 2 番目の `Cc` メール アドレスは、通知の理由にマッチします。 これらの通知理由に対するサフィックスは{% data variables.notifications.cc_address %}です。 通知の理由には以下のようなものがあります。 <ul><li>`assign`: あなたに Issue または Pull Request が割り当てられた。</li><li>`author`: あなたが Issue または Pull Request を作成した。</li><li>`ci_activity`: あなたがトリガーした {% data variables.product.prodname_actions %} ワークフローの実行が完了した。</li><li>`comment`: Issue または Pull Request にあなたがコメントした。</li><li>`manual`: あなたが手動でサブスクライブした Issue または Pull Request が更新された。</li><li>`mention`: Issue または Pull Request についてあなたがメンションされた。</li><li>`push`: あなたがサブスクライブしている Pull Request に誰かがコミットした。</li><li>`review_requested`: あなた、またはあなたがメンバーになっている Team が Pull Request のレビューをリクエストされた。</li><li>`security_alert`: {% data variables.product.prodname_dotcom %} で、あなたがアラート受信者になっているリポジトリに脆弱性が検出された。</li><li>`state_change`: あなたがサブスクライブしている Issue または Pull Request がクローズまたはオープンされた。</li><li>`subscribed`: あなたが Watch しているリポジトリに更新があった。</li><li>`team_mention`: あなたが属している Team が、Issue または Pull Request についてメンションされた。</li><li>`your_activity`: あなたが Issue または Pull Request をオープン、コメントまたはクローズした。</li></ul> |
| `mailing list` のフィールド | このフィールドはリポジトリの名前とそのオーナーを特定します。 このアドレスの形式は常に `<repository name>.<repository owner>.{% data variables.command_line.backticks %}` となります。 |
| `X-GitHub-Severity` のフィールド | {% data reusables.repositories.security-alerts-x-github-severity %} 考えられる重大度レベルは次のとおりです。<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。 |

## 通知設定を選択する

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. 通知設定ページで、次の場合の通知の受信方法を選択します。
    - Watch しているリポジトリや Team ディスカッション、または参加している会話に更新がある場合。 詳細については、「[参加と Watch 対象の通知について](#about-participating-and-watching-notifications)」を参照してください。
    - 新しいリポジトリにアクセスするか、新しい Team に参加した場合。 詳しくは、「[自動 Watch](#automatic-watching)」をご覧ください。
    - リポジトリには新しい {% data variables.product.prodname_dependabot_alerts %} があります。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}の通知オプション](#dependabot-alerts-notification-options)」を参照してください。  {% ifversion fpt or ghec %}
    - {% data variables.product.prodname_actions %} で設定されたリポジトリにワークフロー実行の更新がある場合。 詳細については、「[{% data variables.product.prodname_actions %}の通知オプション](#github-actions-notification-options)」を参照してください。{% endif %}{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
    - あなたが所有者である組織に属するリポジトリに、新しいデプロイ キーが追加された場合。 詳細については、「[組織アラートの通知オプション](#organization-alerts-notification-options)」を参照してください。{% endif %}

## 自動 Watch

デフォルトでは、新しいリポジトリにアクセスすると、そのリポジトリの Watch が自動的に開始されます。 新しいチームに参加するたびに、更新が自動的にサブスクライブされ、その Team が @mentioned されたときに通知を受け取ります。 自動でサブスクライブしない場合は、自動 Watch オプションの選択を解除できます。

  ![自動 Watch オプション](/assets/images/help/notifications-v2/automatic-watching-options.png)

「リポジトリを自動的に Watch する」が無効になっている場合、自分のリポジトリを自動的に Watch することはありません。 リポジトリページに移動して、Watch オプションを選択する必要があります。

## 個々のリポジトリの Watch 設定を行う

リポジトリごとに Watch するどうかを選択できます。 また、{% data reusables.notifications-v2.custom-notification-types %} (リポジトリで有効になっている場合) など、特定のイベント タイプのみを通知するようにしたり、個々のリポジトリを完全に無視したりすることもできます。

{% data reusables.repositories.navigate-to-repo %}
2. 右上隅の [Watch] ドロップダウン メニューを選択し、Watch オプションをクリックします。
{% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![リポジトリのドロップダウン メニューの Watch オプション](/assets/images/help/notifications-v2/watch-repository-options-custom.png)

   **[カスタム]** オプションを使用すると、通知をさらにカスタマイズして、参加や @mentions に加えて、リポトリで特定のイベントが発生したときにのみ通知されるようにすることができます。
{% else %} ![リポジトリのドロップダウン メニューの Watch オプション](/assets/images/help/notifications-v2/watch-repository-options.png){% endif %} {% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![リポジトリのドロップダウン メニューのカスタム Watch オプション](/assets/images/help/notifications-v2/watch-repository-options-custom2-dotcom.png) [Issue] を選択すると、リポジトリ内のすべての Issue (このオプションを選択する前からあった Issue を含む) の更新について通知され、サブスクライブされます。 このリポジトリの Pull Request で @mentioned されている場合は、その通知も受信し、Issue についての通知に加えて、その特定の Pull Request の更新をサブスクライブします。
   {% endif %}

## Organization のメール通知の送信先を選択する

Organization に所属している場合、Organization のアクティビティに関する通知の送信先にするメールアカウントを指定できます。 たとえば、職場の Organization に所属している場合、通知を個人のアドレスではなく、職場のアドレスに送信する方が良いでしょう。    

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. [Default notification email] で、通知の送信先にするメールアドレスを選択します。   
![デフォルトの通知メールアドレスのドロップダウン](/assets/images/help/notifications/notifications_primary_email_for_orgs.png) 
4. **[保存]** をクリックします。  

### Organization ごとにメールの送信先を設定する   

2 つ以上の Organization のメンバーになっている場合は、各 Organization で、通知が{% ifversion fpt or ghec %}自分の検証済みメール アドレス{% else %}自分のアカウントのメール アドレス{% endif %}に送信されるよう設定できます。 {% ifversion fpt or ghec %}詳細については、「[メール アドレスの確認](/articles/verifying-your-email-address)」を参照してください。{% endif %} 

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. [Custom routing] で、一覧から Organization の名前を見つけます。   
![Organization とメールアドレスの一覧](/assets/images/help/notifications/notifications_org_emails.png)    
4. 変更したいアドレスの隣にある **[編集]** をクリックします。
![Organization のメール アドレスの編集](/assets/images/help/notifications/notifications_edit_org_emails.png)   
5. 検証済みメール アドレスのうち 1 つを選択し、 **[保存]** をクリックします。    
![Organization ごとのメール アドレス切り替え](/assets/images/help/notifications/notifications_switching_org_email.gif)

## {% data variables.product.prodname_dependabot_alerts %} の通知オプション 

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

利用可能な通知の配信方法の詳細、および {% data variables.product.prodname_dependabot_alerts %}の通知を最適化するためのアドバイスについては、「[{% data variables.product.prodname_dependabot_alerts %}に対する通知の設定](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)」をご覧ください。

{% ifversion fpt or ghes or ghec %}
## {% data variables.product.prodname_actions %} の通知オプション

{% data variables.product.prodname_actions %} で設定されている、Watch しているリポジトリのワークフロー実行更新を受信する方法を選択します。 失敗したワークフローの実行に関する通知のみを受信するように選択することもできます。

  ![{% data variables.product.prodname_actions %} アラートオプション](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
## 組織アラートの通知オプション 

組織の所有者は、組織のメンバーが組織内のリポジトリに新しいデプロイ キーを追加すると、既定で電子メール通知を受け取ります。 これらの通知はいつでもサブスクライブ解除できます。 通知設定ページの [Organization alerts]\(組織アラート\) で、 **[メール]** を選択解除します。 

{% endif %}

{% ifversion fpt or ghes or ghec %}
## {% data variables.product.prodname_mobile %} で通知設定を管理する

{% data variables.product.prodname_mobile %} をインストールすると、自動的に Web 通知が有効になります。 アプリケーション内で、次のイベントのプッシュ通知を有効にできます。
- ダイレクトメンション
- Issue またはプルリクエストへの割り当て
- プルリクエストのレビューをリクエスト
- デプロイメントの承認をリクエスト

{% data variables.product.prodname_mobile %} がモバイルデバイスにプッシュ通知を送信するタイミングをスケジュール設定することもできます。

{% data reusables.mobile.push-notifications-on-ghes %}

### {% data variables.product.prodname_ios %} で通知設定を管理する

1. 下部のメニューで、 **[プロファイル]** をタップします。
2. 設定を表示するには、{% octicon "gear" aria-label="The Gear icon" %} をタップします。
3. 通知設定を更新するには、 **[通知]** をタップしてから、トグルを使用して、好みの種類のプッシュ通知を有効または無効にします。
4. オプションで、{% data variables.product.prodname_mobile %} がモバイル デバイスにプッシュ通知を送信するタイミングをスケジュールするには、 **[Working Hours]\(業務時間\)** をタップし、 **[Custom working hours]\(カスタムの業務時間\)** トグルを使用して、プッシュ通知を受信するタイミングを選択します。

### {% data variables.product.prodname_android %} で通知設定を管理する

1. 下部のメニューで、 **[プロファイル]** をタップします。
2. 設定を表示するには、{% octicon "gear" aria-label="The Gear icon" %} をタップします。
3. 通知設定を更新するには、 **[通知の構成]** をタップしてから、トグルを使用して、好みの種類のプッシュ通知を有効または無効にします。
4. オプションで、{% data variables.product.prodname_mobile %} がモバイル デバイスにプッシュ通知を送信するタイミングをスケジュールするには、 **[Working Hours]\(業務時間\)** をタップし、 **[Custom working hours]\(カスタムの業務時間\)** トグルを使用して、プッシュ通知を受信するタイミングを選択します。

## {% data variables.product.prodname_mobile %} を使用して個々のリポジトリの Watch 設定をする 

リポジトリごとに Watch するどうかを選択できます。 また、{% ifversion fpt or ghec %}Issue、Pull Request、ディスカッション (リポジトリで有効になっている場合) などの特定のイベント タイプと{% endif %}新しいリリースのみを通知したり、個々のリポジトリを完全に無視したりすることもできます。

1. {% data variables.product.prodname_mobile %} で、リポジトリのメイン ページに移動します。
2. **[Watch]** をタップします。
   ![{% data variables.product.prodname_mobile %} の Watch ボタン](/assets/images/help/notifications-v2/mobile-watch-button.png)
3. 通知を受け取るアクティビティを選択するには、目的の Watch 設定をタップします。
   ![{% data variables.product.prodname_mobile %} の Watch 設定ドロップダウン メニュー](/assets/images/help/notifications-v2/mobile-watch-settings.png)

{% endif %}
