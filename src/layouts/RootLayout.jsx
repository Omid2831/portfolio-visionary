import Header from '../shared/components/ui/Header'
import Footer from '../shared/components/ui/Footer'


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