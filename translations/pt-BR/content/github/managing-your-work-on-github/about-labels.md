---
title: Sobre etiquetas
intro: 'As etiquetas no {% data variables.product.product_name %} ajudam você a organizar e priorizar seu trabalho. Você pode aplicar etiquetas a problemas e pull requests para indicar prioridade, categoria ou qualquer outra informação que achar útil.'
redirect_from:
  - /articles/about-labels
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

As etiquetas são associadas ao repositório em que foram criadas. Dada a existência de uma etiqueta, você pode usá-la em qualquer problema ou pull request dentro desse repositório. Para obter mais informações, consulte "[Criar uma etiqueta](/articles/creating-a-label/)".

Qualquer pessoa com acesso de leitura a um repositório pode exibir e pesquisar etiquetas do repositório. Para criar, editar, aplicar ou excluir uma etiqueta, é preciso ter acesso de gravação ao repositório.

### Usar etiquetas padrão

O {% data variables.product.product_name %} fornece etiquetas padrão para todos os repositórios novos. Você pode usar essas etiquetas padrão para ajudar com a criação de um fluxo de trabalho padronizado em um repositório:

| Etiqueta           | Descrição                                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `bug`              | Indica um problema inesperado ou comportamento involuntário{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `documentation`    | Indica a necessidade de aprimoramentos ou adições à documentação{% endif %}
| `duplicate`        | Indica problemas ou pull requests semelhantes                                                                              |
| `enhancement`      | Indica novas solicitações de recurso                                                                                       |
| `good first issue` | Indica um bom problema para contribuidores principiantes                                                                   |
| `help wanted`      | Indica que um mantenedor deseja ajudar em um problema ou uma pull request                                                  |
| `invalid`          | Indica que um problema ou uma pull request não é mais relevante                                                            |
| `question`         | Indica que um problema ou uma pull request precisa de mais informações                                                     |
| `wontfix`          | Indica que o trabalho não continuará em um problema ou uma pull request                                                    |

Etiquetas padrão são incluídas em todos os novos repositórios quando criados, mas você pode editar ou excluir as etiquetas posteriormente. Para obter mais informações, consulte "[Excluir uma etiqueta](/articles/deleting-a-label/)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
Os proprietários da organização podem personalizar as etiquetas padrão para repositórios na organização. Para obter mais informações, consulte "[Gerenciar etiquetas padrão nos repositórios da organização](/articles/managing-default-labels-for-repositories-in-your-organization)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Leia mais

- "[Incentivando contribuições úteis para o seu projeto com etiquetas](/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels)"
{% endif %}
