---
title: 'Error: Permiso de usuario/repo denegado al usuario/otro repo'
intro: 'Este error significa que la clave con la que estás subiendo se encuentra conectada con otro repositorio como llave de implementación, y no tiene acceso al repositorio al que estás intentado subir.'
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permiso negado para other-repo
---

To fix this, remove the deploy key from the repository, and [add the key to your personal account](/articles/adding-a-new-ssh-key-to-your-github-account) instead.

Si la clave que estás usando está diseñada para funcionar como una llave de implementación, consulta [nuestra guía sobre llaves de implementación](/guides/managing-deploy-keys) para conocer más detalles.
