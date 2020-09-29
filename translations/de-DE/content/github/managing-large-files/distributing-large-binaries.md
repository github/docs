---
title: Große Binärdateien verteilen
intro: 'Bei einigen Projekten ist es erforderlich, neben dem Quellcode auch große Dateien wie Binärdateien oder Installationsprogramme zu verteilen.'
redirect_from:
  - /articles/distributing-large-binaries
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Wenn Du große Dateien innerhalb Deines Repositorys verteilen musst, kannst Du Releases auf {% data variables.product.product_location %} erstellen. Releases erlauben Dir, Software, Release-Hinweise und Links zu Binärdateien zu paketieren, damit andere Personen diese nutzen können. Weitere Informationen findest Du unter „[Informationen zu Releases](/github/administering-a-repository/about-releases).“

{% if currentVersion == "free-pro-team@latest" %}

Wir begrenzen weder die Gesamtgröße der binären Release-Dateien noch die Bandbreite, die für deren Bereitstellung verwendet wird. Allerdings muss jede einzelne Datei kleiner sein als {% data variables.large_files.max_lfs_size %}.

{% endif %}

{% data reusables.large_files.use_lfs_tip %}
