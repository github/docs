---
title: Verificando seu domínio personalizado para o GitHub Pages
intro: Você pode aumentar a segurança de seu domínio personalizado e evitar ataques verificando seu domínio.
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Verify a custom domain
ms.openlocfilehash: b3c44dacd98882afa7a43854b96d803352e879ca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529668'
---
## Sobre a verificação de domínio para o GitHub Pages

Quando você verifica o domínio personalizado de sua conta ou organização pessoal, somente repositórios pertencentes a sua conta pessoal ou corporativa podem ser usados para publicar um site {% data variables.product.prodname_pages %} no domínio personalizado verificado ou nos subdomínios imediatos do domínio.

Verificar seu domínio impede que outros usuários do GitHub de assumir seu domínio personalizado e usá-lo para publicar seu próprio site de {% data variables.product.prodname_pages %}. As tomadas de domínio podem acontecer quando você excluir seu repositório, quando seu plano de cobrança é rebaixado, ou após qualquer outra alteração que desvincula o domínio personalizado ou quando você desabilita {% data variables.product.prodname_pages %} enquanto o domínio permanece configurado para {% data variables.product.prodname_pages %} e não é verificado.

Ao verificar um domínio, todos os subdomínios imediatos também são incluídos na verificação. Por exemplo, se o domínio personalizado `github.com` for verificado, o `docs.github.com`, o `support.github.com` e todos os outros subdomínios imediatos também serão protegidos contra tomadas de controle.

{% data reusables.pages.wildcard-dns-warning %}

Também é possível verificar um domínio para sua organização{% ifversion ghec %} ou empresa{% endif %}, que exibe um selo "Verificado" na organização {% ifversion ghec %}ou no perfil da empresa{% endif %}{% ifversion ghec %} e, em {% data variables.product.prodname_ghe_cloud %}, permite que você restrinja notificações para endereços de e-mail usando o domínio verificado{% endif %}. Para obter mais informações, confira "[Como verificar ou aprovar um domínio para sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization){% ifversion ghec %}" e "[Como verificar ou aprovar um domínio para sua empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise){% endif %}".

## Verificando um domínio para o seu site de usuário

{% data reusables.user-settings.access_settings %}
1. Na seção "Código, planejamento e automação" da barra lateral, clique em **{% octicon "browser" aria-label="The pages icon" %} Páginas**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Aguarde que a configuração de DNS seja alterada. Isto pode ser imediato ou demorar até 24 horas. Confirme a alteração na configuração de DNS executando o comando `dig` na linha de comando. No comando abaixo, substitua `USERNAME` pelo nome de usuário e `example.com` pelo domínio que você está verificando. Se a sua configuração de DNS foi atualizada, você deverá ver o seu novo registro TXT na saída.
  ```
  dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}

## Verificando um domínio para o site da organização

Os proprietários da organização podem verificar domínios personalizados para a sua organização.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na seção "Código, planejamento e automação" da barra lateral, clique em **{% octicon "browser" aria-label="The browser icon" %} Páginas**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Aguarde que a configuração de DNS seja alterada. Isto pode ser imediato ou demorar até 24 horas. Confirme a alteração na configuração de DNS executando o comando `dig` na linha de comando. No comando abaixo, substitua `ORGANIZATION` pelo nome da sua organização e `example.com` pelo domínio que você está verificando. Se a sua configuração de DNS foi atualizada, você deverá ver o seu novo registro TXT na saída.
  ```
  dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}
