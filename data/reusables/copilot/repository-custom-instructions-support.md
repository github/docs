## About repository custom instructions for {% data variables.product.prodname_copilot_short %}

Repository custom instructions let you provide {% data variables.product.prodname_copilot_short %} with repository-specific guidance and preferences.

### Support for repository custom instructions

The following table shows which {% data variables.product.prodname_copilot_short %} features support the `.github/copilot-instructions.md` instructions file.

{% rowheaders %}

| | Eclipse | JetBrains IDEs | {% data variables.product.prodname_vs %} | {% data variables.product.prodname_vscode_shortname %} | {% data variables.product.prodname_dotcom_the_website %} | Xcode |
| --- | --- | --- | --- | --- | --- | --- |
| {% data variables.copilot.copilot_chat_short %} | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>1</sup> |
| {% data variables.copilot.copilot_coding_agent %} | N/A | N/A | N/A | {% octicon "check" aria-label="Included" %} <sup>3</sup> | {% octicon "check" aria-label="Included" %} <sup>3</sup> | N/A |
| {% data variables.copilot.copilot_code-review_short %} | N/A | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} <sup>1</sup> | {% octicon "check" aria-label="Included" %} <sup>2</sup> | {% octicon "check" aria-label="Included" %} <sup>2</sup> | {% octicon "x" aria-label="Not included" %} |

{% endrowheaders %}

**1:** Repository-wide instructions (using the `.github/copilot-instructions.md` file) are supported.<br>
**2:** Repository-wide instructions and path-specific instructions (using `.github/instructions/NAME.instructions.md` files) are supported.<br>
**3:** Repository-wide instructions, path-specific instructions, and agent instructions (using `AGENTS.md`, `CLAUDE.md` or `GEMINI.md` files) are supported.<br>
**X:** Custom instructions are not supported.<br>
**N/A:** Feature not available on this platform.
