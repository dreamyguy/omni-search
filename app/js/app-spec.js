'use strict';

describe("Say hello dammit!", function() {

    it("it says hello!", function() {
        expect(hw()).toEqual('Hello World');
    });

    it("it contains world!", function() {
        expect(hw()).toContain('World');
    });

    it("the hello world thing is true!", function() {
        expect(hw()).toBeTruthy();
    });

});
