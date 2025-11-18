{% data variables.copilot.subagents_caps_short %} can be invoked in different ways: 

* **Automatic delegation**. {% data variables.product.prodname_copilot_short %} will analyze the description of your request, the description field of your configured {% data variables.copilot.custom_agents_short %}, and the current context and available tools to automatically choose a {% data variables.copilot.subagent_short %}. For example, this prompt would automatically delegate the task to a **refactor-specialist** {% data variables.copilot.copilot_custom_agent_short %}:
   ```text
   Suggest ways to refactor this legacy code.
   ```
* **Direct invocation**. You can directly call the {% data variables.copilot.subagent_short %} in your prompt:
   ```text
   Use the testing subagent to write unit tests for the authentication module.
   ```