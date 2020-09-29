---
title: Virtuelle Umgebungen für GitHub-gehostete Runner
intro: '{% data variables.product.prodname_dotcom %} bietet gehostete virtuelle Maschinen, um Workflows auszuführen. Die virtuelle Maschine umfasst eine Umgebung mit Tools, Paketen und Einstellungen für {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zu {% data variables.product.prodname_dotcom %}-gehosteten Runnern

Ein {% data variables.product.prodname_dotcom %}-gehosteter Runner ist eine virtuelle Maschine, die von {% data variables.product.prodname_dotcom %} gehostet wird und auf der die Runner-Anwendung der {% data variables.product.prodname_actions %} installiert ist. {% data variables.product.prodname_dotcom %} bietet Runner mit den Betriebssystemen Linux, Windows und MacOS.

Wenn Du einen {% data variables.product.prodname_dotcom %}-gehosteten Runner verwendest, werden Wartung und Upgrade der Maschine für Dich erledigt. Sie können Workflows direkt auf der virtuellen Maschine oder in einem Docker-Container ausführen.

Du kannst in einem Workflow für jeden Job die Art des Runners festlegen. Jeder Job in einem Workflow wird in einer neuen Instanz der virtuellen Maschine ausgeführt. Alle Schritte des Jobs werden in derselben Instanz der virtuellen Maschine ausgeführt, sodass die Aktionen in diesem Job über das Dateisystem Informationen austauschen können.

{% data reusables.github-actions.runner-app-open-source %}

#### Cloud-Hosts für {% data variables.product.prodname_dotcom %}-gehostete Runner

