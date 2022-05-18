import { useState, useEffect } from 'react'
import { useAuthContext } from './hooks/useAuth'

interface AuthData {
   login: string
   password: string
}
export default function Login () {

    const [usersData , setUsersData] = useState<AuthData[] | null>(null)
    const [authData , setAuthData] = useState<AuthData>({
        login: '',
        password: ''
    })
    const { handleLogin: handleAuth } = useAuthContext()
    const handleChange = (e: any) => {
         setAuthData((prev: any) => {
             prev[e.target.name] = e.target.value 
             return {...prev} 
         })
    }
    const handleLogin = () => {
        let hasPermiss = false
        usersData?.map(user => {
            if(user.login === authData.login && user.password === authData.password){
               hasPermiss = true
            }
        })
        if(!hasPermiss){
            alert('Invalid credetntial, try again!')
            return;
        }
        handleAuth()
    }

    useEffect(() => {
      const users = localStorage.getItem('users')
      if(users){
          setUsersData(JSON.parse(users))
      }
    }, [])

    return(
        <div>
            <input 
                value={authData.login}
                name={'login'}
                onChange={handleChange}
            />
            <input
                value={authData.password}
                name={'password'}
                onChange={handleChange}
            />
            <button onClick={handleLogin}>Sign IN</button>
        </div>
    )
}