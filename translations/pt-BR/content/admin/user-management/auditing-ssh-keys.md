---
title: Auditar chaves SSH
intro: Os administradores do site podem iniciar uma auditoria em toda a instância das chaves SSH.
redirect_from:
  - /enterprise/admin/articles/auditing-ssh-keys/
  - /enterprise/admin/user-management/auditing-ssh-keys
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Security
  - SSH
---

Depois de iniciada, a auditoria desabilita todas as chaves SSH e força os usuários a aprová-las ou rejeitá-las antes que eles possam clonar, fazer pull ou fazer push para qualquer repositório. Auditorias são úteis nos casos em que um funcionário ou contratado sai da empresa e você deve garantir a verificação de todas as chaves.

### Iniciar uma auditoria

Você pode iniciar uma auditoria de chave SSH na guia "All users" (Todos os usuários) do painel de administração do site:

![Iniciar auditoria de chave pública](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

Depois de clicar no botão "Start public key audit" (Iniciar auditoria de chave pública), você será redirecionado para uma tela de confirmação explicando as próximas etapas:

![Confirmar a auditoria](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

Depois de clicar no botão "Begin audit" (Iniciar auditoria), todas as chaves SSH serão invalidadas e exigirão aprovação. Você verá uma notificação indicando o início da auditoria.

### O que os usuários veem

Se o usuário tentar fazer qualquer operação no Git por SSH, a operação vai falhar e a seguinte mensagem será exibida:

```shell
ERROR: Olá, <em>username</em>. Estamos fazendo uma auditoria de chave SSH.
Acesse http(s)://<em>hostname</em>/settings/ssh/audit/2
para aprovar esta chave e validar a segurança.
Fingerprint: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: remote desativado inesperadamente
```

Quando clicar no link, o usuário deverá aprovar as chaves da própria conta:

![Auditar chaves](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

Depois de aprovar ou rejeitar as chaves, o usuário poderá interagir normalmente com os repositórios.

### Adicionar chave SSH

Os novos usuários deverão informar a senha ao adicionar uma chave SSH:

![Confirmação de senha](/assets/images/help/settings/sudo_mode_popup.png)

Quando adicionar a chave, o usuário receberá um e-mail de notificação como este:

    A chave SSH abaixo foi adicionada à sua conta:
    
    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
    
    Se achar que a chave foi adicionada por engano, você poderá removê-la e desabilitar o acesso por este caminho:
    
    http(s)://HOSTNAME/settings/ssh
