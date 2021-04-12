---
title: 'Fehler: „Permission to user/repo denied to other-user“ (Berechtigung für „user/repo" für „other-user" verweigert)'
intro: Diese Fehlermeldung bedeutet, dass der Schlüssel, den Du beim Push verwendest, an ein Konto angehängt ist, das keinen Zugriff auf das Repository hat.
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-other-user
  - /articles/error-permission-to-userrepo-denied-to-other-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - ssh
---

Um dieses Problem zu beheben, muss der Inhaber des Repositorys (`user`) Dein Konto (`other-user`) als Mitarbeiter zum Repository oder zu einem Team mit Schreibzugriff auf das Repository hinzufügen.
