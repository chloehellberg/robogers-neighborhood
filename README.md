README.md

# _Mr. Roboger's Neighborhood_

#### _A web application that will take a number from a user and return a range of numbers from 0 to the user inputted number with a few fun exceptions using looping. Created 8.21.20_

#### By _**Chloe Hellberg**_

## Description: Behavior Driven Development/Spec

* Spec 1: The program returns a range of numbers from 0 to the user inputted number.
  * Input: "4"
  * Output: "0, 1, 2, 3, 4"

* Spec 2: Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
  * Input: "4"
  * Output: "0, Beep!, 2, 3, 4"

* Spec 3: Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
  * Input: "4"
  * Output: "0, 1, Boop!, 3, 4"

* Spec 4: Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
  * Input: "4"
  * Output: "0, 1, 2, Won't you be my neighbor?, 4"

* Spec 5: The program return "Beep", "Boop" and "Won't you be my neighbor?" whenever it reads the number 1,2, or 3. Combine all rules together.
  * Input: "4"
  * Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4" 

* Spec 6: The program returns "Won't you be my neighbor?" when it sees a 3 even if it reads a 1 or 2 from the input. (3 is most important)
  * Input: "13"
  * Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Boop!, Won't you be my neighbor?"

3 is most important (even if there is a 1 or 2 in the number)
2 is the second most important (even if there is a 1 in the number)
1 is least important

## Setup/Installation Requirements

* _Clone the application to your desktop_
* _Open index.html in your preferred web browser_
* _Add input to the form and receive a fun message on your screen_

_Please note: This requires a desktop and a web browser to run._

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you run into issues, please email chloe.hellberg@gmail.com with questions or concerns. Feel free to contribute to this code._

## Technologies Used

_This application utilizes HTML/CSS, Bootstrap, JavaScript and jQuery._

### License

*MIT License*

Copyright (c) 2020 **_Chloe Hellberg_**

