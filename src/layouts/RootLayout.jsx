import Header from '../shared/components/Header'

const RootLayout = ({ children }) => {
    return (
        <div
        className='min-h-screen px-3 py-4'>
            <Header />

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