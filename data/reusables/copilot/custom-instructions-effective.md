## Writing effective custom instructions

The instructions you add to your custom instruction file(s) should be short, self-contained statements that provide {% data variables.product.prodname_copilot_short %} with relevant information to help it work in this repository. Because the instructions are sent with every chat message, they should be broadly applicable to most requests you will make in the context of the repository.

The exact structure you utilize for your instructions file(s) will vary by project and need, but the following guidelines provide a good starting point:

* Provide an overview of the project you're working on, including its purpose, goals, and any relevant background information.
* Include the folder structure of the repository, including any important directories or files that are relevant to the project.
* Specify the coding standards and conventions that should be followed, such as naming conventions, formatting rules, and best practices.
* Include any specific tools, libraries, or frameworks that are used in the project, along with any relevant version numbers or configurations.

The following instructions file is an example of these practices in action:

```markdown
# Project Overview

This project is a web application that allows users to manage their tasks and to-do lists. It is built using React and Node.js, and uses MongoDB for data storage.

## Folder Structure

- `/src`: Contains the source code for the frontend.
- `/server`: Contains the source code for the Node.js backend.
- `/docs`: Contains documentation for the project, including API specifications and user guides.

## Libraries and Frameworks

- React and Tailwind CSS for the frontend.
- Node.js and Express for the backend.
- MongoDB for data storage.

## Coding Standards

- Use semicolons at the end of each statement.
- Use single quotes for strings.
- Use function based components in React.
- Use arrow functions for callbacks.

## UI guidelines

- A toggle is provided to switch between light and dark mode.
- Application should have a modern and clean design.
```

You should also consider the size and complexity of your repository. The following types of instructions may work for a small repository with only a few contributors, but for a large and diverse repository, **these may cause problems**:

* Requests to refer to external resources when formulating a response
* Instructions to answer in a particular style
* Requests to always respond with a certain level of detail

For example, the following instructions **may not have the intended results**:

```markdown
Always conform to the coding styles defined in styleguide.md in repo my-org/my-repo when generating code.

Use @terminal when answering questions about Git.

Answer all questions in the style of a friendly colleague, using informal language.

Answer all questions in less than 1000 characters, and words of no more than 12 characters.
```
