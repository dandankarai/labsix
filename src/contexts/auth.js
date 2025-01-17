const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    const userToken = localStorage.getItem('user_token')
    const userStorage = localStorage.getItem('users_db')

    if (userToken && userStorage) {
      const hasUser = JSON.parse(userStorage)?.filter((user) => user.email)

      if (hasUser) setUser(hasUser[0])
    }
  }, [])

  const signin = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem('users_db'))

    const hasUser = userStorage?.filter((user) => user.email === email)

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2)
        localStorage.setItem('user_token', JSON.stringify({ email, token }))
        setUser({ email, password })
        return
      } else {
        return "Email ou senha incorretos"
      }
    } else {
      return "Usuário não cadastrado"
    }
  }

  const signup = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem('users_db'))

    const hasUser = userStorage?.filter((user) => user.email === email)

    if (hasUser?.length) {
      return 'Já tem uma conta com esse E-mail'
    }

    let newUser

    if (userStorage) {
      newUser = [...userStorage, { email, password }]
    } else {
      newUser = [{ email, password }]
    }

    localStorage.setItem("users_db", JSON.stringify(newUser))
    return
  }

  const signout = () => {
    setUser(null)
    localStorage.removeItem('user_token')
  }
  return <AuthContext.Provider
    value={{ user, signed: !!user, signin, signup, signout }}
  >{children}</AuthContext.Provider>
}