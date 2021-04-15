---
title: Sobre os avisos de segurança do GitHub
intro: 'Você pode usar o {% data variables.product.prodname_security_advisories %} para discutir, corrigir e publicar informações sobre vulnerabilidades de segurança no seu repositório.'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-github-security-advisories
versions:
  free-pro-team: '*'
topics:
  - segurança
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### Sobre o {% data variables.product.prodname_security_advisories %}

{% data reusables.security-advisory.disclosing-vulnerabilities %} Para obter mais informações, consulte "[Sobre a divulgação coordenada de vulnerabilidades de segurança](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities)".

{% data reusables.security-advisory.security-advisory-overview %}

Com {% data variables.product.prodname_security_advisories %}, você pode:

1. Criar um aviso de segurança rascunho e usar o rascunho para discutir em particular o impacto da vulnerabilidade no seu projeto. Para obter mais informações, consulte "[Criar uma consultoria de segurança](/github/managing-security-vulnerabilities/creating-a-security-advisory)".
2. Colaborar de modo particular com a correção da vulnerabilidade em uma bifurcação privada temporária.
3. Publique a consultoria de segurança para alertar a sua comunidade sobre a vulnerabilidade depois que um patch for lançado. Para obter mais informações, consulte "[Publicar uma consultoria de segurança](/github/managing-security-vulnerabilities/publishing-a-security-advisory)".

{% data reusables.repositories.security-advisories-republishing %}

Você pode dar crédito a indivíduos que contribuíram para um aviso de segurança. Para obter mais informações, consulte "[Editar um aviso de segurança](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)."

{% data reusables.repositories.security-guidelines %}

Se você criou uma consultoria de segurança no seu repositório, o consultório de segurança permanecerá no seu repositório. Publicamos consultorias de segurança para qualquer um dos ecossistemas compatíveis com o gráfico de dependências para o {% data variables.product.prodname_advisory_database %} em [github.com/advisories](https://github.com/advisories). Se uma consultoria de segurança for especificamente para o npm, nós também publicamos a consultoria nas consultorias de segurança do npm. Para obter mais informações, consulte [npmjs.com/advisories](https://www.npmjs.com/advisories).

{% data reusables.repositories.github-security-lab %}

### Números de identificação CVE

{% data variables.product.prodname_security_advisories %} baseia-se na base da lista de Vulnerabilidades e Exposições Comuns (CVE). O formulário de consultoria de segurança em {% data variables.product.prodname_dotcom %} é um formulário padronizado que corresponde ao formato de descrição CVE.

{% data variables.product.prodname_dotcom %} é uma Autoridade de Numeração CVE (CNA) e está autorizada a atribuir números de identificação CVE. Para obter mais informações, consulte "[Sobre CVE](https://cve.mitre.org/about/index.html)" e "[Autoridades de Numeração CVE](https://cve.mitre.org/cve/cna.html)" no site da CVE.

Ao criar um aviso de segurança para um repositório público no {% data variables.product.prodname_dotcom %}, você tem a opção de fornecer um número de identificação CVE existente para a vulnerabilidade de segurança. {% data reusables.repositories.request-security-advisory-cve-id %}

Uma vez que você publicou o aviso de segurança e o {% data variables.product.prodname_dotcom %} atribuiu um número de identificação CVE para a vulnerabilidade, o {% data variables.product.prodname_dotcom %} irá publicar o CVE no banco de dados do MITRE. Para obter mais informações, consulte "[Publicar um aviso de segurança](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)."

### {% data variables.product.prodname_dependabot_alerts %} para o aviso de segurança publicado

{% data reusables.repositories.github-reviews-security-advisories %}