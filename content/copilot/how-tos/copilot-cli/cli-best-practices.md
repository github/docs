---
title: Best practices for GitHub Copilot CLI
shortTitle: Copilot CLI best practices
intro: 'Learn how to get the most out of {% data variables.copilot.copilot_cli %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
topics:
  - Copilot
contentType: get-started
category:
  - Build with Copilot CLI # Copilot CLI bespoke page
  - Copilot in the CLI # Copilot CLI bespoke page
  - Author and optimize with Copilot # Copilot discovery page
---

## Introduction

{% data variables.copilot.copilot_cli %} is a terminal-native AI coding assistant that brings agentic capabilities directly to your command line. {% data variables.copilot.copilot_cli_short %} can operate like a chatbot, answering your questions, but its true power lies in its ability to work autonomously as your coding partner, allowing you to delegate tasks and oversee its work.

This article provides tips for getting the most out of {% data variables.copilot.copilot_cli_short %}, from using the various CLI commands effectively to managing the CLI's access to files. Consider these tips as starting points, then experiment to find out what works best for your workflows.

> [!NOTE]
> {% data variables.copilot.copilot_cli %} is continually evolving. Use the `/help` command to see the most up to date information.

## 1. Customize your environment

### Use custom instructions files

{% data variables.copilot.copilot_cli_short %} automatically reads instructions from multiple locations, allowing you to define organization-wide standards and repository-specific conventions.

**Supported locations (in order of discovery):**

| Location                                    | Scope                 |
|---------------------------------------------|-----------------------|
| `~/.copilot/copilot-instructions.md`        | All sessions (global) |
| `.github/copilot-instructions.md`           | Repository            |
| `.github/instructions/**/*.instructions.md` | Repository (modular)  |
| `AGENTS.md` (in Git root or cwd)            | Repository            |
| `{% data variables.product.prodname_copilot_short %}.md`, `GEMINI.md`, `CODEX.md` | Repository |

#### Best practice

Repository instructions **always take precedence** over global instructions. Use this to enforce team conventions. For example, this is a simple `.github/copilot-instructions.md` file.

```markdown
## Build Commands
- `npm run build` - Build the project
- `npm run test` - Run all tests
- `npm run lint:fix` - Fix linting issues

## Code Style
- Use TypeScript strict mode
- Prefer functional components over class components
- Always add JSDoc comments for public APIs

## Workflow
- Run `npm run lint:fix && npm test` after making changes
- Commit messages follow conventional commits format
- Create feature branches from `main`
```

> [!TIP]
> Keep instructions concise and actionable. Lengthy instructions can dilute effectiveness.

For more information, see [AUTOTITLE](/copilot/concepts/prompting/response-customization?tool=webui).

### Configure allowed tools

Manage which tools {% data variables.product.prodname_copilot_short %} can run without asking for permission. When {% data variables.product.prodname_copilot_short %} requests permission for an action, you can choose to **Allow once**, or **Always allow** to add the tool to your allowlist for this and future sessions.

To reset previously approved tools, use:

```copilot
/reset-allowed-tools
```

You can also preconfigure allowed tools via CLI flags:

```bash
copilot --allow-tool 'shell(git:*)' --deny-tool 'shell(git push)'
```

**Common permission patterns:**

* `shell(git:*)` — Allow all Git commands
* `shell(npm run:*)` — Allow all npm scripts
* `shell(npm run test:*)` — Allow npm test commands
* `write` — Allow file writes

### Select your preferred model

Use `/model` to choose from available models based on your task complexity:

