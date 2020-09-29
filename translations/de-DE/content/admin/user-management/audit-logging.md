---
title: Auditprotokollierung
intro: '{% data variables.product.prodname_enterprise %} speichert Protokolle von überwachten Benutzer-, Organisations-, Repository- und Systemereignissen. Protokolle eignen sich zum Debuggen und für die interne und externe Compliance.'
redirect_from:
  - /enterprise/admin/articles/audit-logging/
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
versions:
  enterprise-server: '*'
---

For a full list, see "[Audited actions](/enterprise/{{ currentVersion }}/admin/guides/installation/audited-actions)." For more information on finding a particular action, see "[Searching the audit log](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log)."

### Push-Protokolle

Jeder Git-Push-Vorgang wird protokolliert. Weitere Informationen finden Sie unter „[Push-Protokolle anzeigen](/enterprise/{{ currentVersion }}/admin/guides/installation/viewing-push-logs)“.

### Systemereignisse

Alle überwachten Systemereignisse, darunter alle Push- und Abrufvorgänge, werden in `/var/log/github/audit.log` protokolliert. Protokolle werden automatisch alle 24 Stunden rotiert und werden für sieben Tage gespeichert.

Das Support-Bundle enthält Systemprotokolle. Weitere Informationen finden Sie unter „[Daten für den {% data variables.product.prodname_dotcom %}-Support bereitstellen](/enterprise/{{ currentVersion }}/admin/guides/enterprise-support/providing-data-to-github-support)“.

### Support-Bundles

Alle Auditinformationen werden in der Datei `audit.log` im Verzeichnis `github-logs` eines beliebigen Support-Bundles protokolliert. Bei aktivierter Protokollweiterleitung können Sie diese Daten an einen externen Syslog-Datenstromconsumer wie [Splunk](http://www.splunk.com/) oder [Logstash](http://logstash.net/) streamen. Alle Einträge aus diesem Protokoll verwenden das Stichwort `github_audit` und können danach gefiltert werden. Weitere Informationen finden Sie unter „[Protokollweiterleitung](/enterprise/{{ currentVersion }}/admin/guides/installation/log-forwarding)“.

Beispielsweise zeigt der folgende Eintrag, dass ein neues Repository erstellt wurde.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

Dieses Beispiel zeigt, dass Commits per Push-Vorgang an ein Repository übertragen wurden.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/master" }
```
