---
title: Increasing test coverage in your company with GitHub Copilot
shortTitle: Increase test coverage
intro: 'Understand features, enable developers, and measure Copilot''s impact.'
versions:
  feature: copilot
product: '{% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.copilot.essp-intro %}

## 1. Identify barriers to success

{% data reusables.copilot.identify-barriers-intro %}

Many software teams face persistent challenges in maintaining high-quality code due to low unit test coverage. In fast-paced development environments, writing tests is often seen as time-consuming or non-essential, especially when teams are under pressure to deliver features quickly.

As a result, critical bugs can be discovered late in the development lifecycle, often in staging or production environments.

This leads to a chain of negative outcomes:

* **Higher bug rates** and customer-reported issues
* **Increased cost** of fixing bugs after deployment
* **Reduced developer confidence** in the stability of their code
* **Slower release cycles** due to reactive debugging and patching

In legacy systems, test coverage can be even harder to address because of complex dependencies or poorly documented code. Developers may lack familiarity with older codebases or with testing frameworks in general, further compounding the problem.

Improving test coverage is a recognized best practice, but it requires time and expertise that many teams struggle to allocate.

## 2. Evaluate your options

{% data reusables.copilot.evaluate-options-intro %}

<a href="https://github.com/github-copilot/purchase?ref_cta=Copilot+Enterprise+trial&ref_cta=Copilot+Business+trial&ref_loc=increase-test-coverage" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

### How {% data variables.product.prodname_copilot_short %} can help

{% data variables.product.prodname_copilot %} can significantly accelerate and simplify the process of writing unit tests. By understanding the surrounding code and context, {% data variables.product.prodname_copilot_short %} can suggest test functions that match the structure and logic of the code being tested.

{% data variables.product.prodname_copilot_short %}'s capabilities are useful across multiple scenarios:

* As developers write new functions, {% data variables.product.prodname_copilot_short %} can automatically suggest corresponding test cases inline.
* When refactoring legacy code, {% data variables.product.prodname_copilot_short %} can help generate test scaffolding to prevent regressions.
* For untested modules, developers can prompt {% data variables.product.prodname_copilot_short %} to generate meaningful test cases, even when test coverage is missing or inconsistent.

By making unit testing easier, faster, and less manual, {% data variables.product.prodname_copilot_short %} reduces the friction that can lead to gaps in test coverage, and helps teams adopt a quality-first mindset.

#### Use cases

* **Inline test generation**: Developers can ask {% data variables.product.prodname_copilot_short %} to generate tests for a specific function or module without switching context.
* **Better edge case coverage**: By prompting {% data variables.product.prodname_copilot_short %} for edge scenarios (such as null inputs, empty lists, or invalid states), developers can quickly cover more branches of logic.
* **Accelerated onboarding**: New team members can use {% data variables.product.prodname_copilot_short %} to understand how a function is expected to behave by looking at the generated test cases.
* **Assistance with CI/CD**: {% data variables.product.prodname_copilot_short %} can suggest how to integrate tests into your build pipeline, ensuring that coverage improvements directly support quality gates.

### Cultural considerations

{% data reusables.copilot.cultural-factors-intro %}

* Teams might **rely on manual testing** or insufficient automated testing. This could be caused by resource constraints for automation or a lack of experience with modern test tools.
* Teams might **wait too long to release**, deploying large batches of code at once, which makes bugs and regressions harder to detect. This could be caused by a lack of CI/CD pipeline maturity, strict compliance requirements, or long review cycles between PR and deployment.

## 3. Implement changes

{% data reusables.copilot.implement-changes-intro %}

