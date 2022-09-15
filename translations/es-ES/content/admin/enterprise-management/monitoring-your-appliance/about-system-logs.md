---
title: Acerca de los registros del sistema
intro: '{% data variables.product.product_name %} mantiene registros de errores y mensajes de los eventos del sistema. Los registros son útiles para identificar las acciones y excepciones del usuario, la aplicación y el nivel del sistema.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063334'
---
## Registros del sistema

De forma predeterminada, los registros del sistema para {% data variables.product.product_name %} se giran automáticamente cada 24 horas y se conservan durante 7 días. Los registros del sistema incluyen eventos de nivel de sistema, registros de aplicaciones y datos de eventos de Git. Como en los archivos de registro se escribe con frecuencia y pueden tener un tamaño grande, puede ser beneficioso extraer y analizar las entradas de registro pertinentes en un host independiente de la instancia de {% data variables.product.prodname_ghe_server %}.

Puede reenviar los registros del sistema a un servidor o sistema de terceros para una retención más larga. Para más información, vea "[Reenvío de registros](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".

Además de revisar los registros del sistema, puede supervisar la actividad de la empresa de otras maneras, como ver registros de auditoría, insertar registros y administrar webhooks globales. Para más información, vea "[Supervisión de la actividad de usuario en la empresa](/admin/monitoring-activity-in-your-enterprise)".

## Tipos de registros

A continuación se enumeran los registros principales que usa el dispositivo {% data variables.product.product_name %} y sus funciones:

| Ruta de acceso | Descripción |
|------|-------------|
| `/var/log/github/audit.log` | Eventos de usuario, repositorio y sistema auditados.
| `/var/log/github/unicorn.log` | Tráfico de API e interfaz web.
| `/var/log/github/exceptions.log` | Errores de nivel de aplicación.
| `/var/log/haproxy.log` | Todo el tráfico IP que llega al dispositivo.
| `/var/log/hookshot/resqued.log` | Entrega y errores de webhook.
| `/var/log/github/auth.log` | Solicitudes de autenticación, ya sea mediante métodos integrados, LDAP, CAS o SAML.
| `/var/log/github/gitauth.log` | Todas las solicitudes de autenticación de Git.

El servicio `babeld` procesa las solicitudes de autenticación y actividad de Git.

Varios servicios de {% data variables.product.product_name %}, como el servicio `babeld`, se incluyen en contenedores. Los registros en contenedores se escriben en `systemd journal` y se pueden consultar en cualquier momento mediante el comando `journalctl`.

## Eventos del sistema auditados

Todas las entradas del archivo `audit.log` usan la palabra clave `github_audit` y se pueden filtrar con ella.

Por ejemplo, esta entrada muestra que se creó un repositorio nuevo.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

Este ejemplo muestra que las confirmaciones se subieron a un repositorio.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```

## Paquete de soporte

El paquete de soporte técnico incluye registros del sistema y toda la información de auditoría se registra en el archivo `audit.log` del directorio `github-logs`. Para más información, vea "[Suministro de datos al soporte técnico de {% data variables.product.prodname_dotcom %}](/support/contacting-github-support/providing-data-to-github-support)".

## Información adicional

- [Página man de Linux para el comando `journalctl`](http://man7.org/linux/man-pages/man1/journalctl.1.html)
