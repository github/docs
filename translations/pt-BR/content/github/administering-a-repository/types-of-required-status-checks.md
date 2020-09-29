---
title: Tipos de verificações de status obrigatórias
intro: Você pode configurar as verificações de status obrigatórias como "flexível" ou "rígida". O tipo de verificação de status obrigatória que você escolher determinará se o branch precisará ser atualizado com o branch base antes do merge.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/types-of-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

| Tipo de verificação de status obrigatória | Configuração                                                                                                                                                  | Requisitos de merge                                                    | Considerações                                                                                                                                                                                                                                                                                |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rígida**                                | A caixa de seleção **Require branches to be up-to-date before merging** (Exigir a atualização dos branches antes de fazer merge) fica marcada.                | O branch **precisa** ser atualizado no branch base antes do merge.     | Este é o comportamento padrão para verificações de status obrigatórias. Podem ser necessárias mais compilações, já que você precisará atualizar o branch head depois que outros colaboradores fizerem merge de pull requests no branch base protegido.                                       |
| **Flexível**                              | A caixa de seleção **Require branches to be up-to-date before merging** (Exigir a atualização dos branches antes de fazer merge) **não** fica marcada.        | O branch **não precisa** ser atualizado no branch base antes do merge. | Serão necessárias menos compilações, já que você não precisará atualizar o branch head depois que outros colaboradores fizerem merge de pull requests. As verificações de status poderão falhar depois que você fizer merge do branch, caso haja alterações incompatíveis com o branch base. |
| **Desabilitada**                          | A caixa de seleção **Require status checks to pass before merging** (Exigir verificações de status para aprovação antes de fazer merge) **não** fica marcada. | O branch não tem restrições de merge.                                  | Se as verificações de status obrigatórias não estiverem habilitadas, os colaboradores poderão fazer merge do branch a qualquer momento, estando ou não atualizados com o branch base. Isso aumenta a possibilidade de alterações incompatíveis.                                              |

### Leia mais

- "[Sobre verificações de status obrigatórias](/articles/about-required-status-checks)"
- "[Habilitar verificações de status obrigatórias](/articles/enabling-required-status-checks)"
