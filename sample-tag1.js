riot.tag('sample1',
  '<div><h3>{ message }</h3> <ul> <li each="{ techs }">{ name }</li> </ul> <button onclick="{ click }">Click</button></div>',
  "", // css
  '', // attrs
  function (opts) {
    this.message = 'Hello, Sample 1!';
    this.techs = [
      { name: 'HTML' },
      { name: 'JavaScript' },
      { name: 'CSS' }
    ];
    this.click = function() {
        alert('click on sample1');
    };
});

