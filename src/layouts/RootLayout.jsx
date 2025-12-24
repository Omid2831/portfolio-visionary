import Header from '../components/uidesign/Header'
import Footer from '../components/uidesign/Footer'


const RootLayout = ({ children }) => {
    return (
        <div
        className='flex flex-col min-h-screen px-3 py-4'>
            <Header />

            <main className='flex-1'>
                {children}
            </main>


            <Footer />
        </div>
    )
}

export default RootLayout