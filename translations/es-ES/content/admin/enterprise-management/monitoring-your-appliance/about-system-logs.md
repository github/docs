---
title: Acerca de las bitácoras de sistema
intro: '{% data variables.product.product_name %} mantiene bitácoras de mensaje y de error para los eventos de sistema. Las bitácoras son útiles para identificar acciones y excepciones a nivel de usuario, aplicación y sistema.'
versions:
  ghes: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---

## Bitácoras de sistema

Predeterminadamente, las bitácoras de sistema para {% data variables.product.product_name %} se rotan automáticamente cada 24 horas y se retienen durante siete días. Las bitácoras de sistema incluyen eventos a nivel de sistema, bitácoras de aplicación y datos de eventos de Git. Ya que los archivos de bitácora se escriben a menudo y pueden ser grandes en tamaño, podría ser beneficioso extraer y analizar las entradas de bitácora relevantes en un host separado a tu instancia de {% data variables.product.prodname_ghe_server %}.

Puedes reenviar bitácoras de sistema a un sistema o servidor de terceros para tener una retención mayor. Para obtener más información, consulta la sección "[Reenvío de bitácoras](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".

Adicionalmente a revisar tus bitácoras de sistema, puedes monitorear la actividad en tu empresa de otras formas, tal como ver las bitácoras de auditoría, bitácoras de subida y administrar webhooks globales. Para obtener más información, consulta la sección "[Monitorear la actividad en tu empresa](/admin/monitoring-activity-in-your-enterprise)".

## Tipos de bitácoras

A continuación se listan las bitácoras principales que utiliza el aplicativo de {% data variables.product.product_name %}, así como sus funciones:

| Ruta                             | Descripción​                                                                           |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| `/var/log/github/audit.log`      | Eventos de usuario, repositorio y sistema auditados.                                   |
| `/var/log/github/unicorn.log`    | Tráfico de interfaz web y de API.                                                      |
| `/var/log/github/exceptions.log` | Errores a nivel de aplicación.                                                         |
| `/var/log/haproxy.log`           | Todo el tráfico IP que llega al aplicativo.                                            |
| `/var/log/hookshot/resqued.log`  | Fallas y entrega de webhook.                                                           |
| `/var/log/github/auth.log`       | Solicitudes de autenticación, ya sea a través de métodos integrados, LDAP, CAS o SAML. |
| `/var/log/github/gitauth.log`    | Todas las solicitudes de autenticación de Git.                                         |

La actividad y solicitudes de autenticación de Git se procesan mediante el servicio de `babeld`.

Varios servicios de {% data variables.product.product_name %}, tal como el servicio de `babeld`, están en contenedores. Las bitácoras en contenedores se escriben al `systemd journal` y pueden consultarse en cualquier momento utilizando el comando `journalctl`.

## Eventos de sistema auditado

Todas las entradas del archivo `audit.log` utilizan y pueden filtrarse con la palabra clave `github_audit`.

Por ejemplo, esta entrada muestra que se creó un repositorio nuevo.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

Este ejemplo muestra que las confirmaciones se subieron a un repositorio.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```

## Paquete de soporte

El paquete de soporte incluye bitácoras de sistema y toda la información de auditoría se registra en el archivo `audit.log` que está en el directorio `github-logs`. Para obtener más información, consulta la sección "[Proporcionar datos al soporte de {% data variables.product.prodname_dotcom %}](/support/contacting-github-support/providing-data-to-github-support)".

## Leer más

- [Página de manual para el comando `journalctl`](http://man7.org/linux/man-pages/man1/journalctl.1.html)
