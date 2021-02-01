---
title: Informationen zu selbst-gehosteten Runnern
intro: 'Du kannst deine eigenen Runner hosten und die Umgebung anpassen, die für die Ausführung von Jobs in deinen {% data variables.product.prodname_actions %}-Workflows verwendet wird.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'overview'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zu selbst-gehosteten Runnern

{% data reusables.github-actions.self-hosted-runner-description %} Selbst gehostete Runner können physisch, virtuell, in einem Container, lokal oder in einer Cloud sein.

You can add self-hosted runners at various levels in the management hierarchy:
- Repository-level runners are dedicated to a single repository.
- Organization-level runners can process jobs for multiple repositories in an organization.
- Enterprise-level runners can be assigned to multiple organizations in an enterprise account.

Your runner machine connects to {% data variables.product.prodname_dotcom %} using the {% data variables.product.prodname_actions %} self-hosted runner application. {% data reusables.github-actions.runner-app-open-source %} When a new version is released, the runner application automatically updates itself when a job is assigned to the runner, or within a week of release if the runner hasn't been assigned any jobs.

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

For more information about installing and using self-hosted runners, see "[Adding self-hosted runners](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)" and "[Using self-hosted runners in a workflow](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."

### Unterschiede zwischen {% data variables.product.prodname_dotcom %}-gehosteten und selbstgehosteten Runnern

{% data variables.product.prodname_dotcom %}-hosted runners offer a quicker, simpler way to run your workflows, while self-hosted runners are a highly configurable way to run workflows in your own custom environment.

**{% data variables.product.prodname_dotcom %}-gehostete Runner:**
- Erhalten automatische Updates für das Betriebssystem, vorinstallierte Pakete und Tools sowie die Anwendung für selbst-gehostete Runner.
- Werden von {% data variables.product.prodname_dotcom %} verwaltet und gepflegt.
- Stellen für jede Jobausführung eine saubere Instanz bereit.
- Verwenden freie Minuten von Ihrem {% data variables.product.prodname_dotcom %}-Konto. Nach Überschreiten der Freiminuten gelten Minutentarife.

**Selbst-gehostete Runner:**
- Erhalten automatische Updates nur für die Anwendung für selbst-gehostete Runner. Du bist für die Aktualisierung des Betriebssystems und aller anderen Software selbst verantwortlich.
- Kann Cloud-Dienste oder lokale Computer verwenden, für die Du bereits bezahlst.
- Können an Deine Hardware-, Betriebssystem-, Software- und Sicherheitsanforderungen angepasst werden.
- Brauchen nicht für jeden Job-Auszuführung eine saubere Instanz.
- Können {% data variables.product.prodname_actions %} kostenlos verwenden, aber Du bist selbst für die Wartungskosten Deiner Runner-Maschinen verantwortlich.

### Anforderungen für selbst-gehostete Runner-Maschinen

You can use any machine as a self-hosted runner as long at it meets these requirements:

