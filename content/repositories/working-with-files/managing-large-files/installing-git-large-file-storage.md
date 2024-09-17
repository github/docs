---
title: Installing Git Large File Storage
intro: 'In order to use {% data variables.large_files.product_name_short %}, you''ll need to download and install a new program that''s separate from Git.'
redirect_from:
  - /articles/installing-large-file-storage
  - /articles/installing-git-large-file-storage
  - /github/managing-large-files/installing-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/installing-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Install Git LFS
---
{% mac %}

1. Navigate to [git-lfs.com](https://git-lfs.com) and click **Download**. Alternatively, you can install {% data variables.large_files.product_name_short %} using a package manager:
   * To use [Homebrew](https://brew.sh/), run `brew install git-lfs`.
   * To use [MacPorts](https://www.macports.org/), run `port install git-lfs`.

   If you install {% data variables.large_files.product_name_short %} with Homebrew or MacPorts, skip to step six.

1. On your computer, locate and unzip the downloaded file.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Change the current working directory into the folder you downloaded and unzipped.

   ```shell
   cd ~/Downloads/git-lfs-1.X.X
   ```

   {% note %}

   **Note:** The file path you use after `cd` depends on your operating system, Git LFS version you downloaded, and where you saved the {% data variables.large_files.product_name_short %} download.

   {% endnote %}
1. To install the file, run this command:

   ```shell
   $ ./install.sh
   > {% data variables.large_files.product_name_short %} initialized.
   ```

   {% note %}

   **Note:** You may have to use `sudo ./install.sh` to install the file.

   {% endnote %}
1. Next, make required changes to your global Git config:

   ```shell
   $ git {% data variables.large_files.command_name %} install
   > {% data variables.large_files.product_name_short %} initialized.
   ```

1. If you don't see a message indicating that `git {% data variables.large_files.command_name %} install` was successful, please contact {% data variables.contact.contact_support %}. Be sure to include the name of your operating system.

{% endmac %}

{% windows %}

1. Navigate to [git-lfs.com](https://git-lfs.com) and click **Download**.

   {% tip %}

   **Tip:** For more information about alternative ways to install {% data variables.large_files.product_name_short %} for Windows, see this [Getting started guide](https://github.com/github/git-lfs#getting-started).

   {% endtip %}
1. On your computer, locate the downloaded file.
1. Double click on the file called _git-lfs-windows-1.X.X.exe_, where 1.X.X is replaced with the Git LFS version you downloaded. When you open this file Windows will run a setup wizard to install {% data variables.large_files.product_name_short %}.
{% data reusables.command_line.open_the_multi_os_terminal %} As the setup wizard may have modified your system `PATH`, opening a new session will ensure Git can locate Git LFS.
1. Verify that the installation was successful:

   ```shell
   $ git {% data variables.large_files.command_name %} install
   > {% data variables.large_files.product_name_short %} initialized.
   ```

1. If you don't see a message indicating that `git {% data variables.large_files.command_name %} install` was successful, please contact {% data variables.contact.contact_support %}. Be sure to include the name of your operating system.

{% endwindows %}

{% linux %}

1. Navigate to [git-lfs.com](https://git-lfs.com) and click **Download**.

   {% tip %}

   **Tip:** For more information about alternative ways to install {% data variables.large_files.product_name_short %} for Linux, see this [Getting started guide](https://github.com/github/git-lfs#getting-started).

   {% endtip %}
1. On your computer, locate and unzip the downloaded file.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Change the current working directory into the folder you downloaded and unzipped.

   ```shell
   cd ~/Downloads/git-lfs-1.X.X
   ```

   {% note %}

   **Note:** The file path you use after `cd` depends on your operating system, Git LFS version you downloaded, and where you saved the {% data variables.large_files.product_name_short %} download.

   {% endnote %}
1. To install the file, run this command:

   ```shell
   $ ./install.sh
   > {% data variables.large_files.product_name_short %} initialized.
   ```

   {% note %}

   **Note:** You may have to use `sudo ./install.sh` to install the file.

   {% endnote %}
1. Next, make required changes to your global Git config:

   ```shell
   $ git {% data variables.large_files.command_name %} install
   > {% data variables.large_files.product_name_short %} initialized.
   ```

1. If you don't see a message indicating that `git {% data variables.large_files.command_name %} install` was successful, please contact {% data variables.contact.contact_support %}. Be sure to include the name of your operating system.

{% endlinux %}

## Further reading

* "[AUTOTITLE](/repositories/working-with-files/managing-large-files/configuring-git-large-file-storage)"
