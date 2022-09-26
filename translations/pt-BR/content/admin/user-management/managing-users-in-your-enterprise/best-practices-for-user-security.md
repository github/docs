---
title: Práticas recomendadas de segurança de usuários
intro: '{% ifversion ghes %}Medidas de segurança fora do nível da instância (SSL, isolamento de subdomínio, configuração de um firewall) que um administrador do site pode implementar, há {% else %}Há{% endif %}etapas que os usuários podem seguir para ajudar a proteger a empresa.'
redirect_from:
  - /enterprise/admin/user-management/best-practices-for-user-security
  - /admin/user-management/best-practices-for-user-security
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Security
  - User account
shortTitle: User security best practices
ms.openlocfilehash: 57d19d97a8944ac20d6b90794bcf0cda63fc5bd0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '146331653'
---
{% ifversion ghes %}
## Habilitar a autenticação de dois fatores

A autenticação de dois fatores (2FA) é uma modalidade de login em sites e serviços que exige outro fator além da senha. No caso do {% data variables.product.prodname_ghe_server %}, o segundo fator é um código de autenticação exclusivo gerado por um aplicativo no smartphone do usuário. É altamente recomendável pedir que os usuários habilitem a autenticação de dois fatores em suas contas. Com a autenticação de dois fatores, a senha e o smartphone do usuário teriam que ser comprometidos para violar a conta.

Para saber mais sobre como configurar a autenticação de dois fatores, confira “[Sobre autenticação de dois fatores](/enterprise/user/articles/about-two-factor-authentication)”.
{% endif %}

## Exigir um gerenciador de senhas

Recomendamos exigir que os usuários instalem e usem um gerenciador de senhas, como [LastPass](https://lastpass.com/) ou [1Password](https://1password.com/), em qualquer computador que eles usem para se conectar à sua empresa. Essa medida garante senhas mais fortes e muito menos passíveis de violação ou roubo.

## Restringir o acesso a equipes e repositórios

Para limitar a superfície de ataque em caso de violações de segurança, é altamente recomendável liberar o acesso dos usuários somente a equipes e repositórios essenciais para eles trabalharem. Como os integrantes com função de Proprietário podem acessar todas as equipes e repositórios da organização, é altamente recomendável manter o mínimo possível de pessoas nessa equipe.

Para saber mais sobre como configurar equipes e permissões de equipe, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".
