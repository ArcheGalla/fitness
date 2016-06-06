export default function (module) {
  module.directive('fitnessConvention', function () {
    return ({
      templateUrl: require('./convention.html'),
      controller: function ($scope) {
        $scope.presenters  = require('../presenter/presenters.json');
      }
    });
  });
}

/*
* todo: Цих треба добавити зі сторого сайту
*
 1.	 Чеханова Яна 	Украина,
 2.	Грицына Роман
 3.	Торохтий Алексей
 4.	Мошеску Оксана
 5.	Пляшечка Сергей
 6.	Сидерская Елена
 7.	Солодвникова Марина
* */