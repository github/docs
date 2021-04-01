---
title: Einen Verhaltenskodex zu Deinem Projekt hinzufügen
intro: 'Mit einem Verhaltenskodex kannst Du Standards für die Community festlegen, ein einladendes und integratives Projekt signalisieren, und die Verfahren für den Umgang mit Missbrauch aufzeigen.'
redirect_from:
  - /articles/adding-a-code-of-conduct-to-your-project
  - /github/building-a-strong-community/adding-a-code-of-conduct-to-your-project
versions:
  free-pro-team: '*'
topics:
  - community
---

Ein *Verhaltenskodex* definiert die Standards für die Interaktion in einer Community. Er signalisiert, dass in dieser integrativen Umgebung alle Beiträge respektiert werden. Außerdem beschreibt er Verfahren für die Problembehandlung bei Schwierigkeiten zwischen Mitgliedern Deiner Projekt-Community. Weitere Informationen dazu, warum ein Verhaltenskodex Standards und Erwartungen für die Interaktion in einer Community festlegt, findest Du in den [Open-Source-Leitfäden](https://opensource.guide/code-of-conduct/).

Bevor Du einen Verhaltenskodex für Dein Projekt einsetzt, solltest Du Folgendes tun:

* Untersuche verschiedene Verhaltenskodizes, die für Open-Source-Projekte erstellt wurden. Wähle einen Kodex aus, der den Standards Deiner Community entspricht.
* Überlege Dir eingehend, ob Du diesen Kodex durchsetzen willst und kannst.

You can add a code of conduct to your project by using a template or manually creating a custom code of conduct. Your code of conduct will be available either way, but "Code of conduct" will only be marked as complete in your repository's community profile if you use a template. If you use a code of conduct written by another person or organization, be sure to follow any attribution guidelines from the source. For more information about community profiles, see "[About community profiles for public repositories](//communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)."

Du kannst einen Standard-Verhaltenskodex für Deine Organisation oder Dein Benutzerkonto erstellen. Weitere Informationen findest Du unter „[Eine Standard-Community-Unterstützungsdatei erstellen](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

### Einen Verhaltenskodex über eine Vorlage hinzufügen

{% data variables.product.product_name %} bietet Vorlagen für gängige Verhaltenskodizes. So können Sie rasch einen Verhaltenskodex zu Ihrem Projekt hinzufügen.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Gib in das Feld für den Dateinamen *CODE_OF_CONDUCT.md* ein.
4. Klicke auf **Choose a code of conduct template** (Eine Vorlage für den Verhaltenskodex auswählen). ![Schaltfläche zum Auswählen einer Vorlage für den Verhaltenskodex](/assets/images/help/repository/code-of-conduct-tool.png)
5. Wähle auf der linken Seite einen Verhaltenskodex aus, um eine Vorschau anzuzeigen und den Kodex zu Deinem Projekt hinzuzufügen. ![Auswahl einer Verhaltenskodex-Vorlage](/assets/images/help/repository/code-of-conduct-tool-picker.png)
6. Fülle die Felder auf der rechten Seite aus, um die richtigen Informationen in den ausgewählten Verhaltenskodex einzufügen.
7. Klicke auf **Review and submit** (Überprüfen und absenden). ![Verhaltenskodex überprüfen und an das Projekt einreichen](/assets/images/help/repository/code-of-conduct-tool-review.png)
8. Überprüfe den Inhalt des Verhaltenskodex, der sich im Textbereich befindet.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Einen Verhaltenskodex manuell hinzufügen

If the code of conduct you want to use isn't available in the provided templates, you can manually add a code of conduct.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field, type the name and extension for the file. ![New code of conduct file name](/assets/images/help/repository/new-code-of-conduct-file-name.png)
    - To make your code of conduct visible in the repository's root directory, type *CODE_OF_CONDUCT* in the file name field.
    - To make your code of conduct visible in the repository's `docs` directory, type *docs/CODE_OF_CONDUCT*.
    - To make your code of conduct visible in the repository's `.github` directory, type *.github/CODE_OF_CONDUCT*.
4. In the new file, add your custom code of conduct.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
