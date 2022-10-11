---
title: Private Beiträge in Deinem Profil veröffentlichen oder verbergen
intro: 'Ihr {% data variables.product.product_name %}-Profil zeigt ein Diagramm Ihrer Repository-Beiträge des letzten Jahres an. You can choose to show anonymized activity from {% ifversion fpt or ghes %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes %} in addition to the activity from public repositories{% endif %}.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Profiles
shortTitle: Private contributions
---

Wenn Du Deine privaten Beiträge veröffentlichst, können Benutzer, die keinen Zugriff auf die Repositorys haben, an denen Du mitarbeitest, die Informationen zu Deinen privaten Beiträgen nicht sehen. Stattdessen sehen sie die Anzahl an privaten Beiträgen, die Du pro Tag geleistet hast. Zu Deinen öffentlichen Beiträgen werden detaillierte Informationen angezeigt. For more information, see "[Viewing contributions on your profile page](/articles/viewing-contributions-on-your-profile-page)."

{% note %}

**Note:** {% ifversion fpt or ghes %}On {% ifversion fpt %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, public contributions on your profile are visible {% ifversion fpt %}to anyone in the world who can access {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}only to other users of {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}On {% data variables.product.prodname_ghe_managed %}, only other members of your enterprise can see the contributions on your profile.{% endif %}

{% endnote %}

## Die Sichtbarkeit Deiner privaten Beiträge ändern

{% data reusables.profile.access_profile %}
1. Veröffentliche Deine privaten Beiträge in Deinem Profil, oder blende sie aus:
    - Um Deine privaten Beiträge zu veröffentlichen, wähle über Deinem Beteiligungsdiagramm im Dropdownmenü **Contribution settings** (Beitragseinstellungen) die Option **Private contributions** (Private Beiträge) aus. Besucher sehen die Anzahl Deiner privaten Beiträge ohne weitere Details. ![Im Dropdownmenü mit den Beitragseinstellungen festlegen, dass Besucher private Beiträge sehen können](/assets/images/help/profile/private-contributions-on.png)
    - Um Deine privaten Beiträge auszublenden, hebe über Deinem Beteiligungsdiagramm im Dropdownmenü **Contribution settings** (Beitragseinstellungen) die Auswahl der Option **Private contributions** (Private Beiträge) auf. Besucher sehen dann nur Deine öffentlichen Beiträge. ![Im Dropdownmenü mit den Beitragseinstellungen festlegen, dass Besucher private Beiträge sehen können](/assets/images/help/profile/private-contributions-off.png)

## Weiterführende Informationen

- „[Beiträge auf Ihrer Profilseite anzeigen](/articles/viewing-contributions-on-your-profile-page)“
- „[Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)“
