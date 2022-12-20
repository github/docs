---
title: Erste Schritte mit GitHub Actions für GitHub Enterprise Server
shortTitle: Get started
intro: 'Hier erfährst du mehr über das erstmalige Aktivieren und Konfigurieren von {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 6bfcb7cc2a14a70a6ba4397c12effaf0a8d8be3f
ms.sourcegitcommit: 8f1801040a84ca9353899a2d1e6782c702aaed0d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/16/2022
ms.locfileid: '148166561'
---
{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}

In diesem Artikel wird erläutert, wie Websiteadministratoren {% data variables.product.prodname_ghe_server %} für die Verwendung von {% data variables.product.prodname_actions %} konfigurieren.

{% data reusables.actions.ghes-actions-not-enabled-by-default %} Du musst ermitteln, ob deine Instanz über ausreichende CPU-Ressourcen und Arbeitsspeicherressourcen verfügt, damit die Last von {% data variables.product.prodname_actions %} verarbeitet werden kann, ohne dass Leistungsverluste verursacht werden. Gegebenenfalls müssen diese Ressourcen erhöht werden. Du musst auch entscheiden, welchen Speicheranbieter du für den Blobspeicher verwendest, der zum Speichern von Artefakten{% ifversion actions-caching %} und Caches{% endif %} benötigt wird, die von Workflowausführungen generiert werden. Anschließend aktivierst du {% data variables.product.prodname_actions %} für dein Unternehmen, du verwaltest Zugriffsberechtigungen und fügst selbstgehostete Runner zum Ausführen von Workflows hinzu.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Überprüfen der Hardwareanforderungen

{%- ifversion ghes < 3.6 %}

Die CPU- und Arbeitsspeicherressourcen, die für {% data variables.location.product_location %} verfügbar sind, bestimmen die Anzahl der Aufträge, die gleichzeitig ohne Leistungsverlust ausgeführt werden können. {% data reusables.actions.minimum-hardware %}

Die Spitzenanzahl gleichzeitiger Aufträge, die ohne Leistungsverlust ausgeführt werden können, hängt von Faktoren wie Auftragsdauer, Artefaktnutzung, Anzahl der Repositorys, für die GitHub Actions ausgeführt wird, sowie davon ab, wie viel andere Arbeit deine Instanz ausführt, die nicht mit GitHub Actions in Zusammenhang steht. Interne Tests bei GitHub ergaben die folgenden Leistungsziele für GitHub Enterprise Server in verschiedenen CPU- und Arbeitsspeicherkonfigurationen:

{% endif %}

{%- ifversion ghes > 3.5 %}

Die CPU- und Arbeitsspeicherressourcen, die für {% data variables.location.product_location %} verfügbar sind, bestimmen die Anzahl der Runner, die gleichzeitig ohne Leistungsverlust konfiguriert werden können. {% data reusables.actions.minimum-hardware %}

Die maximale Anzahl der Runner, die ohne Leistungsverlust verknüpft werden können, hängt von Faktoren wie der Auftragsdauer, der Artefaktnutzung, der Anzahl der Repositorys, für die GitHub Actions ausgeführt wird, sowie davon ab, wie viele andere Vorgänge deine Instanz ausführt, die nicht mit GitHub Actions in Zusammenhang steht. Interne Tests bei GitHub ergaben die folgenden Leistungsziele für GitHub Enterprise Server in verschiedenen CPU- und Arbeitsspeicherkonfigurationen:

{% endif %}

{%- ifversion ghes = 3.3 %}

{% data reusables.actions.hardware-requirements-3.3 %}

Die maximale Parallelität wurde mithilfe mehrerer Repositorys, Auftragsdauer von ca. 10 Minuten und Artefaktuploads von 10 MB gemessen. Je nach den Gesamtaktivitätsniveaus deiner Instanz werden gegebenenfalls verschiedene Leistungen erreicht.

{%- endif %}

{%- ifversion ghes = 3.4 %}

{% data reusables.actions.hardware-requirements-3.4 %}

Die maximale Parallelität wurde mithilfe mehrerer Repositorys, Auftragsdauer von ca. 10 Minuten und Artefaktuploads von 10 MB gemessen. Je nach den Gesamtaktivitätsniveaus deiner Instanz werden gegebenenfalls verschiedene Leistungen erreicht.

