---
title: Vibe coding with GitHub Copilot
shortTitle: Vibe coding
intro: 'Create an application without writing any code yourself.'
topics:
  - Copilot
versions:
  feature: copilot
contentType: tutorials
category:
  - Author and optimize with Copilot
---

## Introduction

{% data variables.product.prodname_copilot_short %} allows you to create a whole new application from scratch, add features, or alter the user interface, without writing a line of code yourself. You can work with {% data variables.product.prodname_copilot_short %}, entering prompts in the chat view—using the AI as your coding partner—and leave all of the actual coding to {% data variables.product.prodname_copilot_short %}.

In this tutorial you'll work this way, in {% data variables.product.prodname_vscode_shortname %} or in a JetBrains IDE, to create a personal time-tracking web app.

This method works well for developing a proof of concept, creating a draft of an application that you'll  develop further using a more conventional approach to software development, or creating applications for your own personal use.

> [!NOTE]
> The responses shown in this article are examples. {% data variables.copilot.copilot_chat_short %} responses are non-deterministic, so you may get different responses from the ones shown here.

## Who is this tutorial for?

- **Learner:** You're learning how to create software applications. You can learn a lot from working with {% data variables.product.prodname_copilot_short %} and seeing how it implements your requests.
- **Non-developer:** You're a product manager, or working in another role outside of an engineering team. You want to quickly create a proof of concept application to demonstrate some particular functionality. You're mainly concerned with the user experience, rather than the details of the code.
- **Individual:** You want to create an application to provide some useful functionality to help you in your daily work or home life. The application will run locally on your computer, and only you will use it, so you're not overly concerned about how the code was put together.

This tutorial is not intended for experienced developers with an established practice of writing code in an editor. Experienced developers will use {% data variables.product.prodname_copilot_short %} in a different way—as tool for problem solving and increased productivity. In this tutorial, we'll work within chat and leave {% data variables.product.prodname_copilot_short %} to do all the work in the editor.

## How long will this take?

There are many variables that may affect how long you might take to complete this tutorial. However, you should allow for at least two hours. At any time you can return to it later, picking up from where you left off in the same conversation in {% data variables.copilot.copilot_chat_short %}.

## Prerequisites

Before getting started you must have the following:
* A [{% data variables.product.prodname_copilot %} subscription plan](/copilot/about-github-copilot/subscription-plans-for-github-copilot).
* One of these IDEs:
  * {% data variables.product.prodname_vscode %}
  * Any JetBrains IDE that supports {% data variables.product.prodname_copilot_short %}, with the {% data variables.product.prodname_copilot %} extension for JetBrains installed. See [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains).
* Some experience of using {% data variables.copilot.copilot_chat_short %} in either {% data variables.product.prodname_vscode %} or JetBrains. If you've never used {% data variables.copilot.copilot_chat_short %} before, see [AUTOTITLE](/copilot/how-tos/chat-with-copilot/chat-in-ide).

## Preparation

We'll create a time-tracking app in a new {% data variables.product.github %} repository.

1. In the {% data variables.product.github %} website, create a new private repository for your application, including an initial README file. See [Creating a new repository](/repositories/creating-and-managing-repositories/creating-a-new-repository).
1. Clone a copy of the repository to your local machine. See [Cloning a repository](/repositories/creating-and-managing-repositories/cloning-a-repository).
1. In your local copy of the repository, create a new branch to work in.

   For example, in a terminal, use the command:

   ```bash copy
   git checkout -b BRANCH-NAME
   ```

## Researching with {% data variables.product.prodname_copilot_short %}

1. In {% data variables.product.prodname_vscode_shortname %}, or your JetBrains IDE, open the repository directory as a new project or workspace.
1. Close any editor tabs that are currently open.

   Working in an empty project or workspace, with no editor tabs open, prevents {% data variables.product.prodname_copilot_short %} being influenced by any code or information in those tabs.

1. Open a terminal window in the IDE.
1. Open {% data variables.copilot.copilot_chat_short %} and check, at the bottom of the chat view, that **Ask** is the currently selected chat mode. If it is not, select **Ask** from the chat mode dropdown.

   ![Screenshot of "Ask" being selected in the mode picker at the bottom of chat view.](/assets/images/help/copilot/ask-mode-selection.png)

