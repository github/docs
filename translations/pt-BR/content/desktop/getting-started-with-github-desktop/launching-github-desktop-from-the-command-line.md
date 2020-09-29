---
title: Iniciar o GitHub Desktop na linha de comando
shortTitle: Lançar a partir da linha de comando
intro: É possível iniciar o GitHub Desktop na linha de comando.
versions:
  free-pro-team: '*'
---

{% mac %}

1. Na barra de menu, selecione o menu **{% data variables.product.prodname_desktop %}** e, em seguida, clique em **Instalar Ferramenta da Linha de Comando**. ![Instalar opção de Ferramenta de Linha de Comando no menu suspenso {% data variables.product.prodname_desktop %}](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. Abra o terminal.
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github <em>/path/to/repo</em>
  ```

  Também é possível alterar o caminho do repositório e digite o `github .` para abrir esse repositório.

  ```shell
  $ cd <em>/path/to/repo</em>
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. Abra um prompt de comando.
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github <em>path\to\repo</em>
  ```

 Você também pode alterar para o caminho do seu repositório e, em seguida, digitar `github .` para abrir esse repositório.

  ```shell
  C:\Users\octocat> cd <em>repo\myrepo</em>
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
