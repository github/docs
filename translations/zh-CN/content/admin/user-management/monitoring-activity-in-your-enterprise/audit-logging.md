---
title: 审核日志
intro: '{% data variables.product.product_name %} 会保留已审计 {% if enterpriseServerVersions contains currentVersion %} 系统、{% endif %}用户、组织和仓库事件的日志。 日志可用于调试以及内部和外部合规。'
redirect_from:
  - /enterprise/admin/articles/audit-logging/
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
  - /admin/user-management/audit-logging
versions:
  enterprise-server: '*'
  github-ae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---
有关完整列表，请参阅“[审核的操作](/admin/user-management/audited-actions)”。 有关查找特定操作的详细信息，请参阅“[搜索审核日志](/admin/user-management/searching-the-audit-log)”。

### 推送日志

会记录每个 Git 推送操作。 更多信息请参阅“[查看推送日志](/admin/user-management/viewing-push-logs)”。

{% if enterpriseServerVersions contains currentVersion %}
### 系统事件

所有经过审核的系统事件（包括所有推送和拉取）都会记录到 `/var/log/github/audit.log` 中。 日志每 24 小时自动轮换一次，并会保留七天。

支持包中包含系统日志。 更多信息请参阅“[向 {% data variables.product.prodname_dotcom %} Support 提供数据](/admin/enterprise-support/providing-data-to-github-support)”。

### 支持包

所有审核信息均会记录到任何支持包 `github-logs` 目录的 `audit.log` 文件中。 如果已启用日志转发，您可以将此数据传输到外部 syslog 流使用者，例如 [Splunk](http://www.splunk.com/) 或 [Logstash](http://logstash.net/)。 此日志中的所有条目均使用 `github_audit` 关键词，并且可以通过该关键词进行筛选。 更多信息请参阅“[日志转发](/admin/user-management/log-forwarding)。”

例如，此条目显示已创建的新仓库。

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

此示例显示提交已推送到仓库。

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```
{% endif %}
