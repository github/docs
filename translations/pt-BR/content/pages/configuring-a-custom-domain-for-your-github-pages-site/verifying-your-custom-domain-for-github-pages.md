---
title: Verificando seu domínio personalizado para o GitHub Pages
intro: Você pode aumentar a segurança de seu domínio personalizado e evitar ataques verificando seu domínio.
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Verificar um domínio personalizado
---

## Sobre a verificação de domínio para o GitHub Pages

Ao verificar seu domínio personalizado para sua conta pessoal ou organização, somente os repositórios pertencentes à sua conta pessoal ou organização podem ser usados para publicar um site de {% data variables.product.prodname_pages %} para o domínio personalizado verificado ou os subdomínios imediatos do domínio.

Verificar seu domínio impede que outros usuários do GitHub de assumir seu domínio personalizado e usá-lo para publicar seu próprio site de {% data variables.product.prodname_pages %}. As tomadas de domínio podem acontecer quando você excluir seu repositório, quando seu plano de cobrança é rebaixado, ou após qualquer outra alteração que desvincula o domínio personalizado ou quando você desabilita {% data variables.product.prodname_pages %} enquanto o domínio permanece configurado para {% data variables.product.prodname_pages %} e não é verificado.

Ao verificar um domínio, todos os subdomínios imediatos também são incluídos na verificação. Por exemplo, se o domínio personalizado `github.com` for verificado, `docs.github.com`, `support.github.com` e todos os outros subdomínios imediatos também estarão protegidos contra a tomada de controle.

Também é possível verificar um domínio para sua organização{% ifversion ghec %} ou empresa{% endif %}, que exibe um selo "Verificado" na organização {% ifversion ghec %}ou no perfil da empresa{% endif %}{% ifversion ghec %} e, em {% data variables.product.prodname_ghe_cloud %}, permite que você restrinja notificações para endereços de e-mail usando o domínio verificado{% endif %}. Para obter mais informações, consulte "[Verificando ou aprovando um domínio para a sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization){% ifversion ghec %}" e "[Verificando ou aprovando um domínio para a sua empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise){% endif %}".

## Verificando um domínio para o seu site de usuário

{% data reusables.user-settings.access_settings %}
1. Na seção "código, planejamento e automação" na barra lateral, clique em **Páginas de {% octicon "browser" aria-label="The pages icon" %}**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Aguarde que a configuração de DNS seja alterada. Isto pode ser imediato ou demorar até 24 horas. Você pode confirmar a alteração na configuração do seu DNS executando o comando `dig` na linha de comando. No comando abaixo, substitua `USUÁRIO` pelo seu nome de usuário e `example.com` pelo domínio que você está verificando. Se a sua configuração de DNS foi atualizada, você deverá ver o seu novo registro TXT na saída.
  ```
  dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}

## Verificando um domínio para o site da organização

Os proprietários da organização podem verificar domínios personalizados para a sua organização.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. Na seção "código, planejamento e automação" na barra lateral, clique em **Páginas de {% octicon "browser" aria-label="The browser icon" %}**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Aguarde que a configuração de DNS seja alterada. Isto pode ser imediato ou demorar até 24 horas. Você pode confirmar a alteração na configuração do seu DNS executando o comando `dig` na linha de comando. No comando abaixo, substitua `ORGANIZAÇÃO` pelo nome da sua organização e `example.com` pelo domínio que você está verificando. Se a sua configuração de DNS foi atualizada, você deverá ver o seu novo registro TXT na saída.
  ```
  dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}
