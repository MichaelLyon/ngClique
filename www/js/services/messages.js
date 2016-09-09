angular.module('App').factory('Messages', function(FURL, $log, $firebaseAuth, $firebaseArray, $firebaseObject, $ionicLoading, $ionicPopup, $translate) {

	var msg = firebase.database().ref('messages');
	var Messages = {

		getMessages: function() {
			var messages = msg
			$log.log(messages);
			return messages
		},
	};

	return Messages;
});