1. Choose a model from the models dropdown.

   > [!NOTE]
   > The responses referred to in this tutorial were received while using Claude Sonnet 4.5. Other models will respond differently, but you should get roughly similar results. Claude Sonnet 4.5 is a good choice, if it's available, as it provides useful commentary in the chat view, explaining what it is doing, and giving detailed summaries when it has finished coding.
   >
   > If Claude Sonnet 4.5 is not available, set the model to **Auto** or select a model of your choice.

1. Enter this prompt in the chat:

   ```copilot copy
   I need to keep a daily log of what I've spent my time on. I want to build a time-tracking application to help me do this. Throughout the day I want to use the app to record what I'm working on as I move between tasks. At the end of the day it should show me the total time I've spent on each item.

   What are the typical features of such an app?

   What do I need to consider when building this app?
   ```

   {% data variables.product.prodname_copilot_short %} responds with details to answer your questions.

1. Consider {% data variables.product.prodname_copilot_short %}'s response and ask for more information, as required, to clarify your thoughts about your application.

   For example, you might ask:

   ```copilot copy
   Data storage: the application will run locally on my laptop. What's the best way to persistently store data so that I'll have access to historic time-tracking data?

   Data structure: How should I structure the data for this application? There will be tasks and projects. Each chunk of time will be associated with a task and some, but not all, tasks will be associated with projects. I will want to see totals for: each task, each project, each task per project.
   ```

1. Continue to ask questions in the same chat conversation, to build up a clearer idea of the application you want to build.

   Keep your chat conversation open, as {% data variables.product.prodname_copilot_short %} will use this in the next series of steps.

## Planning the implementation

You can now start planning for an initial implementation of your application. It's a good idea to begin with a basic version of the application which you can iterate on. This makes it easier to get the fundamental functionality working, before adding features.

1. In the same {% data variables.copilot.copilot_chat_short %} conversation you used in the previous section, switch from ask mode to plan mode by selecting **Plan** from the chat mode dropdown at the bottom of the chat view.
1. Enter this prompt:

   ```copilot copy
   I want to build a time-tracking application that allows me to keep track of how much time I spend on tasks during my working day. This should be a web app that runs locally on my computer. Plan the implementation of a basic, initial version of this application. This first version should allow me to:

   - Add, edit and delete projects and tasks - each a name with a maximum of about 50 characters
   - Quickly click to select a project and task and record the start time
   - Click another task to stop the current timer, recording the stop time, and recording the start time for the new task
   - Pause/resume/end the current task
   - Display the totals of times I have spent on each: task, project, and task per project.

   Time is always recorded for a specific task. A task can optionally be associated with a project.

   Store data for each day, but for this version do not include any user interface or functionality for looking at historical data, or compiling statistics. The initial version of the application should be limited to today's time tracking.

   Notes:
   - Tasks never overlap
   - Time should be accurate to the minute by recording the day, hour, minute tasks are started and stopped and calculating the duration from this
   - Design the web UI for display on a desktop monitor
   - Keep things very simple for the initial version. Do not add any other features not mentioned in this prompt
   ```

   Copilot replies with something like:

   <!-- markdownlint-disable MD029 -->
   > ### Plan: Build Time-Tracking Web Application
   >
   > A single-page web application for tracking daily task time using vanilla HTML/CSS/JavaScript with localStorage. The app displays projects/tasks in a sidebar, shows an active timer, and calculates daily totals by task and project.
   >
   > Steps
   >
   > 1. **Create project structure** with `index.html`, `styles.css`, `app.js`, and `storage.js` for a self-contained vanilla JavaScript application
   > 2. **Implement data storage layer** in `storage.js` using localStorage with collections for `projects`, `tasks`, and `timeEntries`, including CRUD operations and ID generation
   > 3. **Build HTML structure** in `index.html` with three main sections: left sidebar for project/task management, center panel for active timer and controls (start/pause/resume/stop), and right panel for daily totals
   > 4. **Implement core timer logic** in `app.js` handling task selection (auto-stop previous, auto-start new), pause/resume/stop actions, and minute-precision time calculations storing `{ taskId, startTime, endTime, duration }`
   > 5. **Create UI rendering functions** in `app.js` for project/task lists with inline edit/delete, active timer display with real-time updates, and totals panel aggregating by task, project, and task-per-project
   > 6. **Style the interface** in `styles.css` with desktop-optimized three-column layout, clear visual states for active/paused timers, and simple forms for adding/editing projects and tasks
   >
   >
   > Further Considerations
   >
   > 1. **Date handling** - Store all times as ISO strings and filter entries by today's date (`YYYY-MM-DD`). Should the day boundary be midnight or a custom time (e.g., 4am for late-night workers)?
   > 2. **Timer display format** - Show elapsed time as `HH:MM` or `H hours M minutes`? Update every second or every minute?
   > 3. **Unassigned tasks** - How to display tasks without projects in the UI? Separate "No Project" section at top/bottom of sidebar, or mixed alphabetically?
   <!-- markdownlint-enable MD029 -->

