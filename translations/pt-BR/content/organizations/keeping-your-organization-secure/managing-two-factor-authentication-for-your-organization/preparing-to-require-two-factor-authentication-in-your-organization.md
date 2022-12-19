---
title: Preparar para exigir autenticação de dois fatores na organização
intro: 'Antes de exigir autenticação de dois fatores (2FA), é possível notificar os usuários sobre as próximas mudanças e verificar quem já utiliza 2FA.'
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-require-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to require 2FA
ms.openlocfilehash: 67083113143145a6de7bba5412568609414f12a8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126492'
---
Recomendamos que você notifique {% ifversion fpt or ghec %}os membros da organização, os colaboradores externos e os gerentes de cobrança{% else %}os membros da organização e os colaboradores externos{% endif %} pelo menos uma semana antes de exigir a 2FA na sua organização.

Se você exigir o uso da autenticação de dois fatores na organização, os integrantes, colaboradores externos e gerentes de cobrança (inclusive contas bots) que não usam 2FA serão removidos da organização e perderão acesso aos repositórios dela. Eles também perderão acesso às bifurcações dos repositórios privados da organização.

Antes de exigir 2FA na organização, recomendamos que você:
  - [Habilite a 2FA](/articles/securing-your-account-with-two-factor-authentication-2fa/) na sua conta pessoal
  - Solicite às pessoas da organização para configurar 2FA na conta delas
  - Veja se [os usuários da sua organização têm a 2FA habilitada](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/)
  - Alerte os usuários que assim que a 2FA estiver habilitada, aqueles que não a tiverem habilitado serão automaticamente removidos da organização
