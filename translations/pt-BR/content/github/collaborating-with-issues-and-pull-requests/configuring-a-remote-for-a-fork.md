---
title: Configurar remote para bifurcação
intro: 'Você deve configurar um remote que aponta para o repositório upstream no Git para [sincronizar alterações que faz em uma bifurcação](/articles/syncing-a-fork) com o repositório original. Isso também permite sincronizar alterações feitas no repositório original com a bifurcação.'
redirect_from:
  - /articles/configuring-a-remote-for-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Liste o repositório remote configurado no momento para sua bifurcação.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```
3. Especifique um novo repositório *upstream* remote que será sincronizado com a bifurcação.
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git
  ```
4. Verifique o novo repositório upstream especificado para a bifurcação.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```
