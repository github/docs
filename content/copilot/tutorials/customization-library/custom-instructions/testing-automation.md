---
title: Testing automation
intro: 'File-specific instructions for writing unit tests.'
versions:
  feature: copilot
category:
  - Custom instructions
  - Development workflows
  - Path-specific
  - Repository
  - Configure Copilot
complexity:
  - Advanced
octicon: book
topics:
  - Copilot
contentType: tutorials
---

{% data reusables.copilot.customization-examples-note %}

This example shows a path-specifc `python-tests.instructions.md` file that applies only to Python test files in your repository, using the `applyTo` field. For more information about path-specific instructions files, see [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions#using-one-or-more-instructionsmd-files).

````text copy
---
applyTo: "tests/**/*.py"
---

When writing Python tests:

## Test Structure Essentials
- Use pytest as the primary testing framework
- Follow AAA pattern: Arrange, Act, Assert
- Write descriptive test names that explain the behavior being tested
- Keep tests focused on one specific behavior

## Key Testing Practices
- Use pytest fixtures for setup and teardown
- Mock external dependencies (databases, APIs, file operations)
- Use parameterized tests for testing multiple similar scenarios
- Test edge cases and error conditions, not just happy paths

## Example Test Pattern
```python
import pytest
from unittest.mock import Mock, patch

class TestUserService:
    @pytest.fixture
    def user_service(self):
        return UserService()

    @pytest.mark.parametrize("invalid_email", ["", "invalid", "@test.com"])
    def test_should_reject_invalid_emails(self, user_service, invalid_email):
        with pytest.raises(ValueError, match="Invalid email"):
            user_service.create_user({"email": invalid_email})

    @patch('src.user_service.email_validator')
    def test_should_handle_validation_failure(self, mock_validator, user_service):
        mock_validator.validate.side_effect = ConnectionError()

        with pytest.raises(ConnectionError):
            user_service.create_user({"email": "test@example.com"})
```
````
