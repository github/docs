---
title: Auditar chaves SSH
intro: Os administradores do site podem iniciar uma auditoria em toda a instância das chaves SSH.
redirect_from:
  - /enterprise/admin/articles/auditing-ssh-keys
  - /enterprise/admin/user-management/auditing-ssh-keys
  - /admin/user-management/auditing-ssh-keys
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Security
  - SSH
ms.openlocfilehash: 6ffcbdc698b6eb3a4736fdb2b4713e2871dcaac2
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147508429'
---
Depois de iniciada, a auditoria desabilita todas as chaves SSH e força os usuários a aprová-las ou rejeitá-las antes que eles possam clonar, fazer pull ou fazer push para qualquer repositório. Auditorias são úteis nos casos em que um funcionário ou contratado sai da empresa e você deve garantir a verificação de todas as chaves.

## Iniciar uma auditoria

Você pode iniciar uma auditoria de chave SSH na guia "All users" (Todos os usuários) do painel de administração do site:

![Iniciar auditoria de chave pública](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

Depois de clicar no botão "Start public key audit" (Iniciar auditoria de chave pública), você será redirecionado para uma tela de confirmação explicando as próximas etapas:

![Confirmar a auditoria](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

Depois de clicar no botão "Begin audit" (Iniciar auditoria), todas as chaves SSH serão invalidadas e exigirão aprovação. Você verá uma notificação indicando o início da auditoria.

## O que os usuários visualizam

Se o usuário tentar fazer qualquer operação no Git por SSH, a operação vai falhar e a seguinte mensagem será exibida:

```shell
ERROR: Hi <em>username</em>. We're doing an SSH key audit.
Please visit http(s)://<em>hostname</em>/settings/ssh/audit/2
to approve this key so we know it's safe.
Fingerprint: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: The remote end hung up unexpectedly
```

Quando clicar no link, o usuário deverá aprovar as chaves da própria conta:

![Auditar chaves](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

Depois de aprovar ou rejeitar as chaves, o usuário poderá interagir normalmente com os repositórios.

## Adicionar chave SSH

{% ifversion ghes %}

Quando um novo usuário adicionar uma chave SSH a uma conta, para confirmar o acesso do usuário, {% data variables.product.product_name %} solicitará a autenticação. Para obter mais informações, confira "[Modo sudo](/authentication/keeping-your-account-and-data-secure/sudo-mode)".

{% endif %}

Quando adicionar a chave, o usuário receberá um e-mail de notificação como este:

    The following SSH key was added to your account:

    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91

    If you believe this key was added in error, you can remove the key and disable access at the following location:

    http(s)://HOSTNAME/settings/ssh
