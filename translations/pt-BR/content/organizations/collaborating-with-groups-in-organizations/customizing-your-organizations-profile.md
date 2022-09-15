---
title: Personalizando o perfil da sua organização
intro: Você pode compartilhar informações sobre a organização personalizando o perfil dela.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
topics:
  - Organizations
shortTitle: Customize organization profile
ms.openlocfilehash: 66f234427f6e47213578e8f906e123d98c07a092
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147447927'
---
## Sobre a página de perfil da sua organização

{% ifversion org-profile-pin-private %} É possível personalizar a página de visão geral da organização para mostrar os repositórios fixados e o LEIAME dedicados aos usuários públicos ou aos membros da organização.

![Imagem de uma página de perfil de organização pública](/assets/images/help/organizations/public_profile.png)

Os membros da sua organização que estão conectados a {% data variables.product.prodname_dotcom %} podem selecionar uma exibição `member` ou `public` dos repositórios fixados e do LEIAME quando visitarem a página de perfil da sua organização. 

![Imagem de um comutador de contexto de exibição de página de perfil de organização pública](/assets/images/help/organizations/profile_view_switcher_public.png)

A exibição usa `member` como padrão se um LEIAME ou repositórios fixados somente para membros estiverem presentes, e usa `public` caso contrário.

![Imagem de uma página de perfil da organização somente para membros](/assets/images/help/organizations/member_only_profile.png)

Os usuários que não são membros da sua organização verão uma exibição `public`.

### Repositórios fixos

Você pode fornecer aos usuários acesso fácil a repositórios importantes ou frequentemente usados, escolhendo até seis repositórios para usuários públicos e seis repositórios para membros da organização. Depois de fixar repositórios no perfil da organização, a seção "Fixada" será mostrada acima da seção "Repositórios" da página de perfil.

Somente os proprietários da organização podem fixar repositórios. Para obter mais informações, confira "[Como fixar repositórios no seu perfil da sua organização](#pinning-repositories-to-your-organizations-profile)".

### READMEs de perfil de organização

{% endif %}

Você pode compartilhar informações sobre como se envolver com sua organização criando um README de perfil de organização para usuários públicos e membros da organização. {% data variables.product.prodname_dotcom %} mostra o README do perfil da sua organização na aba "Visão geral" da sua organização.

Você pode escolher quais informações incluir no README do perfil da sua organização. Veja alguns exemplos de informações que podem ser úteis.

- Uma seção "Sobre" que descreve sua organização
- Orientação para obter ajuda na organização

Você pode formatar o texto e incluir emoji, imagens e GIFs no README do perfil da sua organização usando o Markdown enriquecido de {% data variables.product.company_short %}. Para obter mais informações, confira "[Introdução à escrita e à formatação no {% data variables.product.prodname_dotcom %}](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)".

## Adicionando um README de perfil da organização pública

1. Se a sua organização ainda não tiver um repositório `.github` público, crie um repositório `.github` público.
2. No repositório `.github` da sua organização, crie um arquivo `README.md` na pasta `profile`.
3. Faça commit das alterações no arquivo `README.md`. O conteúdo do `README.md` será exibido no perfil público da sua organização.

   ![Imagem do README público de uma organização](/assets/images/help/organizations/org_public_readme.png)

{% ifversion org-profile-pin-private %}

## Adicionando um README de perfil de organização somente membro

1. Se a sua organização ainda não tiver um repositório `.github-private`, crie um repositório privado chamado `.github-private`. 
2. No repositório `.github-private` da sua organização, crie um arquivo `README.md` na pasta `profile`.
3. Faça commit das alterações no arquivo `README.md`. O conteúdo do `README.md` será mostrado na exibição de membro do perfil da sua organização.

   ![Imagem do README somente para membros de uma organização](/assets/images/help/organizations/org_member_readme.png)

## Fixando repositórios no perfil da sua organização

Você pode fixar repositórios que deseja apresentar, como aqueles que são usados com frequência, na página de perfil da sua organização. Para escolher quais repositórios fixar no perfil da organização, você deve ser um proprietário ou administrador da organização.

1. Navegue até a página de perfil da sua organização.
2. Na barra lateral direita da página no link {% octicon "eye" aria-label="The eye octicon" %} "Exibir como", escolha a exibição de perfil **Público** ou **Membro** no menu suspenso.

   ![Imagem da exibição do menu suspenso do perfil da organização](/assets/images/help/organizations/org_profile_view.png)

3. Na seção de repositórios fixados, selecione **Personalizar fixações**.

   ![Imagem do link personalizar fixações](/assets/images/help/organizations/customize_pins_link.png)

   - Se você ainda não fixou nenhum repositório no perfil da sua organização, precisará clicar em **fixar repositórios** na barra lateral direita da página de perfil.
   ![Imagem do link fixar repositórios na barra lateral direita](/assets/images/help/organizations/pin_repositories_link.png)

4. Na caixa de diálogo "Editar repositórios fixados", selecione uma combinação de até seis repositórios públicos, {% ifversion not fpt %}privados ou internos{% else %}ou privados {% endif %} para exibir.

   ![Imagem da caixa de diálogo do repositório fixado](/assets/images/help/organizations/pinned_repo_dialog.png)

5. Clique em **Salvar marcadores**.

{% endif %}
