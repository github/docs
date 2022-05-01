---
title: Níveis de permissão para consultorias de segurança do repositório
intro: As ações que você pode tomar em uma consultoria de segurança dependem do fato de você ter permissões de administrador ou de gravação na consultoria de segurança.
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
  - /code-security/security-advisories/permission-levels-for-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
shortTitle: Níveis de permissão
---

Este artigo aplica-se apenas às consultorias de segurança a nível de repositório. Qualquer um pode contribuir para consultorias de segurança globais no {% data variables.product.prodname_advisory_database %} em [github.com/consultores](https://github.com/advisories). As edições nas consultorias globais não mudarão ou afetarão a forma como a consultoria aparece no repositório.  Para obter mais informações, consulte "[Editando consultorias de segurança em {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)."

## Visão geral das permissões

{% data reusables.repositories.security-advisory-admin-permissions %} Para obter mais informações sobre como adicionar um colaborador a uma consultoria de segurança, consulte "[Adicionando um colaborador a uma consultora de segurança do repositório](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)."

| Ação                                                                                                                                                                                                                                                                                                                                                    | Permissões de gravação | Permissões de administrador |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------------- |
| Veja um rascunho da consultoria de segurança                                                                                                                                                                                                                                                                                                            | X                      | X                           |
| Adicionar colaboradores à consultoria de segurança (consulte "[Adicionando um colaborador a uma consultoria de segurança do repositório](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)")                                                                                                       |                        | X                           |
| Editar e excluir quaisquer comentários na consultoria de segurança                                                                                                                                                                                                                                                                                      | X                      | X                           |
| Criar uma bifurcação privada temporária na consultoria de segurança (consulte "[Colaborando em uma bifurcação privada temporária para resolver a vulnerabilidade de segurança do repositório](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)")                 |                        | X                           |
| Adicione alterações a uma bifurcação privada temporária na consultoria de segurança (consulte "[Colaborando em uma bifurcação privada temporária para resolver a vulnerabilidade de segurança do repositório](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | X                      | X                           |
| Crie pull requests em uma bifurcação privada temporária (consulte "[Colaborando em uma bifurcação privada temporária para resolver a vulnerabilidade de segurança do repositório](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)")                             | X                      | X                           |
| Faça merge das alterações na consultoria de segurança (consulte "[Colaborando em uma bifrucação privada temporária para resolver uma vulnerabilidade de segurança do repositório](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)")                             |                        | X                           |
| Adicione e edite metadados na consultoria de segurança (consulte "[Publicando uma consultoria de segurança do repositório](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)")                                                                                                                                   | X                      | X                           |
| Adicione e remova créditos para uma consultoria de segurança (consulte "[Editando uma consultoria de segurança do repositório](/code-security/repository-security-advisories/editing-a-repository-security-advisory)")                                                                                                                                  | X                      | X                           |
| Fechar o rascunho da consultoria de segurança                                                                                                                                                                                                                                                                                                           |                        | X                           |
| Publique a consultora de segurança (consulte "[Publicando uma consultoria de segurança do repositório](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)")                                                                                                                                                       |                        | X                           |

## Leia mais

- "[Adicionar um colaborador a uma consultoria de segurança do repositório](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
- "[Colaborando em uma bifurcação privada temporária para resolver uma vulnerabilidade de segurança do repositório](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- "[Removendo um colaborador de uma consultoria de segurança do repositório](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)"
- "[Retirando uma consultoria de segurança de repositório](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)"
