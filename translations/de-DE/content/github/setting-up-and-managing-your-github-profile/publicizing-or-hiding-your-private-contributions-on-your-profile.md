---
title: Private Beiträge in Deinem Profil veröffentlichen oder verbergen
intro: 'Ihr {% data variables.product.product_name %}-Profil zeigt ein Diagramm Ihrer Repository-Beiträge des letzten Jahres an. You can choose to show anonymized activity from {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}private and internal{% else %}private{% endif %} repositories{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} in addition to the activity from public repositories{% endif %}.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Profiles
---

Wenn Du Deine privaten Beiträge veröffentlichst, können Benutzer, die keinen Zugriff auf die Repositorys haben, an denen Du mitarbeitest, die Informationen zu Deinen privaten Beiträgen nicht sehen. Stattdessen sehen sie die Anzahl an privaten Beiträgen, die Du pro Tag geleistet hast. Zu Deinen öffentlichen Beiträgen werden detaillierte Informationen angezeigt. Weitere Informationen findest Du unter „[Beiträge auf Deiner Profilseite anzeigen](/articles/viewing-contributions-on-your-profile-page)“.

### Die Sichtbarkeit Deiner privaten Beiträge ändern

Standardmäßig sehen Besucher nur die öffentlichen Beiträge in Deinem Profil.

{% data reusables.profile.access_profile %}
2. Veröffentliche Deine privaten Beiträge in Deinem Profil, oder blende sie aus:
    - Um Deine privaten Beiträge zu veröffentlichen, wähle über Deinem Beteiligungsdiagramm im Dropdownmenü **Contribution settings** (Beitragseinstellungen) die Option **Private contributions** (Private Beiträge) aus. Besucher sehen die Anzahl Deiner privaten Beiträge ohne weitere Details. ![Im Dropdownmenü mit den Beitragseinstellungen festlegen, dass Besucher private Beiträge sehen können](/assets/images/help/profile/private-contributions-on.png)
    - Um Deine privaten Beiträge auszublenden, hebe über Deinem Beteiligungsdiagramm im Dropdownmenü **Contribution settings** (Beitragseinstellungen) die Auswahl der Option **Private contributions** (Private Beiträge) auf. Besucher sehen dann nur Deine öffentlichen Beiträge. ![Im Dropdownmenü mit den Beitragseinstellungen festlegen, dass Besucher private Beiträge sehen können](/assets/images/help/profile/private-contributions-off.png)

### Weiterführende Informationen

- „[Beiträge auf Ihrer Profilseite anzeigen](/articles/viewing-contributions-on-your-profile-page)“
- „[Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)“
