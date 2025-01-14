// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
//tests for sayHello()
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return a string "Hello, Jane!"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return a string "Hello, Alex!"', function() {
    expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return a string "Hello, Pat!"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return a string "Hello, World!"', function () {
        expect(sayHello("World")).toBe("Hello, World!")
    });
    it('should return a string "Hello, World!"', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return a string "Hello, World!"', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return a string "Hello, World!"', function () {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it('should return a string "Hello, World!"', function () {
        expect(sayHello("")).toBe("Hello, World!")
    });
    it('should return a string "Hello, World!"', function () {
        expect(sayHello(2.3)).toBe("Hello, World!")
    });
    it('should return a string "Hello, World!"', function () {
        expect(sayHello("5")).toBe("Hello, World!")
    });
});

// isFive() function
describe('isFive', function () {
    it('should a defined function', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return true when passed the number "5"', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return false when passed anything other than "5"', function () {
        expect(isFive()).toBe(false)
    });
    it('should return true when passed the string "5"', function () {
        expect(isFive("5")).toBe(true)
    });

});

//isEven() function
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return a boolean no matter the input', function () {
        expect(isEven()).toBe('boolean')
    });

});




