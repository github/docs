---
title: Konfigurieren eines Repository-Caches
intro: 'Du kannst einen Repositorycache für {% data variables.product.product_name %} konfigurieren, indem du eine neue Instanz erstellst, den Repositorycache mit deiner primären Instanz verknüpfst und die Replikation von Repositorynetzwerken in den Repositorycache konfigurierst.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
ms.openlocfilehash: 682e169c55ef7ded453934720bf47f8843bc4acc
ms.sourcegitcommit: 1d757a4f3e1947fdd3868208b63041de30c9f60c
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/03/2022
ms.locfileid: '148132379'
---
{% data reusables.enterprise.repository-caching-release-phase %}

## Informationen zur Konfiguration für die Zwischenspeicherung von Repositorys

{% data reusables.enterprise.repository-caching-config-summary %} Anschließend kannst du Richtlinien für Datenspeicherorte festlegen, die steuern, welche Repositorynetzwerke im Repositorycache repliziert werden.

Das Zwischenspeichern von Repositorys wird mit Clustering nicht unterstützt.

## DNS für Repository-Caches

Der primäre Instanz- und Repository-Cache sollte über verschiedene DNS-Namen verfügen. Wenn zum Beispiel deine primäre Instanz bei `github.example.com` vorhanden ist, könntest du deinen Cache `europe-ci.github.example.com` oder `github.asia.example.com` nennen.

Damit deine CI-Computer aus dem Repositorycache statt aus der primären Instanz abgerufen werden können, kannst du die Konfigurationseinstellung `url.<base>.insteadOf` von Git verwenden. Weitere Informationen findest du in der Git-Dokumentation unter [`git-config`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-urlltbasegtinsteadOf). 

Beispielsweise würde der globale `.gitconfig` für die CI-Maschine diese Zeilen enthalten.

```
[url "https://europe-ci.github.example.com/"]
    insteadOf = https://github.example.com/
```

Wenn zum Abrufen `https://github.example.com/myorg/myrepo` aufgefordert wird, wird Git stattdessen von `https://europe-ci.github.example.com/myorg/myrepo` fetchen.

## Konfigurieren eines Repository-Caches

