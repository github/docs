---
title: Git für GitHub Desktop konfigurieren
shortTitle: Configuring Git
intro: 'Wenn Sie Git noch nicht installiert haben, müssen Sie es konfigurieren, bevor Sie GitHub Desktop verwenden.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_desktop %} uses the email address you set in your local Git configuration to connect commits with your account on {% data variables.product.product_name %}.

{% data reusables.desktop.update-email-address %}

{% tip %}

**Tipp**: Jeder kann die E-Mail-Adresse in der Git-Konfiguration einsehen, wenn Du öffentliche Commits machst. Weitere Informationen finden Sie unter „[Commit-E-Mail-Adresse festlegen](/articles/setting-your-commit-email-address/)“.

{% endtip %}

{% mac %}

{% data reusables.desktop.sign-in-choose-product %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.desktop.copy-email-git-config %}
{% data reusables.desktop.return-to-desktop %}
{% data reusables.desktop.mac-select-desktop-menu %}
7. In the Preferences window, click **Git**. ![Der Bereich „Git“ im Menü „Preferences“ (Voreinstellungen)](/assets/images/help/desktop/mac-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![Das Feld „Name“ (Name) der Git-Konfiguration](/assets/images/help/desktop/mac-name-git-config.png)
{% data reusables.desktop.paste-email-git-config %}
  ![In das Git-Konfigurationsfeld eingefügte E-Mail-Adresse](/assets/images/help/desktop/mac-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Save button in Git configuration field](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.sign-in-choose-product %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.desktop.copy-email-git-config %}
{% data reusables.desktop.return-to-desktop %}
{% data reusables.desktop.windows-choose-options %}
8. In the Options window, click **Git**. ![Der Bereich „Git“ im Menü „Options“ (Optionen)](/assets/images/help/desktop/windows-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![Das Feld „Name“ (Name) der Git-Konfiguration](/assets/images/help/desktop/windows-name-git-config.png)
{% data reusables.desktop.paste-email-git-config %}
  ![In das Git-Konfigurationsfeld eingefügte E-Mail-Adresse](/assets/images/help/desktop/windows-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Save button in Git configuration field](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

### Weiterführende Informationen

- „[Eine E-Mail-Adresse zum GitHub-Konto hinzufügen](/articles/adding-an-email-address-to-your-github-account/)“
- „[Commit-E-Mail-Adresse festlegen](/articles/setting-your-commit-email-address/)“
