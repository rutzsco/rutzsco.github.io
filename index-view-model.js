function AppViewModel() {
    this.firstName = "Bert";
    this.lastName = "Bertington";

    this.sessions = ko.observableArray([]);

    this.getData();


    this.getData = function () {
        $.getJSON("https://conferenceapi.azurewebsites.net/sessions?format=json", function(data) { 
    
            this.sessions(data.items)
        })
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());