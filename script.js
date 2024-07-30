let closeAttempts = 0;

window.onbeforeunload = function(e) {
    closeAttempts++;
    
    if (closeAttempts <= 10) {
        let message = "Are you sure you want to leave? Pretty please stay!";
        
        if (closeAttempts > 1 && closeAttempts < 10) {
            message = `Attempt ${closeAttempts} to leave? Come on, stick around!`;
        } else if (closeAttempts == 10) {
            message = "Final chance! Are you absolutely sure you want to exit?";
        }
        
        e.returnValue = message;
        return message;
    }
};