| Model | Best For | Tradeoffs |
| ----- | -------- | --------- |
| **Claude Opus 4.5** (default) | Complex architecture, difficult debugging, nuanced refactoring | Most capable but uses more [premium requests](/copilot/concepts/billing/copilot-requests#model-multipliers) |
| **Claude Sonnet 4.5** | Day-to-day coding, most routine tasks | Fast, cost-effective, handles most work well |
| **GPT-5.2 Codex** | Code generation, code review, straightforward implementations | Excellent for reviewing code produced by other models |

**Recommendations:**

* **Opus 4.5** is ideal for tasks requiring deep reasoning, complex system design, subtle bug investigation, or extensive context understanding.
* **Switch to Sonnet 4.5** for routine tasks where speed and cost efficiency matter—it handles the majority of everyday coding effectively.
* **Use Codex** for high-volume code generation and as a second opinion for reviewing code produced by other models.

You can switch models mid-session with `/model` as task complexity changes.

## 2. Plan before you code

### Plan mode

**Models achieve higher success rates when given a concrete plan to follow.** In plan mode, {% data variables.product.prodname_copilot_short %} will create a structured implementation plan before any code is written.

Press <kbd>Shift</kbd>+<kbd>Tab</kbd> to toggle between normal mode and plan mode. In plan mode, all prompts you enter will trigger the plan workflow.

Alternatively, you can use  the `/plan` command in normal mode to achieve the same effect.

**Example prompt (from normal mode):**

```copilot
/plan Add OAuth2 authentication with Google and GitHub providers
```

**What happens:**

* {% data variables.product.prodname_copilot_short %} analyzes your request and codebase.
* **Asks clarifying questions** to align on requirements and approach.
* Creates a structured implementation plan with checkboxes.
* Saves the plan to `plan.md` in your session folder.
* **Waits for your approval** before implementing.

You can press <kbd>Ctrl</kbd>+<kbd>y</kbd> to view and edit the plan in your default editor for Markdown files.

**Example plan output:**

```markdown
# Implementation Plan: OAuth2 Authentication

## Overview
Add social authentication using OAuth2 with Google and GitHub providers.

## Tasks
- [ ] Install dependencies (passport, passport-google-oauth20, passport-github2)
- [ ] Create authentication routes in `/api/auth`
- [ ] Implement passport strategies for each provider
- [ ] Add session management middleware
- [ ] Create login/logout UI components
- [ ] Add environment variables for OAuth credentials
- [ ] Write integration tests

## Detailed Steps
1. **Dependencies**: Add to package.json...
2. **Routes**: Create `/api/auth/google` and `/api/auth/github`...
```

### When to use plan mode

| Scenario                           | Use plan mode? |
| ---------------------------------- | ------------ |
| Complex multi-file changes         | {% octicon "check" aria-label="Yes" %} |
| Refactoring with many touch points | {% octicon "check" aria-label="Yes" %} |
| New feature implementation         | {% octicon "check" aria-label="Yes" %} |
| Quick bug fixes                    | {% octicon "x" aria-label="No" %} |
| Single file changes                | {% octicon "x" aria-label="No" %} |

### The explore → plan → code → commit workflow

For best results on complex tasks:

* **Explore**:

  `Read the authentication files but don't write code yet`

* **Plan**:

  `/plan Implement password reset flow`

* **Review**:

  Check the plan, suggest modifications

* **Implement**:

  `Proceed with the plan`

* **Verify**:

  `Run the tests and fix any failures`

* **Commit**:

  `Commit these changes with a descriptive message`

## 3. Leverage infinite sessions

### Automatic context window management

{% data variables.copilot.copilot_cli_short %} features **infinite sessions**. You don't need to worry about running out of context. The system automatically manages context through intelligent compaction that summarizes conversation history while preserving essential information.

**Session storage location:**

```text
~/.copilot/session-state/{session-id}/
├── events.jsonl      # Full session history
├── workspace.yaml    # Metadata
├── plan.md           # Implementation plan (if created)
├── checkpoints/      # Compaction history
└── files/            # Persistent artifacts
```

> [!NOTE]
> If you ever need to manually trigger compaction, use `/compact`. This is rarely necessary since the system handles it automatically.

### Session management commands

To view information about the current CLI session, enter:

```copilot
/session
```

To view a list of any session checkpoints, enter:

```copilot
/session checkpoints
```

> [!NOTE]
> A checkpoint is created when session context is compacted, and allows you to view the summary context that {% data variables.product.prodname_copilot_short %} created.

To view the details of a specific checkpoint, enter:

```copilot
/session checkpoints NUMBER
```

where NUMBER specifies the checkpoint you want to display.

To view any temporary files that have been created during the current session—for example, artifacts created by {% data variables.product.prodname_copilot_short %} that shouldn't be saved to the repository—enter:

```copilot
/session files
```

To view the current plan (if {% data variables.product.prodname_copilot_short %} has generated one), enter:

```copilot
/session plan
```

### Best practice: Keep sessions focused

While infinite sessions allow long-running work, focused sessions produce better results:

* Use `/clear` or `/new` between unrelated tasks.
* This resets context and improves response quality.
* Think of it like starting a fresh conversation with a colleague.

### The `/context` command

Visualize your current context usage with `/context`. It shows a breakdown of:

* System/tools tokens
* Message history tokens
* Available free space
* Buffer allocation

## 4. Delegate work effectively

### The `/delegate` command

**Offload work to run in the cloud using {% data variables.copilot.copilot_coding_agent %}.** This is particularly powerful for:

* Tasks that can run asynchronously.
* Changes to other repositories.
* Long-running operations you don't want to wait for.

**Example prompt:**

```copilot
/delegate Add dark mode support to the settings page
```

**What happens:**

* Your request is sent to {% data variables.copilot.copilot_coding_agent %}.
* The agent creates a pull request with the changes.
* You can continue working locally while the cloud agent works.

### When to use `/delegate`

| Use `/delegate`              | Work locally            |
|------------------------------|-------------------------|
| Tangential tasks             | Core feature work       |
| Documentation updates        | Debugging               |
| Refactoring separate modules | Interactive exploration |

## 5. Common workflows

### Codebase onboarding

Use {% data variables.copilot.copilot_cli_short %} as your pair programming partner when joining a new project. For example, you could ask {% data variables.product.prodname_copilot_short %}:

* `How is logging configured in this project?`
* `What's the pattern for adding a new API endpoint?`
* `Explain the authentication flow`
* `Where are the database migrations?`

### Test-driven development

Pair with {% data variables.copilot.copilot_cli_short %} to develop tests.

* `Write failing tests for the user registration flow`
* *Review and approve the tests.*
* `Now implement code to make all tests pass`
* *Review the implementation.*
* `Commit with message "feat: add user registration"`

### Code review assistance

* ``/review Use Opus 4.5 and Codex 5.2 to review the changes in my current branch against `main`. Focus on potential bugs and security issues.``

### Git operations

{% data variables.product.prodname_copilot_short %} excels at Git workflows:

* ``What changes went into version `2.3.0`?``
* `Create a PR for this branch with a detailed description`
* ``Rebase this branch against `main` ``
* ``Resolve the merge conflicts in `package.json` ``

### Bug investigation

* ``The `/api/users` endpoint returns 500 errors intermittently. Search the codebase and logs to identify the root cause.``

### Refactoring

* `/plan Migrate all class components to functional components with hooks`

  Then answer the questions {% data variables.product.prodname_copilot_short %} asks. Review the plan it creates, and ask {% data variables.product.prodname_copilot_short %} to make changes if necessary. When you are happy with the plan you can prompt:
  `Implement this plan`

## 6. Advanced patterns

### Work across multiple repositories

**{% data variables.copilot.copilot_cli_short %} provides flexible multi-repository workflows**—a key differentiator for teams working on microservices, monorepos, or related projects.

**Option 1: Run from a parent directory**

```bash
# Navigate to a parent directory containing multiple repos
cd ~/projects
copilot
```

{% data variables.product.prodname_copilot_short %} can now access and work across all child repositories simultaneously. This is ideal for:

* Microservices architectures
* Making coordinated changes across related repos
* Refactoring shared patterns across projects

**Option 2: Use `/add-dir` to expand access**

```bash
# Start in one repo, then add others (requires full paths)
copilot
/add-dir /Users/me/projects/backend-service
/add-dir /Users/me/projects/shared-libs
/add-dir /Users/me/projects/documentation
```

**View and manage allowed directories:**

```copilot
/list-dirs
```

**Example workflow: coordinated API changes**

```copilot
I need to update the user authentication API. The changes span:

- @/Users/me/projects/api-gateway (routing changes)
- @/Users/me/projects/auth-service (core logic)
- @/Users/me/projects/frontend (client updates)

Start by showing me the current auth flow across all three repos.
```

This multi-repository capability enables:

* Cross-cutting refactors (update a shared pattern everywhere)
* API contract changes with client updates
* Documentation that references multiple codebases
* Dependency upgrades across a monorepo

### Using images for UI work

{% data variables.product.prodname_copilot_short %} can work with visual references. Simply **drag and drop** images directly into the CLI input, or reference image files:

```copilot
Implement this design: @mockup.png
Match the layout and spacing exactly
```

### Checklists for complex migrations

For large-scale changes:

```copilot
Run the linter and write all errors to `migration-checklist.md` as a checklist.
Then fix each issue one by one, checking them off as you go.
```

### Autonomous task completion

Switch into autopilot mode to allow {% data variables.product.prodname_copilot_short %} to work autonomously on a task until it is complete. This is ideal for long-running tasks that don't require constant supervision. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/autopilot).

Optionally, you can usually speed up large tasks by using the `/fleet` slash command at the start of your prompt to allow {% data variables.product.prodname_copilot_short %} to break the task into parallel subtasks that are run by subagents. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/fleet).

