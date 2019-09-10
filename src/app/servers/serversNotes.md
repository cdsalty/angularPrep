
Task: React to events 
    - do something when the button is clicked.
        - created a property called "serverCreationStatus". 
            - serverCreationStates = "No Server Started";
    - at the bottom of servers.component.ts
        - create a function to be called later
            - onCreateServer() {
                // in this function, set the serverCreationStatus = "Server Has Started";
            }
    
    - Next, we need to call this method or have something trigger this method to be called
    
    * THIS IS WHERE EVENT BINDING COMES IN HANDY *****
    - we create an event listener, "click" USING PARANTHESIS ( )
        * Anytime you see (), it should signal event binding
    - add click event and set to the method onCreateServer(); 