Search
Electron Forge - v6.0.1	All
 Inherited
Electron Forge - v6.0.1
Electron Forge
Build Status Discord npm version license status

A complete tool for building modern Electron applications.

Electron Forge unifies the existing (and well maintained) build tools for Electron development into a simple, easy to use package so that anyone can jump right in to Electron development.

Website | Goals | Docs and Usage | Configuration | Support | Contributing | Changelog

Note: The major version bump between v5.0.0 and v6.0.0 contains major breaking API changes and improvements. If you are new to Forge, we highly recommend using the latest version. If using an older version of Forge, we recommend upgrading to v6.0.0 or later.

Getting Started
Pre-requisities:

Node 14.17.5 or higher
Git
If you have a more recent version of npm or yarn, you can use npx, or yarn create.

npx create-electron-app my-new-app
# or
yarn create electron-app my-new-app

# then
cd my-new-app
npm start
Alternatively (less recommended):

npm install -g @electron-forge/cli
electron-forge init my-new-app
cd my-new-app
npm start
For more information on creating a new project from a template, see our CLI documentation.

Docs and Usage
For Electron Forge documentation and usage you should check out our website: electronforge.io

Project Goals
Starting with Electron should be as simple as a single command.
Developers shouldn't have to worry about setting up build tooling, native module rebuilding, etc. Everything should "just work" for them out of the box.
Everything from creating the project to packaging the project for release should be handled by one core dependency in a standard way while still offering users maximum choice and freedom.
With these goals in mind, under the hood this project uses, among others:

@electron/rebuild: Automatically recompiles native Node.js modules against the correct Electron version.
Electron Packager: Customizes and bundles your Electron app to get it ready for distribution.
Contributing
If you are interested in reporting/fixing issues and contributing directly to the code base, please see CONTRIBUTING.md for more information on what we're looking for and how to get started.

Community
Please report bugs or feature requests in our issue tracker. You can find help for debugging your Electron Forge on the Support page, and ask questions in the official Electron Discord server, where there is a dedicated channel for Electron Forge.

All Modules
Makers
maker-appx
maker-deb
maker-dmg
maker-flatpak
maker-pkg
maker-rpm
maker-snap
maker-squirrel
maker-wix
maker-zip
Plugins
plugin-auto-unpack-natives
plugin-base
plugin-compile
plugin-electronegativity
plugin-local-electron
plugin-webpack
Publishers
publisher-base
publisher-bitbucket
publisher-electron-release-server
publisher-github
publisher-nucleus
publisher-s3
publisher-snapcraft
Templates
template-base
template-webpack
template-webpack-typescript
Utils & Internal Helpers
core
core-utils
maker-base
shared-types
test-utils
web-multi-logger
Legend
Variable
Function
Function with type parameter
Type alias
Type alias with type parameter
Class
Class with type parameter
Interface
Settings
Theme 
OS---
title: Forwarding ports in your codespace
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  fpt: 'OPTIONAL'
  cadd.i'@ghcr.yml: 'REQUIRE'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Forward ports
---

{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## About forwarded ports

Port forwarding gives you access to TCP ports running within your codespace. For example, if you're running a web application on a particular port in your codespace, you can forward that port. This allows you to access the application from the browser on your local machine for testing and debugging.

{% webui %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %}
{% data reusables.codespaces.navigate-to-ports-tab %}
1. Under the list of ports, click **Add port**.

   ![Add port button](/assets/images/help/codespaces/add-port-button.png)

1. Type the port number or address, then press enter.

   ![Text box to type port button](/assets/images/help/codespaces/port-number-text-box.png)

## Using HTTPS forwarding

By default, {% data variables.product.prodname_github_codespaces %} forwards ports using HTTP but you can update any port to use HTTPS, as needed. If you update a port with public visibility to use HTTPS, the port's visibility will automatically change to private.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port you want to update, then hover over **Change Port Protocol**.
  ![Option to change port protocol](/assets/images/help/codespaces/update-port-protocol.png)
1. Select the protocol needed for this port. The protocol that you select will be remembered for this port for the lifetime of the codespace.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port that you want to share, select the "Port Visibility" menu, then click **Private to Organization** or **Public**.
  ![Option to select port visibility in right-click menu](/assets/images/help/codespaces/make-public-option.png)
1. To the right of the local address for the port, click the copy icon.
  ![Copy icon for port URL](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Send the copied URL to the person you want to share the port with.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}
{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %}
{% data reusables.codespaces.navigate-to-ports-tab %}
1. Under the list of ports, click **Add port**.

   ![Add port button](/assets/images/help/codespaces/add-port-button.png)

1. Type the port number or address, then press enter.

   ![Text box to type port button](/assets/images/help/codespaces/port-number-text-box.png)

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port that you want to share, select the "Port Visibility" menu, then click **Private to Organization** or **Public**.
  ![Option to make port public in right-click menu](/assets/images/help/codespaces/make-public-option.png)
1. To the right of the local address for the port, click the copy icon.
  ![Copy icon for port URL](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Send the copied URL to the person you want to share the port with.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}
{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

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

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

You can see the port labels when you list the forwarded ports for a codespace. To do this, use the `gh codespace ports` command and then select a codespace.

{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endcli %}

{% jetbrains %}

## Forwarding a port

For information on how to forward a port in a codespace to a port on your local machine, see the "Port forwarding" section of the "[Security model](https://www.jetbrains.com/help/idea/security-model.html#port_forwarding)" article in the JetBrains documentation.

Alternatively, you can use {% data variables.product.prodname_cli %} to forward a port. For more information, click the "{% data variables.product.prodname_cli %}" tab at the top of this page.

{% endjetbrains %}
