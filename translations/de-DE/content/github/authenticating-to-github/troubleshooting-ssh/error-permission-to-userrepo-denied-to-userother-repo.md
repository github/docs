---
title: 'Fehler: „Permission to user/repo denied to user/other-repo“ (Berechtigung für „user/repo" für „user/other-repo" verweigert)'
intro: 'Diese Fehlermeldung bedeutet, dass der Schlüssel, den Du beim Push verwendest, als Deployment-Schlüssel an ein anderes Repository angehängt ist und keinen Zugriff auf das Repository hat, zu dem Du pushen möchtest.'
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---
Um das Problem zu beheben, entferne den Deployment-Schlüssel vom Repository und [füge ihn stattdessen zu Deinem Benutzerkonto hinzu](/articles/adding-a-new-ssh-key-to-your-github-account).

Wenn der Schlüssel, den Du verwendest, als Deployment-Schlüssel genutzt werden soll, findest Du weitere Informationen in [unserem Leitfaden zu Deployment-Schlüsseln](/guides/managing-deploy-keys).
