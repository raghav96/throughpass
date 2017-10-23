var React = require('react');

class App extends React.Component {
   render() {
      return (

      	<body>
         <div class="container">
            <Header/>
            <Content/>
         </div>
        </body>
         );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
         	<div class="header">
         		<h1>{this.props.title}</h1>
         		<img class="logo" href="#"></img>
         		<button class="button" type="button" >Home</button>
         		<button class="button" type="button" href="https://www.github.com/raghav96/throughpass">Code</button></div>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
module.exports = App;