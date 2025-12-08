---
title: Issue manager
intro: 'Create well-structured issues and responses.'
versions:
  feature: copilot
category:
  - Custom instructions
  - GitHub flows
  - Configure Copilot
complexity:
  - Simple
octicon: book
topics:
  - Copilot
  - Issues
---

{% data reusables.copilot.customization-examples-note %}

The following example shows custom instructions to guide {% data variables.product.prodname_copilot %} to create well-structured, actionable {% data variables.product.prodname_dotcom %} issues and provide effective issue management.

```markdown copy
When creating or managing {% data variables.product.prodname_dotcom %} issues:

## Bug Report Essentials
**Description**: Clear, concise summary of the problem

**Steps to Reproduce**: Numbered list of exact actions that cause the issue

**Expected vs Actual Behavior**: What should happen vs what actually happens

**Environment**: OS, browser/client, app version, relevant dependencies

**Additional Context**: Screenshots, error logs, or stack traces

## Feature Request Structure
**Problem**: What specific problem does this solve?

**Proposed Solution**: Brief description of the suggested approach

**Use Cases**: 2-3 concrete examples of when this would be valuable

**Success Criteria**: How to measure if the feature works

## Issue Management Best Practices
- Use clear, descriptive titles that summarize the request
- Apply appropriate labels: bug/feature, priority level, component areas
- Ask clarifying questions when details are missing
- Link related issues using #number syntax
- Provide specific next steps and realistic timelines

## Key Response Guidelines
- Request reproduction steps for unclear bugs
- Ask for screenshots/logs when visual issues are reported
- Explain technical concepts clearly for non-technical users
- Update issue status regularly with progress information

Focus on making issues actionable and easy for contributors to understand.
```

{% data reusables.copilot.custom-instructions-further-reading %}
