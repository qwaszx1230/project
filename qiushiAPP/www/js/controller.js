app.controller('QiushiController', function($scope, $ionicPopover, $ionicPopup, $timeout, $http) {

  //   $http.jsonp('http://japi.juhe.cn/funny/type.from?callback=JSON_CALLBACK&key=d06a77593087d2f13214238586ce6af2')
  // .success(function(data){
  //     console.log(data.result)
  // })
  // $http.jsonp('http://v.juhe.cn/cba/teamList.php?callback=JSON_CALLBACK&key=5dc134cc8218c34bb6341edc0e522c22')
  // .success(function(data){
  //     console.log(data)
  // })
    $scope.message = [{
            img: 'http://pic.qiushibaike.com/system/avtnew/3268/32685225/medium/2016100900015886.JPEG',
            name: '花朵朵~',
            content: '我喝醉酒，从来不闹事，就是大睡！昨晚，我在酒馆里喝酒喝高了，趁着神智还清醒，我给了出租车司机50块车钱，没说清地址就睡着了。结果，等我醒来时天都亮了！出租车司机要下班回家，把我卸在了路边的草坪上！！！……',
            statsVote: '1468',
            commentsCount: '52'
        }, {
            img: 'http://pic.qiushibaike.com/system/avtnew/2764/27649282/medium/2016120519161226.JPEG',
            name: '南宫八妹~贰姑娘',
            content: '楼下新开一家砂锅店，去尝尝鲜。<br>味道相当好，就是吃不饱。剩下一锅汤叫老板打包。老板不解的问，这汤打包干啥？我说带回家喂狗！回家后我就买了包方便面泡里面了，还别说，味道真棒！！！',
            statsVote: '1512',
            commentsCount: '48'
        }, {
            img: 'http://pic.qiushibaike.com/system/avtnew/2470/24703920/medium/2016100119561935.JPEG',
            name: '醉酒舞剑砍疯子※',
            content: '路上看见一粑粑牵着两岁小正太，边走边看手机，小正太喊：粑粑pp要出来了!他粑粑立马摸向屁股，松了口气。<br>继续往前面走，小正太又叫：粑粑pp要出来了！<br>粑粑怒了，一巴掌呼过去：吓唬老子。<br>小正太哭了，我的小pp真的快出来了！<br>粑粑才知道是儿子裤子垮下来了。。。。<br>旁边的我憋的内伤……',
            statsVote: '1604',
            commentsCount: '56'
        }, {
            img: 'http://pic.qiushibaike.com/system/avtnew/2874/28746660/medium/2016120608114476.JPEG',
            name: '乐天、古',
            content: '今天碰到儿子小学班主任了，他跟我说你儿子很厉害，将来必定大有作为。我不太明白。班主任解释说，今天上课，我让他用 “如果” 造句———<br>他回答：如果我有一双隐形的翅膀，我将飞向办公室，把期末考试答案偷出来卖给同学。。。',
            statsVote: '1685',
            commentsCount: '17'
        }, {
            img: 'http://pic.qiushibaike.com/system/avtnew/3095/30952073/medium/2016120720075625.JPEG',
            name: '微微一笑肾很疼、',
            content: '去兰州看外甥时，他没时间接我，一糗友去接的机，问我想吃什么，我说来这了，当然去吃兰州拉面，他说什么也不同意，非要去吃烤全羊。<br>我说他太客气了，吃面就可以了，他沉思半晌说：我不想你走了之后，在写个段子埋汰我，说我小气！！',
            statsVote: '1696',
            commentsCount: '85'
        },

    ]
    $scope.showPopup = function() {
        $scope.data = {}
            // 自定义弹窗
        var myPopup = $ionicPopup.show({
            templateUrl: "views/popup.html",
            scope: $scope,

        });

        $scope.closePop= function(){
            myPopup.close();
        }
        myPopup.then(function(res) {
            // console.log('Tapped!', res);
        });
        $timeout(function() {
            myPopup.close(); // 3秒后关闭弹窗
        }, 5000);
    };
    //获取下拉框
    $ionicPopover.fromTemplateUrl("popover", {
            scope: $scope
        })
        .then(function(popover) {
            $scope.popover = popover;
        })
        // 打开弹窗
    $scope.openPopover = function($event) {
            // 找到对应的位置显示
            $scope.popover.show($event);
        }
        // 关闭弹窗
    $scope.closePopover = function() {
            // 找到对应的位置显示
            $scope.popover.hide();
        }
        // 监听到被销毁时，删除
    $scope.$on("$destroy", function() {
        $scope.popover.remove();
    })


})
app.controller('FriendsController', function($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
})
app.controller('AddController', function($scope, $ionicHistory, $ionicPopup, $timeout) {
    $scope.goback = function() {
        $ionicHistory.goBack(-1);
    }
    $scope.selectOpen = function() {
        $scope.data = {}

        // 自定义弹窗
        var myPopup = $ionicPopup.show({
            // template: '<input type="password" ng-model="data.wifi">',
            template: '<div ng-model="data" class="selPopBox"><p ng-model="data.select">所有人可见</p><p ng-model="data.select">尽自己可见</p></div>',
            scope: $scope,
        });
        console.log($scope.data)
        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
        $timeout(function() {
            myPopup.close(); // 3秒后关闭弹窗
        }, 3000);
    };
})
