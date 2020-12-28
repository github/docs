---
title: Resolver conflitos de merge após rebase do GitHub
intro: 'Quando executa uma operação de "rebase do Git", você geralmente move commits. Por causa disso, podem ocorrer conflitos de merge. Isso significa que dois ou mais commits modificaram a mesma linha do mesmo arquivo, e o Git não sabe qual alteração aplicar.'
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


Depois de reordenar e manipular os commits usando o `git rebase`, se ocorrer um conflito de merge, o Git informará exibindo a seguinte mensagem no terminal:

```shell
error: could not apply fa39187... something to add to patch A When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

Aqui, o Git informa qual commit está causando o conflito (`fa39187`). Você tem três opções:

* Você pode executar o `git rebase --abort` para desfazer completamente o rebase. O Git retornará o branch para o estado presente antes da execução do `git rebase`.
* Você pode executar o `git rebase --skip` para ignorar completamente o commit. Isso significa que nenhuma das alterações apresentadas pelo commit com problema será incluída. Essa opção dificilmente é usada.
* Você pode corrigir o conflito.

Para corrigir o conflito, você pode seguir os [procedimentos padrão para resolução de conflitos de merge a partir da linha de comando](/articles/resolving-a-merge-conflict-using-the-command-line). Quando terminar, você precisará chamar o `git rebase --continue` para o Git continuar a processar o restante do rebase.
