var arrayCheck = function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
};

QUnit.test( "arrayCheck test", function( assert ) {
    assert.ok( arrayCheck([1, 2, 3]) === true, "Passed!" );
    assert.ok( arrayCheck([1, 11, 2]) === false, "Passed!" );
  });