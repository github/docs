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

{% data variables.product.product_name %} blockiert {% if enterpriseServerVersions contains currentVersion %}standardmäßig {% endif %}Übertragungen, welche {% data variables.large_files.max_github_size %} übersteigen. {% if enterpriseServerVersions contains currentVersion %}Ein Website-Administrator kann jedoch für Deine {% data variables.product.prodname_ghe_server %}-Instanz eine andere Limite konfigurieren. Weitere Informationen findest Du unter „[Push-Begrenzungen für Git festlegen](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-git-push-limits).“{% endif %}
