---
title: Using custom skills with the Copilot SDK
shortTitle: Custom skills
intro: Use skills to extend {% data variables.product.prodname_copilot_short %}'s capabilities with reusable prompt modules.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

Skills are reusable prompt modules that extend {% data variables.product.prodname_copilot_short %}'s capabilities. Load skills from directories to give {% data variables.product.prodname_copilot_short %} specialized abilities for specific domains or workflows.

A skill is a named directory containing a `SKILL.md` file—a markdown document that provides instructions to {% data variables.product.prodname_copilot_short %}. When loaded, the skill's content is injected into the session context.

Skills allow you to:
* Package domain expertise into reusable modules
* Share specialized behaviors across projects
* Organize complex agent configurations
* Enable/disable capabilities per session

## Loading skills

Specify directories containing skills when creating a session:

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-4.1",
    skillDirectories: [
        "./skills/code-review",
        "./skills/documentation",
    ],
    onPermissionRequest: async () => ({ kind: "approved" }),
});

// Copilot now has access to skills in those directories
await session.sendAndWait({ prompt: "Review this code for security issues" });
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/skills.md#loading-skills).

## Disabling skills

Disable specific skills while keeping others active:

```typescript
const session = await client.createSession({
    skillDirectories: ["./skills"],
    disabledSkills: ["experimental-feature", "deprecated-tool"],
});
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/skills.md#disabling-skills).

## Skill directory structure

Each skill is a named subdirectory containing a `SKILL.md` file:

```text
skills/
├── code-review/
│   └── SKILL.md
└── documentation/
    └── SKILL.md
```

The `skillDirectories` option points to the parent directory (for example, `./skills`). The CLI discovers all `SKILL.md` files in immediate subdirectories.

### SKILL.md format

A `SKILL.md` file is a markdown document with optional YAML frontmatter:

```markdown
---
name: code-review
description: Specialized code review capabilities
---

# Code Review Guidelines

When reviewing code, always check for:

1. **Security vulnerabilities**—SQL injection, XSS, etc.
2. **Performance issues**—N+1 queries, memory leaks
3. **Code style**—Consistent formatting, naming conventions
4. **Test coverage**—Are critical paths tested?

Provide specific line-number references and suggested fixes.
```

The frontmatter fields:
* **`name`**—The skill's identifier (used with `disabledSkills` to selectively disable it). If omitted, the directory name is used.
* **`description`**—A short description of what the skill does.

The markdown body contains the instructions that are injected into the session context when the skill is loaded.

## Configuration options

### SessionConfig skill fields

When you call `createSession()`, pass these skill-related fields in the session configuration object:

| Language | Field | Type | Description |
|----------|-------|------|-------------|
| Node.js | `skillDirectories` | `string[]` | Directories to load skills from |
| Node.js | `disabledSkills` | `string[]` | Skills to disable |
| Python | `skill_directories` | `list[str]` | Directories to load skills from |
| Python | `disabled_skills` | `list[str]` | Skills to disable |
| Go | `SkillDirectories` | `[]string` | Directories to load skills from |
| Go | `DisabledSkills` | `[]string` | Skills to disable |
| .NET | `SkillDirectories` | `List<string>` | Directories to load skills from |
| .NET | `DisabledSkills` | `List<string>` | Skills to disable |

## Best practices

* **Organize by domain**—Group related skills together (for example, `skills/security/`, `skills/testing/`)
* **Use frontmatter**—Include `name` and `description` in YAML frontmatter for clarity
* **Document dependencies**—Note any tools or MCP servers a skill requires
* **Test skills in isolation**—Verify skills work before combining them
* **Use relative paths**—Keep skills portable across environments

## Combining with other features

### Skills with custom agents

Skills work alongside custom agents:

```typescript
const session = await client.createSession({
    skillDirectories: ["./skills/security"],
    customAgents: [{
        name: "security-auditor",
        description: "Security-focused code reviewer",
        prompt: "Focus on OWASP Top 10 vulnerabilities",
    }],
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

### Skills with MCP servers

Skills can complement MCP server capabilities:

```typescript
const session = await client.createSession({
    skillDirectories: ["./skills/database"],
    mcpServers: {
        postgres: {
            type: "local",
            command: "npx",
            args: ["-y", "@modelcontextprotocol/server-postgres"],
            tools: ["*"],
        },
    },
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

## Troubleshooting

### Skills not loading

1. **Check path exists**—Verify the skill directory path is correct and contains subdirectories with `SKILL.md` files.
1. **Check permissions**—Ensure the SDK can read the directory.
1. **Check SKILL.md format**—Verify the markdown is well-formed and any YAML frontmatter uses valid syntax.
1. **Enable debug logging**—Set `logLevel: "debug"` to see skill loading logs.

### Skill conflicts

If multiple skills provide conflicting instructions:
* Use `disabledSkills` to exclude conflicting skills
* Reorganize skill directories to avoid overlaps
