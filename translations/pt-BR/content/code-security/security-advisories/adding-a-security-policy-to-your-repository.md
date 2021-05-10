---
title: Adicionar uma política de segurança ao repositório
intro: Você pode dar instruções de como relatar de maneira responsável uma vulnerabilidade de segurança no seu projeto adicionando uma política de segurança ao repositório.
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
versions:
  free-pro-team: '*'
topics:
  - Security
---

### Sobre políticas de segurança

Para dar às pessoas instruções de como relatar de maneira responsável vulnerabilidades de segurança no seu projeto, você pode adicionar um arquivo _SECURITY.md_ à pasta raiz, `docs` ou `.github` do seu repositório. Quando uma pessoa cria um problema no seu repositório, ela vê um link para a política de segurança do seu projeto.

Você pode criar uma política de segurança padrão para sua organização ou conta de usuário. Para obter mais informações, consulte "[Criando um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% tip %}

**Dica:** para ajudar as pessoas a encontrar a política de segurança, você poderá vincular seu arquivo _SECURITY.md_ a outros locais em seu repositório, como o arquivo README. Para obter mais informações, consulte "[Sobre README](/articles/about-readmes)".

{% endtip %}

Depois que alguém informar uma vulnerabilidade de segurança no seu projeto, você pode usar o {% data variables.product.prodname_security_advisories %} para divulgar, corrigir e publicar informações sobre a vulnerabilidade. Para obter mais informações sobre o processo de relatórios e divulgação de vulnerabilidades em {% data variables.product.prodname_dotcom %}, consulte "[Sobre divulgação coordenada das vulnerabilidades de segurança](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)". Para obter mais informações sobre {% data variables.product.prodname_security_advisories %}, consulte "[Sobre {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."

{% data reusables.repositories.github-security-lab %}

### Adicionar uma política de segurança ao repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. Na barra lateral esquerda, clique em **Policy** (Política). ![Guia Policy (Política)](/assets/images/help/security/policy-tab.png)
4. Clique em **Start setup** (Iniciar configuração). ![Botão Start setup (Iniciar configuração)](/assets/images/help/security/start-setup-policy-button.png)
5. No novo arquivo _SECURITY.md_, adicione informações sobre versões compatíveis do seu projeto e como relatar uma vulnerabilidade.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Leia mais

- "[Sobre proteger seu repositório](/github/administering-a-repository/about-securing-your-repository)"
- "[Configurar seu projeto para contribuições úteis](/communities/setting-up-your-project-for-healthy-contributions)"
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %})
