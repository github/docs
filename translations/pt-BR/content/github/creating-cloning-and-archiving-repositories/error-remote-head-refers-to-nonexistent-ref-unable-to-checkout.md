---
title: 'Erro: HEAD remote faz referência a um ref inexistente, não é possível fazer checkout'
intro: 'O erro ocorre se o branch padrão de um repositório foi excluído em {% data variables.product.product_location %}.'
redirect_from:
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

É simples identificar esse erro; o Git avisará quando você tentar clonar o repositório:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Clonar um repositório
> Clonando em 'repo'...
> remote: Contando objetos: 66179, concluído.
> remote: Compactando objetos: 100% (15587/15587), concluído.
> remote: Total 66179 (delta 46985), reutilizados 65596 (delta 46402)
> Recebendo objetos: 100% (66179/66179), 51.66 MiB | 667 KiB/s, concluído.
> Solucionando deltas: 100% (46985/46985), concluído.
> aviso: HEAD remote faz referência a um ref inexistente, não é possível fazer checkout.
```

Para corrigir o erro, você precisa ser o administrador do repositório em {% data variables.product.product_location %}. Você deverá [ alterar o branch padrão](/github/administering-a-repository/changing-the-default-branch) do repositório.

Depois de fazer isso, você obterá uma lista de todos os branches disponíveis a partir da linha de comando:

```shell
$ git branch -a
# Lista TODOS os branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-master
```

Em seguida, mude para o novo branch:

```shell
$ git checkout new-master
# Criar e fazer checkout de um branch rastreado
> Configuração de um novo branch mestre para rastrear novo branch mestre remote na origem.
> Alterado para um novo 'novo branch master'
```
