export const HeaderContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <header className="sticky h-24 border-b bg-background/80 backdrop-blur-md">
      {children}
    </header>
  )
}
