---
title: Zu internen Repositorys migrieren
intro: 'Du kannst zu internen Repositorys migrieren, um für Entwickler, die sowohl {% data variables.product.prodname_ghe_server %} als auch {% data variables.product.prodname_ghe_cloud %} verwenden, das Erlebnis mit Inner Source zu vereinheitlichen.'
redirect_from:
  - /enterprise/admin/installation/migrating-to-internal-repositories
  - /enterprise/admin/user-management/migrating-to-internal-repositories
  - /admin/user-management/migrating-to-internal-repositories
permissions: Site administrators can migrate to internal repositories.
versions:
  enterprise-server: '>=2.20'
type: how_to
topics:
  - Enterprise
  - Privacy
  - Repositories
  - Security
---

### Informationen zu internen Repositorys

Interne Repositorys sind in {% data variables.product.prodname_ghe_server %} 2.20+ verfügbar. {% data reusables.repositories.about-internal-repos %} Weitere Informationen findest Du unter „[Informationen zur Sichtbarkeit von Repositorys](/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)."

In zukünftigen Releases von {% data variables.product.prodname_ghe_server %} werden wir die Sichtbarkeit des Repositorys so einstellen, dass die Begriffe „öffentlich“, „intern“ und „privat“ für Entwickler auf {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} eine einheitliche Bedeutung haben.

Wenn der private Modus aktiviert ist, kannst Du eine Migration auf Deiner Instanz durchführen, um öffentliche Repositories nach intern zu konvertieren und Dich so auf diese Änderungen vorzubereiten. Diese Migration ist derzeit optional, damit Du die Änderungen an einer nicht-produktiven Instanz testen kannst. In Zukunft wird die Migration unumgänglich.

Wenn Du die Migration ausführst, werden alle öffentlichen Repositories von Organisationen in Deiner Instanz zu internen Repositorys. Wenn irgendwelche dieser Repositories Forks haben, werden die Forks privat. Private Repositorys bleiben privat.

Alle öffentlichen Repositories im Besitz von Benutzerkonten in Deiner Instanz werden zu privaten Repositorys. Wenn irgendwelche dieser Repositories Forks haben, werden die Forks ebenfalls privat. Der Besitzer jedes Forks erhält Leseberechtigungen für das übergeordnete Element des Forks.

Der anonyme Git-Lesezugriff wird für jedes öffentliche Repository deaktiviert, das intern oder privat wird.

Wenn Deine aktuelle Standardsichtbarkeit für Repositorys öffentlich ist, wird die Standardeinstellung intern. Wenn der aktuelle Standardwert privat ist, ändert er sich nicht. Du kannst den Standardwert jederzeit ändern. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-the-default-visibility-of-new-repositories-in-your-enterprise)."

Die Repository-Erstellungsrichtlinie für die Instanz wird dahingehend geändert, dass öffentliche Repositorys verhindert und private und interne Repositories ermöglicht werden. Du kannst die Richtlinie jederzeit aktualisieren. Weitere Informationen findest Du unter „[Repository-Erstellung in Deinen Instanzen beschränken](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance).“

Wenn Du den private Modus nicht aktiviert hast, hat das Migrationsskript keine Auswirkung.

### Die Migration durchführen

1. Stellen Sie eine Verbindung zur Verwaltungsshell her. Weitere Informationen findest Du unter "[Auf die administrative Shell (SSH) zugreifen](/enterprise/admin/installation/accessing-the-administrative-shell-ssh)."
{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
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

Die Log-Ausgabe erscheint im Terminal und `/tmp/convert_public_ghes_repos_to_internal.log`.

### Weiterführende Informationen

- „[Privaten Modus aktivieren](/enterprise/admin/installation/enabling-private-mode)“