* Du kannst die Anwendung für selbst-gehostete Runner auf dem Rechner installieren und ausführen. Weitere Informationen findest Du unter „[Unterstützte Betriebssysteme für selbst-gehostete Runner](#supported-operating-systems-for-self-hosted-runners)“.
* Die Maschine kann mit {% data variables.product.prodname_actions %} kommunizieren. Weitere Informationen findest Du unter „[Kommunikation zwischen selbst-gehosteten Runnern und {% data variables.product.prodname_dotcom %}](#communication-between-self-hosted-runners-and-github)“.
* Der Rechner verfügt über genügend Hardwareressourcen für den Typ der Workflows, den Du ausführen möchtest. Die Anwendung für selbst-gehostete Runner selbst erfordert nur minimale Ressourcen.
* Wenn Du Workflows ausführen willst, die Docker-Container-Aktionen oder Service-Container verwenden, brauchst Du eine Linux-Maschine und Docker muss installiert sein.

### Nutzungseinschränkungen

There are some limits on {% data variables.product.prodname_actions %} usage when using self-hosted runners. Die Einschränkungen können sich jederzeit ändern.

{% data reusables.github-actions.usage-workflow-run-time %}
- **Job queue time** (Job-Warteschlangenzeit) - Jeder Auftrag für selbst-gehostete Läufer kann maximal 24 Stunden lang in die Warteschlange gestellt werden. Wenn ein selbst-gehosteter Läufer die Ausführung des Auftrags nicht innerhalb dieses Limits startet, wird der Auftrag beendet und kann nicht abgeschlossen werden.
{% data reusables.github-actions.usage-api-requests %}
- **Auftrags-Matrix** - {% data reusables.github-actions.usage-matrix-limits %}

### Unterstützte Betriebssysteme für selbst-gehostete Runner

The following operating systems are supported for the self-hosted runner application.

#### Linux

- Red Hat Enterprise Linux 7
- CentOS 7
- Oracle Linux 7
- Fedora 29 oder höher
- Debian 9 oder höher
- Ubuntu 16.04 oder höher
- Linux Mint 18 oder höher
- openSUSE 15 oder höher
- SUSE Enterprise Linux (SLES) 12 SP2 oder höher

#### Windows

- Windows 7 64-bit
- Windows 8.1 64-bit
- Windows 10 64-bit
- Windows Server 2012 R2 64-bit
- Windows Server 2016 64-bit
- Windows Server 2019 64-bit

#### macOS

- macOS 10.13 (High Sierra) oder höher

{% if enterpriseServerVersions contains currentVersion %}

### Kommunikation zwischen selbst-gehosteten Runnern und {% data variables.product.prodname_dotcom %}

Die Maschine kann mit {% data variables.product.prodname_actions %} kommunizieren. Weitere Informationen findest Du unter „[Kommunikation zwischen selbst-gehosteten Runnern und {% data variables.product.prodname_dotcom %}](#communication-between-self-hosted-runners-and-github)“.

{% endif %}

### Kommunikation zwischen selbst-gehosteten Runnern und {% data variables.product.product_name %}

The self-hosted runner polls {% data variables.product.prodname_dotcom %} to retrieve application updates and to check if any jobs are queued for processing. The self-hosted runner uses a HTTPS _long poll_ that opens a connection to {% data variables.product.prodname_dotcom %} for 50 seconds, and if no response is received, it then times out and creates a new long poll. The application must be running on the machine to accept and run {% data variables.product.prodname_actions %} jobs.

{% if currentVersion == "free-pro-team@latest" %}

Du musst sicherstellen, dass der Rechner über den entsprechenden Netzwerkzugriff verfügt, um mit den nachfolgend aufgelisteten {% data variables.product.prodname_dotcom %}-URLs zu kommunizieren.

```
github.com
api.github.com
*.actions.githubusercontent.com
codeload.github.com
```

If you use an IP address allow list for your {% data variables.product.prodname_dotcom %} organization or enterprise account, you must add your self-hosted runner's IP address to the allow list. For more information, see "[Managing allowed IP addresses for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)" or "[Enforcing security settings in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#using-github-actions-with-an-ip-allow-list)".

{% else %}

Du musst sicherstellen, dass der Rechner über den entsprechenden Netzwerkzugriff verfügt, um mit den nachfolgend aufgelisteten {% data variables.product.prodname_dotcom %}-URLs zu kommunizieren.

{% endif %}

You can also use self-hosted runners with a proxy server. For more information, see "[Using a proxy server with self-hosted runners](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners)."

### Sicherheit von selbst-gehosteten Runner mit öffentlichen Repositories

{% data reusables.github-actions.self-hosted-runner-security %}

This is not an issue with {% data variables.product.prodname_dotcom %}-hosted runners because each {% data variables.product.prodname_dotcom %}-hosted runner is always a clean isolated virtual machine, and it is destroyed at the end of the job execution.

Untrusted workflows running on your self-hosted runner poses significant security risks for your machine and network environment, especially if your machine persists its environment between jobs. Some of the risks include:

* Schadprogramme, die auf dem Rechner laufen.
* Ausbruch aus der Runner-Sandbox der Maschine.
* Der Zugriff auf die Netzwerkumgebung der Maschine wird offengelegt.
* Unerwünschte oder gefährliche Daten werden dauerhaft auf der Maschine gespeichert.
