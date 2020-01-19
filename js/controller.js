var controller = (function () {
  var generateElement = function () {
      if (model.getItemsCount() > 29) {
        return;
      }
      if (model.checkIfAddRow() === true) {
        view.addRow();
        model.addRow();
      }
      view.addElement(model.getLastRow());
      model.addItemsCount();
    },
    highlightElements = function () {
      view.removeOnClicks();
      setTimeout(function () {
        view.highlightElements(model.getHighlightedItemsArray(), model.getInterval());
      }, 500);
    },
    restartGame = function () {
      for (i = 0; i < model.getItemsCount(); i++) {
        item = document.getElementById(i);
        view.restartButton(item);
      }
    },
    checkIfGameWon = function () {
      if (view.checkIfGameWon() === true) {
        setTimeout(function () {
          restartGame();
          generateElement();
          highlightElements();
        }, 500);
      }
    },
    startingConfiguration = function () {
        restartGame();
        highlightElements();
    },
    increaseInterval = function () {
      model.increaseInterval();
      view.setDisplayedInterval(model.getInterval());
    },
    decreaseInterval = function () {
      if(model.getInterval()>0.06){
        model.decreaseInterval();
        view.setDisplayedInterval(model.getInterval());
      }
    };
  return {
    generateElement: generateElement,
    highlightElements: highlightElements,
    checkIfGameWon: checkIfGameWon,
    restartGame: restartGame,
    startingConfiguration: startingConfiguration,
    increaseInterval: increaseInterval,
    decreaseInterval: decreaseInterval
  };

})();