* [Generate tests inline](#generate-tests-inline)
* [Cover edge cases](#cover-edge-cases)
* [Understand new code](#understand-new-code)
* [Get assistance with CI/CD](#get-assistance-with-cicd)
* [Best practices for developers](#best-practices-for-developers)
* [Resources for developers](#resources-for-developers)
* [Recommended features](#recommended-features)

### Generate tests inline

1. In VS Code, select the function you want to test and prompt {% data variables.product.prodname_copilot_short %}: `Generate a unit test for this code.`
1. {% data variables.product.prodname_copilot_short %} generates a test inline or in a separate test file, depending on the language and structure.
1. Review, refine, and accept the suggestion.

### Cover edge cases

1. After writing a test, ask {% data variables.product.prodname_copilot_short %}: `What are some edge cases I should test for this function?`

   Or: `Write test cases for when the input is null or empty.`

1. {% data variables.product.prodname_copilot_short %} suggests additional test cases to cover boundary conditions.
1. Review the tests and incorporate them into your test suite.

### Understand new code

1. Select a legacy function and ask {% data variables.product.prodname_copilot_short %}: `Explain what this function does and generate a test to validate it.`
1. {% data variables.product.prodname_copilot_short %} explains the function's purpose and suggests corresponding test cases.
1. Look at the test cases to understand the expected behavior and quickly build context.

### Get assistance with CI/CD

1. Review your test cases and commit them to the codebase.
1. Ask {% data variables.product.prodname_copilot_short %}: `Where should I place this test if I want it to run in CI?`
1. Based on the structure of the codebase, {% data variables.product.prodname_copilot_short %} will suggest where to place test files and how to update pipeline configurations.

### Best practices for developers

Developers **should**:

* Use descriptive comments or prompts when chatting with {% data variables.product.prodname_copilot_short %}. For example: `Generate unit tests for a function that calculates discounts based on user type and purchase amount.`
* Use {% data variables.product.prodname_copilot_short %} to explore logic coverage. For example: `What branches or conditions does this function have that should be tested?`
* Explore different prompt techniques and compare results from different AI models.

Developers **should not**:

* Accept generated tests without reviewing logic. Make sure the tests reflect actual requirements and handle realistic inputs and outputs.
* Skip asserting edge behavior. If you only test "happy paths," you risk missing regressions.
* Rely on {% data variables.product.prodname_copilot_short %} to guess undocumented business rules. Always provide context through prompts or comments.
* Treat {% data variables.product.prodname_copilot_short %} as a substitute for human code reviews. {% data variables.product.prodname_copilot_short %} accelerates the process, but you still need to apply engineering judgment.

### Resources for developers

* [AUTOTITLE](/copilot/using-github-copilot/guides-on-using-github-copilot/writing-tests-with-github-copilot)
* [How to generate unit tests with {% data variables.product.prodname_copilot %}: Tips and examples](https://github.blog/ai-and-ml/github-copilot/how-to-generate-unit-tests-with-github-copilot-tips-and-examples/)
* [{% data variables.product.prodname_copilot %} is EVERYWHERE in Visual Studio](https://learn.microsoft.com/en-us/shows/github-copilot-for-visual-studio/github-copilot-is-everywhere-in-visual-studio-miniseries) (video content with a section on testing)
* [AUTOTITLE](/copilot/using-github-copilot/copilot-chat/prompt-engineering-for-copilot-chat)
* [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat)

### Recommended features

* [{% data variables.copilot.copilot_chat_dotcom_short %}](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-github)
* [{% data variables.product.prodname_copilot_short %} code completion](/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot)
* [{% data variables.copilot.copilot_chat_short %} in the IDE](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-your-ide)
* [{% data variables.copilot.copilot_coding_agent %}](/copilot/concepts/about-copilot-coding-agent)

## Metrics to watch

{% data reusables.copilot.measure-changes-intro %}

* **Test coverage**: Track increases in line and branch coverage after {% data variables.product.prodname_copilot_short %} adoption. If possible, look at test coverage reports from your CI pipelines.
* **Bug rate after deployment**: Fewer bugs should be reported in production environments.
* **Developer confidence**: Use surveys or retrospectives to assess how confident developers feel shipping new code.
* **Time to write tests**: Measure reduction in time spent creating unit tests.
