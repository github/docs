---
title: Gerenciando endereços IP permitidos para um aplicativo GitHub
intro: 'Você pode adicionar uma lista de permissões IP ao seu {% data variables.product.prodname_github_app %} para evitar que seu aplicativo seja bloqueado pela própria lista de permissões da organização.'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Gerenciar endereços IP permitidos
---

## Sobre listas de endereços IP permitidos para {% data variables.product.prodname_github_apps %}

Os proprietários da empresa e da organização podem restringir o acesso aos ativos configurando uma lista de endereços IP permitidos. Esta lista especifica os endereços IP autorizados a se conectar. For more information, see "[Enforcing policies for security settings in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)."

Quando uma organização tem uma lista de autorizações, aplicativos de terceiros que se conectam por meio de {% data variables.product.prodname_github_app %}, terá acesso negado, a menos que ambos os pontos a seguir sejam verdadeiros:

* O criador do {% data variables.product.prodname_github_app %} configurou uma lista de permissões para o aplicativo que especifica os endereços IP em que o aplicativo é executado. Veja abaixo detalhes de como fazer isso.
* O proprietário da organização escolheu permitir que os endereços na lista de permitidos do {% data variables.product.prodname_github_app %} sejam adicionados à sua própria lista de permissões. Para obter mais informações, consulte "[Gerenciar endereços IP permitidos para a sua organização](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#allowing-access-by-github-apps)".

{% data reusables.apps.ip-allow-list-only-apps %}

## Adicionando uma lista de endereços IP permitidos para {% data variables.product.prodname_github_app %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
1. Role para baixo até a seção "Lista de permissão de IP". ![Seção de informações básicas para o seu aplicativo GitHub](/assets/images/github-apps/github-apps-allow-list-empty.png)
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
  A descrição é para sua referência e não é usada na lista de licenças de organizações em que {% data variables.product.prodname_github_app %} está instalado. Em vez disso, a organização permite que as listas incluam "Gerenciado pelo Nome do aplicativo Github" como descrição.
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}
