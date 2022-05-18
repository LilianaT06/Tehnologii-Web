import { 
    createContext, 
    useContext,
    useState,
    useEffect
} from "react";
const noop = () => {}

interface Context {
    isLogined: boolean | null,
    LogOut: Function
    handleLogin: Function
}
const AuthContext = createContext<Context>({
      isLogined: null,
      LogOut: noop,
      handleLogin: noop
})
export const useAuthContext = () => {
    return useContext(AuthContext)
}

const users = [
    {
        login: 'admin1',
        password: 'admin1'
    },
    {
        login: 'admin1239',
        password: 'admin1239'
    }
]

export  const AuthWrapper =  ({ children }: any) => {
    const [ isLogined, setIsLogined] = useState<boolean>(false)
    const LogOut = () => {
        localStorage.removeItem('token')
        setIsLogined(false)
        window.location.replace('/')
    }
    const handleLogin = () => {
        localStorage.setItem('token' , '32e42edwqed22324232342')
        setIsLogined(true)
        window.location.replace('/panel')
    }

    const Provider = {
        handleLogin,
        LogOut,
        isLogined
    }

    useEffect(() => {
       if(!localStorage.getItem('users')){
           localStorage.setItem('users', JSON.stringify(users))
       }
       if(localStorage.getItem('token')){
           setIsLogined(true)
       }   
    }, [])
  
    return (
     <AuthContext.Provider value={Provider}>
         { children }
     </AuthContext.Provider>
    )
 }