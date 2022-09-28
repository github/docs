---
title: Definir seu perfil como privado
intro: Um perfil privado exibe apenas informações limitadas e oculta algumas atividades.
versions:
  fpt: '*'
topics:
  - Profiles
shortTitle: Set profile to private
ms.openlocfilehash: 51fd476bc77856b525ce3e991e4eb30e8a881361
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062911'
---
## Sobre perfis privados

{% note %}

**Observação:** os perfis privados estão atualmente em beta e estão sujeitos a alterações.

{% endnote %}

Para ocultar partes da página de perfil, você pode tornar seu perfil privado. Isso também oculta sua atividade em vários recursos sociais em {% data variables.product.prodname_dotcom_the_website %}. Um perfil privado oculta informações de todos os usuários e, no momento, não há opção para permitir que usuários específicos vejam sua atividade.

Depois de tornar seu perfil privado, você ainda poderá exibir todas as suas informações quando visitar seu perfil.

Perfis privados não podem receber patrocínios em [{% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors). Para ser elegível para {% data variables.product.prodname_sponsors %}, seu perfil não pode ser privado.

## Diferenças entre perfis públicos e privados

Quando seu perfil é privado, o seguinte conteúdo fica oculto na página do perfil:

- Conquistas e destaques.
- Visão geral da atividade e feed de atividades.
- Gráfico de contribuição.
- Contagens de seguidos e seguidores.
- Botões Seguir e Patrocinar.
- Associações da organização.
- Estrelas, projetos, pacotes e guias de patrocínio.

{% note %}

**Observação**: quando seu perfil é privado, alguns campos opcionais ainda são visíveis publicamente, como o README, biografia e foto do perfil.

{% endnote %}

## Alterações no relatório sobre suas atividades

Ao tornar seu perfil privado, você não removerá ou ocultará atividades anteriores; essa configuração só se aplica à sua atividade enquanto a configuração privada estiver habilitada.

Quando seu perfil é privado, sua atividade de {% data variables.product.prodname_dotcom_the_website %} não aparecerá nos seguintes locais:

- Feeds de atividades para outros usuários.
- Quadros de líderes de discussões.
- Página [Tendências](https://github.com/trending).

{% note %}

**Observação**: Sua atividade em repositórios públicos ainda será visível publicamente para qualquer pessoa que visualizar esses repositórios, e alguns dados de atividade ainda poderão estar disponíveis por meio da API {% data variables.product.prodname_dotcom %}.

{% endnote %}

## Alterar as configurações de privacidade do seu perfil

{% data reusables.user-settings.access_settings %}
1. Em "Contribuições & Atividade", marque a caixa de seleção ao lado de **Tornar o perfil privado e ocultar a atividade**.
{% data reusables.user-settings.update-preferences %}
