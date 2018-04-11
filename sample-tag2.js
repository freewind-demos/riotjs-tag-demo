riot.tag('sample2', false, function(opts) {
  this.message = 'Sample 2';
  this.techs = [
        { name: 'HTML' },
        { name: 'JavaScript' },
        { name: 'CSS' }
      ];
  this.click = function() {
    alert('click on Sample2');
  }
})

