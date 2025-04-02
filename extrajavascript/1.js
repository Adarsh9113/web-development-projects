function AnotherAddEventListener(){
    var eventThatHappened={
        eventType:"keypress";
        key:"p";
        durationOfKeypress:2;
    }
    if(eventThatHappened.eventType===typeOfEvent){
        cancelIdleCallback(eventThatHappened);
        
    }

}
anotherEventLIstener("keypress",function(event)) {
    console.log(event);
    
}