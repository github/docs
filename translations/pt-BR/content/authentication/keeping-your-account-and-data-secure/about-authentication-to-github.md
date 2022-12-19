---
title: Sobre a autenticação no GitHub
intro: 'Você pode acessar com segurança os recursos da sua conta efetuando a autenticação no {% data variables.product.product_name %} e usando credenciais diferentes dependendo de onde você efetua a autenticação.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/about-authentication-to-github
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github
shortTitle: Authentication to GitHub
ms.openlocfilehash: d40d3e18c75c2e5d8f16ebbb4fd9b6fdf03e2a73
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718090'
---
## Sobre autenticação no {% data variables.product.prodname_dotcom %}

Para manter sua conta segura, você precisa se autenticar antes de acessar{% ifversion not ghae %} alguns{% endif %} recursos do {% data variables.product.product_name %}. Ao efetuar a autenticação em {% data variables.product.product_name %}, você fornece ou confirma credenciais que são exclusivas que provam quem você declara ser.

Você pode acessar seus recursos em {% data variables.product.product_name %} de várias formas: no navegador, por meio do {% data variables.product.prodname_desktop %} ou outro aplicativo da área de trabalho, com a API ou por meio da linha de comando. Cada forma de acessar o {% data variables.product.product_name %} é compatível com diferentes modos de autenticação.
{%- ifversion not fpt %}
- Seu IdP (provedor de identidade){% endif %}{% ifversion not ghae %}
- O nome de usuário e a senha com autenticação de dois fatores{% endif %}
- Token de acesso pessoal
- Chave SSH

## Efetuar a autenticação no seu navegador

{% ifversion ghae %}

Você pode se autenticar no {% data variables.product.product_name %} no navegador usando o IdP. Para obter mais informações, confira "[Sobre a autenticação com o logon único do SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".

{% else %}

{% ifversion fpt or ghec %}

Se você for um integrante de um {% data variables.product.prodname_emu_enterprise %}, você irá efetuar a autenticação em {% data variables.product.product_name %} no seu navegador usando seu IdP. Para obter mais informações, confira "[Autenticação como um usuário gerenciado](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users#authenticating-as-a-managed-user){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %} 

Se você não for integrante de um {% data variables.product.prodname_emu_enterprise %}, você efetuará a autenticação usando seu nome de usuário e senha do {% data variables.product.prodname_dotcom_the_website %}. Você também pode usar a autenticação de dois fatores e o logon único do SAML, que podem ser exigidos por proprietários da organização e da empresa.

{% else %}

Você pode efetuar a autenticação no {% data variables.product.product_name %} no seu navegador de diferentes formas.

{% endif %}

- **Somente nome de usuário e senha**
    - Você criará uma senha ao criar sua conta no {% data variables.product.product_name %}. Recomendamos que você use um gerenciador de senhas para gerar uma senha aleatória e única. Para obter mais informações, confira "[Como criar uma senha forte](/github/authenticating-to-github/creating-a-strong-password)". {% ifversion fpt or ghec %}
  - Se você não tiver habilitado a 2FA, o {% data variables.product.product_name %} solicitará verificação adicional quando você entrar pela primeira vez usando um dispositivo não reconhecido, como um novo perfil de navegador, um navegador em que os cookies foram excluídos ou um novo computador.

   Depois de fornecer seu nome de usuário e senha, você será solicitado a fornecer um código de verificação que enviaremos por email. Se você tiver o aplicativo {% data variables.product.prodname_mobile %} instalado, você receberá uma notificação lá. Para obter mais informações, consulte "[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)".{% endif %}
- **2FA (autenticação de dois fatores)** (recomendado)
    - Se você habilitar a 2FA, depois de inserir com êxito seu nome de usuário e senha, também solicitaremos que você forneça um código gerado por um aplicativo TOTP (Senhas Avulsas por Tempo Limitado) em seu dispositivo móvel{% ifversion fpt or ghec %} ou enviado como uma mensagem de texto (SMS){% endif %}. Para obter mais informações, confira "[Como acessar o {% data variables.product.prodname_dotcom %} usando a autenticação de dois fatores](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website)".
    - Além da autenticação com um aplicativo TOTP{% ifversion fpt or ghec %} ou uma mensagem de texto{% endif %}, você tem a opção de adicionar um método alternativo de autenticação com {% ifversion fpt or ghec %}{% data variables.product.prodname_mobile %} ou{% endif %} uma chave de segurança usando WebAuthn. Para obter mais informações, confira {% ifversion fpt or ghec %}"[Como configurar a autenticação de dois fatores com o {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile)" e {% endif %}"[Como configurar a autenticação de dois fatores usando uma chave de segurança](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)". {% ifversion ghes %}
- **Autenticação externa**
  - O administrador do site pode configurar o {% data variables.product.product_location %} para usar uma autenticação externa em vez de um nome de usuário e senha. Para obter mais informações, confira "[Métodos de autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)". {% endif %} {% ifversion fpt or ghec %}
- **Logon único do SAML**
  - Para acessar recursos pertencentes a uma organização ou conta corporativa que use o logon único do SAML, talvez seja necessário se autenticar também por meio de um IdP. Para obter mais informações, confira "[Sobre a autenticação com o logon único do SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}{% else %}".{% endif %}{% endif %}

