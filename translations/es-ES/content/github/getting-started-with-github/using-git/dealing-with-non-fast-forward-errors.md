---
title: Tratamiento de errores sin avance rápido
intro: 'En ocasiones, Git no puede efectuar tu cambio en un repositorio remoto sin perder confirmaciones. Cuando esto sucede, los cambios que deseas subir se rechazan.'
redirect_from:
  - /articles/dealing-with-non-fast-forward-errors
  - /github/using-git/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/dealing-with-non-fast-forward-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Si otra persona ha subido cambios en la misma rama que tú, Git no podrá subir tus cambios:

```shell
$ git push origin main
> To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

Puedes resolver este problema [extrayendo y fusionando](/github/getting-started-with-github/getting-changes-from-a-remote-repository) los cambios realizados en la rama remota con los cambios que has hecho localmente:

```shell
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin <em>YOUR_BRANCH_NAME</em>
# Merges updates made online with your local work
```

O bien, puedes simplemente usar `git pull` para ejecutar al mismo tiempo ambos comandos:

```shell
$ git pull origin <em>YOUR_BRANCH_NAME</em>
# Grabs online updates and merges them with your local work
```
