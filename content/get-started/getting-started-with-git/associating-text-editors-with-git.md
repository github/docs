---
title: Associating text editors with Git
intro: Use a text editor to open and edit your files with Git.
redirect_from:
  - /textmate
  - /articles/using-textmate-as-your-default-editor
  - /articles/using-sublime-text-2-as-your-default-editor
  - /articles/associating-text-editors-with-git
  - /github/using-git/associating-text-editors-with-git
  - /github/getting-started-with-github/associating-text-editors-with-git
  - /github/getting-started-with-github/getting-started-with-git/associating-text-editors-with-git
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Associate text editors
---

## Using {% data variables.product.prodname_vscode %} as your editor

{% mac %}

1. Install [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). For more information, see "[Setting up {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" in the {% data variables.product.prodname_vscode_shortname %} documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Type this command:

   ```shell
   git config --global core.editor "code --wait"
   ```

{% endmac %}

{% windows %}

1. Install [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). For more information, see "[Setting up {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" in the {% data variables.product.prodname_vscode_shortname %} documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Type this command:

   ```shell
   git config --global core.editor "code --wait"
   ```

{% endwindows %}

{% linux %}

1. Install [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). For more information, see "[Setting up {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" in the {% data variables.product.prodname_vscode_shortname %} documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Type this command:

   ```shell
   git config --global core.editor "code --wait"
   ```

{% endlinux %}

## Using Sublime Text as your editor

{% mac %}

1. Install [Sublime Text](https://www.sublimetext.com/). For more information, see "[Installation](https://docs.sublimetext.io/guide/getting-started/installation.html)" in the Sublime Text documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Type this command:

   ```shell
   git config --global core.editor "subl -n -w"
   ```

{% endmac %}

{% windows %}

1. Install [Sublime Text](https://www.sublimetext.com/). For more information, see "[Installation](https://docs.sublimetext.io/guide/getting-started/installation.html)" in the Sublime Text documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Type this command:

   ```shell
   git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
   ```

{% endwindows %}

{% linux %}

1. Install [Sublime Text](https://www.sublimetext.com/). For more information, see "[Installation](https://docs.sublimetext.io/guide/getting-started/installation.html)" in the Sublime Text documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Type this command:

   ```shell
   git config --global core.editor "subl -n -w"
   ```

{% endlinux %}

{% mac %}

## Using TextMate as your editor

1. Install [TextMate](https://macromates.com/).
1. Install TextMate's `mate` shell utility. For more information, see "[`mate` and `rmate`](https://macromates.com/blog/2011/mate-and-rmate/)" in the TextMate documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Type this command:

   ```shell
   git config --global core.editor "mate -w"
   ```

{% endmac %}

{% windows %}

## Using Notepad++ as your editor

1. Install Notepad++ from https://notepad-plus-plus.org/. For more information, see "[Getting started](https://github.com/notepad-plus-plus/npp-usermanual/blob/master/content/docs/getting-started.md)" in the Notepad++ documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Type this command:

   ```shell
   git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
   ```

{% endwindows %}
