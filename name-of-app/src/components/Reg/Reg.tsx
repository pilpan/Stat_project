import React from 'react'

export const Reg:React.FC =() => {
  const subHandler  = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };
    console.log({name: target.name.value, email: target.email.value, password: target.password.value});
  }
  return (
    <div className='container'>
      <form onSubmit={subHandler}>
    <label>
    Name:
    <input type="text" name="name" />
  </label>
    <label>
    Email:
    <input type="text" name="email" />
  </label>
    <label>
    Password:
    <input type="password" name="password" />
  </label>
    <button type="submit" value="Submit">
    Sumbit
    </button>
    </form>
    </div>
  )
}
