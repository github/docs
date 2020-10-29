---
title: Gists erstellen
intro: 'Du kannst zwei Arten von Gists erstellen: öffentliche und geheime. Erstelle einen öffentlichen Gist, wenn Du Deine Ideen für andere freigeben möchtest. Andernfalls kannst Du einen geheimen Gist erstellen.'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zu Gists

Jeder Gist ist ein Git-Repository, d. h., er kann geforkt und geklont werden. Wenn Sie bei der Erstellung eines Gists bei {% data variables.product.product_name %} angemeldet sind, wird der Gist mit Ihrem Konto verknüpft und in der Liste Ihrer Gists angezeigt, wenn Sie Ihre {% data variables.gists.gist_homepage %} aufrufen.

Gists können öffentlich oder geheim sein. Öffentliche Gists werden in {% data variables.gists.discover_url %} angezeigt, wo Benutzer neue Gists nach der Erstellung durchsuchen können. Gists können auch gesucht werden, Du kannst sie also verwenden, wenn Du möchtest, dass andere Benutzer Deine Arbeit finden und ansehen können. {% data reusables.gist.cannot-convert-public-gists-to-secret %}

Secret gists don't show up in {% data variables.gists.discover_url %} and are not searchable. {% data reusables.gist.cannot-convert-public-gists-to-secret %} Geheime Gists sind nicht privat. Wenn Du die URL eines geheimen Gists an einen Freund sendest, kann er den Gist sehen. Wenn jemand, den Du nicht kennst, die URL findet, kann er Deinen Gist ebenfalls sehen. Wenn Du nicht möchtest, dass Dein Code von anderen gesehen werden kann, kannst Du stattdessen [ein privates Repository erstellen](/articles/creating-a-new-repository).

{% if enterpriseServerVersions contains currentVersion %}

Wenn Dein Websiteadministrator den privaten Modus deaktiviert hat, kannst Du auch anonyme Gists verwenden, die öffentlich oder geheim sein können.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

In folgenden Fällen erhältst Du eine Benachrichtigung:
- Du bist der Autor eines Gists.
- Jemand erwähnt Dich in einem Gist.
- Du abonnierst einen Gist, indem Du oben im Gist auf **Subscribe** (Abonnieren) klickst.

Du kannst Gists an Deinem Profil anheften, damit andere Personen sie leichter sehen. Weitere Informationen finden Sie unter „[Elemente an Ihr Profil anheften](/articles/pinning-items-to-your-profile)“.

Um Gists zu entdecken, die von anderen Benutzern erstellt wurden, rufe die {% data variables.gists.gist_homepage %} auf und klicke dort auf **All Gists** (Alle Gists). Daraufhin wird eine Seite mit allen Gists angezeigt, die nach dem Zeitpunkt der Erstellung oder Aktualisierung sortiert sind. Mit der {% data variables.gists.gist_search_url %} können Sie Gists auch nach Sprache suchen. Die Gist-Suche nutzt dieselbe Suchsyntax wie [die Codesuche](/articles/searching-code).

Da es sich bei Gists um Git-Repositorys handelt, kannst Du ihren vollständigen Commit-Verlauf anzeigen, einschließlich der Diffs. Du kannst Gists auch forken oder klonen. Weitere Informationen findest Du unter „[Gists forken und klonen](/articles/forking-and-cloning-gists)“.

Um eine ZIP-Datei eines Gists herunterzuladen, klicke oben im Gist auf die Schaltfläche **Download ZIP** (ZIP herunterladen). Du kannst einen Gist in jedem Textfeld einbetten, das JavaScript unterstützt, z. B. in Blog-Beiträgen. Um den eingebetteten Code abzurufen, klicke neben der **Einbettungs-URL** eines Gists auf das Symbol für die Zwischenablage. Um eine bestimmte Gist-Datei einzubetten, hänge an die **Einbettungs-URL** `?file=FILENAME` an.

{% if currentVersion == "free-pro-team@latest" %}

Gists unterstützen den Gebrauch von geoJSON-Dateien. Diese Karten werden in eingebetteten Gists angezeigt, sodass Du die Karten leicht freigeben und einbetten kannst. Weitere Informationen findest Du unter „[GeoJSON-Dateien auf {% data variables.product.product_name %} zuordnen](/articles/mapping-geojson-files-on-github).“

{% endif %}

### Einen Gist erstellen

Du kannst auch eine Textdatei per Drag-and-Drop von Deinem Desktop direkt in den Gist-Editor ziehen.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% note %}

You can also create a gist using the {% data variables.product.prodname_cli %}. For more information, see "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endnote %}
{% endif %}

1. Melden Sie sich bei {% data variables.product.product_name %} an.
2. Navigieren Sie zu Ihrer {% data variables.gists.gist_homepage %}.
3. Gib eine optionale Beschreibung und einen Namen für Deinen Gist ein. ![Name und Beschreibung des Gists](/assets/images/help/gist/gist_name_description.png)

4. Gib den Text für den Gist in das Gist-Textfeld ein. ![Gist-Textfeld](/assets/images/help/gist/gist_text_box.png)

5. Führe einen der folgenden Schritte durch:
    - Um einen öffentlichen Gist zu erstellen, klicke auf **Create public gist** (Erstelle öffentlichen Gist).
    - Um einen geheimen Gist zu erstellen, klicke auf **Create secret gist** (Erstelle geheimen Gist). ![Schaltfläche zum Erstellen des Gists](/assets/images/help/gist/gist_create_btn.png)

  {% note %}

  **Hinweis:** {% data reusables.gist.cannot-convert-public-gists-to-secret %}

  {% endnote %}
