---
title: About system logs
intro: '{% data variables.product.product_name %} keeps error and message logs for system events. Logs are useful for identifying user, application and system-level actions and exceptions.'
versions:
  ghes: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---

## System logs

By default, system logs for {% data variables.product.product_name %} are automatically rotated every 24 hours and are retained for seven days. System logs include system-level events, application logs, and Git events data. As log files are often being written to and can be large in size, it may be beneficial to extract and parse relevant log entries on a host separate to your {% data variables.product.prodname_ghe_server %} instance.

You can forward system logs to a third-party system or server for longer retention. Para obtener más información, consulta la sección "[Reenvío de bitácoras](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".

In addition to reviewing your system logs, you can monitor activity in your enterprise in other ways, such as viewing audit logs, push logs and managing global webhooks. Para obtener más información, consulta la sección "[Monitorear la actividad en tu empresa](/admin/monitoring-activity-in-your-enterprise)".

## Types of logs

Listed below are the main logs used by the {% data variables.product.product_name %} appliance and their functions:

| Ruta                             | Descripción​                                                                  |
| -------------------------------- | ----------------------------------------------------------------------------- |
| `/var/log/github/audit.log`      | Audited user, repository and system events.                                   |
| `/var/log/github/unicorn.log`    | API and web interface traffic.                                                |
| `/var/log/github/exceptions.log` | Application-level errors.                                                     |
| `/var/log/haproxy.log`           | All IP traffic reaching the appliance.                                        |
| `/var/log/hookshot/resqued.log`  | Webhook delivery and failures.                                                |
| `/var/log/github/auth.log`       | Authentication requests, whether through built in, LDAP, CAS or SAML methods. |
| `/var/log/github/gitauth.log`    | All Git authentication requests.                                              |

Git activity and authentication requests are processed by the `babeld` service.

Several {% data variables.product.product_name %} services, such as the `babeld` service, are containerized. Containerized logs are written to the `systemd journal`, and can be queried at any time using the `journalctl` command.

## Audited system events

All entries from the `audit.log` file use and can be filtered with the `github_audit` keyword.

Por ejemplo, esta entrada muestra que se creó un repositorio nuevo.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

Este ejemplo muestra que las confirmaciones se subieron a un repositorio.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```

## Paquete de soporte

The support bundle includes system logs and all audit information is logged to the `audit.log` file in the `github-logs` directory. For more information, see "[Providing data to {% data variables.product.prodname_dotcom %} Support](/support/contacting-github-support/providing-data-to-github-support)."

## Leer más

- [Linux man page for the `journalctl` command](http://man7.org/linux/man-pages/man1/journalctl.1.html)
