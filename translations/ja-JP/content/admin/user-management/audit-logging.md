---
title: 監査ログ
intro: '{% data variables.product.prodname_enterprise %} は、監査済みのユーザ、Organization、リポジトリ、およびシステムイベントのログを保管します。 ログはデバッグや内部および外部のコンプライアンスに役立ちます。'
redirect_from:
  - /enterprise/admin/articles/audit-logging/
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
versions:
  enterprise-server: '*'
---

リスト全体については「[監査されたアクション](/enterprise/{{ currentVersion }}/admin/guides/installation/audited-actions)」を参照してください。 特定のアクションの検索についての詳細は、「[Audit log を検索する](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log)」を参照してください。

### プッシュのログ

Git プッシュ操作はすべてログに記録されます。 詳細は「[プッシュのログを表示する](/enterprise/{{ currentVersion }}/admin/guides/installation/viewing-push-logs)」を参照してください。

### システムイベント

すべてのプッシュとプルを含む監査されたすべてのシステムイベントは、`/var/log/github/audit.log` に記録されます。 ログは 24 時間ごとに自動的に交換され、7 日間保持されます。

Support Bundle にはシステムログが含まれています。 詳細は「[{% data variables.product.prodname_dotcom %} Support にデータを提供する](/enterprise/{{ currentVersion }}/admin/guides/enterprise-support/providing-data-to-github-support)」を参照してください。

### Support Bundle

すべての監査情報は、Support Bundle の `github-logs` ディレクトリにある `audit.log` ファイルに記録されます。 ログの転送が有効な場合、[Splunk](http://www.splunk.com/) や [Logstash](http://logstash.net/) などの外部の syslog ストリーミングコンシューマに、このデータをストリーミングすることができます。 このログからのすべてのエントリは、`github_audit` キーワードでフィルタリングできます。 詳細は「[ログの転送](/enterprise/{{ currentVersion }}/admin/guides/installation/log-forwarding)」を参照してください。

たとえば、次のエントリは新規リポジトリが作成されたことを示しています。

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

次の例は、コミットがリポジトリにプッシュされたことを示しています。

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```
