var view = (function () {
  var addElement = function (lastRow) {
      var item = document.createElement('DIV');
      lastRow = document.getElementsByClassName('row')[lastRow];
      item.className = 'item incorrect';
      item.id = model.getItemsCount();
      item.onclick = (function () {
        this.style.backgroundColor = '#EE4266';
        removeOnClicks();
        setTimeout(function () {
          controller.restartGame();
          controller.highlightElements();
        }, 500);
      });
      lastRow.appendChild(item);
      return item;
    },
    addRow = function () {
      var row = document.createElement('DIV'),
        container = document.getElementById('container');
      row.className = 'row';
      container.appendChild(row);
      return row;
    },
    highlightElements = function (highlightedItemsArray, interval) {
      var highlightedItemsArrayLength = highlightedItemsArray.length,
        highlightedItemsArrayCopy = highlightedItemsArray.slice();
      document.getElementById('tiles-left').innerHTML = highlightedItemsArrayLength;
      for (i = 0; i < highlightedItemsArrayLength; i++) {
          id=highlightedItemsArray.pop();
          lightUp(id);
          setCorrect(id);
      }
      setTimeout(function () {
        for (i = 0; i < highlightedItemsArrayLength; i++) {
          id = highlightedItemsArrayCopy.pop();
          darken(id);
        }
        addOnClicks();
      }, interval * 1000);
    },
    setCorrect = function(id){
      highlightedElement = document.getElementById(id);
      highlightedElement.classList.add('correct');
      highlightedElement.classList.remove('incorrect');
      return highlightedElement;
    },
    lightUp = function(id){
      highlightedElement = document.getElementById(id);
      highlightedElement.style.backgroundColor = '#99ccff';
    },
    darken = function(id){
      highlightedElement = document.getElementById(id);
      highlightedElement.style.backgroundColor = '#807B92';
    },
    addOnClicks = function () {
      for (i = 0; i < model.getItemsCount(); i++) {
        item = document.getElementById(i);
        if (item.classList.contains('correct')) {
          item.onclick = (function () {
            if (!this.classList.contains('clicked')) {
              model.addNumerator();
              document.getElementById('percentage').innerHTML = parseFloat(model.countPercentage()).toFixed(2);
              document.getElementById('tiles-left').innerHTML--;
            }
            this.classList.add('clicked');
            this.style.backgroundColor = '#99ccff';
            controller.checkIfGameWon();
          });
        } else {
          item.onclick = (function () {
              removeOnClicks();
              this.style.backgroundColor = '#EE4266';
              model.addDenominator();
              document.getElementById('percentage').innerHTML = parseFloat(model.countPercentage()).toFixed(2);
              setTimeout(function () {
              controller.startingConfiguration();
            }, 500);
          });
        }
      }
      document.getElementById('add').onclick = function () {
        (controller.generateElement());
      };
      document.getElementById('highlight').onclick = function () {
        (controller.startingConfiguration());
      };
    },
    removeOnClicks = function () {
      for (i = 0; i < model.getItemsCount(); i++) {
        item = document.getElementById(i);
        item.onclick = false;
      }
      document.getElementById('add').onclick = false;
      document.getElementById('highlight').onclick = false;
    },
    restartButton = function (item) {
      item.classList.add('incorrect');
      item.classList.remove('correct');
      item.classList.remove('clicked');
      item.style.backgroundColor = '#807B92';
    },
    checkIfGameWon = function () {
      if (document.getElementsByClassName('correct').length ==
        document.getElementsByClassName('clicked').length) {

        removeOnClicks();
        return true;
      }
      return false;
    },
    setDisplayedInterval = function (interval) {
      document.getElementById('interval').innerHTML = interval;
    };
  return {
    addElement: addElement,
    highlightElements: highlightElements,
    addRow: addRow,
    checkIfGameWon: checkIfGameWon,
    restartButton: restartButton,
    setDisplayedInterval: setDisplayedInterval,
    removeOnClicks: removeOnClicks,
    lightUp: lightUp,
    darken: darken,
    setCorrect:setCorrect,
    addOnClicks:addOnClicks
    //musialem pododawac prywatne pola zeby mozna bylo przetestowac wszystko :/
  };
})();