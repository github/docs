---
title: Sobre associação à organização
intro: Você pode se tornar um integrante de uma organização para colaborar com colegas de trabalho ou contribuidores de código aberto em muitos repositórios de uma vez.
redirect_from:
  - /articles/about-organization-membership
  - /github/setting-up-and-managing-your-github-user-account/about-organization-membership
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Associação à organização
---

Um proprietário da organização pode convidar você para ingressar na organização dele como um integrante, gerente de cobrança ou proprietário. Um proprietário da organização ou integrante com privilégios administrativos para um repositório pode convidar você para colaborar em um ou mais repositórios como um colaborador externo. Para obter mais informações, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

É possível acessar organizações das quais você é integrante em sua página de perfil. Para obter mais informações, consulte "[Acessar uma organização](/articles/accessing-an-organization)".

Quando você aceita um convite para ingressar em uma organização, os proprietários da organização podem ver:

- Suas informações públicas de perfil
- Seu endereço de e-mail
- Se você tem a autorização de dois fatores habilitada
- Os repositórios aos quais você tem acesso dentro da organização e seu nível de acesso
- Determinadas atividades dentro da organização
- País de origem da solicitação
- Seu endereço IP

Para obter mais informações, consulte "<a href="/articles/github-privacy-statement/" class="dotcom-only">Declaração de privacidade do {% data variables.product.prodname_dotcom %}</a>.

  {% note %}

  **Observação:** os proprietários não podem ver endereços IP do integrante no log de auditoria da organização. No caso de um incidente de segurança, como comprometimento de uma conta ou compartilhamento acidental de dados confidenciais, os proprietários da organização podem solicitar detalhes de acesso a repositórios privados. As informações que retornamos podem incluir seu endereço IP.

  {% endnote %}

Por padrão, a visibilidade de sua associação à organização é definida como privada. Você pode optar por divulgar associações individuais à organização no seu perfil. Para obter mais informações, consulte "[Divulgar ou ocultar associação à organização](/articles/publicizing-or-hiding-organization-membership)".

{% ifversion fpt or ghec %}

Se sua organização pertence a uma conta corporativa, você automaticamente é um integrante da conta corporativa e está visível aos proprietários da conta corporativa. Para obter mais informações, consulte "[Sobre contas corporativas](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

{% endif %}

É possível ter uma organização a qualquer momento. Para obter mais informações, consulte "[Remover a si mesmo de uma organização](/articles/removing-yourself-from-an-organization)".

## Leia mais

- "[Sobre organizações](/articles/about-organizations)"
- "[Gerenciar sua associação em organizações](/articles/managing-your-membership-in-organizations)"
