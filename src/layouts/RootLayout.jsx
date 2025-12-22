const RootLayout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Welcome to the Root Layout</h1>
            </header>

            <main>
                {children}
            </main>


            <footer>
                <p>&copy; 2024 My Application</p>
            </footer>
        </div>
    )
}

export default RootLayout