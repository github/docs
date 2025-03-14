---
title: Handling cross-cutting concerns
shortTitle: Cross-cutting concerns
intro: '{% data variables.product.prodname_copilot_chat_short %} can help you avoid code that relates to a concern other than the core concern of the method or function in which the code is located.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/refactoring-code/handling-cross-cutting-concerns
versions:
  feature: copilot
category:
  - 'Refactoring code'
complexity:
  - Intermediate
octicon: rocket
topics:
  - Copilot
---

Cross-cutting concerns are aspects of a program that affect multiple parts of the system, such as logging, security, data validation, and error handling. They can become scattered throughout a codebase, leading to code duplication and maintenance challenges.

{% data variables.product.prodname_copilot_chat_short %} can help refactor cross-cutting concerns by suggesting the implementation of Aspect-Oriented Programming (AOP) practices or using decorators and middleware patterns to centralize these concerns in a modular, maintainable way.

## Example scenario

Imagine you have a Python project that contains multiple service files in which logging occurs. The information that gets logged is defined within each of the individual service files. If the application is modified or extended in future, this design could lead to inconsistency in the content and style of log entries. You can consolidate and centralize the logging behavior to avoid this being distributed across your project.

Here are three files from our example project: the entry point file (`main.py`), the log message configuration file (`logging_config.py`), and one of the service files (`order_service.py`). The example service file shows how log information is defined alongside the business logic for a particular part of the application.

### main.py

```python
import logging
from logging_config import setup_logging
from payment_service import PaymentService
from order_service import OrderService
from shipping_service import ShippingService
from inventory_service import InventoryService
from notification_service import NotificationService

def main():
    setup_logging()
    payment_service = PaymentService()
    order_service = OrderService()
    shipping_service = ShippingService()
    inventory_service = InventoryService()
    notification_service = NotificationService()

    # Example usage
    payment_service.process_payment({"amount": 100, "currency": "USD"})
    order_service.place_order({"item": "Book", "quantity": 1})
    shipping_service.ship_order({"item": "Book", "quantity": 1})
    inventory_service.update_inventory("Book", -1)
    notification_service.send_notification("Order has been placed and shipped.")

if __name__ == "__main__":
    main()
```

### logging_config.py

```python
import logging

def setup_logging():
    logging.basicConfig(level=logging.INFO,
                  format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
```

### order_service.py

```python
import logging

class OrderService:
    def __init__(self):
        self.logger = logging.getLogger(__name__)

    def place_order(self, order):
        self.logger.info("Entering place_order method.")
        try:
            # In here would be the business logic for placing an order
            # ...
            self.logger.info("Order placed successfully.")
        except Exception as e:
            self.logger.error(f"Error in place_order method: {e}")
            raise
        finally:
            self.logger.info("Exiting place_order method.")
```

## Example prompt

Open the project workspace in {% data variables.product.prodname_vscode_shortname %} or {% data variables.product.prodname_vs %} and enter the following prompt in the {% data variables.product.prodname_copilot_chat_short %} view.

`@workspace Refactor this project by using AOP to avoid logging that has cross-cutting concerns`

> [!NOTE]
> The `@workspace` chat participant in {% data variables.product.prodname_vscode_shortname %} and {% data variables.product.prodname_vs %} provides {% data variables.product.prodname_copilot_short %} with context about all of the code in your workspace. You can use `@workspace` when you want {% data variables.product.prodname_copilot_short %} to consider the structure of your project and how different parts of your code interact. If you're using a JetBrains IDE, use `@project` rather than `@workspace`.

## Example response

{% data variables.product.prodname_copilot_short %} responds as follows.

{% data reusables.copilot.example-prompts.response-is-an-example %}

> To refactor this project using Aspect-Oriented Programming (AOP) to handle logging as a cross-cutting concern, you can use a library like `aspectlib`. Here is how you can do it:
>
> 1. Install `aspectlib`:
>
>    `pip install aspectlib`
>
> 1. Create an aspect for logging in a new file called `logging_aspect.py`:
>
>    ```python
>    import aspectlib
>    import logging
>
>    @aspectlib.Aspect(bind=True)
>    def log_method_call(cutpoint, *args, **kwargs):
>        logger = logging.getLogger()
>        method_name = cutpoint.__name__
>        logger.info(f"Entering method: {method_name}")
>        try:
>            result = yield aspectlib.Proceed
>            logger.info(f"Method {method_name} executed successfully.")
>            return result
>        except Exception as e:
>            logger.error(f"Error in method {method_name}: {e}")
>            raise
>        finally:
>            logger.info(f"Exiting method: {method_name}")
>    ```
>
> 1. Apply the aspect to the service methods in `main.py`:
>
>    ```python
>    import logging
>    from logging_config import setup_logging
>    from payment_service import PaymentService
>    from order_service import OrderService
>    from shipping_service import ShippingService
>    from inventory_service import InventoryService
>    from notification_service import NotificationService
>    from logging_aspect import log_method_call
>    import aspectlib
>
>    def main():
>        setup_logging()
>
>        # Apply logging aspect to service methods
>        aspectlib.weave(PaymentService.process_payment, log_method_call)
>        aspectlib.weave(OrderService.place_order, log_method_call)
>        aspectlib.weave(ShippingService.ship_order, log_method_call)
>        aspectlib.weave(InventoryService.update_inventory, log_method_call)
>        aspectlib.weave(NotificationService.send_notification, log_method_call)
>
>        payment_service = PaymentService()
>        order_service = OrderService()
>        shipping_service = ShippingService()
>        inventory_service = InventoryService()
>        notification_service = NotificationService()
>
>        # Example usage
>        payment_service.process_payment({"amount": 100, "currency": "USD"})
>        order_service.place_order({"item": "Book", "quantity": 1})
>        shipping_service.ship_order({"item": "Book", "quantity": 1})
>        inventory_service.update_inventory("Book", -1)
>        notification_service.send_notification("Order has been placed and shipped.")
>
>    if __name__ == "__main__":
>        main()
>    ```

{% data variables.product.prodname_copilot_short %} then tells you to remove the logging code from all of the service classes, and gives you the code for the revised files. For example, this is the revised version of `order_service.py`:

```python
class OrderService:
    def place_order(self, order):
        # In here would be the business logic for placing an order
        # ...
        pass
```

In the refactored version of the project, the same logging operations are performed, but the logging code is centralized in a single file.

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
