# mySketchPad
Odin Project - Sketch Pad / Etch-a-sketch

Assignment:

1. Create a webpage with a 16 x 16 grid of squares (divs)
    - Create the divs using JS
    - (1) Put grid squares inside 'mainContainer' div
    - Several ways to make the grid vs inline.  
        - float/clear
        - inline-block
        - flexbox
        - CSS Grid
    - Be aware of borders and margins auto adjusting the squares
2. Set up a 'hover' effect so that the grid divs change color (see Extra Credit) when your mouse passes over them
    leaving a (pixelated) trail through your grid like a pen would.
    - Hint: 'Hovering' is what happens when your mouse enters a div, and ends when your mouse leaves it.
    - You can set up event listeners for either of those events as a starting point
    - There are multiple wasy to change the color of the divs, including:
        - adding a new class to the div
        - changing the div's background color using js
3. Add a button to the top of the screen that will send the user a popup asking for
    the number of squares per side for the new grid.  
    - Once they entered, the existing grid should be removed and a new grid should be 
        generated in the same total space as before (eg 960px wide) so that you've got
        a new sketchpad.
        Tip: Set the limit for the user input to a maximum of 100.  A larger number of
                squares will result in more momputer resources being used, potentially
                causing delays, freezing, or crashing.
    - Research 'button' tags in HTML and how you can make a JS function run when one is clicked
    - Also check out 'prompt's
    - You should be able to enter '64' and have a brand new 64 x 64 grid pop up
         without changing the total amount of pixels used
4. PUSH your project to GitHub

Extra Credit
-Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse
    change it to a completely random RGB value.
-Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black

