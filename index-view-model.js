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
        return new 
        {
            title: item.data["Title"],
            speaker: item.data["Speaker"]
        }
    }
}

// Activates knockout.js
var vm = new AppViewModel();
ko.applyBindings(vm);
vm.getSessions();