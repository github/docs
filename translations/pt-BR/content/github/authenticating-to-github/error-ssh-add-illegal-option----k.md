---
title: 'Erro: ssh-add: opção ilícita -- K'
intro: 'O erro indica que sua versão do `ssh-add` não é compatível com a integração de keychain no macOS, que permite o armazenamento da frase secreta no keychain.'
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - ssh
---

A opção `-K` está presente na versão padrão da Apple do `ssh-add` e armazena a frase secreta no keychain quando você adiciona uma chave SSH ao ssh-agent. Caso você tenha instalado uma versão diferente do `ssh-add`, pode não ter suporte para `-K`.

### Resolver o problema

Para adicionar sua chave SSH privada ao ssh-agent, especifique o caminho para a versão da Apple do `ssh-add`:

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_rsa
```

{% note %}

**Observação:** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

### Leia mais

- "[Gerar uma nova chave SSH e adição dela ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"
- [Página do manual da Linux para o SSH-ADD](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- Para visualizar o manual da Apple para o SSH-ADD, execute `man ssh-add` no terminal
