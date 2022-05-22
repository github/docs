---
title: Über GitHub Security Advisories
intro: 'Du kannst {% data variables.product.prodname_security_advisories %} verwenden, um auf privater Ebene Sicherheitslücken in Deinem Repository zu diskutieren, sie zu beheben und Informationen dazu zu veröffentlichen.'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
versions:
  free-pro-team: '*'
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### Informationen zu {% data variables.product.prodname_security_advisories %}

{% data variables.product.prodname_security_advisories %} erlaubt es Repository-Betreuern, eine Sicherheitslücke in einem Projekt privat zu diskutieren und zu beheben. Nach der Zusammenarbeit an einer Korrektur können Repository-Betreuer den Sicherheitshinweis veröffentlichen, um die Sicherheitslücke für die Projekt-Community öffentlich bekannt zu machen. Durch die Veröffentlichung von Sicherheitshinweisen erleichtern die Repository-Betreuer ihrer Community das aktualisieren von betroffenen Paketen und die Untersuchung der Auswirkungen der Sicherheitslücken.

Mit {% data variables.product.prodname_security_advisories %} kannst Du:

1. Einen Entwurf für einen Sicherheitshinweis erstellen und den Entwurf benutzen, um die Auswirkung der Schwachstelle auf Dein Projekt privat zu diskutieren.
2. Privat mit anderen zusammenarbeiten, um die Schwachstelle in einem temporären privaten Fork zu beheben.
3. Den Sicherheitshinweis veröffentlichen um Deine Community auf die Schwachstelle hinzuweisen.

{% data reusables.repositories.security-advisories-republishing %}

Informationen zu den ersten Schritten findest Du unter „[Einen Sicherheitshinweis erstellen](/github/managing-security-vulnerabilities/creating-a-security-advisory).“

You can give credit to individuals who contributed to a security advisory. Weitere Informationen findest Du unter „[Einen Sicherheitshinweis bearbeiten](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)."

{% data reusables.repositories.security-guidelines %}

{% data reusables.repositories.github-security-lab %}

### CVE-Identifikationsnummern

{% data variables.product.prodname_security_advisories %} basiert auf der Grundlage der 'Common Vulnerabilities and Exposures (CVE)'-Liste (Liste der häufigsten Schwachstellen und Gefährdungen). {% data variables.product.prodname_dotcom %} ist eine 'CVE Numbering Authority (CNA)' (Nummerierungsautorität ) und ist berechtigt, CVE-Identifikationsnummern zuzuweisen. Weitere Informationen findest Du unter „[Über CVE](https://cve.mitre.org/about/index.html)" und „[CVE Numbering Authorities](https://cve.mitre.org/cve/cna.html)" auf der CVE-Website.

Wenn Du einen Sicherheitshinweis für ein öffentliches Repository auf {% data variables.product.prodname_dotcom %} erstellst, hast Du die Möglichkeit, eine vorhandene CVE-Identifikationsnummer für die Sicherheitslücke beizufügen. {% data reusables.repositories.request-security-advisory-cve-id %}

Once you've published the security advisory and {% data variables.product.prodname_dotcom %} has assigned a CVE identification number to the vulnerability, {% data variables.product.prodname_dotcom %} publishes the CVE to the MITRE database. Für weitere Informationen siehe „[Einen Sicherheitshinweis veröffentlichen](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)."

### {% data variables.product.prodname_dependabot_alerts %} for published security advisories

{% data reusables.repositories.github-reviews-security-advisories %}
