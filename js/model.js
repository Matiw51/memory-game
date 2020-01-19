var model = (function () {
    var interval = 0.5,
        itemsPerRow = 6,
        itemsCount = 4,
        rowsAmount = 1,
        percentageNumerator=0,
        percentageDenominator=0;

        resetInterval= function(){// needed for tests to pass
            interval = 0.5;
        },
        countHighlightedItemsAmount = function () {
            return Math.ceil(itemsCount / 2) + (Math.floor(Math.random() * 3 - 1));
        },
        getRowsCount = function () {
            return rowsAmount;
        },
        getLastRow = function () {
            return rowsAmount-1;
        },
        getItemsPerRow = function () {
            return itemsPerRow;
        },
        getItemsCount = function () {
            return itemsCount;
        },
        getInterval = function(){
            return parseFloat(interval).toFixed(2);
        },
        checkIfAddRow = function () {
            return (itemsCount % itemsPerRow == 0);
        },
        addRow = function(){
            return rowsAmount++;
        },
        addItemsCount= function(){
            return itemsCount++;
        },
        increaseInterval = function () {
            interval = interval + 0.05;
        },
        decreaseInterval = function () {
            interval = interval - 0.05;
        },
        countPercentage=function(){
            if(percentageDenominator+percentageNumerator==0){
                return 0;
            }
            return percentageNumerator*100/(percentageDenominator+percentageNumerator);
        },
        addNumerator = function(){
            percentageNumerator=percentageNumerator+1;
        },
        addDenominator=function(){
            percentageDenominator=percentageDenominator+1;
        },
        getHighlightedItemsArray = function () {
            var highlightedItemsArray = [],
                itemsArray = [],
                iCount = itemsCount,
                highlightedItemsAmount = countHighlightedItemsAmount(),
                j = 0;
            for (var i = 0; i < itemsCount; i++) {
                itemsArray.push(i);
            }
            i = iCount;
            while (i > iCount - highlightedItemsAmount) {
                j = Math.floor(Math.random() * (i));
                highlightedItemsArray.push(itemsArray[j]);
                itemsArray.splice(j, 1);
                i--;
            }
            return highlightedItemsArray;
        };
    return {
        getItemsPerRow: getItemsPerRow,
        checkIfAddRow: checkIfAddRow,
        addRow: addRow,
        addItemsCount: addItemsCount,
        countHighlightedItemsAmount: countHighlightedItemsAmount,
        getItemsCount: getItemsCount,
        getRowsCount: getRowsCount,
        getLastRow: getLastRow,
        getInterval: getInterval,
        getHighlightedItemsArray: getHighlightedItemsArray,
        increaseInterval:increaseInterval,
        decreaseInterval:decreaseInterval,
        addNumerator:addNumerator,
        addDenominator:addDenominator,
        countPercentage:countPercentage,
        resetInterval:resetInterval // needed for tests to pass
    };
})();