{% ifversion ghes = 3.3 %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. Führe den folgenden Befehl aus, um das Zwischenspeichern von Repositorys zu aktivieren.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
1. Richte eine neue {% data variables.product.prodname_ghe_server %}-Instanz auf deiner gewünschten Plattform ein. Diese Instanz ist dein Repositorycache. Weitere Informationen findest du unter [Einrichten einer {% data variables.product.prodname_ghe_server %}-Instanz](/admin/guides/installation/setting-up-a-github-enterprise-server-instance).
{% data reusables.enterprise_installation.replica-steps %}
1. Verbinden zur IP-Adresse des Repository-Caches mithilfe von SSH.

   ```shell
   $ ssh -p 122 admin@REPLICA-IP
   ```
{%- ifversion ghes = 3.3 %}
1. Aktiviere im Cachereplikat das Featureflag für das Zwischenspeichern von Repositorys.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %} {% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Führe `ghe-repl-setup` erneut aus, um die Verbindung mit dem primären Replikat zu überprüfen und den Replikatmodus für den Repositorycache zu aktivieren.

   ```shell
   $ ghe-repl-setup PRIMARY-IP
   ```

{% ifversion ghes < 3.6 %}
1. Lege einen `cache-location` Für den Repository-Cache fest, indem du *CACHE-LOCATION* durch einen alphanumerischen Bezeichner so wie den Bereich, in dem der Cache bereitgestellt wird ersetzt. Lege auch einen Rechenzentrumsnamen für diesen Cache fest. Neue Caches versuchen, aus einem anderen Cache im selben Rechenzentrum zu seeden.

   ```shell
   $ ghe-repl-node --cache CACHE-LOCATION --datacenter REPLICA-DC-NAME
   ```
{% else %}
1. Verwende zum Konfigurieren des Repositorycache den Befehl `ghe-repl-node`, und füge die erforderlichen Parameter ein.
    - Lege einen `cache-location` Für den Repository-Cache fest, indem du *CACHE-LOCATION* durch einen alphanumerischen Bezeichner so wie den Bereich, in dem der Cache bereitgestellt wird ersetzt.  Der *CACHE-LOCATION*-Wert darf keine der für die Verwendung mit Unterdomänenisolation reservierten Unterdomänen sein, z. B. `assets` oder `media`.  Eine Liste der reservierten Namen findest du unter [Aktivieren der Unterdomänenisolation](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation).
    - Lege `cache-domain` für den Repositorycache fest, und ersetze *EXTERNAL-CACHE-DOMAIN* durch den Hostnamen, den Git-Clients für den Zugriff auf den Repositorycache verwenden. Wenn du `cache-domain` nicht angibst, stellt {% data variables.product.product_name %} dem für deine Instanz konfigurierten Hostnamen den *CACHE-LOCATION*-Wert als Unterdomäne voran. Weitere Informationen findest Du unter „[Konfigurieren eines Hosznamens](/admin/configuration/configuring-network-settings/configuring-a-hostname)“.
    - Neue Caches versuchen, aus einem anderen Cache im selben Rechenzentrum zu seeden. Lege `datacenter` für den Repositorycache fest, und ersetze *REPLICA-DC-NAME* durch den Namen des Rechenzentrums, in dem du den Knoten bereitstellst.

    ```shell
    $ ghe-repl-node --cache CACHE-LOCATION --cache-domain EXTERNAL-CACHE-DOMAIN --datacenter REPLICA-DC-NAME
    ```
{% endif %}

{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}
1. Um die Replikation von Repository-Netzwerken auf den Repository-Cache zu aktivieren, lege eine Richtlinie für Datenspeicherorte fest. Weitere Informationen findest du unter [Richtlinie für Datenspeicherorte](#data-location-policies).

## Richtlinie für Datenspeicherorte

Du kannst die Datenlokalität steuern, indem du Richtlinien für Datenspeicherorte für deine Repositorys mit dem `spokesctl cache-policy`-Befehl konfigurierst. Richtlinien für Datenspeicherorte bestimmen, welche Repository-Netzwerke repliziert werden, auf denen Repository-Caches repliziert werden. Standardmäßig werden keine Repository-Netzwerke in allen Repository-Caches repliziert, bis eine Richtlinie für Datenspeicherorte konfiguriert ist.

Richtlinien für Datenspeicherorte wirken sich nur auf Git-Inhalte aus. Inhalte in der Datenbank, so wie Issues und Pull Request-Kommentare, werden unabhängig von der Richtlinie auf alle Knoten repliziert.

{% note %}

**Hinweis:** Richtlinien für Datenspeicherorte sind nicht mit der Zugriffssteuerung identisch. Du musst Repositoryrollen verwenden, um zu steuern, welche Benutzer*innen auf ein Repository zugreifen können. Weitere Informationen zum Repository-Zugriff findest du unter „[Repository-Rollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)“.

{% endnote %} 

Du kannst eine Richtlinie so konfigurieren, dass alle Netzwerke mit dem `--default`-Flag repliziert werden. Dieser Befehl erstellt zum Beispiel eine Richtlinie, um eine einzelne Kopie jedes Repository-Netzwerks in den Satz von Repository-Caches zu replizieren, deren `cache_location` „Kansas" lautet.

 ```
 $ ghe-spokesctl cache-policy set --default 1 kansas
 ```

Um die Replikation für ein Repositorynetzwerk zu konfigurieren, gib das Repository an, das das Stammverzeichnis des Netzwerks ist. Ein Repository-Netzwerk enthält ein Repository und alle Forks des Repositorys. Du kannst keinen Teil eines Netzwerks replizieren, ohne das gesamte Netzwerk zu replizieren.

```
$ ghe-spokesctl cache-policy set <owner/repository> 1 kansas
```

Du kannst eine Richtlinie außer Kraft setzen, die alle Netzwerke repliziert und bestimmte Netzwerke ausschließen, indem du als Anzahl der Replikate Null für das Netzwerk angibst. Dieser Befehl gibt zum Beispiel an, dass ein Repository-Cache am Speicherort „Kansas" keine Kopien dieses Netzwerks enthalten kann.

```
$ ghe-spokesctl cache-policy set <owner/repository> 0 kansas
```

Anzahlen der Replikate, die größer als einer in einem bestimmten Cache-Speicherort sind, werden nicht unterstützt.
