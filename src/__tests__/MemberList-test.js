describe('MemberList', () => {
  var MemberList;
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  beforeEach(() => {
    MemberList = require('../components/MemberList.jsx')
  });

  it('can add a new member', () => {
    var c = TestUtils.renderIntoDocument(<MemberList />);
    var input = React.findDOMNode(c.refs.input);
    var submit = React.findDOMNode(c.refs.submit);

    // var spyOn = function(obj, method) {
    //   var originalObj = obj;
    //   function spy() {
    //     spy.called = true;
    //     return originalObj[method].call(null, arguments);
    //   };

    //   spy.called = false;

    //   obj[method] = spy;
    // };

    // expect(c.addMember).not.toHaveBeenCalled();
    spyOn(c, 'addMember');

    expect(React.findDOMNode(c).textContent).toBe('');

    TestUtils.Simulate.change(input, { target: { value: 'baz' } });
    TestUtils.Simulate.click(submit);
    jasmine.clock().tick(1);

    console.log(c.addMember.called);

    // expect(c.addMember).toHaveBeenCalled();
    expect(React.findDOMNode(c).textContent).toBe('baz');
    expect(input.value).toBe('');
  });
});
