## About repository custom instructions for {% data variables.product.prodname_copilot_short %}

Repository custom instructions let you provide {% data variables.product.prodname_copilot_short %} with repository-specific guidance and preferences.

### Support for repository custom instructions

The following table shows which {% data variables.product.prodname_copilot_short %} features support custom instructions in various environments.

{% rowheaders %}

| | Eclipse | JetBrains IDEs | {% data variables.product.prodname_vs %} | {% data variables.product.prodname_vscode_shortname %} | {% data variables.product.prodname_dotcom_the_website %} | Xcode |
| --- | --- | --- | --- | --- | --- | --- |
| {% data variables.copilot.copilot_chat_short %} | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>3</sup> | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>1</sup> |
| {% data variables.copilot.copilot_coding_agent %} | N/A | N/A | N/A | {% octicon "check" aria-label="Included" %} <sup>4</sup> | {% octicon "check" aria-label="Included" %} <sup>4</sup> | N/A |
| {% data variables.copilot.copilot_code-review_short %} | N/A | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>2</sup> | {% octicon "x" aria-label="Not included" %} |

{% endrowheaders %}

**Types of custom instructions supported**

**1:** Repository-wide instructions (using the `.github/copilot-instructions.md` file).<br>
**2:** Repository-wide instructions and path-specific instructions (using `.github/instructions/**/NAME.instructions.md` files).<br>
**3:** Repository-wide instructions, path-specific instructions, and agent instructions (using `AGENTS.md` files).<br>
**4:** Repository-wide instructions, path-specific instructions, and agent instructions (using `AGENTS.md`, `CLAUDE.md` or `GEMINI.md` files).<br>
**X:** Custom instructions are not supported.<br>
**N/A:** Feature not available on this platform.