{% endif %}

## Efetuar a autenticação com {% data variables.product.prodname_desktop %}
Você pode efetuar a autenticação com o {% data variables.product.prodname_desktop %} usando seu navegador. Para obter mais informações, confira "[Autenticação no {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)".

## Efetuar a autenticação com a API

Você pode efetuar a autenticação com a API de diferentes formas.

- **Tokens de acesso pessoal**
    - Em algumas situações, como, por exemplo, testes, você pode usar um token de acesso pessoal para acessar a API. Usar um token de acesso pessoal permite que você revogue o acesso a qualquer momento. Para obter mais informações, confira "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".
- **Fluxo do aplicativo web**
    - Para aplicativos OAuth em produção, você deve efetuar a autenticação usando o fluxo do aplicativo web. Para obter mais informações, confira "[Como autorizar aplicativos OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)".
- **Aplicativos GitHub**
    - Para aplicativos GitHub em produção, você deve efetuar a autenticação em nome da instalação do aplicativo. Para obter mais informações, confira "[Autenticação com os {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/authenticating-with-github-apps/)".

## Efetuando a autenticação com a linha de comando

Você pode acessar repositórios no {% data variables.product.product_name %} pela linha de comando de duas maneiras, HTTPS e SSH. Ambos têm uma maneira diferente de efetuar a autenticação. O método de autenticação é determinado com base na escolha de uma URL remota de HTTPS ou SSH quando você clonar o repositório. Para obter mais informações sobre o modo de acesso, confira "[Sobre os repositórios remotos](/github/getting-started-with-github/about-remote-repositories)".

### HTTPS

Você pode trabalhar com todos os repositórios no {% data variables.product.product_name %} por meio de HTTPS, mesmo que você esteja atrás de um firewall ou proxy.

Se você fizer a autenticação com {% data variables.product.prodname_cli %}, você poderá efetuar a autenticação com um token de acesso pessoal ou por meio do navegador web. Para obter mais informações sobre como se autenticar com a {% data variables.product.prodname_cli %}, confira [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

Se você efetuar a autenticação sem {% data variables.product.prodname_cli %}, você deverá efetuar a autenticação com um token de acesso pessoal. {% data reusables.user-settings.password-authentication-deprecation %} Sempre que você usar o Git para se autenticar no {% data variables.product.product_name %}, precisará inserir suas credenciais para se autenticar no {% data variables.product.product_name %}, a menos que você armazene em cache com um [auxiliar de credencial](/github/getting-started-with-github/caching-your-github-credentials-in-git).

### SSH

Você pode trabalhar com todos os repositórios no {% data variables.product.product_name %} por meio de SSH, embora os firewalls e proxys possam se recusar a permitir conexões de SSH.

Se você efetuar a autenticação com {% data variables.product.prodname_cli %}, a CLI encontrará chaves públicas SSH no seu computador e solicitará que você selecione uma para upload. Se {% data variables.product.prodname_cli %} não encontrar uma chave pública SSH para o upload, ele poderá gerar um novo SSH público/privado e fazer o upload da chave pública para a sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Em seguida, você pode efetuar a autenticação com um token de acesso pessoal ou por meio do navegador web. Para obter mais informações sobre como se autenticar com a {% data variables.product.prodname_cli %}, confira [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

Se você efetuar a autenticação sem {% data variables.product.prodname_cli %}, você deverá gerar um conjunto de chaves pública/privada no seu computador local e adicionar a chave pública à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Para obter mais informações, confira "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)". Sempre que você usar o Git para se autenticar no {% data variables.product.product_name %}, precisará inserir sua frase secreta de chave SSH, a menos que tenha [armazenado a chave](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent).

{% ifversion fpt or ghec %}
### Autorizando para logon único SAML

Para usar um token de acesso pessoal ou uma chave SSH para acessar os recursos que pertencem a uma organização que usa o logon único do SAML, você também deve autorizar o token pessoal ou a chave SSH. Para obter mais informações, confira "[Como autorizar um token de acesso pessoal para uso com o logon único do SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" ou "[Como autorizar uma chave SSH para uso com o logon único do SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}

## Formatos de token de {% data variables.product.company_short %}

{% data variables.product.company_short %} emite tokens que começam com um prefixo para indicar o tipo do token.

| Tipo de token | Prefixo | Mais informações |
| :- | :- | :- |
| Token de acesso pessoal | `ghp_` | "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)" |
| token de acesso OAuth | `gho_` | "[Como autorizar {% data variables.product.prodname_oauth_apps %}](/developers/apps/authorizing-oauth-apps)" |
| Token de usuário para servidor para um {% data variables.product.prodname_github_app %} | `ghu_` | "[Como identificar e autorizar usuários do {% data variables.product.prodname_github_apps %}](/developers/apps/identifying-and-authorizing-users-for-github-apps)" |
| Token de servidor para usuário para {% data variables.product.prodname_github_app %} | `ghs_` | "[Autenticação com os {% data variables.product.prodname_github_apps %}](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)" |
| Atualizar token para um {% data variables.product.prodname_github_app %} | `ghr_` | "[Como atualizar tokens de acesso de usuário para servidor](/developers/apps/refreshing-user-to-server-access-tokens)" |

