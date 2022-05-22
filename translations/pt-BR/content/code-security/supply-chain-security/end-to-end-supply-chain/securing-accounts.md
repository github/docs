---
title: Melhores práticas para proteger contas
shortTitle: Protegendo contas
allowTitleToDifferFromFilename: true
intro: Orientação sobre como proteger as contas com acesso à cadeia de suprimentos de software.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Organizations
  - Teams
  - SSH
  - Security
  - Accounts
---

## Sobre este guia

Este guia descreve as mudanças de maior impacto que você pode fazer para aumentar a segurança da conta. Cada seção descreve uma alteração que você pode fazer em seus processos para melhorar a segurança. As mudanças de maior impacto estão listadas primeiro.

## Qual o risco?

A segurança da conta é fundamental para a segurança da sua cadeia de suprimento. Se um invasor conseguir tomar a sua conta em {% data variables.product.product_name %}, ele poderá fazer alterações maliciosas no seu código ou no processo de compilação. Dessa forma, seu primeiro objetivo deve ser dificultar que alguém tome a sua conta e as contas de outros usuários de {% ifversion ghes %}{% else %}integrantes{% endif %} da {% ifversion fpt %}sua organização{% elsif ghec or ghae %}sua organização ou empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

{% ifversion ghec or ghes %}
## Centralizar autenticação
{% endif %}

{% ifversion ghec %}
Se você é proprietário de uma empresa ou organização, você pode configurar a autenticação centralizada com SAML. Embora você possa adicionar ou remover integrantes manualmente, é mais simples e mais seguro configurar um logon único (SSO) e SCIM entre {% data variables.product.product_name %} e seu provedor de identidade (IdP) SAML. Isso também simplifica o processo de autenticação para todos os integrantes da sua empresa.

Você pode configurar a autenticação SAML para uma conta corporativa ou da organização. Com o SAML, você pode conceder acesso às contas pessoais dos integrantes da sua empresa ou organização no {% data variables.product.product_location %} por meio do seu IdP, ou você pode criar e controlar as contas que pertencem à sua empresa usando {% data variables.product.prodname_emus %}. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

Depois de configurar a autenticação do SAML, quando os integrantes solicitarem acesso aos seus recursos, eles serão direcionados para o seu fluxo de SSO para garantir que sejam reconhecidos pelo seu IdP. Se não forem reconhecidos, o seu pedido será recusado.

Alguns IdPs são compatíveis com um protocolo denominado SCIM, que pode prover ou desprovisionar automaticamente o acesso em {% data variables.product.product_name %} quando você fizer alterações no seu IdP. Com o SCIM, você pode simplificar a administração à medida que a sua equipe cresce, e você pode revogar rapidamente o acesso às contas. O SCIM está disponível para organizações individuais em {% data variables.product.product_name %}, ou para empresas que usam {% data variables.product.prodname_emus %}. Para obter mais informações, consulte "[Sobre SCIM para as organizações](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".
{% endif %}

{% ifversion ghes %}
Se você é o administrador do site para {% data variables.product.product_location %}, você pode simplificar a experiência de login para os usuários, escolhendo um método de autenticação que se conecta com seu provedor de identidade existente (IdP), como CAS, SAML ou LDAP. Isso significa que eles não precisam mais lembrar de uma senha adicional para {% data variables.product.prodname_dotcom %}.

Alguns métodos de autenticação também são compatíveis com a comunicação de informações adicionais para {% data variables.product.product_name %}, por exemplo, de quais grupos o usuário é integrante ou sincronizando chaves criptográficas para o usuário. Esta é uma excelente maneira de simplificar a sua administração à medida que a sua organização cresce.

Para obter mais informações sobre os métodos de autenticação disponíveis para {% data variables.product.product_name %}, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".
{% endif %}

## Configurar autenticação de dois fatores

