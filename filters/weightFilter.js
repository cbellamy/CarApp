carApp.filter('weightFilter', function() {
    return function(items, weight) {
        if (!weight) {
          return items;
        }

        return items.filter(function(item){
            return weight <= item.maxWeight;
        });

    };
});