class SampleTag3 extends riot.Tag {
  // mandatory in order to use and identify this component
  get name() {
    return 'sample3'
  }
  get tmpl() {
    return `<div><h1>Sample3</h1><p onclick="{ click }">Dear user, { message }</p></div>`
  }
  get attrs() {
    return 'class="{ className }"'
  }
  get css() {
    return 'sample3 p{ color: blue; }'
  }
  onCreate(opts) {
    console.log("### opts: " + opts.message)
    this.message = opts.message
  }
  click() {
    this.message = 'goodbye'
  }
}

