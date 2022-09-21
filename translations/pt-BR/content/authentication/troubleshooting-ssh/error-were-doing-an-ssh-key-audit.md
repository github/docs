---
title: 'Erro: auditoria de chave SSH em andamento'
intro: O erro indica que a chave SSH em uso para uma operação Git não foi verificada.
redirect_from:
  - /articles/error-we-re-doing-an-ssh-key-audit
  - /articles/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/troubleshooting-ssh/error-were-doing-an-ssh-key-audit
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key audit
ms.openlocfilehash: 8683f5506fc2a026c11f22f2086de2308d096906
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083539'
---
Ao usar uma chave não verificada para operações no Git, será solicitada uma auditoria de suas chaves SSH.

```shell
ERROR: We're doing an SSH key audit.
Reason: unverified due to lack of use
Please visit https://github.com/settings/ssh
to approve this key so we know it's safe.
Fingerprint: ab:08:46:83:ff:f6:c4:f8:a9:4e:68:6b:94:17:f2:46
fatal: could not read from remote repository
```
## Resolver o problema

Para corrigir isso, você precisa [examinar suas chaves SSH](/articles/reviewing-your-ssh-keys) e rejeitar ou aprovar a chave não verificada. Clique no link do URL na mensagem de erro para ser direcionado à página de configurações SSH. A chave SSH não verificada estará destacada na lista de chaves SSH.
