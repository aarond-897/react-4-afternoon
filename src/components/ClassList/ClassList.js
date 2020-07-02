import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state={
      students: []
    }
  }

  componentDidMount(){
    console.log(this.props)
    axios.get( `http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(response=>{
      console.log(response)
      this.setState({
        students: response.data
      })
    })
  }

  render() {
    const mappedStudents = this.state.students.map(student=>(
      <Link to={`/student/${student.id}`} key={student.id}>
      <h3 > {student.first_name} {student.last_name}</h3>
      </Link>
    ))
    return (
      <div className="box">
        <h1 >{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    )
  }
}