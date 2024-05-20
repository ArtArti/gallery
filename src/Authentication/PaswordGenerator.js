import React , {useCallback, useState} from 'react'



function PaswordGenerator() {

     const [password, setPassword] = useState("");
     const [length, setLength] = useState(8);
     const [numAllowed, setNumAllowed] = useState(false);
     const [charAllowed, setCharAllowed] = useState(false);

     const generator = useCallback(()=>{
        let pass=""
        let str ="ABCDEFGJIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numAllowed) str+= "123456789"
        if(charAllowed) str+="@#$%^&*!~`"

        for (let i = 1; i < str.length; i++) {
          const random = Math.floor(Math.random() * str.length) + 1; 
          pass = str.charAt(random) 
        }
        setPassword(pass);
     },[length,numAllowed,charAllowed ,setPassword]);

  return (
    <>

    </>
  )
}

export default PaswordGenerator