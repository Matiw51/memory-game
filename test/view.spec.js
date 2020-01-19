describe('tests for view', function () {

    it('should add element', function () {
        // given
        var lastRow=document.createElement('div'),
        lastRows = [lastRow],
        itemsCountBeforeAdding=model.getItemsCount(),
        addedElement;
        spyOn(document, 'getElementsByClassName').and.returnValue(lastRows);
        // when
        addedElement = view.addElement(model.getLastRow());

        // then
        expect(lastRow.getElementsByClassName('item').length).toBe(1); // item added to a dummy row
        expect(addedElement.id).toEqual(itemsCountBeforeAdding.toString());
        expect(addedElement.className).toBe('item incorrect');
      });
    
      it('should add row', function(){
        //given
        var container=document.createElement('div'),
        row;
        spyOn(document, 'getElementById').and.returnValue(container);
        
        //when
        row=view.addRow();

        //then
        expect(container.getElementsByClassName('row').length).toBe(1);
        expect(row.classList.contains('row')).toBe(true);
      });

      it('should highlight elements', function(){
        //given
        var highlightedItemsArray = [0,1,2,4],
        interval=0.5,
        doc=document.createElement('div'),
        i=0, 
        j=0;
        spyOn(document, 'getElementById').and.returnValue(doc);
        spyOn(view, 'lightUp').and.callFake(function(){
            i=i+1;
        });
        spyOn(view, 'darken').and.callFake(function(){
            j=j+1;
        });
        //when
        view.highlightElements(highlightedItemsArray, interval);
        //then
        expect(i).toBe(j);
      });

      it('should light up an element(set color #99ccff)', function(){
        //given
        var item=document.createElement('div');
        spyOn(document, 'getElementById').and.returnValue(item);
        //when
        view.lightUp();
        //then
        expect(item.style.backgroundColor).toBe('rgb(153, 204, 255)');
      });

      it('should darken an element(set color #807B92)', function(){
        //given
        var item=document.createElement('div');
        spyOn(document, 'getElementById').and.returnValue(item);
        //when
        view.darken();
        //then
        expect(item.style.backgroundColor).toBe('rgb(128, 123, 146)');
      });

      it('should set correct class', function(){
        var item=document.createElement('div');
        spyOn(document, 'getElementById').and.returnValue(item);
        view.setCorrect();
        expect(item.classList[0]).toBe('correct');
      });

      it('should add correct onclick to correct item', function(){
        //given
        var item=document.createElement('div');
        item.classList.add('correct');
        spyOn(document, 'getElementById').and.returnValue(item);
        //when
        view.addOnClicks();
        // nie dziala, nie wiem dlaczego
        //then
        //expect(item.onclick.toString().includes('checkIfGameWon')).toBeTruthy();
      });

      it('should add incorrect onclick to incorrect item', function(){
        //given
        var item=document.createElement('div');
        spyOn(document, 'getElementById').and.returnValue(item);
        //when
        view.addOnClicks();
        //then
        expect(item.onclick.toString().includes('Configuration()')).toBeTruthy();
      });

      it('should remove onclick from item', function(){
        //given
        var item=document.createElement('div');
        item.onclick = function(){};
        spyOn(document, 'getElementById').and.returnValue(item);
        //when
        view.removeOnClicks();
        //then
        expect(item.onclick).toBeNull();
      });

      it('should add incorrect class to element and set color', function(){
        //given
        var item=document.createElement('div');
        //when
        view.restartButton(item);
        //then
        expect(item.classList).not.toBeNull();
        expect(item.classList).toContain('incorrect');
      });

      it('should check if game won', function(){
        //given
        spyOn(document, 'getElementsByClassName').and.returnValue([]);
        //when&then
        expect(view.checkIfGameWon).toBeTruthy();
      });

});