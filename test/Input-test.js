var _ = require('lodash');
var renderedInput;

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Input = require('../components/Input.js');

describe('Input', function() {

  it('has the input type of text by default', function() {
    renderedInput = TestUtils.renderIntoDocument(<Input />);
    var findTag = TestUtils.findRenderedDOMComponentWithTag(renderedInput, 'input');
    var inputType = findTag.props.type;
    expect(inputType).to.be.equal('text');
  });

  it('has a default value', function() {
    renderedInput = TestUtils.renderIntoDocument(<Input defaultValue='John' />);
    expect(renderedInput.props.defaultValue).to.be.equal('John');
  });

  it('has a type of phone', function() {
    renderedInput = TestUtils.renderIntoDocument(<Input type='phone' />);
    var findTag = TestUtils.findRenderedDOMComponentWithTag(renderedInput, 'input');
    var inputType = findTag.props.type;
    expect(inputType).to.be.equal('phone');
  });

  it('has a name of emailAddress', function() {
    renderedInput = TestUtils.renderIntoDocument(<Input name='emailAddress' />);
    var findTag = TestUtils.findRenderedDOMComponentWithTag(renderedInput, 'input');
    var inputName = findTag.props.name;
    expect(inputName).to.be.equal('emailAddress');
  });

  // it('is an icon input if iconClass given', function() {
  //   renderedInput = TestUtils.renderIntoDocument(<Input iconClass='linkedin' />);
  //   var findClass = TestUtils.findRenderedDOMComponentWithClass(renderedInput, 'icon');
  //   var inputComponentChildren = findClass.props.children;
  //   var iconElement = _.find(inputComponentChildren, 'type', 'i');
  //   expect(findClass).to.be.equal(true);
  //   expect(iconElement.type).toEqual('i');
  // });

  it('shows a popup on focus if data-content is given', function() {
    renderedInput = TestUtils.renderIntoDocument(<Input dataContent='Sample Popup' />);
    spyOn(renderedInput.elm, 'popup');

    var popoverInput = TestUtils.findRenderedDOMComponentWithTag(renderedInput, 'input');
    // TestUtils.Simulate.keyDown(popoverInput, {key: "4"});
    TestUtils.Simulate.click(popoverInput);

    //////////////////////////////////////////////////////////
      var expectAsync = function(condition, cb) {
        setTimeout(function() {
          cb(expect(condition));
        }, 0);
      };
    //////////////////////////////////////////////////////////


    // waitsForAndRuns(function() {
    //   return _.get(renderedInput, 'elm.popup');
    // }, function() {
    //   expect(renderedInput.elm.popup).toHaveBeenCalled();
    // });
    expect(renderedInput.elm.popup).not.toHaveBeenCalled();
    jasmine.clock().tick(5000);
    console.log('done ticking.');
    expect(renderedInput.elm.popup).toHaveBeenCalled();
    // expectAsync(renderedInput.elm.popup, function(result){
    //     result.toHaveBeenCalled();
    // });
  });
});
