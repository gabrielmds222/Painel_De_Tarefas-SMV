import { FiGithub, FiLock, FiUser } from "react-icons/fi";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form onSubmit={() => {}} className="w-full max-w-md">
        <div className="w-full">
          {/* Título */}
          <h1 className="text-gray-100 text-xl text-center font-heading font-semibold mb-8">
            Sign in to your account
          </h1>

          {/* Campo de Email */}
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiUser className="text-gray-500" />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-10 py-2 border border-gray-700 bg-gray-700 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-secondary-500"
            />
          </div>

          {/* Campo de Senha */}
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiLock className="text-gray-500" />
            </span>
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-10 py-2 border border-gray-700 bg-gray-700 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-secondary-500"
            />
          </div>

          {/* Botão de Entrar */}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-full py-2 mt-8 mb-4 text-white bg-secondary-500 rounded hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500"
            >
              Entrar
            </button>

            {/* Link para registrar */}
            <a href="#" className="text-gray-100">
              Não tem uma conta?{" "}
              <span className="text-secondary-500">Registre-se</span>
            </a>
          </div>

          {/* Alternativa para entrar com GitHub */}
          <div className="flex items-center justify-center mt-8">
            <span className="text-secondary-500 text-center mr-4">
              Ou entre com
            </span>
            <button
              onClick={() => {}}
              className="flex items-center px-4 py-2 text-gray-100 bg-gray-600 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <FiGithub className="mr-2 text-gray-100" />
              Github
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
