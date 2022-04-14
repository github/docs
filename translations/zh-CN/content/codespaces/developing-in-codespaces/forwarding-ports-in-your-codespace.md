---
title: Forwarding ports in your codespace
intro: '{% data reusables.codespaces.about-port-forwarding %}'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Forward ports
---

## About forwarded ports

Port forwarding gives you access to TCP ports running within your codespace. For example, if you're running a web application on a particular port in your codespace, you can forward that port. This allows you to access the application from the browser on your local machine for testing and debugging.

When an application running inside a codespace prints output to the terminal that contains a localhost URL, such as `http://localhost:PORT` or `http://127.0.0.1:PORT`, the port is automatically forwarded. If you're using {% data variables.product.prodname_codespaces %} in the browser or in {% data variables.product.prodname_vscode %}, the URL string in the terminal is converted into a link that you can click to view the web page on your local machine. By default, {% data variables.product.prodname_codespaces %} forwards ports using HTTP.

![Automatic port forwarding](/assets/images/help/codespaces/automatic-port-forwarding.png)

You can also forward a port manually, label forwarded ports, share forwarded ports with members of your organization, share forwarded ports publicly, and add forwarded ports to the codespace configuration.

{% note %}

**Note**: {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## Forwarding a port

You can manually forward a port that wasn't forwarded automatically.

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Under the list of ports, click **Add port**.

   ![Add port button](/assets/images/help/codespaces/add-port-button.png)

1. Type the port number or address, then press enter.

   ![Text box to type port button](/assets/images/help/codespaces/port-number-text-box.png)

## Using HTTPS forwarding

By default, {% data variables.product.prodname_codespaces %} forwards ports using HTTP but you can update any port to use HTTPS, as needed.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port you want to update, then hover over **Change Port Protocol**.
  ![Option to change port protocol](/assets/images/help/codespaces/update-port-protocol.png)
1. Select the protocol needed for this port. The protocol that you select will be remembered for this port for the lifetime of the codespace.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Under the list of ports, click **Add port**.

   ![Add port button](/assets/images/help/codespaces/add-port-button.png)

1. Type the port number or address, then press enter.

   ![Text box to type port button](/assets/images/help/codespaces/port-number-text-box.png)

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

To forward a port use the `gh codespace ports forward` subcommand. Replace `codespace-port:local-port` with the remote and local ports that you want to connect. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace ports forward <em>codespace-port</em>:<em>local-port</em>
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_ports_forward).

To see details of forwarded ports enter `gh codespace ports` and then choose a codespace.

{% endcli %}

## Sharing a port

{% note %}

**Note:** You can only make a port private to an organization if your organization uses {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

If you want to share a forwarded port with others, you can either make the port private to your organization or make the port public. After you make a port private to your organization, anyone in the organization with the port's URL can view the running application. After you make a port public, anyone who knows the URL and port number can view the running application without needing to authenticate.

{% note %}

**Note:** Your choice of port visibility options may be limited by a policy configured for your organization. For more information, see "[Restricting the visibility of forwarded ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)."

{% endnote %}

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port that you want to share, select the "Port Visibility" menu, then click **Private to Organization** or **Public**.
  ![Option to select port visibility in right-click menu](/assets/images/help/codespaces/make-public-option.png)
1. To the right of the local address for the port, click the copy icon.
  ![Copy icon for port URL](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Send the copied URL to the person you want to share the port with.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port that you want to share, select the "Port Visibility" menu, then click **Private to Organization** or **Public**.
  ![Option to make port public in right-click menu](/assets/images/help/codespaces/make-public-option.png)
1. To the right of the local address for the port, click the copy icon.
  ![Copy icon for port URL](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Send the copied URL to the person you want to share the port with.

{% endvscode %}

{% cli %}

To change the visibility of a forwarded port, use the `gh codespace ports visibility` subcommand. {% data reusables.codespaces.port-visibility-settings %}

Replace `codespace-port` with the forwarded port number. Replace `setting` with `private`, `org`, or `public`. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>setting</em>
```

You can set the visibility for multiple ports with one command. For example:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_ports_visibility).

{% endcli %}

## Labeling a port

You can label a port to make the port more easily identifiable in a list.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Hover over the port you want to label, then click the label icon.
  ![Label icon for port](/assets/images/help/codespaces/label-icon.png)
{% data reusables.codespaces.type-port-label %}

## Adding a port to the codespace configuration

You can add a forwarded port to the {% data variables.product.prodname_codespaces %} configuration for the repository, so the port will automatically be forwarded for all codespaces created from the repository. After you update the configuration, any previously created codespaces must be rebuilt for the change to apply. For more information, see "[Configuring {% data variables.product.prodname_codespaces %} for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)."

You can manually configure forwarded ports in a `.devcontainer.json` file using the `forwardPorts` property, or you can use the "Ports" panel in your codespace.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port you want to add to the codespace configuration, then click **Set Label and Update devcontainer.json**.
  ![Option to set label and add port to devcontainer.json in the right-click menu](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png)
{% data reusables.codespaces.type-port-label %}
