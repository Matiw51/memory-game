describe('tests for model', function () {
  beforeEach(function () {
    model.resetInterval();
  });
  it('should return correct interval', function () {
    // given
    var interval;

    // when
    interval = model.getInterval();

    // then
    expect(interval).toEqual(parseFloat(0.50).toFixed(2));
  });

  it('should return correct amount of items per row', function () {
    // given
    var itemsPerRow;

    // when
    itemsPerRow = model.getItemsPerRow();

    // then
    expect(itemsPerRow).toBe(6);
  });

  it('should return correct amount of rows', function () {
    // given
    var rows;

    // when
    rows = model.getRowsCount();

    // then
    expect(rows).toBe(1);
  });

  it('should return the id of last row', function () {
    // given
    var lastRow;

    // when
    lastRow = model.getLastRow();

    // then
    expect(lastRow).toBe(0);
  });


  it('should return correct amount of items', function () {
    // given
    var itemsCount;

    // when
    itemsCount = model.getItemsCount();

    // then
    expect(itemsCount).toBe(4);
  });

  it('should return last row id', function () {
    // given
    var itemsCount;

    // when
    itemsCount = model.getLastRow();

    // then
    expect(itemsCount).toBe(0);
  });

  it('should return increased interval', function () {
    // given
    var interval;

    // when
    model.increaseInterval();
    interval = model.getInterval();

    // then
    expect(interval).toBe(parseFloat(0.55).toFixed(2));
  });

  it('should return decreased interval', function () {
    // given
    var interval;

    // when
    model.decreaseInterval();
    interval = model.getInterval();

    // then
    expect(interval).toBe(parseFloat(0.45).toFixed(2));
  });

  it('should return correct highlighted items amount', function() {
    //given
    var highlightedItemsAmount;
    //when
    highlightedItemsAmount = model.countHighlightedItemsAmount();
    //then    
    //items count is equal 4 by default,
    //so there should be 1-3 items highlighted
    expect(highlightedItemsAmount).toBeGreaterThanOrEqual(1);
    expect(highlightedItemsAmount).toBeLessThanOrEqual(3);
  });

  it('should return randomized array of 1-3 elements from 0 to 3', function() {
    //given
    var highlightedItemsArray,
    length,
    highlightedItem;

    highlightedItemsArray = model.getHighlightedItemsArray();
    arrayLength=highlightedItemsArray.length;
    
    expect(arrayLength).toBeGreaterThanOrEqual(1);
    expect(arrayLength).toBeLessThanOrEqual(3);
    for(var i=0; i<length; i++){
      highlightedItem=highlightedItemsArray.pop();
      expect(highlightedItem).toBeLessThanOrEqual(3);
      expect(highlightedItem).toBeGreaterThanOrEqual(1);
    }
  });
});