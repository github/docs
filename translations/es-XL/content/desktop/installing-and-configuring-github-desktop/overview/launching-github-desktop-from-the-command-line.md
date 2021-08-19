---
title: Lanzar GitHub Desktop desde la línea de comando
shortTitle: Lanzar desde la línea de comandos
intro: Puedes lanzar GitHub Desktop desde la línea de comando.
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
versions:
  free-pro-team: '*'
---
{% mac %}

1. En la barra de menú, selecciona el menú de **{% data variables.product.prodname_desktop %}** y luego da clic en **Instalar la Herramienta de Línea de Comandos**. ![Opción para Instalar la Herramienta de Línea de Comandos en el menú desplegable de {% data variables.product.prodname_desktop %}](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. Abre Terminal.
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github <em>/path/to/repo</em>
  ```

  También puedes cambiar tu ruta de repositorio y luego teclear `github .` para abrir ese repositorio.

  ```shell
  $ cd <em>/path/to/repo</em>
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. Abre un símbolo del sistema.
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github <em>path\to\repo</em>
  ```

 También puedes cambiar tu ruta de repositorio y luego teclear `github .` para abrir ese repositorio.

  ```shell
  C:\Users\octocat> cd <em>repo\myrepo</em>
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
