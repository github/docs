---
title: Níveis de permissão para consultorias de segurança
intro: As ações que você pode tomar em uma consultoria de segurança dependem do fato de você ter permissões de administrador ou de gravação na consultoria de segurança.
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
versions:
  free-pro-team: '*'
---

### Visão geral das permissões

{% data reusables.repositories.security-advisory-admin-permissions %} Para obter mais informações sobre como adicionar um colaborador a uma consultora de segurança, consulte "[Adicionar um colaborador a uma consultora de segurança](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)."

| Ação                                                                                                                                                                                                                                                                                           | Permissões de gravação | Permissões de administrador |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------------- |
| Veja um rascunho da consultoria de segurança                                                                                                                                                                                                                                                   | X                      | X                           |
| Adicionar colaboradores à conselheira de segurança (consulte "[Adicionar colaborador a um consultor de segurança](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)")                                                                                    |                        | X                           |
| Editar e excluir quaisquer comentários na consultoria de segurança                                                                                                                                                                                                                             | X                      | X                           |
| Criar uma bifurcação privada temporária na consultora de segurança (consulte "[Colaborar em uma bifurcação privada temporária para resolver uma vulnerabilidade de segurança](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)")                       |                        | X                           |
| Adicionar alterações a um fork privado temporário na consultoria de segurança (consulte "[Colaborar em uma bifurcação privada temporária para resolver uma vulnerabilidade de segurança](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)")            | X                      | X                           |
| Criar pull requests em uma bifurcação privada temporária (consulte "[Colaborar em uma bifurcação privada temporária para resolver uma vulnerabilidade de segurança](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)") | X                      | X                           |
| Mesclar as alterações na consultoria de segurança (consulte "[Colaborar em uma bifurcação privada temporária para resolver uma vulnerabilidade de segurança](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)")                                        |                        | X                           |
| Adicionar e editar metadados na consultora de segurança (consulte "[Publicar uma consultoria de segurança](/github/managing-security-vulnerabilities/publishing-a-security-advisory)")                                                                                                         | X                      | X                           |
| Adicionar e remover créditos para uma consultoria de segurança (ver "[Editar uma consultoria de segurança](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)")                                                                      | X                      | X                           |
| Fechar o rascunho da consultoria de segurança                                                                                                                                                                                                                                                  |                        | X                           |
| Publicar a consultora de segurança (consulte "[Publicar uma consultoria de segurança](/github/managing-security-vulnerabilities/publishing-a-security-advisory)")                                                                                                                              |                        | X                           |

### Leia mais

- "[Adicionar um colaborador a uma consultora de segurança](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)"
- "[Colaborar em uma bifurcação privada temporária para resolver uma vulnerabilidade de segurança](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)"
- "[Remover um colaborador de uma consultoria de segurança](/github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory)"
- "[Retirar uma consultora de segurança](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