## 7. Team guidelines

### Recommended repository setup

* **Create `.github/copilot-instructions.md`** with:
  * Build and test commands
  * Code style guidelines
  * Required checks before commits
  * Architecture decisions

* **Establish conventions** for:
  * When to use `/plan` (complex features, refactoring)
  * When to use `/delegate` (tangential work)
  * Code review processes with AI assistance

### Security considerations

* {% data variables.copilot.copilot_cli_short %} requires explicit approval for potentially destructive operations.
* Review all proposed changes before accepting.
* Use permission allowlists judiciously.
* Never commit secrets. {% data variables.product.prodname_copilot_short %} is designed to avoid this, but always verify.

### Measuring productivity

Track metrics like:

* Time from issue to pull request
* Number of iterations before merge
* Code review feedback cycles
* Test coverage improvements

## Getting help

From the command line, you can display help by using the command: `copilot -h`.

For help on various topics enter:

```bash
copilot help TOPIC
```

where `TOPIC` can be one of: `config`, `commands`, `environment`, `logging`, or `permissions`.

### Within the CLI

For help within the CLI, enter:

```copilot
/help
```

To view usage statistics, enter:

```copilot
/usage
```

To submit private feedback to {% data variables.product.github %} about {% data variables.copilot.copilot_cli_short %}, raise a bug report, or submit a feature request, enter:

```copilot
/feedback
```

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli)
* [AUTOTITLE](/copilot/reference/cli-command-reference)
* [{% data variables.product.prodname_copilot_short %} plans and pricing](https://github.com/features/copilot/plans)
