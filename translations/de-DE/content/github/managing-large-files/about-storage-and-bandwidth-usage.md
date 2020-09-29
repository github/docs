---
title: Informationen zur Speicher- und Bandbreitennutzung
intro: '{% data reusables.large_files.free-storage-bandwidth-amount %}'
redirect_from:
  - /articles/billing-plans-for-large-file-storage/
  - /articles/billing-plans-for-git-large-file-storage/
  - /articles/about-storage-and-bandwidth-usage
versions:
  free-pro-team: '*'
---

{% data variables.large_files.product_name_short %} ist für jedes Repository auf {% data variables.product.product_name %} verfügbar, unabhängig davon, ob Dein Konto oder Deine Organisation ein kostenpflichtiges Abonnement hat oder nicht.

### Speicher- und Bandbreitennutzung verfolgen

Wenn Du eine Änderung an einer Datei, die mit {% data variables.large_files.product_name_short %} verfolgt wird, freigibst und überträgst, wird eine neue Version der gesamten Datei übertragen und die gesamte Dateigröße wird auf die Speicherbegrenzung des Repository-Inhabers angerechnet. Wenn Du eine Datei herunterlädst, die mit {% data variables.large_files.product_name_short %} verfolgt wird, wird die gesamte Dateigröße auf die Bandbreitenbegrenzung des Repository-Inhabers angerechnet. {% data variables.large_files.product_name_short %}-Uploads werden nicht auf die Bandbreitenbegrenzung angerechnet.

Ein Beispiel:
- Wenn Du eine 500-MB-Datei an {% data variables.large_files.product_name_short %} überträgst, nutzt Du 500 MB Deines verfügbaren Speichers und keine Bandbreite. Wenn Du eine Änderung von 1 Byte vornimmst und die Datei erneut überträgst, nutzt Du weitere 500 MB Speicherplatz und keine Bandbreite, wodurch Deine Gesamtnutzung für diese beiden Pushes bei 1 GB Speicherplatz und Null Bandbreite liegt.
- Wenn Du eine 500-MB-Datei herunterlädst, die mit LFS verfolgt wird, verwendest Du 500 MB der vom Repository-Inhaber zur Verfügung gestellten Bandbreite. Wenn ein Mitarbeiter eine Änderung an eine Datei überträgt und Du die neue Version in Dein lokales Repository lädst, verwendest Du weitere 500 MB Bandbreite, wodurch die Gesamtnutzung für diese beiden Downloads bei 1 GB Bandbreite liegt.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
If {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in source code archives for your repository, downloads of those archives will count towards bandwidth usage for the repository. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)."
{% endif %}

{% tip %}

**Tips**:
- {% data reusables.large_files.owner_quota_only %}
- {% data reusables.large_files.does_not_carry %}

{% endtip %}

### Speicher-Kontingent

Wenn Du mehr als {% data variables.large_files.initial_storage_quota %} des Speichers nutzt, ohne ein Datenpaket zu kaufen, kannst Du immer noch Repositorys mit großen Objekten klonen. Allerdings kannst Du nur die Pointer-Dateien abrufen, aber keine neuen Dateien zurück übertragen. Weitere Informationen über Pointer-Dateien findest Du unter „[Über {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)."

### Bandbreiten-Kontingent

Wenn Du mehr als {% data variables.large_files.initial_bandwidth_quota %} der monatlichen Bandbreite nutzt, ohne ein Datenpaket zu kaufen, wird der {% data variables.large_files.product_name_short %}-Support für Dein Konto bis zum nächsten Monat deaktiviert.

### Weiterführende Informationen

- „[Ihre {% data variables.large_files.product_name_long %}-Nutzung anzeigen](/articles/viewing-your-git-large-file-storage-usage)“
- „[Abrechnung für {% data variables.large_files.product_name_long %} verwalten](/articles/managing-billing-for-git-large-file-storage)“
