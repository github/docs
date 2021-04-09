---
title: Dependabot エラーのトラブルシューティング
intro: 'Sometimes {% data variables.product.prodname_dependabot %} is unable to raise a pull request to update your dependencies. エラーをレビューして {% data variables.product.prodname_dependabot %} をブロック解除できます。'
shortTitle: エラーのトラブルシューティング
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
versions:
  free-pro-team: '*'
topics:
  - セキュリティ
---

### About {% data variables.product.prodname_dependabot %} errors

{% data reusables.dependabot.pull-request-introduction %}

何らかが {% data variables.product.prodname_dependabot %} によるプルリクエストの発行を妨げる場合、エラーとして報告されます。

### Investigating errors with {% data variables.product.prodname_dependabot_security_updates %}

{% data variables.product.prodname_dependabot %} が {% data variables.product.prodname_dependabot %} アラートを修正するためのプルリクエストの作成をブロックされると、アラートにエラーメッセージを投稿します。 {% data variables.product.prodname_dependabot_alerts %} ビューには、未解決のアラートのリストが表示されます。 アラートビューにアクセスするには、リポジトリの [**Security**] タブで [**{% data variables.product.prodname_dependabot_alerts %}**] をクリックします。 Where a pull request that will fix the vulnerable dependency has been generated, the alert includes a link to that pull request.

