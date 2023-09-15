---
title: Stopping and starting a codespace
intro: You can stop and start your codespace to save resources and to pause work.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a codespace
---

{% jetbrains_beta %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains_beta %}

## About stopping and starting a codespace

{% data reusables.codespaces.stopping-a-codespace %}

Regardless of where you created or access your codespaces, you can view and manage them in your browser at https://github.com/codespaces.

## Stopping a codespace

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
 1. To the right of the codespace you want to stop, click the ellipsis (**...**).
 1. Click **Stop codespace**.

   ![Screenshot of a list of codespaces with the dropdown menu for one of them displayed, showing the "Stop codespace" option.](/assets/images/help/codespaces/stop-codespace-webui.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To stop a codespace use the `gh codespace stop` subcommand and then choose the codespace you want to stop from the list that's displayed.

```shell copy
gh codespace stop
```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Type `stop` and select **Codespaces: Stop Codespace** from the list of options.
1. In the list of codespaces, select the codespace you want to stop.

{% endvscode %}

{% jetbrains_beta %}

You can stop a codespace from the "Your codespaces" page (see [the web browser instructions](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=webui#stopping-a-codespace)) or by using {% data variables.product.prodname_cli %} (see [the CLI instructions](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=cli#stopping-a-codespace)).

{% endjetbrains_beta %}

## Restarting a codespace

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
1. Click the name of the codespace you want to restart.

   ![Screenshot of a list of two codespaces on GitHub. The names of the codespaces are highlighted with dark orange outlines.](/assets/images/help/codespaces/restart-codespace-webui.png)

{% endwebui %}

{% cli %}

When you restart a codespace you can choose to open it in {% data variables.product.prodname_vscode %} or in your browser.

- To restart a codespace and open it in {% data variables.product.prodname_vscode %}, use the `gh codespace code` subcommand and then choose the codespace you want to restart from the list that's displayed.

  ```shell copy
  gh codespace code
  ```

- To restart a codespace and open it in your browser, use the `gh codespace open --web` subcommand and then choose the codespace you want to restart from the list that's displayed.

  ```shell copy
  gh codespace open --web
  ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Type `connect` and select **Codespaces: Connect to Codespace** from the list of options.
1. In the list of codespaces, select the codespace you want to restart.

{% endvscode %}

{% jetbrains_beta %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains_beta %}

## Further reading

- "[AUTOTITLE](/codespaces/getting-started/the-codespace-lifecycle)"
