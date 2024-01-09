import { Logo } from "./_components/logo"

const AuthLayout = ({children}: {children: React.ReactNode;}) => { 
  return (
    <div className="h-full flex flex-col justify-center items-center bg-blue-600 gap-y-4">
       {/* <nav className="p-1 bg-red-400">AuthLayout</nav> */}
       <Logo />
        {children}
    </div>
  )
}

export default AuthLayout;