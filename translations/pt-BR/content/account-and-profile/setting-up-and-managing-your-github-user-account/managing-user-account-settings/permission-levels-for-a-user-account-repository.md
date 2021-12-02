---
title: Níveis de permissão para um repositório de conta de usuário
intro: 'Um repositório pertencente a uma conta de usuário tem dois níveis de permissão: o proprietário do repositório e colaboradores.'
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Repositórios de usuário de permissão
---

## Sobre os níveis de permissões para um repositório de conta de usuário

Repositórios pertencentes a contas de usuário têm um proprietário. As permissões de propriedade não podem ser compartilhadas com outra conta de usuário.

Você também pode {% ifversion fpt or ghec %}convidar{% else %}add{% endif %} usuários em {% data variables.product.product_name %} para o seu repositório como colaboradores. Para obter mais informações, consulte "[Convidar colaboradores para um repositório pessoal](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)".

{% tip %}

**Dica:** Se você precisar de mais acesso granular a um repositório pertencente à sua conta de usuário, considere transferir o repositório para uma organização. Para obter mais informações, consulte "[Transferir um repositório](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-user-account)".

{% endtip %}

## Acesso de proprietário para um repositório de propriedade de uma conta de usuário

O proprietário do repositório tem controle total do repositório. Além das ações que qualquer colaborador pode executar, o proprietário do repositório pode executar as ações a seguir.

