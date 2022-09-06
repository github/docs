---
title: Stopping and starting a codespace
intro: 'to do'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a code space
---

## About stopping and starting a codespace

{% data reusables.codespaces.stopping-a-codespace %}

Regardless of where you created or access your codespaces, you can view and manage them in your browser at https://github.com/codespaces. 

## Stopping a codespace

 {% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
 1. To the right of the codespace you want to stop, click the elipsis (**...**).
 1. Click **Stop codespace**.
   ![Screenshot of option to stop a codespace](/assets/images/help/codespaces/stop-codespace-webui.png)

 {% endwebui %}


 {% cli %}

 {% data reusables.cli.cli-learn-more %}

 To stop a codespace use the `gh codespace stop` subcommand and then choose the codespace you want to stop from the list that's displayed.

 ```shell{:copy}
 gh codespace stop
 ```

 {% endcli %}


 {% vscode %}

 1. From within {% data variables.product.prodname_vscode %}, open the Command Palette.
    - In macOS: Press <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>.
    - In Windows/Linux: Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>.

 {% endvscode %}


## Restarting a codespace

 {% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
1. Click the name of the codespace you want to restart.
![Screenshot of stopped codespaces](/assets/images/help/codespaces/restart-codespace-webui.png)

 {% endwebui %}

 {% cli %}

When you restart a codespace you can choose to open it in {% data variables.product.prodname_vscode %} or in your browser. 

 - To restart a codespace and open it in {% data variables.product.prodname_vscode %}, use the `gh codespace code` subcommand and then choose the codespace you want to restart from the list that's displayed.

 ```shell{:copy} 
 gh codespace code
 ```

 - To restart a codespace and open it in your browser, use the `gh codespace open --web` subcommand and then choose the codespace you want to restart from the list that's displayed.

 ```shell{:copy}
 gh codespace open --web
 ```

 {% endcli %}


 {% vscode %}

 {% endvscode %}