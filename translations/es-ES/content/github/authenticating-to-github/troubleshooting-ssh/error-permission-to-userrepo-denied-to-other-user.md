---
title: 'Error: Permiso de usuario/repo denegado a otro usuario'
intro: Este error significa que la clave con la que estás subiendo está conectada con una cuenta que no tiene acceso al repositorio.
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-other-user
  - /articles/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-other-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

Para resolverlo, el propietario del repositorio (`user`) debe agregar tu cuenta (`other-user`) como colaborador en el repositorio o en un equipo que tenga acceso de escritura al repositorio.
