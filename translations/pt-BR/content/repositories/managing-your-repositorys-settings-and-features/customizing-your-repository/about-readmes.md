---
title: Sobre LEIAMEs
intro: 'Você pode adicionar um arquivo README ao seu repositório para informar outras pessoas por que seu projeto é útil, o que elas podem fazer com o projeto e como elas podem usá-lo.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages
  - /articles/relative-links-in-readmes
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 7a18ed7051b0babdb5408821ce44a728968869d5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108262'
---
## Sobre LEIAMEs

É possível adicionar um arquivo README a um repositório para comunicar informações importantes sobre o seu projeto. Um LEIAME, junto com uma licença de repositório, um arquivo de citação{% ifversion fpt or ghec %}, diretrizes de contribuição e um código de conduta{% elsif ghes %} e diretrizes de contribuição{% endif %}, comunica as expectativas do projeto e ajuda você a gerenciar contribuições.

Para obter mais informações sobre como fornecer diretrizes para seu projeto, confira {% ifversion fpt or ghec %}"[Como adicionar um código de conduta ao seu projeto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" e {% endif %}"[Como configurar seu projeto para contribuições benéficas](/communities/setting-up-your-project-for-healthy-contributions)".

Um README, muitas vezes, é o primeiro item que um visitante verá ao visitar seu repositório. Os arquivos README geralmente incluem informações sobre:
- O que o projeto faz
- Por que o projeto é útil
- Como os usuários podem começar a usar o projeto
- Onde os usuários podem obter ajuda com seu projeto
- Quem mantém e contribui com o projeto

Se você colocar o arquivo LEIAME no `.github` oculto do seu repositório, na raiz ou no diretório `docs`, o {% data variables.product.product_name %} reconhecerá e exibirá automaticamente o LEIAME para os visitantes do repositório.

Se um repositório contiver mais de um arquivo README, o arquivo mostrado nos links será escolhido nos locais na seguinte ordem: o diretório `.github`, o diretório raiz do repositório e, por fim, o diretório `docs`.

![Página principal do repositório github/scientist e seu arquivo README](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

![Arquivo README no nome de usuário/repositório do nome de usuário](/assets/images/help/repository/username-repo-with-readme.png)

## Índice gerado automaticamente para arquivos README

Para a visualização interpretada de qualquer arquivo Markdown em um repositório, incluindo arquivos README {% data variables.product.product_name %} irá gerar automaticamente um índice com base nos títulos da seção. Você pode visualizar o índice para um arquivo LEIAME, clicando no ícone de menu {% octicon "list-unordered" aria-label="The unordered list icon" %} no canto superior esquerdo da página interpretada.

![README com TOC gerado automaticamente](/assets/images/help/repository/readme-automatic-toc.png)

## Links de seção nos arquivos README e páginas blob

{% data reusables.repositories.section-links %}

## Links relativos e caminhos de imagem em arquivos README

{% data reusables.repositories.relative-links %}

## Wikis

Um README deve conter apenas as informações necessárias para desenvolvedores começarem a usar e a contribuir para o seu projeto. A documentação mais longa é mais adequada para wikis. Para obter mais informações, confira "[Sobre os wikis](/communities/documenting-your-project-with-wikis/about-wikis)".

## Leitura adicional

- "[Como adicionar um arquivo a um repositório](/articles/adding-a-file-to-a-repository)"
- "[Como tornar os READMEs legíveis](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)" {%- ifversion fpt or ghec %} da 18F 
- "[Como adicionar uma notificação 'Abrir no GitHub Codespaces'](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)" {%- endif %}   
