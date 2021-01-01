---
title: Audit logging
intro: '{% data variables.product.product_name %} keeps logs of audited{% if enterpriseServerVersions contains currentVersion %} system,{% endif %} user, organization, and repository events. Logs are useful for debugging and internal and external compliance.'
redirect_from:
  - /enterprise/admin/articles/audit-logging/
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
versions:
  enterprise-server: '*'
  github-ae: '*'
---

For a full list, see "[Audited actions](/admin/user-management/audited-actions)." For more information on finding a particular action, see "[Searching the audit log](/admin/user-management/searching-the-audit-log)."

### Push logs

Every Git push operation is logged. For more information, see "[Viewing push logs](/admin/user-management/viewing-push-logs)."

{% if enterpriseServerVersions contains currentVersion %}
### System events

All audited system events, including all pushes and pulls, are logged to `/var/log/github/audit.log`. Logs are automatically rotated every 24 hours and are retained for seven days.

The support bundle includes system logs. For more information, see "[Providing data to {% data variables.product.prodname_dotcom %} Support](/admin/enterprise-support/providing-data-to-github-support)."

### Support bundles

All audit information is logged to the `audit.log` file in the `github-logs` directory of any support bundle. If log forwarding is enabled, you can stream this data to an external syslog stream consumer such as [Splunk](http://www.splunk.com/) or [Logstash](http://logstash.net/). All entries from this log use and can be filtered with the `github_audit` keyword. For more information see "[Log forwarding](/admin/user-management/log-forwarding)."

For example, this entry shows that a new repository was created.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

This example shows that commits were pushed to a repository.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```
{% endif %}