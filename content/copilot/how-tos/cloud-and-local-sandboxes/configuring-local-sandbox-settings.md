---
title: Configuring local sandbox settings
shortTitle: Configure local sandbox
intro: 'Configure local sandboxing in the {% data variables.copilot.github_copilot_app %} or {% data variables.copilot.copilot_cli_short %} to restrict filesystem access, network connectivity, and credential use.'
versions:
  feature: copilot
redirect_from:
  - /copilot/how-tos/github-copilot-app/configure-local-sandboxing
contentType: how-tos
category:
  - Configure Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

## About local sandbox configuration

You can use the settings in the {% data variables.copilot.github_copilot_app %} or the `/sandbox` slash command in {% data variables.copilot.copilot_cli_short %} to grant extra paths, adjust network access, or turn sandboxing on or off.

Local sandboxing limits access to files, network resources, and credentials on your machine, reducing the potential impact of an unintended command. Settings are configured separately in the {% data variables.copilot.github_copilot_app_short %} and {% data variables.copilot.copilot_cli_short %}. Changing them in one does not change them in the other.

> [!NOTE]
> If you get your {% data variables.product.prodname_copilot_short %} license from an enterprise, some or all sandbox settings may be controlled by enterprise managed settings.

For a conceptual overview of cloud and local sandboxes for {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes). For detailed instructions on using local sandboxing, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing).

## Prerequisites

{% data reusables.cli.local-sandboxing-prereqs %}

## Configuring the {% data variables.copilot.github_copilot_app_short %}

You configure local sandboxing separately for each project in the {% data variables.copilot.github_copilot_app %}. The configuration applies to local repository and working tree sessions. It does not apply to cloud sandbox sessions or sessions that run on a remote host.

A working tree keeps the branches and files for concurrent sessions separate, but it does not restrict what a command can access elsewhere on your machine. Local sandboxing provides that additional protection.

### Enabling local sandboxing for a project

Local sandboxing is turned off by default unless enterprise managed settings require it. The sandbox settings are not available for remote-only projects. To enable sandboxing for new local sessions in a project:

1. In the app sidebar, open **Settings**.
1. Under "Projects," select the project that you want to configure.
1. Under "Sandbox," turn on **Sandbox new sessions**.

The setting applies to new sessions in the project. It does not change a session that is already running. For details of how to turn on local sandboxing for the current session, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing#enabling-and-disabling-sandboxing-for-your-session).

For most projects, you can start with the default sandboxing policy. This allows access needed for common development tasks such as installing dependencies, connecting to a local development server, pushing a branch, and creating a pull request. Add restrictions when the project is next to sensitive folders, does not need network access, or should not use your credentials.

### Configuring the sandbox policy for a project

A sandbox policy is a set of rules that controls which files, networks, and credentials agent-run tools can access. The project settings describe the policy that the app requests when a sandboxed session starts. The effective policy can be more restrictive, for example, when enterprise managed settings apply.

The "Configured policy summary" shows your selected folder, network, and credential settings. It does not confirm that the sandbox is running or show every restriction that applies. Changes are saved automatically.

In the project settings, you can configure:

