---
title: Habilitar acesso de leitura anônimo do Git para um repositório
intro: 'Como administrador de repositório, você pode habilitar ou desabilitar o acesso de leitura anônimo do Git para repositórios públicos que atendam a certos requisitos.'
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
versions:
  enterprise-server: '*'
---

Os administradores de repositório poderão alterar a configuração do acesso de leitura anônimo do Git de um repositório específico se:
- Um administrador de site tiver habilitado o modo privado e o acesso de leitura anônimo do Git.
- O repositório é público na empresa e não é uma bifurcação.
- Um administrador de site não tiver desabilitado o acesso de leitura anônimo do Git do repositório.

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Ao lado de "Enable anonymous Git read access" (Habilitar acesso de leitura anônimo do Git), clique em **Enable** (Habilitar). ![Botão "Enabled" (Habilitar) em "Anonymous Git read access" (Acesso de leitura anônimo do Git)](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. Revise as alterações. Para confirmar, digite o nome do repositório e clique em **I understand, enable anonymous Git read access** (Entendi; habilite o acesso de leitura anônimo do Git).