1. Answer the "Further Considerations" questions {% data variables.product.prodname_copilot_short %} raised. For example, you could respond with this prompt:

   ```copilot copy
   - Date handling: only consider the local date. This app is only going to be used by one person in one timezone. Set the day boundary to 4 am.
   - Time display: Show elapsed time as HH:MM. Don't track seconds.
   - Unassigned tasks: I've changed my mind. All tasks should be associated with a project, but there should be a built-in project called "No Project" (which the user can't delete or rename). All tasks should be associated with this project until the user chooses another project.

   If the user is changing tasks for the same project then they should be able to do this will one click (assuming the new task has already been defined). If they are doing the same task but for a different project, this should also be possible to change with one click (assuming the new project is already defined). If they want to track time for a different task in a different project then they should be able to do this with 2 clicks.
   ```

   {% data variables.product.prodname_copilot_short %} may respond with further questions for your consideration.

1. You can answer some or all of the questions, or, if you feel that the plan has enough detail, you can skip to the next stage.

   {% data variables.product.prodname_copilot_short %}'s responses are non-deterministic, so the questions it asks will vary, but let's assume its response included these questions:

   > **New task default project** - When adding a new task without specifying project, assign to "No Project" or to currently active/selected project? Recommend: Currently selected/active project with "No Project" as fallback.
   >
   > **Timer precision edge case** - If user switches tasks within the same minute (e.g., 10:30:15 to 10:30:45), should this create a 0-minute entry or be ignored? Recommend: Ignore and treat as immediate switch without recording.

   You might decide to respond to these questions by entering the prompt:

   ```copilot copy
   New task default project - When adding a new task without actively specifying a project, use the currently selected/active project with "No Project" as the default when the user has not actively selected any other project.

   Timer precision edge case - If user switches or ends tasks within the same minute as the start time then delete this entry. Only time entries of more than one minute should be recorded.
   ```

1. Continue iterating if you feel there are further questions that need answered.

1. Keep your chat conversation open, as {% data variables.product.prodname_copilot_short %} will use this in the next series of steps.

## Building your application with {% data variables.copilot.copilot_coding_agent %}

When you think the plan contains enough detail:

1. Click **Start Implementation** in the {% data variables.copilot.copilot_chat_short %} view.

   Depending on your IDE this will either start the agent immediately, or it will add "Start Implementation" as a prompt, which you should then submit.

   Notice that chat mode switches from "Plan" to "Agent".

1. {% data variables.product.prodname_copilot_short %} will request your permission to perform actions such as editing sensitive files, running commands, or adding files to Git.

   * **In {% data variables.product.prodname_vscode_shortname %}:** click **Allow**.

     ![Screenshot of {% data variables.product.prodname_copilot_short %} in VS Code asking for permission to edit a sensitive file. The "Allow" button is highlighted.](/assets/images/help/copilot/allow-editing-files.png)

     Alternatively, click the arrow on the **Allow** button and click **Allow in this Session** in the dropdown menu.

   * **In JetBrains:**

     * When asked if you want to add a file to Git, select the **Don't ask again** checkbox, then click **Add**.
     * When asked about running a command, click **Continue**.

       ![Screenshot of {% data variables.product.prodname_copilot_short %} in JetBrains asking for permission to run a command. The "Continue" button is highlighted.](/assets/images/help/copilot/continue-button-jetbrains.png)

   {% data variables.product.prodname_copilot_short %} will begin to implement an initial version of your application.