{% data variables.product.prodname_dotcom %} betreibt Linux- und Windows-Runner auf den virtuellen Maschinen nach Standard_DS2_v2 in Microsoft Azure, auf denen die Runner-Anwendung der {% data variables.product.prodname_actions %} installiert ist. Die Runner-Anwendung auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern ist eine Fork-Kopie des Azure-Pipelines-Agenten. Bei Azure werden eingehende ICMP-Pakete werden für alle virtuellen Maschinen blockiert, so dass die Befehle ping und traceroute möglicherweise nicht funktionieren. Weitere Informationen zu den Ressourcen der Standard_DS2_v2-Maschinen findest Du unter „[Serien Dv2 und DSv2](https://docs.microsoft.com/en-us/azure/virtual-machines/dv2-dsv2-series#dsv2-series)“ in der Dokumentation zu Microsoft Azure.

{% data variables.product.prodname_dotcom %} verwendet [MacStadium](https://www.macstadium.com/), um die virtuellen macOS-Runner zu betreiben.

#### Administrative Rechte von {% data variables.product.prodname_dotcom %}-gehosteten Runnern

Die virtuellen Maschinen unter Linux und macOS werden beide mit dem passwortlosen Befehl `sudo` ausgeführt. Wenn Sie Befehle ausführen oder Tools installieren müssen, die höhere Berechtigungen als der aktuelle Benutzer erfordern, können Sie `sudo` verwenden, ohne ein Passwort angeben zu müssen. Weitere Informationen findest Du im „[Sudo-Handbuch](https://www.sudo.ws/man/1.8.27/sudo.man.html)“.

Die virtuellen Windows-Maschinen sind so konfiguriert, dass sie als Administratoren laufen, wobei die Benutzerkonten-Steuerung (UAC) deaktiviert ist. Weitere Informationen findest Du unter „[Funktionsweise der Benutzerkonten-Steuerung](https://docs.microsoft.com/de-de/windows/security/identity-protection/user-account-control/how-user-account-control-works)“ in der Dokumentation zu Windows.

### Unterstützte Runner und Hardwareressourcen

Für jede virtuelle Maschine stehen die gleichen Hardware-Ressourcen zur Verfügung.

- CPU mit 2 Kernen
- 7 GB RAM-Speicher
- 14 GB SSD-Festplattenspeicher

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.ubuntu-runner-preview %}

Eine Liste der unterstützten Software, Tools und Pakete für jeden Runner findest Du unter "[Auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern installierte Software](/actions/reference/software-installed-on-github-hosted-runners)."

In den Protokollen für einen Workflow-Lauf findest Du die genaue Runner-Umgebung, die für einen Job verwendet wurde, sowie einen Link zu den vorinstallierten Tools, die sich auf dem Runner befanden. Weitere Informationen findest Du unter „[Eine Workflow-Ausführung verwalten](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-your-workflow-history)“.


#### IP-Adressen von {% data variables.product.prodname_dotcom %}-gehosteten Runnern

{% note %}

**Notiz:** Wenn Du eine Liste mit erlaubten IP-Adressen für Dein Organisations- oder Unternehmenskonto auf {% data variables.product.prodname_dotcom %} verwendest, kannst Du keine {% data variables.product.prodname_dotcom %}-gehosteten Runner verwenden, sondern benötigst stattdessen selbst-gehostete Runner. Weitere Informationen findest Du unter „[Informationen zu selbst-gehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners)“.

{% endnote %}

Windows- und Ubuntu-Runner werden in Azure gehostet und haben die gleichen IP-Adressbereiche wie Azure-Rechenzentren. Derzeit befinden sich alle {% data variables.product.prodname_dotcom %}-gehosteten Windows- und Ubuntu-Runner in den folgenden Azure-Regionen:

- Ost-USA (`eastus`)
- Ost-USA 2 (`eastus`)
- West-US 2 (`westus2`)
- Zentral-USA (`centralus`)
- Süd-Zentral-USA (`southcentralus`)

Microsoft aktualisiert die Azure-IP-Adressbereiche wöchentlich in einer JSON-Datei. Diese können Sie auf der Website [Azure IP Ranges and Service Tags - Public Cloud](https://www.microsoft.com/en-us/download/details.aspx?id=56519) herunterladen. Sie können diesen IP-Adressbereich verwenden, falls Sie eine Positivliste vorschreiben, um den nicht autorisierten Zugriff auf Ihre internen Ressourcen zu verhindern.

Die JSON-Datei enthält einen Array mit der Bezeichnung `values`. Innerhalb dieses Arrays findest Du die unterstützten IP-Adressen in einem Objekt mit `name` und `id` der Azure-Region, z.B. `"AzureCloud.eastus2"`.

Die unterstützten IP-Adressbereiche befinden sich im Objekt `"addressPrefixes"`. Dies ist ein komprimiertes Beispiel der JSON-Datei.

```json
{
  "changeNumber": 84,
  "cloud": "Public",
  "values": [
    {
      "name": "AzureCloud.eastus2",
      "id": "AzureCloud.eastus2",
      "properties": {
        "changeNumber": 33,
        "region": "eastus2",
        "platform": "Azure",
        "systemService": "",
        "addressPrefixes": [
          "13.68.0.0/17",
          "13.77.64.0/18",
          "13.104.147.0/25",
          ...
        ]
      }
    }
  ]
}
```

### Dateisysteme auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern

{% data variables.product.prodname_dotcom %} führt Aktionen und Shell-Befehle in bestimmten Verzeichnissen auf der virtuellen Maschine aus. Die Dateipfade auf virtuellen Maschinen sind nicht statisch. Verwende die von {% data variables.product.prodname_dotcom %} bereitgestellten Umgebungsvariablen zum Erstellen von Dateipfaden für die Verzeichnisse `home`, `workspace`und `workflow`.

| Verzeichnis           | Umgebungsvariable   | Beschreibung                                                                                                                                                                                                                                |
| --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `home`                | `HOME`              | Enthält benutzerbezogene Daten. In diesem Verzeichnis können sich beispielsweise die Anmeldeinformation aus einem Anmeldeversuch befinden.                                                                                                  |
| `workspace`           | `GITHUB_WORKSPACE`  | Aktionen und Shell-Befehle werden in diesem Verzeichnis ausgeführt. Eine Aktion kann den Inhalt dieses Verzeichnisses ändern, auf den dann nachfolgende Aktionen zugreifen können.                                                          |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | Die `POST`-Nutzlast des Webhook-Ereignisses, das den Workflow ausgelöst hat. {% data variables.product.prodname_dotcom %} schreibt dies bei jeder ausgeführten Aktion neu, sodass der Dateiinhalt zwischen den Aktionen isoliert wird. |

Eine Liste der von {% data variables.product.prodname_dotcom %} für jeden Workflow erstellten Umgebungsvariablen findest Du unter „[Umgebungsvariablen verwenden](/github/automating-your-workflow-with-github-actions/using-environment-variables)“.

#### Docker-Container-Dateisystem

Für Aktionen, die in Docker-Containern ausgeführt werden, befinden sich statische Verzeichnisse im Pfad `/github`. Wir empfehlen jedoch dringend, die Standard-Umgebungsvariablen zu verwenden, um Dateipfade in Docker-Containern zu erstellen.

In {% data variables.product.prodname_dotcom %} wird das Pfadpräfix `/github` reserviert, und es werden drei Verzeichnisse für Aktionen erstellt.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

{% if currentVersion == "free-pro-team@latest" %}

### Weiterführende Informationen
- "[Verwalten der Abrechnung für {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"

{% endif %}
