---
title: About Copilot skillsets
intro: 'Learn what {% data variables.product.prodname_copilot_skillsets %} are and how they simplify integrating third-party tools and functions into your {% data variables.product.prodname_copilot_short %} experience.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: About {% data variables.product.prodname_copilot_skillsets_short %} 
type: overview
---

A skill within {% data variables.product.prodname_copilot %} is a tool that the model calls to perform a specific task in response to a user query. A skillset is a collection of these skills (up to five per skillset). {% data variables.product.prodname_copilot_skillsets %} provide a streamlined way to extend {% data variables.product.prodname_copilot_short %}’s functionality, allowing builders to integrate external services or custom API endpoints into their {% data variables.product.prodname_copilot_short %} workflow. With skillsets, builders can enable {% data variables.product.prodname_copilot_short %} to perform tasks—such as retrieving data or executing actions in third-party services—without needing to manage complex workflows or architecture.

For a quickstart example of a skillset, see the [skillset-example](https://github.com/copilot-extensions/skillset-example) repository. For information on building a skillset, see [AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-skillset-for-your-copilot-extension/building-copilot-skillsets).

## How skillsets and agents differ

{% data reusables.copilot.copilot-extensions.differences-between-agents-and-skillsets-1 %}
{% data reusables.copilot.copilot-extensions.differences-between-agents-and-skillsets-2 %}

## The extensibility platform

Skillsets and agents both operate on the {% data variables.product.prodname_copilot_extensibility_platform %}, which manages the flow of user requests and function evaluations. With {% data variables.product.prodname_copilot_skillsets_short %}, the platform handles routing, prompt crafting, function calls and prompt generation.

### Workflow overview

The extensibility platform follows a structured workflow to process user requests and generate responses:

1. **User request**  
A user issues a request in the {% data variables.product.prodname_copilot_chat_short %} interface, such as asking for data or executing a specific action.

1. **Routing**  
The request is routed to the appropriate extension. For skillsets, this means the platform agent identifies and invokes the corresponding skillset based on the user’s intent. Each skill’s inference description helps the platform determine which skill to call.

1. **Dynamic Prompt Crafting**  
{% data variables.product.prodname_copilot %} generates a prompt using:
   * The user’s query.
   * Relevant thread history.
   * Available functions within the skillset.
   * Results from any prior function calls.

1. **LLM Completion**  
The language model (LLM) processes the prompt and determines:
   * Whether the user’s intent matches a skillset function.
   * Which function(s) to call and with what arguments.
   * If required, the LLM may send additional function calls to gather more context.

1. **Function Evaluation**  
The extension invokes the selected function(s), which may involve:
   * Gathering relevant context, such as {% data variables.product.prodname_copilot_skillsets_short %} repository or user metadata.
   * Making an API call to an external service to retrieve data or execute an action.

1. **Response generation**
The platform iteratively refines the output, looping through prompt crafting, LLM completion, and function evaluation as needed. Once the process is complete, {% data variables.product.prodname_copilot_short %} streams a final response back to the user in the chat interface.
