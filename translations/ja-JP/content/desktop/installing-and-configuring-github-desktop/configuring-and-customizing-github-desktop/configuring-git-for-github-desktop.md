---
title: GitHub Desktop用のGitの設定方法
shortTitle: Git を設定する
intro: 'You can manage Git configuration settings for your local repositories with {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
---

## About Git configuration for {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} uses your local Git configuration settings and provides the option to configure some of these settings, such as the global author information and the default branch that is used when creating a new repository.

{% data variables.product.prodname_desktop %} allows you to set the name and email address you would like associated with the commits you make in your repositories. If your name and email address have already been set in the global Git configuration for your computer, {% data variables.product.prodname_desktop %} will detect and use those values. {% data variables.product.prodname_desktop %} also allows you to set a different name and email address for an individual repository. This is useful when you need to use a separate work email address for a specific repository.

If the email address that has been set in your Git configuration does not match an email address associated with the {% data variables.product.product_name %} account you are currently logged in to, {% data variables.product.prodname_desktop %} will show a warning prior to committing.

{% data variables.product.prodname_desktop %} also allows you to change the default branch name that you would like to use when creating new repositories. By default, {% data variables.product.prodname_desktop %} uses `main` as the default branch name in any new repositories you create.

{% tip %}

**Tip**: 公開コミットをした場合、Gitコンフィグレーションにあるメールアドレスは皆に表示されます。 詳詳細は「[コミットメールアドレスを設定する](/articles/setting-your-commit-email-address/)」を参照してください。

{% endtip %}

## Configuring your global author information

Configuring your global author information in {% data variables.product.prodname_desktop %} will update the name and email address in your global Git configuration. This will be the default name and email address for all new local repositories you create in {% data variables.product.prodname_desktop %}.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. [Preferences] ウィンドウで [**Git**] を選択します。 ![[Preferences] メニュー内の Git ペイン](/assets/images/help/desktop/mac-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![Git コンフィグレーション内の [Name] フィールド](/assets/images/help/desktop/mac-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![Select email address in Git configuration field](/assets/images/help/desktop/mac-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Git 設定フィールドの [Save] ボタン](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. [Options] ウィンドウで [**Git**] を選択します。 ![[Options] メニュー内の Git ペイン](/assets/images/help/desktop/windows-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![Git コンフィグレーション内の [Name] フィールド](/assets/images/help/desktop/windows-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![Select email address in Git configuration field](/assets/images/help/desktop/windows-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Git 設定フィールドの [Save] ボタン](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## Configuring different author information for an individual repository

You can change the name and email address used to author commits in a specific repository. This local Git configuration will override your global Git configuration settings for this one repository only.

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.local-config-email %}
{% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.local-config-email %}
{% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## Configuring your default branch for new repositories

You can configure the default branch that will be used when you create a new repository in {% data variables.product.prodname_desktop %}. For more information about the default branch, see "[About the default branch](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. [Preferences] ウィンドウで [**Git**] を選択します。 ![[Preferences] メニュー内の Git ペイン](/assets/images/help/desktop/mac-select-git-pane.png)
1. Under "Default branch name for new repositories", select the default branch name you would like to use, or, to enter a custom name, select "Other...". ![Default branch name selection options](/assets/images/help/desktop/mac-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Git 設定フィールドの [Save] ボタン](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. [Options] ウィンドウで [**Git**] を選択します。 ![[Options] メニュー内の Git ペイン](/assets/images/help/desktop/windows-select-git-pane.png)
1. Under "Default branch name for new repositories", select the default branch name you would like to use, or select "Other..." to enter a custom name. ![Default branch name selection options](/assets/images/help/desktop/windows-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Git 設定フィールドの [Save] ボタン](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## 参考リンク

- "[GitHubアカウントへのEメールアドレスの追加](/articles/adding-an-email-address-to-your-github-account/)"
- [コミットメールアドレスを設定する](/articles/setting-your-commit-email-address/)
- [ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches)
