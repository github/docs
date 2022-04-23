---
title: Bloquear usuarios
intro: ''
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

El token que se utiliza para autenticar la llamada debe tener el alcance de `admin:org` para poder hacer cualquier llamada de bloqueo para una organización. De lo contrario, la respuesta devolverá un `HTTP 404`.
