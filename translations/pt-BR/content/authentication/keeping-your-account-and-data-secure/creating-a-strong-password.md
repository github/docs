---
title: Criar uma senha forte
intro: 'Proteja sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} com uma senha forte e única usando um gerenciador de senhas.'
redirect_from:
  - /articles/what-is-a-strong-password
  - /articles/creating-a-strong-password
  - /github/authenticating-to-github/creating-a-strong-password
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a strong password
ms.openlocfilehash: 97473f9b04c8d033471f89cac9a0b0d08bebcba3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145083633'
---
Você deve escolher ou gerar uma senha para a sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} que seja pelo menos:
- {% ifversion ghes %}Sete{% else %}Oito{% endif %} caracteres, se ele incluir um número e uma letra minúscula, ou
- 15 caracteres em qualquer combinação

Para manter sua conta protegida, é recomendável seguir estas práticas recomendadas:
- Use um gerenciador de senhas como o [LastPass](https://lastpass.com/) ou o [1Password](https://1password.com/) para gerar uma senha de, no mínimo, 15 caracteres.
- Gere uma senha exclusiva para o {% data variables.product.product_name %}. Se você usar sua senha {% data variables.product.product_name %} em outro lugar e o serviço estiver comprometido, os invasores ou outros atores maliciosos poderiam usar essa informação para acessar sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

- Configure a autenticação de dois fatores para sua conta pessoal. Para obter mais informações, confira "[Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)".
- Nunca compartilhe sua senha, mesmo com um possível colaborador. Cada pessoa deve usar a própria conta pessoal no {% data variables.product.product_name %}. Para obter mais informações sobre as formas de colaboração, confira: "[Como convidar colaboradores para um repositório pessoal](/articles/inviting-collaborators-to-a-personal-repository)", "[Sobre os modelos de desenvolvimento colaborativos](/articles/about-collaborative-development-models/)" ou "[Como colaborar com grupos em organizações](/organizations/collaborating-with-groups-in-organizations/)".

{% data reusables.repositories.blocked-passwords %}

Você só pode usar sua senha para entrar no {% data variables.product.product_name %} usando seu navegador. Ao efetuar a autenticação no {% data variables.product.product_name %} de outra forma, como, por exemplo, linha de comando ou API, você deve usar outras credenciais. Para obter mais informações, confira "[Sobre a autenticação no {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)". 

{% ifversion fpt or ghec %}{% data reusables.user-settings.password-authentication-deprecation %}{% endif %}

## Leitura adicional

- "[Como armazenar em cache suas credenciais do {% data variables.product.product_name %} no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
- "[Como manter sua conta e seus dados seguros](/articles/keeping-your-account-and-data-secure/)"
