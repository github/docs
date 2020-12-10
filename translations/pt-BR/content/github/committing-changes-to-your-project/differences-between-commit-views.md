---
title: Diferenças entre exibições de commit
redirect_from:
  - /articles/differences-between-commit-views
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

No {% data variables.product.product_name %}, é possível ver o histórico de commits de um repositório:

- Navegando diretamente para [a página de commits](https://github.com/mozilla/rust/commits/master) de um repositório
- Clicando em um arquivo e depois em **History** (Histórico) para obter [o histórico de commits de um determinado arquivo](https://github.com/mozilla/rust/commits/master/README.md)

Essas duas exibições de commit podem mostrar informações _diferentes_ às vezes. O histórico referente a um único arquivo pode omitir commits encontrados no histórico de commits do repositório.

O Git tem várias formas diferentes de mostrar o histórico de um repositório. Quando o Git mostra o histórico de um único arquivo, ele simplifica o histórico omitindo commits que não alteraram o arquivo. Em vez de analisar cada commit para decidir se ele alterou o arquivo, o Git omitirá um branch inteiro se esse branch, após o merge, não tiver afetado o conteúdo final do arquivo. Os commits no branch que alterou o arquivo não serão mostrados.

O {% data variables.product.product_name %} segue explicitamente essa estratégia simples no histórico de commits de um arquivo. Ele simplifica o histórico ao remover commits que não contribuem para o resultado final. Por exemplo, se um branch lateral tiver feito uma alteração e depois revertido, esse commit não aparecerá no histórico do branch. Isso torna a análise de branches mais eficiente, já que você só visualiza os commits que afetam o arquivo.

É possível que essa exibição truncada nem sempre contenha as informações que você procura. Para quem queira ver o histórico inteiro, o {% data variables.product.product_name %} oferece uma exibição com mais informações na página de commits de um repositório.

Para obter mais informações sobre como o Git considera o histórico de commits, consulte a seção ["Simplificação do histórico"](https://git-scm.com/docs/git-log#_history_simplification) do artigo da Ajuda sobre `git log`.

### Leia mais

- "[Assinar commits](/articles/signing-commits)"
- "[Pesquisar commits](/articles/searching-commits)"
