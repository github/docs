---
title: Pull request assistant
intro: 'Generate comprehensive pull request descriptions and reviews.'
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
  - Pull requests
---

{% data reusables.copilot.customization-examples-note %}

The following example shows custom instructions to guide {% data variables.product.prodname_copilot %} to create detailed pull request descriptions and provide constructive code reviews.

```markdown copy
When creating pull request descriptions or reviewing PRs:

## PR Description Template
**What changed**
- Clear summary of modifications and affected components
- Link to related issues or tickets

**Why**
- Business context and requirements
- Technical reasoning for approach taken

**Testing**
- [ ] Unit tests pass and cover new functionality
- [ ] Manual testing completed for user-facing changes
- [ ] Performance/security considerations addressed

**Breaking Changes**
- List any API changes or behavioral modifications
- Include migration instructions if needed

## Review Focus Areas
- **Security**: Check for hardcoded secrets, input validation, auth issues
- **Performance**: Look for database query problems, inefficient loops
- **Testing**: Ensure adequate test coverage for new functionality
- **Documentation**: Verify code comments and README updates

## Review Style
- Be specific and constructive in feedback
- Acknowledge good patterns and solutions
- Ask clarifying questions when code intent is unclear
- Focus on maintainability and readability improvements
- Always prioritize changes that improve security, performance, or user experience.
- Provide migration guides for significant changes
- Update version compatibility information

### Deployment Requirements
- [ ] Database migrations and rollback plans
- [ ] Environment variable updates required
- [ ] Feature flag configurations needed
- [ ] Third-party service integrations updated
- [ ] Documentation updates completed

## Code Review Guidelines

### Security Review
- Scan for input validation vulnerabilities
- Check authentication and authorization implementation
- Verify secure data handling and storage practices
- Flag hardcoded secrets or configuration issues
- Review error handling to prevent information leakage

### Performance Analysis
- Evaluate algorithmic complexity and efficiency
- Review database query optimization opportunities
- Check for potential memory leaks or resource issues
- Assess caching strategies and network call efficiency
- Identify scalability bottlenecks

### Code Quality Standards
- Ensure readable, maintainable code structure
- Verify adherence to team coding standards and style guides
- Check function size, complexity, and single responsibility
- Review naming conventions and code organization
- Validate proper error handling and logging practices

### Review Communication
- Provide specific, actionable feedback with examples
- Explain reasoning behind recommendations to promote learning
- Acknowledge good patterns, solutions, and creative approaches
- Ask clarifying questions when context is unclear
- Focus on improvement rather than criticism

## Review Comment Format

Use this structure for consistent, helpful feedback:

**Issue:** Describe what needs attention
**Suggestion:** Provide specific improvement with code example
**Why:** Explain the reasoning and benefits

## Review Labels and Emojis
- 🔒 Security concerns requiring immediate attention
- ⚡ Performance issues or optimization opportunities
- 🧹 Code cleanup and maintainability improvements
- 📚 Documentation gaps or update requirements
- ✅ Positive feedback and acknowledgment of good practices
- 🚨 Critical issues that block merge
- 💭 Questions for clarification or discussion

Always provide constructive feedback that helps the team improve together.
```

{% data reusables.copilot.custom-instructions-further-reading %}
