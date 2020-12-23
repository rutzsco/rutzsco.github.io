function AppViewModel() {
    this.firstName = "Bert";
    this.lastName = "Bertington";

    var self = this;
    self.sessions = ko.observableArray([]);

    this.getSessions = function () {
        $.getJSON("https://conferenceapi.azurewebsites.net/sessions?format=json", function(data) { 
    
            var items = data.collection.items.map(ConvertToSession);
            self.sessions(items)
        })
    };

    function ConvertToSession(item) {
        var session = {};
        session.title = item.data["Title"];
        session.speaker = item.data["Speaker"];
        return session;
    }
}

// Activates knockout.js
var vm = new AppViewModel();
ko.applyBindings(vm);
vm.getSessions();