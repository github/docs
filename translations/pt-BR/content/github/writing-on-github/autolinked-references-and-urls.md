---
title: Referências e URLs vinculados automaticamente
intro: 'As referências a URLs, problemas, pull requests e commits são automaticamente reduzidas e convertidas em links.'
redirect_from:
  - /articles/autolinked-references-and-urls
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### URLs

O {% data variables.product.product_name %} cria links automaticamente de URLs padrão.

`Visite https://github.com`

![URL vinculado automaticamente renderizado](/assets/images/help/writing/url-autolink-rendered.png)

Para obter mais informações sobre como criar links, consulte "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax/#links)".

### Problemas e pull requests

Nas conversas do {% data variables.product.product_name %}, as referências a problemas e pull request são convertidas automaticamente em links curtos. Para obter mais informações, consulte "[Sobre conversas no {% data variables.product.prodname_dotcom %}](/articles/about-conversations-on-github)".

{% note %}

**Observação:** as referências vinculadas automaticamente não são criadas em wikis nem arquivos em um repositório.

{% endnote %}

| Tipo de referência                                                      | Referência bruta                               | Link curto                                                             |
| ----------------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------- |
| URL do problema ou da pull request                                      | https://github.com/jlord/sheetsee.js/issues/26 | [#26](https://github.com/jlord/sheetsee.js/issues/26)                  |
| `#` e número do problema ou da pull request                             | #26                                            | [#26](https://github.com/jlord/sheetsee.js/issues/26)                  |
| `GH-` e número do problema ou da pull request                           | GH-26                                          | [GH-26](https://github.com/jlord/sheetsee.js/issues/26)                |
| `Username/Repository#` e número do problema ou da pull request          | jlord/sheetsee.js#26                           | [jlord/sheetsee.js#26](https://github.com/jlord/sheetsee.js/issues/26) |
| `Organization_name/Repository#` e número do problema ou da pull request | github/linguist#4039                           | [github/linguist#4039](https://github.com/github/linguist/pull/4039)   |

### SHAs de commit

As referências em um hash SHA de commit são convertidas automaticamente em links curtos para o commit no {% data variables.product.product_name %}.

| Tipo de referência        | Referência bruta                                                                                                                                                               | Link curto                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| URL do commit             | [`https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)                     |
| SHA                       | a5c3785ed8d6a35868bc169f07e40e889087fd2e                                                                                                                                       | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)                     |
| User@SHA                  | jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e                                                                                                                                 | [jlord@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)               |
| `Username/Repository@SHA` | `jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e`                                                                                                                   | [`jlord/sheetsee.js@a5c3785`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |

### Links automáticos personalizados para recursos externos

{% data reusables.repositories.autolink-references %}

### Leia mais

- "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax)"