1. If {% data variables.product.prodname_copilot_short %} finishes its response without completing the installation, or if {% data variables.product.prodname_copilot_short %} appears to have stalled, take the following remedial actions, as required:

   * **Missing component**

     If {% data variables.product.prodname_copilot_short %} says it cannot proceed because a required component needs to be installed (for example, Node.js), you can enter a prompt asking {% data variables.product.prodname_copilot_short %} to download and install the missing component.

   * **Process is taking a long time**

     Some steps may take several minutes to complete. Be patient and allow the agent to complete each part of the process. An animated spinner icon indicates that the agent is currently working on a command.

     For example, in JetBrains IDEs:

     ![Screenshot of the {% data variables.copilot.copilot_chat_short %} view. The spinner icon is highlighted with a red outline.](/assets/images/help/copilot/agent-working-spinner.png)

   * **Input required**

     Occasionally {% data variables.product.prodname_copilot_short %} will run a command that requires some manual input.

     If {% data variables.product.prodname_copilot_short %} appears to have stalled, check the IDE's terminal window to see if a command requires action from you. {% data variables.product.prodname_copilot_short %} will wait for you to enter a response in the terminal before continuing.

   * **Error messages**

     If you get any error messages while developing the application, copy the error message into the chat prompt box and ask {% data variables.product.prodname_copilot_short %} to fix the problem.

      > [!NOTE]
      > You may have to iterate with {% data variables.product.prodname_copilot_short %} in this way, asking it to debug and fix problems, until it has a working application that you can view in your browser.

   * **{% data variables.product.prodname_copilot_short %}'s response appears to be stuck**

     If the spinner icon is displayed in a response but, after waiting for several minutes—and having checked that your input is not required in the terminal—nothing is happening, you can stop and restart the conversation.

     Click the cancel button at the bottom of the chat view. For example, in {% data variables.product.prodname_vscode_shortname %}:

     ![Screenshot of the cancel button at the bottom right of the chat view in {% data variables.product.prodname_vscode_shortname %}.](/assets/images/help/copilot/chat-cancel-button.png)

     Then enter the prompt:

     ```copilot copy
     Your previous response stalled. Try again, picking up from where you left off.
     ```

1. Typically, towards the end of the coding process, {% data variables.product.prodname_copilot_short %} will request your permission to open an untrusted web page for the application:

   ![Screenshot of the 'Open untrusted web page' message.](/assets/images/help/copilot/open-untrusted-web-page.png)

   Give your permission for this.

1. When the agent finishes work on the application it will display a summary of what it built in the chat panel. Typically it will provide a link to the running application.

   The time tracker application may also be displayed in a browser tab in your IDE. This can be useful for confirming that the page is available. However, you should always check the application in your default browser to verify a realistic user experience.

   Click the link in the chat panel to open the application in your default browser.

   If a link isn't displayed in {% data variables.product.prodname_copilot_short %}'s chat response, wait a few minutes as the agent may be working on deploying the application. If a link is still not displayed you can prompt {% data variables.product.prodname_copilot_short %} to display one:

   ```copilot copy
   Confirm the implementation is complete. If so, give me a link to the running application.
   ```

1. If the final message from {% data variables.product.prodname_copilot_short %} gives you instructions for starting the application (such as running `npm start`), rather than supplying a link to the running application, you can ask {% data variables.product.prodname_copilot_short %} to run the command for you and check that it completed successfully. For example:

   ```copilot copy
   Run npm start for me and confirm everything is working
   ```

   If {% data variables.product.prodname_copilot_short %} isn't able to run all of the commands itself, it will provide you with commands that you can copy and paste into the terminal.

## Testing your application

