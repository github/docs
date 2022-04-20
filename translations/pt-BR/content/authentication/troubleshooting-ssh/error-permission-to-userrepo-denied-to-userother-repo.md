---
title: 'Erro: permissão de usuário/repo negada a outro usuário/repo'
intro: O erro indica que a chave inserida está associada a outro repositório como uma chave de implantação e não tem acesso ao repositório que você está tentando entrar.
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permissão negada por outro repositório
---

Para corrigir isso, remova a chave de implantação do repositório, e [adicione a chave à sua conta pessoal](/articles/adding-a-new-ssh-key-to-your-github-account).

Caso a chave deva ser utilizada como uma chave de implantação, consulte [o guia de chaves de implantação](/guides/managing-deploy-keys) para mais informações.
