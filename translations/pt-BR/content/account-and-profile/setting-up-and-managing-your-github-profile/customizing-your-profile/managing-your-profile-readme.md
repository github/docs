---
title: Gerenciar o README do seu perfil
intro: 'Você pode adicionar um README ao seu perfil de{% data variables.product.prodname_dotcom %} para contar a outras pessoas sobre você.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
redirect_from:
  - /github/setting-up-and-managing-your-github-profile/managing-your-profile-readme
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
shortTitle: Your profile README
ms.openlocfilehash: 587bcea1e1a0f96aad8882b41196afcc6e433363
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578897'
---
## Sobre o README do seu perfil

Você pode compartilhar informações sobre si mesmo com a comunidade no {% data variables.product.product_location %} criando um LEIAME do perfil. {% data variables.product.prodname_dotcom %} mostra o README do seu perfil na parte superior da sua página de perfil.

Você decide quais informações incluir no README do seu perfil. Portanto, você tem total controle sobre a forma como se apresenta no {% data variables.product.prodname_dotcom %}. Aqui estão alguns exemplos de informações que os visitantes podem achar interessantes, divertidas ou úteis no README do seu perfil.

- Uma seção "Sobre mim" que descreve seu trabalho e seus interesses
- Contribuições das quais você está orgulhoso, bem como contexto dessas contribuições
- Orientação para obter ajuda nas comunidades onde você está envolvido

![Arquivo README do perfil exibido no perfil](/assets/images/help/repository/profile-with-readme.png)

Você pode formatar texto e incluir emoji, imagens e GIFs no seu perfil README usando o markdown específico do {% data variables.product.company_short %}. Para obter mais informações, confira "[Introdução à escrita e à formatação no {% data variables.product.prodname_dotcom %}](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)".

## Pré-requisitos

O GitHub irá exibir o README do seu perfil na sua página de perfil se todas as informações a seguir forem verdadeiras.

- Você criou um repositório com um nome que corresponde ao nome de usuário do {% data variables.product.prodname_dotcom %}.
- O repositório é público.
- O repositório contém um arquivo denominado README.md na sua raiz.
- O arquivo README.md contém qualquer conteúdo.

{% note %}

**Observação**: se você criou um repositório público com o mesmo nome do nome de usuário antes de julho de 2020, o {% data variables.product.prodname_dotcom %} não mostra automaticamente o LEIAME do repositório no seu perfil. Você pode compartilhar manualmente o LEIAME do repositório para o seu perfil acessando o repositório no {% data variables.product.prodname_dotcom_the_website %} e clicando em **Compartilhar no perfil**.

![Botão para compartilhar o README no perfil](/assets/images/help/repository/share-to-profile.png)

{% endnote %}

## Adicionar um README do perfil

{% data reusables.repositories.create_new %}
2. Em "Nome do repositório", digite um nome de repositório que corresponde ao nome de usuário do {% data variables.product.prodname_dotcom %}. Por exemplo, se seu nome de usuário for "octocat", o nome do repositório deverá ser "octocat".
  ![Campo de nome do repositório que corresponde ao nome de usuário](/assets/images/help/repository/repo-username-match.png)
3. Opcionalmente, adicione uma descrição do repositório. Por exemplo, "Meu repositório pessoal".
  ![Campo usado para inserir uma descrição do repositório](/assets/images/help/repository/create-personal-repository-desc.png)
4. Selecione **Público**.
 ![Botão de opção usado para selecionar a visibilidade com o público-alvo selecionado](/assets/images/help/repository/create-personal-repository-visibility.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. Acima da barra lateral direita, clique em **Editar LEIAME**.
  ![Botão usado para editar o arquivo LEIAME](/assets/images/help/repository/personal-repository-edit-readme.png)
  
  O arquivo README gerado é pré-preenchido com um modelo para dar alguma inspiração para o README do seu perfil.
  ![Arquivo LEIAME com modelo preenchido previamente](/assets/images/help/repository/personal-repository-readme-template.png)

Para ver um resumo de todos os emojis disponíveis e os respectivos códigos, confira "[Folha de referências de emojis](https://www.webfx.com/tools/emoji-cheat-sheet/)".

## Remover um README do perfil

O perfil README é removido do seu perfil de {% data variables.product.prodname_dotcom %} se algum dos pontos seguintes se aplicar:

- O arquivo README está vazio ou não existe.
- O repositório é privado.
- O nome do repositório não corresponde mais ao seu nome de usuário.

The method you choose is dependant upon your needs, but if you're unsure, we recommend making your repository private. Para ver as etapas de como tornar seu repositório privado, confira "[Como alterar a visibilidade de um repositório](/github/administering-a-repository/setting-repository-visibility#changing-a-repositorys-visibility)".

## Leitura adicional

- "[Sobre os arquivos LEIAME](/github/creating-cloning-and-archiving-repositories/about-readmes)"
