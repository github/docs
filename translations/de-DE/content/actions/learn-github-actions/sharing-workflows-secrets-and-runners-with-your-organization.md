---
title: 'Sharing workflows, secrets, and runners with your organization'
shortTitle: Sharing workflows with your organization
intro: 'Learn how you can use organization features to collaborate with your team, by sharing workflow templates, secrets, and self-hosted runners.'
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: how_to
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

If you need to share workflows and other {% data variables.product.prodname_actions %} features with your team, then consider collaborating within a {% data variables.product.prodname_dotcom %} organization. An organization allows you to centrally store and manage secrets, artifacts, and self-hosted runners. You can also create workflow templates in the `.github` repository and share them with other users in your organization.

## Using workflow templates

{% data reusables.actions.workflow-organization-templates %} For more information, see "[Creating workflow templates](/actions/learn-github-actions/creating-workflow-templates)."

{% data reusables.actions.reusable-workflows %}

## Sharing secrets within an organization

You can centrally manage your secrets within an organization, and then make them available to selected repositories. This also means that you can update a secret in one location, and have the change apply to all repository workflows that use the secret.

Beim Erstellen eines geheimen Schlüssels in einer Organisation können Sie eine Richtlinie verwenden, um einzuschränken, welche Repositorys auf diesen geheimen Schlüssel zugreifen können. Sie können z. B. Zugriff auf alle Repositorys gewähren oder den Zugriff auf nur private Repositorys oder eine angegebene Liste von Repositorys beschränken.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Klicken Sie auf **Neue geheime**.
1. Geben Sie einen Namen für Ihr Geheimnis in das Eingabefeld **Name** ein.
1. Geben Sie den **Value** für Ihr Geheimnis ein.
1. Wählen Sie im **Repository-Zugriff** Dropdownliste eine Zugriffsrichtlinie aus.
1. Klicken Sie auf **Add secret** (Geheimnis hinzufügen).

## Share self-hosted runners within an organization

Organization admins can add their self-hosted runners to groups, and then create policies that control which repositories can access the group.

For more information, see "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."


## Nächste Schritte:

To continue learning about {% data variables.product.prodname_actions %}, see "[Creating workflow templates](/actions/learn-github-actions/creating-workflow-templates)."
