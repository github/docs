---
title: Gerar logs de auditoria
intro: '{% data variables.product.product_name %} mantém registros de{% if enterpriseServerVersions contains currentVersion %} sistema auditado,{% endif %} eventos de usuários, organização e repositórios. Os logs são úteis para fins de depuração e conformidade interna e externa.'
redirect_from:
  - /enterprise/admin/articles/audit-logging/
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
versions:
  enterprise-server: '*'
  github-ae: '*'
---

Para obter uma lista completa, consulte "[Ações auditadas](/admin/user-management/audited-actions)". Para obter mais informações sobre como encontrar uma ação em particular, consulte "[Pesquisar no log de auditoria](/admin/user-management/searching-the-audit-log)".

### Logs de push

Todas as operações de push no Git têm um log. Para obter mais informações, consulte "[Visualizar logs de push](/admin/user-management/viewing-push-logs)".

{% if enterpriseServerVersions contains currentVersion %}
### Eventos do sistema

Todos os eventos auditados do sistema, inclusive pushes e pulls, são registrados em logs no caminho `/var/log/github/audit.log`. Os logs passam por rotação a cada 24 horas e ficam guardados por sete dias.

O pacote de suporte inclui logs de sistema. Para obter mais informações, consulte "[Fornecer dados para suporte de {% data variables.product.prodname_dotcom %}](/admin/enterprise-support/providing-data-to-github-support)."

### Pacotes de suporte

Todas as informações de auditoria são registradas no arquivo `audit.log`, no diretório `github-logs` de qualquer pacote de suporte. Se o encaminhamento de logs estiver habilitado, você poderá transmitir esses dados para um consumidor de fluxo de syslog externo, como o [Splunk](http://www.splunk.com/) ou o [Logstash](http://logstash.net/). Todas as entradas desse log usam a palavra-chave `github_audit` e podem ser filtradas por ela. Para obter mais informações, consulte "[Encaminhamento de registro](/admin/user-management/log-forwarding)".

Por exemplo, esta entrada mostra que um repositório foi criado.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

Este exemplo mostra que houve push dos commits para um repositório.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```
{% endif %}