1. View your application's web page.

   Below are some examples of a time tracking application created by {% data variables.product.prodname_copilot_short %}:

   ![Screenshot of an example of a time tracker app created by {% data variables.product.prodname_copilot_short %}.](/assets/images/help/copilot/time-tracker-example1.png)

   <img src="/assets/images/help/copilot/time-tracker-example2.png" alt="Screenshot of another example of a time tracker created by {% data variables.product.prodname_copilot_short %}." style="width:100%;max-height:100%" />

   > [!NOTE]
   > The application that {% data variables.product.prodname_copilot_short %} generates for you might look quite different to the examples shown above.

1. Try using the application. Add a couple of projects and a selection of tasks, then start tracking time on a task.
1. As you try out this first draft of the application, make a note of the two or three most important things that need to be changed. In subsequent steps you'll work on fixing these. For now, don't spend time noting down everything you want to change. Just identify the most pressing things that need to be fixed first. You'll have time to get everything working and looking the way you want it to later in the process.
1. If the application doesn't load, or an error is displayed, describe the problem in the chat prompt box, copying and pasting any error messages, and ask {% data variables.product.prodname_copilot_short %} to debug and fix the problem.
1. After you have reviewed the initial draft of the application and established that it runs in at least a rudimentary fashion, return to your IDE.
1. _**Optional**: if you're familiar with the type of code {% data variables.product.prodname_copilot_short %} is writing for you._ Display the files that {% data variables.product.prodname_copilot_short %} has changed in the editor and review the changes. You can make your own changes if required.
1. Click **Keep** (in {% data variables.product.prodname_vscode_shortname %}) or **Accept All** (in JetBrains IDEs), in the {% data variables.copilot.copilot_chat_short %} view, to accept the changes and remove the diff lines from the editor.

   You now have a base version of your application that you can iterate on to improve and extend the functionality and user interface.

1. Commit the changes to Git.

   It's always a good idea to commit changes at each successful iteration so you can easily return to a previous version if you decide you don't like some changes that {% data variables.product.prodname_copilot_short %} has made for you.

1. Close any open editor tabs, but keep the {% data variables.copilot.copilot_chat_short %} view open as you'll continue working in the same chat conversation.

## Iterating on changes

1. After committing the initial version to git you can make a change to the application, fixing one of the things you noted when you reviewed the site.

   For example, the implementation may have tied tasks to project, so that a task created for one project doesn't show up when you select another project. To change this—allowing you to create tasks that can be used for any project—enter another prompt into the same conversation, while still in agent mode for {% data variables.product.prodname_copilot_short %}. You could use a prompt such as:

   ```copilot copy
   Tasks should not be tied to projects in the user interface, as they currently are. When the user selects a project, allow them to choose any currently defined task. There should be a many-to-many relationship between projects and tasks.
   ```

1. Again, {% data variables.product.prodname_copilot_short %} is likely to ask you to approve changes it needs to make to the code. Click **Approve** or **Continue**.
1. Once {% data variables.product.prodname_copilot_short %} completes the change, return to your browser and refresh the page.
1. Review the revised application and tell {% data variables.product.prodname_copilot_short %} if the change was not implemented correctly.

   You may spot more than one thing that needs fixed, but to allow {% data variables.product.prodname_copilot_short %} to focus on one thing at a time, you should restrict each prompt to a single task and iterate on this in a series of prompts and responses, as necessary, until the problem is fixed. Then, move on to the next thing you want to change.

1. If there's a problem with the layout of the web page—for example, overlapping or badly aligned elements—you can take a screenshot, paste it into the chat and enter a prompt such as:

   ```copilot copy
   This part of the web page looks bad. Fix it.
   ```

1. After a change is implemented satisfactorily, click **Keep** or **Accept All** and commit the changes.
1. _**Optional**:_ Depending on your working practices—for example, if you are working in a development team—you may decide at this point, and after each significant change, to raise a pull request. This will allow you to have changes reviewed and merged into the default branch of the repository so that other people can work on the code.
1. Continue iterating on your application.

   For example, you might want to give the app a different style of user interface. In this case, still in agent mode, you could prompt {% data variables.product.prodname_copilot_short %}:

   ```copilot copy
   I don't like the look of the user interface. Suggest some alternative web UI libraries I could choose to give the app a more formal, business-like appearance.
   ```

   {% data variables.product.prodname_copilot_short %} will list some UI libraries.

