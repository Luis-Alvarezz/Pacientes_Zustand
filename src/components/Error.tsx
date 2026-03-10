// rafc para crear la esctructura basica

export const Error = ({children}: {children: React.ReactNode}) => {
  return (
    <p className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase text-sm">
      { children }
    </p>
  )
}
