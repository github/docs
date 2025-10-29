---
title: Modernizing legacy code with GitHub Copilot
shortTitle: Modernize legacy code
intro: '{% data variables.copilot.copilot_chat_short %} helps modernize legacy code by suggesting refactors and creating tests to catch potential issues.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/guides-on-using-github-copilot/modernizing-legacy-code-with-github-copilot
  - /copilot/tutorials/modernizing-legacy-code-with-github-copilot
contentType: tutorials
category:
  - Modernize applications
  - Author and optimize with Copilot
---

> [!NOTE] The responses shown in this article are examples. {% data variables.copilot.copilot_chat_short %} responses are non-deterministic, so you may get different responses from the ones shown here.

Legacy code is code that is old, outdated, or no longer supported by the original developers. It can be difficult to maintain and extend because it may not follow modern best practices, such as using consistent naming conventions or writing clear documentation.

Modernizing legacy code can help you:

* Improve performance and scalability.
* Make the code easier to maintain and extend.
* Reduce the risk of introducing bugs when making changes.
* Make the code easier to test.

{% data variables.product.prodname_copilot_short %} can help you modernize your legacy code by:

* **Providing suggestions** for refactoring the code to follow modern best practices.
* **Generating documentation** to help you understand how the code works.
* **Generating tests** to help you verify that your changes haven't introduced bugs.

## Example scenario

