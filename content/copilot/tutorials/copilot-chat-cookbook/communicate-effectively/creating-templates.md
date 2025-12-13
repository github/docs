---
title: Creating templates
shortTitle: Create templates
intro: '{% data variables.copilot.copilot_chat_short %} can help you create templates to streamline your workflow and ensure consistency across your projects.'
versions:
  feature: copilot
category:
  - Communicate effectively
  - Author and optimize with Copilot
complexity:
  - Simple
octicon: copilot
topics:
  - Copilot
contentType: tutorials
---

{% data variables.copilot.copilot_chat %} can help you create templates for various purposes, such as project documentation, code snippets, or issue tracking. By using templates, you can streamline your workflow and ensure consistency across your projects.

## Example scenario

You want to create a template for a project README file that includes sections for project description, installation instructions, usage examples, and contribution guidelines. You can ask {% data variables.copilot.copilot_chat_short %} to generate a README template based on best practices and your specific requirements. You can then use this template as a starting point for all your project documentation.

## Example prompt

```text copy
Create a README template for a new open-source project that includes sections for project description, installation instructions, usage examples, and contribution guidelines. Make it clear and easy to follow.
```

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} will provide you with a structured README template. You can copy the template {% data variables.copilot.copilot_chat_short %} provides and customize it further to fit your project's needs.

````markdown
# Project Name

> **Short description:**  
> A brief summary of what your project does, its main features, and its purpose.

---

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Description

Provide a detailed explanation of what your project does, why it exists, and any important background information.  
You may want to include:
- Key features
- Supported platforms or languages
- Screenshots or diagrams

---

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```sh
   # Example for Node.js projects
   npm install

   # Example for Python projects
   pip install -r requirements.txt
   ```

3. **Additional setup**
   - List any other required steps (e.g., environment variables, configuration files)

---

## Usage

Provide clear usage instructions and code examples.

```sh
# Example command
your-command --option value
```

```python
# Example in Python
import your_module

result = your_module.do_something()
print(result)
```

- Explain any CLI options, configuration, or parameters.
- Link to more detailed documentation if available.

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a new branch**
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test your changes**
5. **Commit and push**
   ```sh
   git commit -m "Add feature: your-feature-name"
   git push origin feature/your-feature-name
   ```
6. **Open a pull request**

**Code of Conduct:**  
Please be respectful and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

**Issues & Suggestions:**  
Open an issue for bugs, questions, or feature requests.

---

## License

This project is licensed under the [INSERT LICENSE](link to relevant license information).

---

## Contact

- **Maintainer:** [Your Name](mailto:your@email.com)
- **Project Link:** https://github.com/your-username/your-repo-name

---
````

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
