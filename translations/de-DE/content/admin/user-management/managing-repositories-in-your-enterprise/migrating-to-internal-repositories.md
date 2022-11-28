---
title: Zu internen Repositorys migrieren
intro: 'Du kannst zu internen Repositorys migrieren, um für Entwickler, die sowohl {% data variables.product.prodname_ghe_server %} als auch {% data variables.product.prodname_ghe_cloud %} verwenden, die Inner-Source-Prozesse zu vereinheitlichen.'
redirect_from:
  - /enterprise/admin/installation/migrating-to-internal-repositories
  - /enterprise/admin/user-management/migrating-to-internal-repositories
  - /admin/user-management/migrating-to-internal-repositories
permissions: Site administrators can migrate to internal repositories.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Privacy
  - Repositories
  - Security
shortTitle: Internal repository migration
ms.openlocfilehash: 66a535d8fd2e20cbcc78791588ca2b50ae8ede79
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147876998'
---
## Informationen zu internen Repositorys

Interne Repositorys sind in {% data variables.product.prodname_ghe_server %} 2.20+ verfügbar. {% data reusables.repositories.about-internal-repos %} Weitere Informationen findest du unter [Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

In zukünftigen Releases von {% data variables.product.prodname_ghe_server %} werden wir die Sichtbarkeit des Repositorys so einstellen, dass die Begriffe „öffentlich“, „intern“ und „privat“ für Entwickler auf {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} eine einheitliche Bedeutung haben.

Wenn der private Modus aktiviert ist, kannst du eine Migration auf deiner Instanz durchführen, um öffentliche Repositories nach intern zu konvertieren und Dich so auf diese Änderungen vorzubereiten. Diese Migration ist derzeit optional, damit du die Änderungen an einer nicht-produktiven Instanz testen kannst. In Zukunft wird die Migration unumgänglich.

Wenn du die Migration ausführst, werden alle öffentlichen Repositories von Organisationen in deiner Instanz zu internen Repositorys. Wenn irgendwelche dieser Repositories Forks haben, werden die Forks privat. Private Repositorys bleiben privat.

Alle öffentlichen Repositories im Besitz von Benutzerkonten in deiner Instanz werden zu privaten Repositorys. Wenn irgendwelche dieser Repositories Forks haben, werden die Forks ebenfalls privat. Der Besitzer jedes Forks erhält Leseberechtigungen für das übergeordnete Element des Forks.

Der anonyme Git-Lesezugriff wird für jedes öffentliche Repository deaktiviert, das intern oder privat wird.

Wenn deine aktuelle Standardsichtbarkeit für Repositorys öffentlich ist, wird die Standardeinstellung intern. Wenn der aktuelle Standardwert privat ist, ändert er sich nicht. Du kannst den Standardwert jederzeit ändern. Weitere Informationen findest du unter [Erzwingen von Repositoryverwaltungsrichtlinien in deinem Unternehmen](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-the-default-visibility-of-new-repositories-in-your-enterprise).

Die Repository-Erstellungsrichtlinie für die Instanz wird dahingehend geändert, dass öffentliche Repositorys verhindert und private und interne Repositories ermöglicht werden. Du kannst die Richtlinie jederzeit aktualisieren. Weitere Informationen findest du unter [Einschränken der Erstellung von Repositorys in deinen Instanzen](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance).

Wenn du den private Modus nicht aktiviert hast, hat das Migrationsskript keine Auswirkung.

## Die Migration durchführen

1. Stelle eine Verbindung zur Verwaltungsshell her. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/enterprise/admin/installation/accessing-the-administrative-shell-ssh).
{% ifversion ghes or ghae %}
2. Führe den Migrationsbefehl aus.

   ```shell
   github-env bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w |  tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```

{% else %}
2. Navigiere zum Verzeichnis `/data/github/current`.
   ```shell
   cd /data/github/current
   ```
3. Führe den Migrationsbefehl aus.
   ```shell
   sudo bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w | tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```
{% endif %}

Die Protokollausgabe wird im Terminal und in `/tmp/convert_public_ghes_repos_to_internal.log` angezeigt.

## Weitere Informationsquellen

- „[Aktivieren des privaten Modus](/enterprise/admin/installation/enabling-private-mode)“
