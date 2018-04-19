var app = angular.module("contactapp", ['ngMessages']);
app.controller("contactcontroller", function ($scope) {
    $scope.disablesubmit = false;
    $scope.disableupdate = true;
    $scope.disabledelete = false;


    $scope.contactlist = [];
    $scope.adddata = function () {

        var cont={srno: $scope.contactlist.length + 1,
        fname: $scope.fname,
        lname: $scope.lname,
        email: $scope.email,
        usrtel: $scope.usrtel,
        status: $scope.status
        };
        $scope.contactlist.push(cont);
        clearmodel();
        alert("Submitted Successfully.");
    };

    function clearmodel()
    {
        $scope.srno = 0;
        $scope.fname = "";
        $scope.lname = "";
        $scope.email = '';
        $scope.usrtel = '';
        $scope.status = '';

    }
    $scope.deletedata = function (cont) {

        var index = $scope.contactlist.indexOf(cont);
        $scope.contactlist.splice(index,1);

    };

    $scope.editdata = function (cont)
    {

        var index = $scope.contactlist.indexOf(cont);
        $scope.srno = cont.srno;
        $scope.fname = cont.fname;
        $scope.lname = cont.lname;
        $scope.email = cont.email;
        $scope.usrtel = cont.usrtel;
        $scope.status = cont.status;
        $scope.disablesubmit = true;
        $scope.disableupdate = false;
        $scope.disabledelete = true;

    };

    $scope.updatedata = function () {


        $.grep($scope.contactlist, function (e) {

            if (e.srno == $scope.srno)
            {
               // cont.srno= $scope.srno ;
                e.fname=$scope.fname;
                e.lname=$scope.lname;
                e.email=$scope.email;
                e.usrtel=$scope.usrtel;
                e.status=$scope.status;
                $scope.disablesubmit = false;
                $scope.disabledelete = false;
            }
        });


        clearmodel();
        $scope.disablesubmit = false;
        $scope.disableupdate = true;
        alert("updated successfully");
    };
});