![{% data variables.product.prodname_dependabot_alerts %} view showing a pull request link](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

There are three reasons why an alert may have no pull request link:

1. {% data variables.product.prodname_dependabot_security_updates %} are not enabled for the repository.
1. The alert is for an indirect or transitive dependency that is not explicitly defined in a lock file.
1. エラーにより {% data variables.product.prodname_dependabot %} のプルリクエストの作成がブロックされました。

エラーによって {% data variables.product.prodname_dependabot %} によるプルリクエストの作成がブロックされた場合は、アラートをクリックしてエラーの詳細を表示できます。

![{% data variables.product.prodname_dependabot %} alert showing the error that blocked the creation of a pull request](/assets/images/help/dependabot/dependabot-security-update-error.png)

### Investigating errors with {% data variables.product.prodname_dependabot_version_updates %}

{% data variables.product.prodname_dependabot %} がエコシステムの依存関係を更新するためのプルリクエストの作成をブロックされると、マニフェストファイルにエラーアイコンを投稿します。 {% data variables.product.prodname_dependabot %} によって管理されるマニフェストファイルは、[{% data variables.product.prodname_dependabot %}] タブに一覧表示されます。 このタブにアクセスするには、リポジトリの [**Insights**] タブで [**Dependency graph**] をクリックし、[**{% data variables.product.prodname_dependabot %}**] タブをクリックします。

![{% data variables.product.prodname_dependabot %} view showing an error](/assets/images/help/dependabot/dependabot-tab-view-error-beta.png)

To see the log file for any manifest file, click the **Last checked TIME ago** link. When you display the log file for a manifest that's shown with an error symbol (for example, Maven in the screenshot above), any errors are also displayed.

![{% data variables.product.prodname_dependabot %} version update error and log ](/assets/images/help/dependabot/dependabot-version-update-error-beta.png)

### {% data variables.product.prodname_dependabot %} エラーを理解する

Pull requests for security updates act to upgrade a vulnerable dependency to the minimum version that includes a fix for the vulnerability. 対照的に、バージョン更新のプルリクエストは、パッケージマニフェストおよび {% data variables.product.prodname_dependabot %} 設定ファイルで許可されている最新バージョンに依存関係をアップグレードするように動作します。 Consequently, some errors are specific to one type of update.

#### {% data variables.product.prodname_dependabot %} が DEPENDENCY を脆弱でないバージョンに更新できない

**セキュリティアップデートのみ。** {% data variables.product.prodname_dependabot %} は、このリポジトリの依存関係グラフの他の依存関係を壊さずに、脆弱性のある依存関係を安全なバージョンに更新するためのプルリクエストを作成することはできません。

Every application that has dependencies has a dependency graph, that is, a directed acyclic graph of every package version that the application directly or indirectly depends on. Every time a dependency is updated, this graph must resolve otherwise the application won't build. When an ecosystem has a deep and complex dependency graph, for example, npm and RubyGems, it is often impossible to upgrade a single dependency without upgrading the whole ecosystem.

The best way to avoid this problem is to stay up to date with the most recently released versions, for example, by enabling version updates. This increases the likelihood that a vulnerability in one dependency can be resolved by a simple upgrade that doesn't break the dependency graph. 詳しい情報については、「[バージョン更新の有効化と無効化](/github/administering-a-repository/enabling-and-disabling-version-updates)」を参照してください。

#### {% data variables.product.prodname_dependabot %} cannot update to the required version as there is already an open pull request for the latest version

**Security updates only.** {% data variables.product.prodname_dependabot %} will not create a pull request to update the vulnerable dependency to a secure version because there is already an open pull request to update this dependency. You will see this error when a vulnerability is detected in a single dependency and there's already an open pull request to update the dependency to the latest version.

There are two options: you can review the open pull request and merge it as soon as you are confident that the change is safe, or close that pull request and trigger a new security update pull request. For more information, see "[Triggering a {% data variables.product.prodname_dependabot %} pull request manually](#triggering-a-dependabot-pull-request-manually)."

#### {% data variables.product.prodname_dependabot %} timed out during its update

{% data variables.product.prodname_dependabot %} took longer than the maximum time allowed to assess the update required and prepare a pull request. This error is usually seen only for large repositories with many manifest files, for example, npm or yarn monorepo projects with hundreds of *package.json* files. Updates to the Composer ecosystem also take longer to assess and may time out.

This error is difficult to address. If a version update times out, you could specify the most important dependencies to update using the `allow` parameter or, alternatively, use the `ignore` parameter to exclude some dependencies from updates. Updating your configuration might allow {% data variables.product.prodname_dependabot %} to review the version update and generate the pull request in the time available.

If a security update times out, you can reduce the chances of this happening by keeping the dependencies updated, for example, by enabling version updates. 詳しい情報については、「[バージョン更新の有効化と無効化](/github/administering-a-repository/enabling-and-disabling-version-updates)」を参照してください。

#### {% data variables.product.prodname_dependabot %} cannot open any more pull requests

There's a limit on the number of open pull requests {% data variables.product.prodname_dependabot %} will generate. When this limit is reached, no new pull requests are opened and this error is reported. The best way to resolve this error is to review and merge some of the open pull requests.

There are separate limits for security and version update pull requests, so that open version update pull requests cannot block the creation of a security update pull request. The limit for security update pull requests is 10. By default, the limit for version updates is 5 but you can change this using the `open-pull-requests-limit` parameter in the configuration file. 詳しい情報については、「[依存関係の更新の設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit) 」を参照してください。

The best way to resolve this error is to merge or close some of the existing pull requests and trigger a new pull request manually. For more information, see "[Triggering a {% data variables.product.prodname_dependabot %} pull request manually](#triggering-a-dependabot-pull-request-manually)."

#### {% data variables.product.prodname_dependabot %} can't resolve or access your dependencies

If {% data variables.product.prodname_dependabot %} attempts to check whether dependency references need to be updated in a repository, but can't access one or more of the referenced files, the operation will fail with the error message "{% data variables.product.prodname_dependabot %} can't resolve your LANGUAGE dependency files." The API error type is `git_dependencies_not_reachable`.

Similarly, if {% data variables.product.prodname_dependabot %} can't access a private package registry in which a dependency is located, one of the following errors is generated:

*   "Dependabot can't reach a dependency in a private package registry"<br> (API error type: `private_source_not_reachable`)
*   "Dependabot can't authenticate to a private package registry"<br> (API error type:`private_source_authentication_failure`)
*   "Dependabot timed out while waiting for a private package registry"<br> (API error type:`private_source_timed_out`)
*   "Dependabot couldn't validate the certificate for a private package registry"<br> (API error type:`private_source_certificate_failure`)

To allow {% data variables.product.prodname_dependabot %} to update the dependency references successfully, make sure that all of the referenced dependencies are hosted at accessible locations.

**Version updates only.** {% data reusables.dependabot.private-dependencies-note %} Additionally, {% data variables.product.prodname_dependabot %} doesn't support private {% data variables.product.prodname_dotcom %} dependencies for all package managers. For more information, see "[About Dependabot version updates](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)."

### Triggering a {% data variables.product.prodname_dependabot %} pull request manually

If you unblock {% data variables.product.prodname_dependabot %}, you can manually trigger a fresh attempt to create a pull request.

- **Security updates**—display the {% data variables.product.prodname_dependabot %} alert that shows the error you have fixed and click **Create {% data variables.product.prodname_dependabot %} security update**.
- **Version updates**—on the **Insights** tab for the repository click **Dependency graph**, and then click the **Dependabot** tab. Click **Last checked *TIME* ago** to see the log file that {% data variables.product.prodname_dependabot %} generated during the last check for version updates. Click **Check for updates**.
