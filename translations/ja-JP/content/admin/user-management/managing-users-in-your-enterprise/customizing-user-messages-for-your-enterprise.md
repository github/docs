---
title: Enterprise のユーザメッセージをカスタマイズする
shortTitle: Customizing user messages
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-for-your-enterprise
intro: '{% data variables.location.product_location %} でユーザーに表示されるカスタム メッセージを作成できます。'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Maintenance
ms.openlocfilehash: b767a651f19b6200abfc67696d98147ebf65bd9a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106430'
---
## ユーザメッセージについて

ユーザメッセージにはいくつかの種類があります。
- {% ifversion ghes %}サインインまたは{% endif %}サインアウト ページ{% ifversion ghes or ghae %}に表示されるメッセージ
- ポップアップ ウィンドウに 1 回表示され、無視する必要がある必須メッセージ{% endif %}{% ifversion ghes or ghae %}
- すべてのページの上部に表示されるアナウンスバナー{% endif %}

{% ifversion ghes %} {% note %}

**注:** 認証に SAML を使っている場合は、サインイン ページは ID プロバイダーによって提示されるため、{% data variables.product.prodname_ghe_server %} でカスタマイズすることはできません。

{% endnote %}

メッセージの書式設定には Markdown を使用できます。 詳細については、[{% data variables.product.prodname_dotcom %} での書き込みと書式設定](/articles/about-writing-and-formatting-on-github/)に関するページを参照してください。

## カスタムサインインメッセージの作成

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. "サインイン ページ" の{% ifversion ghes %}右側{% else %}下{% endif %}で、 **[メッセージの追加]** または **[メッセージの編集]** をクリックします。
![[メッセージの{% ifversion ghes %}追加{% else %}編集{% endif %}] ボタン](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. **[サインイン メッセージ]** で、ユーザーに表示するメッセージを入力します。
![サインイン メッセージ](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![[プレビュー] ボタン](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. 表示されたメッセージを確認します。
![レンダリングされたサインイン メッセージ](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %} {% endif %}

## カスタムサインアウトメッセージを作成する

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. "サインイン ページ" の{% ifversion ghes or ghae %}右側{% else %}下{% endif %}で、 **[メッセージの追加]** または **[メッセージの編集]** をクリックします。
![[メッセージの追加] ボタン](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. **[サインアウト メッセージ]** で、ユーザーに表示するメッセージを入力します。
![Sign two_factor_auth_header メッセージ](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% ifversion ghes or ghae %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![[プレビュー] ボタン](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. 表示されたメッセージを確認します。
![レンダリングされたサインアウト メッセージ](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% ifversion ghes or ghae %}
## 必須メッセージを作成する

メッセージを保存した後に初めてサインインしたときに、すべてのユーザに表示される必須メッセージを {% data variables.product.product_name %} で作成できます。 メッセージはポップアップ ウィンドウ内に表示され、ユーザーは {% data variables.location.product_location %} を使う前にそれを閉じる必要があります。

必須メッセージにはさまざまな用途があります。

- 新入社員にオンボーディング情報を提供する
- {% data variables.location.product_location %} に関するヘルプの取得方法をユーザーに伝える
- すべてのユーザーが {% data variables.location.product_location %} を使うときの利用規約を確実に読むようにする

メッセージに Markdown チェックボックスを含める場合、ユーザがメッセージを閉じる前に、すべてのチェックボックスを選択する必要があります。 たとえば、必須メッセージに利用規約を含める場合、各ユーザにチェックボックスを選択して、ユーザが利用規約を読んだことを確認するように要求できます。

ユーザに必須メッセージが表示されるたびに、監査ログイベントが作成されます。 イベントには、ユーザが表示したメッセージのバージョンが含まれます。 詳細については、「[エンタープライズの監査ログ イベント](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)」を参照してください。

{% ifversion display-mandatory-message-again %} {% else %} {% note %}

**注:** {% data variables.location.product_location %} の必須メッセージを変更した場合、メッセージを既に確認しているユーザーには新しいメッセージは表示されません。 

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. [必須メッセージ] の右側にある **[メッセージの追加]** をクリックします。
  ![[必須メッセージの追加] ボタン](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. [Mandatory message] の下のテキストボックスに、メッセージを入力します。
  ![必須メッセージ テキスト ボックスのスクリーンショット](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png) {%- ifversion display-mandatory-message-again %} 
1. 必要に応じて、 **[前のメッセージを閉じた場合でも、更新されたメッセージをすべてのユーザーに表示する]** を選びます。
![オンにするとすべてのユーザーに必須メッセージがプッシュされるチェック ボックスのスクリーンショット](/assets/images/enterprise/site-admin-settings/push-mandatory-message-checkbox.png) {% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% ifversion ghes or ghae %}
## グローバルアナウンスバナーを作成する

各ページの上部にグローバルアナウンスバナーを設定し、すべてのユーザに対して表示できます。

また、コマンド ライン ユーティリティまたは API を使用して、{% ifversion ghae or ghes %}管理シェルでお知らせバナーを設定することもできます{% ifversion ghes %}{% endif %}。 詳細については、{% ifversion ghes %}「[コマンド ライン ユーティリティ](/enterprise/admin/configuration/command-line-utilities#ghe-announce)」と {% endif %}「[{% data variables.product.prodname_enterprise %} 管理](/rest/reference/enterprise-admin#announcements)」を参照してください。
{% else %}

コマンドラインユーティリティを使用して、管理シェルでアナウンスバナーを設定することもできます。 詳細については、「[コマンド ライン ユーティリティ](/enterprise/admin/configuration/command-line-utilities#ghe-announce)」を参照してください。

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. [お知らせ] の{% ifversion ghes or ghae %}右側{% else %}下{% endif %}にある **[お知らせの追加]** をクリックします。
  ![[お知らせの追加] ボタン](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. [Announcement] のテキストフィールドに、バナーに表示するお知らせを入力します。
  ![お知らせを入力するテキスト フィールド](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. 必要に応じて、[Expires on] でカレンダーのドロップダウンメニューを選択し、有効期限をクリックします。
  ![カレンダーのドロップダウン メニューで有効期限を選択する](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png){% ifversion ghe-announce-dismiss %}
1. 必要に応じて、各ユーザーがお知らせを無視できるようにするには、 **[User dismissible]\(ユーザーが無視できる\)** を選択します。

   ![[User dismissible]\(ユーザーが無視できる\) チェックボックスのスクリーンショット](/assets/images/enterprise/site-admin-settings/user-dismissible-checkbox.png){% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %} {% endif %}