| Ação                                                                                                                                                             | Mais informações                                                                                                                                                                                                                                                                                                 |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% ifversion fpt or ghec %}Convidar colaboradores{% else %}Adicionar colaboradores{% endif %}                                                                    |                                                                                                                                                                                                                                                                                                                  |
| "[Convidar colaboradores para um repositório pessoal](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)" |                                                                                                                                                                                                                                                                                                                  |
| Alterar a visibilidade do repositório                                                                                                                            | "[Configurar a visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)" {% ifversion fpt or ghec %}
| Limitar interações com o repositório                                                                                                                             | "[Limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".|{% endif %}{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}
| Renomear um branch, incluindo o branch padrão                                                                                                                    | "[Renomear um branch](/github/administering-a-repository/renaming-a-branch)" ➲{% endif %}
| Fazer merge de uma pull request em um branch protegido, mesmo sem revisões de aprovação                                                                          | "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches)"                                                                                                                                                                                                                       |
| Excluir o repositório                                                                                                                                            | "[Excluir um repositório](/github/administering-a-repository/deleting-a-repository)"                                                                                                                                                                                                                             |
| Gerenciar tópicos do repositório                                                                                                                                 | "[Classificar seu repositório com tópicos](/github/administering-a-repository/classifying-your-repository-with-topics)" {% ifversion fpt or ghec %}
| Gerenciar configurações de segurança e análise para o repositório                                                                                                | "[Gerenciar as configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" |{% endif %}{% ifversion fpt or ghec %}
| Habilitar o gráfico de dependências para um repositório privado                                                                                                  | "[Explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)" |{% endif %}{% ifversion fpt or ghes > 3.0 or ghec %}
| Excluir e restaurar pacotes                                                                                                                                      | "[Excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)"|{% endif %}{% ifversion ghes = 3.0 or ghae %}
| Excluir pacotes                                                                                                                                                  | "[Excluir pacotes](/packages/learn-github-packages/deleting-a-package)" 
{% endif %}
| Personalizar a visualização das mídias sociais do repositório                                                                                                    | "[Personalizar a visualização das mídias sociais do seu repositório](/github/administering-a-repository/customizing-your-repositorys-social-media-preview)"                                                                                                                                                      |
| Criar um modelo a partir do repositório                                                                                                                          | "[Criando um repositório de modelo](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)"{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
| Controle o acesso aos alertas de {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis                                         | "[Gerenciar as configurações de segurança e análise do repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" |{% endif %}{% ifversion fpt or ghec %}
| Ignorar {% data variables.product.prodname_dependabot_alerts %} no repositório                                                                                 | "[Visualizar e atualizar dependências vulneráveis no seu repositório](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"                                                                                                                                |
| Gerenciar o uso de dados para um repositório privado                                                                                                             | "[Gerenciar as configurações de uso de dados para o seu repositório privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)"
{% endif %}
| Definir os proprietários do código do repositório                                                                                                                | "[Sobre proprietários do código](/github/creating-cloning-and-archiving-repositories/about-code-owners)"                                                                                                                                                                                                         |
| Arquivar o repositório                                                                                                                                           | "[Arquivar repositórios](/repositories/archiving-a-github-repository/archiving-repositories)" |{% ifversion fpt or ghec %}
| Criar consultorias de segurança                                                                                                                                  | "[Sobre {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)"                                                                                                                                                                |
| Exibir um botão de patrocinador                                                                                                                                  | "[Exibir um botão de patrocinador no repositório](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository)" |{% endif %}{% ifversion fpt or ghae or ghes > 3.0 or ghec %}
| Permitir ou negar merge automático para pull requests                                                                                                            | "[Gerenciar merge automático para pull requests no seu repositório](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)", {% endif %}

## Acesso de colaborador para um repositório pertencente a uma conta de usuário

Os colaboradores em um repositório pessoal podem extrair (ler) os conteúdos do repositório e fazer push (gravação) das alterações no repositório.

{% note %}

**Observação:** Em um repositório privado, proprietários de repositórios podem conceder somente acesso de gravação aos colaboradores. Os colaboradores não podem ter acesso somente leitura a repositórios pertencentes a uma conta de usuário.

{% endnote %}

Os colaboradores também podem executar as seguintes ações.

| Ação                                                                                     | Mais informações                                                                                                                                                                                                  |
|:---------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bifurcar o repositório                                                                   | "[Sobre bifurcações](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)" |{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
| Renomear um branch diferente do branch padrão                                            | "[Renomear um branch](/github/administering-a-repository/renaming-a-branch)" ➲{% endif %}
| Criar, editar e excluir comentários em commits, pull requests e problemas no repositório | <ul><li>"[Sobre problemas](/github/managing-your-work-on-github/about-issues)"</li><li>"[Comentando em um pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"</li><li>"[Gerenciar comentários disruptivos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"</li></ul>                                                                                                                                                                                         |
| Criar, atribuir, fechar e reabrir problemas no repositório                               | "[Gerenciar o seu trabalho com problemas](/github/managing-your-work-on-github/managing-your-work-with-issues)"                                                                                                   |
| Gerenciar etiquetas para problemas e pull requests no repositório                        | "[Etiquetar problemas e pull requests](/github/managing-your-work-on-github/labeling-issues-and-pull-requests)"                                                                                                   |
| Gerenciar marcos para problemas e pull requests no repositório                           | "[Criar e editar marcos para problemas e pull requests](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests)"                                                       |
| Marcar um problema ou pull request no repositório como duplicado                         | "[Sobre problemas e pull requests duplicados](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests)"                                                                                     |
| Criar, mesclar e fechar pull requests no repositório                                     | "[Propor alterações no seu trabalho com pull requests](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests)" |{% ifversion fpt or ghae or ghes > 3.0 or ghec %}
| Habilitar e desabilitar o merge automático para um pull request                          | "[Fundir automaticamente um pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)"{% endif %}
| Aplicar alterações sugeridas aos pull requests no repositório                            | "[Incorporar feedback no seu pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request)"                                       |
| Criar um pull request a partir de uma bifurcação do repositório                          | "[Criar uma pull request de uma bifurcação](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)"                                                                             |
| Enviar uma revisão em um pull request que afeta a capacidade de merge do pull request    | "[Revisando alterações propostas em uma pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"                           |
| Criar e editar uma wiki para o repositório                                               | "[Sobre wikis](/communities/documenting-your-project-with-wikis/about-wikis)"                                                                                                                                     |
| Criar e editar versões para o repositório                                                | "[Gerenciar versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository)"                                                                                                     |
| Agir como proprietário do código para o repositório                                      | "[Sobre os proprietários do código](/articles/about-code-owners)" |{% ifversion fpt or ghae or ghec %}
| Publicar, visualizar ou instalar pacotes                                                 | "[Publicar e gerenciar pacotes](/github/managing-packages-with-github-packages/publishing-and-managing-packages)",{% endif %}
| Remover a si mesmos como colaboradores do repositório                                    | "[Remover a si mesmo de um repositório de colaborador](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository)"                                               |

## Leia mais

- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
