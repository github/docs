---
title: About GitHub Copilot session data
shortTitle: Session data
allowTitleToDifferFromFilename: true
intro: 'Understand what session data is, where it is stored, who can access it, and how it is managed.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot # Copilot discovery page
docsTeamMetrics:
  - copilot-cli
redirect_from:
  - /copilot/concepts/agents/copilot-cli/chronicle
---

A session is a period of interaction with {% data variables.product.prodname_copilot_short %}, such as a conversation in an IDE or work performed by an agent. **Session data** is the information recorded about that interaction. This can include prompts and responses, tools used, and changes made to files.

Your **session history** is the collection of sessions that you can query.

Session data helps you understand and return to work performed with {% data variables.product.prodname_copilot_short %}. You can use session data to:

* **Query your session history**: Ask natural-language questions about work from your previous sessions.
* **Resume sessions**: Pick up where you left off in any previous session.
* **Review or share** a session.
* **Generate insights** such as standup reports, workflow tips, and cost analysis.

The available capabilities depend on the surface where the session is running.

## Understanding session location and access

Where a session runs, where its data is stored, whether it is synced to your {% data variables.product.github %} account, and who can access it are separate considerations.

A locally run session can have data stored both on your machine and in your {% data variables.product.github %} account. Syncing a session does not share it with other people.

### Locally run sessions

{% data variables.copilot.copilot_cli_short %} and the {% data variables.copilot.github_copilot_app %} store the complete record of each session under `~/.copilot/session-state/`. They also store a subset of the data in a local SQLite database, referred to as the session store. The session store supports session-history queries and the `/chronicle` command.

Session storage for sessions started in an IDE is IDE-specific. For information about what session data is stored and where, see the documentation for your IDE.

### Sessions run on {% data variables.product.github %}

{% data variables.copilot.copilot_cloud_agent %} sessions run in an ephemeral environment hosted by {% data variables.product.github %}. The environment is destroyed when the session ends, but the session log remains available on {% data variables.product.prodname_dotcom_the_website %}. These sessions are shared by default and visible to people with access to the repository.

## Session syncing

By default, locally-run sessions created with {% data variables.copilot.copilot_cli_short %} or the {% data variables.copilot.github_copilot_app %} are synced to your {% data variables.product.github %} account.

You can control syncing for {% data variables.copilot.copilot_cli_short %} and the {% data variables.copilot.github_copilot_app %}.  See `remote` and `remoteExport` in [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference).

### Policy governing session syncing

For {% data variables.copilot.copilot_enterprise_short %} and {% data variables.copilot.copilot_business_short %} users, the applicable "**Store local sessions in the Cloud**" policy must be set to at least "View from cloud" for session data to be synced. If the policy is disabled or unconfigured, sessions are stored locally only.

## Privacy and sharing

Local sessions are unshared by default. You can share an individual local session with people who have access to the repository. Recipients have view-only access, and shared sessions are not included in queries of the recipient's own session history. See [Sharing a session](/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle#sharing-a-session).

Synced session data is tied to your personal account and is accessible only to you by default. Administrators can control whether syncing is available, but enabling syncing does not give them access to your session data.

{% data variables.copilot.copilot_cloud_agent %} sessions are shared by default. They appear in the "All sessions" view on the "Agents" tab of your repository, visible to anyone with access to the repository.

When you query previous interactions or use `/chronicle`,
{% data variables.product.prodname_copilot_short %} may send relevant session data, such as prompts, context, and responses, to the AI model.

## Access and retention of session data

The controls available for managing session data depend on where the session data is stored and accessed.

### Locally stored sessions

The following controls are available:

* **Share**: Create a shareable copy of the session as a link, gist, or file.
* **Delete**: Permanently remove the session from local storage.
* **Archive**: Move the session out of your active list without deleting it.

| Surface | Share | Delete | Archive |
| --- | --- | --- | --- |
| {% data variables.copilot.copilot_cli_short %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% data variables.copilot.github_copilot_app %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

For {% data variables.copilot.copilot_cli_short %}, deleting a local session that has been synced to your account prompts you to choose whether to also delete the synced copy. For the {% data variables.copilot.github_copilot_app %}, deleting a local session also deletes its synced copy immediately.

### Sessions stored on {% data variables.product.prodname_dotcom_the_website %}

The following controls are available:

* **Share**: Make the session visible to people with access to the repository.
* **Delete**: Permanently remove the synced session record from {% data variables.product.prodname_dotcom_the_website %}.
* **Archive**: Move the session out of the active list on {% data variables.product.prodname_dotcom_the_website %} without deleting it.

| Session source | Share | Delete | Archive |
| --- | --- | --- | --- |
| Synced {% data variables.copilot.copilot_cli_short %} session | {% octicon "check" aria-label="Supported" %} (Unshared by default) | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Synced {% data variables.copilot.github_copilot_app %} session | {% octicon "check" aria-label="Supported" %} (Unshared by default) | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.copilot.copilot_cloud_agent %} session | {% octicon "check" aria-label="Supported" %} (Shared by default) | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |

For more information, see:

* **{% data variables.copilot.copilot_cli_short %}**: [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle)
* **{% data variables.copilot.github_copilot_app %}**: [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions)
* **{% data variables.copilot.copilot_cloud_agent %}**: [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents)

For information about the session data controls available for {% data variables.product.prodname_copilot_short %} in an IDE, see the documentation for that IDE.

## Session management for {% data variables.copilot.copilot_cli_short %}

For {% data variables.copilot.copilot_cli_short %} specifically, you can manage locally stored session data using slash commands or by manually interacting with the session store located at `~/.copilot/session-state/`.

### Deleting session data

You can delete local session data from your machine and from your synced session history on {% data variables.product.prodname_dotcom_the_website %}. Deleting a session removes it from your local session list, your session-history index, and your synced session list.

Use the `/session` commands to delete CLI sessions or delete session data manually from `~/.copilot/session-state/`. See [Deleting sessions](/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle#deleting-sessions).

### Re-indexing the session store

If local session files are moved, restored from a backup, or no longer represented in the session store, `/chronicle reindex` rebuilds the session store from the files under `~/.copilot/session-state/`. See [Reindexing the session store](/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle#reindexing-the-session-store).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions)