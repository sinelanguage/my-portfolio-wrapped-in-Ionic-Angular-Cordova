angular.module('starter.controllers', [])

.controller('IntroCtrl', function($scope, Aw) {

        $scope.me = Aw.allMe();

})

.controller('AboutCtrl', function($scope, Aw, Chats) {

        $scope.chats = Chats.all();

        $scope.remove = function(chat) {

                Chats.remove(chat);

        };

        $scope.meToo = Aw.allMe();

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

        $scope.chat = Chats.get($stateParams.chatId);

})

.controller('SkillsCtrl', function($scope, Aw) {

        $scope.skills = Aw.allSkills();

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {

        $scope.friend = Friends.get($stateParams.friendId);
        
})

.controller('WorkCtrl', function($scope, Aw) {

        $scope.work = Aw.allWork();

});