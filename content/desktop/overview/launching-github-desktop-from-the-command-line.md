---
title: Launching GitHub Desktop from the command line
shortTitle: Launching from the command line
intro: You can launch GitHub Desktop from the command line.
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/overview/launching-github-desktop-from-the-command-line
versions:
  feature: desktop
---
{% mac %}

1. In the menu bar, select the **{% data variables.product.prodname_desktop %}** menu, then click **Install Command Line Tool**.
![Screenshot of the menu bar on a Mac. Under the expanded "GitHub Desktop" dropdown menu, the cursor hovers over "Install command line tool", highlighted in blue.](/assets/images/help/desktop/mac-install-command-line-tool.png)
1. Open Terminal.
1. {% data reusables.desktop.launch-desktop-from-command-line %}

   ```shell
   github /PATH/TO/REPO
   ```

   You can also change to your repository path and then type `github .` to open that repository.

   ```shell
   $ cd /PATH/TO/REPO
   [repo]$ github .
   ```

{% endmac %}

{% windows %}

1. Open a command prompt.
1. {% data reusables.desktop.launch-desktop-from-command-line %}

   ```shell
   C:\Users\octocat> github PATH\TO\REPO
   ```

   You can also change to your repository path and then type `github .` to open that repository.

   ```shell
   C:\Users\octocat> cd REPO\MY-REPO
   C:\Users\octocat\repo\myrepo> github .
   ```

{% endwindows %}
