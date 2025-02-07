---
title: 'Documenting legacy code'
shortTitle: Document legacy code
intro: '{% data variables.product.prodname_copilot_chat_short %} can help with documenting legacy code.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/documenting-code/documenting-legacy-code
versions:
  feature: copilot
category:
  - 'Documenting code'
complexity:
  - Simple
octicon: book
topics:
  - Copilot
---
Working with legacy code can be challenging for developers, especially when the code is complex or not well-documented. In such cases, it can be helpful to use Copilot Chat to explain unclear or complex code to other developers or to document it for future reference.

## Example scenario

The block of COBOL below connects to a database and inserts a record. The code lacks documentation, which makes it difficult to understand what it does and how it works.

```text
IDENTIFICATION DIVISION.
PROGRAM-ID. INSERT-RECORD.

ENVIRONMENT DIVISION.

DATA DIVISION.
WORKING-STORAGE SECTION.
01  WS-STATUS-FLAGS.
    05 WS-DB-STATUS     PIC X(2).
       88 WS-SUCCESS    VALUE "00".
    05 WS-SQLCODE       PIC S9(9) COMP.
    05 WS-ERROR-MSG     PIC X(50).

LINKAGE SECTION.
01  LS-PARAMETERS.
    05 LS-PERSON-RECORD.
       10 PERSON-ID     PIC 9(6).
       10 PERSON-NAME   PIC X(50).
       10 PERSON-AGE    PIC 9(3).
    05 LS-RESULT        PIC X.
       88 SUCCESS       VALUE 'T'.
       88 FAILED        VALUE 'F'.

PROCEDURE DIVISION USING LS-PARAMETERS.
    PERFORM INSERT-AND-VALIDATE
    GOBACK
    .

INSERT-AND-VALIDATE.
    EXEC SQL
        INSERT INTO persons (id, name, age)
        VALUES (:PERSON-ID, :PERSON-NAME, :PERSON-AGE)
    END-EXEC

    IF SQLCODE = 0
        EXEC SQL COMMIT END-EXEC
        SET SUCCESS TO TRUE
    ELSE
        EXEC SQL ROLLBACK END-EXEC
        SET FAILED TO TRUE
        STRING "DB Error: " SQLCODE
            DELIMITED BY SIZE
            INTO WS-ERROR-MSG
        DISPLAY WS-ERROR-MSG
    END-IF
    .
```

## Example prompt

We can use a simple prompt to ask {% data variables.product.prodname_copilot_chat_short %} to document the code.

`Document this code`

> [!NOTE] If you want the documentation generated in another format like Markdown, you can specify the desired output format in the prompt. For example: `Document this code in Markdown`.

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

Copilot will provide a text overview of the code block, and an updated version with comments explaining the logic and purpose of each section.

For example:

```text
*****************************************************************
* Program: INSERT-RECORD
* Purpose: Inserts a person record into the database with
*          transaction management and error handling
*****************************************************************
 IDENTIFICATION DIVISION.
 PROGRAM-ID. INSERT-RECORD.

 ENVIRONMENT DIVISION.

 DATA DIVISION.
 WORKING-STORAGE SECTION.
* Status flags and error handling variables
 01  WS-STATUS-FLAGS.
     05 WS-DB-STATUS     PIC X(2).              *> Database status
        88 WS-SUCCESS    VALUE "00".            *> Success flag
     05 WS-SQLCODE       PIC S9(9) COMP.        *> SQL return code
     05 WS-ERROR-MSG     PIC X(50).             *> Error message

 LINKAGE SECTION.
* Input/Output parameters
 01  LS-PARAMETERS.
     05 LS-PERSON-RECORD.
        10 PERSON-ID     PIC 9(6).              *> Person ID
        10 PERSON-NAME   PIC X(50).             *> Person name
        10 PERSON-AGE    PIC 9(3).              *> Person age
     05 LS-RESULT        PIC X.                 *> Operation result
        88 SUCCESS       VALUE 'T'.             *> Success flag
        88 FAILED        VALUE 'F'.             *> Failure flag

 PROCEDURE DIVISION USING LS-PARAMETERS.
     PERFORM INSERT-AND-VALIDATE
     GOBACK
     .

*****************************************************************
* Handles database insertion with transaction management
*****************************************************************
 INSERT-AND-VALIDATE.
     EXEC SQL
         INSERT INTO persons (id, name, age)
         VALUES (:PERSON-ID, :PERSON-NAME, :PERSON-AGE)
     END-EXEC

     IF SQLCODE = 0
         EXEC SQL COMMIT END-EXEC                *> Commit if successful
         SET SUCCESS TO TRUE
     ELSE
         EXEC SQL ROLLBACK END-EXEC              *> Rollback if failed
         SET FAILED TO TRUE
         STRING "DB Error: " SQLCODE
             DELIMITED BY SIZE
             INTO WS-ERROR-MSG
         DISPLAY WS-ERROR-MSG
     END-IF
     .
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
