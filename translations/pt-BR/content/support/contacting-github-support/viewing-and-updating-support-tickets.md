---
title: Visualizando e atualizando tíquetes de suporte
intro: 'Você pode visualizar os seus tíquetes de suporte{% ifversion ghes or ghec %}, colaborar com colegas em tíquetes,{% endif %} e responder a {% data variables.contact.github_support %} usando o {% data variables.contact.support_portal %}.'
shortTitle: Managing your tickets
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
ms.openlocfilehash: 35c7b28232c0d11170ea9585480b2cfb1785ebd0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147051977'
---
## Sobre gestão de tíquetes

{% data reusables.support.zendesk-old-tickets %}

Use o [Portal de Suporte do GitHub](https://support.github.com/) para ver tíquetes de suporte atuais e anteriores e responder ao {% data variables.contact.github_support %}. Após 120 dias, os tíquetes resolvidos serão arquivados{% ifversion ghec or ghes or ghae %} e poderão ser exibidos apenas por contas corporativas{% endif %}.

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

## Exibir seus tíquetes de suporte recentes

{% data reusables.support.view-open-tickets %}
1. Na caixa de texto, você pode ler o histórico de comentários. A resposta mais recente está na parte superior.
![Captura de tela do histórico de comentários do tíquete com a resposta mais recente no início.](/assets/images/help/support/support-recent-response.png)

{% ifversion ghec or ghes or ghae %}

## Exibir seus tíquetes de suporte arquivados

Você só pode exibir tíquetes arquivados para uma conta corporativa.

{% data reusables.support.navigate-to-my-tickets %}
1. Selecione o menu suspenso **Meus Tíquetes** e clique no nome da conta corporativa. 

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}

   ![Captura de tela do menu suspenso "Meus Ingressos".](/assets/images/help/support/ticket-context.png)
1. Na tabela "Meus tíquetes", clique em **Exibir tíquetes arquivados**.

{% endif %}

## Atualizando suporte a tíquetes

{% data reusables.support.view-open-tickets %}
1. Opcionalmente, se o problema for resolvido, na caixa de texto, clique em **Fechar tíquete**.
![Captura de tela que mostra o local do botão "Fechar tíquete".](/assets/images/help/support/close-ticket.png)
1. Para responder ao suporte do GitHub e adicionar um novo comentário ao tíquete, digite sua resposta na caixa de texto.
![Captura de tela do campo de texto "Adicionar um comentário".](/assets/images/help/support/new-comment-field.png)
1. Para adicionar seu comentário ao tíquete, clique em **Comentário**.
![Captura de tela do botão "Comentário".](/assets/images/help/support/add-comment.png)

{% ifversion ghec or ghes %}
## Colaborando nos tíquetes de suporte

Você pode colaborar com seus colegas nos tíquetes de suporte usando o portal de suporte. Proprietários, gerentes de cobrança e outros integrantes da empresa com direitos de suporte podem ver tíquetes associados a uma conta corporativa ou a uma organização gerenciada por uma conta corporativa. Para obter mais informações, confira "[Como gerenciar os direitos de suporte para sua empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".

Além de visualizar os tíquetes, você também pode adicionar comentários para apoiar os tíquetes se seu endereço de e-mail foi copiado no tíquete ou se a pessoa que abriu o tíquete usou um endereço de e-mail com um domínio verificado para a conta corporativa ou organização gerenciada por uma conta corporativa. Para obter mais informações sobre como verificar um domínio, confira "[Como verificar ou aprovar um domínio para sua empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)" e "[Como verificar ou aprovar um domínio para sua organização](/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".

{% endif %}

## Leitura adicional

- "[Sobre o Suporte do GitHub](/support/learning-about-github-support/about-github-support)"
