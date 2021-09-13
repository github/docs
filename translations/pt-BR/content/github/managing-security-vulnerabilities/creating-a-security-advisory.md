---
title: Criar uma consultoria de segurança
intro: Você pode criar um projeto de consultoria de segurança para discutir e corrigir de forma privada uma vulnerabilidade de segurança no seu projeto de código aberto.
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
versions:
  free-pro-team: '*'
---

Qualquer pessoa com permissões de administrador em um repositório pode criar uma consultoria de segurança.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### Criar uma consultoria de segurança

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. Clique em **Novo rascunho de consultoria de segurança**. ![Botão Open draft advisory (Abrir consultoria de rascunho)](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. Digite um título para sua consultoria de segurança. ![Campo de título](/assets/images/help/security/security-advisory-title.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-description %}
8. Clique em **Criar consultoria de segurança**. ![Botão para criar consultoria de segurança](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

### Próximas etapas

- Faça um comentário sobre o rascunho da consultoria de segurança para discutir a vulnerabilidade com sua equipe.
- Adicione colaboradores à consultora de segurança. Para obter mais informações, consulte "[Adicionar um colaborador a uma consultoria de segurança](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory)".
- Colaborar de modo particular com a correção da vulnerabilidade em uma bifurcação privada temporária. Para obter mais informações, consulte "[Colaborar em uma bifurcação privada temporária para resolver uma vulnerabilidade de segurança](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)".
- Adicione indivíduos que deveriam receber crédito por contribuírem para a consultoria de segurança. Para obter mais informações, consulte "[Editar um aviso de segurança](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)."
- Publicar a consultoria de segurança para notificar a sua comunidade sobre a vulnerabilidade de segurança. Para obter mais informações, consulte "[Publicar uma consultoria de segurança](/github/managing-security-vulnerabilities/publishing-a-security-advisory)".
