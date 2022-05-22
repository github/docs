---
title: Gerenciar a varredura de segredos para sua organização
intro: 'Você pode controlar quais repositórios no {% data variables.product.product_name %} da organização fará a varredura dos segredos.'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'Os proprietários da organização podem gerenciar {% data variables.product.prodname_secret_scanning %} para os repositórios na organização.'
versions:
  free-pro-team: '*'
---
 
{% data reusables.secret-scanning.beta %}

### Sobre o gerenciamento de {% data variables.product.prodname_secret_scanning %}

O {% data variables.product.prodname_secret_scanning_caps %} pode ajudá-lo a mitigar o impacto dos segredos vazados nos repositórios da sua organização. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)".

É possível gerenciar como o {% data variables.product.prodname_dotcom %} faz a varredura de segredos nos repositórios existentes da sua organização. Também é possível habilitar ou desabilitar o {% data variables.product.prodname_secret_scanning %} por padrão para quaisquer novos repositórios que os integrantes criarem na sua organização.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% note %}

**Observação**: {% data variables.product.prodname_secret_scanning_caps %} é habilitado por padrão para repositórios públicos na organização e não pode ser desabilitado. Para obter mais informações, consulte "[Sobre a varredura de segredos para os repositórios públicos](/github/administering-a-repository/about-secret-scanning#about-secret-scanning-for-public-repositories)".

{% endnote %}

### Habilitar ou desabilitar {% data variables.product.prodname_secret_scanning %} para repositórios privados existentes

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. À direita da "varredura de segredos", clique em **Habilitar tudo** ou **Desabilitar tudo**. ![Botão "Habilitar tudo" ou "Desabilitar tudo" para varredura de segredos](/assets/images/help/organizations/security-and-analysis-disable-or-enable-secret-scanning.png)
6. Opcionalmente, habilite o {% data variables.product.prodname_secret_scanning %} por padrão para novos repositórios privados na sua organização. ![Opção de "Habilitar por padrão" para novos repositórios](/assets/images/help/organizations/security-and-analysis-secret-scanning-enable-by-default.png)
7. Clique em **Desabilitar a verificação secreta** ou **Habilitar a verificação secreta** para habilitar ou desabilitar o recurso para todos os repositórios da sua organização. ![Botão para habilitar ou desabilitar {% data variables.product.prodname_secret_scanning %} ](/assets/images/help/organizations/security-and-analysis-enable-secret-scanning.png)

### Habilitar ou desabilitar {% data variables.product.prodname_secret_scanning %} para os novos repositórios privados

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. À direita da "varredura de segredo", habilite ou desabilite por padrão o recurso para novos repositórios privados na sua organização. ![Caixa de seleção para habilitar ou desabilitar um recurso para os novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox.png)
