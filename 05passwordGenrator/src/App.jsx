import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState
    (false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //use ref hook

  const passwordRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) str += "0123456789 "
    if (charAllowed) str += "!@#$%^&*(){}_+=-"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
 
  const copyPasswordToClibboard = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password]);

  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, charAllowed, passwordGenrator]);
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-[15%] py-3 text-orange-600  bg-gray-400 '>

        <h1 className='text-white text-center my-3'>Password Genrator</h1>


        <div className='flex shadow-lg overflow-hidden mb-4 rounded-lg'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClibboard}    
          className='px-4 py-2 my-auto bg-blue-500  rounded-r-lg text-white shrink-0 outline-none'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 '>
            <input 
             
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer  '
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 '>
            <input type="checkbox"
              checked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1' >
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='CharInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="CharInput">Charcrator</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
