---
title: Create README
intro: 'Generate comprehensive README files for your projects.'
versions:
  feature: copilot
category:
  - Prompt files
  - Getting started
  - Configure Copilot
complexity:
  - Simple
octicon: copilot
topics:
  - Copilot
contentType: tutorials
---

{% data reusables.copilot.prompt-files-preview-note %}

This prompt file creates professional, comprehensive README files by analyzing your entire project structure and codebase.

## README generator prompt

```text copy
---
mode: 'agent'
description: 'Create a comprehensive README.md file for the project'
---

## Role

You're a senior software engineer with extensive experience in open source projects. You create appealing, informative, and easy-to-read README files.

## Task

1. Review the entire project workspace and codebase
2. Create a comprehensive README.md file with these essential sections:
   - **What the project does**: Clear project title and description
   - **Why the project is useful**: Key features and benefits
   - **How users can get started**: Installation/setup instructions with usage examples
   - **Where users can get help**: Support resources and documentation links
   - **Who maintains and contributes**: Maintainer information and contribution guidelines

## Guidelines

### Content and Structure

- Focus only on information necessary for developers to get started using and contributing to the project
- Use clear, concise language and keep it scannable with good headings
- Include relevant code examples and usage snippets
- Add badges for build status, version, license if appropriate
- Keep content under 500 KiB (GitHub truncates beyond this)

### Technical Requirements

- Use GitHub Flavored Markdown
- Use relative links (e.g., `docs/CONTRIBUTING.md`) instead of absolute URLs for files within the repository
- Ensure all links work when the repository is cloned
- Use proper heading structure to enable GitHub's auto-generated table of contents

### What NOT to include

Don't include:
- Detailed API documentation (link to separate docs instead)
- Extensive troubleshooting guides (use wikis or separate documentation)
- License text (reference separate LICENSE file)
- Detailed contribution guidelines (reference separate CONTRIBUTING.md file)

Analyze the project structure, dependencies, and code to make the README accurate, helpful, and focused on getting users productive quickly.
```

## How to use this prompt file

1. Save the above content as `create-readme.prompt.md` in your `.github/prompts` folder of your repository.
1. In {% data variables.product.prodname_vscode %}, display the {% data variables.copilot.copilot_chat_short %} view and enter `/create-readme`.

{% data reusables.copilot.prompt-files-further-reading %}
