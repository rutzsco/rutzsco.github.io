function AppViewModel() {
    this.firstName = "Bert";
    this.lastName = "Bertington";

    this.sessions = ko.observableArray([]);

    this.getData();
}
this.getData = function () {

    $.getJSON("https://conferenceapi.azurewebsites.net/?format=json", function(data) { 

    })
};
// Activates knockout.js
ko.applyBindings(new AppViewModel());