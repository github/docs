---
title: Por que o Git sempre solicita a minha senha?
intro: 'Se o Git solicita um nome de usuário e uma senha toda vez que você tenta interagir com o GitHub, provavelmente isso quer dizer que você está usando a URL de clone de HTTPS do seu repositório.'
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/getting-started-with-git/why-is-git-always-asking-for-my-password
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git passwords
ms.openlocfilehash: 06a8cf617072075f39a880ec58173e7cfbc5bc8a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126724'
---
Usar uma URL remota do tipo HTTPS tem algumas vantagens em comparação com o uso de SSH. É mais fácil configurar do que SSH e geralmente funciona por meio de firewalls e proxies rigorosos. No entanto, ele também pede que você insira suas credenciais de {% data variables.product.product_name %} sempre que você fizer pull ou push de um repositório. 

{% data reusables.user-settings.password-authentication-deprecation %}

Você pode evitar que a sua senha seja solicitada configurando o Git para [armazenar credenciais em cache](/github/getting-started-with-github/caching-your-github-credentials-in-git) para você. Uma vez que você configurado o armazenamento de credenciais, o Git usa automaticamente seu token de acesso pessoal armazenado quando você extrai ou faz push de um repositório usando HTTPS.

## Leitura adicional

- "[Sobre repositórios remotos](/github/getting-started-with-github/about-remote-repositories)".
- "[Sobre a autenticação no {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)"
- "[Adicionar sua chave SSH ao ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)"
