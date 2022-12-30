---
title: GitHub Mobile
intro: 'Faça triagem, colabore e gerencie seu trabalho no {% data variables.product.product_name %} do seu dispositivo móvel.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Mobile
redirect_from:
  - /get-started/using-github/github-for-mobile
  - /github/getting-started-with-github/github-for-mobile
  - /github/getting-started-with-github/using-github/github-for-mobile
ms.openlocfilehash: a9af0848fdc26c5efd3dfb2d00076e3af5fb00bc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508445'
---
## Sobre o {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

O {% data variables.product.prodname_mobile %} oferece a você uma forma de realizar trabalhos de alto impacto no {% data variables.product.product_name %} rapidamente e em qualquer lugar. O {% data variables.product.prodname_mobile %} é uma forma segura e confiável de acessar seus dados do {% data variables.product.product_name %} por meio de um aplicativo cliente interno e confiável.

Com o {% data variables.product.prodname_mobile %} você pode:

- Gerenciar, fazer triagem e limpar notificações
- Leia, analisar e colaborar em problemas e pull requests
- Pesquisar, navegar e interagir com usuários, repositórios e organizações
- Receber uma notificação por push quando alguém mencionar seu nome de usuário {% ifversion fpt or ghec %}– Proteger sua conta do GitHub.com com a autenticação de dois fatores
- Verificar as tentativas de entrada em dispositivos não reconhecidos{% endif %}

Para obter mais informações sobre as notificações do {% data variables.product.prodname_mobile %}, confira "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)".

{% ifversion fpt or ghec %}– Para obter mais informações sobre autenticação de dois fatores usando {% data variables.product.prodname_mobile %}, veja "[Configurando {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) e [Autenticação usando {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication##verifying-with-github-mobile)". {% endif %}

## Como instalar o {% data variables.product.prodname_mobile %}

Para instalar o {% data variables.product.prodname_mobile %} para Android ou iOS, confira [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

## Gerenciamento de contas

Você pode estar conectado simultaneamente em um celular com uma conta pessoal no {% data variables.product.prodname_dotcom_the_website %} e com uma conta pessoal no {% data variables.product.prodname_ghe_server %}. Para obter mais informações sobre nossos diferentes produtos, confira "[Produtos do {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)".

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} pode não funcionar com a sua empresa se for necessário acessar sua empresa através da VPN.

### Pré-requisitos

Você precisa instalar {% data variables.product.prodname_mobile %} 1.4 ou superior no seu dispositivo para usar {% data variables.product.prodname_mobile %} com {% data variables.product.prodname_ghe_server %}.

Para usar {% data variables.product.prodname_mobile %} com {% data variables.product.prodname_ghe_server %}, {% data variables.product.product_location %} deve ser a versão 3.0 ou superior, e o proprietário da empresa deverá habilitar o suporte móvel para a sua empresa. Para obter mais informações, confira {% ifversion ghes %}"[Notas sobre a versão](/enterprise-server/admin/release-notes)" e {% endif %}"[Como gerenciar o {% data variables.product.prodname_mobile %} para sua empresa]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise){% ifversion not ghes %}" na documentação do {% data variables.product.prodname_ghe_server %}.{% else %}".{% endif %}

Durante o beta do {% data variables.product.prodname_mobile %} com o {% data variables.product.prodname_ghe_server %}, você deve estar conectado com uma conta pessoal no {% data variables.product.prodname_dotcom_the_website %}.

### Adicionar, alternar ou encerrar a sessão das contas

Você pode se conectar no dispositivo móvel com uma conta pessoal no {% data variables.product.prodname_ghe_server %}. Na parte inferior do aplicativo, mantenha pressionado {% octicon "person" aria-label="The person icon" %} **Perfil** e toque em {% octicon "plus" aria-label="The plus icon" %} **Adicionar Conta Corporativa**. Siga as instruções para efetuar o login.

Depois de efetuar o logon no dispositivo móvel com uma conta pessoal no {% data variables.product.prodname_ghe_server %}, você poderá alternar entre a conta e a sua conta no {% data variables.product.prodname_dotcom_the_website %}. Na parte inferior do aplicativo, mantenha pressionado {% octicon "person" aria-label="The person icon" %} **Perfil** e toque na conta para a qual deseja mudar.

Caso não precise mais acessar os dados da sua conta pessoal do {% data variables.product.prodname_ghe_server %} no {% data variables.product.prodname_mobile %}, saia da conta. Na parte inferior do aplicativo, mantenha pressionado {% octicon "person" aria-label="The person icon" %} **Perfil**, deslize o dedo para a esquerda na conta para sair e toque em **Sair**.

## Idiomas compatíveis com {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} está disponível nos seguintes idiomas.

- Inglês
- Japonês
- Português (Brasil)
- Chinês simplificado
- Espanhol

Se você configurar o idioma do seu dispositivo para um idioma compatível, {% data variables.product.prodname_mobile %} será o idioma-padrão. Altere o idioma do {% data variables.product.prodname_mobile %} no menu **Configurações** do {% data variables.product.prodname_mobile %}.

## Gerenciando links universais para {% data variables.product.prodname_mobile %} no iOS

{% data variables.product.prodname_mobile %} ativa automaticamente o Universal Links para iOS. Quando você clica em qualquer link {% data variables.product.product_name %}, a URL de destino vai abrir em {% data variables.product.prodname_mobile %} em vez do Safari. Para obter mais informações, confira [Links Universais](https://developer.apple.com/ios/universal-links/) no site do Desenvolvedor da Apple.

Para desabilitar os Links Universais, mantenha pressionado qualquer link do {% data variables.product.product_name %} e toque em **Abrir**. Toda vez que você tocar em um link do {% data variables.product.product_name %} no futuro, a URL de destino será aberta no Safari em vez de no {% data variables.product.prodname_mobile %}.

Para habilitar novamente os Links Universais, mantenha pressionado qualquer link do {% data variables.product.product_name %} e toque em **Abrir no {% data variables.product.prodname_dotcom %}** .

## Compartilhando feedback

Você pode enviar solicitações de recursos ou outros comentários para{% data variables.product.prodname_mobile %} em [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/mobile).

## Desativando versões beta para iOS

Se você estiver testando uma versão beta do {% data variables.product.prodname_mobile %} para iOS usando TestFlight, você pode deixar a versão beta a qualquer momento.

1. Em seu dispositivo iOS, abra o app TestFlight.
2. Em "Aplicativos", toque em **{% data variables.product.prodname_dotcom %}** .
3. Na parte inferior da página, toque em **Parar Teste**.
