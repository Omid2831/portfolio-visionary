const Footer = () => {

  // Get the current year for the copyright notice
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center w-full text-gray-400 py-4 border-t border-gray-700 mt-8">
      <p className="text-sm">&copy; {currentYear} My Application, My Portfolio</p>
    </footer>
  )
}

export default Footer