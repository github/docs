---
title: Gists erstellen
intro: 'You can create two kinds of gists: {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} and secret. Create {% if currentVersion == "github-ae@latest" %}an internal{% else %}a public{% endif %} gist if you''re ready to share your ideas with {% if currentVersion == "github-ae@latest" %}enterprise members{% else %}the world{% endif %} or a secret gist if you''re not.'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
### Informationen zu Gists

Jeder Gist ist ein Git-Repository, d. h., er kann geforkt und geklont werden. {% if currentVersion != "github-ae@latest" %}If you are signed in to {% data variables.product.product_name %} when{% else %}When{% endif %} you create a gist, the gist will be associated with your account and you will see it in your list of gists when you navigate to your {% data variables.gists.gist_homepage %}.

Gists can be {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or secret. {% if currentVersion == "github-ae@latest" %}Internal{% else %}Public{% endif %} gists show up in {% data variables.gists.discover_url %}, where {% if currentVersion == "github-ae@latest" %}enterprise members{% else %}people{% endif %} can browse new gists as they're created. Gists können auch gesucht werden, Du kannst sie also verwenden, wenn Du möchtest, dass andere Benutzer Deine Arbeit finden und ansehen können.

Secret gists don't show up in {% data variables.gists.discover_url %} and are not searchable. Secret gists aren't private. If you send the URL of a secret gist to {% if currentVersion == "github-ae@latest" %}another enterprise member{% else %}a friend {% endif %}, they'll be able to see it. However, if {% if currentVersion == "github-ae@latest" %}any other enterpise member{% else %}someone you don't know{% endif %} discovers the URL, they'll also be able to see your gist. Wenn Du nicht möchtest, dass Dein Code von anderen gesehen werden kann, kannst Du stattdessen [ein privates Repository erstellen](/articles/creating-a-new-repository).

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% if enterpriseServerVersions contains currentVersion %}

Wenn Dein Websiteadministrator den privaten Modus deaktiviert hat, kannst Du auch anonyme Gists verwenden, die öffentlich oder geheim sein können.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

In folgenden Fällen erhältst Du eine Benachrichtigung:
- Du bist der Autor eines Gists.
- Jemand erwähnt Dich in einem Gist.
- You subscribe to a gist, by clicking **Subscribe** at the top of any gist.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

Du kannst Gists an Deinem Profil anheften, damit andere Personen sie leichter sehen. Weitere Informationen finden Sie unter „[Elemente an Ihr Profil anheften](/articles/pinning-items-to-your-profile)“.

{% endif %}

You can discover {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gists others have created by going to the {% data variables.gists.gist_homepage %} and clicking **All Gists**. Daraufhin wird eine Seite mit allen Gists angezeigt, die nach dem Zeitpunkt der Erstellung oder Aktualisierung sortiert sind. Mit der {% data variables.gists.gist_search_url %} können Sie Gists auch nach Sprache suchen. Die Gist-Suche nutzt dieselbe Suchsyntax wie [die Codesuche](/articles/searching-code).

Da es sich bei Gists um Git-Repositorys handelt, kannst Du ihren vollständigen Commit-Verlauf anzeigen, einschließlich der Diffs. Du kannst Gists auch forken oder klonen. Weitere Informationen findest Du unter „[Gists forken und klonen](/articles/forking-and-cloning-gists)“.

Um eine ZIP-Datei eines Gists herunterzuladen, klicke oben im Gist auf die Schaltfläche **Download ZIP** (ZIP herunterladen). Du kannst einen Gist in jedem Textfeld einbetten, das JavaScript unterstützt, z. B. in Blog-Beiträgen. Um den eingebetteten Code abzurufen, klicke neben der **Einbettungs-URL** eines Gists auf das Symbol für die Zwischenablage. Um eine bestimmte Gist-Datei einzubetten, hänge an die **Einbettungs-URL** `?file=FILENAME` an.

{% if currentVersion == "free-pro-team@latest" %}

Gists unterstützen den Gebrauch von geoJSON-Dateien. Diese Karten werden in eingebetteten Gists angezeigt, sodass Du die Karten leicht freigeben und einbetten kannst. Weitere Informationen findest Du unter „[GeoJSON-Dateien auf {% data variables.product.product_name %} zuordnen](/articles/mapping-geojson-files-on-github).“

{% endif %}

### Einen Gist erstellen

Follow the steps below to create a gist.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% note %}

You can also create a gist using the {% data variables.product.prodname_cli %}. For more information, see "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" in the {% data variables.product.prodname_cli %} documentation.

Alternatively, you can drag and drop a text file from your desktop directly into the editor.

{% endnote %}
{% endif %}

1. Melden Sie sich bei {% data variables.product.product_name %} an.
2. Navigieren Sie zu Ihrer {% data variables.gists.gist_homepage %}.
3. Gib eine optionale Beschreibung und einen Namen für Deinen Gist ein. ![Name und Beschreibung des Gists](/assets/images/help/gist/gist_name_description.png)

4. Type the text of your gist into the gist text box. ![Gist-Textfeld](/assets/images/help/gist/gist_text_box.png)

5. Optionally, to create {% if currentVersion == "github-ae@latest" %}an internal{% else %}a public{% endif %} gist, click {% octicon "triangle-down" aria-label="The downwards triangle icon" %}, then click **Create {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gist**. ![Drop-down menu to select gist visibility]{% if currentVersion == "github-ae@latest" %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. Click **Create secret Gist** or **Create {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gist**. ![Button to create gist](/assets/images/help/gist/create-secret-gist-button.png)
