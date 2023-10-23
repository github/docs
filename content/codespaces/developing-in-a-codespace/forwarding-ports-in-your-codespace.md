---
title: Forwarding ports in your codespace
shortTitle: Forward ports
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
  - /codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% jetbrains_beta %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains_beta %}

## About forwarded ports

Port forwarding gives you access to TCP ports running within your codespace. For example, if you're running a web application on a particular port in your codespace, you can forward that port. This allows you to access the application from the browser on your local machine for testing and debugging.

{% webui %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %}
{% data reusables.codespaces.navigate-to-ports-tab %}
1. Under the list of ports, click **Add port**.

   ![Screenshot of the "Add port" button.](/assets/images/help/codespaces/add-port-button.png)

1. Type the port number or address, then press Enter.

   ![Screenshot of the number 3000 being entered into the port number field for a new forwarded port.](/assets/images/help/codespaces/port-number-text-box.png)

## Using HTTPS forwarding

By default, {% data variables.product.prodname_github_codespaces %} forwards ports using HTTP but you can update any port to use HTTPS, as needed. If you update a port with public visibility to use HTTPS, the port's visibility will automatically change to private.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right-click the port you want to update, then hover over **Change Port Protocol**.

   ![Screenshot of the pop-up menu for a forwarded port, with the "Change Port Protocol" option selected and "HTTPS" selected in the submenu.](/assets/images/help/codespaces/update-port-protocol.png)

1. Select the protocol needed for this port. The protocol that you select will be remembered for this port for the lifetime of the codespace.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right-click the port that you want to share, click the **Port Visibility**, then click **Private to Organization** or **Public**.

   ![Screenshot of the pop-up menu for a forwarded port, with the "Port Visibility" option selected and "Private" selected in the submenu.](/assets/images/help/codespaces/make-public-option.png)

1. To the right of the local address for the port, click the copy icon.

   ![Screenshot of the "Ports" panel. The copy icon, which copies a forwarded port's URL, is highlighted with an orange outline.](/assets/images/help/codespaces/copy-icon-port-url.png)

1. Send the copied URL to the person you want to share the port with.

{% data reusables.codespaces.using-tools-to-access-ports-1 %}
{% data reusables.codespaces.find-address-and-token %}
{% data reusables.codespaces.using-tools-to-access-ports-2 %}
{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}
{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %}
{% data reusables.codespaces.navigate-to-ports-tab %}
1. Under the list of ports, click **Add port**.

   ![Screenshot of the "Add port" button.](/assets/images/help/codespaces/add-port-button.png)

1. Type the port number or address, then press Enter.

   ![Screenshot of the number 3000 being entered into the port number field for a new forwarded port.](/assets/images/help/codespaces/port-number-text-box.png)

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}

1. Right-click the port that you want to share, click **Port Visibility**, then click **Private to Organization** or **Public**.

   ![Screenshot of the pop-up menu for a forwarded port, with the "Port Visibility" option selected and "Private" selected in the submenu.](/assets/images/help/codespaces/make-public-option.png)

1. To the right of the local address for the port, click the copy icon.

   ![Screenshot of the "Ports" panel. The copy icon, which copies a forwarded port's URL, is highlighted with an orange outline.](/assets/images/help/codespaces/copy-icon-port-url.png)

1. Send the copied URL to the person you want to share the port with.

{% data reusables.codespaces.using-tools-to-access-ports-1 %}
{% data reusables.codespaces.find-address-and-token %}
{% data reusables.codespaces.using-tools-to-access-ports-2 %}
{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}
{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To forward a port use the `gh codespace ports forward` subcommand. Replace `codespace-port:local-port` with the remote and local ports that you want to connect. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace ports forward CODESPACE-PORT:LOCAL-PORT
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_ports_forward).

To see details of forwarded ports enter `gh codespace ports` and then choose a codespace.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

To change the visibility of a forwarded port, use the `gh codespace ports visibility` subcommand. {% data reusables.codespaces.port-visibility-settings %}

Replace `codespace-port` with the forwarded port number. Replace `setting` with `private`, `org`, or `public`. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace ports visibility CODESPACE-PORT:SETTINGS
```

You can set the visibility for multiple ports with one command. For example:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_ports_visibility).

{% data reusables.codespaces.using-tools-to-access-ports-1 %}

### Finding the address to connect to

To find the address for a forwarded port, enter `gh codespace ports`. If you have more than one codespace, select the appropriate codespace from the list that's displayed.

Copy the address and paste it somewhere for later use.

### Finding the GITHUB_TOKEN

1. Start an SSH session for your codespace.

   ```shell
   gh codespace ssh
   ```

1. If you have more than one codespace, select the appropriate codespace from the list that's displayed.
1. Display the `GITHUB_TOKEN`.

   ```shell
   echo $GITHUB_TOKEN
   ```

   The token is a string beginning `ghu_`.

1. Copy the token.

   {% note %}

   **Important**: Don't share this access token with anyone.

   {% endnote %}

1. Exit the SSH session.

   ```shell
   exit
   ```

{% data reusables.codespaces.using-tools-to-access-ports-2 %}
{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}
{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

### Seeing port labels on the command line

You can see the port labels when you list the forwarded ports for a codespace. To do this, use the `gh codespace ports` command and then select a codespace.

{% endcli %}

{% jetbrains_beta %}

## Forwarding a port

For information on how to forward a port in a codespace to a port on your local machine, see the "Port forwarding" section of the "[Security model](https://www.jetbrains.com/help/idea/security-model.html#port_forwarding)" article in the JetBrains documentation.

Alternatively, you can use {% data variables.product.prodname_cli %} to forward a port. For more information, click the "{% data variables.product.prodname_cli %}" tab at the top of this page.

{% endjetbrains_beta %}