{%- endif %}

{%- ifversion ghes = 3.5 %}

{% data reusables.actions.hardware-requirements-3.5 %}

Maximale Parallelität wurde von {% data variables.product.company_short %} mithilfe mehrerer Repositorys, einer Auftragsdauer von ca. 10 Minuten und Uploads von 10 MB großen Artefakten gemessen. Je nach den Gesamtaktivitätsniveaus deiner Instanz werden gegebenenfalls verschiedene Leistungen erreicht.

{% note %}

**Hinweis:** Ab {% data variables.product.prodname_ghe_server %} 3.5 werden bei internen Tests von {% data variables.product.company_short %} CPUs der 3. Generation verwendet, um eine typische Kundenkonfiguration besser widerzuspiegeln. Diese CPU-bezogene Änderung stellt einen kleinen Teil der Änderungen an den Leistungszielen in dieser Version von {% data variables.product.prodname_ghe_server %} dar.

{% endnote %}

{%- endif %}

{%- ifversion ghes > 3.5 %}


| vCPUs | Arbeitsspeicher | Maximale verbundene Runner |
| :---| :--- | :--- |
| 8   | 64 GB  | 740 Runner |
| 32  | 160 GB | 2700 Runner |
| 96  | 384 GB | 7000 Runner |
| 128 | 512 GB | 7000 Runner |

Die maximale Anzahl verknüpfter Runner wurde von {% data variables.product.company_short %} mithilfe mehrerer Repositorys, einer Auftragsdauer von ca. zehn Minuten und Uploads von 10 MB großen Artefakten gemessen. Je nach den Gesamtaktivitätsniveaus deiner Instanz werden gegebenenfalls verschiedene Leistungen erreicht.

{% note %}

**Hinweise:**

- Ab {% data variables.product.prodname_ghe_server %} 3.6 dokumentiert {% data variables.product.company_short %} verknüpfte Runner im Gegensatz zu parallelen Aufträgen. Verknüpfte Runner stellen die maximale Anzahl an Runnern dar, die verknüpft werden können und wahrscheinlich verwendet werden. Wenn du mehr Runner verknüpfst als wahrscheinlich verwendet werden, kann die Leistung beeinträchtigt werden.

- Ab {% data variables.product.prodname_ghe_server %} 3.5 werden bei internen Tests von {% data variables.product.company_short %} CPUs der dritten Generation verwendet, um eine typische Kundenkonfiguration besser widerzuspiegeln. Diese CPU-bezogene Änderung stellt einen kleinen Teil der Änderungen an den Leistungszielen in dieser Version von {% data variables.product.prodname_ghe_server %} dar.
{% endnote %} {%- endif %}

Wenn du {% data variables.product.prodname_actions %} für die Benutzer einer vorhandenen Instanz aktivieren möchtest, überprüfe die Aktivitätsniveaus für Benutzer und Automatisierungen in der Instanz, und vergewissere dich, dass du angemessene CPU- und Arbeitsspeicherressourcen für die Benutzer bereitgestellt hast. Weitere Informationen zur Überwachung der Kapazität und Leistung von {% data variables.product.prodname_ghe_server %} findest du unter [Überwachen deiner Appliance](/admin/enterprise-management/monitoring-your-appliance).

Weitere Informationen zu den Mindesthardwareanforderungen für {% data variables.location.product_location %} findest du in den Hardwareüberlegungen für die Plattform deiner Instanz.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% ifversion ghes > 3.4 %}

Optional kannst du den Ressourcenverbrauch für {% data variables.location.product_location %} einschränken, indem du eine Ratenbegrenzung für {% data variables.product.prodname_actions %} konfigurierst. Weitere Informationen findest du unter [Konfigurieren von Ratenbegrenzungen](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-rate-limits-for-github-actions).

{% endif %}

## Anforderungen für externen Speicher

Zum Aktivieren von {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %} benötigst du Zugriff auf externen Blobspeicher.

