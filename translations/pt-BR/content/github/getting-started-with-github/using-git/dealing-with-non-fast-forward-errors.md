---
title: Lidar com erros non-fast-forward
intro: 'Às vezes, o Git não pode fazer sua alteração em um repositório remote sem perder os commits. Quando isso acontece, seu push é recusado.'
redirect_from:
  - /articles/dealing-with-non-fast-forward-errors
  - /github/using-git/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/dealing-with-non-fast-forward-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
Se outra pessoa tiver feito push no mesmo branch que você, o Git não poderá fazer push das alterações:

```shell
$ git push origin main
> To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

Você pode corrigir isso [fazendo fetch e merge](/github/getting-started-with-github/getting-changes-from-a-remote-repository) das alterações feitas no branch remote com as alterações que foram feitas localmente:

```shell
$ git fetch origin
# Faz fetch das atualizações feitas em um repositório online
$ git merge origin <em>YOUR_BRANCH_NAME</em>
# Faz merge de atualizações feitas online com seu trabalho local
```

Ou você pode simplesmente usar `git pull` para executar ambos os comandos de uma vez:

```shell
$ git pull origin <em>YOUR_BRANCH_NAME</em>
# Captura atualizações online e faz merge delas com seu trabalho local
```
