---
title: Installing Git Large File Storage
intro: 'In order to use {% data variables.large_files.product_name_short %}, you''ll need to download and install a new program that''s separate from Git.'
redirect_from:
  - /articles/installing-large-file-storage/
  - /articles/installing-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% mac %}

1. Navigate to [git-lfs.github.com](https://git-lfs.github.com) and click **Download**. Alternatively, you can install {% data variables.large_files.product_name_short %} using a package manager:
    - To use [Homebrew](http://brew.sh/), run `brew install git-lfs`.
    - To use [MacPorts](https://www.macports.org/), run `port install git-lfs`.

 If you install {% data variables.large_files.product_name_short %} with Homebrew or MacPorts, skip to step six.

2. On your computer, locate and unzip the downloaded file.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Change the current working directory into the folder you downloaded and unzipped.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Note:** The file path you use after `cd` depends on your operating system, Git LFS version you downloaded, and where you saved the {% data variables.large_files.product_name_short %} download.

 {% endnote %}
4. To install the file, run this command:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Note:** You may have to use `sudo ./install.sh` to install the file.

 {% endnote %}
5. Verify that the installation was successful:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. If you don't see a message indicating that `git {% data variables.large_files.command_name %} install` was successful, please contact {% data variables.contact.contact_support %}. Be sure to include the name of your operating system.

{% endmac %}

{% windows %}

1. Navigate to [git-lfs.github.com](https://git-lfs.github.com) and click **Download**.

  {% tip %}

  **Tip:** For more information about alternative ways to install {% data variables.large_files.product_name_short %} for Windows, see this [Getting started guide](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. On your computer, locate the downloaded file.
3. Double click on the file called *git-lfs-windows-1.X.X.exe*, where 1.X.X is replaced with the Git LFS version you downloaded. When you open this file Windows will run a setup wizard to install {% data variables.large_files.product_name_short %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Verify that the installation was successful:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. If you don't see a message indicating that `git {% data variables.large_files.command_name %} install` was successful, please contact {% data variables.contact.contact_support %}. Be sure to include the name of your operating system.

{% endwindows %}

{% linux %}

1. Navigate to [git-lfs.github.com](https://git-lfs.github.com) and click **Download**.

  {% tip %}

  **Tip:** For more information about alternative ways to install {% data variables.large_files.product_name_short %} for Linux, see this [Getting started guide](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. On your computer, locate and unzip the downloaded file.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Change the current working directory into the folder you downloaded and unzipped.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Note:** The file path you use after `cd` depends on your operating system, Git LFS version you downloaded, and where you saved the {% data variables.large_files.product_name_short %} download.

 {% endnote %}
4. To install the file, run this command:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Note:** You may have to use `sudo ./install.sh` to install the file.

 {% endnote %}
5. Verify that the installation was successful:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. If you don't see a message indicating that `git {% data variables.large_files.command_name %} install` was successful, please contact {% data variables.contact.contact_support %}. Be sure to include the name of your operating system.

{% endlinux %}

### Further reading

- "[Configuring {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)"
