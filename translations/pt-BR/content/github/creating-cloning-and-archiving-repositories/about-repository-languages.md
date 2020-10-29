---
title: Sobre linguagens do repositório
intro: Os arquivos e diretórios em um repositório determinam as linguagens que compõem o repositório. É possível exibir linguagens de um repositório para obter uma visão geral rápida do repositório.
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language/
  - /articles/why-isn-t-my-favorite-language-recognized/
  - /articles/my-repo-is-marked-as-the-wrong-language/
  - /articles/why-isn-t-sql-recognized-as-a-language/
  - /articles/why-isn-t-my-favorite-language-recognized-by-github/
  - /articles/about-repository-languages
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.product.product_name %} usa [Biblioteca Linguist](https://github.com/github/linguist) a de código aberto para
determinar as linguagens de arquivo para destacar a sintaxe e estatísticas do repositório. As estatísticas da linguagem serão atualizadas após você fazer push de alterações no seu branch-padrão.

Alguns arquivos são difíceis de identificar e, às vezes, os projetos contêm mais arquivos de fornecedor e biblioteca do que código primário. Se estiver recebendo resultados incorretos, consulte o [guia de solução de problemas](https://github.com/github/linguist#troubleshooting) do Linguist para obter ajuda.

### Linguagens markup

As linguagens markup são renderizadas para HTML e exibidas em linha usando nossa [Biblioteca de markup](https://github.com/github/markup) de código aberto. Neste momento, não estamos aceitando novas linguagens markup a serem mostradas no {% data variables.product.product_name %}. No entanto, mantemos de maneira ativa nossas linguagens markup atuais. Em caso de dificuldades, [crie um problema](https://github.com/github/markup/issues/new).
