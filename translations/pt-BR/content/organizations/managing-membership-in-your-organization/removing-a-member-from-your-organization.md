---
title: Remover um integrante da organização
intro: 'Se integrantes não precisarem mais acessar os repositórios pertencentes à organização, você poderá removê-los da organização.'
redirect_from:
  - /articles/removing-a-member-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-a-member-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Somente proprietários da organização podem remover integrantes da organização.

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**Aviso:** Ao remover integrantes de uma organização:
- O número de licenças pagas não faz o downgrade automaticamente. Para pagar menos licenças depois de remover os usuários da sua organização, siga as etapas em "[Fazer o downgrade das estações pagas da sua organização](/articles/downgrading-your-organization-s-paid-seats)".
- Os integrantes removidos perderão o acesso às bifurcações privadas dos repositórios privados da sua organização, mas ainda poderão ter cópias locais. No entanto, eles não conseguem sincronizar as cópias locais com os repositórios da organização. As bifurcações privadas poderão ser restauradas se o usuário for [restabelecido como um integrante da organização](/articles/reinstating-a-former-member-of-your-organization) em até três meses após sua remoção da organização. Em última análise, você é responsável por garantir que as pessoas que perderam o acesso a um repositório excluam qualquer informação confidencial ou de propriedade intelectual.
- Quaisquer convites para organizações enviados por um integrante removido que não foram aceitos, serão cancelados e não serão acessíveis.

{% endwarning %}

{% else %}

{% warning %}

**Aviso:** Ao remover integrantes de uma organização:
 - Os integrantes removidos perderão o acesso às bifurcações privadas dos repositórios privados da sua organização, mas ainda poderão ter cópias locais. No entanto, eles não conseguem sincronizar as cópias locais com os repositórios da organização. As bifurcações privadas poderão ser restauradas se o usuário for [restabelecido como um integrante da organização](/articles/reinstating-a-former-member-of-your-organization) em até três meses após sua remoção da organização. Em última análise, você é responsável por garantir que as pessoas que perderam o acesso a um repositório excluam qualquer informação confidencial ou de propriedade intelectual.
 - Quaisquer convites para organizações enviados pelo usuário removido, que não foram aceitos, serão cancelados e não serão acessíveis.

{% endwarning %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

Para auxiliar a transição e garantir a exclusão das informações confidenciais ou de propriedade intelectual, recomendamos o compartilhamento de uma lista de práticas recomendadas ao sair da organização com o usuário que está sendo removido. Consulte um exemplo em "[Práticas recomendadas para sair da empresa](/articles/best-practices-for-leaving-your-company/)".

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

### Revogar a associação do usuário

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
4. Selecione um ou mais integrantes que deseja remover da organização. ![Lista de integrantes com dois integrantes selecionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Acima da lista de integrantes, use o menu suspenso e clique **Remove from organization** (Remover da organização). ![Menu suspenso com opção de remover integrantes](/assets/images/help/teams/user-bulk-management-options.png)
6. Revise os integrantes que serão removidos da organização e clique em **Remove members** (Remover integrantes). ![Lista de integrantes que serão removidos e botão Remove members (Remover integrantes)](/assets/images/help/teams/confirm-remove-members-bulk.png)

### Leia mais

- "[Remover integrantes da organização de uma equipe](/articles/removing-organization-members-from-a-team)"