{% data variables.product.prodname_actions %} verwendet Blobspeicher zum Speichern von Daten, die von Workflowausführungen generiert wurden (z. B. Workflowprotokolle{% ifversion actions-caching %}, Caches{% endif %} und von Benutzer*innen hochgeladene Buildartefakte). Die erforderliche Speichergröße hängt von der Verwendung von {% data variables.product.prodname_actions %} ab. Es wird nur eine einzige externe Speicherkonfiguration unterstützt, und du kannst nicht mehrere Speicheranbieter gleichzeitig verwenden.

{% data variables.product.prodname_actions %} bietet Unterstützung für diese Speicheranbieter:

* Azure Blob Storage
* Amazon S3 {%- ifversion actions-ghes-gcp-storage %}
* Google Cloud Storage {%- endif %}
* S3-kompatibler MinIO-Cluster

{% note %}

**Hinweis:** Dies sind die einzigen Speicheranbieter, für die {% data variables.product.company_short %} Unterstützung und weitere Hilfe anbieten kann.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

## Überlegungen zum Netzwerkbetrieb

{% data reusables.actions.proxy-considerations %} Weitere Informationen zum Verwenden eines Proxyservers mit {% data variables.product.prodname_ghe_server %} findest du unter [Konfigurieren eines ausgehenden Webproxyservers](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server).

{% ifversion ghes %}

## Aktivieren von {% data variables.product.prodname_actions %} mit deinem Speicheranbieter

Führe eines der folgenden Verfahren aus, um {% data variables.product.prodname_actions %} mit deinem ausgewählten Speicheranbieter zu aktivieren:

* [Aktivieren von GitHub Actions mit Azure Blob Storage](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-azure-blob-storage)
* [Aktivieren von GitHub Actions mit Amazon S3-Speicher](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage) {%- ifversion actions-ghes-gcp-storage %}
* [Aktivieren von GitHub Actions mit Google Cloud Storage](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-google-cloud-storage) {%- endif %}
* [Aktivieren von GitHub Actions mit dem MinIO-Speicher](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-storage)

## Verwalten von Zugriffsberechtigungen für {% data variables.product.prodname_actions %} in deinem Unternehmen

Du kannst Richtlinien verwenden, um den Zugriff auf {% data variables.product.prodname_actions %} zu verwalten. Weitere Informationen findest du unter [Erzwingen von GitHub Actions-Richtlinien in deinem Unternehmen](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise).

## Selbst-gehostete Runner hinzufügen

{% data reusables.actions.enterprise-github-hosted-runners %}

Zum Ausführen von {% data variables.product.prodname_actions %}-Workflows musst du selbstgehostete Runner hinzufügen. Du kannst selbstgehostete Runner auf Unternehmens-, Organisations- oder Repositoryebene hinzufügen. Weitere Informationen findest du unter [Hinzufügen von selbstgehosteten Runnern](/actions/hosting-your-own-runners/adding-self-hosted-runners).

## Verwalten der in deinem Unternehmen verwendbaren Aktionen

Du kannst steuern, welche Aktionen die Benutzer in deinem Unternehmen verwenden dürfen. Dazu gehören das Einrichten von {% data variables.product.prodname_github_connect %} für den automatischen Zugriff auf Aktionen von {% data variables.product.prodname_dotcom_the_website %}, oder das manuelle Synchronisieren von Aktionen von {% data variables.product.prodname_dotcom_the_website %}.

Weitere Informationen findest du unter [Informationen zum Verwenden von Aktionen in deinem Unternehmen](/admin/github-actions/about-using-actions-in-your-enterprise).

{% data reusables.actions.general-security-hardening %}

{% endif %}

## Reservierte Namen

Wenn du {% data variables.product.prodname_actions %} für dein Unternehmen aktivierst, werden zwei Organisationen erstellt: `github` und `actions`. Wenn dein Unternehmen bereits den Organisationsnamen `github` verwendet, wird stattdessen `github-org` (oder `github-github-org`, falls `github-org` auch verwendet wird) verwendet. Wenn dein Unternehmen bereits den Organisationsnamen `actions` verwendet, wird stattdessen `github-actions` (oder `github-actions-org`, falls `github-actions` auch verwendet wird) verwendet. Sobald Aktionen aktiviert sind, kannst du diese Namen nicht mehr verwenden.
