//For calculator description

✦ I've updated the JavaScript in calculator.html to be much simpler. Here’s a breakdown of the changes to help you
  understand:

   * No More Complex Logic: The appendToDisplay function is now very simple. It just adds the number or operator you click
     to a string called currentInput and shows it on the screen.
   * Clearer Variables:
       * currentInput: This holds the numbers and operators you are currently typing (e.g., "12+5").
   * Simple Functions:
       * appendToDisplay(value): Adds the button's value to the currentInput string.
       * clearDisplay(): Resets everything.
       * calculateResult(): Uses the eval() function to calculate the result of the currentInput string. I've kept eval()
         for simplicity, as it's the easiest way to get a calculator working, but I've added comments explaining what it
         does.
       * deleteLast(): Simply removes the last character you typed.

  The HTML and CSS have not changed. You can open the calculator.html file in your browser to see the result. This new
  code should be much easier to follow. Let me know if you have more questions