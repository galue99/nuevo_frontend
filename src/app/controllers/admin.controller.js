'use strict';

angular.module('fenixApp')
    .controller('AdminCtrl', function ($scope, $log, $modal, sweet, $filter) {
    	var generateData = function(){
  var arr = [];
  var letterWords = ["alpha","bravo","charlie","daniel","earl","fish","grace","henry","ian","jack","karen","mike","delta","alex","larry","bob","zelda"]
  for (var i=1;i<60;i++){
    var id = letterWords[Math.floor(Math.random()*letterWords.length)];
    arr.push({"id":id+i,"name":"name "+i,"description":"Description of item #"+i,"field3":id,"field4":"Some stuff about rec: "+i,"field5":"field"+i});
  }
  return arr;
}

var sortingOrder = 'name'; 
 // init
  $scope.sortingOrder = sortingOrder;
  $scope.pageSizes = [5,10];
  $scope.reverse = false;
  $scope.filteredItems = [];
  $scope.groupedItems = [];
  $scope.itemsPerPage = 5;
  $scope.pagedItems = [];
  $scope.currentPage = 0;
  $scope.items = generateData();

  var searchMatch = function (haystack, needle) {
    if (!needle) {
      return true;
    }
    return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
  };
  
  // init the filtered items
  $scope.search = function () {
    $scope.filteredItems = $filter('filter')($scope.items, function (item) {
      for(var attr in item) {
        if (searchMatch(item[attr], $scope.query))
          return true;
      }
      return false;
    });
    // take care of the sorting order
    if ($scope.sortingOrder !== '') {
      $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
    }
    $scope.currentPage = 0;
    // now group by pages
    $scope.groupToPages();
  };
  
  // show items per page
  $scope.perPage = function () {
    $scope.groupToPages();
  };
  
  // calculate page in place
  $scope.groupToPages = function () {
    $scope.pagedItems = [];
    
    for (var i = 0; i < $scope.filteredItems.length; i++) {
      if (i % $scope.itemsPerPage === 0) {
        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
      } else {
        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
      }
    }
  };
  
   $scope.deleteItem = function (idx) {
        var itemToDelete = $scope.pagedItems[$scope.currentPage][idx];
        var idxInItems = $scope.items.indexOf(itemToDelete);
        $scope.items.splice(idxInItems,1);
        $scope.search();
        
        return false;
    };
  
  $scope.range = function (start, end) {
    var ret = [];
    if (!end) {
      end = start;
      start = 0;
    }
    for (var i = start; i < end; i++) {
      ret.push(i);
    }
    return ret;
  };
  
  $scope.prevPage = function () {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };
  
  $scope.nextPage = function () {
    if ($scope.currentPage < $scope.pagedItems.length - 1) {
      $scope.currentPage++;
    }
  };
  
  $scope.setPage = function () {
    $scope.currentPage = this.n;
  };
  
  // functions have been describe process the data for display
  $scope.search();
 
  
  // change sorting order
  $scope.sort_by = function(newSortingOrder) {
    if ($scope.sortingOrder == newSortingOrder)
      $scope.reverse = !$scope.reverse;
    
    $scope.sortingOrder = newSortingOrder;
  };
    	$scope.confirm = function() {
          sweet.show({
              title: 'Confirm',
              text: 'Delete this User?',
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#DD6B55',
              confirmButtonText: "Yes, delete it!",
              closeOnConfirm: false
            }, function() {
              sweet.show('Deleted!', 'The file has been deleted.', 'success');
          });
        };

        $scope.animationsEnabled = true;

        $scope.addUser = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'adminModalContent.html',
                controller: 'ModalAdminCtrl',
                size: size
               /* resolve: {
                    items: function () {
                        return $scope.items;
                }
            }*/
        });

	    modalInstance.result.then(function (selectedItem) {
	        $scope.selected = selectedItem;
	    }, function () {
	        $log.info('Modal dismissed at: ' + new Date());
	        });
	    };

	    $scope.editUser = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'editModalContent.html',
                controller: 'ModalAdminCtrl',
                size: size
               /* resolve: {
                    items: function () {
                        return $scope.items;
                }
            }*/
        });

	    modalInstance.result.then(function (selectedItem) {
	        $scope.selected = selectedItem;
	    }, function () {
	        $log.info('Modal dismissed at: ' + new Date());
	        });
	    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    angular.forEach($scope.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
    });
  })

.controller('ModalAdminCtrl', function ($scope, $modalInstance, $log) {


    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});