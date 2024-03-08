import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actors = ['Shapik Khan', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Shah'];
  const singers = [
    { id:"1", name: 'Dr. Mahfuzur Rahman', age: 68 },
    { id:"2", name: 'Eva Rahman', age: 45 },
    { id:"3", name: 'Shuvro Dev', age: 58 },
    { id:"4", name: 'Pritam Hasan', age: 28 }
  ];

  return (
    <>
      <h1>Vite + React</h1>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <ToDo
        task="Core Concepts"
        isDone={false}></ToDo>
      <ToDo
        task="Learn React"
        isDone={true}></ToDo>
      <ToDo
        task="Try JSX"
        isDone={true}></ToDo> */}
      {/* <Device name="Laptop" price="60,000"></Device>
      <Device name="PC" price="160,000"></Device>
      <Device name="Mobile" price="15,000"></Device>
      <Person></Person>
      <Student grade="7" score="98" ></Student>
      <Student grade="9" score="99" ></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  return <h2>This Device: {props.name}, price: {props.price} </h2>
}

function Person() {
  const age = 31;
  const person = { name: 'Shakib', age: 12 }
  return <h3>I am {person.name}, a person, age {person.age}</h3>
}

function Student({ grade = 1, score = 0 }) {
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Grade: {grade} </p>
      <p>Score: {score} </p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid red',
    borderRadius: '12px'
  }
  return (
    <div style={developerStyle}>
      <h4>Devo Devo</h4>
      <p>Coding: </p>
    </div>
  )
}

export default App
