---
title: Registro de auditoría
intro: '{% data variables.product.product_name %} mantiene las bitácoras de los eventos auditados de{% if enterpriseServerVersions contains currentVersion %} sistemas,{% endif %} usuarios, organizaciones, y repositorios. Los registros son útiles para la depuración y el cumplimiento interno y externo.'
redirect_from:
  - /enterprise/admin/articles/audit-logging/
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - empresa
---

Para encontrar una lista completa, consulta "[Acciones auditadas](/admin/user-management/audited-actions)". Para obtener más información sobre cómo encontrar una acción en particular, consulta la sección "[Buscar la bitácora de auditoría](/admin/user-management/searching-the-audit-log)".

### Subir registros

Se registra cada operación de inserción de Git. Para obtener más información, consulta la sección "[Ver las bitácoras de subida](/admin/user-management/viewing-push-logs)".

{% if enterpriseServerVersions contains currentVersion %}
### Eventos del sistema

Todos los eventos del sistema auditados, incluidas las inserciones y las extracciones, se registran en `/var/log/github/audit.log`. Los registros se rotan automáticamente cada 24 horas y se mantienen durante siete días.

El paquete de soporte incluye registros del sistema. Para obtener más información, consulta la sección "[Proporcionar datos al soporte de {% data variables.product.prodname_dotcom %}](/admin/enterprise-support/providing-data-to-github-support)".

### Paquete de soporte

Toda la información de auditoría se registra en el archivo `audit.log` del directorio de `github-logs` de cualquier paquete de soporte. Si está habilitado el redireccionamiento de registro, puedes transmitirle estos datos a un consumidor de flujo syslog externo como [Splunk](http://www.splunk.com/) o [Logstash](http://logstash.net/). Todas las entradas de este registro utilizan la palabra clave `github_audit` y se pueden filtrar con ella. Para obtener más información, consulta la sección "[Reenvío de bitácoras](/admin/user-management/log-forwarding)".

Por ejemplo, esta entrada muestra que se creó un repositorio nuevo.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

Este ejemplo muestra que las confirmaciones se subieron a un repositorio.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```
{% endif %}
