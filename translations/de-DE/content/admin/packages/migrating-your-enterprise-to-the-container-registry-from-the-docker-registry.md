---
title: Migrieren deines Unternehmens von der Docker-Registrierung zur Containerregistrierung
intro: 'Du kannst Docker-Images, die zuvor in der Docker-Registry auf {% data variables.location.product_location %} gespeichert waren, in die {% data variables.product.prodname_container_registry %} migrieren.'
product: '{% data reusables.gated-features.packages %}'
permissions: 'Enterprise owners can migrate Docker images to the {% data variables.product.prodname_container_registry %}.'
versions:
  feature: docker-ghcr-enterprise-migration
shortTitle: Migrate to Container registry
topics:
  - Containers
  - Docker
  - Migration
ms.openlocfilehash: 459039d5c3a059c961ac1126e37929906d7b0325
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106381'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## Informationen zur {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Weitere Informationen findest du unter [Arbeiten mit der {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

Weitere Informationen zum Konfigurieren von {% data variables.product.prodname_registry %} für {% data variables.location.product_location %} findest du unter [Erste Schritte mit {% data variables.product.prodname_registry %} für dein Unternehmen](/admin/packages/getting-started-with-github-packages-for-your-enterprise).

## Informationen zur Migration aus der Docker-Registrierung

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Wenn die Docker-Registrierung auf {% data variables.location.product_location %} Images enthält, musst du die Images manuell in die {% data variables.product.prodname_container_registry %} migrieren.

{% ifversion ghes %}

{% note %}

**Hinweis**: {% data reusables.package_registry.container-registry-ghes-migration-availability %}

{% endnote %}

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %} Weitere Informationen zur Auswirkung der Migration zur {% data variables.product.prodname_container_registry %} findest du unter [Migrieren von der Docker-Registrierung zur {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry#about-migration-from-the-docker-registry).

## Migrieren von Organisationen zur {% data variables.product.prodname_container_registry %}

Du kannst eine Migration aller Docker-Images deiner Organisation zur {% data variables.product.prodname_container_registry %} starten. Die Dauer des Migrationsvorgangs ist abhängig von der Gesamtanzahl der zu migrierenden Images und der Gesamtauslastung {% ifversion ghes %}deiner Instanz {% elsif ghae %}{% data variables.product.product_name %}{% endif %}. Nach einer erfolgreichen Migration zeigt {% data variables.product.product_name %} eine Zusammenfassung an, und bei allen künftigen Uploads von Docker-Images wird die {% data variables.product.prodname_container_registry %} verwendet.

Wenn {% ifversion ghes %}ein Siteadministrator{% elsif ghae %}ein Unternehmensbesitzer{% endif %} E-Mail-Benachrichtigungen für {% data variables.location.product_location %} konfiguriert hat, empfängst du nach Abschluss der Migration eine E-Mail. Weitere Informationen findest du unter [Konfigurieren einer E-Mail-Adresse für Benachrichtigungen](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications).

{% note %}

**{% ifversion ghes %}Hinweise{% elsif ghae %}Note{% endif %}** :

{%- ifversion ghes %}
- Während der Migration erhöht sich die CPU- und Speicherauslastung deiner Instanz. Um die Leistung der Instanz für deine Benutzer zu gewährleisten, empfiehlt {% data variables.product.company_short %}, dass du die Migration in einer Zeit mit geringerer Aktivität vornimmst.
{%- endif %} {% ifversion ghes %}- {% endif %}Ändere während der Migration keine Einstellungen für dein Unternehmen{% ifversion ghes %}, oder führe `ghe-config-apply` in einer administrativen SSH-Sitzung aus{% endif %}. {% ifversion ghes %}Diese Aktionen lösen eine Konfigurationsausführung aus, wodurch die Dienste neu gestartet werden können, und {% elsif ghae %}Das Ändern dieser Einstellungen {% endif %} kann die Migration unterbrechen.
{%- ifversion ghes %}
- Nach der Migration erhöht sich der Speicherbedarf deiner Instanz aufgrund der Duplizierung von Imagedateien in der Docker-Registrierung und {% data variables.product.prodname_container_registry %}. In einer künftigen Version von {% data variables.product.product_name %} werden die duplizierten Dateien entfernt, sobald alle Migrationen abgeschlossen sind.

Weitere Informationen zur Überwachung von Leistung und Speicherung von {% data variables.location.product_location %} findest du unter [Zugreifen auf das Überwachungsdashboard](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard).
{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Klicke auf der linken Randleiste auf **Pakete**.
1. Klicke rechts neben der Anzahl der zu migrierenden Pakete auf **Migration starten**. Während der Migration zeigt {% data variables.product.product_name %} den Status auf dieser Seite an.

Nach Abschluss der Migration werden die Ergebnisse auf dieser Seite angezeigt. Wenn eine Migration fehlschlägt, werden auf der Seite die Organisationen im Besitz des Pakets angezeigt, das den Fehler verursacht hat.

## Wiederholen einer fehlgeschlagenen Organisationsmigration

Wenn ein Benutzer vor der Migration ein Paket in der {% data variables.product.prodname_container_registry %} erstellt hat, dessen Name mit dem eines vorhandenen Pakets in der Docker-Registrierung identisch ist, schlägt die Migration fehl.

1. Lösche den betroffenen Container aus der {% data variables.product.prodname_container_registry %}. Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package#deleting-a-version-of-an-organization-scoped-package-on-github).
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.packages-tab %}
1. Klicke rechts neben der Anzahl der zu migrierenden Pakete auf **Migration wiederholen**. Während der Migration zeigt {% data variables.product.product_name %} den Status auf dieser Seite an.
1. Wenn die Migration erneut fehlschlägt, beginne bei Schritt 1, und wiederhole die Migration.
