
Hello! This is a Pokèdex project done for the CareerFoundry webdev course.

Dependencies:
-Jquery
-Bootsrap
-PokeAPI

This project is a Pokèdex that displays Pokèmons of the first generation in a list of clickable buttons that is displayed vertically.
All the data regarding the Pokèmons is fetched by the PokeAPI.
Each button carries a Pokèmon name, from the first (Bulbasaur) to the last (Mew).
When the button is clicked, a modal is displayed with this information about the Pokèmon:

-The Pokèmon ID (It's a number that refers to the Pokèmon "position" in the Pokèdex). For example, Bulbasaur, being the first Pokèmon
will display the id #1.

-The Pokèmon name;

-The Pokèmon height;

-The Pokèmon weight;

-The Pokèmon standard image;

-The Pokèmon shiny image (only when a specific button is clicked);

To display the Pokèmon shiny image I decided to add a button to the modal that says "Show shiny version". When clicked, the Pokèmon shiny
image is displayed next to the Pokèmon standard image.