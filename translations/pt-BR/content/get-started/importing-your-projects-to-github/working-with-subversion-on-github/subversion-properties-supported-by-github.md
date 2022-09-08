---
title: Propriedades do Subversion com suporte no GitHub
intro: 'Existem vários fluxos de trabalho e propriedades do Subversion que são semelhantes a funções existentes no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/subversion-properties-supported-by-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Properties supported by GitHub
ms.openlocfilehash: 48c041509100455f6ffcf02d262fd12eafbbffbc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126704'
---
## Arquivos executáveis (`svn:executable`)

Convertemos as propriedades `svn:executable` atualizando o modo de arquivo diretamente antes de adicioná-lo ao repositório Git.

## Tipos MIME (`svn:mime-type`)

O {% data variables.product.product_name %} monitora internamente as propriedades tipo MIME de arquivos e os commits que as adicionaram.

## Ignorar itens sem controle de versão (`svn:ignore`)

Se você tiver definido arquivos e diretórios para serem ignorados no Subversion, eles serão monitorados internamente pelo {% data variables.product.product_name %}. Os arquivos ignorados pelos clientes do Subversion são completamente distintos das entradas de um arquivo *.gitignore*.

## Propriedades sem suporte atualmente

Atualmente, o {% data variables.product.product_name %} não dá suporte a `svn:externals`, a `svn:global-ignores` nem às propriedades não listadas acima, incluindo propriedades personalizadas.
