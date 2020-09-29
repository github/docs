---
title: Editar uma consultoria de segurança
intro: Você pode editar os metadados e a descrição de uma consultoria de segurança se precisar atualizar as informações ou corrigir erros.
versions:
  free-pro-team: '*'
---

As pessoas com permissão de administrador para uma consultora de segurança podem editar a consultora de segurança.

### Sobre os créditos para a consultoria de segurança

Você pode creditar pessoas que ajudaram a descobrir, relatar ou corrigir uma vulnerabilidade de segurança. Se você creditar alguém, essa pessoa poderá optar por aceitar ou recusar crédito.

Se alguém aceitar o crédito, o nome de usuário da pessoa aparecerá na seção "Créditos" da consultoria de segurança. Qualquer pessoa com acesso de leitura ao repositório pode ver a consultoria e as pessoas que aceitaram o crédito por ela.

### Editar uma consultoria de segurança

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. Na lista "consultorias de segurança", clique na consultoria de segurança que deseja editar.
5. No canto superior direito dos detalhes da consultoria de segurança, clique em
{% octicon "pencil" aria-label="The edit icon" %}.
  ![Botão para editar uma consultoria de segurança](/assets/images/help/security/security-advisory-edit-button.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-description %}
8. Opcionalmente, edite os "Créditos" para a consultoria de segurança. ![Créditos para uma consultoria de segurança](/assets/images/help/security/security-advisory-credits.png)
9. Clique em **Atualizar consultoria de segurança**. ![Botão Add (Adicionar)](/assets/images/help/security/update-advisory-button.png)
10. As pessoas listadas na seção "Créditos" receberão um e-mail ou uma notificação da web convidando-os a aceitar o crédito. Se uma pessoa aceitar, seu nome de usuário ficará visível publicamente assim que a consultoria de segurança for publicada.

### Leia mais

- "[Retirar uma consultora de segurança](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
