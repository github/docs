---
title: Fazer merge de um repositório upstream em sua bifurcação
intro: 'Se você não tem acesso push (gravação) em um repositório upstream, é possível fazer pull de commits do repositório para sua própria bifurcação.'
redirect_from:
  - /articles/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual referente ao seu projeto local.
3. Faça checkout do branch que deseja fazer merge. Normalmente, você fará o merge no branch-padrão.
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. Faça pull do branch desejado do repositório upstream. Esse método guardará o histórico do commit sem modificações.
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. Resolva os conflitos, caso existam. Para obter mais informações, consulte "[Solucionar conflitos de merge](/articles/addressing-merge-conflicts)".
6. Faça commit do merge.
7. Revise as alterações e certifique-se de que são adequadas.
8. Faça push do merge para o seu repositório GitHub.
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
