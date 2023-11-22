import React from "react";

class App extends React.Component {
  name = ""
  constructor() {
    super()
    this.name = "Alireza"
    this.a = 5
    this.b = 6
  }
  render = () => {
    return (
      <>
        <h1>This is a Test</h1>
        <p>{this.name}</p>
        <p>{this.a + this.b}</p>
      </>
    )
  }
}
export default App