A melhor maneira de melhorar a segurança da {% ifversion fpt %}sua conta pessoal{% elsif ghes %}sua conta pessoal ou {% data variables.product.product_location %}{% elsif ghec %}suas contas{% elsif ghae %}sua empresa em {% data variables.product.product_name %}{% endif %} é configurar a autenticação de dois fatores (2FA){% ifversion ghae %} no seu provedor de identidade SAML (IdP){% endif %}. As senhas por si só podem ser comprometidas por serem adivinhadas, por serem reutilizadas em outro local que foi comprometido, ou por engenharia social, como phishing. A 2FA dificulta muito mais o comprometimento das suas contas, mesmo que um invasor tenha sua senha.

{% ifversion not ghae %}

{% ifversion ghec %}
Se você for proprietário de uma empresa, você poderá configurar uma política que exija a 2FA para todas as organizações pertencentes à sua empresa.
{% endif %}

{% ifversion ghes %}
Se você é o administrador do site para {% data variables.product.product_location %}, talvez você possa configurar a 2FA para todos os usuários da sua instância. A disponibilidade de 2FA no {% data variables.product.product_name %} depende do método de autenticação que você usa. Para obter mais informações, consulte "[Centralizar a autenticação de usuário](#centralize-user-authentication)".
{% endif %}

Se você for um proprietário da organização, {% ifversion fpt %}pode{% else %}poderá{% endif %} exigir que todos os integrantes da organização habilitem a 2FA.

{% ifversion ghec or ghes %}

### Configure sua conta corporativa

Os proprietários da empresa podem exigir a autenticação 2FA para todos os {% ifversion ghes %}usuários de{% elsif ghec %}integrantes da{% endif %} a instância {% ifversion ghes %}{% elsif ghec %}empresa{% endif %}. A disponibilidade das políticas de 2FA em {% data variables.product.product_name %} depende de como {% ifversion ghes %}usuários{% else %}integrantes{% endif %} efetuam a autenticação para acessar sua {% ifversion ghes %}instância{% elsif ghec %}recursos da empresa{% endif %}.

{% ifversion ghes %}
- Se você efetuar o login em {% data variables.product.product_location %} por meio de um IdP externo usando CAS ou SSO SAML, você
{% elsif ghec %}
Se sua empresa usa o {% data variables.product.prodname_emus %} ou a autenticação do SAML for aplicada à sua empresa, você
{%- endif %} não pode configurar a autenticação 2FA em {% data variables.product.product_name %}. Alguém com acesso administrativo ao seu IdP deve configurar a autenticação 2FA para o IdP.

{% ifversion ghes %}

- Se você entrar em {% data variables.product.product_location %} por meio de um diretório LDAP externo, você poderá exigir a autenticação 2FA para sua empresa em {% data variables.product.product_name %}. Se você permitir a autenticação integrada para usuários fora do seu diretório, os usuários individuais poderão habilitar a autenticação 2FA, mas você não poderá exigir a autenticação 2FA para sua empresa.

{% endif %}

Para obter mais informações, consulte {% ifversion ghec %}"[Sobre a identidade e gerenciamento de acesso para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)" e {% endif %}"[Aplicando políticas para configurações de segurança na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#requiring-two-factor-authentication-for-organizations-in-your-enterprise)".

{% endif %}

### Configure a sua conta pessoal

{% ifversion ghec or ghes %}
{% note %}

**Observação**: Dependendo do método de autenticação que {% ifversion ghec %}o proprietário de uma empresa{% elsif ghes %}um administrador do site{% endif %} tenha configurado para {% ifversion ghec %}sua empresa em {% endif %}{% data variables.product.product_location %}, talvez você não consiga habilitar a autenticação 2FA para sua conta pessoal.

{% endnote %}
{% endif %}

