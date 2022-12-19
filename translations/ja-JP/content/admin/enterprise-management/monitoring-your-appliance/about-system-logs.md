---
title: システム ログについて
intro: '{% data variables.product.product_name %} は、システム イベントのエラーとメッセージのログを保持しています。 ログは、ユーザー、アプリケーション、システムレベルのアクションと例外を識別するのに役立ちます。'
versions:
  ghes: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: e41702e25c7cc222cefb4eedb4e0322adf3acdba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063331'
---
## システム ログ

既定では、{% data variables.product.product_name %} のシステム ログは 24 時間ごとに自動的にローテーションされ、7 日間保持されます。 システム ログには、システム レベルのイベント、アプリケーション ログ、Git イベント データが含まれています。 ログ ファイルは頻繁に書き込まれ、サイズが大きくなる可能性があるため、{% data variables.product.prodname_ghe_server %} インスタンスとは別のホスト上の関連するログ エントリを抽出して解析すると利点がある場合があります。

保有期間を長くするには、システム ログをサードパーティのシステムまたはサーバーに転送できます。 詳細については、「[ログの転送](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)」を参照してください。

システム ログの確認に加えて、監査ログの表示、ログのプッシュ、グローバル Webhook の管理など、他の方法で企業内のアクティビティを監視できます。 詳細については、「[Enterprise でアクティビティを監視する](/admin/monitoring-activity-in-your-enterprise)」を参照してください。

## ログの種類

{% data variables.product.product_name %} アプライアンスで使用される主なログとその機能を次に示します。

| パス | 説明 |
|------|-------------|
| `/var/log/github/audit.log` | 監査対象のユーザー、リポジトリ、システム イベント。
| `/var/log/github/unicorn.log` | API と Web インターフェイスのトラフィック。
| `/var/log/github/exceptions.log` | アプリケーションレベルのエラー。
| `/var/log/haproxy.log` | アプライアンスに到達するすべての IP トラフィック。
| `/var/log/hookshot/resqued.log` | Webhook の配信とエラー。
| `/var/log/github/auth.log` | 組み込み、LDAP、CAS、SAML のいずれかの方法による認証要求。
| `/var/log/github/gitauth.log` | すべての Git 認証要求。

Git アクティビティと認証要求は、`babeld` サービスによって処理されます。

いくつかの {% data variables.product.product_name %} サービス (`babeld` サービスなど) はコンテナー化されます。 コンテナー化されたログは、`systemd journal` に書き込まれ、`journalctl` コマンドを使用していつでも問い合せることができます。

## 監査対象のシステム イベント

`audit.log` ファイルのすべてのエントリで `github_audit` キーワードが使用されており、それによりフィルター処理することができます。

たとえば、次のエントリは新規リポジトリが作成されたことを示しています。

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

次の例は、コミットがリポジトリにプッシュされたことを示しています。

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```

## Support Bundle

サポート バンドルにはシステム ログが含まれており、すべての監査情報が `github-logs` ディレクトリ内の `audit.log` ファイルに記録されます。 詳細については、「[{% data variables.product.prodname_dotcom %} サポートへのデータの提供](/support/contacting-github-support/providing-data-to-github-support)」を参照してください。

## 参考資料

- [`journalctl` コマンドの Linux man ページ](http://man7.org/linux/man-pages/man1/journalctl.1.html)
