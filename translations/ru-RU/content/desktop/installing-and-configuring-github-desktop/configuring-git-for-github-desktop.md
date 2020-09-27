---
title: Configuring Git for GitHub Desktop
shortTitle: Configuring Git
intro: 'If you don''t already have Git installed, you must configure it before using GitHub Desktop.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
versions:
  free-pro-team: '*'
---

{{ site.data.variables.product.prodname_desktop }} uses the email address you set in your local Git configuration to connect commits with your account on {{ site.data.variables.product.product_name}}.

{{ site.data.reusables.desktop.update-email-address }}

{% tip %}

**Tip**: Anyone will be able to see the email address in your Git configuration if you make public commits. For more information, see "[Setting your commit email address](/articles/setting-your-commit-email-address/)."

{% endtip %}

{% mac %}

{{ site.data.reusables.desktop.sign-in-choose-product }}
{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.emails }}
{{ site.data.reusables.desktop.copy-email-git-config }}
{{ site.data.reusables.desktop.return-to-desktop }}
{{ site.data.reusables.desktop.mac-select-desktop-menu }}
7. In the Preferences window, click **Git**. ![The Git Pane in the Preferences menu](/assets/images/help/desktop/mac-select-git-pane.png)
{{ site.data.reusables.desktop.name-field-git-config }}
  ![The name field of the Git configuration](/assets/images/help/desktop/mac-name-git-config.png)
{{ site.data.reusables.desktop.paste-email-git-config }}
  ![Pasted email address in Git configuration field](/assets/images/help/desktop/mac-email-git-config.png)
{{ site.data.reusables.desktop.click-save-git-config }}
  ![Save button in Git configuration field](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{{ site.data.reusables.desktop.sign-in-choose-product }}
{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.emails }}
{{ site.data.reusables.desktop.copy-email-git-config }}
{{ site.data.reusables.desktop.return-to-desktop }}
{{ site.data.reusables.desktop.windows-choose-options }}
8. In the Options window, click **Git**. ![The Git Pane in the Options menu](/assets/images/help/desktop/windows-select-git-pane.png)
{{ site.data.reusables.desktop.name-field-git-config }}
  ![The name field of the Git configuration](/assets/images/help/desktop/windows-name-git-config.png)
{{ site.data.reusables.desktop.paste-email-git-config }}
  ![Pasted email address in Git configuration field](/assets/images/help/desktop/windows-email-git-config.png)
{{ site.data.reusables.desktop.click-save-git-config }}
  ![Save button in Git configuration field](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

### Дополнительная литература

- "[Adding an email address to your GitHub account](/articles/adding-an-email-address-to-your-github-account/)"
- "[Setting your commit email address](/articles/setting-your-commit-email-address/)"
