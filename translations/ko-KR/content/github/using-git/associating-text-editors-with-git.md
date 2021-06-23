---
title: Associating text editors with Git
intro: Use a text editor to open and edit your files with Git.
redirect_from:
  - /textmate/
  - /articles/using-textmate-as-your-default-editor/
  - /articles/using-sublime-text-2-as-your-default-editor/
  - /articles/associating-text-editors-with-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% mac %}

### Using Atom as your editor

1. Install [Atom](https://atom.io/). For more information, see "[Installing Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" in the Atom documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Type this command:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### Using Visual Studio Code as your editor

1. Install [Visual Studio Code](https://code.visualstudio.com/) (VS Code). For more information, see "[Setting up Visual Studio Code](https://code.visualstudio.com/Docs/setup/setup-overview)" in the VS Code documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Type this command:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### Using Sublime Text as your editor

1. Install [Sublime Text](https://www.sublimetext.com/). For more information, see "[Installation](https://docs.sublimetext.io/guide/getting-started/installation.html)" in the Sublime Text documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Type this command:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

### Using TextMate as your editor

1. Install [TextMate](https://macromates.com/).
2. Install TextMate's `mate` shell utility. For more information, see "[mate and rmate](https://macromates.com/blog/2011/mate-and-rmate/)" in the TextMate documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Type this command:
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

### Using Atom as your editor

1. Install [Atom](https://atom.io/). For more information, see "[Installing Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" in the Atom documentation.
3. Type this command:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### Using Visual Studio Code as your editor

1. Install [Visual Studio Code](https://code.visualstudio.com/) (VS Code). For more information, see "[Setting up Visual Studio Code](https://code.visualstudio.com/Docs/setup/setup-overview)" in the VS Code documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Type this command:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### Using Sublime Text as your editor

1. Install [Sublime Text](https://www.sublimetext.com/). For more information, see "[Installation](https://docs.sublimetext.io/guide/getting-started/installation.html)" in the Sublime Text documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Type this command:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

### Using Notepad++ as your editor

1. Install Notepad++ from https://notepad-plus-plus.org/. For more information, see "[Getting started](https://npp-user-manual.org/docs/getting-started/)" in the Notepad++ documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Type this command:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

### Using Atom as your editor

1. Install [Atom](https://atom.io/). For more information, see "[Installing Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" in the Atom documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Type this command:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### Using Visual Studio Code as your editor

1. Install [Visual Studio Code](https://code.visualstudio.com/) (VS Code). For more information, see "[Setting up Visual Studio Code](https://code.visualstudio.com/Docs/setup/setup-overview)" in the VS Code documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Type this command:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### Using Sublime Text as your editor

1. Install [Sublime Text](https://www.sublimetext.com/). For more information, see "[Installation](https://docs.sublimetext.io/guide/getting-started/installation.html)" in the Sublime Text documentation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Type this command:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
