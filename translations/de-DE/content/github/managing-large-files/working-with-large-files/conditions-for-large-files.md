---
title: Bedingungen für große Dateien
intro: '{% data variables.product.product_name %} begrenzt die Dateigröße in Repositorys und blockiert einen Push in ein Repository, wenn die Dateien größer sind als das maximale Datei-Limit.'
redirect_from:
  - /articles/conditions-for-large-files
  - /github/managing-large-files/conditions-for-large-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
{% data reusables.large_files.use_lfs_tip %}

### Warnung für Dateien größer als {% data variables.large_files.warning_size %}

Wenn Du versuchst, eine Datei größer als {% data variables.large_files.warning_size %} hinzuzufügen oder zu aktualisieren, wirst Du von Git eine Warnung erhalten. Die Änderungen werden immer noch erfolgreich in Dein Repository übertragen, aber kannst erwägen, den Commit zu entfernen, um die Performance-Auswirkungen zu minimieren. Weitere Informationen findest Du unter „[Dateien aus dem Verlauf eines Repositorys entfernen](/github/managing-large-files/removing-files-from-a-repositorys-history).“

### Blockierte Pushs für große Dateien

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}By default, {% endif %}{% data variables.product.product_name %} blocks pushes that exceed {% data variables.large_files.max_github_size %}. {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}However, a site administrator can configure a different limit for {% data variables.product.product_location %}. Weitere Informationen findest Du unter „[Push-Begrenzungen für Git festlegen](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-git-push-limits).“{% endif %}
