function AppViewModel() {

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
        session.title = item.data[0].value;

        if(item.data.length > 2)
           session.speaker = item.data[2].value;
        else 
         session.speaker = "NA"
         
        return session;
    }
}

// Activates knockout.js
var vm = new AppViewModel();
ko.applyBindings(vm);
vm.getSessions();