---
title: Editando consultorias de segurança no banco de dados consultivo do GitHub
intro: 'Você pode enviar melhorias para qualquer consultoria publicada no {% data variables.product.prodname_advisory_database %}.'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
shortTitle: Editar banco de dados consultivo
---

## Sobre a edição de consultorias no {% data variables.product.prodname_advisory_database %}
Consultorias de segurança em {% data variables.product.prodname_advisory_database %} em [github.com/advisories](https://github.com/advisories) são consideradas consultorias globais. Qualquer pessoa pode sugerir melhorias em qualquer consultoria de segurança global na {% data variables.product.prodname_advisory_database %}. Você pode editar ou adicionar qualquer detalhe, incluindo ecossistemas adicionalmente afetados, nível de gravidade ou descrição de quem é impactado. A equipe de curadoria da {% data variables.product.prodname_security %} irá revisar as melhorias apresentadas e publicá-las em {% data variables.product.prodname_advisory_database %}, se aceitas.

Somente proprietários e administradores de repositórios podem editar consultorias de segurança no nível do repositório. Para obter mais informações, consulte "[Editando uma consultoria de segurança do repositório](/code-security/security-advisories/editing-a-security-advisory)".
## Editando consultorias no banco de dados consultivo do GitHub

1. Navegue até https://github.com/advisories.
2. Selecione a consultoria de segurança com a qual você gostaria de contribuir.
3. No lado direito da página, clique no link **Sugerir melhorias para esta vulnerabilidade**. ![Link para sugerir melhorias](/assets/images/help/security/suggest-improvements-to-advisory.png)
4. Na forma de contribuição, faça as melhorias desejadas. Você pode editar ou adicionar qualquer detalhe.
5. Quando terminar de editar a consultoria, clique em **Enviar melhorias**.
6. Depois de enviar suas melhorias, um pull request que contém suas alterações será criado para revisão em [github/advisory-database](https://github.com/github/advisory-database) pela equipe de curadoria de {% data variables.product.prodname_security %}. Se a consultoria se originar de um repositório {% data variables.product.prodname_dotcom %}, também marcaremos o editor original para comentários opcionais. Você pode ver o pull request e receber notificações quando ele for atualizado ou fechado.

Você também pode abrir um pull request diretamente em um arquivo consultivo no repositório [github/advisory-database](https://github.com/github/advisory-database). Para obter mais informações, consulte as [diretrizes de contribuição](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md). 
