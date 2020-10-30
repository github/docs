---
title: Zwischen Branches wechseln
intro: Du kannst Commits auf allen Branches Deiner Repositorys anzeigen und durchführen.
versions:
  free-pro-team: '*'
---

### Zwischen Branches wechseln
Wenn Du Änderungen gespeichert hast, die nicht per Commit übertragen wurden, musst Du Dich entscheiden, was mit Deinen Änderungen geschehen soll, bevor Du den Branch wechseln kannst. Du kannst Deine Änderungen per Commit zum aktuellen Branch übertragen, auf dem aktuellen Branch per Stash verbergen oder zu Deinem neuen Branch übertragen. Wenn Du Deine Änderungen per Commit auf den aktuellen Branch übertragen möchtest, solltest Du vor dem Wechseln der Branches die unter „[Änderungen an Deinem Projekt per Commit übertragen und überprüfen](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)“ beschriebenen Schritte befolgen.

{% tip %}

**Tipp**: Du kannst ein Standardverhalten für das Wechseln zwischen Branches in den **Advanced** (Erweiterten) Einstellungen festlegen. Weitere Informationen findest Du unter „[Grundeinstellungen konfigurieren](/desktop/getting-started-with-github-desktop/configuring-basic-settings)."

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Liste der Branches im Repository](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. Wenn Du Änderungen gespeichert, aber noch nicht per Commit übertragen hast, wähle **Leave my changes** (Meine Änderungen vergessen) oder **Bring my changes** (Meine Änderungen mitnehmen) aus, und klicke anschließend auf **Switch Branch** (Branch wechseln). ![Optionen zum Wechseln des Branches mit Änderungen](/assets/images/help/desktop/stash-changes-options.png)

### Versteckte Änderungen wiedererlangen
Um auf die Änderungen zuzugreifen, die Du in einem anderen Branch versteckt hast, wechselst Du zurück zum Branch mit den versteckten Änderungen.

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Liste der Branches im Repository](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. Klicke auf der linken Seitenleiste auf **Stashed Changes** (Versteckte Änderungen). ![Option für versteckte Änderungen](/assets/images/help/desktop/stashed-changes.png)
4. Klicke zum Löschen Deiner versteckten Änderungen auf **Discard** (Verwerfen). Klicke zum Verwenden Deiner versteckte Änderungen auf **Restore** (Wiederherstellen). ![Versteckte Änderungen verwerfen oder wiederherstellen](/assets/images/help/desktop/discard-restore-stash-buttons.png)
