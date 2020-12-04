import React from 'react';
import axios from 'axios';
import "./styles.css"

class App extends React.Component {
   constructor(){
      super()
      //initialization only time this.state
      this.state = {
         doggos: [],
         dogBreed: "" // initialize as blank objects in constructor
      }
   }

   handleChanges = (e) => {
      console.log(e.target.value);
      this.setState( {
         ...this.state,
         dogBreed: e.target.value
      } )
   }

   fetchDoggos = () => {
      alert(`fetching ${this.state.dogBreed}`)
      axios.get(`https://dog.ceo/api/breed/${this.state.dogBreed}/images`)
      .then( (res) => {
         this.setState( {
            ...this.state,
            doggos : res.data.message
         })
      })
      .catch( (err) => { console.log(err)})
   }

   componentDidMount() {
      axios.get("https://dog.ceo/api/breed/hound/images")
      .then( (res) => {
         console.log(res)
         this.setState({
            ...this.state,
            doggos: res.data.message
         }) 
      })
      .catch( (err) => console.log(err) )
   }

   componentDidUpdate(prevState, prevProps){
      // this runs when state or props have been updated
      // IMPORTANT-------------------------------------------------------
      // !!!!!!Always us an if statement to prevent infinite loops!!!!!!!!
      // ----------------------------------------------------------------
      // ALSO BE CAREFUL ABOUT OBJECT COMPARISONS - THEY CAN CAUSE A LOOP
      if( prevState.doggos !== this.state.doggos){
         console.log("doggos have changed")
      }
      // Example of changing state based on a condition
      if(this.state.dogBreed === "chihuahua") {
         this.setState({
            ...this.state,
            dogBreed : "mastiff"
         })
      }
   }

   render() {
      return (
         <div className="App">
            <h1>Hello webpt22</h1>
            <input 
               placeholder="dog breed"
               value={this.state.dogBreed} // read from state
               type="text"
               onChange={this.handleChanges} // write to state
            />
         <button onClick={this.fetchDoggos} >Fetch Doggos</button>
         <div>
            {this.state.doggos.map( (doggo) => {
               return <img className="doggo" src={doggo} key={doggo}/>
            })}
         </div>
         </div>
      )
   }
}

export default App;