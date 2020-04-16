import React, { Component } from 'react'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            gender:"",
            age:0,
            characterArray:[]
             
        }
    }
    //Lifecycle method that loads before the rest of the app
    componentDidMount(){
        this.loadData()


    }
    //Loading database with previous entries
    loadData = async()=>{
        let response =await fetch('/api');
        console.log(response);
        let json = await response.json()
        console.log(json);
        this.setState({characterArray:json})
    }

    //Onchange fucntion for when a value is typed in the input box
    handleChange = (event)=>{
        if (event.target.name ==="name"){
            this.setState({name:event.target.value})
        }
        if(event.target.name ==="gender"){
            this.setState({gender:event.target.value})
        }
        if(event.target.name ==="age"){
            this.setState({age:event.target.value})
        }
    }
    //When submit button is pressed it creates a new instance
    handleSubmission=async (event)=>{
        let response = await fetch('/api',{
            method:"POST",
            headers:{'Accept':'application/json',
          'Content-Type':'application/json'},
          body: JSON.stringify({
              name:this.state.name,
              gender:this.state.gender,
              age:this.state.age
          })
        })
        event.preventDefault();
        // window.location('/')
        console.log(this.state);
        this.state.characterArray.push(this.state);
        this.setState({characterArray:this.state.characterArray})
  
        this.setState({name:"",
        gender:"",
      age:0})
  
    }


    render() {
        return (
            <div>
                <div>
                    <h1>New Character Creation</h1>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <div>
                            <input type="text" placeholder ="Name" value = {this.state.name} name="name" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Gender </label>
                            <div>
                            <input type="text" name="gender" value = {this.state.gender} placeholder="Gender" onChange={this.handleChange} id=""/>
                            </div>
                        </div>

                        <div className = "form-group">
                            <label htmlFor="">Age</label>
                            <div>
                            <input type="number" name="age" id="" value={this.state.age} onChange={this.handleChange} placeholder="Age"/>
                            </div>

                        </div>
                        <div>
                            <input type="button" value="Create a New Character" className = "btn btn-secondary" onClick = {this.handleSubmission}/>
                        </div>


                        

                    </form>
                    <div>
                        {/* Using map function to iterate through the database */}
                        {this.state.characterArray.map((character)=>{
                            return <div key = {character._id}>
                                Name: {character.name}
                                <br/>
                                Gender: {character.gender}
                                <br/>
                                Age: {character.age}
                                <hr/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
