---
title: Sobre branches protegidos
intro: 'Os branches protegidos garantem que colaboradores no seu repositório não possam fazer alterações irreversíveis nos branches. Habilitar branches protegidos também permite habilitar outros requisitos e verificações opcionais, como verificação de status obrigatória e revisões obrigatórias.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.pull_requests.about-protected-branches %} Você pode optar por aplicar restrições sobre como um pull request é mesclado no seu repositório.

Os proprietários de repositório e as pessoas com permissões de administrador para um repositório podem impor determinados fluxos de trabalho ou requisitos, antes que um colaborador possa fazer merge em seu repositório criando regras de branch protegido.

{% data reusables.repositories.branch-rules-example %} Para obter mais informações, consulte "[Configurar branches protegidos](/articles/configuring-protected-branches/)."

### Priorização de regras de branches protegidos

Se um repositório tiver várias regras de branch protegido que afetem os mesmos branches, as regras que incluírem um nome de branch específico terão a prioridade mais alta. Se houver mais de uma regra de branch protegido que faça referência ao mesmo nome de branch específico, a regra de branch criada primeiro terá a prioridade mais alta.

As regras de branch protegido que mencionam um caractere especial, como `*`, `?` ou `]`, são aplicadas na ordem em que foram criadas, de modo que as regras mais antigas com esses caracteres têm uma prioridade mais alta.

### Configurações de proteção de branch

Quando você cria uma regra de proteção de branch em um repositório, colaboradores não podem forçar push para o branch protegido ou excluir o branch{% if currentVersion == "free-pro-team@latest" %} por padrão{% endif %}. Você pode habilitar outras configurações de proteção de branch. Para obter informações, consulte "[Definir a possibilidade de mesclagem de pull requests](/github/administering-a-repository/defining-the-mergeability-of-pull-requests)".

### Leia mais

- "[Sobre verificações de status obrigatórias](/articles/about-required-status-checks)"
- "[Sobre revisões obrigatórias para pull requests](/articles/about-required-reviews-for-pull-requests)"
- "[Sobre a assinatura de commit obriagória](/articles/about-required-commit-signing)"
