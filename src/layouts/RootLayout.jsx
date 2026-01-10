import Header from '../components/uidesign/Header'
import Footer from '../components/uidesign/Footer'


const RootLayout = ({ children }) => {
    return (
        <div
        className='flex flex-col justify-center items-center px-3 py-4'>

            <main className='flex flex-1 justify-center'>
                {children}
            </main>


        </div>
    )
}

export default RootLayout