In this example, we’ll be looking at an account management system written in COBOL and modernizing it into Node.js. You can find the COBOL code in the [`modernize-legacy-cobol-app` repository](https://github.com/continuous-copilot/modernize-legacy-cobol-app).

The account management system consists of three key files:

* `main.cob`: The main program that reads input from the user and calls the appropriate subprogram.
* `operations.cob`: A subprogram that performs operations on the account data, such as credit, debit, and view balance.
* `data.cob`: A subprogram that manages the storage of the account balance.

## Step 1: Get a local copy of the repository

Before you compile and run the program, you need to have the code locally. If you haven't already cloned the repository, navigate to the directory where you want to store the project and run the following command:

```shell copy
git clone https://github.com/continuous-copilot/modernize-legacy-cobol-app.git
```

## Step 2: Compile and run the program

You can either install a COBOL compiler in your preferred development environment (for example, the open source GnuCOBOL compiler), or use {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_github_codespaces %}.

If you use MacOS, you can install GnuCOBOL using [Homebrew](https://brew.sh/):

```shell copy
brew install gnu-cobol
```

If you use {% data variables.product.prodname_codespaces %} or an Ubuntu Linux system, you can install GnuCOBOL using `apt`:

```shell copy
sudo apt-get update && \
sudo apt-get install gnucobol
```

To compile the code, link the files, and create an executable, run the following command from the root of the repository:

```shell copy
cobc -x main.cob operations.cob data.cob -o accountsystem
```

To run the program, use the following command:

```shell copy
./accountsystem
```

## Step 3: Explain the files and code

The first step in modernizing the code is to understand how it works. You can ask {% data variables.copilot.copilot_chat_short %} to explain the code in each file.

Open the repository in your IDE then, in the {% data variables.copilot.copilot_chat_short %} panel, enter the following prompt.

### Example prompt 1

```copilot copy
/explain #file:main.cob #file:operations.cob #file:data.cob. Create a high level overview of the app. Explain each file in detail and how they are linked.
```

### Example response 1

This is an excerpt from the response to the prompt above:

`Sure! Here's a high-level overview of the COBOL application, along with detailed explanations of each file and how they are linked together.`

`High-Level Overview`

`This COBOL application simulates an account management system. It allows users to view the current balance, credit the account, debit the account, and exit the application. The application is divided into three main COBOL source files: main.cob, operations.cob, and data.cob. ...`

## Step 4: Chart out the data flow between the files

The next step is to understand how the files are linked together. You can use `@workspace` to create a data flow diagram for the application.

> [!NOTE]
> The `@workspace` chat participant in {% data variables.product.prodname_vscode_shortname %} and {% data variables.product.prodname_vs %} provides {% data variables.product.prodname_copilot_short %} with context about all of the code in your workspace. You can use `@workspace` when you want {% data variables.product.prodname_copilot_short %} to consider the structure of your project and how different parts of your code interact. If you're using a JetBrains IDE, use `@project` rather than `@workspace`.

### Example prompt 2

```copilot copy
@workspace Create a sequence diagram of the app showing the data flow of the app. Create this in mermaid format so that I can render this in a markdown file.
```

{% data variables.product.prodname_copilot_short %} outputs the Mermaid markup for a full sequence diagram that shows how the application works. You can copy and paste this markup into a Mermaid application to generate the diagram.

## Step 5: Generate a test plan

Create a test plan to ensure that the application works as expected after you make changes. You can use `@workspace` to generate a test plan that covers all of the files in the project.

### Example prompt 3

```copilot copy
@workspace The current COBOL app has no tests. Create a test plan of current business logic that I can use to validate with business stakeholders about the current implementation.

Later I would like to use this test plan to create unit and integration tests in a node.js app. I am in the middle of transforming the current COBOL app to a node.js app.

The test plan should include the following:

1. Test Case ID
2. Test Case Description
3. Pre-conditions
4. Test Steps
5. Expected Result
6. Actual Result
7. Status (Pass/Fail)
8. Comments

Create the test plan in a markdown table format. The test plan should cover all the business logic in the current COBOL app.

Convert this to markdown syntax to insert as a new file
```

{% data variables.product.prodname_copilot_short %} outputs a test plan in Markdown format that you can use to validate the application. To use this plan later in the process, create a file called `TESTPLAN.md` and copy the suggested plan into it. This will allow you to reference the test plan when generating test cases in the next steps.

## Step 6: Convert the files from COBOL to Node.js

The next step is to convert the COBOL files to Node.js. It's important to keep the following prompt practices in mind:

* Provide context
* Give clear directions
* Be specific about the outcome you want to achieve

Start by creating a temporary directory within your project, in which to save the JavaScript files you're going to create.

```shell copy
mkdir temp-JS-project-directory
```

Then, iteratively convert the COBOL files to Node.js.

### Example prompt 4

```copilot copy
Convert the code in #file:main.cob to node.js
```

### Example response 4

```shell
Sure! Here is the equivalent Node.js code for the main.cob file. This code will simulate the same account management system functionality.

### COBOL Code:

main.cob


```COBOL
IDENTIFICATION DIVISION.
       PROGRAM-ID. MainProgram.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01  CONTINUE-FLAG      PIC X VALUE 'Y'.
       01  USER-CHOICE        PIC 9.
       01  FINAL-BALANCE      PIC 9(6)V99 VALUE 1000.00.

       PROCEDURE DIVISION.
           PERFORM UNTIL CONTINUE-FLAG = 'N'
               DISPLAY "1. View Balance"
               DISPLAY "2. Credit Account"
               DISPLAY "3. Debit Account"
               DISPLAY "4. Exit"
               ACCEPT USER-CHOICE

               EVALUATE USER-CHOICE
                   WHEN 1
                       CALL 'Operations' USING 'TOTAL'
                   WHEN 2
                       CALL 'Operations' USING 'CREDIT'
                   WHEN 3
                       CALL 'Operations' USING 'DEBIT'
                   WHEN 4
                       MOVE 'N' TO CONTINUE-FLAG
                       DISPLAY "Exiting the program. Goodbye!"
                   WHEN OTHER
                       DISPLAY "Invalid choice. Please try again."
               END-EVALUATE
           END-PERFORM
           STOP RUN.


### Node.js Code: `main.js`
```javascript
const readline = require('readline');

let continueFlag = 'Y';
let finalBalance = 1000.00;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMenu() {
    console.log("1. View Balance");
    console.log("2. Credit Account");
    console.log("3. Debit Account");
    console.log("4. Exit");
}

function handleUserChoice(choice) {
    switch (choice) {
        case '1':
            viewBalance();
            break;
        case '2':
            creditAccount();
            break;
        case '3':
            debitAccount();
            break;
        case '4':
            continueFlag = 'N';
            console.log("Exiting the program. Goodbye!");
            rl.close();
            break;
        default:
            console.log("Invalid choice. Please try again.");
            promptUser();
            break;
    }
}

function viewBalance() {
    console.log(`Current balance: ${finalBalance.toFixed(2)}`);
    promptUser();
}

function creditAccount() {
    rl.question("Enter credit amount: ", (amount) =&gt; {
        amount = parseFloat(amount);
        if (!isNaN(amount) &amp;&amp; amount &gt; 0) {
            finalBalance += amount;
            console.log(`Amount credited. New balance: ${finalBalance.toFixed(2)}`);
        } else {
            console.log("Invalid amount. Please try again.");
        }
        promptUser();
    });
}

function debitAccount() {
    rl.question("Enter debit amount: ", (amount) =&gt; {
        amount = parseFloat(amount);
        if (!isNaN(amount) &amp;&amp; amount &gt; 0) {
            if (finalBalance &gt;= amount) {
                finalBalance -= amount;
                console.log(`Amount debited. New balance: ${finalBalance.toFixed(2)}`);
            } else {
                console.log("Insufficient funds for this debit.");
            }
        } else {
            console.log("Invalid amount. Please try again.");
        }
        promptUser();
    });
}

function promptUser() {
    if (continueFlag === 'Y') {
        displayMenu();
        rl.question("Select an option: ", handleUserChoice);
    }
}

promptUser();

This Node.js code replicates the functionality of the COBOL main.cob file, providing a simple command-line interface for viewing the balance, crediting the account, debiting the account, and exiting the application.
```

You should review the suggested code thoroughly before using it. Once you're satisfied with the generated code, follow these steps to save it locally and complete the conversion:

1. In the temporary directory you created earlier, create a new file called `main.js`.
1. Copy the generated code from the {% data variables.copilot.copilot_chat_short %} panel and paste it into `main.js`.
1. Save the file.
1. Use similar prompts to convert `operations.cob` and `data.cob` to Node.js.
1. Create corresponding JavaScript files, `operations.js` and `data.js`, in the same temporary directory.
1. Copy and paste the generated code into each file, then save them.

## Step 7: Link the files together and set up a working Node.js project

Once you have converted all of the files to Node.js, you need to link them together and set up a working Node.js project.

1. Navigate to the temporary directory in your terminal.
1. Run the following command to create a `package.json` file:

     ```shell copy
     npm init -y
     ```

1. If your application requires external packages, install them by running:

     ```shell copy
     npm install
     ```

1. Start the app by running:

     ```shell copy
     npm start
     ```

At this point, the Node.js application may not fully replicate the functionality of the original COBOL program. For example, balances may not update correctly, or calculations might not match the COBOL logic.

To refine the application, you will need to:

* **Identify incorrect behavior** by running the program and comparing it to the COBOL version.
* **Work iteratively with {% data variables.product.prodname_copilot_short %}** to adjust the logic until the Node.js program behaves as expected.
* **Use targeted prompts** to debug and improve specific parts of the code, such as:

  ```copilot copy
  @workspace - analyze main.js and ensure the account balance updates correctly when crediting an account.
  ```

Refactoring legacy code isn’t always a one-step process—{% data variables.product.prodname_copilot_short %} can assist in debugging and improving functionality as you refine your new Node.js implementation.

## Step 8: Generate unit and integration tests

The next step is to generate unit and integration tests to ensure that the application works as expected. You can use `@workspace` to generate a test plan that covers all of the files in the project.

### Example prompt 5

```copilot copy
@workspace I would like to create unit and integration tests cases from the test plan mentioned in #file:TESTPLAN.md file. The node.js code is in the node-accounting-app folder and I am looking to generate tests for #file:operations.js file. Use a popular testing framework and also provide all the dependencies required to run the tests.
```

### Example response 5

{% data variables.product.prodname_copilot_short %} generates a number of tests in Jest, a JavaScript testing framework, with a full, step-by-step guide on how to implement and run them.

This is an excerpt from the response to the prompt above:

`“This test plan covers the main functionalities of the COBOL application, including viewing the balance, crediting the account, debiting the account, and exiting the application. The test cases are implemented using Jest, a popular testing framework for Node.js. Validate this test plan with the business stakeholders to ensure it meets the business requirements. Once validated, you can use this plan to create corresponding unit tests and integration tests for the Node.js application.”`

## Step 9: Run tests and refine the code

After generating the test plan and writing the tests, you’ll need to run them and fix any failing tests. Testing is an iterative process, you may need to modify the code to resolve issues, then re-run the tests until everything passes.

If a test fails, use {% data variables.product.prodname_copilot_short %} to help debug and refine the implementation.

### Example prompt 6

```copilot copy
@workspace - analyze test failures in operations.test.js and suggest fixes to match the expected behavior.
```

Even if all tests pass, the program may still have issues. Automated tests don’t always catch missing functionality or logic errors, so manual testing is required to ensure the application behaves as expected.

## Step 10: Move the JavaScript project to a new location

Once the application is working as expected, move the new JavaScript project out of the COBOL directory to keep it separate.

1. Navigate to the parent directory of the COBOL project.
1. Move the JavaScript project to a new location:

   ```shell copy
   mv modernize-legacy-cobol-app new-js-project
   ```

1. Navigate to the new project directory and confirm everything runs correctly:

   ```shell copy
   cd new-js-project
   npm start
   ```

Now, the refactored Node.js application is in its own standalone project folder, separate from the original COBOL files.

## Conclusion

In this example, we looked at an account management system written in COBOL and modernized it into Node.js. We used {% data variables.copilot.copilot_chat_short %} to explain the code, chart out the data flow, generate a test plan, and convert the code to Node.js. By following these steps, you can modernize your legacy code and make it easier to maintain and extend. Here are some additional tips for modernizing legacy code:

* **Prompting best practices are key**: The quality of your prompts determines the quality of {% data variables.product.prodname_copilot_short %}'s suggestions. Provide clear context, break down complex tasks into smaller steps, provide examples, and give {% data variables.product.prodname_copilot_short %} specific goals to work toward. This makes your workflow smoother and your results more precise
* **Review the code before using it**: Make sure you understand the code that {% data variables.product.prodname_copilot_short %} provides before using it in your application. This will help you catch any potential issues and ensure that the code meets your requirements.
* **Validate your changes**: After making changes to the code, it's important to validate that the application still works as expected. You can use the test plan generated by {% data variables.product.prodname_copilot_short %} to create unit and integration tests for the application.

## Hands-on practice

Try the [Modernizing your legacy code with {% data variables.product.prodname_copilot %}](https://github.com/skills/modernize-your-legacy-code-with-github-copilot) Skills exercise for practical experience updating a legacy codebase with {% data variables.product.prodname_copilot %}.

## Further reading

* [AUTOTITLE](/copilot/copilot-chat-cookbook/documenting-code/documenting-legacy-code)
* [Modernizing legacy code with {% data variables.product.prodname_copilot %}: Tips and examples](https://github.blog/ai-and-ml/github-copilot/modernizing-legacy-code-with-github-copilot-tips-and-examples/) on the {% data variables.product.github %} Blog
