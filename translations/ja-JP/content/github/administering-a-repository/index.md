---
title: リポジトリを管理する
redirect_from:
  - /categories/administering-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### 目次

{% topic_link_in_list /managing-repository-settings %}
    {% link_in_list /setting-repository-visibility %}{% if currentVersion == "free-pro-team@latest" %}
    {% link_in_list /managing-teams-and-people-with-access-to-your-repository %}{% endif %}
    {% link_in_list /classifying-your-repository-with-topics %}
    {% link_in_list /customizing-how-changed-files-appear-on-github %}
    {% link_in_list /about-email-notifications-for-pushes-to-your-repository %}
<!-- if currentVersion == "free-pro-team@latest" -->
    {% link_in_list /displaying-a-sponsor-button-in-your-repository %}
<!-- endif -->
<!-- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" -->
    {% link_in_list /customizing-your-repositorys-social-media-preview %}
<!-- endif -->
<!-- if currentVersion == "free-pro-team@latest" -->
    {% link_in_list /viewing-deployment-activity-for-your-repository %}
<!-- endif -->
    {% link_in_list /managing-the-forking-policy-for-your-repository %}
<!-- if enterpriseServerVersions contains currentVersion -->
    {% link_in_list /setting-the-default-branch %}
    {% link_in_list /disabling-or-limiting-github-actions-for-a-repository %}
    {% link_in_list /managing-git-lfs-objects-in-archives-of-your-repository %}
    {% link_in_list /enabling-anonymous-git-read-access-for-a-repository %}
<!-- endif -->
<!-- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" -->
    {% link_in_list /configuring-autolinks-to-reference-external-resources %}
<!-- endif -->
    {% link_in_list /renaming-a-repository %}
    {% link_in_list /transferring-a-repository %}
    {% link_in_list /deleting-a-repository %}
<!-- if currentVersion == "free-pro-team@latest" -->
    {% link_in_list /restoring-a-deleted-repository %}
<!-- endif -->
{% topic_link_in_list /managing-branches-in-your-repository %}
    {% link_in_list /viewing-branches-in-your-repository %}
    {% link_in_list /changing-the-default-branch %}
    {% link_in_list /deleting-and-restoring-branches-in-a-pull-request %}
{% topic_link_in_list /configuring-pull-request-merges %}
    {% link_in_list /about-merge-methods-on-github %}
    {% link_in_list /configuring-commit-squashing-for-pull-requests %}
    {% link_in_list /configuring-commit-rebasing-for-pull-requests %}
<!-- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" -->
    {% link_in_list /managing-the-automatic-deletion-of-branches %}
<!-- endif -->
{% topic_link_in_list /defining-the-mergeability-of-pull-requests %}
    {% link_in_list /about-protected-branches %}
    {% link_in_list /configuring-protected-branches %}
    {% link_in_list /about-required-status-checks %}
    {% link_in_list /types-of-required-status-checks %}
    {% link_in_list /enabling-required-status-checks %}
    {% link_in_list /about-branch-restrictions %}
    {% link_in_list /enabling-branch-restrictions %}
    {% link_in_list /about-required-reviews-for-pull-requests %}
    {% link_in_list /enabling-required-reviews-for-pull-requests %}
    {% link_in_list /about-required-commit-signing %}
    {% link_in_list /enabling-required-commit-signing %}
<!-- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" -->
    {% link_in_list /requiring-a-linear-commit-history %}
    {% link_in_list /enabling-force-pushes-to-a-protected-branch %}
    {% link_in_list /enabling-deletion-of-a-protected-branch %}
<!-- endif -->
{% topic_link_in_list /releasing-projects-on-github %}
    {% link_in_list /about-releases %}
    {% link_in_list /managing-releases-in-a-repository %}
    {% link_in_list /viewing-your-repositorys-releases-and-tags %}
    {% link_in_list /linking-to-releases %}
<!-- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" -->
    {% link_in_list /comparing-releases %}
<!-- endif -->
<!-- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.15" -->
    {% link_in_list /automation-for-release-forms-with-query-parameters %}
<!-- endif -->
<!-- if currentVersion == "free-pro-team@latest" -->
{% topic_link_in_list /securing-your-repository %}
    {% link_in_list /about-securing-your-repository %}
    {% link_in_list /about-secret-scanning %}
    {% link_in_list /configuring-secret-scanning-for-private-repositories %}
    {% link_in_list /managing-alerts-from-secret-scanning %}
    {% link_in_list /managing-security-and-analysis-settings-for-your-repository %}
<!-- endif -->
<!-- if currentVersion == "free-pro-team@latest" -->
{% topic_link_in_list /keeping-your-dependencies-updated-automatically %}
    {% link_in_list /about-dependabot-version-updates %}
    {% link_in_list /enabling-and-disabling-version-updates %}
    {% link_in_list /listing-dependencies-configured-for-version-updates %}
    {% link_in_list /managing-pull-requests-for-dependency-updates %}
    {% link_in_list /customizing-dependency-updates %}
    {% link_in_list /configuration-options-for-dependency-updates %}
    {% link_in_list /keeping-your-actions-up-to-date-with-dependabot %}
<!-- endif -->
