function AppViewModel() {
    this.firstName = "Bert";
    this.lastName = "Bertington";

    this.sessions = ko.observableArray([]);

    this.getSessions = function () {
        $.getJSON("https://conferenceapi.azurewebsites.net/sessions?format=json", function(data) { 
    
            this.sessions(data.items)
        })
    };
}

// Activates knockout.js
var vm = new AppViewModel();
ko.applyBindings(vm);
vm.getSessions();