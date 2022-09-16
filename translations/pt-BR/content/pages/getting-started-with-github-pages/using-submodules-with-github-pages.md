---
title: Usar submódulos com o GitHub Pages
intro: 'Você pode usar submódulos com o {% data variables.product.prodname_pages %} para incluir outros projetos no código do seu site.'
redirect_from:
  - /articles/using-submodules-with-pages
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Use submodules with Pages
ms.openlocfilehash: cfe863c3a7d77d006ee4c78e9d58302fb01e4dd4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880795'
---
Se o repositório do seu site do {% data variables.product.prodname_pages %} contiver submódulos, o conteúdo dele será inserido automaticamente quando o site for criado.

Só é possível usar submódulos que apontem para repositórios públicos, porque o servidor do {% data variables.product.prodname_pages %} não pode acessar repositórios privados.

Use a URL somente leitura `https://` para os submódulos, inclusive os aninhados. Essa alteração pode ser feita no arquivo _.gitmodules_.

## Leitura adicional

- "[Ferramentas do Git – Submódulos](https://git-scm.com/book/en/Git-Tools-Submodules)" do _Livro Pro Git_
- "[Solução de problemas de erros de build do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
