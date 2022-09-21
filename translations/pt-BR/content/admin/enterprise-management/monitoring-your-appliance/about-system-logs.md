---
title: Sobre os logs do sistema
intro: 'O {% data variables.product.product_name %} mantém logs de erros e mensagens sobre eventos do sistema. Os logs são úteis para identificar ações e exceções no nível do usuário, do aplicativo e do sistema.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063327'
---
## Logs do sistema

Por padrão, os logs do sistema para o {% data variables.product.product_name %} são girados automaticamente a cada 24 horas e mantidos por sete dias. Os logs do sistema incluem eventos no nível do sistema, logs de aplicativos e dados de eventos do Git. Como os arquivos de log costumam ser gravados e podem ser grandes, pode ser útil extrair e analisar entradas de log relevantes em um host separado para sua instância do {% data variables.product.prodname_ghe_server %}.

Encaminhe os logs do sistema para um sistema ou um servidor de terceiros para obter uma retenção mais longa. Para obter mais informações, confira "[Encaminhamento de log](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".

Além de revisar os logs do sistema, você pode monitorar a atividade na sua empresa de outras maneiras, como ver os logs de auditoria, enviar os logs por push e gerenciar os webhooks globais. Para obter mais informações, confira "[Como monitorar a atividade na sua empresa](/admin/monitoring-activity-in-your-enterprise)".

## Tipos de logs

Veja abaixo uma lista dos principais logs usados pelo dispositivo do {% data variables.product.product_name %} e as respectivas funções:

| Caminho | Descrição |
|------|-------------|
| `/var/log/github/audit.log` | Eventos de usuário, de repositório e do sistema auditados.
| `/var/log/github/unicorn.log` | Tráfego da API e da interface da Web.
| `/var/log/github/exceptions.log` | Erros no nível do aplicativo.
| `/var/log/haproxy.log` | Todo o tráfego IP que chega ao dispositivo.
| `/var/log/hookshot/resqued.log` | Entrega e falhas do webhook.
| `/var/log/github/auth.log` | Solicitações de autenticação, seja por meio de métodos internos, do LDAP, do CAS ou do SAML.
| `/var/log/github/gitauth.log` | Todas as solicitações de autenticação do Git.

As solicitações de atividade e autenticação do Git são processadas pelo serviço `babeld`.

Vários serviços do {% data variables.product.product_name %}, como o serviço `babeld`, são conteinerizados. Os logs conteinerizados são gravados no `systemd journal` e podem ser consultados a qualquer momento por meio do comando `journalctl`.

## Eventos do sistema auditados

Todas as entradas do arquivo `audit.log` usam e podem ser filtradas com a palavra-chave `github_audit`.

Por exemplo, esta entrada mostra que um repositório foi criado.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

Este exemplo mostra que houve push dos commits para um repositório.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```

## Pacotes de suporte

O pacote de suporte inclui os logs do sistema e todas as informações de auditoria são registradas no arquivo `audit.log` no diretório `github-logs`. Para obter mais informações, confira "[Como fornecer dados para o Suporte do {% data variables.product.prodname_dotcom %}](/support/contacting-github-support/providing-data-to-github-support)".

## Leitura adicional

- [Página de manual do Linux para o comando `journalctl`](http://man7.org/linux/man-pages/man1/journalctl.1.html)
