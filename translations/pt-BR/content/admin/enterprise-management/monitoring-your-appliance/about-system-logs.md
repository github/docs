---
title: Sobre os registros do sistema
intro: '{% data variables.product.product_name %} mantém registros de erros e mensagens para eventos do sistema. Os registros são úteis para identificar exceções e ações de usuário, aplicação e nível de sistema.'
versions:
  ghes: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---

## Registros do sistema

Por padrão, os registros do sistema para {% data variables.product.product_name %} são girados automaticamente a cada 24 horas e são retidos por sete dias. Os registros do sistema incluem eventos em nível de sistema, registros de aplicativos e dados de eventos do Git. Como os arquivos de registro são normalmente gravados e podem ser grandes, pode ser benéfico extrair e analisar entradas de registros relevantes em um host separado pela sua instância {% data variables.product.prodname_ghe_server %}.

Você pode encaminhar registros do sistema para um sistema de terceiros ou servidor para retenção mais longa. Para obter mais informações, consulte "[Encaminhamento de registro](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".

Além de analisar os logs do sistema, você pode monitorar as atividades na sua empresa de outras formas, como ver logs de auditoria, registros de push e gerenciar webhooks globais. Para obter mais informações, consulte "[Atividade de monitoramento na sua empresa](/admin/monitoring-activity-in-your-enterprise)".

## Tipos de registros

Abaixo estão listados os principais registros usados pelo dispositivo de {% data variables.product.product_name %} e suas funções:

| Caminho                          | Descrição​                                                                    |
| -------------------------------- | ----------------------------------------------------------------------------- |
| `/var/log/github/audit.log`      | Eventos de usuário, repositório e sistema auditados.                          |
| `/var/log/github/unicorn.log`    | API e o tráfego da interface web.                                             |
| `/var/log/github/exceptions.log` | Erros no nível do aplicativo.                                                 |
| `/var/log/haproxy.log`           | Todo o tráfego IP que chega ao dispositivo.                                   |
| `/var/log/hookshot/resqued.log`  | Entrega de webhook e falhas.                                                  |
| `/var/log/github/auth.log`       | Solicita autenticação, seja através de métodos integrados, LDAP, CAS ou SAML. |
| `/var/log/github/gitauth.log`    | Todos os pedidos de autenticação do Git.                                      |

As solicitações de atividade e autenticação do Git são processadas pelo serviço `babeld`.

Vários serviços de {% data variables.product.product_name %}, como o serviço de `babeld` estão em contêineres. Os registros armazenados em contêiner são gravados em `systemd` e podem ser consultados a qualquer momento usando o comando `journalctl`.

## Eventos do sistema auditado

Todas as entradas do `audit.log` usam e podem ser filtradas com a palavra-chave `github_audit`.

Por exemplo, esta entrada mostra que um repositório foi criado.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

Este exemplo mostra que houve push dos commits para um repositório.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```

## Pacotes de suporte

O pacote de suporte inclui logs de sistema e todas as informações de auditoria são registradas no arquivo `audit.log` no diretório `github-logs`. Para obter mais informações, consulte "[Fornecer dados para suporte de {% data variables.product.prodname_dotcom %}](/support/contacting-github-support/providing-data-to-github-support)."

## Leia mais

- [A página de man do Linux para o comando `journalctl`](http://man7.org/linux/man-pages/man1/journalctl.1.html)
