---
title: 'Error: Permiso de usuario/repo denegado al usuario/otro repo'
intro: 'Este error significa que la clave con la que estás subiendo se encuentra conectada con otro repositorio como llave de implementación, y no tiene acceso al repositorio al que estás intentado subir.'
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

Para resolverlo, elimina la llave de implementación del repositorio y [agrega la clave a tu cuenta](/articles/adding-a-new-ssh-key-to-your-github-account) en lugar de esa llave.

Si la clave que estás usando está diseñada para funcionar como una llave de implementación, consulta [nuestra guía sobre llaves de implementación](/guides/managing-deploy-keys) para conocer más detalles.
