---
title: Manually creating memories for GitHub Copilot
shortTitle: Create memories
intro: 'Prompt {% data variables.product.prodname_copilot_short %} to remember a personal preference or a fact about a repository.'
product: '{% data reusables.gated-features.copilot-memory %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=docs-web-copilot-memory-how-to-signup&utm_medium=docs&utm_campaign=dec25postuniverse" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.memory-how-to-intro %}

If {% data variables.copilot.copilot_memory %} is enabled, {% data variables.product.prodname_copilot_short %} creates memories automatically, as it works on tasks. Most of the time you can leave {% data variables.product.prodname_copilot_short %} to identify and store repository facts and user preferences. However, occasionally you might want to explicitly add a particular fact or preference that you want {% data variables.product.prodname_copilot_short %} to remember. That's the focus of this article.

You cannot create or edit an individual memory in the settings on {% data variables.product.prodname_dotcom_the_website %}. Instead, you ask {% data variables.product.prodname_copilot_short %} to add the memory for you. You can do this using {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.github_copilot_app %}, or [{% data variables.product.prodname_vscode %}](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#copilot-memory-in-visual-studio-code), if {% data variables.copilot.copilot_memory %} is available for your account. You can also use {% data variables.copilot.copilot_cli_short %} to import prepared memories in bulk.

> [!IMPORTANT]
> Prompting {% data variables.product.prodname_copilot_short %} to store a memory does not guarantee that it will be stored. The model decides whether to store the memory based on the prompt and the context. Even adding a memory successfully does not guarantee that {% data variables.product.prodname_copilot_short %} will always use it. To provide instructions consistently, use custom instructions rather than relying on {% data variables.copilot.copilot_memory %}. See [AUTOTITLE](/copilot/concepts/prompting/response-customization).

## Asking {% data variables.product.prodname_copilot_short %} to remember a fact or preference

To get {% data variables.product.prodname_copilot_short %} to store a memory, use a prompt (or a comment in a pull request) that provides an unambiguous instruction, giving precise details about the fact or preference you want to be captured in the memory store. {% data variables.product.prodname_copilot_short %} will decide whether to store the memory as a repository-level fact or a user-level preference, based on the context and the information you supply.

If a matching memory already exists, {% data variables.product.prodname_copilot_short %} can reinforce that memory instead of creating a duplicate.

You can only create a repository-level fact in a repository where {% data variables.copilot.copilot_memory %} is enabled and you have write access.

For more information about prompting {% data variables.product.prodname_copilot_short %} in various surfaces, see:

* **{% data variables.copilot.copilot_cloud_agent %}**: [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-on-github)
* **{% data variables.copilot.copilot_cli_short %}**: [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/overview)
* **{% data variables.copilot.copilot_code-review_short %}**: [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/review-copilot-output)

### Example prompts

For repository-level facts, use prompts like these:

* `Store a memory that api/openapi.gen.go is generated here. Edit openapi.yaml instead.`
* `Remember that API handlers in this repository return errors through formatApiError.`
* `Create a memory for this repository: Database migrations belong in db/migrations, not in application startup code.`

For user-level preferences, you can specify how you want {% data variables.product.prodname_copilot_short %} to collaborate with you, when it should ask for approval, or a workflow to follow across your projects:

* `Remember I always want the smallest change that fixes the problem, not a refactor.`
* `Across all my projects, remember to ask for my approval before publishing changes.`
* `Remember my workflow for all projects: Run the relevant tests and summarize their results before proposing a commit.`

> [!IMPORTANT]
> When commenting in a pull request, write `@copilot` at the start of the comment. This triggers {% data variables.copilot.copilot_cloud_agent %} to see it as a prompt it should respond to, rather than as a regular comment.

In {% data variables.copilot.copilot_cli_short %}, only the root agent can store or vote on memories. Subagents can use relevant memories, but they cannot change the memory store.

### Approving memory updates in {% data variables.copilot.copilot_cli_short %}

In interactive sessions, depending on your permission settings, {% data variables.product.prodname_copilot_short %} can ask you to approve storing a memory or rating an existing memory's usefulness. The prompt shows the memory and whether it applies to you or is shared with repository collaborators.

You can approve the update once, reject it with optional feedback, or choose to allow future memory updates without asking. The approval option states whether it applies to the current repository, directory, or session.

## Importing memories with {% data variables.copilot.copilot_cli_short %}

You can use {% data variables.copilot.copilot_cli_short %} to import prepared memories from a JSONL file. Each line must contain one versioned memory object.

This example contains two wrapped lines. Each line (memory object) starts `{"type":"memory"...`.

```json
{"type":"memory","version":1,"externalId":"personal-testing-1","scope":{"type":"user"},"subject":"testing","fact":"Run focused tests first.","reason":"This is the user's preferred validation workflow.","citations":[{"type":"text","text":"User input: \"Run focused tests first.\""}]}
{"type":"memory","version":1,"externalId":"repo-testing-1","scope":{"type":"repository","repository":{"host":"github.com","owner":"octo-org","name":"octo-repo"}},"subject":"testing","fact":"Run npm test before opening a pull request.","reason":"The repository requires this validation workflow.","citations":[{"type":"file","path":"CONTRIBUTING.md","lineStart":10,"lineEnd":12}]}
```

The `type`, `version`, `scope`, `subject`, `fact`, `reason`, and `citations` fields are required. The `externalId` field is optional. Use it to identify a record in the import results and detect repeated IDs within the input file. It is not stored as a permanent memory identifier.

For a repository-level fact, replace `octo-org` and `octo-repo` with the owner and name of a repository on {% data variables.product.prodname_dotcom_the_website %}. You must have permission to write memories for that repository. Replace `PATH-TO-FILE` in the following commands with the path to your JSONL file.

1. Validate the complete file without submitting any memories. This checks the file format, not your account's permission to store the memories:

   ```shell
   copilot memories import PATH-TO-FILE --dry-run
   ```

1. Import the memories:

   ```shell
   copilot memories import PATH-TO-FILE
   ```

  By default, a repeated `externalId` within the input file or an existing memory conflict causes an error for that record. To skip conflicts instead, add `--on-conflict skip`. To receive the result as JSON, add `--output json`.

  Check the result for each record. Some records can be imported even if others fail. To retry a partial import, submit only the records that failed. Repeating the entire import can create duplicate memories.

Running the import command is treated as approval to submit the records, so {% data variables.copilot.copilot_cli_short %} does not ask you to approve each memory separately. Normal authentication, policy, repository permission, scope validation, and secret scanning requirements still apply. Repository-level facts are shared with collaborators who can use {% data variables.copilot.copilot_memory %} in the repository.

## Determining whether a memory applies to a repository or to you

{% data variables.product.prodname_copilot_short %} decides whether to store a memory as a repository-level fact or a user-level preference, based on who the memory applies to rather than on who said it. State the intended scope explicitly. If the scope is unclear, {% data variables.product.prodname_copilot_short %} asks you to clarify rather than guessing.

| To store | Phrase it as | Example |
| --- | --- | --- |
| A repository-level fact | Something that is true for anyone working in this repository | "In this repository, database migrations are always run before the test suite." |
| A user-level preference | Something about how you personally like to work, across all your projects | "In all my projects, I prefer that you explain a change before applying it." |

Do not rely on phrases such as "always" or "going forward" to imply a scope. Say whether the memory applies to you across repositories or to everyone working in the current repository.

### Deleting a memory

Memories expire if they are not reinforced within the default, or configured, retention period. {% data variables.product.prodname_copilot_short %} cannot itself delete a memory in response to a prompt. For example, if you ask {% data variables.product.prodname_copilot_short %} to "forget" a memory, it can downvote that fact or preference, but this does not delete it from the memory store.

To delete a memory immediately, you must do so in your personal or repository settings. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself) for user-level preferences and [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator) for repository-level facts.
