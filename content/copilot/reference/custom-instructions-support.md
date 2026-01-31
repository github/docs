---
title: Support for different types of custom instructions
shortTitle: Custom instructions support
intro: 'Find out which environments support which types of custom instructions.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: reference
---

This reference article provides details of which types of custom instructions are supported in various environments. For more information about the various types of custom instructions for {% data variables.product.prodname_copilot %}, see [AUTOTITLE](/copilot/concepts/prompting/response-customization).

## {% data variables.product.prodname_dotcom_the_website %}

{% comment %}
WRITING NOTE: The following tables have been written using HTML rather than Markdown due to the poor column width rendering of Markdown tables. In Markdown the columns have equal width, resulting in the first column being too wide, and the second column being too narrow for the text it contains.
{% endcomment %}

<table>
  <thead>
    <tr>
      <th style="width: 25%">{% data variables.product.prodname_copilot_short %} feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{% data variables.copilot.copilot_chat_short %} </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-personal %}
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-organization %}
        </ul>
      </td>
    </tr>
    <tr>
      <td>{% data variables.copilot.copilot_coding_agent %}</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
          {% data reusables.copilot.ci-support-agents-all %}
          {% data reusables.copilot.ci-support-organization %}
        </ul>
      </td>
    </tr>
    <tr>
      <td>{% data variables.copilot.copilot_code-review_short %}</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
          {% data reusables.copilot.ci-support-organization %}
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## {% data variables.product.prodname_vscode %}

<table>
  <thead>
    <tr>
      <th style="width: 25%">{% data variables.product.prodname_copilot_short %} feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{% data variables.copilot.copilot_chat_short %} </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
          {% data reusables.copilot.ci-support-agents-only %}
        </ul>
      </td>
    </tr>
    <tr>
      <td>{% data variables.copilot.copilot_coding_agent %}</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
          {% data reusables.copilot.ci-support-agents-all %}
        </ul>
      </td>
    </tr>
    <tr>
      <td>{% data variables.copilot.copilot_code-review_short %}</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
        </ul>
      </td>
    </tr>
  </tbody>
</table>



## {% data variables.product.prodname_vs %}

<table>
  <thead>
    <tr>
      <th style="width: 25%">{% data variables.product.prodname_copilot_short %} feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{% data variables.copilot.copilot_chat_short %} </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
        </ul>
      </td>
    </tr>
    <tr>
      <td>{% data variables.copilot.copilot_code-review_short %}</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## JetBrains IDEs

<table>
  <thead>
    <tr>
      <th style="width: 25%">{% data variables.product.prodname_copilot_short %} feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{% data variables.copilot.copilot_chat_short %} </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
        </ul>
      </td>
    </tr>
    <tr>
      <td>{% data variables.copilot.copilot_coding_agent %}</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
          {% data reusables.copilot.ci-support-agents-all %}
        </ul>
      </td>
    </tr>
    <tr>
      <td>{% data variables.copilot.copilot_code-review_short %}</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eclipse

<table>
  <thead>
    <tr>
      <th style="width: 25%">{% data variables.product.prodname_copilot_short %} feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{% data variables.copilot.copilot_chat_short %} </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
        </ul>
      </td>
    </tr>
    <tr>
      <td>{% data variables.copilot.copilot_coding_agent %}</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
          {% data reusables.copilot.ci-support-agents-all %}
        </ul>
      </td>
    </tr>
    <tr>
      <td>{% data variables.copilot.copilot_code-review_short %}</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          <li style="text-indent: -1.6em;">Custom instructions are currently not supported.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Xcode

<table>
  <thead>
    <tr>
      <th style="width: 25%">{% data variables.product.prodname_copilot_short %} feature</th>
      <th>Types of custom instructions supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{% data variables.copilot.copilot_chat_short %} </td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
        </ul>
      </td>
    </tr>
    <tr>
      <td>{% data variables.copilot.copilot_coding_agent %}</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
          {% data reusables.copilot.ci-support-agents-all %}
        </ul>
      </td>
    </tr>
    <tr>
      <td>{% data variables.copilot.copilot_code-review_short %}</td>
      <td>
        <ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
          {% data reusables.copilot.ci-support-repository %}
          {% data reusables.copilot.ci-support-path %}
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## {% data variables.copilot.copilot_cli_short %}

<ul style="list-style: none; padding-left: 1.5em; margin-left: 0;">
  {% data reusables.copilot.ci-support-repository %}
  {% data reusables.copilot.ci-support-path %}
  {% data reusables.copilot.ci-support-agents-only %}
</ul>

## Further reading

* [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
* [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-personal-instructions)
* [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-organization-instructions)
