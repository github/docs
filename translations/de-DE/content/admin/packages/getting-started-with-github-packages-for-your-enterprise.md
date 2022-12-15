---
title: Erste Schritte mit GitHub-Paketen für dein Unternehmen
shortTitle: Getting started with GitHub Packages
intro: 'Du kannst mit der Nutzung von {% data variables.product.prodname_registry %} auf {% data variables.product.product_location %} beginnen, indem du das Feature aktivierst, den Drittanbieterspeicher konfigurierst, die Ökosysteme konfigurierst, die du unterstützen möchtest, und dein TLS-Zertifikat aktualisierst.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
ms.openlocfilehash: 2389eba768a8b2f865165b43dde0e1b6381c6ae7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '146199962'
---
{% data reusables.package_registry.packages-cluster-support %}

## Schritt 1: Überprüfen der Verfügbarkeit von {% data variables.product.prodname_registry %} für dein Unternehmen

{% data variables.product.prodname_registry %} steht in {% data variables.product.prodname_ghe_server %} 3.0 oder höher zur Verfügung. Wenn du eine frühere Version von {% data variables.product.prodname_ghe_server %} verwendest, musst du ein Upgrade durchführen, um {% data variables.product.prodname_registry %} zu nutzen. Weitere Informationen zum Upgrade deiner {% data variables.product.prodname_ghe_server %}-Instanz findest du unter [Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases).
## Schritt 2: Aktivieren von {% data variables.product.prodname_registry %} und Konfigurieren von externem Speicher

{% data variables.product.prodname_registry %} auf {% data variables.product.prodname_ghe_server %} verwendet externen Blobspeicher zum Speichern von Paketen.

Nachdem du {% data variables.product.prodname_registry %} für {% data variables.product.product_location %} aktiviert hast, musst du den Drittanbieter-Speicherbucket vorbereiten. Die erforderliche Speichermenge hängt von deiner Verwendung von {% data variables.product.prodname_registry %} ab, und die Setuprichtlinien können je nach Speicheranbieter variieren.

Unterstützte externe Speicheranbieter
- Amazon Web Services (AWS) S3 {% ifversion ghes %}
- Azure Blob Storage {% endif %}
- MinIO

Informationen zum Aktivieren von {% data variables.product.prodname_registry %} und zum Konfigurieren von externem Speicher findest du unter folgenden Themen:
  - [Aktivieren von GitHub-Paketen mit AWS](/admin/packages/enabling-github-packages-with-aws){% ifversion ghes %}
  - [Aktivieren von GitHub-Paketen mit Azure Blob Storage](/admin/packages/enabling-github-packages-with-azure-blob-storage){% endif %}
  - [Aktivieren von GitHub-Paketen mit MinIO](/admin/packages/enabling-github-packages-with-minio)

## Schritt 3: Angeben der für deine Instanz zu unterstützenden Paketökosysteme

Wähle aus, welche Paketökosysteme du für {% data variables.product.product_location %} aktivieren, deaktivieren oder als schreibgeschützt festlegen möchtest. Verfügbare Optionen sind {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker, RubyGems, npm, Apache Maven, Gradle oder NuGet.  Weitere Informationen findest du unter [Konfigurieren der Unterstützung von Paketökosystemen für dein Unternehmen](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise).

## Schritt 4: Sicherstellen, dass bei Bedarf ein TLS-Zertifikat für die Pakethost-URL verfügbar ist

Wenn die Unterdomänenisolation für {% data variables.product.product_location %} aktiviert ist, musst du ein TLS-Zertifikat erstellen und hochladen, das die Pakethost-URL für jedes zu verwendende Ökosystem zulässt, z. B. `{% data reusables.package_registry.container-registry-hostname %}`. Stelle sicher, dass jede Pakethost-URL `https://` enthält.

  Du kannst das Zertifikat manuell erstellen oder _Let's Encrypt_ verwenden. Wenn du _Let's Encrypt_ bereits verwendest, musst du nach dem Aktivieren von {% data variables.product.prodname_registry %} ein neues TLS-Zertifikat anfordern. Weitere Informationen zu Pakethost-URLs findest du unter [Aktivieren der Unterdomänenisolation](/enterprise/admin/configuration/enabling-subdomain-isolation). Weitere Informationen zum Hochladen von TLS-Zertifikaten in {% data variables.product.product_name %} findest du unter [Konfigurieren von TLS](/enterprise/admin/configuration/configuring-tls).

## Schritt 5: Überprüfen und Umbenennen reservierter Namen

Wenn du das Docker-Ökosystem mit deaktivierter Isolation von Unterdomänen nutzen möchtest, **musst** du zuerst alle Benutzer oder Organisationen mit dem Namen `v2` auf {% data variables.product.product_location %} umbenennen, bevor du die Unterstützung des Docker-Ökosystems in der {% data variables.enterprise.management_console %} aktivierst. Docker verwendet einen `v2`-Kontonamen, um Pfadkonflikte mit der Docker-API zu handhaben. Sobald die Unterstützung der Docker-Registrierung aktiviert ist, kannst du diesen Namen nicht mehr verwenden.

Du kannst eine vollständige Liste der für die interne Nutzung reservierten Anmeldungen einsehen, indem du im Dashboard des Websiteadministrators zur Seite „Reservierte Anmeldungen“ navigierst. Weitere Informationen findest du unter [Reservierte Anmeldungen](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins).
