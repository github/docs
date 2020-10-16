---
title: Sobre conflitos de merge
intro: 'Os conflitos de merge acontecem quando você faz merge de branches que têm commits concorrentes e o Git precisa da sua ajuda para decidir quais alterações incorporar n merge final.'
redirect_from:
  - /articles/about-merge-conflicts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Muitas vezes, o Git pode resolver diferenças entre branches e fazer merge deles automaticamente. Normalmente, as alterações são em linhas diferentes, ou até mesmo em arquivos diferentes, o que facilita o entendimento do merge pelos computadores. No entanto, às vezes, há alterações conflitantes que o Git não pode resolver sem a sua ajuda. Geralmente, os conflitos de merge acontecem quando as pessoas fazem alterações diferentes na mesma linha do mesmo arquivo ou quando uma pessoa edita um arquivo e outra pessoa exclui o mesmo arquivo.

Você deve resolver todos os conflitos de merge para poder fazer merge de uma pull request no {% data variables.product.product_name %}. Se tiver um conflito de merge entre o branch de comparação e o branch base em sua pull request você poderá exibir uma lista dos arquivos com alteração conflitantes acima do botão **Merge pull request** (Fazer merge da pull request). O botão **Merge pull request** (Fazer merge da pull request) permanecerá desativado até que você resolva todos os conflitos entre o branch de comparação e o branch base.

![mensagem de erro de conflito de merge](/assets/images/help/pull_requests/merge_conflict_error_on_github.png)

### Resolver conflitos de merge

Para resolver um conflito de merge, é preciso editar manualmente o arquivo em conflito para selecionar as alterações que deseja manter no merge final. Há duas maneiras diferentes de resolver um conflito de merge:

- Se o conflito de merge foi causado pela concorrência de alterações na linha, como quando as pessoas fazem alterações diferentes na mesma linha do mesmo arquivo em diferentes branches no seu repositório Git, você poderá resolvê-lo no {% data variables.product.product_name %} usando o editor de conflitos. Para obter mais informações, consulte "[Resolver um conflito de merge no {% data variables.product.prodname_dotcom %}](/articles/resolving-a-merge-conflict-on-github)".
- Quanto a todos os outros tipos de conflito de merge, você deve resolvê-los em um clone local do repositório e fazer push da alteração no seu branch do {% data variables.product.product_name %}. Você pode usar a linha de comando ou uma ferramenta como o [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) para fazer push das alterações. Para obter mais informações, consulte "[Resolver um conflito de merge na linha de comando](/articles/resolving-a-merge-conflict-using-the-command-line)".

Se você tiver um conflito de merge na linha de comando, não será possível fazer push das alterações locais no {% data variables.product.product_name %} até que o conflito de merge seja resolvido localmente no computador. Se você tentar fazer merge dos branches que têm um conflito de merge na linha de comando, uma mensagem de erro será exibida. Para obter mais informações, consulte "[Resolver um conflito de merge usando a linha de comando](/articles/resolving-a-merge-conflict-using-the-command-line/)".
```shell
$ git merge <em>BRANCH-NAME</em>
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

### Leia mais

- "[Sobre merges de pull request](/articles/about-pull-request-merges/)"
- "[Sobre pull requests](/articles/about-pull-requests)"
- "[Resolver um conflito de merge usando a linha de comando](/articles/resolving-a-merge-conflict-using-the-command-line)"
- "[Revolver um conflito de merge no GitHub](/articles/resolving-a-merge-conflict-on-github)"
