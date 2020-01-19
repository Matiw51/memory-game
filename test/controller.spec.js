describe('tests for controller', function () {

    beforeEach(function() {
        timerCallback = jasmine.createSpy('timerCallback');
        jasmine.clock().install();
      });

      afterEach(function() {
        jasmine.clock().uninstall();
      });

    it('should call addElement and addItemsCount from view', function(){
        var j=0;
        spyOn(view, 'addElement').and.callFake(function(){j=j+1;});
        spyOn(model, 'addItemsCount').and.callFake(function(){j=j+1;});
        controller.generateElement();
        expect(j).toBe(2);
    });

    it('should call highlightElements from view', function(){
        var j=0;
        spyOn(view, 'highlightElements').and.callFake(function(){j=j+1;});
        spyOn(view, 'removeOnClicks').and.callFake(function(){});
        controller.highlightElements();
        jasmine.clock().tick(600);
        expect(j).toBe(1);
    });

    it('should call restart button from view for every button', function(){
        var j=0;
        spyOn(view, 'restartButton').and.callFake(function(){j=j+1;});
        spyOn(model, 'getItemsCount').and.returnValue(4);
        controller.restartGame();
        expect(j).toBe(4);
    });


    it('should call check if game won',function(){
        var j=0;
        jasmine.clock().tick(600);
        spyOn(view, 'checkIfGameWon').and.callFake(function(){j=j+1;});
        controller.checkIfGameWon();
        expect(j).toBe(1);
    });

    it('should call restartgame and highlight elements', function(){
        var j=0;
        spyOn(model, 'getItemsCount').and.returnValue(4);
        spyOn(view, 'restartButton').and.callFake(function(){j=j+1;});
        spyOn(view, 'removeOnClicks').and.callFake(function(){});
        spyOn(view, 'highlightElements').and.callFake(function(){j=j+1;});
        controller.startingConfiguration();
        jasmine.clock().tick(600);
        expect(j).toBe(5);
    });

    it('should call increase interval', function(){
        var j=0;
        spyOn(model, 'increaseInterval').and.callFake(function(){j=j+1;});
        spyOn(view, 'setDisplayedInterval').and.callFake(function(){j=j+1;});
        controller.increaseInterval();
        expect(j).toBe(2);
    });

    it('should call decrease interval', function(){
        var j=0;
        spyOn(model, 'decreaseInterval').and.callFake(function(){j=j+1;});
        spyOn(view, 'setDisplayedInterval').and.callFake(function(){j=j+1;});
        controller.decreaseInterval();
        expect(j).toBe(2);
    });
});