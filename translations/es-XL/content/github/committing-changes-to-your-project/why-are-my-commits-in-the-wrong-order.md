---
title: ¿Por qué mis confirmaciones están en el orden incorrecto?
intro: 'Si rescribes tu historial de confirmaciones mediante `git rebase` o un empuje forzado, puedes notar que tu secuencia de confirmación no funciona al abrir una solicitud de extracción.'
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

GitHub destaca las Solicitudes de extracción como un espacio para el debate. Todos sus aspectos (comentarios, referencias y confirmaciones) se representan en orden cronológico. Rescribir tu historial de confirmaciones de Git [mientras se realizan las rebases](/articles/about-git-rebase) altera el continuo espacio-tiempo, lo que significa que las confirmaciones pueden no estar representadas en la forma que esperas en la interfaz GitHub.

Si quieres ver siempre tus confirmaciones en orden, te recomendamos que no uses `git rebase`. Sin embargo, ¡ten por seguro que nada está roto cuando veas cosas que no estén en orden cronológico!
