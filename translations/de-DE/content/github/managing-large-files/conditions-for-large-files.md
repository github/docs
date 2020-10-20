---
title: Bedingungen für große Dateien
intro: '{% data variables.product.product_name %} begrenzt die Dateigröße in Repositorys und blockiert einen Push in ein Repository, wenn die Dateien größer sind als das maximale Datei-Limit.'
redirect_from:
  - /articles/conditions-for-large-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.large_files.use_lfs_tip %}

### Warnung für Dateien größer als {% data variables.large_files.warning_size %}

Wenn Du versuchst, eine Datei größer als {% data variables.large_files.warning_size %} hinzuzufügen oder zu aktualisieren, wirst Du von Git eine Warnung erhalten. Die Änderungen werden immer noch erfolgreich in Dein Repository übertragen, aber kannst erwägen, den Commit zu entfernen, um die Performance-Auswirkungen zu minimieren. Weitere Informationen findest Du unter „[Dateien aus dem Verlauf eines Repositorys entfernen](/github/managing-large-files/removing-files-from-a-repositorys-history).“

### Blockierte Pushs für große Dateien

{% if currentVersion != "free-pro-team@latest" %}By default, {% endif %}{% data variables.product.product_name %} blocks pushes that exceed {% data variables.large_files.max_github_size %}. {% if currentVersion != "free-pro-team@latest" %}However, a site administrator can configure a different limit for your {% data variables.product.prodname_ghe_server %} instance. Weitere Informationen findest Du unter „[Push-Begrenzungen für Git festlegen](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-git-push-limits).“{% endif %}
