  'use strict';
 
  angular.module('fenixApp')

    .controller('ModalCtrl',  function ($scope, sweet) {

        $scope.success = function() {
          sweet.show('Amazing', 'You\'ve done it', 'success');
        };

        $scope.title = function() {
          sweet.show('It\'s title', 'Can you see me?');
        };

        $scope.fail = function() {
          sweet.show('Oops...', 'Can\'t believe it\'s you', 'error');
        };

        $scope.confirm = function() {
          sweet.show({
              title: 'Confirm',
              text: 'Delete this file?',
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#DD6B55',
              confirmButtonText: "Yes, delete it!",
              closeOnConfirm: false
            }, function() {
              sweet.show('Deleted!', 'The file has been deleted.', 'success');
          });
        };

        $scope.html = function() {
	        sweet.show({
	            title: 'HTML <small>Title</small>!',
	            text: 'A custom <span style="color:#F8BB86">html<span> message.',
	            html: true
	        });
	    };

	    $scope.custom = function() {
	    	sweet.show({
	            title: 'Alert',
	            text: 'Alert!',
	            imageUrl: 'assets/images/alert.png'
	        });
	    };
});