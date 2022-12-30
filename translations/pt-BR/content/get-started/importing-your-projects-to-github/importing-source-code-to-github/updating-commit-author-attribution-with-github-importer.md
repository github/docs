---
title: Atualizar atribuição de autor do commit com o Importador do GitHub
intro: 'Durante uma importação, é possível corresponder os commits no repositório com a conta do GitHub do autor do commit.'
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/updating-commit-author-attribution-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Update author GitHub Importer
ms.openlocfilehash: 900f71e966f8f8f00a4645286b52592abf06ac48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126711'
---
O Importador do GitHub procura usuários do GitHub cujos endereços de e-mail correspondam aos autores dos commits no repositório que está sendo importado. Você poderá então conectar um commit ao seu autor usando o endereço de e-mail dele ou o nome de usuário do autor no GitHub.

## Atualizar autores do commit

1. Depois de importar seu repositório, na página de status de importação, clique em **Fazer a correspondência de autores**.
![Botão Fazer a correspondência de autores](/assets/images/help/importer/match-authors-button.png)
2. Ao lado do autor cujas informações você deseja atualizar, clique em **Conectar**.
![Lista de autores do commit](/assets/images/help/importer/connect-commit-author.png)
3. Digite o endereço de email ou o nome de usuário do GitHub do autor e pressione **ENTER**.

## Atribuir commits a um usuário do GitHub com endereço de e-mail público

Se o autor de um commit no seu repositório importado tiver uma conta do GitHub associada ao endereço de email usado para criar os commits e não [tiver definido o endereço de email de commit dele como privado](/articles/setting-your-commit-email-address), o Importador do GitHub corresponderá o endereço de email associado ao commit ao endereço de email público associado à conta do GitHub do autor e atribuirá o commit à conta do GitHub dele.

## Atribuir commits a um usuário do GitHub sem endereço de e-mail público

Se o autor de um commit no seu repositório importado não definiu um endereço de email público no perfil do GitHub nem [definiu o endereço de email de commit como privado](/articles/setting-your-commit-email-address), talvez o Importador do GitHub não consiga corresponder o endereço de email associado ao commit à conta do GitHub dele.

O autor do commit pode resolver isso definindo o endereço de e-mail dele como privado. Em seguida, os commits serão atribuídos a `<username>@users.noreply.github.com`, e os commits importados serão associados à conta do GitHub dele.

## Atribuir commits usando um endereço de e-mail

Se o endereço de email do autor não estiver associado à conta do GitHub dele, ele poderá [adicionar o endereço à conta](/articles/adding-an-email-address-to-your-github-account) após a importação, e os commits serão atribuídos corretamente.

Caso o autor não tenha uma conta do GitHub, o Importador do GitHub atribuirá os commits dele ao endereço de e-mail associado aos commits.

## Leitura adicional

- "[Sobre o Importador do GitHub](/articles/about-github-importer)"
- "[Como importar um repositório com o Importador do GitHub](/articles/importing-a-repository-with-github-importer)"
- "[Como adicionar um endereço de email à sua conta](/articles/adding-an-email-address-to-your-github-account/)"
- "[Como configurar seu endereço de email de commit](/articles/setting-your-commit-email-address)"
