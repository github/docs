The following models are currently available through multi-model {% data variables.product.prodname_copilot_chat_short %}:

* **GPT 4o:** This is the default {% data variables.product.prodname_copilot_chat_short %} model. It is a versatile, multimodal model that excels in both text and image processing and is designed to provide fast, reliable responses. It also has superior performance in non-English languages. Learn more about the [model's capabilities](https://platform.openai.com/docs/models/gpt-4o) and review the [model card](https://openai.com/index/gpt-4o-system-card/). Gpt-4o is hosted on Azure.
* **{% data variables.copilot.copilot_claude_sonnet %}:** This model excels at coding tasks across the entire software development lifecycle, from initial design to bug fixes, maintenance to optimizations. Learn more about the [model's capabilities](https://www.anthropic.com/claude/sonnet) or read the [model card](https://assets.anthropic.com/m/61e7d27f8c8f5919/original/Claude-3-Model-Card.pdf). {% data variables.product.prodname_copilot %} uses {% data variables.copilot.copilot_claude_sonnet %} hosted on Amazon Web Services.
* **o1-preview:** This model is focused on advanced reasoning and solving complex problems, in particular in math and science. It responds more slowly than the `gpt-4o` model. You can make 10 requests to this model per day. Learn more about the [model's capabilities](https://platform.openai.com/docs/models/o1) and review the [model card](https://openai.com/index/openai-o1-system-card/). o1-preview is hosted on Azure.
* **o1-mini:** This is the faster version of the `o1-preview` model, balancing the use of complex reasoning with the need for faster responses. It is best suited for code generation and small context operations. You can make 50 requests to this model per day. Learn more about the [model's capabilities](https://platform.openai.com/docs/models/o1) and review the [model card](https://openai.com/index/openai-o1-system-card/). o1-mini is hosted on Azure.

> [!NOTE]
> Support for the `o1` model, replacing `o1-preview`, is coming soon to {% data variables.product.prodname_vs %}.

For more information about the o1 models, see [Models](https://platform.openai.com/docs/models/models) in the OpenAI Platform documentation.

For more information about the {% data variables.copilot.copilot_claude_sonnet %} model from Anthropic, see [AUTOTITLE](/copilot/using-github-copilot/using-claude-sonnet-in-github-copilot).
