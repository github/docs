---
title: Por que meus commits estão na ordem errada?
intro: 'Se você reescrever seu histórico de commits por meio de ''git rebase'' ou de um push forçado, poderá perceber que a sequência de commits está fora de ordem ao abrir uma pull request.'
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

O GitHub enfatiza pull requests como um espaço para discussão. Todos os aspectos (comentários, referências e commits) são representados em ordem cronológica. Reescrever o histórico de commits do Git [ao executar rebases](/articles/about-git-rebase) altera o continuum espaço-tempo, o que significa que talvez os commits não sejam representados conforme esperado na interface do Github.

Se você sempre quiser ver os commits em ordem, recomendamos não usar`git rebase`. No entanto, tenha certeza de que nada está errado quando você vê as coisas fora da ordem cronológica!
