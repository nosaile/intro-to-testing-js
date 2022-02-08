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
});
describe('sayHello', function(){
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
});
describe('sayHello("Jane")', function(){
    it('should return a string "Hello, Jane!"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
});
describe('sayHello("Alex")', function (){
    it('should return a string "Hello, Alex!"', function() {
    expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
});
describe('sayHello("Pat")', function (){
    it('should return a string "Hello, Pat!"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});



