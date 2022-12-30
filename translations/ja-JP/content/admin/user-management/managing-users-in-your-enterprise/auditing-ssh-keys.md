---
title: SSHキーの監査
intro: サイト管理者は SSH キーのインスタンス全体に対する監査を始めることができます。
redirect_from:
  - /enterprise/admin/articles/auditing-ssh-keys
  - /enterprise/admin/user-management/auditing-ssh-keys
  - /admin/user-management/auditing-ssh-keys
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Security
  - SSH
ms.openlocfilehash: 6ffcbdc698b6eb3a4736fdb2b4713e2871dcaac2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147508433'
---
監査が開始されると、現在の SSHキーがすべて無効となります。リポジトリのクローン、プル、プッシュといった操作をするためには、ユーザは SSH キーの承認または拒否をしなければなりません。 監査は、従業員の退職時や請負業者の撤収時など、すべてのキーを検証する必要があるときに役立ちます。

## 監査を開始する

SSH キーの監査は、サイト管理ダッシュボードの [All users] タブから開始できます。

![公開鍵の監査の開始](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

"Start public key audit（公開鍵の監査の開始）" のボタンをクリックしたら、その後の流れを説明する確認画面に移動します。

![監査の確認](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

[Begin audit] (監査を開始) ボタンをクリックすると、すべての SSH キーは無効となり、承認が必要になります。 監査が始まったことを示す通知が表示されます。

## ユーザーに対する表示

ユーザがSSH経由で Git のオペレーションを実行した場合は、オペレーションが失敗し、次のメッセージが表示されます。

```shell
ERROR: Hi <em>username</em>. We're doing an SSH key audit.
Please visit http(s)://<em>hostname</em>/settings/ssh/audit/2
to approve this key so we know it's safe.
Fingerprint: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: The remote end hung up unexpectedly
```

ユーザがリンクをたどると、アカウントのキーを承認するよう要求されます。

![キーの監査](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

キーを承認または拒否したら、今まで通りリポジトリを使えるようになります。

## SSH キーを追加する

{% ifversion ghes %}

新しいユーザーがアカウントに SSH キーを追加してユーザーのアクセスを確認すると、{% data variables.product.product_name %} は認証を求められます。 詳しくは、「[Sudo モード](/authentication/keeping-your-account-and-data-secure/sudo-mode)」を参照してください。

{% endif %}

ユーザがキーを追加したら、次のような通知メールが届きます。

    The following SSH key was added to your account:

    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91

    If you believe this key was added in error, you can remove the key and disable access at the following location:

    http(s)://HOSTNAME/settings/ssh
