---
title: Refactoring data access layers
shortTitle: Data access layers
intro: '{% data variables.product.prodname_copilot_chat_short %} can suggest ways to decouple your data access code from your business logic, making an application easier to maintain and scale.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/refactoring-code/refactoring-data-access-layers
versions:
  feature: copilot
category:
  - 'Refactoring code'
complexity:
  - Advanced
octicon: rocket
topics:
  - Copilot
---

Hardcoded SQL queries and tightly coupled data access code can make it difficult to scale or switch databases, and they often lead to repeated logic.

{% data variables.product.prodname_copilot_chat_short %} can recommend implementing a repository pattern or data access layer that abstracts database interactions, making the code more modular and reducing redundancy. It can also help refactor SQL queries into optimized versions, improving performance and maintainability.

> [!NOTE] The responses described in this article are examples. {% data variables.product.prodname_copilot_chat_short %} responses are non-deterministic, so you may get different responses from the ones shown here.

## Example scenario

This Python code connects to a SQLite database, retrieves a user record, and returns the user data. However, it fails to abstract the database connection logic and uses a hardcoded query that's vulnerable to SQL injection.

```python
import sqlite3

def get_user_by_id(user_id):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute(f"SELECT display_name FROM users WHERE id = {user_id}")
    user = cursor.fetchone()
    conn.close()
    return user
```

## Example prompt 1

You can start by asking {% data variables.product.prodname_copilot_short %} a general question about how to improve the code.

`How can I improve this code to make it safe and easier to update and expand? List possible improvements but don't show revised code.`

## Example response 1

{% data variables.product.prodname_copilot_short %} makes several suggestions for improving the code:

* Abstract the database connection details.
* Use parameterized queries to prevent SQL injection.
* Use a context manager to ensure that the database connection is properly closed if an error occurs.
* Add error handling.

## Example prompt 2

You can use the response to your first prompt to write a more specific prompt.

`Rewrite this code to make it more scalable and easier to maintain. Use a context manager. Avoid hardcoded SQL queries and tightly coupled data access code. Instead, use a repository pattern to abstract database interactions and make the code more modular and reusable. Where possible optimize the code to improve performance. Include error trapping, and make sure the code is not vulnerable to SQL injection.`

## Example response 2

{% data variables.product.prodname_copilot_short %} suggests splitting the code into separate files, each with a specific purpose. It also provides example code for returning a user's details.

The suggested changes implement a repository pattern and use parameterized queries to avoid SQL injection.

```python
# database.py
import sqlite3

class Database:
    def __init__(self, db_path):
        self.db_path = db_path

    def __enter__(self):
        self.conn = sqlite3.connect(self.db_path)
        self.cursor = self.conn.cursor()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type or exc_val or exc_tb:
            self.conn.rollback()
        else:
            self.conn.commit()
        self.conn.close()

# user_repository.py
class UserRepository:
    def __init__(self, db):
        self.db = db

    def get_user_by_id(self, user_id):
        try:
            self.db.cursor.execute("SELECT display_name FROM users WHERE id = ?", (user_id,))
            user = self.db.cursor.fetchone()
            return user
        except sqlite3.Error as e:
            print(f"An error occurred: {e}")
            return None

# main.py
from database import Database
from user_repository import UserRepository

def get_user_by_id(user_id):
    with Database('database.db') as db:
        user_repo = UserRepository(db)
        return user_repo.get_user_by_id(user_id)

# Example usage
if __name__ == "__main__":
    user = get_user_by_id(1)
    if user:
        print(user)
    else:
        print("User not found or an error occurred.")
```

The revised code improves on the original in several ways:

* The code now implements a basic data access layer.
* The `Database` class handles the connection to the SQLite database, implementing the context manager protocol with the `__enter__` and `__exit__` methods. This ensures that the database connection is properly managed, including committing transactions and closing the connection.
* The `UserRepository` class encapsulates the logic for accessing user data.
* Values for the queries are parameterized to prevent SQL injection.
* Errors are caught, with details printed to the console.

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