1. Choose one of the libraries and ask {% data variables.product.prodname_copilot_short %} to use it. For example:

   ```copilot copy
   Alter the user interface to use Bootstrap 5. I want the app to look like a professionally designed business application.
   ```

   {% data variables.product.prodname_copilot_short %} will rework the application to use your chosen user interface library.

1. Check the results and commit the changes if you are happy with the revised look of the application.
1. A common requirement for a time tracker application is the ability to output your timesheet. For example, if you are a contractor, you might be required to submit a timesheet along with your invoice. So let's add the ability to generate a PDF.

   Use this prompt:

   ```copilot copy
   Add a button to the user interface which generates a PDF timesheet for the work the user has tracked today. The timesheet should show the total time spent on task for each of the defined project for which data has been recorded today. Under this show the total time spent on each project. Then show the total time spent on each task irrespective of projects. Finally show a chronological lists of tasks performed during the day with the time spent on each.
   ```

### Example application

After working with {% data variables.product.prodname_copilot_short %} to build, extend and improve your time tracker, the application might look something like this:

<img src="/assets/images/help/copilot/time-tracker-example3.png" alt="Screenshot an example of a time tracker app with data added by a user." style="width:100%;max-height:100%" />

## Improving your software project

1. {% data variables.product.prodname_copilot_short %} can help you make your project more robust by adding and running tests. Tests help to prevent bugs from getting into the codebase. You could prompt {% data variables.product.prodname_copilot_short %} in agent mode:

   ```copilot copy
   Add a comprehensive suite of tests for this application. These should include unit tests, integration tests, component tests, database tests, and end-to-end tests. Locate the tests in a `tests` directory. Run the tests and fix any problems that are identified.
   ```

1. It's always a good idea to have a README file in your project. The README should provide an overview of the project and give instructions for using the application. You can ask {% data variables.product.prodname_copilot_short %} to create or update the README file:

   ```copilot copy
   Add or update a README.md file. This should provide an introduction to the application, describing its primary use and highlighting its features. It should give easy to follow user instructions for using the application in the browser. It should provide admin instructions, explaining how to deploy the application. Finally it should give an overview of the technologies used to build the application and some basic information for developers on how to maintain the code and extend the application.
   ```

1. Now that you've added the initial code for the application to the repository, you should add a custom instructions file for {% data variables.product.prodname_copilot_short %}. The custom instructions file improves {% data variables.product.prodname_copilot_short %}'s responses in a repository by providing repository-specific guidance and implementation preferences. To add a custom instructions file:

   * **In VS Code:** click the "Configure Chat" cog icon, at the top of the chat view, and click **Generate Chat Instructions**.

   * **In JetBrains IDEs:** in agent mode of {% data variables.copilot.copilot_chat_short %}, submit a prompt such as:

     ```copilot copy
     Analyze this codebase and create or update `.github/copilot-instructions.md` to guide AI coding agents.

     Discover essential knowledge for immediate productivity:
     - Architecture: major components, service boundaries, data flows, and structural decisions
     - Developer workflows: builds, tests, debugging commands
     - Project conventions that differ from common practices
     - Integration points and cross-component communication

     Guidelines:
     - Merge intelligently if file exists
     - Write ~20-50 concise lines with markdown structure
     - Include specific codebase examples
     - Focus on THIS project's approaches, not generic advice
     - Document discoverable patterns, not aspirational patterns
     - Reference key files/directories that exemplify important patterns
     ```

1. Review the instructions file. If you think the instructions need some more details, you can add these to the file manually and save it. For example, you could add an instruction about running tests, if the file does not already contain an instruction about this:

   ```text copy
   ## Running tests

   Always run the complete test suite after completing a batch of code changes, to ensure the changes do not break or adversely affect any part of the application. Fix any test failures and then run the tests again to verify the fix.
   ```

## Next steps

* Continue iterating on this project, making improvements to your time tracker.
* Using the same methodology, create another application.
* Find out about another way you can create applications without writing the code yourself. See [AUTOTITLE](/copilot/concepts/spark).