* [**Filesystem access**](#configuring-filesystem-access): Grant additional read-only or read/write access to specific paths, or deny paths.
* [**Network access**](#configuring-network-access): Allow or block outbound internet and local network access.
* [**Credentials**](#configuring-credentials): Choose whether your Git and {% data variables.product.prodname_cli %} credentials are available inside the sandbox.

#### Configuring filesystem access

By default, a sandboxed session has read/write access to its workspace and current working directory. You can grant access to additional folders or prevent access to specific folders.

In the "Sandbox" section of the project settings, configure any of the following lists:

* **Additional read/write**: Folders that agent-run tools can read and modify.
* **Additional read-only**: Folders that agent-run tools can read but not modify.
* **Denied**: Folders that agent-run tools cannot access.

To add a folder, click **Add folder** for the appropriate list, then choose the folder. To remove a folder, click the delete icon next to its path.

A more-specific denied folder remains denied when a broader parent folder has read or write access.

On Windows, you can save a denied path in the project settings. If the active Windows sandbox capabilities cannot guarantee the denial, a sandboxed command fails with an unsupported-policy message. The command does not run with the denied path accessible or without a sandbox.

#### Configuring network access

By default, both network settings are turned on in the app. In the "Sandbox" section of the project settings, you can change the following settings:

* **Outbound internet**: Allow connections to internet services, such as {% data variables.product.github %} and package registries.
* **Local network**: Allow loopback and local-network connections, including connections to local development servers.

Network restrictions can affect package installation, API calls, preview servers, and other tools that need a network connection.

On Linux, sandboxed processes cannot connect directly to servers on your computer's localhost. The local network setting still controls requests through the built-in local proxy, as well as in-process operations such as web requests and remote MCP connections.

The operating-system limitations described in [Configuring network settings](#configuring-network-settings) also apply to the app. Unlike the app's **Local network** setting, the CLI's **Allow local network** setting is turned off by default.

#### Configuring credentials

By default, authenticated Git and {% data variables.product.prodname_cli %} operations are available inside the sandbox. You can turn off either of the following settings:

* **Git credentials**: Allow authenticated HTTPS Git operations.
* **{% data variables.product.prodname_cli %} credentials**: Allow {% data variables.product.prodname_cli %} (`gh`, not `copilot`) to authenticate.

Turning off credential access can prevent operations such as pushing a branch or creating a pull request from inside the sandbox.

### Applying policy changes

Changes to filesystem, network, and credential settings apply to new sessions or when an existing session restarts. They do not change the policy of a currently running session.

To restart a session while keeping its history, enter:

```text
/restart-session
```

The app accepts sandbox settings before checking whether your operating system can enforce them. Support is checked when the first sandboxed shell starts. If the host cannot enforce the requested policy, the shell fails with an unsupported-platform or unsupported-policy message and does not run unsandboxed. To find the currently supported Windows versions, see [Windows OS support for Copilot sandboxing](https://aka.ms/ghcp-sandbox-os-support).

If the app displays **Sandbox unavailable**, address the reported problem, then click **Retry sandbox**.

## Configuring {% data variables.copilot.copilot_cli_short %}

Use the `/sandbox` slash command to configure local sandboxing in the CLI. A managed setting is labeled `(managed)` in the `/sandbox` interface and can't be changed.

### Opening the sandbox configuration

1. Start a {% data variables.copilot.copilot_cli_short %} session.
1. Enter the `/sandbox` slash command.

   This opens an interactive configuration interface with four tabs: **General**, **Credentials**, **Filesystem**, and **Network**. Use <kbd>Tab</kbd> to switch between tabs. Press <kbd>Esc</kbd> to save your changes and close the configuration. If you are in a path, host-rule, or masked-variable list, press <kbd>Esc</kbd> first to return to its tab.

### Configuring general settings

The **General** tab controls the top-level sandbox behavior. When enterprise managed settings enforce a value, the dialog labels the setting as `(managed)` and prevents you from changing it.

| Setting | Description |
| --- | --- |
| **Enable sandbox** | Run shell commands inside the sandbox. You can also toggle this with `/sandbox enable` and `/sandbox disable`. |
| **Allow sandbox bypass** | Let the model request that individual commands run outside the sandbox, subject to approval. A bypass prompt can also let you disable sandboxing for the rest of the current session. Turned on by default. For more information, see [Allowing sandbox bypass](#allowing-sandbox-bypass). |
| **Sandbox MCP servers** | Run MCP servers inside the sandbox. Turned on by default. |
| **Sandbox LSP servers** | Run language servers (LSP servers) inside the sandbox. Turned on by default. |

#### Allowing sandbox bypass

The **Allow sandbox bypass** setting controls whether {% data variables.product.prodname_copilot_short %} can ask for permission to retry a blocked command with broader access.

* **On (default)**: For supported sandbox denials, the CLI offers an approval prompt describing the command and the proposed retry. Approval applies to that attempt. You can also choose to disable sandboxing for the rest of the session, if your enterprise permits it, or give {% data variables.product.prodname_copilot_short %} another instruction.
* **Off**: The command remains blocked. You can adjust settings you control or ask {% data variables.product.prodname_copilot_short %} to take a different approach.

A bypass only removes {% data variables.product.prodname_copilot_short %}'s own sandbox limits, not your operating system's. The command still runs under your normal account, so it gains no administrator or root access and cannot reach anything your system already blocks.

On supported Windows hosts, an approved retry can first relax file and process restrictions while keeping network restrictions in place. Its result is labeled "sandbox relaxed." If the command is still blocked, the CLI can then use the full bypass described in the same approval prompt. That result is labeled "sandbox bypassed."

If enterprise managed settings set `sandbox.allowBypass` to `false`, you cannot approve individual commands to run outside the sandbox or disable sandboxing for the rest of the session. If managed settings require sandboxing but the effective policy permits bypass, you cannot turn sandboxing off through ordinary settings, but you can disable it for the rest of the current session—either from an active bypass permission prompt or by running `/sandbox disable`—without loosening the saved policy.

### Configuring authentication settings

The **Credentials** tab controls authentication for Git and {% data variables.product.prodname_cli %}, and lets you configure masked environment variables. Sandboxed processes receive placeholder values. A local proxy supplies the real credentials only in HTTPS request headers sent to approved destinations. As on the other tabs, an enterprise-managed value is shown as `(managed)` and can't be changed.

| Setting | Description |
| --- | --- |
| **Authenticate git** | Allow authenticated HTTPS Git operations with placeholder credentials, without a credential helper inside the sandbox. The proxy supplies the real credentials only at their original host, port, and repository path. Turned on by default. |
| **Authenticate gh** | Provide a placeholder `GH_TOKEN` so {% data variables.product.prodname_cli %} (`gh`, not `copilot`) can authenticate without accessing its stored credentials. The proxy supplies the real token only to `github.com`, `api.github.com`, and `uploads.github.com`. Turned on by default. |
| **Masked environment variables** | Choose additional environment variables to replace with placeholders, and the HTTPS hosts that can receive their real values. |

On macOS, keychain access is turned off by default. To allow sandboxed commands to use the system keychain, set `sandbox.userPolicy.seatbelt.keychainAccess` to `true` in your personal `settings.json` file. This option is not available through `/sandbox` or `/settings`.

#### Masking environment variables

Use masked environment variables to let sandboxed tools authenticate to an API without receiving the real token. Masking applies to the selected variables in commands, local MCP servers, and language servers that run inside the sandbox. Git and `gh` authentication use masking automatically when their authentication settings are on. You do not need to add entries for them.

Before you configure masking, set the environment variable in the environment used to start {% data variables.copilot.copilot_cli_short %}. The value must be non-empty. Missing variables stay absent, and empty values are not masked.

Masking is active only while local sandboxing is enabled. Adding a masked variable does not enable sandboxing.

1. Enter `/sandbox enable` to enable local sandboxing.
1. Enter `/sandbox status` and confirm that sandboxing is enabled for the current session before continuing.
1. Enter `/sandbox`, then open the **Credentials** tab.
1. Select **Masked environment variables** and press <kbd>Enter</kbd>.
1. Press <kbd>A</kbd> to add an entry.
1. In **Variable**, type the variable name, such as `EXAMPLE_API_TOKEN`, then press <kbd>Enter</kbd>. Do not enter the secret value.
1. In **Inject hosts**, type a comma-separated list of hosts that can receive the real value, such as `api.example.com`, then press <kbd>Enter</kbd>. Use hostnames or wildcard subdomains such as `*.example.com`. Do not include a URL scheme, path, port, or bare `*`.
1. Press <kbd>Esc</kbd> to return to the **Credentials** tab.
1. On Windows, credential masking requires a Windows version that supports the sandbox’s local proxy. Go to the **Network** tab, and enable **Allow local network**. This also permits private-network access, subject to your configured host restrictions.
1. Press <kbd>Esc</kbd> to save and close the configuration.

To edit an entry, select it and press <kbd>Enter</kbd>. To remove it, press <kbd>X</kbd>. The editor stores only variable names and destination hosts. It does not read or display secret values.

You can also configure entries under `sandbox.credentials.envVars` in your personal `settings.json` file. For example, this entry lets the proxy supply `EXAMPLE_API_TOKEN` only to `api.example.com`:

```json
{
  "sandbox": {
    "enabled": true,
    "credentials": {
      "envVars": {
        "EXAMPLE_API_TOKEN": {
          "injectHosts": ["api.example.com"]
        }
      }
    }
  }
}
```

Adding an injection host does not allow network access to it. Your network settings must also permit the connection. Exact hostnames match only that host. `*.example.com` matches subdomains, but not `example.com` itself.

Masking requires a variable to remain in the child process's environment. Do not list a variable you want to mask in `--secret-env-vars`. That option removes named variables from command and MCP server environments instead of making them available as placeholders.

### Configuring filesystem settings

The **Filesystem** tab controls which directories and files the sandboxed process can access.

By default, {% data variables.product.prodname_copilot_short %} is granted read/write permission to everything in and below the current working directory. If you are in a Git repository, {% data variables.product.prodname_copilot_short %} is also granted:

* Read/write permission to everything in and below the repository's `.git` directory.
* Read permission for everything else in the repository above the current working directory. The working directory itself stays read/write, because the more specific grant wins where the two overlap.

| Setting | Description |
| --- | --- |
| **Include working directory** | Turned on by default. The current working directory (and the enclosing repository's `.git` directory, if any) is automatically added to the list of read/write paths. Unselect this option if you don't want the working directory to be granted read/write access automatically, and then manually allow access to specific paths. |
| **Allow dev tool access** | Turned on by default. Grants sandboxed commands read access to developer-tool configuration and caches—including package-manager registries and the tokens they store—and read/write access to shared build caches, so installs and builds work inside the sandbox. This appears as **dev-tool access** in the `/sandbox policy` report. Turn it off to require these locations to be granted explicitly. |

> [!IMPORTANT]
> Unselecting **Include working directory** removes access to everything in and below the `.git` directory of a Git repository. As a result, Git operations such as `status`, `add`, `commit`, and `diff` will fail unless you manually add access for this directory.

#### Adding filesystem path rules

You can specify paths that you want to add to the sandbox. This allows you to grant read-only or read/write access to directories and files outside the working directory. You can also deny access, to exclude directories and files from the sandbox.

1. In the **Filesystem** tab, select **User-configured paths** and press <kbd>Enter</kbd>.
1. Press <kbd>A</kbd> to add a new path rule.
1. Type a file or directory path. Use an absolute path—for example, `/Users/octocat/projects/app` on macOS or Linux, or `C:\Users\octocat\projects\app` on Windows. Then press <kbd>Enter</kbd>.

   > [!NOTE]
   > Adding a directory includes its entire subtree. Wildcards are not supported.

1. Use the left and right arrow keys on your keyboard to navigate between the permissions options: **Read/Write**, **Read-Only**, **Denied**. Then press <kbd>Enter</kbd> to select an option.

If the path itself is a symbolic link, selecting **Read/Write** or **Read-Only** also adds its current target when the CLI can resolve it. This does not automatically grant access to targets of other links inside an allowed directory.

After you have added filesystem paths, you can edit or delete them.

1. Use the up and down arrow keys to select a path.
1. Press <kbd>Enter</kbd> to edit the path, or <kbd>X</kbd> to delete it.
1. Press <kbd>Esc</kbd> to return to the **Filesystem** tab. Press <kbd>Esc</kbd> again to save and close the configuration.

On Windows, denied paths require a version that supports this restriction. If the host cannot enforce them, the command fails with an explanation rather than running with weaker protection.

### Configuring network settings

The **Network** tab controls whether sandboxed processes can make network connections.

| Setting | Description |
| --- | --- |
| **Allow outbound connections** | Turned on by default. Allows outbound internet connections, subject to any host rules. Turning it off also makes proxy settings and host rules inactive. |
| **Allow local network** | Turned off by default. Controls local access, such as connections to a development server on your machine. Its effect depends on your operating system, as described below. |
| **Host rules** | Allow or deny connections to specific hosts. See [Allowing or blocking specific hosts](#allowing-or-blocking-specific-hosts). |
| **Remote proxy** | Route the sandbox's outbound traffic through an HTTP proxy. See [Routing traffic through an HTTP proxy](#routing-traffic-through-an-http-proxy). |

Local network access behaves differently on each operating system:

| Operating system | Effect on sandboxed commands |
| --- | --- |
| macOS | With outbound access on and no proxy, host rules, or credential masking, turn on local access to let a command connect to a local development server. Leaving it off blocks localhost connections, including to a server the command starts itself. Turning outbound access off also blocks these connections. |
| Linux | Sandboxed commands use their own private network space. They can reach servers started there, but cannot connect directly to servers on your computer's localhost. With local access enabled and no remote proxy configured, requests through the built-in local proxy can reach your computer's localhost, subject to host rules. |
| Windows | Turning local access on permits private-network access. Connections to the host's localhost also require a Windows version that supports them. Proxying and host rules require this setting to be on. |

The setting also applies to the CLI's built-in web requests on every platform. If **Sandbox MCP servers** is enabled, it applies to remote MCP connections too. Allowing local access lets the built-in `web_fetch` tool reach localhost, but does not remove its separate restrictions on other private-network addresses.

Credential masking uses a local proxy even when you have not configured a remote proxy or host rules. This includes automatic masking for Git and `gh` authentication, which is enabled by default, and masked environment variables.

When a local proxy is active on macOS, turning local access on lets a command listen on a port, but does not let it connect directly to that port itself. A server listening on all network interfaces can be reachable from other devices on your network. On Windows, do not assume a server inside a proxied sandbox is reachable from the host's localhost.

#### Allowing or blocking specific hosts

Use host rules to restrict which destinations sandboxed commands can reach. Host rules are active only while sandboxing and outbound connections are enabled.

You can specify hostnames, wildcard subdomain patterns, or individual IPv4 or IPv6 addresses. IP address ranges in CIDR notation, such as `203.0.113.0/24`, are not supported.

1. On the **Network** tab, select **Proxy and blocking** and press <kbd>Enter</kbd>. Then select **Host rules** and press <kbd>Enter</kbd>.
1. Press <kbd>a</kbd> to add a rule.
1. Type a hostname, wildcard subdomain pattern, or individual IP address. For example, use `example.com`, `*.example.com`, `203.0.113.10`, or `2001:db8::10`. Do not include a URL scheme, path, or port. Press <kbd>Enter</kbd>.
1. Use the left and right arrow keys to choose **Allow** or **Deny**, then press <kbd>Enter</kbd> to add the rule to the list. New rules default to **Deny**.
1. Press <kbd>Esc</kbd> to return to **Proxy and blocking**, then press <kbd>Esc</kbd> again to return to the **Network** tab. Press <kbd>Esc</kbd> once more to save your changes and close the configuration.

To change a rule, select it and press <kbd>Enter</kbd>. To remove it, press <kbd>x</kbd>. Rules marked `(managed)` cannot be edited or removed. Changes are saved when you close the configuration.

When choosing rules, keep the following in mind:

* An allowed hostname matches that hostname only. Use `*.example.com` to match its subdomains, but not `example.com` itself. Use `*` to match every host.
* A denied domain also denies its subdomains. For example, denying `example.com` blocks both `example.com` and `api.example.com`.
* **Deny** takes precedence over **Allow**.
* Once you add an **Allow** rule, hosts that do not match an allowed entry are blocked, except for the automatic localhost entries described below. With no allow rules, other hosts remain allowed unless a deny rule or another network restriction blocks them.
* With at least one **Allow** rule, turning on both **Allow outbound connections** and **Allow local network** also permits `localhost`, `127.0.0.1`, and `::1`. These entries are added to the effective allowlist without changing your saved rules. Explicit **Deny** rules and enterprise allowlists can still block them.
* Enterprise rules can only narrow your allowlist, never widen it. A host is allowed only when both your rules and the enterprise rules permit it. If none of the hosts you allow are also allowed by the enterprise rules, nothing is left to permit. Every host is then denied. This is the one case where adding an **Allow** rule ends in a fully closed list. {% data variables.product.prodname_copilot_short %} shows this state in the sandbox dialog and in the policy details.

Host rules use a local proxy, even if you have not configured an HTTP proxy. On macOS and Linux, the sandbox forces every connection through this proxy, so a program cannot avoid your host rules by connecting directly. On Windows, the sandbox relies on programs honoring the proxy settings. As a result, programs that ignore the proxy settings on Windows can connect directly and get around your host rules.

#### Routing traffic through an HTTP proxy

To send the sandbox's outbound traffic through a proxy server:

1. On the **Network** tab, select **Proxy and blocking** and press <kbd>Enter</kbd>. Then select **Remote proxy** and press <kbd>Enter</kbd>.
1. Enter the proxy **URL**, and optionally a **Username** and **Password**.

To remove the proxy, clear the URL.

Keep the following in mind:

* The proxy applies only while **Allow outbound connections** is turned on. If you turn outbound connections off, the proxy is kept in your settings but stays inactive.
* Use an HTTP or HTTPS URL without embedded credentials. Enter credentials in the separate **Username** and **Password** fields. On Linux, use an IPv4 address or a hostname with IPv4 support rather than an IPv6-only address.
* The CLI stores a literal password in your operating system's credential store when available, with a local file fallback. Your settings file holds a reference to the stored secret, not the password.
* You can enter `${VAR}` or `$VAR` as the entire **Password** value to use an environment variable instead. The variable must be available to the CLI. If it is unset, no password is supplied, and a proxy that requires authentication can reject the request.
* The CLI connects through a built-in local proxy, which keeps the upstream proxy credentials out of sandboxed child processes. Host rules also apply when you use an upstream proxy.
* On macOS and Linux, sandboxed programs cannot bypass the proxy by connecting directly. On Windows, the sandbox relies on programs honoring the proxy settings. Windows also requires a supported version and **Allow local network**, which permits private-network access as well.
* Your organization can enforce the proxy URL through managed settings. When it does, the URL is shown as `(managed)`, but you can still provide your own username and password.

### Enabling and disabling the sandbox quickly

You can toggle the sandbox on or off without opening the full configuration interface:

* **Enable**: Enter `/sandbox enable` in the {% data variables.copilot.copilot_cli_short %} session.
* **Disable**: Enter `/sandbox disable` in the {% data variables.copilot.copilot_cli_short %} session.

Ordinarily, these commands change the saved **Enable sandbox** setting. If managed settings require sandboxing and permit bypass, `/sandbox disable` instead turns sandboxing off only for the current session. Running `/sandbox enable` restores it for that session.

### Viewing your current sandbox settings

Settings are stored in `settings.json` under the `sandbox` key in your {% data variables.copilot.copilot_cli_short %} configuration directory. Sandbox settings are not supported in repository-level settings files. Enterprise managed settings can restrict your choices. For more information about the configuration directory, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference).

You can view your current sandbox settings from within a {% data variables.copilot.copilot_cli_short %} session.

1. Enter `/settings`.
1. Press <kbd>/</kbd> to search for settings.
1. Type `sandbox` to filter the list of settings.

The steps above show your saved settings. To see the **effective** policy—the paths, network settings, and capabilities that result once your settings, the automatic grants, and any managed policy are combined—enter `/sandbox policy`. You can add a command, such as `/sandbox policy npm install`, to inspect its developer-tool access without running it. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/understanding-local-sandboxing).

## Further reading

* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli)
