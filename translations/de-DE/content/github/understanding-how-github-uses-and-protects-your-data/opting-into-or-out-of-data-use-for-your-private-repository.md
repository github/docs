---
title: Datennutzung für Ihr privates Repository zulassen oder ablehnen
intro: 'Damit {% data variables.product.product_name %} Sie besser mit relevanten Tools, Personen, Projekten und Informationen verbinden kann, können Sie die Datennutzung für Ihr privates Repository zulassen. Wenn Sie die Datennutzung für Ihr privates Repository zugelassen haben und nicht mehr möchten, dass {% data variables.product.product_name %} Ihre Daten verwendet, können Sie die Datennutzung wieder ablehnen.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
versions:
  free-pro-team: '*'
---

### About data use for your private repository

Wenn Sie die Datennutzung für Ihr privates Repository zulassen, können Sie auf das Abhängigkeitsdiagramm zugreifen. Damit können Sie die Abhängigkeiten Ihres Repositorys verfolgen und Sicherheitsmeldungen erhalten, wenn {% data variables.product.product_name %} angreifbare Abhängigkeiten erkennt. Weitere Informationen finden Sie unter „[Informationen zu Sicherheitsmeldungen für angreifbare Abhängigkeiten](/articles/about-security-alerts-for-vulnerable-dependencies)“.

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

### Datennutzung für Ihr privates Repository zulassen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Wählen Sie unter „Data services“ (Datendienste) **Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository** ({% data variables.product.prodname_dotcom %} die Durchführung schreibgeschützter Analysen dieses Repositorys erlauben) aus. ![Kontrollkästchen, um {% data variables.product.prodname_dotcom %} die Durchführung schreibgeschützter Analysen dieses Repositorys zu erlauben](/assets/images/help/repository/private-repo-data-use-opt-in.png)
4. Optional können Sie auch das Kontrollkästchen neben den zusätzlichen Diensten aktivieren, für die Sie die Datennutzung zulassen möchten. ![Liste der zusätzlichen Dienste mit eigenen Kontrollkästchen](/assets/images/help/repository/private-repo-data-use-additional-services.png)

### Datennutzung für Ihr privates Repository ablehnen

{% tip %}

**Tipp:** Um die Datennutzung für bestimmte Dienste abzulehnen, heben Sie die Auswahl des Kontrollkästchens neben dem Dienst auf.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Heben Sie unter „Data services“ (Datendienste) die Auswahl von **Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository** ({% data variables.product.prodname_dotcom %} die Durchführung schreibgeschützter Analysen dieses Repositorys erlauben) auf. ![Kontrollkästchen, um {% data variables.product.prodname_dotcom %} die Durchführung schreibgeschützter Analysen dieses Repositorys zu verbieten](/assets/images/help/repository/private-repo-data-use-opt-out.png)

### Weiterführende Informationen

- „[Informationen zur Verwendung Ihrer Daten durch {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data)“
- „[Angreifbare Abhängigkeiten in Ihrem Repository anzeigen und aktualisieren](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)“
- „[Meldungen für angreifbare Abhängigkeiten in den Repositorys Ihrer Organisation verwalten](/articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories)“