{% data variables.product.product_name %} é compatível com várias opções para 2FA e embora qualquer um seja melhor do que nada, a opção mais segura é WebAuthn. A WebAuthn requer uma chave de segurança de hardware ou um dispositivo que o suporte por meio de coisas como Windows Hello ou Mac TouchID. É possível, apesar de ser difícil, fazer phish de outras formas de 2FA (por exemplo, quando alguém pede para ler a sua senha de um único dígito). No entanto, o WebAuthn não é passível de phishing, porque o escopo de domínio está incorporado no protocolo, o que impede que credenciais de um site representando uma página de login sejam usadas em {% data variables.product.product_name %}.

Ao definir a autenticação de 2FA, você deve sempre fazer o download dos códigos de recuperação e definir mais de um fator. Isso garante que o acesso à sua conta não depende de um único dispositivo. Para obter mais informações, consulte "[Configurando autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication), "[Configurando os métodos de recuperação de autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods) e [Chaves de segurança de hardware marcadas no GitHub](https://thegithubshop.com/products/github-branded-yubikey) na loja do GitHub.

### Configurar a conta da sua organização

{% ifversion ghec or ghes %}
{% note %}

**Observação**: Dependendo do método de autenticação que {% ifversion ghec %}o proprietário de uma empresa{% elsif ghes %}um administrador do site{% endif %} tenha configurado para {% ifversion ghec %}sua empresa em {% endif %}{% data variables.product.product_location %}, talvez você não consiga exigir a autenticação 2FA para sua organização.

{% endnote %}
{% endif %}

Se você for proprietário de uma organização, você poderá ver quais usuários não estão habilitados com 2FA, poderá ajudá-los a configurá-la e, em seguida, exigir a autenticação 2FA para sua organização. Para guiar você nesse processo, consulte:

1. "[Visualizando se os usuários na organização têm a 2FA habilitada](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)"
2. "[Preparando-se para exigir autenticação de dois fatores na sua organização](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/preparing-to-require-two-factor-authentication-in-your-organization)"
3. "[Exigindo a autenticação de dois fatores na sua organização](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)"

{% endif %}

## Conectar a {% data variables.product.product_name %} usando chaves SSH

Existem outras maneiras de interagir com {% data variables.product.product_name %} além de entrar no site. Muitas pessoas autorizam o código que enviam por push para {% data variables.product.prodname_dotcom %} com uma chave privada SSH. Para obter mais informações, consulte[Sobre SSH](/authentication/connecting-to-github-with-ssh/about-ssh)".

Assim como a senha da sua conta, se um invasor conseguir obter a sua chave SSH privada, ele poderá se passar por você e enviar código malicioso para qualquer repositório ao qual você tenha acesso de gravação. Se você armazenar sua chave SSH privada em um disco, é uma boa ideia protegê-la com uma senha. Para obter mais informações, consulte "[Trabalhar com frases secretas da chave SSH](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)".

Outra opção é gerar chaves SSH em uma chave de segurança de hardware. Você pode usar a mesma chave que você está usando no 2FA. É muito difícil comprometer as chaves de segurança de hardware remotamente, porque a chave SSH privada permanece no hardware e não pode ser acessada diretamente por meio do software. Para obter mais informações, consulte "[Gerando uma nova chave SSH para uma chave de segurança de hardware](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)".

{% ifversion ghec or ghes or ghae %}
As chaves SSH são bastante seguras, mas a exigência de hardware pode não funcionar para algumas organizações. Uma abordagem alternativa é usar chaves SSH válidas por um curto período de tempo. Mesmo que a chave privada seja comprometida, ela não poderá ser explorada por muito tempo. Este é o conceito por trás da execução da sua própria autoridade de certificação SSH. Embora essa abordagem fornece a você um grande controle sobre como os usuários efetuam a autenticação e também vem com a responsabilidade da própria manutenção de uma autoridade certificada de SSH. Para obter mais informações, consulte "[Sobre autoridades certificadas de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".
{% endif %}

## Próximas etapas

- "[Protegendo sua cadeia de suprimentos de ponta a ponta](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[Práticas recomendadas para proteger o código na sua cadeia de suprimentos](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"

- "[Práticas recomendadas para proteger seu sistema de construção](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"
