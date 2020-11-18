---
title: Sobre a consultoria de segurança do GitHub
intro: 'Você pode usar o {% data variables.product.prodname_security_advisories %} para discutir, corrigir e publicar informações sobre vulnerabilidades de segurança no seu repositório.'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
versions:
  free-pro-team: '*'
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### Sobre o {% data variables.product.prodname_security_advisories %}

O {% data variables.product.prodname_security_advisories %} permite que os mantenedores de repositório discutam e corrijam uma vulnerabilidade de segurança em um projeto. Após colaborar em uma correção, os mantenedores dos repositórios podem publicar a consultoria de segurança para divulgar publicamente a vulnerabilidade de segurança da comunidade do projeto. Ao publicar a consultoria de segurança, os mantenedores de repositórios facilitam para a sua comunidade a atualização de dependências do pacote e a pesquisa do impacto das vulnerabilidades de segurança.

Com {% data variables.product.prodname_security_advisories %}, você pode:

1. Criar um projeto de consultoria de segurança e usar o rascunho para discutir em particular o impacto da vulnerabilidade no seu projeto.
2. Colaborar de modo particular com a correção da vulnerabilidade em uma bifurcação privada temporária.
3. Publicar a consultoria de segurança para alertar a sua comunidade sobre a vulnerabilidade.

{% data reusables.repositories.security-advisories-republishing %}

Para começar, consulte "[Criar uma consultoria de segurança](/github/managing-security-vulnerabilities/creating-a-security-advisory)".

Você pode dar crédito a indivíduos que contribuíram para uma consultora de segurança. Para obter mais informações, consulte "[Editar um consultor de segurança](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)".

{% data reusables.repositories.security-guidelines %}

{% data reusables.repositories.github-security-lab %}

### Números de identificação CVE

{% data variables.product.prodname_security_advisories %} baseia-se na base da lista de Vulnerabilidades e Exposições Comuns (CVE). {% data variables.product.prodname_dotcom %} é uma Autoridade de Numeração CVE (CNA) e está autorizada a atribuir números de identificação CVE. Para obter mais informações, consulte "[Sobre CVE](https://cve.mitre.org/about/index.html)" e "[Autoridades de Numeração CVE](https://cve.mitre.org/cve/cna.html)" no site da CVE.

Ao criar uma consultoria de segurança para um repositório público no {% data variables.product.prodname_dotcom %}, você tem a opção de fornecer um número de identificação CVE existente para a vulnerabilidade de segurança. {% data reusables.repositories.request-security-advisory-cve-id %}

Uma que você publicou a consultoria de segurança e o {% data variables.product.prodname_dotcom %} atribuiu um número de identificação CVE para a vulnerabilidade, o {% data variables.product.prodname_dotcom %} irá publicar o CVE no banco de dados do MITRE. Para obter mais informações, consulte "[Publicar uma consultoria de segurança](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)".

### {% data variables.product.prodname_dependabot_alerts %} para consultoria de segurança publicada

{% data reusables.repositories.github-reviews-security-advisories %}
