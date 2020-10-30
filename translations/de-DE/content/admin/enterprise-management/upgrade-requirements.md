---
title: Upgrade-Anforderungen
intro: 'Lesen Sie vor dem Upgrade von {% data variables.product.prodname_ghe_server %} diese Empfehlungen und Anforderungen zum Planen Ihrer Upgrade-Strategie.'
redirect_from:
  - /enterprise/admin/installation/upgrade-requirements
  - /enterprise/admin/guides/installation/finding-the-current-github-enterprise-release/
  - /enterprise/admin/enterprise-management/upgrade-requirements
versions:
  enterprise-server: '*'
---

{% note %}

**Hinweise:**
- Um ein Upgrade von {% data variables.product.prodname_enterprise %} 11.10.348 bis {% data variables.product.current-340-version %} durchzuführen, müssen Sie zunächst zu {% data variables.product.prodname_enterprise %} 2.1.23 migrieren. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_enterprise %} von 11.10.x zu 2.1.23 migrieren](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23)“.
- Upgrade-Pakete stehen unter [enterprise.github.com](https://enterprise.github.com/releases) für unterstützte Versionen zur Verfügung. Verifizieren Sie die Verfügbarkeit der Upgrade-Pakete, die Sie zum Abschließen des Upgrades benötigen. Wenden Sie sich an {% data variables.contact.contact_ent_support %}, falls ein Paket nicht verfügbar ist.
- Wenn Sie {% data variables.product.prodname_ghe_server %} Clustering verwenden, finden Sie im {% data variables.product.prodname_ghe_server %} Clustering-Leitfaden unter „[Cluster-Upgrade](/enterprise/{{ currentVersion }}/admin/guides/clustering/upgrading-a-cluster/)“ Clustering-spezifische Anweisungen.
-   Die Versionshinweise für {% data variables.product.prodname_ghe_server %} enthalten eine umfassende Liste der neuen Features jeder Version von {% data variables.product.prodname_ghe_server %}. Weitere Informationen finden Sie auf der [Veröffentlichungsseite](https://enterprise.github.com/releases).

{% endnote %}

### Empfehlungen

- Sie sollten möglichst wenig Upgrades in Ihren Upgrade-Prozess einbeziehen. For example, instead of upgrading from {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} to {{ enterpriseServerReleases.supported[1] }} to {{ enterpriseServerReleases.latest }}, you could upgrade from {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} to {{ enterpriseServerReleases.latest }}.
- Wenn Sie mehrere Versionen zurückliegen, sollten Sie {% data variables.product.product_location_enterprise %} so weit wie möglich mit jedem Schritt Ihres Upgrade-Prozesses upgraden. Wenn Sie die nach Möglichkeit neueste Version für jedes Upgrade verwenden, können Sie von Leistungsverbesserungen und Bug-Korrekturen profitieren. So können Sie beispielsweise ein Upgrade von {% data variables.product.prodname_enterprise %} 2.7 auf 2.8 auf 2.10 vornehmen. Beim Upgrade von {% data variables.product.prodname_enterprise %} 2.7 auf 2.9 auf 2.10 wird im zweiten Schritt jedoch eine neuere Version verwendet.
- Verwenden Sie beim Upgraden die neueste Patch-Veröffentlichung. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}
- Verwenden Sie eine Testinstanz zum Testen der Upgrade-Schritte. Weitere Informationen finden Sie unter „[Testinstanz einrichten](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-staging-instance/)“.
- Warten Sie beim Ausführen mehrerer Upgrades mindestens 24 Stunden zwischen den Feature-Upgrades, damit Datenmigrationen und Upgrade-Hintergrundaufgaben vollständig abgeschlossen werden.

### Anforderungen

- Sie müssen ein Upgrade von einer Feature-Veröffentlichung vornehmen, die **höchstens** zwei Versionen zurückliegt. For example, to upgrade to {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.latest }}, you must be on {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[1] }} or {{ enterpriseServerReleases.supported[2] }}.
- {% data reusables.enterprise_installation.hotpatching-explanation %}
- Ein Hotpatch kann Ausfallzeiten nach sich ziehen, falls für die betroffenen Dienste (z. B. der Kernel, MySQL oder ElasticSearch) ein VM- oder Dienstneustart erforderlich ist. Sie werden benachrichtigt, falls ein Neustart erforderlich ist. Sie können den Neustart zu einem späteren Zeitpunkt abschließen.
- Beim Upgrade mittels Hotpatching muss zusätzlicher Root-Storage verfügbar sein, da bis zum Abschluss des Upgrades mehrere Versionen bestimmter Dienste installiert werden. Preflight-Checks benachrichtigen Sie, falls nicht genügend Root-Disk-Storage verfügbar ist.
- Beim Upgrade mittels Hotpatching darf Ihre Instanz keine zu große Auslastung aufweisen, da sich dies ggf. auf den Hotpatching-Prozess auswirkt. Bei den Vorflugprüfungen wird die durchschnittliche Auslastung berücksichtigt und das Upgrade schlägt fehl, wenn die durchschnittliche Auslastung zu hoch ist.- Der Upgrade-Vorgang auf {% data variables.product.prodname_ghe_server %} 2.17 migriert Deine Überwachungsprotokolle von Elasticsearch zu MySQL. Diese Migration erhöht die erforderliche Dauer und den Speicherplatz, die bzw. der zum Wiederherstellen eines Snapshots erforderlich ist. Überprüfen Sie vor der Migration die Anzahl an Bytes in Ihren ElasticSearch-Auditprotokollindizes. Führen Sie dazu den folgenden Befehl aus:
``` shell
curl -s http://localhost:9201/audit_log/_stats/store | jq ._all.primaries.store.size_in_bytes
```
Anhand der Zahl können Sie schätzen, wie viel Speicherplatz die MySQL-Auditprotokolle benötigen werden. Darüber hinaus überwacht das Skript den freien Speicherplatz, während der Import ausgeführt wird. Die Überwachung dieser Zahl ist besonders nützlich, wenn der freie Speicherplatz dem für die Migration erforderlichen Speicherplatz nahekommt.

Nachdem Sie diese Empfehlungen und Anforderungen gelesen haben, können Sie {% data variables.product.prodname_ghe_server %} upgraden. Weitere Informationen finden Sie unter „[Upgrade von {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)“.
