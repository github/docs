---
title: Bloquear usuários
intro: ''
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

O token usado para autenticar a chamada deve ter o escopo `admin:org` para fazer quaisquer chamadas de bloqueio para uma organização. Caso contrário, a resposta retornará `HTTP 404`.
