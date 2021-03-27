---
title: 'Erro: auditoria de chave SSH em andamento'
intro: O erro indica que a chave SSH em uso para uma operação Git não foi verificada.
redirect_from:
  - /articles/error-we-re-doing-an-ssh-key-audit
  - /articles/error-were-doing-an-ssh-key-audit
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - ssh
---

Ao usar uma chave não verificada para operações no Git, será solicitada uma auditoria de suas chaves SSH.

```shell
ERRO: auditoria de chave SSH em andamento.
Motivo: não verificada por falta de uso
Acesse https://github.com/settings/ssh
para aprovar esta chave e confirmar que é segura.
Impressão digital: ab:08:46:83:ff:f6:c4:f8:a9:4e:68:6b:94:17:f2:46
fatal: não é possível ler a partir do repositório remote
```
### Resolver o problema

Para corrigir, [revise suas chaves SSH](/articles/reviewing-your-ssh-keys) e rejeite ou aprove a chave não verificada. Clique no link do URL na mensagem de erro para ser direcionado à página de configurações SSH. A chave SSH não verificada estará destacada na lista de chaves SSH.
