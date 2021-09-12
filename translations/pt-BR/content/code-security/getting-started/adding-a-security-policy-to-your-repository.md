---
title: Adicionar uma política de segurança ao repositório
intro: 'Você pode dar instruções sobre como relatar uma vulnerabilidade de segurança no seu projeto, adicionando uma política de segurança ao seu repositório.'
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: next
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
---

### Sobre políticas de segurança

Para dar às pessoas instruções para relatar vulnerabilidades de segurança no seu projeto{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} você pode adicionar um arquivo _SECURITY.md_ à raiz do seu repositório, `docs` ou à pasta `.github`.{% else %} você pode adicionar um arquivo _SECURITY.md_ à raiz do seu repositório ou à pasta `docs`.{% endif %} Quando alguém criar um problema no seu repositório, a pessoa verá um link para a política de segurança do seu projeto.

{% if currentVersion != 'github-ae@next' %}
<!-- no public repos in GHAE -->
Você pode criar uma política de segurança padrão para sua organização ou conta de usuário. Para obter mais informações, consulte "[Criando um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."
{% endif %}

{% tip %}

**Dica:** para ajudar as pessoas a encontrar a política de segurança, você poderá vincular seu arquivo _SECURITY.md_ a outros locais em seu repositório, como o arquivo README. Para obter mais informações, consulte "[Sobre README](/articles/about-readmes)".

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}
Depois que alguém informar uma vulnerabilidade de segurança no seu projeto, você pode usar o {% data variables.product.prodname_security_advisories %} para divulgar, corrigir e publicar informações sobre a vulnerabilidade. Para obter mais informações sobre o processo de relatórios e divulgação de vulnerabilidades em {% data variables.product.prodname_dotcom %}, consulte "[Sobre divulgação coordenada das vulnerabilidades de segurança](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)". Para obter mais informações sobre {% data variables.product.prodname_security_advisories %}, consulte "[Sobre {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."

{% data reusables.repositories.github-security-lab %}
{% endif %}
{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
Ao disponibilizar claramente instruções de relatório de segurança, você torna mais fácil para os usuários relatar quaisquer vulnerabilidades de segurança que encontrem no repositório usando seu canal de comunicação preferido.
{% endif %}

### Adicionar uma política de segurança ao repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. Na barra lateral esquerda, clique em **Política de segurança**. ![Aba de política de segurança](/assets/images/help/security/security-policy-tab.png)
4. Clique em **Start setup** (Iniciar configuração). ![Botão Start setup (Iniciar configuração)](/assets/images/help/security/start-setup-security-policy-button.png)
5. No novo arquivo _SECURITY.md_, adicione informações sobre versões compatíveis do seu projeto e como relatar uma vulnerabilidade.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Leia mais

- "[Protegendo o seu repositório](/code-security/getting-started/securing-your-repository)"{% if currentVersion != 'github-ae@next' %}
- "[Configurar o projeto para contribuições saudáveis](/communities/setting-up-your-project-for-healthy-contributions)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
