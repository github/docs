---
title: Níveis de permissão para um repositório de conta de usuário
intro: 'Um repositório pertencente a uma conta de usuário tem dois níveis de permissão: *proprietário do repositório* e *colaboradores*.'
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Dica:** Se você precisar de acesso de leitura e gravação mais granular em um repositório de propriedade de sua conta de usuário, considere transferir o repositório para uma organização. Para obter mais informações, consulte "[Transferir um repositório](/articles/transferring-a-repository)".

{% endtip %}

#### Acesso de proprietário em um repositório de propriedade de uma conta de usuário

O proprietário do repositório tem controle total do repositório. Além de todas as permissões concedidas aos colaboradores de repositório, o proprietário do repositório pode:

- {% if currentVersion == "free-pro-team@latest" %}[Convidar colaboradores](/articles/inviting-collaborators-to-a-personal-repository){% else %}[Adicionar colaboradores](/articles/inviting-collaborators-to-a-personal-repository){% endif %}
- Alterar a visibilidade do repositório (de [pública para privada](/articles/making-a-public-repository-private) ou de [privada para pública](/articles/making-a-private-repository-public)){% if currentVersion == "free-pro-team@latest" %}
- [Restringir interações no repositório](/articles/limiting-interactions-with-your-repository){% endif %}
- Fazer merge de uma pull request em um branch protegido, mesmo sem revisões de aprovação
- [Excluir o repositório](/articles/deleting-a-repository)
- [Gerenciar os tópicos de um repositório](/articles/classifying-your-repository-with-topics){% if currentVersion == "free-pro-team@latest" %}
- Gerenciar configurações de segurança e análise. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua conta de usuário](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)".{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [Habilitar o gráfico de dependências](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository) para um repositório privado{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- Excluir pacotes. Para obter mais informações, consulte "[Excluir um pacote](/github/managing-packages-with-github-packages/deleting-a-package)".{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
- Criar e editar cartões sociais do repositório. Para obter mais informações, consulte "[Personalizar a exibição das redes sociais do repositório](/articles/customizing-your-repositorys-social-media-preview)".
- Transformar o repositório em um modelo. Para obter mais informações, consulte "[Criar um repositório modelo](/articles/creating-a-template-repository)".{% endif %}
- Receber [{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) em um repositório{% if currentVersion == "free-pro-team@latest" %}
- Ignorar {% data variables.product.prodname_dependabot_alerts %} no seu repositório. Para obter mais informações, consulte "[Visualizar e atualizar dependências vulneráveis no seu repositório](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository). "
- [Gerenciar o uso de dados para o seu repositório privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository){% endif %}
- [Definir os proprietários do código do repositório](/articles/about-code-owners)
- [Arquivar repositórios](/articles/about-archiving-repositories){% if currentVersion == "free-pro-team@latest" %}
- Criar consultorias de segurança. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
- Exibir um botão de patrocinador. Para obter mais informações, consulte "[Exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)".{% endif %}

Só existe um **único proprietário** de um repositório pertencente a uma conta de usuário. Essa permissão não pode ser compartilhada com outra conta de usuário. Para transferir a propriedade de um repositório a outro usuário, consulte "[Como transferir um repositório](/articles/how-to-transfer-a-repository)".

#### Acesso de colaborador em um repositório de propriedade de uma conta de usuário

{% note %}

**Observação:** Em um repositório privado, proprietários de repositórios podem conceder somente acesso de gravação aos colaboradores. Os colaboradores não podem ter acesso somente leitura a repositórios pertencentes a uma conta de usuário.

{% endnote %}

Em um repositório pessoal, os colaboradores podem:

- Fazer push para (gravar), fazer pull de (ler) e bifurcar (copiar) o repositório
- Criar, aplicar e excluir etiquetas e marcos
- Abrir, fechar, reabrir e atribuir problemas
- Editar e excluir comentários em commits, pull request e problemas
- Marcar um problema ou pull request como duplicata. Para obter mais informações, consulte "[Sobre problemas e pull requests duplicados](/articles/about-duplicate-issues-and-pull-requests)".
- Abrir, fazer merge e fechar pull requests
- Aplicar as alterações sugeridas em pull requests. Para obter mais informações, consulte "[Incluir feedback na pull request](/articles/incorporating-feedback-in-your-pull-request)".
- Enviar pull requests das bifurcações do repositório{% if currentVersion == "free-pro-team@latest" %}
- Publicar, visualizar e instalar pacotes. Para obter mais informações, consulte "[Publicar e gerenciar pacotes](/github/managing-packages-with-github-packages/publishing-and-managing-packages)".{% endif %}
- Criar e editar Wikis
- Criar e editar versões. Para obter mais informações, consulte "[Gerenciar versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository).
- Remover a si mesmos como colaboradores do repositório
- Enviar uma revisão de uma pull request que afetará a capacidade de merge dela
- Atuar como um proprietário do código designado do repositório. Para obter mais informações, consulte "[Sobre proprietários do código](/articles/about-code-owners)".
- Bloquear uma conversa. Para obter mais informações, consulte "[Bloquear conversas](/articles/locking-conversations)".{% if currentVersion == "free-pro-team@latest" %}
- Denunciar conteúdo abusivo para o {% data variables.contact.contact_support %}. Para obter mais informações, consulte "[Relatar abuso ou spam](/articles/reporting-abuse-or-spam)".{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
- Transferir um problema para um repositório diferente. Para obter mais informações, consulte "[Transferir um problema para outro repositório](/articles/transferring-an-issue-to-another-repository)".{% endif %}

### Leia mais

- "[Convidar colaboradores para um repositório pessoal](/articles/inviting-collaborators-to-a-personal-repository)"
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"
